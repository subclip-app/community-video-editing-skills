# Worked example: Alexander H. King Interview

[Alexander H. King Interview](https://www.youtube.com/watch?v=aXMPh927_fI) was published by Purdue University Archives and Special Collections. The original runs 57:40. The saved yt-dlp metadata reports `Creative Commons Attribution license (reuse allowed)`. The examples use footage from the first 35 minutes, with vertical framing, titles and captions added.

## Candidate selection

Scores are out of 20 in this order: hook, self-contained story, emotion, payoff and length fit.

| Rank | Candidate | Source in | Source out | Scores | Total | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Who reads the manual? | 29:40.900 | 30:17.333 | 19 / 19 / 16 / 18 / 20 | 92 | Cut as short 3. A lab crate shows two approaches to learning. |
| 2 | How I got out of rugby | 03:22.533 | 04:00.267 | 17 / 18 / 17 / 18 / 20 | 90 | Cut as short 1. Avoiding rugby leads to fencing for the United Kingdom. |
| 3 | A temporary job at MIT | 11:49.800 | 12:42.767 | 15 / 18 / 17 / 19 / 20 | 89 | Cut as short 2. A one-year plan turns into staying in the United States, with ice cream as the punch line. |
| 4 | Teaching nanotechnology with chalk | 26:40.533 | 27:25.700 | 16 / 16 / 13 / 13 / 20 | 78 | Passed over because the payoff about class participation was deferred. |
| 5 | When the government paid for college | 05:12.733 | 05:55.233 | 12 / 17 / 13 / 15 / 20 | 77 | Passed over because the historical setup took longer to land. |

## Editor setup

- Reused `Long to shorts - Alexander H. King Interview` in `subclip-showcase`, project ID `791bc706-4a26-4217-80ca-0d336f17b8ea`.
- The transcript came entirely from the video's English YouTube captions via yt-dlp. YouTube offered auto captions for this upload. The run used the saved JSON3 segment offsets for word starts and bounded each word's end by the next caption or a short hold. No Subclip transcription or other ASR was run.
- `import_caption_cues_for_media_item` attached 368 source-relative word cues covering the selected ranges to the imported source item. `reuse_caption_timing_for_media_items` copied the timings onto the three native trims. The source video remains in Project Media.
- The plan went into the project director brief. The timeline uses a one-second lead-in and two seconds between clips. Each clip has one contiguous source range.
- The 1080 by 1920 canvas uses a stable square crop centered on King, with a pale header and caption band. Remotion titles animate in and stay visible. Native Dynamic Captions use the Minimalist preset, a dark Inter style, 143 short pages and selective emphasis. Audio is the original interview track.
- `export_video` rendered one 1080 by 1920 MP4 per timeline range. The repository copies are 540 by 960 at 24 fps with H.264, yuv420p, CRF 28, mono AAC at 64 kb/s and faststart.

## Checks and fixes

- A first preview showed a blank lower half because native media uses canvas-width units on both axes. The full-height test crop then put captions over King's mouth. The final square crop excludes the source side bars and leaves separate space for captions below the speaker.
- The editor's `get_script` returned zero words on the saved project after caption import. The captions lane, filtered to the `captions` field, provided the words and IDs for verification and styling.
- The first export of short 2 opened on a blank frame. Its timeline start was 40.733333 seconds and the exporter rounded down to 40.733. The replacement export starts at 40.734 seconds.
- Checked each export at one-second intervals and inspected its opening and closing frames separately. Compared each exported audio track with the corresponding source audio and checked the levels at the cut edges. A listening pass is still unverified.
