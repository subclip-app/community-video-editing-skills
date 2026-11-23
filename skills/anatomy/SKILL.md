---
name: anatomy
description: Make isometric explainer clips for technical ideas in Subclip. Use when the creator wants an isometric illustration that moves, a premium or Linear-style technical figure as video, an explainer clip of how a system, algorithm or component works, or an idea shown as a real machine (a test rig, dial gauge, plotter, lock, cabinet of drawers). Builds animated isometric SVG scenes as HyperFrames layers with four-tone solids, a framed card with title and live readout, optional narration, and exports a video.
---

# Anatomy (Subclip edition)

A figure like a small instrument on a bench: a heavy base on feet, rails with tick rulers, a carriage on bushings, springs, a dial whose needle moves, screws as tiny dots. The viewer understands the idea because they recognise the machine. Every number on screen comes from the same small model that moves the parts.

In Subclip the figure is a video scene. Each short scene is one HyperFrames layer (HTML, inline SVG and a paused GSAP timeline). Narration, music and export use native Subclip tools.

```
IDEA -> 1 Truth and model -> 2 Invent the object -> 3 Parts list and scenes -> 4 Narration -> 5 Build layers -> 6 Verify frames
```

## The one idea that matters

**The object is the explanation.** Do not draw boxes, arrows and labels. Invent a real, well made thing whose working is the concept.

| Concept | Object |
|---|---|
| A cache key that skips work when nothing changed | A pin-tumbler lock that only turns when every pin matches |
| Seven render targets with different bytes per texel | A chest of drawers, each as deep as its bytes |
| A separable blur (49 x 49 taps against 49 + 49) | A bed-of-nails stamp beside two combs on rails |
| A spring that presses and leans | A test rig with springs, a probe and a dial gauge |
| A token bucket rate limiter | A hopper with a gate, a counter dial and a refill hand crank |

Two ways it fails: **too abstract** (floating slabs and labelled boxes that read as nothing) and **too flat** (one big slab with a few lines, no parts, nothing to discover). The fix is the same: a recognisable machine made of many small, precise, purposeful parts.

## Before you start

1. Read project state: `get_project_outline`, `list_editor_assets`. Keep one explicit project ID. If the creator attached notes or media, call `get_media_context` first.
2. Create a landscape project (`create_project`, landscape canvas) unless the creator wants another ratio. Honor it.
3. Read the internal skills with `read_subclip_skill`: `subclip-hyperframes-layer` (authoring contract, keep segments small, no CSS filter on text), `subclip-motion-graphics` for routing and `subclip-tts` if narrating. In a source checkout they are in `resources/agent-skills/`. Use Remotion (`subclip-remotion-layer`) only if the creator asks for React/TSX.
4. Nothing here needs paid generation. Narration is optional. Quote before any paid voice: `generate_speech` cost from `list_ai_models` and `estimate_ai_generation`, then `get_ai_credit_status`. `generate_local_speech` is free and good for tests.
5. One edit call at a time per project.

## Sizing

- **Clip** (default): one mechanism, 40 to 80 parts, 3 to 5 scenes, 30 to 60 seconds total. Name the size and build it.
- **Hero**: a denser object, 80 to 150 parts, up to 8 scenes. Say it will take a while, then build.
- **Epic**: a whole vehicle or plant with many systems. Do not start. Propose a Hero version that keeps the core idea.

## Stage 1: Truth first

Collect the real numbers and behaviour of the thing explained: sizes, counts, thresholds, curves. The readout, the motion and the narration must all be true. Write the model as one small pure function (position in, readout and angles out), like the `reading` and `needleDeg` functions in the template. If you are not sure of a fact, say so to the creator and mark it.

## Stage 2: Invent the object

Pick a machine, tool, instrument or piece of furniture whose mechanism maps one to one onto the concept. Say in one sentence what moves and what that motion means. Never copy a reference image; take its finish, not its object.

## Stage 3: Parts list and scene plan

- Write at least 40 parts, grouped: base (plate, feet, groove, corner screws, label plate, ruler strip), structure (posts, rails, end stops), mechanism (carriage, bushings, springs, plunger, needle), controls (knurled knob, thumb screw) and the subject, which is the one lit part. Each part sits on another part. `references/craft.md` has the parts vocabulary and the tone table.
- Plan scenes of 6 to 12 seconds each, one idea per scene (for example: 1 the object builds up part by part, 2 the mechanism moves and the readout changes, 3 the twist or edge case, 4 the takeaway). Keep every scene on the same camera and the same figure so cuts feel like one machine.
- Write what moves, for how long and what the readout shows at each moment.

