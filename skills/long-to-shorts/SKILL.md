---
name: long-to-shorts
description: Turn a long video (podcast, interview, webinar, lecture, stream, talk, screen recording) into several vertical shorts. Transcribes it, scores candidate moments with a rubric (hook, self-contained story, emotion, payoff, length), cuts and reframes to 9:16, adds dynamic captions and a hook, optional music, exports one file per clip and can schedule them. Use for "make shorts", "find the best clips", "repurpose this video", reels, TikToks, Shorts.
---

# Long video to shorts

Make several finished vertical clips from one long video, with the creator in control. The agent proposes, the creator approves, then the agent builds. Nothing is posted without an exact confirmation.

This skill is the full workflow. It builds on Subclip's installed skills; read them with `read_subclip_skill` when you reach that step: `subclip-transcription`, `subclip-ai-clipping`, `subclip-dynamic-captions`, `subclip-music-generation`, `subclip-export`, `subclip-social-media`, `subclip-youtube`, `subclip-tiktok`. Tool schemas in the live catalog always win over this text.

## Before you start (ask only what is missing)

Ask in one short message, with defaults, and skip anything the creator already said:

1. How many clips? Default: the best 3 to 5. Never pad with weak ones.
2. Length? Default 30 to 60 seconds, hard cap 90. Platforms differ: see the rubric.
3. Where will they go? (TikTok, Reels, YouTube Shorts.) This sets the canvas and the length.
4. Captions style? Default: Dynamic Captions, least distracting preset.
5. Music? Default: none for speech-led clips; offer a quiet bed.
6. Transcription mode? Local is free and fine for one language; cloud is faster and needed to tell speakers apart. Keep any earlier choice the creator made. Cloud may cost credits: say so before using it.

## Workflow

### 1. Read what exists

- `get_project_outline`, then `list_editor_assets` for real file and item IDs. Keep the same explicit project ID on every call.
- Call `get_media_context` before analysing media. Read descriptions, with contact sheets (`includeContactSheet: true`). If the source has no context, `list_media_without_context`, then `generate_media_context` (editing run only), inspect, and save with `describe_media`. Never claim to have seen or heard a video from its filename.
- If the source is not in the project, `import_external_media` (one path or URL) or `import_attachment_to_project_media`.
- Reuse an existing transcript if the item and trim still match: `list_reference_transcripts`, `get_reference_transcript`.

### 2. Transcribe

`transcribe_project` with `purpose: "reference"` for the exact source `mediaItemId`. One item at a time; keep the job ID and wait for the result (the in-app agent is resumed when it finishes; an external client polls `get_transcription_status`). Use `detectSpeakers: true` only for multi-speaker video in cloud mode. Read the words back with `get_reference_transcript` in pages.

### 3. Find and score candidates

Read [references/scoring-rubric.md](references/scoring-rubric.md) first. In short:

- Read the whole transcript before choosing anything. Mark every spot that might open a clip.
- For each candidate, find the real start (a sentence or thought boundary) and the real end (the payoff landed, or a clean beat after it).
- Score five parts, each 0 to 20: hook strength, self-contained story, emotion, payoff, length fit. Add them for a score out of 100.
- Keep candidates 70 and above. Between 50 and 69, keep only if the creator asked for a fixed count. Below 50, omit.
- Clips must not overlap and must differ in topic.
- Check the picture too: use `get_media_context` with `inspectAtSeconds` (at most six moments) on the top picks, to confirm the speaker is on camera and nothing awkward happens.

### 4. Show the plan and wait

Present a ranked table: number, working title, source range (`M:SS` to `M:SS`), duration, score out of 100, the hook line in the speaker's own words, one concrete reason. Add the plan to the director brief with `update_project_director_brief`. Ask the creator to approve, drop, swap or shift edges. Do not cut until they answer. When the creator already said "just do it", continue, but still report the table at the end.

### 5. Set up the canvas

`set_canvas_properties` with `preset: "vertical"` (9:16) for TikTok, Reels and Shorts, unless the creator chose another. Keep an explicit earlier choice.

### 6. Cut each clip, non-destructively

Follow the exact assembly contract in `subclip-ai-clipping` (its selection-and-layout reference). The core:

