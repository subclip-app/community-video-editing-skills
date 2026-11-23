---
name: remotion-motion-layers
description: Build editable Remotion layers in Subclip, built into the AI Editor: animated titles, charts, globe and flat maps, 3D scenes, device frames and overlays written as React and TSX with typed props and frame-driven motion. Use when a creator asks for Remotion, React or TSX, picks a Remotion template, or edits an existing Remotion layer.
---

# Remotion motion layers

This skill ships pre-installed in Subclip. It describes how an agent makes motion graphics as Remotion layers: one default-exported React component stored in the project and rendered at the layer's own timing, rectangle, opacity and lane. Creator-editable data (copy, colours, numbers, image URLs) lives in JSON props.

Related skills: `hyperframes-motion-layers` (the HTML and GSAP engine), `code-animation-styles-remotion` (39 code-drawn looks), `code-video-recipes`, `motion-polish`, `threejs-3d-scenes`.

## Capability reference

`examples/capability-remotion-motion-layers.mp4` is a 17 second reel of four Remotion layers: a globe map, a chart, a title and a device scene. Show it when a creator asks what this skill can do.

## What it can make

- Titles, kinetic and glitch text, logo reveals, counters and callouts.
- Charts and data stories driven by props.
- Maps: a Cesium globe route and a flat vector river or route map (see `references/map-styles.md`).
- Genuine 3D with Three.js, Lottie, GIF, shapes, transitions and motion blur.
- Device frames (phone, laptop), terminal and UI simulators, social and chat cards.
- The Subclip snapcn product-demo scenes as templates.

## Choose the engine

Use Remotion when the creator says Remotion, React or TSX, selects a Remotion template, or edits an existing Remotion layer. New motion graphics with no engine named go to `hyperframes-motion-layers`. Complexity alone is not a reason to switch engines. Native Text, Elements, Media, Audio and Captions come first when they already do the job.

## How a creator asks

- "Make a Remotion pie chart of where our users come from."
- "Show a globe route from London to Mumbai."
- "Edit the Remotion title: change the colour and the second line."
- "Use the glitch text template for the intro."
- "Put this screen recording in a phone frame."

## Workflow

1. Read the project and its assets. Seek to the insertion point and look at the frame.
2. List templates with `kind: "remotion"`. If one fits, import it and edit the returned item. Prop overrides merge at top level; nested objects are replaced.
3. Otherwise write one component per `references/authoring-contract.md`: one named default export, no composition registration.
4. Put creator-editable data in JSON props.
5. Validate with `validate_runtime_layer_source`. Fix every error and every "Export can't draw this" warning (see `references/export-safe-css.md`).
6. Add or update the layer with the smallest useful rectangle.
7. Look at three frames: after the entrance, settled and near the exit. Correct clipping, timing and missing media in place.
8. Keep layers short: one scene per layer. Splitting a placement restarts its frame counter, so give continuity through props.
9. Export only on request, with a short ranged check first.

## Rules that prevent most failures

- Every animated value comes from the frame counter or the video config. No CSS transitions, timers, wall-clock time or runtime randomness.
- The preview is a real browser but the export redraws elements itself and silently drops what it cannot draw. Follow `references/export-safe-css.md` over any upstream example.
- Only approved imports load (see the contract). The layer cannot install packages, fetch, or touch files.
- Media comes from the project library; use the exact URL the asset list returns. Video and audio inside a layer use the media package, never the off-thread components.
- Keep footage, voice and music on native lanes.
- No credentials, private URLs or paths in source or props.
- Generated assets use credits: show the cost and ask first.

## Done checklist

Validation is clean, props hold the editable data, three frames were viewed, text is readable, and the summary separates what was verified from what was only configured.
