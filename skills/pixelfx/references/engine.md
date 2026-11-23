# Mini engine and layer templates

A tiny two-buffer pixel engine written for Subclip layers. It follows the pixelfx design: one **color** buffer (opaque, dithered or translucent pixels) and one **light** buffer (additive glow), drawn at a small pixel resolution and scaled up by a whole number with no smoothing. Everything is a pure function of time, so scrubbing, seeking and export all give the same frame.

This is original glue code that follows the pixelfx structure (Bayer dithering, ramps, seeded random). It is not a copy of pixelfx's source. Copy it into the layer, then write the effect below it.

## Rules the engine relies on

- No `Math.random()`, `Date.now()` or `performance.now()`. Use `rng(seed)`.
- No `requestAnimationFrame` loop or timer as the clock. The layer's time comes from the seek event.
- A simulated effect steps a fixed-timestep simulation from 0 to t. If t goes backwards, restart from 0. Same seed, same frame, in any order.
- A pure effect (loops, auras, flames) is a function of t alone. A loop uses phases like `(t / LOOP * n + i / count) % 1` so the last frame equals the first.
- One-shots must draw nothing at the end of their duration.
- Keep the pixel canvas small (160 by 90 up to 320 by 180). Scale by a whole number.

## The engine (JavaScript, paste into the layer script)

```js
// pixelfx-mini: a tiny two-buffer pixel engine (color + additive light). Pure functions of time.
const W = 160, H = 90;                         // effect resolution in pixels
const color = new Uint8ClampedArray(W * H * 4); // RGBA, dithered or translucent
const light = new Float32Array(W * H * 3);      // additive glow, RGB 0..255+

const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const hex = (h) => { const s = h.replace('#', ''); const v = parseInt(s.length === 3 ? s.replace(/./g, '$&$&') : s, 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; };
const fit = (list, n) => { const r = list.map(hex); return Array.from({ length: n }, (_, i) => r[Math.round((i * (r.length - 1)) / Math.max(1, n - 1))]); };
const at = (r, t) => r[clamp(Math.floor(t * r.length), 0, r.length - 1)];   // pick a step, never fade between two
const rng = (seed) => { let s = seed >>> 0 || 1; return () => { s = (s + 0x6d2b79f5) >>> 0; let t = Math.imul(s ^ (s >>> 15), s | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);

function clear() { color.fill(0); light.fill(0); }
function px(x, y, c, a = 1) {                   // dithered pixel: alpha below 1 becomes an ordered dither
  x = Math.floor(x); y = Math.floor(y);
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  if (a < 1 && a <= BAYER[((y & 3) << 2) | (x & 3)]) return;
  const i = (y * W + x) * 4; color[i] = c[0]; color[i + 1] = c[1]; color[i + 2] = c[2]; color[i + 3] = 255;
}
function blend(x, y, c, a) {                    // truly translucent pixel (smoke, mist)
  x = Math.floor(x); y = Math.floor(y);
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = (y * W + x) * 4, o = color[i + 3] / 255, na = a + o * (1 - a);
  for (let k = 0; k < 3; k++) color[i + k] = (c[k] * a + color[i + k] * o * (1 - a)) / (na || 1);
  color[i + 3] = na * 255;
}
function disc(cx, cy, r, c, a) { for (let y = Math.floor(cy - r); y <= cy + r; y++) for (let x = Math.floor(cx - r); x <= cx + r; x++) { const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy); if (d <= r) blend(x, y, c, a * (1 - (d / r) * 0.6)); } }
function line(x0, y0, x1, y1, c, a = 1) { const n = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0))) || 1; for (let i = 0; i <= n; i++) px(lerp(x0, x1, i / n), lerp(y0, y1, i / n), c, a); }
function glow(cx, cy, r, c, k = 1) {            // additive light with soft falloff
  for (let y = Math.max(0, Math.floor(cy - r)); y <= Math.min(H - 1, Math.ceil(cy + r)); y++)
    for (let x = Math.max(0, Math.floor(cx - r)); x <= Math.min(W - 1, Math.ceil(cx + r)); x++) {
      const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy) / r; if (d >= 1) continue;
      const f = (1 - d) * (1 - d) * k, i = (y * W + x) * 3; light[i] += c[0] * f; light[i + 1] += c[1] * f; light[i + 2] += c[2] * f;
    }
}

const out = new ImageData(W, H);
function composite() {                           // color + light into transparent RGBA
  for (let p = 0; p < W * H; p++) {
    const i = p * 4, j = p * 3; let a = color[i + 3];
    const lr = light[j], lg = light[j + 1], lb = light[j + 2], la = Math.min(255, Math.max(lr, lg, lb));
    const na = Math.max(a, la), pa = a / 255;
    out.data[i] = na ? Math.min(255, (color[i] * pa + lr) / (na / 255)) : 0;
    out.data[i + 1] = na ? Math.min(255, (color[i + 1] * pa + lg) / (na / 255)) : 0;
    out.data[i + 2] = na ? Math.min(255, (color[i + 2] * pa + lb) / (na / 255)) : 0;
    out.data[i + 3] = na;
  }
  return out;
}

const small = document.createElement('canvas'); small.width = W; small.height = H;
const sctx = small.getContext('2d');
const view = document.getElementById('view'), vctx = view.getContext('2d');   // view is W*SCALE by H*SCALE
function present(scale) { sctx.putImageData(composite(), 0, 0); vctx.clearRect(0, 0, W * scale, H * scale); vctx.imageSmoothingEnabled = false; vctx.drawImage(small, 0, 0, W * scale, H * scale); }
```