- Place the source for each clip with `place_editor_asset` (kind `media`, the source file ID), then `trim_media_item` with exact source in and out. Never delete the source file from Project Media.
- Put clips in source order on one lane, with a 1.0 s lead-in at the start and a 2.0 s gap between clips, so each is easy to export by range.
- A cut can join two adjacent source pieces only when one thought crosses the boundary. Cut on word boundaries; leave about 0.15 s of air after the last word.
- When you finish and verify all clips, remove the full-length original placements from the timeline (not from Project Media), unless the creator wants to keep them.
- Do one edit call at a time. Re-read state after each coherent edit.

### 7. Reframe to 9:16

Read [references/vertical-captions-hooks.md](references/vertical-captions-hooks.md). Pick the layout from the picture, not from habit: `fill_face` for one talker, `fill_faces_split` for two, `tutorial` for screen plus presenter, `fit_canvas` with a blurred background when the whole frame matters. Use `update_media_item` and `set_media_source_focus` for the crop, with one stable focus per shot. Split only at a real shot or speaker change. Do not use restless face-chasing keyframes.

### 8. Captions and hook

- Reuse timing where possible: `reuse_caption_timing_for_media_items` after all clip copies are trimmed. Otherwise transcribe each clip item (`purpose: "captions"`), one at a time.
- Read `subclip-dynamic-captions`, then `list_dynamic_caption_presets`, `apply_dynamic_caption_preset`, `set_dynamic_caption_priorities` and `arrange_dynamic_caption_pages`. Keep emphasis sparse.
- The hook is the first line the viewer reads. Under 12 words, in the speaker's language and voice, true to the clip, no clickbait. For a single face, let the opening caption page carry the hook. Add a separate title only in clear empty space, with `add_text_overlay` and `update_text_item`.
- Before placing text, `get_timeline_contact_sheet` across its time range. After placing, look again with `view_current_frame`. Text must never cover a face or collide with captions.

### 9. Optional music

Only if the creator wants it. Speech stays first. Use `search_public_audio` and `import_public_asset_to_timeline` for licensed audio, or `generate_music` (quote the model and credits first; use `estimate_ai_generation` and `get_ai_credit_status`, then `import_ai_operation_to_timeline`). Set the bed low with `update_audio_item` (volume about 0.12 to 0.2, fade in and out). Keep music off the whole reel; place one track per clip so each exports cleanly. Report that audible balance needs a listening check.

### 10. Check before exporting

For every clip, `view_current_frame` at its first spoken frame, midpoint and last frame, plus each layout change. Confirm no face is covered, captions are readable, the first word is not clipped, the last word is complete, and the hook is visible in the first two seconds. Re-list state to prove clip count, lead-in, gaps, trims, mute policy and duration. Fix, then look again. Save results with `update_project_director_brief` and `write_session_summary`.

### 11. Export one file per clip

Read [references/export-and-schedule.md](references/export-and-schedule.md). `get_export_configuration`, then `list_render_queue` (do not duplicate a render), then `export_video` with the clip's OUTPUT range and a distinct, meaningful filename. One export at a time. Export only after the creator approves the result. Report each file path.

### 12. Optional scheduling

Only when the creator asks. Read `subclip-social-media`, `subclip-youtube` or `subclip-tiktok`. Check `list_social_accounts`. Draft titles, descriptions and times for each clip, show the full batch, and wait for an exact confirmation that names files, accounts, text and timezone. Never post, schedule or reply without it. See the reference for details.

## Final report

For each clip: number, title, `M:SS` duration, score out of 100, one specific reason, file path, and schedule state. Say what was checked on screen and what still needs a human listen. Never claim a check you did not do.

## Rules

- Source video stays untouched. Everything is editable in Subclip afterwards.
- Never fake a quote, change what the speaker said, or invent claims in the hook.
- Respect the creator's earlier choices on language, mode, captions and music.
- Stop on credit or storage limits and ask.
- No outside API keys, no scripts, no ffmpeg commands.

Original skill by Subclip, MIT. Inspired by the idea of SupoClip (https://github.com/FujiwaraChoki/supoclip); none of its code or text is used.
