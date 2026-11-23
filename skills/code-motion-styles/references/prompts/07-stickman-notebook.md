# 07 Stickman notebook doodle

Source style: Applied AI list, number 42 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A hand-drawn notebook gag: lined paper with a red margin, wobbly black outlines that re-jitter a few times a second and stick figures shouting short words.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [4] second, 720x1280 vertical animation of [a rocket launch] on lined notebook paper with a red margin line. Draw [the rocket] with thick black outlines and an orange nose, fin band and flame. It lifts off with wobbly hand-drawn lines that re-jitter [six] times a second. A stick figure dangles from the rocket shouting "[wait!!]", another cheers "[GO!]" and a third runs away shouting "[AAAH]" past scribbled smoke circles.
Everything is drawn from a time function with a seeded jitter that changes in steps (not every frame), so the boil is the same on every render.
```

## Run it in Subclip

HyperFrames canvas layer at 720x1280, or 1920x1080 for a landscape inset. Because it is cheap and fast, it also works as a joke beat inside a longer edit: place it with `add_runtime_layer` and cut to it on the beat (`cut-to-the-beat` skill).

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Jitter in steps of 1/6 s, not every frame, or it reads as noise. Keep words to one or two and large. Swap the rocket for your own subject in the first line.

## Example

Reference clip: `examples/07-stickman-notebook.mp4`. Poster: `examples/07-stickman-notebook.jpg`.
