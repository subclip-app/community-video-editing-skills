# Seekable recipes for HyperFrames UI scenes

Our own small implementations of the motion, written for a Subclip HyperFrames layer. They are not copies of transitions.dev code: a browser transition reacts to a class change, but a video layer must draw any frame from the time alone, forwards or backwards. So every recipe below is a pure function of `t` (seconds since the layer starts).

## The frame clock

Build the product UI once as static HTML (Subclip rejects `innerHTML`), then style it from one function.

```js
const DUR = 9, clock = {t: 0};
const tl = gsap.timeline({paused: true});
tl.to(clock, {t: DUR, duration: DUR, ease: 'none', onUpdate: () => render(clock.t)});
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;   // same key as data-composition-id
render(0);
```

`render(t)` sets opacity and transform on every element and keeps no state between calls. Reuse one source for several segments by reading a variable: `const SCENE = String((window.__hfVariables || {}).scene || 'a');`.

## Easing and progress

```js
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
function bez(x1, y1, x2, y2) {            // cubic-bezier as a function of x
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  return x => {
    if (x <= 0) return 0; if (x >= 1) return 1;
    let u = x;
    for (let i = 0; i < 10; i++) {
      const f = ((ax * u + bx) * u + cx) * u - x, d = (3 * ax * u + 2 * bx) * u + cx;
      if (Math.abs(d) < 1e-6) break; u = clamp(u - f / d);
    }
    return ((ay * u + by) * u + cy) * u;
  };
}
const SMOOTH = bez(0.22, 1, 0.36, 1);      // smooth out token
const INOUT = bez(0.42, 0, 0.58, 1);
const prog = (t, t0, dur, ease) => ease(clamp((t - t0) / dur));
```

## Open and close pair (modal, dropdown, toast, panel)

```js
// Returns 0 closed, 1 open. Open and close run on their own clocks.
function openClose(t, tOpen, openDur, tClose, closeDur) {
  if (t < tOpen) return 0;
  if (tClose == null || t < tClose) return prog(t, tOpen, openDur, SMOOTH);
  return 1 - prog(t, tClose, closeDur, SMOOTH);
}
const p = openClose(t, 4.6, 0.25, 7.4, 0.15);           // modal: 250 ms in, 150 ms out
modal.style.opacity = p;
modal.style.transform = `scale(${0.96 + 0.04 * p})`;    // from 0.96
scrim.style.opacity = p;
```

- Dropdown: same pair with scale 0.97 on open and 0.99 on close, `transform-origin` at the trigger corner.
- Toast: 0.35 s in, 0.25 s out, `translateY(${16 * (1 - p)}px) scale(${0.97 + 0.03 * p})`.
- Do not start a close before the open has finished; leave at least the open duration between them.

## Tabs sliding

```js
// SW: [[time, tabIndex], ...] sorted by time; first entry time -1.
let i = 0; for (let k = 0; k < SW.length; k++) if (t >= SW[k][0]) i = k;
const cur = SW[i][1], prev = i ? SW[i - 1][1] : cur, s = i ? prog(t, SW[i][0], 0.25, SMOOTH) : 1;
pill.style.transform = `translateX(${4 + TAB_W * (prev + (cur - prev) * s)}px)`;
// Content: old view out in 150 ms, new view in over 250 ms after an 80 ms lead.
view[prev].style.opacity = 1 - prog(t, SW[i][0], 0.15, INOUT);
view[cur].style.opacity = i ? prog(t, SW[i][0] + 0.08, 0.25, INOUT) : 1;
```

## Page side-by-side

```js
const go = prog(t, tGo, 0.25, SMOOTH), back = prog(t, tBack, 0.25, SMOOTH);
const d = t < tBack ? go : 1 - back;                   // 1 while the detail page shows
list.style.opacity = 1 - d;  list.style.transform = `translateX(${-8 * d}px)`;
detail.style.opacity = d;    detail.style.transform = `translateX(${8 * (1 - d)}px)`;
```

## To-do reorder

The dragged row follows the cursor; each row it passes slides one slot to open the gap. Find the crossing times once, then shift each row on its own 220 ms clock.

```js
const SLOT = 82, ROW_H = 72;
const dragC = t => t < t0 ? yStart : t < t1 ? yStart + (yEnd - yStart) * INOUT((t - t0) / (t1 - t0)) : yEnd;
const CROSS = rows.map((_, k) => { for (let s = t0; s <= t1; s += 0.001) if (dragC(s) < top + SLOT * k + ROW_H / 2) return s; return 99; });
// passed row k:   translateY(top + SLOT * (k + prog(t, CROSS[k], 0.22, SMOOTH)))
// dragged row:    lift = prog(t, tPress, 0.18, SMOOTH) until the drop, then 1 - prog(t, tDrop, 0.26, SMOOTH)
//                 transform: translateY(dragC(t) - ROW_H / 2) scale(1 + 0.02 * lift) rotate(0.6 * lift deg), shadow grows with lift
```

## Text swap and reveal

```js
// old text leaves short and early, new text arrives; never both fully visible.
oldEl.style.opacity = 1 - prog(t, ts, 0.15, INOUT); oldEl.style.transform = `translateY(${-4 * prog(t, ts, 0.15, INOUT)}px)`;
const q = prog(t, ts + 0.08, 0.25, INOUT);
newEl.style.opacity = q; newEl.style.transform = `translateY(${4 * (1 - q)}px)`;
// Reveal of a new list row: 12 px rise with opacity, stagger 40 ms per line.
```

## Cursor, press and ripple

```js
// K: [[time, x, y], ...]; equal neighbours make a hold.
function cursorAt(t) {
  if (t <= K[0][0]) return [K[0][1], K[0][2]];
  for (let i = 1; i < K.length; i++) if (t <= K[i][0]) {
    const [a, x0, y0] = K[i - 1], [b, x1, y1] = K[i], p = INOUT((t - a) / (b - a));
    return [x0 + (x1 - x0) * p, y0 + (y1 - y0) * p];
  }
  const L = K[K.length - 1]; return [L[1], L[2]];
}
const press = (t, tc, depth) => 1 - depth * Math.exp(-(((t - tc - 0.04) / 0.06) ** 2));
// cursor scale press(t, click, 0.14), button scale press(t, click, 0.05),
// ripple: for 0.45 s after a click, opacity 0.9 * (1 - p), scale 0.3 + 0.9 * SMOOTH(p).
```

The click lands, then the UI responds on the same frame. Move the cursor with in-out easing and hold it still for at least 0.1 s before a click.

## Camera

Wrap the app window and the cursor in one element and keep labels outside it.

```js
// CAM: [[time, scale, focusX, focusY], ...] in scene pixels; interpolate like the cursor.
cam.style.transformOrigin = '0 0';
cam.style.transform = `translate(${960 - fx * s}px, ${575 - fy * s}px) scale(${s})`;
```

Push in between transitions (scale 1.2 to 1.35 keeps a 1600 px wide app readable at 720p), hold during each one, pull back for the end card. Check that the pushed frame still contains the trigger and the surface it opens.

## Seams between segments

The last frame of segment A must equal the first frame of segment B: same rows, same filter state, same camera, same label. Keep the scene data (rows, labels, cursor and camera keyframes) per scene in one source, and start each scene's keyframes where the previous one ended.
