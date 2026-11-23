# 09 Brick-built world

Source style: Applied AI list, number 40, 51 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A toy-brick scene where everything is studded plastic: baseplate, hills, houses, trees and a minifigure, with a tower that assembles itself brick by brick and loose bricks as exhaust.

## Repo behind it

- Repo: mrdoob/three.js (https://github.com/mrdoob/three.js)
- License: MIT (checked with gh repo view).
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Three.js is a JavaScript library. In Subclip the `threejs-3d-scenes` and `r3f-physics-and-effects` skills already cover its runtime. Ask the creator first, before any installer is run. If a local render outside Subclip is wanted, describe the install command in text and wait for approval.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [5] second, 1080x1920 animation of [a paper plane flying through a brick-built world]. Everything is made of studded plastic bricks: a green baseplate, stepped green hills, little houses with red and orange brick roofs and blue windows, brick trees and a minifigure. A plane built from white plates flies across while a [striped] brick tower assembles beside the minifigure, brick by brick from the bottom up. Put the title on a red brick with studs: "[Brick Built]".
Launch variant: [a rocket of red, white and yellow bricks assembles on a grey studded baseplate in space, with a countdown number in its window and loose bricks tumbling out as exhaust].
Use original generic bricks only, no branded logos or minifigure designs. Drive everything from a time function.
```

## Run it in Subclip

Use the `threejs-3d-scenes` skill for a real 3D build (instanced boxes plus cylinder studs, one key light, soft shadow). A cheaper fallback is a canvas layer with an oblique projection. Render or draw per frame from time, then place it with `add_runtime_layer`, or import a finished MP4 with `import_external_media`.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Instance the bricks and stud cylinders so hundreds stay cheap. Stagger the assembly by row. Use a handful of saturated plastic colours.

## Example

Reference clip: `examples/09-brick-built-world.mp4`. Poster: `examples/09-brick-built-world.jpg`.
