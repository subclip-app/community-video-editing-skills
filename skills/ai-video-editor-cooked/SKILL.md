---
name: ai-video-editor-cooked
description: Edit a talking-head video the careful way inside Subclip. Cut retakes, false starts and dead pauses with a last-take-wins rule, measure how reference videos are edited (cut speed, zooms, captions, cards, sound) into a style, then add captions, zooms and real visuals timed to the spoken words, avoiding the looks that read as AI-made. Use when the creator says "cut my video", "remove my mistakes", "edit this like that creator", "match this editing style", "add captions and zooms", "make this look less AI", or hands over a raw take or a long video to turn into clips.
---

# Cooked edit method (Subclip edition)

A careful edit method for talking-head video: cut first and get approval, measure a style, then style the approved cut with real visuals on the spoken words. Subclip is itself an AI video editor, so this skill adds only the craft Subclip does not already carry: the retake rules, the style measurements, the real-visuals rule and the AI-tells ban list. Everything runs on Subclip's own tools. No Python, no ffmpeg, no outside API key, no browser review server.

```
raw take -> 1 Cut (approve) -> 2 Style brief (approve) -> 3 Style edit -> 4 Verify -> optional export
```

Stage 1 ends with the creator's approval. Do not start Stage 3 on your own after a "just the cut" request.

## Before you start

1. Load the official skills with `read_subclip_skill`: `subclip-video-editor`, `subclip-rough-cut`, `subclip-transcription`, `subclip-dynamic-captions`, `subclip-style-sampling`, `subclip-media-editing`. For shorts from a long video load `subclip-ai-clipping`. Follow their current tool schemas where they differ from this file.
2. `get_project_outline`, then `read_project_section` for the lanes you touch, and `list_editor_assets` for real file IDs. Keep the same project ID on every call. Never modify, move or re-encode the source file.
3. Read media context first with `get_media_context` (`includeContactSheet: true` for video). For missing context use `list_media_without_context`, then `generate_media_context` in an editing run, then `describe_media`. Never claim to have seen or heard a file from its name.
4. Ask the creator once what the video must cover and where it will be posted (aspect ratio, length). Ask whether they want "just the cut first" (recommended: a changed cut never rebuilds the visuals) or "everything at once". Save the answers with `update_project_director_brief`.
5. One timeline edit at a time. Re-read the lane after each ripple edit.

## Stage 1: Cut

Goal: a clean jump cut where every cut quotes the transcript.

1. Transcribe the exact media item with `transcribe_project`. Use local mode for tests or when the creator prefers; one completed job at a time. A creator script, names and jargon should be passed or corrected afterwards with `update_caption_words`.
2. Read the transcript with `get_script`: words, ids, times and pauses between words. Fillers and false starts are evidence; keep them visible while deciding.
3. Decide what to cut using `references/retake-rules.md`: false starts, retakes (the last take wins, with exceptions), meta talk to self, hesitation fillers, alternate hooks recorded after the body. Optional editorial cuts only if the creator wants it shorter.
4. Tighten pauses by the take's shape: about 0.15 s for a vertical reel, about 0.30 s for wide long-form. Keep comic beats, the pause before a number or reveal, and pauses inside spoken lists. See `references/retake-rules.md`.
5. Cut with `cut_script_words` (word ids or a range, ripple delete). Every cut can come back with `restore_script_cut`. `apply_script_cleanup` may handle plain silence and fillers first. Work latest to earliest and re-read `get_script` after each ripple. For a cut inside the video lane that script cuts cannot reach, use `split_timeline_item`, `trim_media_item` and `delete_timeline_item`.
6. Verify like a listener, not like a reader: read the cut transcript start to end as the viewer will hear it. Check every join with `view_current_frame` on both sides and listen for clipped words. Report what you could not hear.
7. Show the creator the cut (seconds removed, the list of removed lines, kept alternates). Apply their notes: "keep this line" restores it, "cut this line" removes it. Stop here on "just the cut first".

If the front camera mirrored text (a book, shirt or sign reads backwards), ask once: keep it as shot (recommended) or flip so text reads.

## Stage 2: Style brief

Goal: numbers, not adjectives. Use the creator's own reference videos, or videos they have rights to study.

