---
name: anatomy-reveal
description: Build any physical product (a camera, headphones, a kettle, a sneaker, a watch, a drill, a bottle) as a crafted anatomy figure made of many small convex parts and turn it into a product reveal film in Subclip. The object tumbles in, whips to close-ups of its details, shows a feature working, explodes into its parts, highlights one part at a time with a callout, and snaps back together for a hero shot, all on a white ground in one HyperFrames layer. Works from a photo of the product or from its name. Use when the creator asks for an exploded view, a teardown or dissection animation, a product anatomy video, a product highlight shot ("show the battery inside"), or a product reveal or product motion video of a physical object.
---

# Anatomy reveal

The product is never a stock 3D model, a traced picture or a generated image. It is built part by part from its real dimensions: every panel, screw, dial, glass element and board is its own convex solid, shaded in four tones by how it faces the light and drawn in an order solved from separating planes. Because the product is real geometry, the same model turns through any angle, comes apart and drives the whole film. Everything is code, so the core workflow uses zero Subclip AI credits.

In Subclip the film is one HyperFrames layer: the kit in [assets/reveal-kit.js](assets/reveal-kit.js), a scene block that builds the product and a film block of keyed beats. Music and sound effects are native audio items.

How this differs from nearby skills:

- `anatomy` explains an abstract idea with an invented isometric machine. Use anatomy-reveal when the subject is a real product and the film should take it apart.
- `threejs-3d-scenes` and `blender-to-subclip` render shaded 3D meshes. Use anatomy-reveal for the clean drawn look: ink outlines, flat tones, labels and callouts, nothing to light or texture.
- `product-launch-motion` makes SaaS and app launch films. Pair it with this skill when a launch needs a hardware beat.

Read before building:

- [references/inputs.md](references/inputs.md): from a photo or a name to dimensions, features and a parts list.
- [references/building.md](references/building.md): convex parts, hollow shells, explode order, markings, anchors, features.
- [references/shots.md](references/shots.md): the beats, keys, eases, highlights and framing.
- [references/look.md](references/look.md): white ground, plate, materials and the highlight.
- [references/layer-template.md](references/layer-template.md): the layer document, the kit API and the validator rules.
- [references/example-camera.js](references/example-camera.js): the complete scene and film blocks of the reference video.

## Workflow

1. **Size it.** A Clip is 40 to 80 parts and 10 to 20 s; a Hero is 80 to 150 parts and 20 to 40 s. Tell the creator which, and ask the length and ratio if they did not say (default 16:9, 30 s).
2. **Read project state.** Load Subclip's `subclip-video-editor` and `subclip-hyperframes-layer` skills and follow their current tool schemas. Use one explicit project ID on every call. Start with `get_project_outline`, then `read_project_section` for the lanes you touch, `get_project_director_brief` and `list_editor_assets`. For a new film, `create_project` with a landscape canvas (or the ratio asked) and a name that says what it is.
3. **Gather the facts** as in [references/inputs.md](references/inputs.md). If the creator shared a photo, call `get_media_context` with `includeContactSheet: true` first, and inspect exact moments before describing it. Write the spec (size, materials, moves, inside, parts list, highlight targets) with `update_project_director_brief`, and show it to the creator when it rests on guesses.
4. **Build the product** in the scene block, following [references/building.md](references/building.md): a hollow shell of plates, inner parts in the cavity, explode assemblies whose outer parts lead, feature groups, decals for markings, an anchor for every shot.
5. **Choreograph** the film block beat by beat ([references/shots.md](references/shots.md)): tumble in, whips to two or three details, one or two features working, pull out, explode, one highlight shot per interesting inner part with a callout, implode, hero.
6. **Validate and add.** Paste the kit, the scene block and the film block into the template, call `validate_runtime_layer_source` with the full source and fix every error. Then `add_runtime_layer` with `kind: "hyperframes"`, `startTime: 0`, the film's `duration`, `intrinsicWidth: 1920`, `intrinsicHeight: 1080` and full-frame geometry (`x: 50, y: 50, width: 100, height: 100`), because the film paints its own white ground. Compare the returned `sourceHash` with a SHA-256 of your local file when you pasted a long source.
7. **Frame it by eye.** Call `view_frame` with up to eight times per call: each whip's landing, each feature at its extreme, `apart` mid way and at 1, every highlight with its callout, the hero. Fix framing, cut off parts, wrong draw order, decals that face the wrong way and callouts outside the plate with `read_layer_source` and `edit_layer_source`, then look again. Seek backward and forward: the same time must give the same picture.
8. **Sound.** Add music and effects as native audio items: a CC0 or creator-owned bed from the creator's library or `search_public_audio` (check the license), a short whoosh on each whip and a stronger one on the explode and implode. Keep music peaks under -1 dB. Use `set_project_duration` to end on the hero hold.
9. **Record and export.** `update_project_director_brief` with the spec, beats and checks, then `write_session_summary`. Export only when asked: `get_export_configuration`, `list_render_queue`, then one `export_video`.

