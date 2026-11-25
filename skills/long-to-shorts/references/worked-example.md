# Worked example: Alex Hormozi, If I could start over in business

[If I could start over in business, I'd do this sooner](https://www.youtube.com/watch?v=H8QfAfCbOXs) is a 15:54 solo talk by Alex Hormozi about building a high-performance team culture. He allows clipping of his videos; every short credits him by name and video title on screen. One camera, one speaker, a dark office background.

## Candidate selection

The transcript came from the video's English YouTube captions (word-timed JSON3). Scores are out of 20 in this order: hook, self-contained story, emotion, payoff and length fit.

| Rank | Candidate | Source in | Source out | Scores | Total | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Your worst person sets the bar | 3:37.05 | 4:32.00 | 18 / 18 / 17 / 18 / 17 | 88 | Cut as short 1. The worst person on the team is the bar you signed off on; the payoff is "nothing more demotivating to a winner than being forced to work with a loser". |
| 2 | Removing the 80 beats hiring a 140 | 11:31.20 | 12:07.60 | 17 / 18 / 14 / 19 / 18 | 86 | Cut as short 3. A small IQ average puzzle with a clean payoff: "eliminating the duds". |
| 3 | Napoleon wanted lucky generals | 7:22.85 | 8:04.10 | 17 / 16 / 15 / 16 / 18 | 82 | Cut as short 2. Mediocre people sell their excuses; Napoleon preferred lucky generals. One 2.4 s pause (7:27.1 to 7:29.45) removed, because one thought crosses it. |
| 4 | Knowing and doing | 13:45 | 14:20 | 16 / 15 / 13 / 15 / 18 | 77 | Passed over: strong line, but it leans on the earlier firing argument. |
| 5 | Harvard and boot camp | 6:46 | 7:23 | 13 / 14 / 11 / 12 / 18 | 68 | Passed over: the analogy needs the clip before it. |

## Editor setup

- Project `long-to-shorts reference`, 1080 by 1920. The source is in Project Media and stays untouched.
- The source was placed four times (short 2 has two pieces) and trimmed with `trim_media_item`, in source order, with a 1.0 s lead-in and 2.0 s gaps.
- Layout `fill_face`: cover framing with a fixed focus (x 0.6) so the face sits in the upper middle and the chest stays free for captions. No keyframes.
- Captions: `import_caption_cues_for_media_item` per trimmed item, one cue per word with integer `startMs` and `endMs` (end bounded by the next word), "um" and "uh" left out. The default Dynamic Captions preset (Spotlight, no word highlight), moved down to 76% so it never covers the mouth, with a few important words from `set_dynamic_caption_priorities`.
- Hook: one `add_text_overlay` per clip at the top on a navy bar, in the speaker's terms and under 12 words. A small credit line at the bottom names Alex Hormozi and the video title.
- No music: speech-led clips. No AI model, zero credits.
- One full-timeline export, then one file per clip by its output range, at 720 by 1280 with AAC 128 kb/s.

## Checks

- `view_frame` at the first spoken frame, the middle and the last frame of each clip, then the exports at one frame per second: no face covered, hook visible from the first frame, last word complete.
- Mean loudness of each short is about -17 dB with peaks near -1 dB; the source audio is untouched apart from 0.1 s fades at the cut edges.
- A full listening pass is still a human job.