`present(scale)` uploads the low resolution buffer and draws it onto the `#view` canvas with smoothing off. The `#view` canvas size is `W * scale` by `H * scale`.

## Example 1: a pure loop (torch flame)

```js
// Pure loop: a torch flame. Every particle is a function of the loop phase, so frame 0 equals the last frame.
const FIRE = fit(['#1f0b10', '#4a1118', '#8c1d1c', '#cc3a1a', '#f2701f', '#ffae35', '#ffe27a', '#fff8d6'], 8);
const LOOP = 2;                                   // seconds, the layer's length
function drawFlame(t) {
  clear();
  const base = { x: W / 2, y: H - 14 };
  glow(base.x, base.y - 18, 46, FIRE[4], 0.55);   // wide soft pool
  glow(base.x, base.y - 10, 16, FIRE[6], 0.9);    // tight hot core
  const R = rng(7);                               // reseeded every frame, so the same i gets the same numbers
  for (let i = 0; i < 70; i++) {
    const ph = ((t / LOOP) * 2 + i / 70) % 1;     // 2 cycles per loop keeps it seamless
    const rx = R() * 2 - 1, rs = R(), wob = R() * TAU;
    const x = base.x + rx * (1 - ph) * 9 + Math.sin(ph * TAU * 2 + wob) * 2.5 * ph;
    const y = base.y - ph * (34 + rs * 16);
    const r = (1 - ph) * (5 + rs * 3);
    const c = at(FIRE, 1 - ph * 0.95);            // hot at the base, cooling as it rises
    if (r < 0.8) { px(x, y, FIRE[3], 1 - ph); continue; }
    for (let a = 0; a < r * r * 2; a++) px(x + (R() * 2 - 1) * r, y + (R() * 2 - 1) * r * 0.9, c, 1);
    glow(x, y, r * 3, c, 0.12);
  }
}
```

## Example 2: a simulated one-shot (spark burst)

