---
name: music-to-video
description: Turn a music track into a beat-synced video in Subclip, from calm to hard-hitting. The music drives everything. Read the track into a beat map, lay out frames, plan each frame with typographic treatments, and build each frame as an editable motion layer cut on the beat. The creator's own images or videos are cut in on the same beat grid. Use when the creator has a song, beat or audio file (or wants one generated) and asks for a lyric video, kinetic typography promo, beat-cut montage, music visualizer or slideshow synced to the music.
---

# Music to video (Subclip edition)

Make a beat-synced video from one music track. The track is the spine. You read it once into a **beat map**, cut it into **frames** (scenes), fill a plan for each frame, and build each frame as its own motion layer in the Subclip editor. Typography and treatments are the floor: a complete video needs zero media, but any images or videos the creator supplies are cut in on the same beat grid. The genre (lyric video, slideshow, kinetic promo) falls out of the per-frame choices; the process never branches on it.

You work in Subclip's editor with its own tools. No Python, no ffmpeg, no outside API keys.

```
music -> 1 beat map -> 2 frame skeleton -> 3 plan (creator approves) -> 4 build frames -> 5 assemble -> 6 verify and export
```

Two steps need the creator: the plan (Step 3) and the export (Step 6).

## Two ideas that shape everything

- **One beat map, honestly measured.** Step 1 builds the only timing truth. Energy, density, rolls, silences, hard stops and phrases are reliable on any music. The tempo and beat times are reliable only when the music is genuinely rhythmic and you measured them. On calm music the beat grid is a metronome you imposed, so pace by phrases and energy and never hard-cut to it. Deciding which case you are in is each frame's `pacing`.
- **One frame, one layer; groups live inside.** Step 2 cuts the track into frames. Each frame becomes one short HyperFrames layer. A frame can hold several groups (each a treatment or a primitive combo). Extra density goes inside a group, so frame count tracks distinct treatments, not beats.

## Before you start

- Read with `read_subclip_skill`: `subclip-video-editor`, `subclip-hyperframes-layer` (and its authoring contract), `subclip-music-generation`, `subclip-hyperframes-captions` if you will show lyrics, and `subclip-export`. Their current tool schemas win over anything here.
- `create_project` with the canvas preset the creator wants (landscape 1920x1080 by default; vertical 1080x1920; square 1080x1080). Use its project ID on every call.
- Begin with `get_project_outline`, then `read_project_section` for what you need. Check existing media with `list_editor_assets` and `get_media_context` before placing it.
- One edit at a time per project. Generation jobs may run in parallel; timeline writes may not.

## Step 0: The music and the inputs

The music is the spine, so settle one track first.

- **The creator gave audio** (a music file, or a video to pull audio from): import it with `import_attachment_to_timeline` or `import_external_media`. For a video, `extract_timeline_audio` gives a separate audio item.
- **No track yet**: choose the mood from the brief ("driving synthwave", "trap beat", "upbeat corporate") and generate one. Ask once which generator to use: the creator's own Codex or other CLI path is for images; for music use Subclip. Call `list_ai_models` (kind audio) and `get_ai_credit_status`, quote the model, length, `estimate_ai_generation` total and retry allowance, and get the go-ahead. Then `generate_music`, prefer `elevenlabs-music` when an exact length matters, with a prompt that states the tempo and a clean start (see `references/beat-map.md`). Import the finished operation with `import_ai_operation_to_timeline` (poll `get_ai_operation` sparingly; in-app agents resume on the completion event). Never loop tight polls.
- This approach is tuned for fast, high-energy music; calm tracks work, paced by phrase rather than beat.
- Note aspect, length and any supplied media. The brand (fonts and palette) is chosen in Step 3, not here.

**Gate:** the track is on the timeline, its duration is known, and you have a Subclip budget the creator accepted for anything paid.

## Step 1: The beat map