## Stage 4: Narration (optional)

Voice first when there is narration, because its length sets the scene timing.

1. Write the script from the scene plan. About 2.5 words per second, one idea per scene.
2. Cloud: `get_voice_samples` (unless a voice is already approved), `set_approved_voice`, then `generate_speech`; import with `import_speech_to_timeline`.
3. Local test: `generate_local_speech`, then `import_generated_audio_to_timeline`.
4. Read the real durations and use them as the beat clock for the scenes. Keep narration in its own audio item.

## Stage 5: Build the layers

Start from `assets/figure-template.html`. It holds a compact isometric kit (projection, boxes, cylinders, coils, ticks, painter's order helpers) and a working figure with a paused GSAP timeline. Replace the model and the parts, keep the structure. Read `references/kit-mini.md` for the API and `references/video-workflow.md` for scene structure.

For each scene:

1. Author one standalone document (root `#scene`, fixed 1920 x 1080, `data-composition-id`, `data-duration` = scene length, one paused timeline registered in `window.__timelines`).
2. `validate_runtime_layer_source` with the full source. Fix every error.
3. `add_runtime_layer` with `kind: "hyperframes"` at the scene's start time and duration. These are explicit full-frame scenes, so a full-canvas rectangle is allowed here. Keep scenes short and separate, one item each, rather than one long layer.
4. Share the same geometry module (copy the same kit and parts code) across scenes so the machine is identical. Scene 2 starts in the state scene 1 ended.
5. Revise in place: `read_layer_source` then `edit_layer_source` with the source hash, or `update_runtime_layer`.

Rules that keep the runtime happy: no `requestAnimationFrame`, wall clock or random; animate with GSAP transforms and opacity only; never apply CSS `filter` to text or any ancestor of text; verify the font family in the runtime or use a system stack and check wrapping; no WebGL (see below).

## Craft rules (short form)

Full reasoning in `references/craft.md`.

- **Solids, not wireframes.** Every part is filled and painted back to front, so things in front hide things behind. No see-through edges, no dashed hidden lines.
- **Four tones from facing.** Top lightest, one side mid, other side darker. Tone hierarchy: base and feet `lo`, structure `mid`, subject `hi`, exactly one accent `lit` (the cyan part the viewer should watch).
- **Small precise detail, never noise.** Bevels, grooves inset from an edge, screws as dots, knurls on knobs, ruler ticks with a longer one every fifth. Each detail belongs to a part.
- **Lines resolve.** Every line ends on a face, another line or a dot. No leader lines, balloons or labels floating in the air.
- **Painter's order.** Draw the base first, then what stands on it, far before near (use `ISO.depth`). Split parts that wrap another part (a spring around a rod) into a back and a front half. A moving part is drawn in the slot where it physically sits and its motion must not change the order.
- **Composition.** Centre the figure and let it fill about 55 to 65 percent of the card. Card layout: `Fig n` top left, short title top right, hint bottom left, live readout bottom right. Words stay out of the drawing apart from at most one tiny label.
- **Calm motion.** Ease in and out, slow enough to follow, true to the model (a spring overshoots once). Never jerk.
- **Every creation is highly detailed.** At 1x it reads as one clear machine, at a 4x crop every region still has something true to find. A bare face or empty corner is unfinished.

## What the layer runtime cannot do

- **WebGL shaders** (fire, exhaust, water, caustics, lamp light) and the original's turning 3D mode need a live canvas and per-frame code. They are left out. Use SVG gradients, soft shapes and eased opacity for glow and steam, or a Three.js layer through `subclip-hyperframes-layer` as a separate task.
- **Pointer and keyboard interaction** does not exist in video. The "live readout" is scripted along the timeline from the model.
- **Scripts** for audits, captures and printing are not part of this skill.

## Stage 6: Verify like a critic

Saved state and successful calls are not visual proof.

- After each layer, `seek_timeline` and `view_current_frame` at the entrance, mid motion, the settled state and the exit.
- Look closely at joints: every part rests on another, every line ends on something, nothing passes through anything, no part is drawn in front of what should hide it, no tone staircase on round parts. Zoom into crops when you can.
- Check the text: the readout shows the true number at each beat; titles fit and sit clear of the figure.
- Check each scene boundary for gaps or overlaps with `get_timeline_contact_sheet`.
- Mix narration and music (`generate_music`, instrumental, low, only if asked) with `update_audio_item`. Say what still needs a listen.
- `set_project_duration`, then export only on request: `get_export_configuration`, `list_render_queue`, `export_video`.
- Record the model, parts list and decisions with `update_project_director_brief` and `write_session_summary`.

---


