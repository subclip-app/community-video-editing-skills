---
name: hyperframes-motion-layers
description: Build editable HyperFrames motion graphics layers in Subclip, built into the AI Editor: animated titles, kinetic text, charts, maps, word-by-word captions, device scenes and overlays written as validated HTML, CSS, GSAP and Lottie. Use when a creator asks for HyperFrames, GSAP, Lottie or HTML animation, or for new motion graphics with no engine named.
---

# HyperFrames motion layers

This skill ships pre-installed in Subclip. It describes how an agent makes motion graphics as HyperFrames layers: one editable item on the timeline whose source is an HTML document with CSS and a paused GSAP timeline. The layer is previewed live, pre-rendered with a transparent background at export, and placed with the item's normal position, size, opacity and lane.

Related skills: `remotion-motion-layers` (the React engine, see "Choose the engine"), `code-motion-styles` (sixteen ready style prompts), `motion-polish` (easing and timing craft), `code-animation-styles-remotion` (39 code-drawn looks).

## Capability reference

`examples/capability-hyperframes-motion-layers.mp4` is a 17 second reel of four HyperFrames layers: a chart, a map, captions and a device scene. Show it when a creator asks what this skill can do.

## What it can make

- Titles, lower thirds, kinetic text, logo reveals and callouts.
- Animated charts: line, bar, pie, counters, bar-chart races.
- Maps drawn from real geometry (see `references/maps.md`).
- Word-by-word caption styles built from the project's own captions (see `references/captions.md`).
- Device scenes (laptop, phone), UI mockups, screen recordings inside frames.
- Deterministic 3D with Three.js, Lottie animations and hand-drawn annotations.

## Choose the engine

Use HyperFrames when the creator says HyperFrames, GSAP, Lottie, Three.js or "HTML animation", or when a new motion beat has no named engine. Use `remotion-motion-layers` when they ask for React, TSX or Remotion, pick a Remotion template, or are editing an existing Remotion layer. Use the native Text, Elements, Media, Audio and Captions panels when those already express the edit: a layer is for graphics, not for the whole edit.

## How a creator asks

- "Add an animated line graph that highlights the March spike."
- "Make a HyperFrames lower third for the speaker, navy and cyan."
- "Give this clip word-by-word captions in a bold kinetic style."
- "Show a flow map with lines from New York to Chicago and Austin."
- "Put my screen recording inside a laptop for the product reveal."

## Workflow

1. Read the project and its assets. Seek to where the layer will sit and look at the current frame so placement fits what is on screen.
2. Check the template list for the beat (for example `list_motion_graphics_templates` with `kind: "hyperframes"`). If a template fits, import it and change its variables. Omitted variables keep their defaults.
3. Otherwise write one standalone document following `references/authoring-contract.md`.
4. Validate with `validate_runtime_layer_source` before saving. Fix every error.
5. Add the layer with `add_runtime_layer` using the smallest useful rectangle (explicit x, y, width, height in canvas percent). Do not use a full-frame box unless the scene is a full-frame background.
6. Look at the result: seek just after the entrance, at the settled state and near the exit, and view the frame each time. Saved source is not proof of what renders.
7. Keep each layer short. Split a long piece into scene-sized layers, each with its own source and start time.
8. Export only when the creator asks, and check a short range first.

## GSAP references

Official GSAP guidance (from GreenSock's gsap-skills, MIT) summarized for layers, each with a runnable snippet and a 10 second reference clip. Read the one that matches the question. GSAP is free to use; see gsap.com for the license.

- `references/gsap-core.md`: tweens, eases, stagger. Clip `examples/gsap-01-core.mp4`.
- `references/gsap-timeline.md`: one paused timeline, position parameter, labels. Clip `examples/gsap-02-timeline.mp4`.
- `references/gsap-scrolltrigger.md`: not for renders, use the playhead as the scrub. Clip `examples/gsap-03-scrolltrigger.mp4`.
- `references/gsap-plugins.md`: which plugins suit a render, and the core fallback inside a layer. Clip `examples/gsap-04-plugins.mp4`.
- `references/gsap-utils.md`: mapRange, snap, interpolate, distribute, seeded values. Clip `examples/gsap-05-utils.mp4`.
- `references/gsap-react.md`: scope and revert. Clip `examples/gsap-06-react.mp4`.
- `references/gsap-performance.md`: transforms, opacity, one stagger. Clip `examples/gsap-07-performance.mp4`.
- `references/gsap-frameworks.md`: scoped selectors and cleanup. Clip `examples/gsap-08-frameworks.mp4`.

Two facts hold across all of them: a Subclip layer loads only the pinned core GSAP, so plugin files are not available there, and everything must stay finite, seekable and free of unseeded randomness.

## Rules that prevent most failures

- Never apply CSS `filter` or `backdrop-filter` to text or to anything that contains text, even `blur(0px)`. Text can vanish in the exported frames. Animate opacity and transforms instead.
- Everything is finite and seekable: one paused GSAP timeline, no infinite repeats, no `Date.now()`, no unseeded randomness.
- Media comes from the project library. Import first, then use the exact URL the asset list returns. If media fails to load, import the file rather than retrying the link.
- Keep footage, voice, music and sound effects on the native Media and Audio lanes, not hidden inside layer code.
- Verify fonts in the real renderer before relying on them.
- No credentials, private URLs or local paths in source or variables. The layer cannot read files, install packages or call Subclip itself.
- Generated assets and music use credits: show the cost and ask before spending.

## Done checklist

Validation passed, the layer is on the timeline with a sensible rectangle, three frames were viewed, text is readable over the footage, and the summary says what was checked and what was only configured.
