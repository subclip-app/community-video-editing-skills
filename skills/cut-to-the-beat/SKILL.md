---
name: cut-to-the-beat
description: Cut video edits, captions and motion graphics to the beat of the music in Subclip. Builds a beat map (tempo, beat times, downbeats, energy sections) from the track, turns it into a frame-snapped cut list, then cuts footage, places caption changes and adds beat-synced pulses and hits. Use when the creator wants a beat-synced edit, a montage cut to music, cuts on the beat, captions or text that hit with the music, a music-driven Reel or Short, or says the cuts feel off the beat.
---

# Cut to the beat (Subclip edition)

Make cuts, caption changes and motion land on the music's beat. The method follows librosa's beat tracking idea (an onset strength curve, a tempo estimate, and evenly spaced beats that sit on strong onsets). Subclip does not run Python, so the agent builds the beat map by hand from what the editor offers, turns it into a frame-snapped cut list, and edits with native tools.

## Important: beat detection is a gap in Subclip

Subclip has no beat, BPM or onset detection tool yet. Do not claim you detected beats. The best available routes, in order:

1. **Music generated with a known tempo** (`generate_music`, ideally `elevenlabs-music` for an exact length). The tempo you asked for is a claim: verify it against the waveform.
2. **Numbers from the creator**: BPM, time of the first beat, drop times.
3. **The audio item's waveform** read with `read_project_section` (about 5000 peak samples across the clip). Good for tracks up to about a minute.
4. **Transcript word times** for vocal tracks.

Read `references/beat-map.md` for the full method. Always tell the creator how sure the grid is, and ask them to listen to a preview: you cannot hear.

## When to use

- A montage, Reel, Short or promo should be cut to a song.
- Captions or on-screen text should hit with the music.
- A graphic should pulse, flash or shake on beats.
- The creator says cuts feel early, late or off the beat (re-measure and shift).
- Music is generated for a video and must fit its length.

For a full typographic music video built frame by frame, the music-to-video skill is the longer pipeline; this one is the focused edit.

## Before you start

- Read with `read_subclip_skill`: `subclip-video-editor`, `subclip-media-editing`, `subclip-audio-editing`, `subclip-dynamic-captions`, `subclip-hyperframes-layer`, `subclip-music-generation`, `subclip-export`. Current schemas win.
- `get_project_outline`, then `read_project_section` for the lanes you need. Use `list_editor_assets` for real IDs and keep the explicit project ID on every call.
- Before cutting media, `get_media_context` with `includeContactSheet: true`. If a file has no context, `list_media_without_context` then `generate_media_context` and `describe_media`. Never cut footage you have not looked at.
- One timeline edit at a time. Re-read state after each coherent edit.

## Workflow

### 1. The track

Use the creator's audio, or generate it. For generation: `list_ai_models` (kind audio), `get_ai_credit_status`, quote the model, length, `estimate_ai_generation` total and retry allowance, get approval, then `generate_music` with the tempo, 4/4, a clean start on beat one and no tempo changes in the prompt. Work backwards from the picture length (see `references/cut-patterns.md`). Import with `import_ai_operation_to_timeline`. Check the real duration.

### 2. The beat map

Follow `references/beat-map.md`: measure or collect tempo, first beat, beat times, downbeats, onsets, energy sections and hard stops. Record confidence. If confidence is below 0.6, the music is not rhythmic enough for a grid: cut on phrases and energy changes instead, and say so.

Save the map in the director brief (`update_project_director_brief`).

### 3. The cut list

Follow `references/cut-patterns.md`: read the frame rate from `get_export_configuration`, choose cut density per section (long in calm sections, one beat in dense ones, accelerating through rolls), assign downbeats to scene changes, subtract the early lead, snap to frames, and write the table (cut, beat, timeline seconds, frame). Show the creator the plan for approval when it changes the look of a long edit.

### 4. Cut the footage

Split, trim and place clips so each cut lands on its frame, with non-destructive trims and no gaps (`split_timeline_item`, `trim_media_item`, `update_media_item`, `place_editor_asset`). Start each clip a little before its action peak so the peak hits on the beat.

### 5. Captions and text

Keep native caption timing. Move page changes to the nearest beat only inside a small window (about 120 ms). Add emphasis hits to key words. Use `add_text_overlay` and `add_text_keyframe` for titles that land on downbeats.

### 6. Motion on the beat

Pulse zooms and punch cuts with `add_media_keyframe`; flashes and shakes only on drops. For graphics that pulse with the music, write a short HyperFrames layer with the beat times as a variable. Rules in `references/cut-patterns.md`.

### 7. Mix

Set the music volume with `update_audio_item`. Mute clip audio unless the creator wants it. Set the exact length with `set_project_duration`. No blank tail.

### 8. Verify

- `get_timeline_contact_sheet` across the edit to see the rhythm of cuts.
- For three to five cuts (first, a drop, a roll, a hard stop, the last), `seek_timeline` to the cut frame minus 2, the cut frame and the cut frame plus 2, and `view_current_frame` each time. The change must happen on the cut frame.
- Compare the cut table against `read_project_section` for the actual item start times. Any difference of more than one frame is a bug.
- Tell the creator what you could not check: you cannot hear the music. Ask them to play the preview, and if the cuts feel early or late, shift every cut by the same amount and re-check.
- Save results and failed checks with `update_project_director_brief` and `write_session_summary`.

Export only when asked: `get_export_configuration`, `list_render_queue`, then `export_video` once.

## Reference

A finished example: [beat-cut-reference.mp4](examples/beat-cut-reference.mp4). Thirteen shots cut to a 120 BPM loop with four-beat shots in the first two bars, two-beat shots in the next two, a one-beat roll, and a held final shot with a punch-in on the last downbeat. The [contact sheet](examples/one-second-contact-sheet.jpg) shows one frame per second.

## Cost

Beat mapping, cutting, captions and layers cost no credits. Music generation costs credits: quote first, stay in scope, stop on credit or storage limits.

## Gap to report

Subclip needs a beat detection tool that returns tempo, beat times, downbeats, onset times and energy sections for an audio item. Until then, results depend on the waveform route, a known tempo, and a human listen.

Method credit: beat tracking approach after [librosa](https://github.com/librosa/librosa) by the librosa development team, ISC. Written for Subclip.
