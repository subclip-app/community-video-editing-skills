Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society

# Documentary case file

Plans and builds a cinematic 3D documentary from a single sentence. It produces a case file with chapters and a scene table, locked stills for every character, place and prop, one video prompt per scene with sound design, and one narrator script, then assembles it on the Subclip timeline.

## Use it

Tell your agent: "Use documentary-case-file: <one sentence about the story>". Approve the case file, then it makes the stills, scenes and narration.

## What changed for Subclip

The original skill runs in Claude Code and hands you prompts to paste into outside generators, then cuts with ffmpeg. This version keeps the creative method and does the work in Subclip: generation through `generate_ai_media` (or your own Codex CLI for images), voice through Subclip speech tools, and assembly on the editable timeline. Nothing here needs an outside key, ffmpeg or a script.

<!-- examples:start -->

## Examples

<p align="center"><img src="examples/empty-gauge-case-file.jpg" alt="Fictional case file with three timed chapters, asset IDs and narrator direction. Made in code, no AI model." width="720"><br><sub>Fictional case file with three timed chapters, asset IDs and narrator direction. Made in code, no AI model.</sub></p>

<p align="center"><img src="examples/greenhouse-location.jpg" alt="LOC-01, the empty greenhouse at blue hour with its lit utility alcove. Image: gpt-image-2." width="720"><br><sub>LOC-01, the empty greenhouse at blue hour with its lit utility alcove. Image: gpt-image-2.</sub></p>

<p align="center"><img src="examples/float-gauge-prop.jpg" alt="PROP-01, a brass gauge with its needle stuck at the low end. Image: gpt-image-2." width="720"><br><sub>PROP-01, a brass gauge with its needle stuck at the low end. Image: gpt-image-2.</sub></p>

<p align="center"><video src="examples/empty-gauge-chapter-plan.mp4" controls muted loop playsinline width="720"></video><br><sub>Three timed chapters reveal how a fictional greenhouse mystery leads to a stuck gauge. Rendered in code with HyperFrames.</sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Location and prop images: gpt-image-2 (Codex CLI image generation). Case file page: HTML screenshot. Clip: rendered in code with HyperFrames, no video model. Silent.</sub></p>

<!-- examples:end -->

## Source and license

The skill's own page on the list: https://app.notion.com/p/3ecb5f1fde2d81d38618c797fe848179

The list shows no license for this skill. The skill's page and its download pack were read, and this folder describes the method in new words; no upstream text, code or images are copied. See LICENSE for the notice.

## Credits: Claude Creative Skill Library Vol 2

This skill comes from the Notion list Claude Creative Skill Library Vol 2: https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1

Author shown on the list: PYNK Society (PYNK Society - AI Creative Lab, https://www.skool.com/pynk-society/about).
