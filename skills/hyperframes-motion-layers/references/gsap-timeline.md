# gsap-timeline: Position parameter places every tween

Reference for the HyperFrames listing. Source: the `gsap-timeline` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-timeline/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-timeline. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

Timelines: appending tweens, the position parameter (absolute time, `+=` and `-=` offsets, labels, `<` and `>` against the previous tween), `defaults` on the constructor, labels, nesting timelines, and playback control (play, pause, seek, progress).

## Rules that matter for HyperFrames layers

- A HyperFrames layer is exactly one timeline: create it with `paused: true` and register it under the composition id in `window.__timelines`. Never call `play()`.
- Place tweens with the position parameter, not with `delay`. `'<0.15'` (start 0.15 s after the previous start) and a label such as `'payoff'` keep the choreography readable and easy to retime.
- Put shared `duration` and `ease` in the timeline `defaults` so child tweens stay short.
- The timeline length comes from its children. The layer's `data-duration` is the internal clock, so make the last tween end at or before it.
- Nest a child timeline only to group a repeated unit (a card entrance reused three times). Add it once with `master.add(child, time)`. Do not nest scenes, one layer is one scene.
- Everything on the timeline must be finite. A flash or a burst should last at least two output frames.

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
.c{position:absolute;left:160px;width:360px;height:80px;border-radius:16px;background:#153592;color:#fff;font:700 32px Inter;display:flex;align-items:center;justify-content:center}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div class="c" id="a" style="top:200px">A</div><div class="c" id="b" style="top:320px">B</div><div class="c" id="c" style="top:440px">C</div>
</div>
<script>
const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: 'power3.out' } });
tl.fromTo('#a', { x: -200, opacity: 0 }, { x: 0, opacity: 1 }, 0.2)
  .fromTo('#b', { x: -200, opacity: 0 }, { x: 0, opacity: 1 }, '<0.15')
  .addLabel('payoff', '+=0.4')
  .fromTo('#c', { x: -200, opacity: 0 }, { x: 0, opacity: 1 }, 'payoff')
  .to('#a, #b, #c', { backgroundColor: '#26c9d5', stagger: 0.1 }, 'payoff+=0.5');
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-02-timeline.mp4`: Five bars start at different positions (absolute, `+=0.4`, `<`, `<0.3`, a label) while a playhead line crosses the ruler. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
