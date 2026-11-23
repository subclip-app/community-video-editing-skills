---
name: animation-performance
description: Keep motion smooth in the Subclip preview and correct in the export. Diagnose a motion layer that scrubs badly, an export that differs from the preview, flicker, or heavy effects. Use when preview stutters, text vanishes in an export, a motion layer is slow, or when choosing cheap properties to animate.
---

# Animation performance for video

The original skill tuned web animation to the browser's frame budget: composite-only properties, main thread versus compositor, will-change, CSS variables. A video is rendered frame by frame, so the budget is different. The question here is: does each frame render quickly in preview, and is every frame in the export exactly what the preview shows. Hover, scroll, gesture and React state advice from the original was dropped.

Shared values: [../references/video-motion-values.md](../references/video-motion-values.md).

## Rules that always apply

1. **Cheap properties by default.** Position, scale, rotation, opacity. Anything else needs a reason.
2. **Name the cause before the fix.** Every fix names which cause below it addresses.
3. **Never trust "it plays fine on my machine".** Preview on a fast Mac hides problems. Say which findings are verified from the project and which need an export or a slower machine.
4. **Verify in an export, not only in the preview.** Preview and export can differ, especially for motion layers.

## Symptom table

| Symptom | Likely cause and fix |
| --- | --- |
| Preview stutters while scrubbing | Heavy layer: too many animated elements, large blurs, big shadows. Reduce counts, lower blur, shrink the layer's canvas, or split the scene. |
| Text missing or flickering in the export only | CSS `filter` or `backdrop-filter` on text or on a container holding text (even `blur(0px)`). Remove it. Animate text with opacity and transform only. |
| Remotion layer misses elements in the export | A known export gap for client-rendered Remotion. Convert the layer to HyperFrames and match the design (see `subclip-remotion-layer` and `subclip-export`). Verify in the export at the reported times. |
| Motion differs on each seek | Non-deterministic code: `Math.random()`, `Date.now()`, real-time timers, requestAnimationFrame loops. The layer must be a pure function of time. Use a seeded random and the timeline's own clock. |
| Edges shimmer or pop at the start or end | A move that starts or ends between pixels. Start and end on whole values; hold the final state with the last keyframe (it holds automatically). |
| Soft glow or shadow animates choppily | Big blurred shadow redrawn each frame. Bake the glow into a static layer and animate its opacity or position instead. |
| Animated blur is slow | Keep blur under 20 px, ideally 2 to 5. Use it for short bursts. |
| Many small elements animate at once | Too many nodes. Group them, animate the group, or reduce the count. |
| Large video layers jitter | Several full-frame videos under motion. Use native media items, not videos inside code layers; trim what is not visible. |

## Native versus motion layer

Native media, text and caption keyframes are cheap and preview well. Reach for a motion layer only for what native cannot express (exact curves, kinetic type, diagrams, springs). Put footage, narration and music in native lanes, not inside layer code.

## Workflow

1. List what animates, with its tool and properties: item, tool (native keyframes, text, runtime layer), properties, time range. Expand shorthand (a layer that animates everything).
2. Diagnose in order: expensive properties first, then filters on text, then nondeterminism, then element count, then blur size.
3. `view_current_frame` at several times to confirm; when the issue is export only, run `get_export_configuration`, `list_render_queue`, then export a short range with `export_video` and inspect the file (only when the creator wants an export).
4. Report each finding as: element, cause, before, after, verified from the project or needs an export.

Order findings by cost. Then stop. Apply fixes when asked, with one edit at a time.

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
