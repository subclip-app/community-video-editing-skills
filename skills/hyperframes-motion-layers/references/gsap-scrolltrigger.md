# gsap-scrolltrigger: A render has no scroll: the playhead is the scrub

Reference for the HyperFrames listing. Source: the `gsap-scrolltrigger` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-scrolltrigger/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-scrolltrigger. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

ScrollTrigger: scroll-linked animation, `scrub`, `pin`, `toggleActions`, `batch`, `containerAnimation` for fake horizontal scroll, markers, refresh and cleanup, and the rules for putting triggers on top-level tweens or timelines only.

## Rules that matter for HyperFrames layers

- Do not use ScrollTrigger in a HyperFrames layer or a render. There is no scrolling in an exported frame, the plugin is a separate file that a Subclip layer does not load, and it reads the live page, which breaks determinism.
- Keep the idea instead. `scrub: true` means progress follows an input linearly. In a layer the input is the playhead, so tween the thing with `ease: 'none'` on the paused timeline.
- A pinned section becomes a stretch of the timeline where the element holds still (a tween with the same values, or simply no tween) while other elements move.
- Fake horizontal scroll is one tween of `x` with `ease: 'none'` over the section's time. That is the same rule upstream gives for `containerAnimation`.
- If a creator asks for a scroll-driven website effect that must stay interactive, say a layer cannot do it. That belongs in a web page, not in video.
- For a scrolling look in video, simulate it: move a strip of content up with a linear tween, and move a scrollbar thumb with the same duration.

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
.t{position:absolute;left:160px;top:340px;width:960px;height:24px;border-radius:12px;background:rgba(21,53,146,.35)}.f{position:absolute;left:160px;top:340px;width:960px;height:24px;border-radius:12px;background:#26c9d5;transform-origin:0 50%}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div class="t"></div><div class="f" id="fill"></div>
</div>
<script>
// A browser would use ScrollTrigger with scrub. A render has no scroll,
// so the same linear progress is just a tween on the paused timeline.
const tl = gsap.timeline({ paused: true });
tl.fromTo('#fill', { scaleX: 0 }, { scaleX: 1, duration: 3.5, ease: 'none' }, 0.25);
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-03-scrolltrigger.mp4`: A fake scroll pane and its scrollbar thumb are driven by linear tweens, with ScrollTrigger crossed out and the playhead named as the scrub. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
