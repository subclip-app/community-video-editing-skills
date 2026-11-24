# gsap-core: One tween, many eases, one stagger

Reference for the HyperFrames listing. Source: the `gsap-core` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-core/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

The core API: gsap.to, from, fromTo and set, the common vars (duration, delay, ease, stagger, repeat, yoyo, overwrite), transform aliases (x, y, scale, rotation, xPercent, autoAlpha), function-based and relative values, defaults, and gsap.matchMedia for responsive and reduced-motion code.

## Rules that matter for HyperFrames layers

- Use `fromTo` for every entrance. `from` reads the element's current state once and drifts when the playhead is seeked backwards; `fromTo` is correct at any time.
- Pick the ease on purpose. `power3.out` is a safe default for entrances, `power2.inOut` for moves between two resting places, `back.out(1.7)` for a small overshoot, `none` for anything that must track the clock (progress bars, counters).
- Use `stagger` instead of many tweens with hand-written delays. `{ each: 0.08, from: 'center' }` and `{ amount: 0.6, from: 'edges' }` are the two shapes you need most.
- Animate `x`, `y`, `scale`, `rotation` and `opacity` (or `autoAlpha`). Never tween a property that a CSS transform already sets on the same element.
- No infinite repeats: `repeat: -1` makes the layer endless and unseekable. Repeat a finite number of times or lay the repeats out on the timeline.
- Skip `gsap.matchMedia()` in a layer. A layer has one fixed canvas and one render, so there is nothing to match.

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
.d{position:absolute;left:120px;width:48px;height:48px;border-radius:24px;background:#26c9d5}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div class="d" style="top:200px"></div><div class="d" style="top:300px"></div><div class="d" style="top:400px"></div>
</div>
<script>
const tl = gsap.timeline({ paused: true, defaults: { duration: 1.6 } });
const eases = ['none', 'power3.out', 'back.out(1.7)'];
document.querySelectorAll('.d').forEach((el, i) => {
  tl.fromTo(el, { x: 0 }, { x: 900, ease: eases[i] }, 0.3);
});
tl.fromTo('.d', { scale: 0 }, { scale: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.1 }, 0);
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-01-core.mp4`: Three dots race over the same distance with three different eases, then forty-eight bars rise with a centre-out stagger. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
