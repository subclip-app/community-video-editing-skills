---
name: mg-styles-15
description: Make a 10-second motion design film in one of 15 deeply specified styles (frame-by-frame line boil, isometric 2.5D, flat vector, line art, 3D render, shape morph, sticker explainer, cyberpunk HUD, collage cut-out, aurora glassmorphism, Bauhaus, 80s synthwave VHS, pixel art, liquid motion, variety captions 9:16) as editable Subclip layers, then review it with a jury rubric. Use when the creator names one of these styles, asks for a motion design look by mood, wants "a film like" one of them, or wants a style prompt turned into their own film.
---

# 15 Motion Design Styles (Subclip edition)

Fifteen motion design styles, each with a complete director prompt: the output spec, a technical route, a beat-by-beat creative seed and the signature features a jury judges it against. The creator picks a style by name or mood, you swap the creative seed for their story, build the film as editable layers on the timeline, and review it with the rubric. The code route costs no credits.

## Files

- [references/director-prompt.md](references/director-prompt.md): the shared role, work steps, rules, craft checklist and delivery report used by every style. Read it once per film.
- `references/styles/<id>.md`: one file per style (table below). Each has the original film's spec, the Subclip route, the creative seed and the signature features, translated to plain English.
- [references/rubric.md](references/rubric.md): the jury review prompt and the revision prompt. Use it as the review checklist for every film.
- [references/new-style-template.md](references/new-style-template.md): how to write a prompt for a sixteenth style.

## Style index

| Style | Pick it when the mood is | Main Subclip route | File |
| --- | --- | --- | --- |
| Frame-by-frame / line boil | warm, handmade, playful | HyperFrames Canvas2D brush, boil every 2 frames | [05-cel-boil](references/styles/05-cel-boil.md) |
| Isometric 2.5D | dense but cute, systems, cities | HyperFrames Canvas2D iso faces or Three.js ortho camera | [03-isometric](references/styles/03-isometric.md) |
| Flat vector | bright, bouncy explainer | HyperFrames SVG + GSAP | [01-flat-vector](references/styles/01-flat-vector.md) |
| Line art | quiet, premium, minimal | HyperFrames SVG stroke draw-on | [02-line-art](references/styles/02-line-art.md) |
| 3D render (C4D look) | soft, satisfying, product | Native 3D layers or a HyperFrames Three.js layer | [04-3d-render](references/styles/04-3d-render.md) |
| Shape morph | visual storytelling, keynote | HyperFrames SVG morph chain | [08-morph](references/styles/08-morph.md) |
| Sticker explainer | hard facts, fast, serious | Cut-out stickers on a big canvas camera | [19-sticker-explainer](references/styles/19-sticker-explainer.md) |
| Cyberpunk HUD / FUI | high tech, tense, data | HyperFrames Canvas2D FUI, optional Three.js hologram | [22-hud](references/styles/22-hud.md) |
| Collage / cut-out | surreal, editorial, music | Cut-out photos at 12 fps in a HyperFrames layer | [06-collage](references/styles/06-collage.md) |
| Aurora and glassmorphism | slow, translucent, AI launch | Aurora canvas or shader plus glass panels | [12-aurora-glass](references/styles/12-aurora-glass.md) |
| Geometric Bauhaus | rational, graphic, on the beat | HyperFrames grid and beat-driven shapes | [09-bauhaus](references/styles/09-bauhaus.md) |
| 80s synthwave / VHS / Y2K | retro, neon, night drive | Canvas or WebGL grid, mirror-metal type, VHS pass | [10-synthwave](references/styles/10-synthwave.md) |
| Pixel art / 8-bit | game, nostalgic, chiptune | 320x180 canvas scaled x6, stepped sprites | [20-pixel](references/styles/20-pixel.md) |
| Liquid motion | organic, glossy, high energy | WebGL metaball shader or SVG goo | [07-liquid](references/styles/07-liquid.md) |
| Variety captions, 9:16 | funny, reactive, vlog | Native footage plus HyperFrames hanazi pops | [18-variety-captions](references/styles/18-variety-captions.md) |

When the creator gives only a mood, offer two candidates from the table with one line each and let them choose. One style per film unless asked.

## The creative seed swap

Each style file has a section called Creative seed: it is the only part that is a specific story. To make the creator's own film:

1. Replace the seed's story, invented brand name, copy and colors with the creator's (keep the beat structure: hook, escalation, hero moment at 60 to 75%, held end frame).
2. Change the Output only when asked (for example vertical 1080x1920 or another length); rescale the beat times proportionally.
3. Never drop or weaken the Signature features section: it is what makes the style recognizable at a glance, and the rubric judges the film against it.

