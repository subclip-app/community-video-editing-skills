# 13 Particle ring master prompt (style swap)

Source style: Applied AI list, number 60 to 69 master prompt (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

One reusable prompt for a seamless 4 second loop: a spinning ring built from thousands of marks, a hard 3 frame glitch at 2.5 s, and a {STYLE} line that swaps the whole look.

## Repo behind it

- Repo: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes)
- License: Apache-2.0 (checked with gh repo view).
- Install notes (text only, never auto-run): Subclip has a built-in HyperFrames layer (`add_runtime_layer`, kind `hyperframes`). If the creator wants the standalone command line renderer instead, tell them the project's install steps in text and ask before running anything.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Create one self-contained HTML file that plays a [4] second, seamlessly looping animation in a [9:16] frame (a 1080x1920 canvas scaled to fit the window, black outside it). Draw everything in code with the Canvas 2D API: no images, no external files, no libraries.
Subject: a spinning ring (a donut) built from thousands of small marks scattered evenly over its surface. It floats a little above the middle of the frame and fills about 80 percent of the width. It tumbles one full turn every 4 seconds around a vertical axis, tilted so you can see through the hole, and the marks drift around the ring as it turns. Light it from the upper left so one side is bright and the other falls into shadow. Hide marks on the far side so it reads as solid, drawing far marks first and near marks last.
Glitch: once per loop, at 2.5 seconds, a hard 3 frame glitch where horizontal slices of the whole picture jump sideways with a flash of colour, then snap back to clean.
Style: {STYLE}
Commit to the style completely: the marks, background, colours, texture and feel of motion should all belong to it, with a simple background scene that fits. The last frame must flow into the first. No text on screen.
```

## Run it in Subclip

Paste the master prompt with one style line (see the three style files 14, 15 and 16, or write your own) into a HyperFrames canvas layer (`add_runtime_layer`). It is a loop, so set the layer length to a multiple of 4 seconds or repeat it. Ten ready style lines exist in the source; the ones already covered by other skills (synthwave, pixel art, thermal, doodle, paper, blueprint, CRT) are listed in `references/dedupe.md` and can be used by pointing at those skills' looks.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

Seamless means every animated value uses a whole number of cycles in 4 seconds. Give the whole piece one palette. Keep the ring at about 80 percent width.

## Example

Reference clip: `examples/13-particle-ring-master.mp4`. Poster: `examples/13-particle-ring-master.jpg`.
