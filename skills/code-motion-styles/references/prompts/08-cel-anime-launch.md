# 08 90s cel-anime launch

Source style: Applied AI list, number 43 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A cel-shaded launch in 1990s anime language: flat cloud bands, diagonal rain streaks, black ink outlines, a frame-to-frame shake, a vertical brush title and a film-grain overlay.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [4] second, 720x1280 animation of [a rocket launch] in a 90s cel-anime look. Deep blue sky with flat white cloud bands and diagonal rain streaks. A big cel-shaded [white and red] rocket with a round blue porthole and black ink outlines blasts upward on a jagged red and yellow flame, shaking from frame to frame. Add a red brush-style vertical title at the top left ([発射]) and a yellow italic subtitle at the bottom: "[Don't look back.]". Finish with a film-grain overlay and fast speed lines.
Use hard two-tone shading (one light, one shadow), no soft gradients on the rocket, and animate on twos for a cel feel.
```

## Run it in Subclip

HyperFrames canvas layer. If the creator prefers a generated version, ask with `list_ai_models`, get a price from `estimate_ai_generation`, and run `generate_ai_media` with the look description above as the prompt, after approval. Local fonts only: use a system CJK font for the title or draw it as strokes.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Hold each pose for two frames and add a one-frame white flash at liftoff. Two shading tones only. Keep text away from the flame.

## Example

Reference clip: `examples/08-cel-anime-launch.mp4`. Poster: `examples/08-cel-anime-launch.jpg`.
