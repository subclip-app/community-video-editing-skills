# Layer code to paste (pure functions of time)

Source: the technique reference of the upstream repo, [references/technique.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/references/technique.md). Rewritten for a HyperFrames layer.

## One proxy drives everything

```js
const DUR = 10, clock = {t: 0};
const tl = gsap.timeline({paused: true});
tl.to(clock, {t: DUR, duration: DUR, ease: 'none', onUpdate: () => draw(clock.t)});
window.__timelines['scene'] = tl;
draw(0);
```

`draw(t)` sets every style from `t` and keeps no state. A seek to any time then gives the same pixels.

## Closed-form spring and Track

```js
function stepR(tau, {w = 20, z = 1} = {}) {
  if (tau <= 0) return 0;
  if (z >= 1) { const x = w * tau; return 1 - Math.exp(-x) * (1 + x); }
  const wd = w * Math.sqrt(1 - z * z);
  return 1 - Math.exp(-z * w * tau) * (Math.cos(wd * tau) + (z * w / wd) * Math.sin(wd * tau));
}
class Track {
  constructor(v0) { this.v0 = v0; this.cur = v0; this.ev = []; }
  to(t, v, sp) { if (v !== this.cur) { this.ev.push([t, v - this.cur, sp]); this.cur = v; } return this; }
  at(t) { let v = this.v0; for (const [ti, d, sp] of this.ev) v += d * stepR(t - ti, sp); return v; }
}
```

Damping 0.72 to 0.9 for a small overshoot, 1.0 for camera and text. Issue a target one settle-lead early if it must arrive at a time.

## Blur content swap

```js
function vis(t, tin, tout, dOut = 0.12) {
  const e = stepR(t - tin, {w: 26, z: 1}), x = tout == null ? 0 : Math.min(1, Math.max(0, (t - tout) / dOut)), xo = x * x;
  return {o: e * (1 - xo), b: (1 - e) * 10 + xo * 10, dy: (1 - e) * 16 - xo * 10};
}
```

Apply `opacity`, `filter: blur(b px)` and `translateY(dy px)`.

## Edge-split stretch

```js
const L = new Track(4).to(TOG, 44, {w: 19, z: 0.9});   // trailing edge, soft
const R = new Track(44).to(TOG, 84, {w: 34, z: 0.9});  // leading edge, stiff
// width = R.at(t) - L.at(t)
```

## Odometer digit

Digit p of value v: `floor(v / 10**p) % 10 + clamp((v % 10**p) - (10**p - 1), 0, 1)`, so a digit only moves while the one below it carries. Ease v to the exact integer.

## Typewriter

```js
text.textContent = QUERY.slice(0, Math.round(clamp((t - t0) / dur) * QUERY.length));
caret.style.opacity = Math.sin(t * 14) > 0 && t < tEnd ? 1 : 0;
```

## Cursor

Press scale `1 - 0.16 * Math.exp(-(((t - tc) / 0.045) ** 2))`. Lean `clamp(-vx * 0.0045, -14, 14)` degrees. Trail: draw dots at the cursor position at `t - k * 0.009`, alpha from speed.
