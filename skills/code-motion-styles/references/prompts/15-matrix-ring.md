# 15 Matrix ring style line

Source style: Applied AI list, number 65 (Matrix) (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

The particle ring where every mark is a glowing green 0 or 1, brightest where the light hits, over black with columns of binary digits raining down.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Use the master prompt in [13-particle-ring-master.md] with this style line.
Style: Matrix. Every mark is a glowing [green] 0 or 1, brightest where the light hits. The background is black with columns of [green] binary digits raining down behind the ring, dimmer than the ring so it stays in front.
```

## Run it in Subclip

Same route as the master file. Draw glyphs with `fillText` in a monospace stack at small sizes; choose 0 or 1 from a seeded hash of the mark index so the digits do not flicker between frames. Rain columns use a whole number of falls per 4 seconds so the loop is seamless.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Brightness from the light term, glyph size from depth. Rain at about 30 percent of the ring brightness. Keep a limited green ramp.

## Example

Reference clip: `examples/15-matrix-ring.mp4`. Poster: `examples/15-matrix-ring.jpg`.
