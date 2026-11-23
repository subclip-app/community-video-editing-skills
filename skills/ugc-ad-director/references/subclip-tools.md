# Subclip tools, models and credits

Everything runs inside Subclip and the creator's credits. No outside API key, ever. Model names are examples from November 2026; `list_ai_models` and `estimate_ai_generation` always win.

## Routes

| Job | First choice | Then |
| --- | --- | --- |
| Sheets and storyboard image | The creator's own Codex CLI image generation, brought in with `import_external_media` (no Subclip credits) | `generate_ai_media` kind image with a reference-following model from `list_ai_models` (for example `nano-banana-2`, `seedream-5-lite`); pass the earlier sheets in `sourceAssets` with role `reference` |
| Clips from a still | `generate_ai_media` kind video with an image-to-video model (for example `p-video-2`, `hailuo-2-3`, `wan-3`, `ltx-2.5-fast`); start frame is a panel or a still made from the sheets | A model that takes a start and end frame when the move must be exact |
| Talking shots | `list_ai_models` kind avatar: a model that takes a portrait plus speech audio (for example `p-video-avatar`, Kling Avatar v2, OmniHuman 1.5); or `generate_ai_media` with `avatar` and `speech` | Frame the line so the mouth is not seen (voice over a product or reaction shot) |
| Voice | Free `generate_local_speech` for drafts; `generate_speech` with a voice from `list_ai_voices` after `get_voice_samples` and `set_approved_voice` | Creator's own recording via `import_external_media` |
| Music and effects | `search_public_audio` first; `generate_music` instrumental only if asked | Quiet effects only on key actions |

Check live prices with `list_ai_models` for each model you propose. Do not quote a price from this file.

## Credit quote (before every paid step)

Show a table: step, model, count, seconds, credits each, total, plus about 15 percent for retakes. Use `estimate_ai_generation` with exact inputs and `get_ai_credit_status` for the balance. Get approval for that scope; a bigger bill needs a new decision. Stop at credit or storage limits.

Savings: Codex CLI for images, 720p models for tests, one clip per two beats, still shots with a gentle push (`add_media_keyframe`) instead of clips, voice over for non-talking shots, local TTS for drafts, test one shot before generating all.

## Build (stage 10)

1. Clip plan: from the storyboard table list each shot with its start frame, model, seconds and credits. Mark talking shots. Ask for quote approval.
2. Voice first. Make the spoken lines (local TTS draft, or approved voice) and import them. Real audio length is the clock; place each line.
3. Clips: one operation at a time; keep each operation ID; `get_ai_operation` at calm intervals; do not resubmit a queued job. Import with `import_ai_operation_to_timeline`. Look at the first and last frame of every clip against the sheets; regenerate only a bad shot.
4. Captions: `transcribe_project` (one job at a time), `update_caption_words`, style in the platform look (bold, 2 to 4 words, inside the safe zone). Add hook text with `add_text_overlay`.
5. Timeline: one edit at a time, re-read the project after each edit. Add a quiet music bed under the voice if wanted.
6. Review: `get_timeline_contact_sheet`, `view_current_frame` on doubtful frames (pass `timeSeconds`). Look for identity drift, product change, a new room, lip-sync slip and text in the unsafe zone.
7. Export only when asked: `get_export_configuration`, `list_render_queue`, `export_video` (mp4, 1080 by 1920).

Say plainly that audio level was set by volume, not measured, and ask the creator to listen.

## Disclosure and safety reminders

Add the platform's AI label where it asks for one (many short-video platforms do for realistic synthetic people). Keep the character fictional or consenting. No health, income or guaranteed results.
