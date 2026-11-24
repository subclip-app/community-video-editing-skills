# 09 Milestone reveal (number from points)

**Status:** new. **Use it for:** marking a real result (followers, subscribers, customers, revenue). Thousands of tiny points drift like a night sky, pull together into the number, a line draws underneath and the label settles in. Premium, not a party: no bounce, confetti or sparkle bursts.

## Inputs, then wait

1. The number exactly as it should read, with commas (for example "250,000").
2. Where it comes from: a screenshot or link to the dashboard. No source, no clip.
3. The label, word for word (for example "LinkedIn followers").
4. Brand and size: background, point and accent colors, the font file (attached), size. Default 1080x1350, 12 seconds.

The number is the creator's real, sourced number. Never round it up, add a plus, or swap a target for a result. If the source shows 12,431, the clip says 12,431.

## Build brief

```text
Build one seekable HyperFrames layer (canvas), [1080 x 1350], 12 seconds, a seamless loop. Tone: premium launch, not a party.
Fixed text (real figure, do not alter): "[NUMBER]" and "[LABEL]". No other text.
Brand: background [BG], points and number [INK], accent line [ACCENT], font [FONT] embedded. If the font is missing, stop and ask.
Points: about 3,200, varied opacity, faint twinkle. Draw "[NUMBER]" in the bold weight on an offscreen canvas and sample its filled pixels as targets. Give most points (about 2,700) to the number so it reads crisply at feed size, comma included; the rest stay as dim drifting stars. Each point about 2.5 px, near full opacity on the number.
Timing: 0 to 2 s points drift. 2 to 6.5 s they pull into the number with a long staggered ease, like gravity. 6.5 to 7.5 s a thin accent line draws left to right under the number. 7.5 to 8.5 s the label rises about 12 px into place. 8.5 to 10.5 s hold, the number only shimmers. 10.5 to 12 s label and line fade and the points drift back to their exact start. Frame 12 equals frame 0.
Use a fixed random seed for every position. Reduced motion shows the held frame.
Capture frames at 0, 2, 4.5, 6.5, 7.5, 9.5, 11 and 12 s. Check the number reads exactly "[NUMBER]", nothing is cut off, and frames 0 and 12 are identical.
```

## Learned the hard way

- Too few points per digit makes the number look grey at feed size. About 2,700 of 3,200 points on the number fixes it.
- Create the canvas context with `willReadFrequently: true` so repeated pixel reads draw the same frame every time.
- Seed everything. An unseeded random call at render time makes every export different and breaks the loop.
- Check the seam by looking at frame 0 and the last frame; they should be identical.
- Put the source of the number in the post caption.

## Subclip tools

`validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`; `search_public_audio` for a soft shimmer or riser if sound is wanted. For a reel, see recipe 15.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/09-milestone-reveal.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/milestone-reveal/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/milestone-reveal/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
