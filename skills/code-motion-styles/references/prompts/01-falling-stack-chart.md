# 01 Falling-stack 3D chart

Source style: Applied AI list, number 3, 20, 29 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A bar chart whose columns are built from falling objects (coins or banknote bundles) that pile up, with a value label landing on each column. One bundle equals a fixed amount, so the height is the data.

## Repo behind it

- Repo: mrdoob/three.js (https://github.com/mrdoob/three.js)
- License: MIT (checked with gh repo view).
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Three.js is a JavaScript library. In Subclip the `threejs-3d-scenes` and `r3f-physics-and-effects` skills already cover its runtime. Ask the creator first, before any installer is run. If a local render outside Subclip is wanted, describe the install command in text and wait for approval.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Build a [7] second, 1920x1080 chart scene titled "[Revenue by year]". Show [5] columns for [2021 to 2025] with values [1.2M, 1.8M, 2.6M, 3.1M, 4.4M]. Each column is made of stacked [gold coins] and one stack unit equals [100K], so the count of units is the value divided by the unit. Drop the units in one by one with a short stagger, let them settle with a tiny bounce, and show each value label above its column as it fills.
Use a dark navy stage, soft studio light, a real contact shadow under every stack and a slow oblique camera drift. If the numbers are made up, print "ILLUSTRATIVE DATA" on screen. Drive everything from a time function, with a seeded random only for tiny coin offsets, so the render is the same every time.
```

## Run it in Subclip

Default route: a HyperFrames canvas layer (`add_runtime_layer`, kind `hyperframes`) that draws ellipse-topped coin discs with perspective by hand. Read `subclip-hyperframes-layer` first and run `validate_runtime_layer_source` before adding it. For a true 3D look with real lighting, use the `threejs-3d-scenes` skill instead and keep the same timeline: columns of instanced cylinders, one key light, one soft shadow. A rendered MP4 can also be brought in with `import_external_media`.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Compute each unit's landing time from its index so the fill order is the data order. Keep the unit size round (100K, 1M) so viewers can count. Label every axis and never present invented numbers as real.

## Example

Reference clip: `examples/01-falling-stack-chart.mp4`. Poster: `examples/01-falling-stack-chart.jpg`.
