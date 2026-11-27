---
name: neonclipping
description: Clip a YouTube, Twitch or Kick stream (or a gaming MP4) into vertical 9:16 shorts with streamer layouts. Finds highlight moments from word-timed captions and reactions, builds facecam-above-gameplay (default), blurred fill, corner, circle or side-by-side layouts from native media copies, adds GTA Neon, Impact, Clean, Hormozi or MrBeast style captions and an 8 second opening heading, and exports one file per clip. Use for "clip my stream", "make shorts from this VOD", Twitch or Kick highlights, gaming clips with facecam, streamer layouts.
---

# NeonClipping for Subclip

Turn a long stream or gaming video into finished vertical clips, each with a title, an opening heading, a streamer layout and word-timed captions. The agent proposes moments, the creator approves, the agent builds every clip as editable native items, then exports one file per clip.

This is an adaptation of NeonClipping by Ajay K Meena, a local clipping app. Its method (find moments, write headings, eleven layouts, caption styles) is rebuilt here with Subclip's own tools. It is not the NeonClipping app and does not run its code.

Read with `read_subclip_skill` when you reach that step: `subclip-video-editor`, `subclip-ai-clipping` (and its `references/selection-and-layout.md`), `subclip-transcription`, `subclip-dynamic-captions`, `subclip-canvas-layout`, `subclip-export`. Live tool schemas win over this text.

Read these references before the matching step:

- [references/moments-and-headings.md](references/moments-and-headings.md): signals, judging, edge snapping, heading rules and looks.
- [references/layouts.md](references/layouts.md): facecam finding, presets, face size, the eleven layouts with exact geometry, safe zones.
- [references/captions.md](references/captions.md): timing source, the five caption styles, words per caption, quiet parts, languages and Hinglish.
- [references/worked-example.md](references/worked-example.md): a full run on a real Twitch-style stream.

## Before you start (ask only what is missing, in one message, with defaults)

1. **Source.** A YouTube, Twitch or Kick link, or a video file. For a stream over two hours, ask which part to clip (for example 0:40:00 to 1:20:00).
2. **Clip count.** Default 3. Never pad with weak moments.
3. **Length.** Default 30 to 80 s. Allowed 3 to 180 s.
4. **Layout.** Default for a stream with a facecam: Face + gameplay (camera above gameplay). Without a facecam: Blurred fill. Ask for a facecam corner only if finding it fails.
5. **Face size.** Default 32% of the canvas.
6. **Caption style.** Default GTA Neon for gaming streams; also Impact, Clean, Hormozi, MrBeast, or Subclip's default captions. Words per caption default 4. Captions on by default.
7. **Language.** The spoken language. For Hindi speech default to Hinglish (Roman letters).
8. **Opening heading.** On by default, 8 s, black backing on bright gameplay and facecam layouts.
9. **Moment mix.** Balanced (default), Action or Dialogue.
10. **Transcription.** Local (free) unless the creator asks for cloud.

## Workflow

### 1. Get the source

- Create or open the project and keep its `projectId` on every call. Canvas: `set_canvas_properties` with `vertical`.
- For a link, `fetch_linked_media` with the URL. It returns the video context (`originalPath`, storyboard, and for YouTube often a timestamped transcript). Import `originalPath` with `import_external_media` and `addToTimeline: false`.
- If the download fails, ask the creator for the file or a direct public video URL and import it with `import_external_media` or `import_attachment_to_project_media`. Never ask for platform cookies or passwords.
- Very long streams: work only on the part the creator chose.

### 2. Read what is there

- `get_media_context` with `includeContactSheet: true`. If the file has no context, `list_media_without_context`, then `generate_media_context`, inspect, and save it with `describe_media`. Never claim to have seen or heard a video from its name.
- Note the game (from the title or category) and the stream layout you see: facecam position, chat, alerts, minimap, watermarks.

### 3. Get word timing

