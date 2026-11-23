# 03 Line-art science diagram

Source style: Applied AI list, number 18 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A thin white line diagram built in steps on a dark background: draw the frame, add one loop or arrow set per step, mark the zones, then the labels, with one caption line explaining each step.

## Repo behind it

- Repo: joeseesun/opus-video-prompts (https://github.com/joeseesun/opus-video-prompts)
- License: No license stated in the repository (checked with gh repo view). Nothing from it is copied here: it is cited only as a style reference, and the prompt below is our own.
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Nothing to install. The repo is a prompt collection; this skill does not copy it. Tell the creator it exists and let them open it themselves if they want more ideas.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [7] second, 1920x1080 line-art diagram titled "[Three-cell circulation]". On a dark navy background draw the curve of [the Earth], then build the diagram step by step: [the Hadley cell, then the Ferrel cell, then the Polar cell], each as an animated loop with arrowheads. Mark [the pressure belts: equatorial low, subtropical high, subpolar low, polar high] with dashed lines, then add [the surface winds: trade winds, westerlies, polar easterlies].
Use thin white lines and one warm accent colour for [the Sun]. One caption line at the bottom explains the current step. Every arrow must point the way the real thing flows.
```

## Run it in Subclip

HyperFrames SVG or canvas layer. Use stroke-dashoffset style drawing (animate the drawn length from time) and group each step so one tween reveals a whole group. Add narration with `generate_speech` after approval, or keep it silent with a caption track (`transcribe_project`, `update_caption_style`).

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Draw in the order a teacher would explain. Check facts before drawing them: direction of flow and names must be correct. Keep one accent colour.

## Example

Reference clip: `examples/03-line-art-science-diagram.mp4`. Poster: `examples/03-line-art-science-diagram.jpg`.
