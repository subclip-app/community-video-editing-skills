# Subclip tools, routes and credits

What replaces the upstream's local Remotion project, setup scripts and command-line tools. Model names are examples from the live catalog in November 2026; `list_ai_models` and `estimate_ai_generation` win. Never ask for an API key in chat; never run an installer; no script from this skill is ever executed silently.

| Job | Upstream tool | Subclip tool |
| --- | --- | --- |
| Scene code | Remotion template project | `read_subclip_skill` for `subclip-hyperframes-layer` (or the Remotion layer skill), `validate_runtime_layer_source`, `add_runtime_layer` kind `hyperframes` or `remotion` |
| Voice | free voice API plus local models | `list_local_voices`, `generate_local_speech` (free); `generate_speech` after a quote |
| Word timing and pronunciation check | local speech recognition | `transcribe_project`, `update_caption_words` |
| Music | procedural music generator | `search_public_audio`, or `generate_music` instrumental after a quote |
| Sound effects | a bundled effects folder | `search_public_audio` (whoosh, impact, ding, key tick, clap, riser) |
| Captions | custom caption component | `apply_dynamic_caption_preset` then `update_caption_style`, or captions inside the layer keyed to the word timings |
| Stills contact sheet | a still-render script | `seek_timeline` plus `view_current_frame`, `get_timeline_contact_sheet` |
| Seams check | a seams script | `view_current_frame` just before and after each cut |
| Delivery and loudness | a delivery script | `export_video`, then measure (see `safe-zones-and-delivery.md`) |
| 3D plates from Blender | Blender | not used here; see the skill `blender-to-subclip` |
| Images for stills routes | image generator | the creator's own Codex CLI generation first (`import_external_media`), else `generate_ai_media` kind image after a quote |

## Quote template (before any paid step)

| Stage | Model | Count | Seconds | Credits |
| --- | --- | --- | --- | --- |
| [stage] | [model] | [n] | [s] | [from estimate] |
| Total plus about 15 percent for retakes | | | | [sum] |

Ask: "This costs about [X] credits and you have [Y]. Go ahead?" Pass `confirmed: true` only on a clear yes. Stop on credit or storage limits.

## Assembly order
Voice, transcript, music bed, scene layers (one `add_runtime_layer` at a time), captions, effects, `set_project_duration` to the last audio end plus a short tail, checks, export when asked. One timeline edit at a time; re-read the project after each.
