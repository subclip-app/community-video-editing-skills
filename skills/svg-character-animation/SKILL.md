---
name: svg-character-animation
description: Build and animate a character rig made of SVG parts in a Subclip motion layer, with GSAP timelines, stable pivots, readable acting, blinks, gaze and mouth shapes. Use when the creator wants a cartoon or mascot character that moves, talks or acts in an editable layer, an SVG puppet, a rigged character animation, or lip-flapped talking characters over narration.
---

# SVG character animation (Subclip edition)

Animate a character built from SVG parts inside a Subclip HyperFrames layer. The layer is one editable timeline item. Its source is HTML plus inline SVG and a paused GSAP timeline, so it previews live, seeks deterministically and exports with the rest of the project.

The original skill held short runtime rules for GSAP, Remotion and HyperFrames. This version keeps those rules and adds the rig and acting guidance an agent needs to make the character read well.

## When to use

- A mascot or cartoon character should walk on, react, talk or act in a scene.
- The creator supplies or asks for an SVG character and wants it animated.
- A narration should drive a talking character (mouth shapes on the beat of the words).

For a hand-painted brush look and an acting guide, see the cartoon-animation skill. For reviewing the result, use character-animation-qa.

## Before you start

- Read `read_subclip_skill` for `subclip-hyperframes-layer` (default engine) and its authoring contract. Use `subclip-remotion-layer` only when the creator explicitly asks for React, TSX or Remotion, or the layer is already Remotion.
- Start with `get_project_outline`, then `list_editor_assets`. Preserve existing items and IDs.
- Character art: use the creator's own SVG, or draw the parts yourself as inline SVG. If you need a generated character image, offer the creator's Codex CLI first (images), otherwise `list_ai_models` and `generate_ai_media`; quote cost with `estimate_ai_generation` first. Generated raster images cannot be rigged as parts; draw or request separate transparent part images (head, body, arms, legs, eyes, mouths) and import them with `import_external_media` before binding them into the layer.
- Voice, if any, comes first. Generate it with `generate_speech` or `generate_local_speech`, import it, and use `transcribe_project` word timings to drive mouth shapes and gestures.

## Build the rig

Make each movable part its own SVG group with a stable ID, drawn in one shared coordinate space.

1. Hierarchy: body is the root; head, arms and legs hang off it; hands off arms; pupils and lids off the eyes. A child moves with its parent for free, so animate the parent and let the child follow.
2. Pivots: every rotating part needs a pivot at its joint (shoulder, neck, hip). Set them once with `gsap.set("#arm_right", { svgOrigin: "390 310" })` using absolute SVG coordinates. Never rely on the default `transform-origin` of an SVG element.
3. Separate expression parts: eyes (open, half, closed), brows, 4 to 6 mouth shapes (closed, small, wide, round, smile, frown), pupils that can move for gaze.
4. Keep the parts connected: at the extremes of every motion, the joint must still overlap its neighbor. Draw a little extra at joints.

## Animate with a timeline

One paused GSAP timeline, registered as `window.__timelines['<composition id>']`, finite and seekable. No wall-clock time, no `Math.random()`, no `repeat: -1`.

- Animate transforms (`x`, `y`, `scale`, `rotation`) and opacity, never layout.
- Use a timeline with labels for multi-part acting beats. Offset parts a little from each other: the eyes lead, the head follows, the arms and any hat or tail drag and settle last.
- Anticipation before a big move (a small opposite move), follow-through after it, slow in and slow out. Pick eases on purpose: `power2.inOut` for body turns, `back.out(1.6)` for pops and overshoots, `none` for drift.
- Blinks: a quick lid close and open every 2 to 5 seconds, not on a perfectly regular rhythm. Offset the two eyes by one frame.
- Gaze: move pupils before the head turns.
- Mouth shapes: swap by opacity on the word onsets from the transcript, not on every letter. Hold each shape at least 3 frames.
- Pose holds: hold an emotional pose long enough to read (0.4 to 1 s for a strong one). Constant motion without holds reads as noise.
- Avoid twinning: do not give both arms the same angle and timing.

```js
gsap.set("#arm_right", { svgOrigin: "390 310" });
const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
tl.to("#head", { rotation: -8, duration: 0.2 })
  .to("#arm_right", { rotation: 35, duration: 0.4 }, "<");
window.__timelines["scene"] = tl;
```

## Place it in Subclip

1. Write the standalone HTML document (root with fixed width and height and matching `data-width` and `data-height`, transparent background so the character sits over other media).
2. `validate_runtime_layer_source`, fix errors, then `add_runtime_layer` with the smallest useful rectangle and explicit start and end times that match the narration.
3. Keep short layers: one scene or beat each. Share the rig through matching variables if several scenes reuse it.
4. Narration, music and sound effects live in native audio lanes, not inside the layer.

## Remotion pattern (only when explicitly requested)

Do not let GSAP advance on its own clock inside Remotion. Drive a paused timeline from the current frame:

```tsx
const frame = useCurrentFrame();
const progress = frame / durationInFrames;
timeline.progress(progress);
```

Read `subclip-remotion-layer` before writing it.

## Verify (the quality checklist)

- Parts stay connected at pivots during motion.
- Blinks, gaze and mouth shapes are separate enough to read.
- Pose holds are long enough to communicate emotion.
- Frame sampling shows meaningful change, not a frozen animation.

Use the character-animation-qa skill for the full review pass. At minimum seek to the entrance, the strongest pose and the exit and call `view_current_frame` at each. Saved source and a successful tool call are not visual proof.

Record decisions with `update_project_director_brief` and `write_session_summary`.

## Reference

A finished example: [bolt-reference.mp4](examples/bolt-reference.mp4). Bolt is a robot drawn from separate SVG parts in three short HyperFrames layers (walk in, talk and wave, celebrate). Mouth shapes switch on the loudness of a local text-to-speech voice in steps of 0.1 s, the eyes lead the head and arm, pivot markers fade in on the word pivot, and a hop ends the clip. The [contact sheet](examples/one-second-contact-sheet.jpg) shows one frame per second.

## Sources

- GSAP core transform properties and SVG handling: https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/
- GSAP timelines and sequencing: https://gsap.com/docs/v3/GSAP/Timeline/
- Remotion `useCurrentFrame`: https://www.remotion.dev/docs/use-current-frame

Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) (skill svg-character-animation) by OpenMontageInc, AGPL-3.0