The test film for this skill uses one seed across three styles (an invented bike-share brand, "Harbor"), which shows how far the same story can travel.

## Workflow

1. **Read first.** Read `subclip-video-editor` with `read_subclip_skill`, then `subclip-hyperframes-layer` (and its `references/authoring-contract.md`); add `subclip-3d-mockup` for the 3D style and `subclip-dynamic-captions` only if speech captions are wanted. External clients can discover schemas with `mcp_editor__list_tools`.
2. **Project.** For an existing project start with `get_project_outline`, then `read_project_section` for the lanes you need, and `get_media_context` before placing anything over footage. Otherwise `create_project` (landscape by default, vertical for the variety captions style). Pass the same explicit project ID on every call. One timeline edit at a time; re-read after each.
3. **Treatment.** Follow the How to work steps in `director-prompt.md`: write the treatment and cue sheet into `update_project_director_brief` before building.
4. **Build.** One HyperFrames layer per beat or scene (short segments, not one giant layer), full frame only because these are full-frame scenes. Every frame is a function of the seek time (see the deterministic rule and the proxy tween pattern in `director-prompt.md`). Run `validate_runtime_layer_source`, then `add_runtime_layer` with `kind: "hyperframes"`. Revise with `read_layer_source` and `edit_layer_source`. For the 3D style use native 3D layers (`list_3d_models`, `add_3d_layer`, `set_3d_screen_content`, `set_3d_keyframe_sequence`, `verify_3d_layer_setup`) or a Three.js HyperFrames layer; Blender is optional and only when the creator renders it themselves (`import_external_media`).
5. **Media.** Use the creator's footage and photos first. Stock only on request, through `search_public_media` and `import_public_asset_to_timeline`, keeping attribution. Cut-outs with `remove_media_background`. Reference imported files in layers only by the URL from `list_editor_assets`.
6. **Sound.** The upstream films synthesized their music in code; here music and effects are native audio items. `search_public_audio` (prefer CC0, keep attribution) or `generate_music` after a quote. Effects from `search_public_audio` with `source: "sfx"`. Trim and fade with `update_audio_item`, keep music peaks under -1 dB, and place every hit on its visual frame from the cue sheet.
7. **Look.** `get_timeline_contact_sheet` every 0.5 s, then full-size `view_frame` or `view_current_frame` at the hook, the hero moment and the end frame. Fix clipping, fallback fonts, banding and dead spans in place.
8. **Review.** Run the [rubric](references/rubric.md), ideally in a separate session or subagent, then revise. Offer a second round.
9. **Export** only when asked: `get_export_configuration`, `list_render_queue`, then `export_video` once. Record decisions and the review scores with `write_session_summary`.

## Cost

The code route (HyperFrames layers, native 3D, library music and effects) costs no credits. Generated music, images, video or voice are optional: offer the creator's own working Codex CLI first for images, otherwise quote with `get_ai_credit_status`, `list_ai_models` and `estimate_ai_generation` and wait for approval. The source names no AI models; it made everything in code.

## Rules

- Deterministic layers: no wall-clock time, no unseeded randomness, no `requestAnimationFrame` clock.
- Never put CSS `filter` or `backdrop-filter` on text or its containers (glass and glow on text are drawn in canvas or with `text-shadow`).
- Invent brand names; no real trademarks. Copy in the creator's language, checked for typos.
- Only commercially usable assets. The upstream fonts, HDRI, textures and photos are not included here: use fonts that load in the layer runtime and verify them in a rendered frame.
- Do not claim a check you did not run.

## Reference

A finished test: [mg-styles-reference.mp4](examples/mg-styles-reference.mp4), 18 seconds, three styles from this skill with one shared creative seed (the invented bike-share brand "Harbor"): isometric 2.5D (tiles drop in a wave, buildings grow with roof caps landing late, bikes, a drone and data streams, a pull-back to a title on the iso plane), cyberpunk HUD (lines draw on, numbers roll and settle, lock brackets snap from 1.4 to 1.0, everything flips to alert orange) and Bauhaus (one action per beat at 120 BPM on a 120 px grid, freezing into a poster). Each scene is one HyperFrames Canvas2D layer; the music is three CC0 loops. The [contact sheet](examples/mg-styles-contact-sheet.jpg) shows one frame per second.

Adapted for Subclip from [Vincentwei1021/mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15) by Vincentwei1021, MIT.
