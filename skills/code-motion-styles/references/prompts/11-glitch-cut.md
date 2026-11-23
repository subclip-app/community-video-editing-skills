# 11 Glitch smash cut

Source style: Applied AI list, number 54 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A two-scene video where a hard RGB-split glitch (channel offsets, blocky displacement, a brief smear) cuts from a dotted night landscape into a ring tunnel rushing at the camera.

## Repo behind it

- Repo: mrdoob/three.js (https://github.com/mrdoob/three.js)
- License: MIT (checked with gh repo view).
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Three.js is a JavaScript library. In Subclip the `threejs-3d-scenes` and `r3f-physics-and-effects` skills already cover its runtime. Ask the creator first, before any installer is run. If a local render outside Subclip is wanted, describe the install command in text and wait for approval.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [6.5] second, 1920x1080 glitch-cut animation. Part 1 (0 to [2.5] s): a dark rolling terrain of glowing dots under a night sky with a pale moon. At the cut, hit a glitch: red, green and blue channels split, a brief RGB smear and blocky horizontal displacement. Part 2 (to the end): smash-cut into a tunnel of concentric [gold, white and pink] rings rushing toward the camera with short light streaks and the same RGB split on the edges.
It must feel like a hard video glitch, not a fade. Drive every effect from time with seeded randomness so every render is the same. [Optional: replace the two scenes with your own and keep the glitch between them.]
```

## Run it in Subclip

HyperFrames canvas layer: draw the frame to an offscreen canvas, then composite three channel-shifted copies with `lighter` and add a few displaced strips. For glitch applied to a real clip on the timeline, use native effects (`add_media_effect`) around the cut and keep this layer for generated scenes.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

The glitch is only 3 to 6 frames, then hard clean. Pair it with a short impact sound from `search_public_audio` placed on the cut frame.

## Example

Reference clip: `examples/11-glitch-cut.mp4`. Poster: `examples/11-glitch-cut.jpg`.
