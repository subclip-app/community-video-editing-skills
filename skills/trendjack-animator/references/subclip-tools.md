# Subclip tools, models and budget

Everything runs through Subclip's tools and the creator's AI credits. No outside API key. Model names below are examples from the live catalog in November 2026. Always check `list_ai_models` and quote with `estimate_ai_generation`; the live catalog wins. Never ask for an API key in chat.

## Which route for what

| Job | First choice | Then |
| --- | --- | --- |
| Plates and stills | The creator's own Codex CLI image generation, brought in with `import_external_media` (no Subclip credits) | `generate_ai_media` kind image with a reference-following model from `list_ai_models` (for example `nano-banana-2`, up to 14 references; `seedream-5-lite`; `ideogram-4` for text-heavy frames). Pass references in `sourceAssets` with role `reference` |
| Clips | `generate_ai_media` kind video with a start-frame model: economical `p-video-2` (about 720p), `hailuo-2-3`, `wan-3`; strong tier `gemini-omni-1.1`; MiniMax H3 Max Turbo or H3 Max at 768P | The Grok CLI for animation when it is signed in and working. A start and end frame model from the live list for exact moves |
| Lip-sync shots | A model whose catalog entry lists audio input: `list_ai_models` with kind avatar (for example `p-video-avatar`, Kling Avatar v2, OmniHuman 1.5, HeyGen Avatar IV take a portrait plus speech audio; Kling Lip Sync takes an existing video plus audio), or `generate_ai_media` with `avatar` and `speech` for an actor or saved avatar | If none fits, frame the line so the mouth is not seen (from behind, over the shoulder, the listener's reaction) and let the voice carry it |
| Spoken voice | `generate_speech` (for example `gemini-3.1-flash-tts`, ElevenLabs v3, MiniMax speech) with a voice from `list_ai_voices`, approved with `set_approved_voice` after `get_voice_samples` | Free `generate_local_speech` for tests and drafts |
| Song | `generate_music` with custom lyrics: Lyria 3 Pro by default (the lyrics and vocals are written into the prompt), MiniMax Music 2.6 (custom lyrics up to 3,500 characters) or ElevenLabs Music (exact length via `settings.music_length_ms`). Read the installed skills `subclip-songwriting` and `subclip-music-generation` first | `search_public_audio` for a licensed track, or the creator's own song file via `import_external_media`. Tell the creator when no model gives a clean sung take |
| Music bed and sound effects | `generate_music` instrumental (`settings.mode: instrumental`); sound effects with `elevenlabs-sound-effects` (whoosh, pop, riser; about 0.17 credits a second) | `search_public_audio` |

Song models do not take a duration field except ElevenLabs Music, and they can sing a different word or add a line. Prompts cannot force a sung start at 0:00, so trim the intro in the edit. If the creator wants exact control of the melody or the voice, a song file made elsewhere is a legitimate path: ask which they want, do not choose for them.

Ask once if no generator was chosen. Respect a prior choice. See the installed `subclip-ai-generation` skill and its `references/creator-cli-generators.md` for the supported checks.

## Cost quoting

Before the first paid stage quote a table: stage, model, count, duration, credits, and the total plus about 15 percent for retakes. Use `estimate_ai_generation` with the exact inputs and durations. Get approval for that scope; a bigger bill needs a new decision. Pass `confirmed: true` only when the request authorizes the exact operation. Stop on credit or storage limits.

Budget formula (default mix, check against the live catalog):

`plates x 1 image + stills x 1 image + animated seconds x clip rate + song or voice + optional bed`

A 9 shot, 15 s ad needs roughly 3 plates, 9 stills, 7 clips and one song or voice take, so measure and quote your own. Cheaper ways to bring the cost down: pairs and still-only inserts instead of one clip per shot, the economical clip model, 1K stills, free local speech and captions, and the creator's Codex CLI for images.

## Operations

Generation calls return an operation ID. Keep it. In-app agents end the turn after an accepted asynchronous result and resume when it completes; external clients check `get_ai_operation` at reasonable intervals. Do not resubmit because a job is queued or slow. Reconcile its actual state before retrying an uncertain request. If a call fails with a transient error, retry once after a few seconds.

## Assembly steps in the Subclip editor

One edit call at a time per project. Re-read state after each coherent edit and use the returned item IDs.

1. **Audio (the clock).** Import the song or voice take (`import_ai_operation_to_timeline`, `import_speech_to_timeline`, or `import_generated_audio_to_timeline` for local speech) at the start. Trim the intro so the first word starts at about 0. Keep a table of every line's start and end from the word timings.
2. **Word timings.** `transcribe_project` with local mode, `audioItemId` for that item, one completed job at a time, language set. External clients poll `get_transcription_status`. If the creator already has timestamped cues (a lyric file, a VTT or SRT from the song or voice provider they used), `import_caption_cues_for_media_item` can import them instead for a video media item. Fix words with `update_caption_words`, keeping approved spellings; replace brand names the transcriber mishears.
3. **Pictures.** For each shot, place the still (or clip) at the shot's start with `update_media_item` start and end equal to the slot. Animated shots: `import_ai_operation_to_timeline` with `replaceItemId` set to the still so the clip keeps the slot, then `trim_media_item` for the source start (about 0.45) and the slot length. A clip shorter than its slot holds its last frame; do not change speed.
4. **Still-only inserts.** `add_media_keyframe` at the slot start (scale 1.0) and slot end (scale 1.05, linear easing) for a slow push.
5. **Captions.** Apply a caption preset after transcription, then `update_caption_style`: white, bold, one line, 2 to 4 words per caption, one size for the whole video, no punctuation except a number's dot or comma and a web address's dot, bottom of the clear area. Re-applying a preset resets the position, so style last. Put the vertical position inside the safe zone: on a 1920 pixel frame the clear band runs from 18 percent (y 347) to 74 percent (y 1426) from the top, and the lower band narrows to x 71 to 886 below 45 percent (y 868). A position of about 62 to 68 percent from the top with a width under 680 px fits. Lift a caption into the top band (about 33 percent, y 640) on shots where the product or a face fills the middle or lower area. No caption may cross a cut: chunk the timing so each caption starts on a cut or a first word.
6. **Overlays and headlines.** `add_text_overlay` and `update_text_item`, inside the same safe zone, never over a face or the product. Keep text static unless motion is part of the format. A hook headline only if the reference has one; an offer badge on the close.
7. **Music bed.** `import_ai_operation_to_timeline`, `update_audio_item` volume about 0.14 to 0.2 under a voice, fades in and out, end at the film end. Song ads carry their own energy: add few effects or none.
8. **Sound effects.** Quiet effects on reveals and key actions (a pop, a whoosh into a cut, a cup set down), spot effects well below the voice, never one on every cut.
9. **Length.** `set_project_duration` to the last audio end plus a short tail (0.4 s after the last sung word for a song, with a fade). No blank tail.
10. **Review.** `get_timeline_contact_sheet` with `at: "auto"` and `at: "caption-pages"`, `view_current_frame` for any doubtful time. Work through `qa.md`.
11. **Export** only when the creator asks: `get_export_configuration`, `list_render_queue` first so you do not queue a duplicate, then `export_video` (mp4, 1080p portrait), `get_export_status`. Social publication stays outside this skill unless the creator asks.

Audio loudness: set the voice or song as the loudest element. Subclip has no loudness meter in these tools, so say that the level was set by volume and not measured, and ask the creator to listen. Never claim a loudness number you did not measure.
