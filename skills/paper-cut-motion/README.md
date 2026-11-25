Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society

# Paper-cut motion

<!-- cli:start -->
> Install from your terminal: `npx @subclip/community-skills install paper-cut-motion`
<!-- cli:end -->

Takes one finished image and makes a handcrafted paper collage motion video where the scene builds itself out of torn paper. Three steps: the paper-cut still, a nine panel storyboard sheet, then the animation.

## Use it

Tell your agent: "Use paper-cut-motion on this image" and attach the image. It runs the three steps and puts the result on your timeline.

## What changed for Subclip

The original skill runs in Claude Code and hands you prompts to paste into outside generators, then cuts with ffmpeg. This version keeps the creative method and does the work in Subclip: generation through `generate_ai_media` (or your own Codex CLI for images), voice through Subclip speech tools, and assembly on the editable timeline. Nothing here needs an outside key, ffmpeg or a script.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/lighthouse-assembly-reference.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/paper-cut-motion/lighthouse-assembly-reference.gif" alt="1. Paper lighthouse scene assembling piece by piece, back to front. Paper foley: CC0. No AI model." width="480"></a><br><sub>1. Paper lighthouse scene assembling piece by piece, back to front. Paper foley: CC0. No AI model. <a href="examples/lighthouse-assembly-reference.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/one-second-contact-sheet.jpg" alt="2. One frame per second: sky, sun, sea, cliff, lighthouse, birds. Built in code, no AI model." width="720"><br><sub>2. One frame per second: sky, sun, sea, cliff, lighthouse, birds. Built in code, no AI model.</sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. The scene is drawn as torn paper layers in code (a HyperFrames layer): no image or video model. Sound: Tapping and handling paper by IENBA and Paper Shuffle and Slide noises by khenshom on Freesound (CC0).</sub></p>

<!-- examples:end -->

## Source and license

The skill's own page on the list: https://app.notion.com/p/38db5f1fde2d80b4a7a0ecb96e5f6770

The list shows no license for this skill. The skill's page and its download pack were read, and this folder describes the method in new words; no upstream text, code or images are copied. See LICENSE for the notice.

## Credits: Claude Creative Skill Library Vol 2

This skill comes from the Notion list Claude Creative Skill Library Vol 2: https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1

Author shown on the list: PYNK Society (PYNK Society - AI Creative Lab, https://www.skool.com/pynk-society/about).
