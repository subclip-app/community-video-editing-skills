---
name: cartoon-animation
description: Make a short hand-painted cartoon in Subclip motion layers, with brush-stroke linework that boils, watercolor backgrounds, a character that acts through emotions, a storyboard with timed reads, and brush-wipe and iris transitions. Use when the creator wants a hand-drawn or painted-style animated short, a character cartoon, an acted animation, a storybook or Ghibli-like moving scene, or asks for emotions, takes, jumps and transitions in a drawn character.
---

# Cartoon animation (Subclip edition)

Make a short, hand-painted cartoon where a character acts, inside Subclip. The original is a starter kit by John Heibel for animating a mascot in p5.js with p5.brush and Claude, with a guide that makes the result look handmade, alive and like one film. This version keeps the guide (rules, animation principles, storyboard format, review loop, failure list) and rebuilds the painting engine as a small deterministic canvas kit that runs in a HyperFrames layer. Each shot is one editable layer. No installs, no Node, no Chrome or ffmpeg steps, no outside API keys.

The original mascot art is not included. You design your own character; a starter bean character is in the kit.

## When to use

- A short animated cartoon with a character that wants something, tries and reacts.
- A hand-painted look: flat wash plus boiling ink outlines, soft watercolor backgrounds, paper grain.
- An acted emotion sequence, a jump, a take, a wave, with proper anticipation and follow-through.
- A storybook or music-driven cartoon where every scene links to the next.

For simply rigging an existing SVG character use svg-character-animation; to review a finished character scene use character-animation-qa.

## Read first

1. `references/acting-guide.md` completely before you draw anything. It holds the three goals (handmade, alive, one piece), the seven rules, the animation principles, the storyboard format, the review loop and the common failures.
2. `references/canvas-brush-kit.md` for the painting kit, the layer template and an example shot.
3. With `read_subclip_skill`: `subclip-hyperframes-layer` and its authoring contract (its current schemas win), plus `subclip-video-editor` and `subclip-export`.

## Workflow

### 0. Set up

- Ask for the story idea, length (15 seconds is a good first film) and ratio. Landscape 1920x1080 is the kit's canvas; for vertical, change `W` and `H` in the kit and the layer root, and recompose.
- `create_project` with the matching canvas preset. Begin with `get_project_outline`. One edit at a time.
- Cost: layers cost no credits. Optional music is a paid generation: quote with `list_ai_models`, `estimate_ai_generation` and `get_ai_credit_status` and get approval first. There is no text and no narration by default.

### 1. Storyboard (no code yet)

Write `Logline`, `World`, `Motif`, `Character arc` and `Shots` with timed reads, as in the acting guide. Pick a small palette and a color arc. Save it with `update_project_director_brief`. Show it to the creator and let them react before building. Check it against the five questions in the guide: an event in every shot, time for every read, a transition at every seam, no text, an ending that rhymes with the opening.

### 2. Design the character

Design your own character with a few readable shapes (one outline per body part group, a clear silhouette). Define: size unit `u`, the face vocabulary (eyes, mouths, emotes) for the emotions the story needs, and the key views you will draw. Use the starter `bean` function in the kit as a base or replace it. Keep every character on model in every shot. Do not copy a trademarked mascot.

### 3. Build one shot per layer

For each shot, in order:

1. Write the shot function in the kit's style (`shot(ctx, t, lt, dur)`): camera drift, paper and background, the character with `emotions`, `jump` and your poses, props on arcs, glow where things shine, and the transition in and out. Block the key poses first and check them as stills before adding motion between them.
2. Put the kit, your shot and the driver into one standalone layer document (template in the kit file). Root `data-duration` equals the shot length. The shot is a pure function of time.
3. `validate_runtime_layer_source`, fix every error, then `add_runtime_layer` as a full-frame item (this layer replaces the background: say so in the item name, for example `shot-a-park`) with start and end times that tile the film. Keep each layer to about 2 to 6 seconds.
4. Check with `seek_timeline` and `view_current_frame` at the entrance, the key poses, mid-motion and the exit, and at each seam with its neighbor. Do the review loop from the guide. Fix in place with `edit_layer_source` or `update_runtime_layer`.
5. Move to the next shot only when this one reads.

Share the palette, the character and the helper code between layers by pasting the same kit text. Use `clone_runtime_layer` for a variant of a shot.

### 4. Music and sound (optional)

Cartoons work with a beat. If the creator wants music: `generate_music` (instrumental), `import_ai_operation_to_timeline`, then `update_audio_item` for volume. A requested tempo is only a claim, so measure it before locking hits to beats. Put the hits on the beat with `pulse`. Keep sound effects and music on native audio lanes. No lyrics on screen: act the meaning instead.

### 5. Assemble and verify

- Layers hard-join at the seams; the transitions inside the layers cover the cuts. Set the exact length with `set_project_duration`. No blank tail.
- `validate_project`. Inspect the first and last 0.5 s of every shot, every seam, and at least one frame per read.
- Tell the creator what you could not check: boil smoothness and motion feel need a play-through, and the preview has no zoom crop tool.
- Save decisions and failed checks with `update_project_director_brief` and `write_session_summary`. Export only when asked: `get_export_configuration`, `list_render_queue`, `export_video`.

## Reference

A finished example: [bean-and-butterfly-reference.mp4](examples/bean-and-butterfly-reference.mp4). A bored bean spots a butterfly, tries three hops on the beat and a lunge that misses, sulks at sunset, and the butterfly lands on its head. Three shots of about 4.5 seconds, each its own HyperFrames layer built from the kit: a take with a painted exclamation mark, a chase with parallax hills, a tumble with dizzy stars, hearts at the end. A brush wipe and two irises join the shots, a CC0 marimba loop at 120 BPM carries the beat, and boings and whooshes sit on the hops and wipes. The [contact sheet](examples/one-second-contact-sheet.jpg) shows one frame per second.

## Known limits

- The original used p5.js and p5.brush (WebGL watercolor and real pigment mixing). Subclip's layer runtime does not offer them as verified scripts, so the look is an approximation in plain canvas: soft stacked-alpha watercolor, two-pass ink lines, additive glow. If p5 is later allowed in the runtime, check it with `validate_runtime_layer_source` before relying on it.
- Heavy scenes (thousands of shapes per frame) render slowly. Keep shapes in the hundreds.
- The original mascot, its 31 emotion drawings and its model sheets are not included.
- No frame crop or strip tool: check detail with the editor's preview zoom and `view_current_frame` at close times.

Adapted for Subclip from [JohnHeibel/ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase) by John Heibel, MIT
