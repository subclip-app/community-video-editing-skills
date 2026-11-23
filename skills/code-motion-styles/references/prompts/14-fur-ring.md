# 14 Fur ring style line

Source style: Applied AI list, number 60 (Fur) (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

The particle ring with every mark as a soft hair, cream white, drooping slightly and swaying, floating over a red knitted wool background with a soft shadow.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Use the master prompt in [13-particle-ring-master.md] with this style line.
Style: Fur. Every mark is a soft hair growing out of the surface and drooping slightly, [cream white], swaying gently. The ring floats over a [red] knitted wool background (draw a V-stitch knit pattern) with a soft shadow beneath it.
```

## Run it in Subclip

Same route as the master file: one HyperFrames canvas layer, a 4 second loop. Draw each hair as a short curved stroke (quadratic) from the surface point along the normal, with a downward droop and a sway from `sin` of time and the point's phase.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Hairs should follow the surface normal, drooping by gravity. Use two or three cream tints for depth. Keep the knit pattern low contrast so the ring stays the hero.

## Example

Reference clip: `examples/14-fur-ring.mp4`. Poster: `examples/14-fur-ring.jpg`.
