# 02 Proof machine (maths as a machine)

Source style: Applied AI list, number 6 (https://www.its-applied-ai.com/r/styles). The prompt below is rewritten in our own words.

## Technique

A maths argument shown as a physical machine: one dial per object (here one per prime), step captions in bold capitals, numbers in monospace and a single accent colour for the new value that breaks the assumption.

## Repo behind it

- Repo: joeseesun/opus-video-prompts (https://github.com/joeseesun/opus-video-prompts)
- License: No license stated in the repository (checked with gh repo view). Nothing from it is copied here: it is cited only as a style reference, and the prompt below is our own.
- Render tool reference: heygen-com/hyperframes (https://github.com/heygen-com/hyperframes), Apache-2.0. Inside Subclip you use the built-in HyperFrames layer, so nothing needs installing.
- Install notes (text only, never auto-run): Nothing to install. The repo is a prompt collection; this skill does not copy it. Tell the creator it exists and let them open it themselves if they want more ideas.

## Prompt

Swap everything in [brackets] for your own subject, then use it as the layer brief.

```text
Make a [7] second, 1920x1080 line-art animation of [Euclid's proof that there is no last prime]. Draw it as a machine with one round dial per prime in [2, 3, 5, 7, 11, 13]. Reveal captions in bold capitals, one per beat: "[Suppose the list ends.]", "[Multiply them all: 30030]", "[Add one: 30031]", "[Every listed prime leaves remainder 1.]", "[A prime is missing.]". Finish on "[There is no last prime.]".
Off-white paper, black line art, monospace numbers and one orange accent used only for the new value. Dials turn as the product builds. Check that every number on screen is arithmetically true.
```

## Run it in Subclip

HyperFrames canvas or SVG layer (`add_runtime_layer`). Time the captions to the narration if there is one: import speech first (`generate_local_speech` for a free draft) and use the real sentence times as the beat clock. Use the `manim-composer` skill instead when the creator wants a full 3Blue1Brown style lesson rather than a short machine metaphor.

Shared steps (project, checks, export) are in `SKILL.md` under Shared workflow.

## Credit cost

The code route (a HyperFrames layer or a local render imported with `import_external_media`) costs no credits. If the creator wants a generated video instead, check `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`.

## Tips

One idea per caption. Show the arithmetic you claim (30031 = 59 x 509). Keep dial labels horizontal and outside the dial rings.

## Example

Reference clip: `examples/02-proof-machine.mp4`. Poster: `examples/02-proof-machine.jpg`.