1. Ask for 3 to 6 references that are edited the way they want. Several creators can be blended. With none, use the default style in `references/style-measurement.md`.
2. Follow `subclip-style-sampling`: `extract_video_frames` every 1 to 2 seconds plus at each hard cut, and `get_media_context` on imported references. Measure the numbers in `references/style-measurement.md`.
3. Study patterns only. Never reuse a reference's footage, music, logos, captions or copy, and never imitate a named creator's face or voice.
4. Save the style as a short brief with `set_project_data` and show it in plain numbers. Wait for the creator to approve or adjust. Measured values from the references override your taste.

## Stage 3: Style edit

Goal: captions, zooms and visuals in the approved style, on the approved cut.

1. **Captions.** `apply_dynamic_caption_preset` from the style's caption shape (words per line, size, position), then proofread every word and fix names with `update_caption_words`; use `update_caption_style` for legibility only. Load `subclip-dynamic-captions` first.
2. **Zooms.** Use `add_media_keyframe` for smooth punch-ins at the style's rate and not on every sentence. Zoom about the face or target. Never cut the head off. Where the style has a card gap rule, fill long stretches with a zoom, not with filler.
3. **Visuals on the spoken words.** Follow `references/real-visuals.md`: first the creator's own assets, then real captures of the named thing, real logos, real posts, a stat shown inside the page that published it. Import with `import_attachment_to_timeline`, `import_external_media` (creator-provided files) or `import_public_asset_to_timeline` (licensed stock with attribution). Place each on the word that names it (read word times from `get_script`), one at a time, never two cards at once, never over the speaker's face.
4. **Motion.** Small overlays only through `add_html_motion_graphic` or a HyperFrames layer (`add_runtime_layer`, read `subclip-hyperframes-layer` first). Use text from the speaker or the source only. Use `add_text_overlay` for labels (about four words). Keep one easing language across the film: expo or quart out for entrances, one overshoot on one hero moment, hold still after landing.
5. **Sound.** Narration stays on its own audio item. Add a music bed only where the style uses one (`generate_music` or `search_public_audio`, `update_audio_item` for level under the voice); a few quiet cues, not a whoosh on every card.
6. **Ban list.** Run the checklist in `references/real-visuals.md` over every placed element before showing it.

Generated images as B-roll are on the ban list by default. If the creator explicitly asks for generated visuals, offer their signed-in Codex CLI first (images) and use Subclip's `generate_ai_media` otherwise, quote with `estimate_ai_generation` and `get_ai_credit_status`, and get approval before spending credits.

## Stage 4: Verify and hand over

- `get_timeline_contact_sheet` across the whole film, then `view_current_frame` on representative frames: a caption frame, every zoom peak, every card in and out, each cut. Check that nothing important leaves the safe frame, text is readable on a phone, and no card covers the face.
- Re-check against the style numbers: cuts per minute, zoom rate, card rate, caption size and words per line.
- Fix at most two rounds, then show what is left. Record decisions and unresolved checks with `update_project_director_brief` and `write_session_summary`. Never claim a check you did not do. Say what still needs a listening pass.
- Export only when asked: `get_export_configuration`, `list_render_queue`, then `export_video` once. Do not publish without the creator's exact request and the app's confirmation flow.
- If the creator learned something from your edit ("too slow", "captions too small"), write it into the director brief so the next video starts with that rule.

## Shorts from a long video

Use `subclip-ai-clipping` for selection and assembly. Add this method's judgment on top: drop ad reads, intros and sign-offs; drop hooks that need earlier context ("as I said"); drop dated claims that may have changed; judge each candidate on four questions (does the hook work alone, can a stranger follow it, does it pay off, is there a concrete claim, number or story). Then run Stages 1 to 4 per clip.

## Principles

- Every cut quotes the transcript. No quote, no cut.
- When unsure, keep it. A line left in costs a trim; a good take removed may never be noticed.
- Real things carry each beat. No invented stats, no invented copy, no invented palette.
- Story first, shots second: each beat has a job (hook, reveal, action, result, payoff, end) and the shot is chosen for the job, not for variety.
- Draw, do not record, when a recording would stutter.
- Personal data is blurred or avoided in screen captures, including the account's own name.
- Smooth before varied.

Adapted for Subclip from [nextwork-projects/ai-video-editor-cooked](https://github.com/nextwork-projects/ai-video-editor-cooked) by NextWork, MIT.
