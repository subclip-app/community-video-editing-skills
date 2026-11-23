# 06 Glow sketch (dotted gold on black)

Source style: Applied AI list, number 35, 48 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

Everything is drawn as dotted gold and white lines with a soft glow on pure black. The dots slowly crawl along every line and a halo breathes behind the hero object.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [5] second, 1080x1920 glow-sketch animation on pure black. [A paper plane] drawn in dotted gold lines with a soft glow flies in over [a dotted white suspension bridge and city outline], with a faint mirrored reflection below. A warm amber halo breathes behind the plane and a dotted moon sits top right. The dots crawl slowly along every line.
Variant for a launch: [a gold outline rocket with a blue porthole follows a curved trajectory from a wireframe globe to an outline moon] and leaves a glowing trail, with a small wide-spaced caption at the top. Title in glowing gold: "[Glow Sketch]".
```

## Run it in Subclip

HyperFrames canvas layer: draw paths with `setLineDash` and animate `lineDashOffset` from time; add glow with `shadowBlur` or a second blurred pass. Keep blur inside canvas, not CSS filters on text. Good over dark footage as an overlay when drawn with `globalCompositeOperation = 'lighter'`.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Dots should be round and evenly spaced (dash pattern 0.1 and a gap with round line caps). Limit the palette to gold, white and one cool accent.

## Example

Reference clip: `examples/06-glow-sketch.mp4`. Poster: `examples/06-glow-sketch.jpg`.
