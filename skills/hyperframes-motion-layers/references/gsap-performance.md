# gsap-performance: Transforms and opacity, one stagger for many

Reference for the HyperFrames listing. Source: the `gsap-performance` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-performance/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-performance. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

Performance: prefer transform and opacity over layout properties, `will-change` only on elements that animate, batching reads and writes, one staggered tween for many items, `quickTo` for frequently updated values, killing off-screen work, and reducing simultaneous animations.

## Rules that matter for HyperFrames layers

- Animate `x`, `y`, `scale`, `rotation` and `opacity`. Avoid `width`, `height`, `top`, `left`, `margin` and `padding`: they force layout work every frame and the HyperFrames linter flags a `left` tween as an error.
- A render is slow where a browser is slow. Blur, big shadows, 3D perspective and WebGL can cost minutes per second of video on a machine without a GPU, so prefer flat designs there.
- Use a single `stagger` tween for lists and grids, with `grid: [rows, cols]` for two-dimensional patterns, instead of dozens of tweens with delays.
- Set `will-change: transform, opacity` only on elements that really animate. Not on everything.
- `gsap.quickTo()` is for mouse followers and live input. A layer has neither, so do not use it.
- Never apply CSS `filter` or `backdrop-filter` to text. Text can vanish in exported frames.

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
.g{position:absolute;width:40px;height:40px;border-radius:10px;background:#26c9d5;will-change:transform,opacity}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div id="grid"></div>
</div>
<script>
const cells = [];
for (let i = 0; i < 40; i++) {
  const el = document.createElement('div');
  el.className = 'g';
  el.style.cssText = 'left:' + (240 + (i % 8) * 100) + 'px;top:' + (200 + Math.floor(i / 8) * 80) + 'px';
  document.getElementById('grid').appendChild(el);
  cells.push(el);
}
const tl = gsap.timeline({ paused: true });
// transform and opacity only, one staggered tween for all forty cells
tl.fromTo(cells, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)',
  stagger: { each: 0.03, grid: [5, 8], from: 'center' } }, 0.2);
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-07-performance.mp4`: A box moves with transforms while the layout-property lane is marked avoid, then a 48-cell grid pulses from one staggered tween. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
