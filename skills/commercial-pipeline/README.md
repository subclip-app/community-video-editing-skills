Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society

# Commercial pipeline

A three stage pipeline for a 30 second AI commercial: plan and generate the reference images the film needs, assemble them into one structured video prompt, then fix only what broke.

## Use it

Tell your agent: "Use commercial-pipeline for <product and idea>". Describe the film in a few plain sentences and attach the real logo and product photos.

## What changed for Subclip

The original skill runs in Claude Code and hands you prompts to paste into outside generators, then cuts with ffmpeg. This version keeps the creative method and does the work in Subclip: generation through `generate_ai_media` (or your own Codex CLI for images), voice through Subclip speech tools, and assembly on the editable timeline. Nothing here needs an outside key, ffmpeg or a script.

<!-- examples:start -->

## Examples

<p align="center"><img src="examples/desk-lamp-off.jpg" alt="Hero product reference for a mustard desk lamp in its off state on white. Image: gpt-image-2." width="720"><br><sub>Hero product reference for a mustard desk lamp in its off state on white. Image: gpt-image-2.</sub></p>

<p align="center"><img src="examples/desk-lamp-on.jpg" alt="After-state reference for the same lamp, switched on in matching framing. Image: gpt-image-2." width="720"><br><sub>After-state reference for the same lamp, switched on in matching framing. Image: gpt-image-2.</sub></p>

<p align="center"><a href="examples/desk-lamp-switch-on.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/commercial-pipeline/desk-lamp-switch-on.gif" alt="The mustard desk lamp fades from off to on in matching framing. Clip: ffmpeg crossfade, no video model." width="480"></a><br><sub>The mustard desk lamp fades from off to on in matching framing. Clip: ffmpeg crossfade, no video model. <a href="examples/desk-lamp-switch-on.mp4">Play with sound</a></sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Images: gpt-image-2 (Codex CLI image generation). Video: no video model, the clip is an ffmpeg edit of the stills. Silent.</sub></p>

<!-- examples:end -->

## Source and license

The skill's own page on the list: https://app.notion.com/p/3f3b5f1fde2d81ebad88d8fb334405e5

The list shows no license for this skill. The skill's page and its download pack were read, and this folder describes the method in new words; no upstream text, code or images are copied. See LICENSE for the notice.

## Credits: Claude Creative Skill Library Vol 2

This skill comes from the Notion list Claude Creative Skill Library Vol 2: https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1

Author shown on the list: PYNK Society (PYNK Society - AI Creative Lab, https://www.skool.com/pynk-society/about).
