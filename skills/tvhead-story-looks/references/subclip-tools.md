# Subclip tools, routes and credits

What replaces the upstream's local studio app, paid voice and image services, and setup scripts. Model names are examples from the live catalog in November 2026. `list_ai_models` and `estimate_ai_generation` win over anything written here. Never ask for an API key in chat; never run an installer.

## Which route for what

| Job | First choice | Then |
| --- | --- | --- |
| Plates and stills | The creator's own Codex CLI image generation, brought in with `import_external_media` (no Subclip credits) | `generate_ai_media` kind image (for example `nano-banana-2` with reference images in `sourceAssets` role `reference`; `ideogram-4` for text-heavy frames) after a quote |
| Code-drawn scenes (Route B, free) | A HyperFrames layer: read `subclip-hyperframes-layer` with `read_subclip_skill`, write one self-contained scene whose every frame is a function of time, `validate_runtime_layer_source`, then `add_runtime_layer` kind `hyperframes` | A Remotion layer when the creator asks for React (see `remotion-motion-layers`) |
| Animated clips | At most 3 clips of 3 to 4 seconds on the key beats: `generate_ai_media` kind video from the scene still (for example `p-video-2` about 2.55 credits a second, `ltx-2.5-fast`) | Slow keyframed moves on the still (`add_media_keyframe`) for everything else |
| Whole-story video models | The prompt package route in `ai-video-prompt-package.md` | none |
| Voice | `list_local_voices` then `generate_local_speech` (free) | `generate_speech` with a voice from `list_ai_voices` after `get_voice_samples` and a quote |
| Word timings | `transcribe_project` (local mode, one audio item at a time) | `import_caption_cues_for_media_item` if the creator has cues |
| Captions | `apply_dynamic_caption_preset` then `update_caption_style` | `add_text_overlay` for a single title |
| Music and effects | `search_public_audio` (licensed tracks and effects) | `generate_music` instrumental after a quote |

## Quote template (before the first paid step)

| Stage | Model | Count | Seconds | Credits |
| --- | --- | --- | --- | --- |
| Plates | [model] | [n] | - | [from estimate] |
| Stills | [model] | [n] | - | [from estimate] |
| Clips | [model] | [n, max 3] | [3 to 4 each] | [from estimate] |
| Total plus about 15 percent retakes | | | | [sum] |

Ask: "This costs about [X] credits and you have [Y]. Go ahead?" Pass `confirmed: true` only on a clear yes. Stop on credit or storage limits.

## Assembly steps

1. Import the voice at the start (`import_generated_audio_to_timeline`), run `transcribe_project`, keep a table of each line's start and end.
2. For each scene put the still at the line's start with the slot equal to the line (use `update_media_item`), then `add_media_keyframe` for the slow move. For animated shots `import_ai_operation_to_timeline` with `replaceItemId` so the clip keeps the slot, then `trim_media_item`.
3. Code layers: `add_runtime_layer` with the layer's start and end on the scene.
4. Captions after transcription; style last, because a preset resets position.
5. Music under the voice at about 0.12 to 0.2 volume (`update_audio_item`), fades in and out. Effects only on real actions: a whoosh into a hard seam, a pop on a pickup, a thud on a stamp.
6. `set_project_duration` to the last audio end plus a short tail.
7. Check with `qa.md`.

## Voices
Match the character: a female character gets a female voice, a child a child-like voice only where the platform allows. Never use a voice that imitates a real person.
