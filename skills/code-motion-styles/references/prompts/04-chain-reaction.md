# 04 Chain reaction (flat rube-goldberg)

Source style: Applied AI list, number 74 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A cause-and-effect machine in flat colours: a ball rolls, hits a drum, tips a row of blocks like dominoes and turns a pair of gears. Smooth eased motion, one bold opening line.

## Repo behind it

- Repo: joeseesun/opus-video-prompts (https://github.com/joeseesun/opus-video-prompts)
- License: No license stated in the repository (checked with gh repo view). Nothing from it is copied here: it is cited only as a style reference, and the prompt below is our own.
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Nothing to install. The repo is a prompt collection; this skill does not copy it. Tell the creator it exists and let them open it themselves if they want more ideas.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [7] second, 1920x1080 chain-reaction animation on a cream background. Open on a short bold line: "[Make it catch]". Then a small ball rolls down a [black] ramp onto a [blue] ramp, hits [a yellow drum], which knocks over a row of [blue, black and yellow] blocks one after another, and the last block turns a pair of [yellow and blue] gears.
Flat colours, clean shapes, smooth eased motion, no gradients. Compute each block's tip angle from a staggered start time so the wave looks continuous, and make the gears mesh (opposite directions, speed ratio from tooth counts).
```

## Run it in Subclip

HyperFrames canvas layer. For a physically simulated version with real collisions use the `r3f-physics-and-effects` skill; this style prefers hand-timed motion because the staging matters more than the physics. Import a finished render with `import_external_media` if you render outside Subclip.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Make the cause land one frame before the effect starts. End on a held frame so the idea can be read. Keep to three or four colours.

## Example

Reference clip: `examples/04-chain-reaction.mp4`. Poster: `examples/04-chain-reaction.jpg`.
