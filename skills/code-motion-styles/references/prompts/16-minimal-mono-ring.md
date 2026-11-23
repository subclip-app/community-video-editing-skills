# 16 Minimal mono ring style line

Source style: Applied AI list, number 69 (Minimal Mono) (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

The particle ring in stark black and white: tiny white dots on pure black with fine film grain, and one thin waveform line with a mouse cursor riding along it underneath.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Use the master prompt in [13-particle-ring-master.md] with this style line.
Style: Minimal mono. Stark black and white minimalism. Tiny white dots on pure black, brighter where the light hits, with fine film grain. Underneath the ring, one thin white waveform line with a small mouse cursor riding along it.
```

## Run it in Subclip

Same route as the master file. The only text-like element is the cursor arrow, so there is nothing to caption. Film grain: a seeded noise pattern that changes per frame index, not per wall-clock time.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Contrast does the work: more dots on the lit side, none in shadow. Keep the waveform to one cycle count that loops in 4 seconds.

## Example

Reference clip: `examples/16-minimal-mono-ring.mp4`. Poster: `examples/16-minimal-mono-ring.jpg`.
