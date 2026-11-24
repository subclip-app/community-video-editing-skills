# gsap-frameworks: Scope the selector so only your component moves

Reference for the HyperFrames listing. Source: the `gsap-frameworks` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-frameworks/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-frameworks. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

GSAP in Vue, Nuxt, Svelte and other frameworks: create animations after mount, scope selectors with `gsap.context(fn, container)`, revert in the unmount hook, lazy-load rarely used plugins, register plugins once at app level, and clean up ScrollTrigger instances.

## Rules that matter for HyperFrames layers

- The framework lifecycle does not exist in a layer, but scoping does. A bare `'.box'` matches every element with that class. Scope it with `gsap.utils.selector('#cardA')` or `gsap.context(fn, '#cardA')`.
- Create tweens only when the DOM nodes exist. In a layer that means after the markup, at the end of the body, never in the head.
- Give every layer element a unique id or a class unique to that layer, so two layers on the timeline can never hit each other's elements.
- In a creator's own Vue or Svelte project: create the context in `onMounted` or `onMount`, pass the container, and call `ctx.revert()` in `onUnmounted` or the returned cleanup.
- Register plugins once, at app level, not inside a component body that re-runs.
- Lazy-load a rarely used plugin instead of putting it in the main bundle.

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
.card{position:absolute;top:240px;width:420px;height:240px;border-radius:24px;background:#153592}.k{position:absolute;left:140px;top:70px;width:140px;height:100px;border-radius:16px;background:#fff}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div class="card" id="cardA" style="left:140px"><div class="k"></div></div><div class="card" id="cardB" style="left:700px"><div class="k"></div></div>
</div>
<script>
// Scope the selector to one component so cardB stays untouched.
const q = gsap.utils.selector('#cardA');
const tl = gsap.timeline({ paused: true });
tl.fromTo(q('.k'), { x: 0, rotation: 0 }, { x: 80, rotation: 15, duration: 1, ease: 'power2.inOut' }, 0.3);
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-08-frameworks.mp4`: Two cards share a class: an unscoped tween moves both boxes, a scoped context moves only card A, and revert puts it back. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
