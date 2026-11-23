# Subclip tools, models and budget

Everything runs through Subclip's tools and the creator's AI credits. No outside API key. Model names and prices below are examples from the live catalog in November 2026. Always check `list_ai_models` and quote with `estimate_ai_generation`; the live catalog wins.

## Which route for what

| Job | First choice | Then |
| --- | --- | --- |
| Avatar image | The creator's Codex CLI image generation, brought in with `import_external_media` (no Subclip credits) | `generate_ai_media` kind image with a model from `list_ai_models` (for example `nano-banana-2`, about 2.5 credits; `gpt-image-2.5-flare`, about 4) |
| Speech | `generate_speech` with a cloud speech model and a voice that matches the avatar's gender and age (cheap: about 0.3 credits per short line on `elevenlabs-flash-v2.5`) | `generate_local_speech` (free, robotic, and its English voices carry no gender data: check pitch) for tests and drafts |
| Talking clip | An avatar model from `list_ai_models` kind avatar: `p-video-avatar` (about 2.1 credits a second, 720p, takes a portrait and a speech file), `avatar-iv` (about 4.3), `kling-avatar-v2` (about 4.8), `omni-human-1.5` (about 13.6) | An image to video model that makes its own speech and sound, such as the `veo-3.1` family (lite about 4.3 a second, fast about 8.5), when the clip needs a moving camera or a real scene more than exact lip sync |
| Cutaway or product shot | Codex image or `generate_ai_media` image, laid over the talking clip with a gentle zoom | `p-video-2` (about 2.6 a second) or `ltx-2.5-fast` image to video for a short moving shot |
| Existing footage with new speech | `kling-lip-sync` (about 1.2 a second, takes a video and audio) | none |
| Music bed | `search_public_audio` for a licensed track | `generate_music` instrumental |

The avatar models take the length of the clip from the speech file, and some bill a minimum (about 5 seconds), so the quote can be higher than length times rate. Always use the `estimate_ai_generation` number.

## Match the voice to the avatar

At intake read the avatar's apparent gender and age from the image. The voice must match: female avatar, female voice; male avatar, male voice; a young face gets a young voice. A mismatched voice breaks the ad at once.

How to verify:

1. Cloud voices: `list_ai_voices` (filter by `modelId` and `language`) and read each voice's `gender`, `age` and `description` fields. The gender filter is not always applied, so read the field on the voice you pick. Use `get_voice_samples` with a line of the real script for a free preview.
2. Local voices: `list_local_voices` returns no gender field for English voices, and the built-in ones are often low-pitched (the voice called alba reads as male for a female avatar). Never assume a local voice is female from its name. Make a short test line, listen or measure its pitch (an adult woman's speaking voice sits roughly 165 to 255 Hz, a man's 85 to 155 Hz), and if it is not clearly right, switch to a cloud speech model. Cloud speech is cheap for a few short lines (for example `elevenlabs-flash-v2.5` with a female preset voice cost under 1 credit for three lines): quote it first.
3. Say which voice you chose and why, and keep the same voice id in every clip. Approve it with `set_approved_voice`.
4. If you cannot check the voice, tell the creator it is unchecked and ask them to listen.

## Quote before spending

Before the first paid step show a table:

| Stage | Model | Count | Seconds | Credits |
| --- | --- | --- | --- | --- |
| Avatar image | Codex CLI | 1 | none | 0 |
| Speech | cloud speech, female voice | 3 | about 16 | about 1 |
| Talking clips | p-video-avatar 720p | 3 | about 16 | about 30 |
| Total plus about 15 percent for retakes | | | | about 36 |

Get the numbers from `estimate_ai_generation` with the exact inputs. Wait for a clear yes to that scope. "Make the ad" is not a yes to spend. A bigger bill or a retake needs a new yes. Stop on credit or storage limits and tell the creator. Check `get_ai_credit_status` before and after, and report what was really spent.

Cheaper ways: free local speech and Codex images, 720p, fewer and longer clips, one angle, reuse the same avatar image, still cutaways instead of video cutaways.

## Operations

Generation calls return an operation ID. Keep it. Do not resubmit because a job is queued or slow; check `get_ai_operation` at reasonable intervals. If a call fails with a transient error, retry once after a few seconds. Do not store signed URLs in notes.

## Steps in the editor

One timeline edit at a time per project. Re-read state after each coherent edit and use the returned item IDs.

1. **Project.** `create_project` with `canvasPreset` vertical (1080 by 1920, 30 fps).
2. **Speech first.** One `generate_local_speech` (or `generate_speech`) per clip, `voiceId` the same every time. Note each file's duration. Import each with `import_generated_audio_to_timeline` (`generatedPath`, `startTime`) so it exists as a project file. Import the avatar image with `import_external_media`.
3. **Estimate, then generate.** For each clip `estimate_ai_generation`, then `generate_ai_media` with `kind: video`, `modelId`, `resolution`, `confirmed: true` only after the creator's yes, and `sourceAssets` entries of the form `{ sourceFileId, role }`: the portrait with role `reference` and the speech file with role `audio_reference`. Generation jobs may run together inside the approved budget.
4. **Place.** `import_ai_operation_to_timeline` with `startTime` set to the end of the previous clip. Trim any silent tail with `trim_media_item` (`sourceStartTime`, `sourceEndTime`). The clip carries its own speech, so delete the separate speech items (`delete_timeline_item` with `itemType: audio`) to avoid doubling.
5. **Captions.** `transcribe_project` with mode local, the language, and a `mediaItemId` for each clip, one job at a time (`get_transcription_status` until completed). Then `apply_dynamic_caption_preset` (for example `minimalist-white`), then `update_caption_style` last (bold, white, 60 to 64 px, one line, 2 to 3 words a page). Fix misheard words with `update_caption_words` (`wordId` and `text`).
6. **Hook and call to action.** `add_text_overlay` then `update_text_item` (flat fields: `fontSize`, `fontWeight`, `color`, `backgroundColor`, `positionX`, `positionY`, `maxWidthPercent`). A hook of under 8 words from 0 s to about 2.4 s; one call to action on the last clip.
7. **AI label.** A small text item for the whole length: "AI-generated ad" (add "fictional product" for a demo). Keep it inside the safe zone.
8. **Cutaways.** If the script has overlays, place the image or short clip on a higher layer over the talking clip with `update_media_item`, kept short (1 to 2 seconds) so her voice stays the clock.
9. **Length.** `set_project_duration` to the last clip's end.
10. **Review.** `get_timeline_contact_sheet` and `view_current_frame` (`timeSeconds`) at the hook, a demo moment and the call to action. Work through `qa.md`.
11. **Export** only when the creator asks: `get_export_configuration`, `list_render_queue` so you do not queue a duplicate, then `export_video` (mp4, 1080p), `get_export_status` with the `requestId`.

## Safe zone for captions and text (1080 by 1920)

App interfaces cover the top and bottom. Keep captions and text inside x 71 to 1027 and y 347 to 1426 (18 to 74 percent from the top), and below y 868 only x 71 to 886. Put captions near 70 to 73 percent. Do not cover the product or the mouth. In a selfie-style frame the product is often at 55 to 70 percent, so check the frame and move captions or text rather than hiding it.

## Wrap up

Record decisions, models and credits with `update_project_director_brief` and `write_session_summary`. Say what you checked and what you could not check (the voice, the taste, the lip sync on a real phone).