Read [`references/beat-map.md`](references/beat-map.md). Build the beat map from the best available source (known tempo, the creator's numbers, the waveform, transcript timings) and record confidence honestly. Save it in the director brief with `update_project_director_brief`.

**Gate:** the beat map exists, the duration is exact, and you stated whether the grid is reliable (confidence 0.6 or more).

## Step 2: Frame skeleton

Read [`references/frame-skeleton.md`](references/frame-skeleton.md). Cut the track into frames at real musical changes, snap every boundary to a beat-map anchor, and set `span_sec`, `pacing`, `mood` and `feel` per frame. Leave groups as TBD and the style blank. Expect 1 to 6 frames.

**Gate:** frames tile the track exactly; every frame has span, pacing, mood and feel; no content yet.

## Step 3: Fill the plan (creator approves)

Read [`references/planning.md`](references/planning.md), [`references/template-catalog.md`](references/template-catalog.md), [`references/motion-primitive-catalog.md`](references/motion-primitive-catalog.md), and [`references/montage.md`](references/montage.md) (only if the creator supplied media). Pick the brand spine (exact hex colors and fonts), then give each frame its groups: a matched treatment with real anchors, a free composition, or an asset treatment that obeys `pacing`. Write the copy. Save with `update_project_director_brief`, show a frame-by-frame summary, and iterate until the creator approves.

**Gate:** span totals equal the track length, every group is complete, the creator approved.

## Step 4: Build the frames

Build one frame at a time, each as its own HyperFrames layer. Never put the whole video in one layer.

1. Read the `subclip-hyperframes-layer` authoring contract. Each frame is one standalone HTML document, one paused GSAP timeline registered under the composition ID, GSAP 3.15.0 from the pinned CDN URL, finite and seekable, no `Math.random()` or wall-clock time.
2. Work in frame-local time: `local_t = track_t - span_start`. Set the root `data-duration` to the frame length.
3. Give each group its own container. Show it across its local span with `tl.set("#g1", {autoAlpha: 1}, start)` and `tl.set("#g1", {autoAlpha: 0}, end)`. These 0 ms swaps are the group-to-group cuts. Namespace ids per group (`g1_`, `g2_`).
4. Hard hits are 0 ms. Entrances that must land on a beat start 40 to 190 ms early; reactive entrances fire 0 to 45 ms after it (see the primitive catalog's timing rules).
5. On a `phrase_flow` frame pace by phrase and energy with slow eases.
6. Typography: use verified fonts only. Never apply CSS `filter` or `backdrop-filter` to text or to any ancestor of text (it can vanish from exports). Hero text must be readable and clear of the edges.
7. `validate_runtime_layer_source`, fix every error, then `add_runtime_layer` with an explicit start time equal to the frame start on the timeline, an end time at the frame end, and geometry. A full-canvas item is correct here because each frame is a full-frame scene; name the item for its frame (for example `01-f1`).
8. Seek with `seek_timeline` to the frame start, a hit, the middle and the end, and look with `view_current_frame` before you move on. Fix in place with `edit_layer_source` or `update_runtime_layer`.

Frames are silent. The music lives on a native audio item.

**Gate:** every frame exists as a layer item at the right start and end, and each passed frame checks.

## Step 5: Assemble

- Frames hard-cut one to the next (they tile the track, no gaps, no transitions).
- The music is one native audio item. Trim to the exact duration and set its volume with `update_audio_item`.
- Creator media from `montage.md` sits on the media lanes as native items under or between the frame layers, as planned.
- `set_project_duration` to the music length. No blank tail.
- Lyrics or captions, if wanted: `transcribe_project` on the music, then `apply_dynamic_caption_preset` or `update_caption_style`. Place clear of the hero text (check with `get_timeline_contact_sheet`).

**Gate:** total duration equals the track length; layers, media and music line up on `get_project_outline`.

## Step 6: Verify and export

Run `validate_project`. Then inspect with `seek_timeline` and `view_current_frame` at time 0, at every frame start, at the strongest drop or surge, at every hard stop, and at the final frame. Fix the cheapest safe thing in the offending layer. Never change duration or audio timing to hide a sync problem.

Tell the creator plainly what you could not verify: you cannot hear the music, so ask them to play the preview and say whether cuts feel early or late (then shift every anchor by the same amount, see `beat-map.md`).

Pause for review. Export only on approval or request: `get_export_configuration`, `list_render_queue`, then `export_video` once (omit range fields for the full film). Record decisions and failed checks with `update_project_director_brief` and `write_session_summary`.

## Resume table

| You have | Continue from |
|---|---|
| the track only | Step 1 |
| a beat map in the brief | Step 2 |
| a skeleton | Step 3 |
| an approved plan | Step 4 |
| all frame layers | Step 5 |
| an assembled timeline | Step 6 |

## Cost

Layers, local captions and local checks cost no credits. Music generation, and any AI media you choose to create, cost Subclip credits: quote before spending, stay inside the approved scope, and stop on credit or storage limits. Imported files cost nothing.

## Known gaps

- No native beat or onset detection tool: the beat map is built by hand from the waveform, a known tempo, or the creator's numbers.
- The original ready-made template HTML files and texture masks are not shipped. The catalog describes each treatment so you can build it as layer code.

## Reference output

[examples/night-shift-promo.mp4](examples/night-shift-promo.mp4) is a 20 second kinetic type promo for a fictional club night, made with this skill on "Euro Club Loop" by YellowTree (CC BY 4.0). Its beat map: about 120 BPM, beats at 0.49 s plus every 0.5 s, a quiet four on the floor intro, hats building from about 4.5 s, a hard stop at 6.99 s, a hit at 7.49 s and the full drop on the downbeat at 7.99 s, then 2 s bars. Six frames tile the track:

| Frame | Span | What it does |
| --- | --- | --- |
| 01 intro | 0 to 3.99 s | One word per kick, then a held line with an underline that grows per beat |
| 02 build | 3.99 to 6.99 s | Letters land on the beat while the camera pushes in, ticks fill on the eighths |
| 03 stop and hit | 6.99 to 7.99 s | Black for the silence, then a full screen "Go" on the hit |
| 04 drop | 7.99 to 11.99 s | One 0 ms slam per beat, each with its own color pair |
| 05 equalizer | 11.99 to 15.99 s | Bars pulse on every beat, a three word line builds, colors flip on the bar line ([still](examples/night-shift-equalizer.jpg)) |
| 06 poster | 15.99 to 19.99 s | Name, date and entry land on downbeats while a ring pulses per beat ([still](examples/night-shift-poster.jpg)) |

The music is one native audio item; each frame is one HyperFrames layer. Sync was checked against the exported file: the silence, the hit and the drop sit on the same frames as the cuts.

Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) (skill music-to-video) by OpenMontageInc, AGPL-3.0
