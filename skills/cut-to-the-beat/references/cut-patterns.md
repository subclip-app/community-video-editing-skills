# Cut patterns: how to spend the beat grid

A beat map tells you where the beats are. This file tells you which beats to use.

## Frame math

1. Read the project frame rate from `get_export_configuration` (for example 30 fps).
2. A beat at `t` seconds sits on frame `round(t x fps)`. Snap every cut to a whole frame. The error is at most half a frame (16 ms at 30 fps), which is below what anyone can hear.
3. Subtract the early lead (see `beat-map.md`, usually 1 to 3 frames) from every cut, the same amount for all.
4. Add the music's start time on the timeline to every beat time. A beat map is relative to the start of the audio, the timeline is not.
5. Write the final cut list as a table: cut number, beat number, timeline seconds, frame. Keep it in the director brief so every later step uses the same numbers.

## Cut density follows energy

| Section feel | Shot length | Notes |
|---|---|---|
| low, sparse, intro | 4 beats (1 bar), or phrase length | slow push or hold; cut on downbeats only |
| mid | 2 beats | the default rhythm |
| high, dense, chorus, drop | 1 beat, or 1/2 beat for short bursts | do not hold a 1-beat rhythm for more than 8 cuts in a row, it tires the eye |
| roll, fill, riser | accelerate: 2 beats, 1 beat, 1/2 beat, then a hard cut on the downbeat that ends it | the build gets faster, the drop lands on the cut |
| hard stop, silence | hold the last frame, or cut to black or a still | the silence is the effect |

Vary the pattern. A steady cut every beat for the whole track is a metronome, not an edit. Mix 2-beat and 1-beat shots, and let a shot run a full bar when the image is strong.

## What lands on which beat

- **Downbeat (beat 1 of a bar):** scene changes, new subject, title, the strongest hit, the biggest zoom.
- **Beat 3:** a medium accent, a second angle of the same shot, a caption page change.
- **Beats 2 and 4:** light pulses, small scale bumps, a word highlight.
- **Off-beat and syncopated onsets:** texture only (sparkles, tick marks, a flicker). Do not cut on them.
- **Phrase start (every 4 or 8 bars):** a bigger change: new location, color shift, new section title.
- **Drop or surge:** the cut, a flash and a camera hit together on the same frame.

## Cutting footage to the beat

1. Read what you have first: `get_media_context` (with `includeContactSheet: true`) for every clip. Never cut media you have not looked at.
2. Choose the best moment of each clip (the peak of an action, a clear face, a strong composition). A cut works best when the action peak lands on the beat, so start the clip a little before its peak so the peak falls on the next beat.
3. For one source clip, `split_timeline_item` at each cut time, then rearrange or delete segments. For many clips, place one clip per cut with `place_editor_asset` or `update_media_item`, and set each clip's length with `trim_media_item` so it ends exactly on the next cut.
4. Keep trims non-destructive (source duration is preserved). Close every gap.
5. Match motion direction across cuts: a pan to the right continues to the right in the next shot.
6. A cut on action (cut mid-move, finish the move in the next shot) feels smoother than a cut on a still, and it still lands on the beat.
7. J and L cuts: let the next shot's picture start on the beat while sound from the previous one tails out, or the reverse, when clips have their own audio. Otherwise mute clips and let the music carry.

## Beat-synced motion on footage

Use `add_media_keyframe` for the pulse and `add_media_effect` for flash or shake effects where available.

- **Pulse zoom:** scale 1.00 at the beat minus 2 frames, 1.06 on the beat, back to 1.00 over 6 to 10 frames (slow in, slow out). Use it on beats 2 and 4 and keep it small; use 1.10 for a downbeat.
- **Punch cut:** on a downbeat start the new shot at scale 1.12 and ease it to 1.00 over 0.4 s.
- **Camera shake:** 3 to 6 frames of small x and y offsets on a drop or crash. Not on every beat.
- **Flash:** a white overlay at full opacity for 2 frames on a drop, then gone. A flash that lasts less than 2 frames may not show in the export.
- **Hold and release:** freeze the last frame before a hard stop and release on the first beat after.

## Beat-synced captions

- Word and page timing come from the speech, not the beats. Use the beat map to choose where pages change: end a caption page and start the next on the nearest beat inside the allowed window (never move a word more than about 120 ms from its spoken time).
- Emphasis words (nouns, numbers, the hook) take the hit: color change, scale pop or a short shake on the nearest beat.
- Tools: `transcribe_project` for word times, `update_caption_words` for edits, `apply_dynamic_caption_preset` and `update_caption_style` for the look, `arrange_dynamic_caption_pages` for page breaks. Keep native timing ownership of the captions.
- For lyric videos: transcribe the music in local mode, check the words against the lyrics you know, then place page changes on bar lines.

## Beat-synced motion layers

For titles, shapes and graphics that pulse with the music, write a HyperFrames layer (read `subclip-hyperframes-layer`):

- Pass the beat times as one string variable, for example `"0.50,1.00,1.50"`, parse it once, and add one tween per beat on the paused GSAP timeline. No `Math.random()`, no wall-clock time.
- Hard hits are `tl.set` calls with no duration. Eased hits start 40 to 190 ms before the beat so they land on it.
- Keep each layer short (one section) and set its start time to the section start on the timeline. Time inside the layer is local: `local_t = timeline_t - layer_start`.
- Verify with `seek_timeline` and `view_current_frame` on a beat, 2 frames before it and 2 frames after it. The hit must be visible on the beat frame.

## Generating music that fits the picture

When the music is made for the video, work backwards from the length: `beats = seconds x bpm / 60`. At 120 BPM, 30 seconds is 60 beats, which is 15 bars. Pick a tempo that gives a whole number of bars for the length you need, and ask for it in the prompt (see `beat-map.md`). Subclip's ElevenLabs music model takes an exact length in `settings.music_length_ms`.
