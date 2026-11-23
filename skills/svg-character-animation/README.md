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

<!-- examples:start -->

## Examples

<p align="center"><img src="examples/raised-wave-pose.jpg" alt="The held wave pose after the eyes lead and the shoulder rotates." width="720"><br><sub>The held wave pose after the eyes lead and the shoulder rotates.</sub></p>

<p align="center"><video src="examples/robot-wave.mp4" controls muted loop playsinline width="720"></video><br><sub>A jointed SVG robot notices something, waves, blinks and settles.</sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Rendered in code (HTML, SVG or canvas, HyperFrames, ffmpeg): no image, video or audio model.</sub></p>

<!-- examples:end -->

## License

AGPL-3.0, same as the original project. The upstream skill file also carried an MIT license line; the repository license (AGPL-3.0) is the one kept here. See `LICENSE`.
