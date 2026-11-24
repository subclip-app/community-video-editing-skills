# gsap-utils: mapRange, snap, interpolate, distribute

Reference for the HyperFrames listing. Source: the `gsap-utils` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-utils/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-utils. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

The `gsap.utils` helpers: clamp, mapRange, normalize, interpolate, random, snap, shuffle, distribute, getUnit, unitize, splitColor, selector, toArray, pipe, wrap and wrapYoyo, and the habit of omitting the value argument to get a reusable function.

## Rules that matter for HyperFrames layers

- Derive every number from the index or from time: `mapRange` for sizes, `snap` for a tidy grid, `interpolate` between two brand colours, `distribute` for a stagger that fans out from the centre.
- Avoid `gsap.utils.random()` and `shuffle()` in a layer: they use `Math.random`, so each render differs. If you need varied values, use a small seeded generator and compute the values up front.
- `toArray` and `selector(scope)` are safe and useful to turn selectors into arrays or to scope them to one root.
- Utilities work on numbers. Use `getUnit` and `unitize` when a value carries units such as `px` or `%`.
- Compute values before building the timeline, not inside tween callbacks, so there is nothing to recompute when the playhead is seeked.

## Runnable snippet

A complete layer you can paste into `validate_runtime_layer_source` with `kind: "hyperframes"` and then `add_runtime_layer`. It passed validation in the Subclip AI Editor. Use your own rectangle on the timeline.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}
#scene{position:relative;width:1280px;height:720px;overflow:hidden;font-family:Inter,sans-serif}
.b{position:absolute;bottom:160px;width:56px;border-radius:10px 10px 0 0;transform-origin:50% 100%}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div id="bars"></div>
</div>
<script>
const u = gsap.utils;
const bars = [];
for (let i = 0; i < 10; i++) {
  const el = document.createElement('div');
  el.className = 'b';
  el.style.left = 160 + i * 96 + 'px';
  el.style.height = u.snap(20, u.mapRange(0, 9, 60, 400, i)) + 'px';
  el.style.background = u.interpolate('#153592', '#26c9d5', i / 9);
  document.getElementById('bars').appendChild(el);
  bars.push(el);
}
const tl = gsap.timeline({ paused: true });
tl.fromTo(bars, { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: 'back.out(1.4)',
  delay: u.distribute({ base: 0, amount: 0.8, from: 'center' }) }, 0.2);
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-05-utils.mp4`: Twelve bars get their heights from mapRange and snap, their colours from interpolate and their stagger from distribute, then reshuffle with a seeded generator. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
