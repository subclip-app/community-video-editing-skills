# 08 Animated chart (looping)

**Status:** partly new (charts already exist in `hyperframes-motion-layers`; this adds the exact-data loop discipline). **Use it for:** a looping data graphic: bars that become a line, a number that counts up, a before and after. Every value stays exactly as given.

## Inputs, then wait

The title, the labels, the exact values, and whether they are real results or sample data. Sample data gets an "Illustrative data" label on every frame. Never round, reformat or add a number.

## Build brief

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, as a seamless loop.
Title: "[TITLE]". [If sample data: keep "Illustrative data" visible on every frame.]
Values: [LABEL 1: VALUE 1], [LABEL 2: VALUE 2], [...]
Four states:
1. Start: [what it looks like first].
2. Change (about 2 s): [the one thing that moves]. Nothing fades out and gets replaced.
3. Hold (about 4 s): the finished chart with [the headline value] labelled.
4. Return (about 1.5 s): it eases back to the start so the loop has no jump.
Look: background [BG], text [TEXT], accent [ACCENT], font [FONT]. No gradients, glow or bounce.
Rules: every frame comes from time alone; the title, labels and axis never move; only the chart changes; the last frame equals the first.
Capture frames at 0, 1, 2, 4 and 7 seconds and check for overlapping or cut-off text.
```

## Second pass: look again

Inspect the five frames and the loop boundary. Check that values are unchanged, labels are readable, nothing overlaps and each element appears only when it should. Report only problems you actually see, fix them, keep the earlier version and capture the same frames again. If there are none, say so and do not invent a revision.

## Export

MP4 at the project size, and a looping GIF if the export options offer one (see root workflow). Show three frames of the finished file.

## Subclip tools

`create_project`, `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For charts built from a creator data file, `import_external_media` or the project assets.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/08-animated-chart.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/animated-chart/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/animated-chart/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
