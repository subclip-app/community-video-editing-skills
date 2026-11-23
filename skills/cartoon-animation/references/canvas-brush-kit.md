# Canvas brush kit

A small, deterministic canvas 2D toolkit for hand-painted cartoon shots in a Subclip HyperFrames layer. It ports the look of the original kit (flat color wash plus boiling ink outlines, soft watercolor fills, paper grain, additive light, brush wipes and irises) from p5.js and p5.brush to plain canvas code.

Why not p5.brush: Subclip's layer runtime only allows verified, pinned scripts (GSAP 3.15.0, pinned Three.js, Lottie), and p5.brush paints with WebGL and random numbers that are not seekable. The code below is self-contained, uses no outside script besides GSAP, and every frame is a pure function of time, so preview, seeking and export always agree. Resolve this again if a p5 build is later added to the runtime allowlist (check with `validate_runtime_layer_source`).

The look is an approximation of p5.brush. It has no true pigment mixing, so keep light colors on top of dark ones, use `glow` for anything that shines, and keep washes at full opacity.

## How a shot is built

- One layer per shot, 2 to 6 seconds, full frame (1920x1080), opaque paper background. Each shot paints its whole frame, background included.
- A shot is `shot(ctx, t, lt, dur)`: `t` is time in the layer, `lt` the same (or time inside a sub-shot), `dur` the layer length. It must draw the same frame for the same `t`. No state between frames, no `Math.random()`, no `Date.now()`, no physics that integrates frame by frame.
- Call `setTime(t)` first, then `boilSeed(key)` before each separate element. Boil reseeds 12 times a second, so still things look hand-inked. Give every element its own key, or one moving element will make everything drawn after it jitter.
- A paused GSAP timeline drives a proxy value; `onUpdate` repaints. See the layer template at the end.

## The kit (paste into the layer script)

