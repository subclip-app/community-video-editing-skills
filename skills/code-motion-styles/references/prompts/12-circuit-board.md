# 12 Circuit-board pulse

Source style: Applied AI list, number 59 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A top-down printed circuit board: fine weave, a labelled chip in the centre, traces with pads and part labels, and pulses of light that run along the traces into the chip.

## Repo behind it

- Repo: mrdoob/three.js (https://github.com/mrdoob/three.js)
- License: MIT (checked with gh repo view).
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Three.js is a JavaScript library. In Subclip the `threejs-3d-scenes` and `r3f-physics-and-effects` skills already cover its runtime. Ask the creator first, before any installer is run. If a local render outside Subclip is wanted, describe the install command in text and wait for approval.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [6.5] second, 1920x1080 circuit-board animation, top-down. A dark green PCB with a fine weave texture. A square black chip sits in the centre labelled "[AI-1]" on the first line and "[NEURAL CORE]" on the second. Green traces run from the chip to the edges with small pads and labels like [R12, U1, C7]. A revision mark in the corner reads "[REV B]". Pulses of light travel along the traces toward the chip, then the chip face brightens slightly.
Route traces with right angles and 45 degree bends only. Drive the pulses from a time function so every render is identical.
```

## Run it in Subclip

HyperFrames canvas layer (2D is enough). Draw each trace as a polyline, then move pulses by arc length from time. Good as a hardware or AI explainer backdrop behind native text (`add_text_overlay`).

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Keep labels tiny and aligned to the grid. Stagger pulses so they converge on the chip together. Fake a revision date with a clearly fictional mark.

## Example

Reference clip: `examples/12-circuit-board.mp4`. Poster: `examples/12-circuit-board.jpg`.
