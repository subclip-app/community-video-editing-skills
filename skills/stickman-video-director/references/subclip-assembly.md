# Subclip tools, routes, credits and assembly

Everything runs through Subclip's tools and the creator's AI credits. No outside API key, no account at a video platform, no installers, no scripts run on the creator's computer. Model names below are examples from the live catalog in November 2026. The live `list_ai_models` always wins, and every price comes from `estimate_ai_generation`.

The original project works through Google Flow, its own web app, a local renderer and several paid services. None of that is used here. The mapping:

| Upstream step | In Subclip |
| --- | --- |
| Model engine clips in Google Flow (Veo 3.1 Fast, Omni Flash) | `generate_ai_media` kind video with the model family the look names: Gemini Omni class (for example `gemini-omni-1.1`) or the closest model in `list_ai_models` (for example `p-video-2`, about 2.55 credits a second at 720p). Say which model you used and why |
| Browser operation of a video service | Not needed. Submit the approved prompts directly, keep each operation ID, check `get_ai_operation` |
| Images by Codex gpt-image-2 (code engine) | The creator's Codex CLI image generation first (no Subclip credits), imported with `import_external_media`. Else `generate_ai_media` kind image with `nano-banana-2` (about 2.5 credits per 1K image) or another reference-following model |
| Local renderer, layered PNG animation scripts | HyperFrames layers (`add_runtime_layer`, read the installed skill `subclip-hyperframes-layer`), or Remotion only when the creator asks for it. One editable layer per scene |
| Narration by Gemini, ElevenLabs or other paid TTS | `generate_local_speech` first, gender matched. Cloud voice only on request and after a quote (`voice-and-sound.md`) |
| Music and sound libraries shipped in the upstream repo | `search_public_audio` (free, licensed, returns attribution) or `generate_music`. The upstream's own audio files are not included |
| ffmpeg assembly and subtitle burn-in | The editable timeline, `transcribe_project`, dynamic captions, `export_video` |

## Before any project work

1. `read_subclip_skill` for `subclip-video-editor`, then the ones this film needs: `subclip-ai-generation`, `subclip-hyperframes-layer`, `subclip-dynamic-captions`, `subclip-tts`, `subclip-music-generation`, `subclip-export`.
2. `create_project` (or reuse) with the right aspect ratio and 30 fps. Use one explicit project ID on every call. `get_project_outline`, then `list_editor_assets`. If the creator supplied footage or stills, read `get_media_context` first and look at the contact sheets.
3. Offer the creator's own generators first for images: if the Codex CLI is signed in and working, offer it (see the installed `subclip-ai-generation` skill, `references/creator-cli-generators.md`). Ask once if no generator was chosen, and respect a prior choice.
4. `list_ai_models` for the kinds you need and `get_ai_credit_status`.

## Credit quoting (ask before every paid step)

Before the first paid stage, show a table: stage, model, count, duration, credits, total, plus about 15 percent for retakes. Use `estimate_ai_generation` with the exact inputs. Get approval for that scope. A bigger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact operation. Stop on credit or storage limits.

Typical numbers (checked 2026-11-24, use the live ones): `p-video-2` video at 720p is 2.55 credits a second, so a 10 second clip is 25.5 credits (up to 28.05). A `nano-banana-2` image is 2.5 credits at 1K. Local voice, local transcription, captions, HyperFrames layers, keyframes and export spend no credits.

Cheaper paths, in order: the creator's Codex CLI for images; code engine looks (09 to 15) instead of video clips; still shots with a slow move for quiet beats and animated clips only for the key actions; 720p for tests; one representative test clip before the full set.

## Operations

Generation calls return an operation ID. Keep it. In-app agents end their turn after accepted asynchronous work and resume on its completion event. External clients check `get_ai_operation` at reasonable intervals. Do not resubmit because a job is queued or slow; reconcile the real state before retrying. Import with `import_ai_operation_to_timeline`. Do not store temporary signed URLs in project notes.

## Assembly, one edit call at a time

Independent generations may run together inside the approved budget; timeline writes may not. Re-read state after each coherent edit and use the returned item IDs.

1. **Voice.** Generate, import and transcribe the narration (see `voice-and-sound.md`). Table every row's start and end from the word timings.
2. **Pictures.** Model engine: import each accepted clip with `import_ai_operation_to_timeline`, `trim_media_item` to the retained range, place it at its row start with `update_media_item`. Code engine: import the stills (`import_external_media` or `import_generated_media_to_timeline`), place them on the row slots, then add one HyperFrames layer per scene for the local moves (head, hands, props, push, parallax) with `add_runtime_layer`; revise with `read_layer_source` and `edit_layer_source`. Look files list the moves that matter.
3. **Still inserts.** A gentle push with `add_media_keyframe`: scale 1.0 at the slot start, 1.05 at the end, linear.
4. **Captions.** Dynamic captions preset after transcription, then `update_caption_style` (look rules). Check the safe area on the target platform. For 9:16 keep captions inside the clear band (about y 347 to 1426 on a 1920 tall frame).
5. **Overlays.** Only planned 2 to 5 word overlays, with `add_text_overlay` and `update_text_item`, clear of faces and key action.
6. **Sound.** Music bed, effects and ambience as separate audio items with `update_audio_item` (see `voice-and-sound.md`).
7. **Length.** `set_project_duration` to the narration end plus a short tail. No blank tail.
8. **Review.** `get_timeline_contact_sheet` across the film and `view_current_frame` (with `timeSeconds`) at every join and every doubtful frame. Render frames twice on layers. Compare against the look's reference clip in `examples/`.
9. **Export** only when the creator asks: `get_export_configuration`, `list_render_queue` (no duplicate), then `export_video`. Publishing to social accounts is out of scope unless the creator asks and the app confirms.
10. **Record.** `update_project_director_brief` with the approved proposal, locks and decisions; `write_session_summary` at the end, with failed checks listed honestly.

## Verification

Saved state and successful tool calls are not visual proof. Look at the frames. Say plainly what you could not check: you cannot hear the sound, so report volumes you set and ask the creator to listen. Never claim a test you did not run.