```js
// ===== Cartoon brush kit (canvas 2D, deterministic, pure functions of time) =====
const W = 1920, H = 1080, TAU = Math.PI * 2, BOIL = 12, BPM = 100;
const PAL = { paper: '#F3EBDD', ink: '#2B2A33', cream: '#FFF6E6', clay: '#D9805F', clayDk: '#B05F43',
  sky: '#BFD9E6', sap: '#8FB38A', night: '#2D3052', rose: '#E7A3A8', ochre: '#E3B05B', teal: '#5FA8A3' };

// --- math and easing (all closed form) ---
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, k) => a + (b - a) * k;
const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
const ease = k => k * k * (3 - 2 * k);
const easeIn = k => k * k;
const easeOut = k => 1 - (1 - k) * (1 - k);
const backOut = k => { const c = 1.9; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
const wob = (t, f, p = 0) => Math.sin(TAU * (t * f + p));
function kf(t, keys, e = ease) {                       // keyframes [[t0, v0], [t1, v1], ...]
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) if (t <= keys[i][0]) {
    const k = e(seg(t, keys[i - 1][0], keys[i][0]));
    const a = keys[i - 1][1], b = keys[i][1];
    return Array.isArray(a) ? a.map((v, j) => lerp(v, b[j], k)) : lerp(a, b, k);
  }
  return keys[keys.length - 1][1];
}
function spring(t, t0, k = 1, w = 14) {                // damped wobble after an event at t0
  const d = t - t0; return d < 0 ? 0 : k * Math.exp(-5 * d) * Math.sin(w * d);
}
const BEAT = 60 / BPM;
const pulse = (t, k = 6) => Math.exp(-k * ((t / BEAT) % 1));   // 1 on each beat, then decays

// --- seeded randomness: never Math.random ---
const hash = n => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
let _s = 1, _t = 0;
const setTime = t => { _t = t; };                      // call first in every frame
const rnd = () => { _s = (_s * 1664525 + 1013904223) >>> 0; return _s / 4294967296; };
function boilSeed(key) {                                // call before each separate element
  let h = 7; for (const c of String(key)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  _s = (h + Math.floor(_t * BOIL) * 9973) >>> 0;        // changes 12 times a second: the linework boils
}
const jit = a => (rnd() - .5) * 2 * a;

// --- shapes ---
const ellPts = (cx, cy, rx, ry, n = 28, j = 0, rot = 0) => Array.from({ length: n }, (_, i) => {
  const a = TAU * i / n, x = Math.cos(a) * rx, y = Math.sin(a) * ry;
  return [cx + x * Math.cos(rot) - y * Math.sin(rot) + jit(j), cy + x * Math.sin(rot) + y * Math.cos(rot) + jit(j)];
});
const rectPts = (x, y, w, h, j = 0) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]].map(p => [p[0] + jit(j), p[1] + jit(j)]);
const rrPts = (x, y, w, h, r, n = 6) => {
  const o = [], c = [[x + w - r, y + r, 1.5], [x + w - r, y + h - r, 0], [x + r, y + h - r, .5], [x + r, y + r, 1]];
  for (const [cx, cy, q] of c) for (let i = 0; i <= n; i++) { const a = (q + i / n * .5) * Math.PI; o.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
  return o;
};
const starPts = (cx, cy, r, inner = .5, n = 5, rot = -Math.PI / 2) => Array.from({ length: n * 2 }, (_, i) => {
  const a = rot + Math.PI * i / n, rr = i % 2 ? r * inner : r; return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
});
function ribbon(P, w0, w1) {                             // tapered ribbon along a path, one outline
  const L = [], R = [];
  P.forEach((p, i) => {
    const q = P[Math.min(i + 1, P.length - 1)], o = P[Math.max(i - 1, 0)];
    const dx = q[0] - o[0], dy = q[1] - o[1], d = Math.hypot(dx, dy) || 1, w = lerp(w0, w1, i / (P.length - 1)) / 2;
    L.push([p[0] - dy / d * w, p[1] + dx / d * w]); R.push([p[0] + dy / d * w, p[1] - dx / d * w]);
  });
  return L.concat(R.reverse());
}

// --- painting: flat wash + boiling ink outline, soft watercolour fill, light ---
function path(ctx, pts, closed = true) {                 // smooth curve through points
  ctx.beginPath();
  const n = pts.length; if (!n) return;
  ctx.moveTo((pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2);
  if (!closed) ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    ctx.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
  }
  if (closed) ctx.closePath();
}
function inkLine(ctx, pts, sw = 3, col = PAL.ink, dry = false) {
  ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = col;
  for (let pass = 0; pass < (dry ? 4 : 2); pass++) {     // two passes with small offsets = hand-inked line
    ctx.globalAlpha = dry ? .35 : (pass ? .45 : .9); ctx.lineWidth = sw * (pass ? .6 : 1);
    const q = pts.map(p => [p[0] + jit(sw * .35), p[1] + jit(sw * .35)]);
    ctx.beginPath(); ctx.moveTo(q[0][0], q[0][1]);
    for (let i = 1; i < q.length - 1; i++) ctx.quadraticCurveTo(q[i][0], q[i][1], (q[i][0] + q[i + 1][0]) / 2, (q[i][1] + q[i + 1][1]) / 2);
    ctx.lineTo(q[q.length - 1][0], q[q.length - 1][1]); ctx.stroke();
  }
  ctx.restore();
}
function paint(ctx, pts, o = {}) {                       // one shape: wash and/or watercolour fill, ink outline
  const { wash, washOp = 1, fill, bleed = .08, ink = PAL.ink, sw = 3 } = o;
  if (fill) {                                            // watercolour: stacked low-alpha, slightly grown, jittered copies
    const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length, cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
    for (let l = 0; l < 5; l++) {
      const g = 1 + bleed * (l / 4 - .3);
      path(ctx, pts.map(p => [cx + (p[0] - cx) * g + jit(4), cy + (p[1] - cy) * g + jit(4)]));
      ctx.globalAlpha = .16; ctx.fillStyle = fill; ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  if (wash) { path(ctx, pts); ctx.globalAlpha = washOp; ctx.fillStyle = wash; ctx.fill(); ctx.globalAlpha = 1; }
  if (ink) { const c = pts.concat([pts[0]]); inkLine(ctx, c, sw, ink); }
}
function glow(ctx, x, y, r, col = '#FFD27A', a = .8) {   // light is additive, so it never turns muddy
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.globalAlpha = a; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.restore();
}
function paper(ctx, base = PAL.paper) {                  // static grain: same every frame, so it does not flicker
  ctx.fillStyle = base; ctx.fillRect(0, 0, W, H);
  ctx.save(); ctx.globalAlpha = .05; ctx.fillStyle = '#5a4a3a';
  for (let i = 0; i < 700; i++) ctx.fillRect(hash(i) * W, hash(i + 999) * H, 2 + hash(i + 5) * 2, 2);
  ctx.restore();
}

// --- camera and transitions (screen space after camEnd) ---
function camBegin(ctx, cx, cy, zoom = 1, rot = 0) {
  ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(rot); ctx.scale(zoom, zoom); ctx.translate(-cx, -cy);
}
const camEnd = ctx => ctx.restore();
function brushWipe(ctx, p, cols = [PAL.clay, PAL.night]) { // fat strokes cover the frame (0 to .5), then drag off (.5 to 1)
  const bars = 6, bh = H / bars + 24;
  for (let i = 0; i < bars; i++) {
    const d = i * .05, a = clamp((p - d) / .5, 0, 1), b = clamp((p - .5 - d) / .5, 0, 1);
    const x0 = lerp(-W * .1, W * 1.1, easeOut(b)), x1 = lerp(-W * .1, W * 1.1, easeOut(a));
    if (x1 <= x0) continue;
    ctx.fillStyle = cols[i % cols.length];
    path(ctx, [[x0, i * bh - 12], [x1 + 40, i * bh - 6], [x1, i * bh + bh], [x0 - 30, i * bh + bh - 8]]); ctx.fill();
  }
}
function iris(ctx, cx, cy, r, col = PAL.ink) {           // everything outside radius r is covered
  ctx.save(); ctx.fillStyle = col; ctx.beginPath(); ctx.rect(0, 0, W, H);
  ctx.moveTo(cx + Math.max(0, r), cy); ctx.arc(cx, cy, Math.max(0, r), 0, TAU, true); ctx.fill('evenodd'); ctx.restore();
}

// --- a starter character: your own, not a mascot. Change anything. ---
const EMO = {                                            // face, colour and idle motion per emotion
  neutral: { eyes: 'normal', mouth: null }, happy: { eyes: 'happy', mouth: 'smile' },
  excited: { eyes: 'wide', mouth: 'grin' }, sad: { eyes: 'sad', mouth: 'frown' },
  surprised: { eyes: 'wide', mouth: 'o' }, bored: { eyes: 'half', mouth: 'flat' },
  scared: { eyes: 'wide', mouth: 'wobble' }, idea: { eyes: 'wide', mouth: 'smile' },
};
function emotions(t, keys) {                             // keys [[time, name], ...]; anticipation squint then a take
  let cur = keys[0], prev = null;
  for (const k of keys) if (t >= k[0]) { prev = cur; cur = k; }
  const dt = t - cur[0], next = keys.find(k => k[0] > t);
  let squint = 0, sq = 0;
  if (next && next[0] - t < .15) { squint = 1 - (next[0] - t) / .15; sq = .06 * squint; }   // anticipation
  if (dt >= 0 && dt < .5) sq -= .12 * Math.exp(-6 * dt) * Math.cos(16 * dt);                // take and overshoot
  return { ...EMO[cur[1]], squint, sq, dy: 0 };
}
function bean(ctx, x, y, u, o = {}) {                    // (x, y) = ground point; u = size unit; body is 10u wide
  const { dx = 0, dy = 0, sq = 0, rot = 0, flip = false, lookX = 0, lookY = 0, eyes = 'normal', mouth = null,
    squint = 0, aL = -.6, aR = -.6, col = PAL.clay, seed = 'bean' } = o;
  boilSeed(seed);
  ctx.save(); ctx.translate(x + dx * u, y + dy * u); ctx.rotate(rot); ctx.scale((flip ? -1 : 1) * (1 + sq), 1 - sq);
  ctx.save(); ctx.globalAlpha = .18; ctx.fillStyle = PAL.ink;   // soft shadow
  ctx.beginPath(); ctx.ellipse(0, 0, 5 * u, .9 * u, 0, 0, TAU); ctx.fill(); ctx.restore();
  for (const s of [-1, 1]) paint(ctx, rrPts(s * 2.4 * u - .9 * u, -1.6 * u, 1.8 * u, 1.7 * u, .5 * u), { wash: PAL.clayDk, sw: u * .12 });
  for (const [s, a] of [[-1, aL], [1, aR]]) {            // arms swing from the shoulders, then ink the nub
    const sx = s * 4.8 * u, sy = -3.6 * u, ex = sx + s * Math.cos(a) * 2.4 * u, ey = sy - Math.sin(a) * 2.4 * u;
    paint(ctx, ribbon([[sx, sy], [(sx + ex) / 2, (sy + ey) / 2 - .2 * u], [ex, ey]], 1.3 * u, .9 * u), { wash: col, sw: u * .12 });
  }
  paint(ctx, ellPts(0, -4 * u, 5 * u, 3.9 * u, 30, u * .04), { wash: col, sw: u * .14 });
  const ey = -4.6 * u + lookY * .35 * u, exs = [-1.9 * u, 1.9 * u];
  exs.forEach((ex, i) => {
    const px = ex + lookX * .45 * u;
    if (eyes === 'happy') inkLine(ctx, [[ex - .7 * u, ey + .3 * u], [ex, ey - .4 * u], [ex + .7 * u, ey + .3 * u]], u * .16);
    else if (eyes === 'closed' || squint > .6) inkLine(ctx, [[ex - .7 * u, ey], [ex + .7 * u, ey]], u * .16);
    else {
      const h = (eyes === 'wide' ? 1.5 : eyes === 'half' ? .7 : 1.1) * u * (1 - squint * .6);
      paint(ctx, ellPts(ex, ey, .75 * u, h, 14), { wash: PAL.cream, sw: u * .1 });
      paint(ctx, ellPts(px, ey + lookY * .2 * u, .32 * u, .4 * u, 10), { wash: PAL.ink, ink: null });
    }
    if (eyes === 'sad') inkLine(ctx, [[ex - .8 * u, ey - 1.3 * u + (i ? 0 : .5 * u)], [ex + .8 * u, ey - 1.3 * u + (i ? .5 * u : 0)]], u * .14);
  });
  const my = -2.7 * u;
  if (mouth === 'smile') inkLine(ctx, [[-1.2 * u, my], [0, my + .6 * u], [1.2 * u, my]], u * .15);
  else if (mouth === 'grin') paint(ctx, [[-1.3 * u, my], [1.3 * u, my], [.9 * u, my + 1 * u], [-.9 * u, my + 1 * u]], { wash: PAL.cream, sw: u * .12 });
  else if (mouth === 'frown') inkLine(ctx, [[-1.1 * u, my + .5 * u], [0, my - .1 * u], [1.1 * u, my + .5 * u]], u * .15);
  else if (mouth === 'o') paint(ctx, ellPts(0, my + .2 * u, .55 * u, .75 * u, 12), { wash: PAL.ink, ink: null });
  else if (mouth === 'flat') inkLine(ctx, [[-1 * u, my + .2 * u], [1 * u, my + .2 * u]], u * .15);
  else if (mouth === 'wobble') inkLine(ctx, [[-1.2 * u, my + .3 * u], [-.4 * u, my - .1 * u], [.4 * u, my + .4 * u], [1.2 * u, my]], u * .15);
  ctx.restore();
}
function jump(t, t0, t1, h = 3) {                        // crouch (anticipation), stretch, arc, squash-land
  if (t < t0 - .2 || t > t1 + .3) return { dy: 0, sq: 0 };
  if (t < t0) return { dy: .3 * ease(seg(t, t0 - .2, t0)), sq: .15 * ease(seg(t, t0 - .2, t0)) };
  if (t <= t1) { const k = seg(t, t0, t1); return { dy: -h * 4 * k * (1 - k), sq: -.1 * Math.sin(k * Math.PI) }; }
  const d = t - t1; return { dy: 0, sq: .18 * Math.exp(-9 * d) * Math.cos(18 * d) };
}
```

