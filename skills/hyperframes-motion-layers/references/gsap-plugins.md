# gsap-plugins: Register the plugin, then draw and shape motion

Reference for the HyperFrames listing. Source: the `gsap-plugins` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-plugins/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-plugins. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

The plugin family: registering with `gsap.registerPlugin`, scroll plugins (ScrollToPlugin, ScrollSmoother), DOM and UI plugins (Flip, Draggable, Inertia, Observer), text plugins (SplitText, ScrambleText), SVG plugins (DrawSVG, MorphSVG, MotionPath), easing plugins (CustomEase, EasePack, CustomWiggle, CustomBounce), physics plugins and GSDevTools.

## Rules that matter for HyperFrames layers

- Sort plugins by whether they only need the timeline. DrawSVG, MorphSVG, MotionPath, CustomEase, CustomBounce, CustomWiggle, SplitText and Flip can run in a rendered project when their files load locally.
- Do not use interaction or development plugins in a render: Draggable, Inertia, Observer, ScrollSmoother, ScrollToPlugin and GSDevTools all expect a live user or a live page.
- Subclip layers load only the pinned core `gsap.min.js` from jsDelivr or unpkg. The validator rejects other external scripts and rejects an inlined plugin file, so inside a Subclip layer reproduce the idea with core: draw a path with `pathLength='1'` and `strokeDashoffset`, and write a custom ease as a small function `(p) => 1 - Math.pow(1 - p, 4)`.
- In a standalone HyperFrames project (outside the Subclip layer box) the plugin files can sit in the project folder and load from there, which is how the reference clip was rendered. Register once at the top: `gsap.registerPlugin(DrawSVGPlugin, CustomEase)`.
- Register before the first use. A plugin used before registration fails silently.
- Create custom eases once at load time with a fixed curve. Never build an ease from random values.

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

</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<svg width="1280" height="720" viewBox="0 0 1280 720"><path id="p" pathLength="1" d="M240 460 C400 160 560 160 640 360 S900 560 1040 260" fill="none" stroke="#26c9d5" stroke-width="14" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset="1"/><circle id="b" cx="240" cy="460" r="22" fill="#153592"/></svg>
</div>
<script>
// Plugins are separate files and a Subclip layer only loads core GSAP from the CDN.
// The DrawSVG idea works in core: pathLength=1 and animate the dash offset.
const snap = (p) => 1 - Math.pow(1 - p, 4); // a hand-written ease, like CustomEase
const tl = gsap.timeline({ paused: true });
tl.fromTo('#p', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.2, ease: snap }, 0.2);
tl.fromTo('#b', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, ease: 'back.out(2)' }, 0);
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-04-plugins.mp4`: A path is drawn with DrawSVG while a ball follows a CustomEase hop, and chips show which plugins belong in a render and which do not. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
