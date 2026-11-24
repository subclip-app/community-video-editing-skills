# Subclip pipeline (replaces the upstream's scripts and servers)

The upstream renders with its own Node, Playwright, ffmpeg and numpy scripts and serves results from a VPS. In Subclip none of that is needed. Do not run or recreate those scripts. Use this table.

| Upstream step | Subclip step |
|---|---|
| One HTML file with seek(t), rendered by Playwright | One HyperFrames layer per scene (HTML plus a paused GSAP timeline) via `add_runtime_layer`, or a Remotion layer. Subclip renders the frames at export. |
| 4 subframes plus tmix motion blur | Export at 60 fps if the creator wants smoother motion. Add a short CSS blur on fast swaps inside the layer (see 31). |
| numpy beat grid | Import the track, then read peaks from the file with the loudness check below, or place cues by ear on the waveform and verify them. `cut-to-the-beat` has a beat map workflow. |
| Synthesized SFX placed by measured peak | `search_public_audio` (kind sfx) for clicks, whooshes, risers, hits, or `generate_music` instrumental for a bed. Place each sound so its peak lands on the cue. |
| Song search on free libraries | `search_public_audio` with kind music; check each licence shown. |
| Contact sheet, one frame per beat | `view_current_frame` with `timeSeconds` at each beat. Render twice, the first call can lag one edit behind. |
| Storyboard 1 per second, frame-difference scan | After `export_video`, extract one frame per second with ffmpeg on the exported file and look at them. |
| Loudness check | `ffmpeg -i file.mp4 -af ebur128=peak=true -f null -` and read integrated LUFS and true peak. Aim for about -14 LUFS, below -1 dBTP. |
| Tailnet link | Tell the creator where the exported file is. |

## Layer notes

- Keep every value a function of the playhead. Drive your own functions from one GSAP proxy tween (`references/layer-code.md`) and do not measure the DOM inside a tween. Measure once at setup with `offsetLeft` and `offsetWidth`.
- Register exactly one paused timeline under the composition id. Do not use repeat, yoyo, CSS transitions or timers.
- Never put `will-change` on anything the camera scales; text renders soft.
- A hide that sets opacity 0 must be undone by the draw step or the element stays invisible.
- Digits in an odometer: size each slot to its final glyph and clip vertically only.
- Project media URLs are rejected inside HyperFrames layers; use public HTTPS images or a Remotion layer. Videos inside Remotion layers can fail: use a still frame.
- One timeline mutation at a time, always pass the project id, and re-read the project to confirm each edit.

## Sizes and safe zones

16:9 is 1920x1080 per layer root. For 9:16 use 1080x1920 and keep captions and key text inside x 71 to 1027 and y 347 to 1426. A scene layer should cover only the box it needs.

## Credits

Everything in the style index is a code layer: 0 credits. Paid steps are optional: music (`generate_music`), AI stills (try the creator's own image tools first, then a Subclip image model), AI voice. Check `list_ai_models`, run `estimate_ai_generation`, show the number, wait for a yes, and check `get_ai_credit_status` before and after.