## Layer template

Wrap the kit and your shot functions like this. Set `data-duration` and the proxy duration to the layer length. Register the timeline under the same key as `data-composition-id`.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
  #scene { position: relative; width: 1920px; height: 1080px; overflow: hidden; }
  canvas { display: block; width: 1920px; height: 1080px; }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="shot-a" data-start="0" data-duration="4" data-width="1920" data-height="1080">
  <canvas id="c" width="1920" height="1080"></canvas>
</div>
<script>
  // 1. paste the kit here
  // 2. your shot function, for example the one below
  // 3. the driver:
  const ctx = document.getElementById('c').getContext('2d');
  const DUR = 4, P = { t: 0 };
  function frame(t) { ctx.clearRect(0, 0, W, H); shot(ctx, t, t, DUR); }
  frame(0);
  const tl = gsap.timeline({ paused: true });
  tl.to(P, { t: DUR, duration: DUR, ease: 'none', onUpdate: () => frame(P.t) }, 0);
  window.__timelines['shot-a'] = tl;
</script>
</body>
</html>
```

## Example shot (acted emotions, a jump, a transition in)

```js

function shot(ctx, t, lt, dur) {
  setTime(t); paper(ctx, PAL.sky);
  camBegin(ctx, 960 + 20 * Math.sin(lt * .6), 540, 1 + .02 * lt);
  boilSeed('ground'); paint(ctx, ellPts(960, 1180, 1500, 400, 40, 3), { wash: PAL.sap, sw: 2 });
  const m = emotions(lt, [[0, 'bored'], [1.2, 'surprised'], [1.9, 'excited']]);
  const j = jump(lt, 2.4, 2.9, 3);
  bean(ctx, 960, 860, 26, { ...m, dy: m.dy + j.dy, sq: m.sq + j.sq, aL: kf(lt, [[0, -.6], [1.9, 1.2]]), aR: -.3 });
  camEnd(ctx);
  if (lt < .45) iris(ctx, 960, 700, lerp(0, 1500, easeIn(lt / .45)));
}
```

Transitions between layers: the outgoing shot draws `brushWipe(ctx, p)` with `p` from 0 to 0.5 over its last 0.3 s; the incoming shot draws it from 0.5 to 1 over its first 0.3 s. The cut happens under full cover. Match the iris center to the character's screen position.

## Tips

- Cost scales with the number of shapes. Hundreds are fine, thousands are not. Keep each frame light, because the layer is rendered frame by frame at export.
- Guard geometry that can degenerate (a `Math.acos` of a ratio above 1, a zero-length ribbon) so no NaN reaches the canvas.
- Under a zoomed camera, outline widths grow with the zoom: lower `sw` on small shapes in close-ups.
- Colors: no pure black or pure white. Use `PAL.ink` and `PAL.cream` or `PAL.paper`. Pick a small palette per film and mix with a helper if you need shades.
- Test the layer in the editor: `validate_runtime_layer_source`, then `seek_timeline` and `view_current_frame` at several times. Static validation is not visual proof.
