Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) by OpenMontageInc, AGPL-3.0

# svg-character-animation (Subclip edition)

Rig a character from SVG parts and animate it in an editable Subclip motion layer. The agent builds the parts with stable pivots, then animates with a paused GSAP timeline: anticipation, follow-through, blinks, gaze, mouth shapes timed to your narration, and pose holds long enough to read.

No outside API keys, no Python, no ffmpeg. Narration, music and sound effects stay in native Subclip audio lanes.

## Install

In Subclip: **Skills > Add skill**, paste `https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/svg-character-animation`.

## Use

> Make a round mascot walk in, wave at the camera and say my intro line. Lip-sync it to the narration.

## What's inside

| File | What it covers |
|---|---|
| `SKILL.md` | Rig structure, pivots, acting rules, placing the layer, Remotion pattern, quality checklist |

Pair it with the `character-animation-qa` skill to review the result.

## License

AGPL-3.0, same as the original project. The upstream skill file also carried an MIT license line; the repository license (AGPL-3.0) is the one kept here. See `LICENSE`.

## Examples

An original SVG robot rig driven by a paused GSAP timeline and rendered in headless Chrome.

![The held wave pose after the eyes lead and the shoulder rotates.](examples/raised-wave-pose.jpg)

[A jointed SVG robot notices something, waves, blinks and settles.](examples/robot-wave.mp4)
