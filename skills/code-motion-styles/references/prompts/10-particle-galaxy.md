# 10 Particle galaxy

Source style: Applied AI list, number 52 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A galaxy built from tens of thousands of points: bright core, two spiral arms and a faint halo, turning slowly with a gentle camera drift and a soft bloom.

## Repo behind it

- Repo: mrdoob/three.js (https://github.com/mrdoob/three.js)
- License: MIT (checked with gh repo view).
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Three.js is a JavaScript library. In Subclip the `threejs-3d-scenes` and `r3f-physics-and-effects` skills already cover its runtime. Ask the creator first, before any installer is run. If a local render outside Subclip is wanted, describe the install command in text and wait for approval.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [7] second, 1920x1080 animation of [a barred spiral galaxy turning in deep space]. Black background with no skybox. Build it from [30,000] small points: a bright white-gold core, two spiral arms in soft [purple and lilac] and a sparse halo of dimmer blue-white stars. Let the core bloom slightly (additive blending). The whole disc rotates slowly and a gentle camera drift shows the depth of the arms.
Place every star from its index and a seed (no random calls at render time) and drive the rotation from time so every render is identical.
```

## Run it in Subclip

HyperFrames canvas layer with additive blending (`globalCompositeOperation = 'lighter'`) is enough at 30,000 points. For true depth and bloom use the `r3f-physics-and-effects` skill (react-postprocessing bloom). Use it as a title backdrop, a transition or the opener of a space explainer.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Spiral arms: angle grows with radius, add noise to both. Colour by radius, not by index. Keep the core small and bright.

## Example

Reference clip: `examples/10-particle-galaxy.mp4`. Poster: `examples/10-particle-galaxy.jpg`.
