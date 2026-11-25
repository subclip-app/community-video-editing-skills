---
name: pixelfx
description: Make pixel art effects (fire, explosions, magic, impacts, weather, UI rewards, pickups, transitions, critters) as canvas motion layers in Subclip, from a catalog of 244 effect recipes plus a small deterministic pixel engine. Use when someone wants pixel art VFX, retro game juice, a specific effect ("a frost nova", "a coin pickup sparkle"), a pixel transition, or pixel effects layered over footage.
---

# Pixelfx for Subclip

Pixel art effects as code, drawn into a motion layer. Each effect is a function of time that draws into two small buffers: **color** (opaque, dithered or translucent pixels) and **light** (additive glow). No images are needed, so an effect can be recolored, mirrored and re-timed with a parameter. The result is an editable layer on the timeline, over the creator's footage or on its own.

The method is Hugo Duprez's: code is clay, trust your eyes, feed your references. One-shot prompts make mediocre effects. Drafts you look at and refine make good ones.

What changed from the original pixelfx: the Node tools (render, check, gallery), sprite sheet export, game engine integration and Patch publishing were dropped because Subclip works on a timeline. The 244 effects are now text recipes in [references/catalog.md](references/catalog.md); you rebuild them with the mini engine in [references/engine.md](references/engine.md). No scripts to run, no packages to install, no outside services.

## References

- [references/catalog.md](references/catalog.md): all 244 effects by category, with id, loop or one-shot, length, pixel size and a description of the look.
- [references/engine.md](references/engine.md): the pixel engine, two worked examples, the HyperFrames layer shell and the Remotion variant.
- [references/techniques.md](references/techniques.md): the quality bar, particles, color, dithering, hit-stop and shake, and the look-judge-fix loop.
- [references/recipes.md](references/recipes.md): nine effects as shot lists with start values.
- [references/palettes.md](references/palettes.md): 24 hue-shifted color ramps.

See it working: the [reference video](examples/pixel-effects-reference.mp4) shows torches, a ground blast and a frost nova built with this engine, and the [contact sheet](examples/one-second-contact-sheet.jpg) shows it frame by frame.

## Workflow

### 1. Read the project and the brief

`get_project_outline`, then `read_project_section` for what is on the timeline; `list_editor_assets` for IDs. Use `get_media_context` (with contact sheets) before placing an effect over footage so you know where the action is. Keep one explicit project ID on every call. Ask only what is missing: which effect or feel, over what, one-shot or loop, how long, which colors, where in the frame and when it should fire. Respect the canvas the creator already chose.

### 2. Pick the closest recipe

Search [references/catalog.md](references/catalog.md) by words ("frost", "slash", "loop", "transition"). Read the nearest two or three rows as shot lists. Most requests are an existing effect with different options:

- **Palette**: swap the ramp from [references/palettes.md](references/palettes.md). A blue fire is the fire recipe with the ice ramp.
- **Seed** for a different but equivalent take; **flip** to face left; **size** and **count**; **light strength** for glow.

If nothing fits, write one in the engine, guided by [references/techniques.md](references/techniques.md).

### 3. Choose the layer type

- **HyperFrames layer (default).** Real canvas, exact pixels, deterministic seek. Read `subclip-hyperframes-layer` first, then use the shell in [references/engine.md](references/engine.md). `add_runtime_layer` with kind `hyperframes`.
- **Remotion layer** only when the creator asked for Remotion, or the project already uses it. Read `subclip-remotion-layer` and its client-side rendering limits. A raw canvas is not drawn by the Remotion exporter, so the engine page shows the offscreen-canvas-to-image pattern. Validate with `validate_runtime_layer_source` and check an export.
- A pixel look on plain text or an image does not need this skill: use native text, media and keyframes.

### 4. Build, one effect per layer

1. Compose the source: engine, then the effect, then the seek handler. Keep the effect a pure function of time (see the engine rules).
2. Give the effect its real length. A loop runs a whole number of cycles per layer duration; a one-shot ends empty.
3. Place it with `add_runtime_layer`: smallest useful rectangle, centered on the point of action, transparent background. Use the full frame only for a transition. Pass `startTime` and `duration`.
4. For changes, `read_layer_source` then `edit_layer_source` with the returned hash. Do not write layer files directly.
5. One timeline edit at a time. Re-read state after each coherent edit. Keep the creator's other work.

### 5. Look, judge, fix

`view_current_frame` at the first frame, the hero frame, the middle and the tail; `get_timeline_contact_sheet` over the effect's range. Judge like a picky pixel artist using the table in [references/techniques.md](references/techniques.md). Fix the worst thing, look again. Three rounds minimum; showpieces take more. When the direction is open, draft three genuinely different versions as separate layers, look at all, keep the best, and delete only the drafts this run made. Say plainly that motion, pace and feel need a playback check.

### 6. Make it land in the edit

- **Hit-stop and shake** on the footage under a hit (`add_media_keyframe`): wind-up, 0.03 to 0.2 s freeze on contact, 2 to 3 px shake, recovery. See techniques.md.
- **Sound** at the hero frame, in native audio lanes: `search_public_audio` and `import_public_asset_to_timeline`, or `generate_music` for a sting (quote the model and cost first with `estimate_ai_generation`; check `get_ai_credit_status`). Use `update_audio_item` to trim and fade.
- **Transitions:** a full-frame layer that covers the cut; place the cut inside the fully covered span.
- **Captions and text** stay in native tools, clear of the effect: look with `get_timeline_contact_sheet` first.

### 7. Check and finish

Check every effect: first frame, hero frame, last frame (a one-shot is empty at its end), a loop's seam (last frame equals first), a seek forward and back giving the same frame, no `filter` or `backdrop-filter` anywhere in the layer, text-free (pixel text is drawn in the buffer). Look at an exported frame when the creator will export (`get_export_configuration`, `list_render_queue`, then `export_video` only when asked). Record decisions with `update_project_director_brief` and `write_session_summary`. Never claim a visual check you did not do.

## Rules

- Directional effects face right; ground effects stand on y = 0. Local origin is the anchor (feet, impact point, torch base).
- Generic motifs only. Never recreate a specific game's sprites, characters or logos.
- Do not copy one of Sprite Fusion's effects wholesale; use the techniques and make the design your own.
- Keep scale consistent in a shot: one art pixel is a whole number of screen pixels.
- The Patch Pixel typeface from the original repository is not included (it is not MIT). Use any readable pixel font that is licensed for the project, or draw text as pixels.

Adapted for Subclip from https://github.com/patch-gg/pixelfx by patch-gg, MIT