## Rules

- **Geometry only.** No image from the creator, the web or a generator ends up in the film. Engraving, print and screens are decals: SVG nodes drawn on a face.
- **True to the object.** Real millimetres, the real count of buttons and screws, the real way it opens. Detail comes from real parts, never from noise. Every number in a callout or readout is true or marked as an estimate in the brief.
- **Convex parts only, never sunk in.** Concave shapes are several parts; parts meet flush or with a gap.
- **One continuous take.** Change subject with a whip (0.3 to 0.35 s); holds keep drifting; the last second is the only stillness.
- **One highlight at a time.** The target turns accent cyan, everything else fades to a ghost, one callout names it with one true number.
- **White ground by default.** Subclip blue `#153592` for the plate and labels, cyan `#26c9d5` for the highlight. The original's warm paper only on request.
- **Neutral markings by default.** Label parts generically (sensor, battery, crown). Draw a maker's logo only when the creator asks for a faithful replica of their own product.
- **Deterministic.** The film is a pure function of time: no timers, wall clock or random numbers.

## What changed from the original

The original skill builds the product with the Anatomy kit in Node, renders frames in a headless browser with an adaptive motion blur and encodes them into an MP4 outside the editor. Subclip layers cannot run those scripts, load outside libraries or assign markup strings, so this edition ships a compact rewrite of the same method as one inline kit: convex parts in millimetres, four-tone shading by facing, painter's order from separating planes, the staggered explode, the keyed timeline with the original's eases and the plate. It adds highlight shots with callouts, which the original does not have. It drops the interactive dissection page and the motion blur; whips are a little longer to read without blur.

## Cost

Building, animating and exporting use zero Subclip credits. Music and effects from the public library are free. If the creator wants narration, `generate_local_speech` is free; for a cloud voice, quote it with `estimate_ai_generation` and get a yes first. No image or video generation is needed or used.

## Verify

- Every part is visible where it should be: no part drawn in front of one that covers it, at the explode angle and in every close-up.
- The explode reads at its own angle and stays fully inside the frame; no part passes through another while it comes apart or goes back.
- Each feature works and returns; each highlight shows only its target lit, with a readable callout inside the plate.
- Two views of the same time match.
- Audio: music under -1 dB peak, whooshes land on the whips and the explode.

## Reference

[anatomy-reveal-reference.mp4](examples/anatomy-reveal-reference.mp4): a 30 second reveal of a compact mirrorless camera built from 53 convex parts in 21 assemblies. It tumbles in, whips to the mode dial (which turns), the shutter button (which presses), the tilting rear screen and the zooming lens, explodes, highlights the image sensor, the battery and the main board one at a time with callouts, and comes back together for the hero shot. One HyperFrames layer made with this kit and [references/example-camera.js](references/example-camera.js), white ground, the CC0 music bed crushed-suspense-001 by Johnmode and whooshes from the Subclip sound library. The [contact sheet](examples/anatomy-reveal-contact-sheet.jpg) shows one frame per second. Zero AI credits.

Adapted for Subclip from [annnguyentt/anatomy-reveal-skill](https://github.com/annnguyentt/anatomy-reveal-skill) by Ann Nguyen ([@ann_nnng](https://x.com/ann_nnng)), MIT. The original builds on the Anatomy kit by Ryan ([wheresryan22/anatomy](https://github.com/wheresryan22/anatomy), MIT).
