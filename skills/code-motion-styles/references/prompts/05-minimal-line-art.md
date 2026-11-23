# 05 Minimal line art on black

Source style: Applied AI list, number 38 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

Calm, sparse thin white lines on pure black: a stick figure, a kite-like object on a string, dashed outlines with a dot at each corner and thin orbit rings with small dots circling.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [5] second, 1080x1920 (or 1920x1080) minimal line-art animation. Pure black background, thin white lines only. A stick figure stands on a long horizon line holding a string attached to [a paper plane] drawn with dashed lines and a small dot at each corner, like a kite. About halfway through, two thin rings draw around [the plane] with small dots orbiting along them. Keep the motion slow and calm.
Add a small lowercase caption in a light sans-serif: "[your title]". No fills, no gradients, no colour.
```

## Run it in Subclip

HyperFrames canvas or SVG layer, drawn with dashed strokes. Good as a quiet explainer inset, a hook card or a transition. Pair it with soft ambient music from `search_public_audio` and a single native caption.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Restraint is the style: fewer than ten shapes on screen. Draw lines on with a growing dash. Keep the caption lowercase and small.

## Example

Reference clip: `examples/05-minimal-line-art.mp4`. Poster: `examples/05-minimal-line-art.jpg`.
