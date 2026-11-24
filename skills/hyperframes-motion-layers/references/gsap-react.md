# gsap-react: Scope it, animate it, revert it

Reference for the HyperFrames listing. Source: the `gsap-react` skill in the official [greensock/gsap-skills](https://github.com/greensock/gsap-skills) repository (MIT, by GreenSock), file `skills/gsap-react/SKILL.md`: https://github.com/greensock/gsap-skills/tree/main/skills/gsap-react. This page is a summary written by Subclip in its own words, and it adds what matters for HyperFrames layers.

## What it teaches

GSAP inside React: the `useGSAP` hook from `@gsap/react`, refs, a `scope` so selectors only match inside the component, `contextSafe` callbacks, dependency arrays and `revertOnUpdate`, `gsap.context()` with `ctx.revert()` in an effect, and keeping GSAP off the server.

## Rules that matter for HyperFrames layers

- A HyperFrames layer is plain HTML, not React, so there is no hook to call. Keep the lesson: build everything inside one scope and make it undoable.
- Use `gsap.context(() => { /* build the timeline */ }, '#scope')` so every selector only matches inside the layer root, then register the timeline you created in it. `ctx.revert()` removes everything the context created.
- In a Remotion layer (React) use `remotion-motion-layers` instead. Do not run GSAP freely there: drive visuals from `useCurrentFrame()`, not from a free-running tween.
- When you do write React code for the creator's own web project, use `useGSAP`, pass a `scope`, wrap callbacks with `contextSafe`, and let the hook clean up on unmount.
- Never run GSAP during server rendering. Create tweens only after mount.
- Do not skip cleanup. A tween that outlives its element keeps writing styles.

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
.box{position:absolute;top:300px;width:200px;height:200px;border-radius:24px;background:#153592}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="4" data-width="1280" data-height="720">
<div id="scope"><div class="box" style="left:200px"></div><div class="box" style="left:540px"></div><div class="box" style="left:880px"></div></div>
</div>
<script>
let tl;
// One context, one scope: selectors only match inside #scope,
// and ctx.revert() would undo everything created in it.
const ctx = gsap.context(() => {
  tl = gsap.timeline({ paused: true });
  tl.fromTo('.box', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15 }, 0.2);
}, '#scope');
window.__timelines = window.__timelines || {};
window.__timelines['scene'] = tl;
</script>
</body>
</html>
```

## Reference clip

`examples/gsap-06-react.mp4`: Three boxes animate inside a dashed scope, ctx.revert() empties it, and the scope mounts again while a tile outside the scope never moves. Rendered in code with HyperFrames, no AI model, no credits.

## Subclip tools

`validate_runtime_layer_source` before saving, `add_runtime_layer` to place it, then seek and view the frame at the entrance, the settled state and the exit. Code layers cost no credits.

## License note

GSAP is free to use under GreenSock's standard license. See gsap.com for the license, and read it before shipping GSAP inside your own product.