- **Platform captions first.** When the fetched context includes a word-timed transcript (YouTube's own captions), use it to find moments. It is free and usually better than a speech model on game audio: a local model tends to invent words over screaming and game sound.
- **Otherwise local transcription.** `transcribe_project` with `mode: "local"`, `purpose: "reference"`, the exact `mediaItemId` and the language code. One job at a time; poll `get_transcription_status` (an in-app agent is resumed when it finishes). Read words with `get_reference_transcript`.
- Reuse an existing transcript when the item and range still match (`list_reference_transcripts`).

### 4. Find the moments

Follow [references/moments-and-headings.md](references/moments-and-headings.md):

1. Shortlist about twice the requested count from cheap signals: reaction words, `[screaming]` or `[laughter]` tags, loudness jumps on `get_audio_timeline_sheet`, and the moment mix.
2. Read each candidate with 15 s of context on both sides. Score it 1 to 10 with hook, engagement, value and shareability, give it a kind, a title, an opening heading and an evidence quote.
3. Compare them with each other, drop overlaps and repeats, keep the best.
4. Look at the picture at each pick with `get_media_context` and `inspectAtSeconds` (at most six per call): is the reaction on camera, is anything unsafe to post?
5. Snap the edges: start where the speech starts, end on a finished sentence, inside the length limits.

### 5. Show the plan and wait

Show a table: number, title, source range (`H:MM:SS` to `H:MM:SS`), duration, score out of 10, kind, the heading, the evidence quote, layout. Save it with `update_project_director_brief`. Wait for the creator to approve, drop, swap or move edges, unless they already authorized the cuts.

### 6. Find the facecam and game boxes

Follow [references/layouts.md](references/layouts.md). Inspect six stills spread across the source, find the rectangle that stays in place and holds a face, and write the facecam box and a clean game box as fractions of the frame. Not sure means "no facecam": use Blurred fill and say so. Presets (top left, top right, bottom left, bottom right, bottom centre, none) are starting boxes when the creator names a corner.

### 7. Cut each clip non-destructively

- Follow the assembly contract of `subclip-ai-clipping`: clips in source order, the first at exactly 1.0 s, 2.0 s between clips.
- For each clip and each layout copy: `place_editor_asset` (kind `media`, the source `fileId`), then `trim_media_item` with the exact source in and out and the same timeline start.
- One edit call at a time. Re-read the media lane with `read_project_section` after each coherent edit.

### 8. Build the layout

Set each copy with `update_media_item` (position, size, `fitMode: "cover"`, crops, `muted`, `brightness`, `borderRadiusPx`) and order them with `set_media_layer_order`, as in the layout table. The facecam-above-gameplay layout is the default for streams: facecam copy on top (height `face * 1.7778`), game copy below, game copy audible. Check with `view_current_frame` at the start, middle and end of the clip, and correct until no overlay edge, chat line or watermark shows.

If the streamer's scene changes inside a clip, split both copies at that moment with `split_timeline_item` and give the new segment its own boxes.

To silence a swear word when the creator wants a clean clip, split the audible copy just before and after the word and mute that short piece; leave the word out of the captions.

### 9. Captions

Follow [references/captions.md](references/captions.md):

- Timing: import the platform's word cues with `import_caption_cues_for_media_item` for the audible copy of each clip, or `transcribe_project` with `mode: "local"`, `purpose: "captions"` on that copy.
- Style: `apply_dynamic_caption_preset`, then `update_caption_style` with the chosen style's colours, outline, shadow, size and case.
- Pages: `arrange_dynamic_caption_pages` with at most the chosen words per caption, breaking at punctuation and pauses.
- Fix misheard words, names and caption loops with `update_caption_words`, keeping timings. For Hinglish, rewrite Hindi words in Roman letters.
- Position: about 75% height, clear of the facecam, the heading and the platform safe zone.

### 10. Opening heading

- `add_text_overlay` from the clip start, 8 s by default (2 to 60 s), then `update_text_item` for the look: bold, uppercase, white, `backgroundColor` black at about 85 to 90% opacity with rounded corners for the Box look, at most 90% of the width, 2 to 3 short lines.
- Place it about 30 px under the facecam band when the facecam is on top, otherwise at about 13.5% height. It must not cover the face or the captions.
- Heading off means no text and no backing.

### 11. Check

For each clip: `get_timeline_contact_sheet` at 1 s steps across the clip, and `view_current_frame` at the first spoken word, every quiet gap and the last frame. Confirm: facecam crop clean, game crop shows the action, heading readable for its whole duration, captions never hang through quiet parts, nothing in the safe zones, last word complete. `get_audio_timeline_sheet` over each clip: speech present, no clipping, peaks under -1 dB. Fix, then look again.

### 12. Export one file per clip

`get_export_configuration`, `list_render_queue` (never queue a duplicate), then `export_video` with the clip's output `startTime` and `endTime` and a clear `outputFileName`. One export at a time. Export when the creator asks for files or approves the result.

### 13. Re-edit a saved clip

Re-editing never downloads the source or finds moments again. Read the director brief (it holds the plan, boxes and settings), then change only what was asked, in place:

- Layout or face size: update the copies' geometry and crops with `update_media_item`.
- Caption style or words per caption: `update_caption_style`, `arrange_dynamic_caption_pages`.
- Heading text, length or look: `update_text_item`.
- Start or end (3 to 180 s, inside the source): `trim_media_item` on every copy of that clip; captions follow the item; check the first and last words.
- "Apply to all clips of this video": make the same change on every clip in the project. Each clip keeps its own range, heading and words.

Then export only the changed clips again.

### 14. Record

`update_project_director_brief` with every clip's number, title, source and output range, score, heading, evidence, layout, boxes, caption style and checks. `write_session_summary` at the end.

## Not included

NeonClipping can also record live streams and cut clips on chat spikes, watch creators automatically, act as a phone remote, learn from star ratings and publish directly. Subclip has no live stream recorder; clip the finished VOD instead. Publishing is only on the creator's exact request, through `subclip-social-media` and its confirmation flow.

## Final report

For each clip: number, title, `M:SS` duration, score, one concrete reason, layout, caption style, file path. Say what you checked on screen and that a listening pass is still a human job. Never claim a check you did not run.

## Rules

- Clip only streams the creator owns or has permission to clip (a public clipping program, a "feel free to clip" statement, or a Creative Commons Attribution licence), and credit the streamer on the post.
- The source file stays untouched; every clip stays editable.
- Never invent quotes, events or numbers in titles or headings.
- No outside API keys, no scripts, no command-line encoding. Zero credits unless the creator chooses cloud transcription.

## Reference

A finished run on [Inde Navarrette, Lets Play Phasmophobia (Part 01)](https://www.youtube.com/watch?v=voQeFH0DXYk), a Twitch-style stream published under a Creative Commons Attribution licence: [examples/they-killed-me-face-gameplay.mp4](examples/they-killed-me-face-gameplay.mp4) in the Face + gameplay layout with GTA Neon captions and an opening heading, [examples/spirit-box-circle-cam.mp4](examples/spirit-box-circle-cam.mp4) in the Circle camera layout, and a [one-second contact sheet](examples/neonclipping-contact-sheet.jpg) of their first 10 seconds. Details in [references/worked-example.md](references/worked-example.md).

Adapted for Subclip from [iamajmeena/neonclipping](https://github.com/iamajmeena/neonclipping) by Ajay K Meena, AGPL-3.0. Method described in our own words; no NeonClipping code is included. See LICENSE and NOTICE.