```js
// Simulated one-shot: a spark burst. Step a fixed-timestep simulation from 0 to t so any seek order gives the same frame.
const SP = fit(['#3a1208', '#a8301a', '#e0561e', '#ffc46a', '#ffffff'], 5);
let sim = null;
function makeSim(seed) {
  const R = rng(seed), parts = [];
  for (let i = 0; i < 40; i++) { const a = R() * TAU, v = 40 + R() * 120; parts.push({ x: W / 2, y: H - 22, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 50, life: 0.3 + R() * 0.5 }); }
  return { t: 0, seed, parts };
}
function stepTo(t) {
  if (!sim || t < sim.t - 1e-9) sim = makeSim(3);     // rewind: restart from zero
  const DT = 1 / 120;
  while (sim.t < t - 1e-9) {
    for (const p of sim.parts) { p.vy += 400 * DT; p.x += p.vx * DT; p.y += p.vy * DT; p.vx *= 0.995; if (p.y > H - 22) { p.y = H - 22; p.vy *= -0.4; } }
    sim.t += DT;
  }
}
function drawBurst(t) {
  clear(); stepTo(t);
  const flash = clamp(1 - t / 0.12);
  if (flash > 0) { glow(W / 2, H - 22, 40, SP[3], flash); disc(W / 2, H - 22, 7 * flash, SP[4], 1); }
  for (const p of sim.parts) {
    if (t > p.life) continue;
    const k = 1 - t / p.life, c = at(SP, k);
    line(p.x, p.y, p.x - p.vx * 0.02, p.y - p.vy * 0.02, c, 1);   // a speed-stretched streak
    glow(p.x, p.y, 6, c, 0.4 * k);
  }
}
```

Both were checked headlessly for the three properties that matter: the loop's last frame equals its first, seeking forward and back gives identical frames, and pixels are drawn. They were not judged visually. Look at real frames with `view_current_frame` and refine (see techniques.md).

## HyperFrames layer (default)

HyperFrames captures a real page, so a plain `<canvas>` works and the pixels are exact. Use `add_runtime_layer` with `kind: "hyperframes"`. Get the exact current rules from `subclip-hyperframes-layer` first. The shell:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
  #scene { position: relative; width: 960px; height: 540px; overflow: hidden; background: transparent; }
  #view { position: absolute; left: 0; top: 0; width: 960px; height: 540px; image-rendering: pixelated; }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="2" data-width="960" data-height="540">
  <canvas id="view" width="960" height="540"></canvas>
</div>
<script>
  // 1. paste the engine here (W = 160, H = 90, so the scale is 6)
  // 2. paste the effect functions (drawFlame, or your own)
  const SCALE = 6, DURATION = 2;
  function renderAt(t) { drawFlame(t % DURATION); present(SCALE); }   // for a one-shot: drawBurst(t)
  window.addEventListener('hf-seek', (e) => { renderAt(e.detail.time); });
  renderAt(0);
  const tl = gsap.timeline({ paused: true }); tl.to({}, { duration: DURATION });   // the layer's registered timeline
  window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

Notes: set `data-duration` to the real length. A transparent background lets it overlay footage. Do not put `filter` or `backdrop-filter` on the canvas or its parents. Pick the layer rectangle with the smallest useful box on the canvas (a contained box, not full frame) and look at the project frame before placing it. A full-frame transition is the one exception.

## Remotion layer (only when the creator asked for Remotion)

Subclip exports Remotion layers with a client-side renderer that re-draws elements from their styles and does not list a raw `<canvas>` as supported. Do the drawing offscreen and show the result as an image, scaled up by whole numbers before encoding so nearest-neighbour is baked in:

```tsx
import React, {useMemo} from 'react';
import {AbsoluteFill, Img, useCurrentFrame, useVideoConfig} from 'remotion';

// engine code goes above (without the #view and present parts), then:
const SCALE = 6;
const big = document.createElement('canvas'); big.width = W * SCALE; big.height = H * SCALE;

export default function PixelEffect() {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const src = useMemo(() => {
    drawFlame(frame / fps);                       // your pure or simulated effect
    sctx.putImageData(composite(), 0, 0);         // small buffer
    const g = big.getContext('2d')!;
    g.clearRect(0, 0, big.width, big.height); g.imageSmoothingEnabled = false;
    g.drawImage(small, 0, 0, big.width, big.height);
    return big.toDataURL('image/png');
  }, [frame, fps]);
  return <AbsoluteFill><Img src={src} style={{width: '100%', height: '100%'}} /></AbsoluteFill>;
}
```

This pattern was not run inside Subclip. Run `validate_runtime_layer_source`, fix every "Export can't draw this" warning, check a frame with `view_current_frame`, and check an export. If the export is missing the effect, rebuild it as a HyperFrames layer (see `subclip-export` and `subclip-remotion-layer`, export recovery). Splitting a Remotion layer restarts `useCurrentFrame()` from zero, so keep each effect in its own item.
