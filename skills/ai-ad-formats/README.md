Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society

# AI ad formats

Five short ad formats for e-commerce brands in one skill: claymation, paper animation, a singing ad with an original song, a talking object, and a skeleton "what happens if" progression. Each format has its own beats, prompts and edit.

## Use it

Tell your agent: "Use ai-ad-formats, claymation, for <product>" and attach a clean product photo. Name another format to switch.

The five formats and the original commands: claymation (`/claymation`, four sub-styles from goofy clay to premium studio plasticine), paper animation (`/paper-animation`, five sub-styles from layered papercraft to origami, plus paper transitions), singing ad (`/song-style-ad`), talking object (`/talking-object`) and skeleton progression (`/skeleton-ads`, four skeleton styles). Each has its own file in `references/` and the skill starts with a format picker.

## What changed for Subclip

The original skill runs in Claude Code and hands you prompts to paste into outside generators, then cuts with ffmpeg. This version keeps the creative method and does the work in Subclip: generation through `generate_ai_media` (or your own Codex CLI for images), voice through Subclip speech tools, and assembly on the editable timeline. Nothing here needs an outside key, ffmpeg or a script.

## Source and license

The skill's own page on the list: https://app.notion.com/p/3b5b5f1fde2d81928e67dfee2cfb6d6c

The list shows no license for this skill. The skill's page and its download pack were read, and this folder describes the method in new words; no upstream text or code is copied. The example images marked "From the creator's list" are the author's own pictures from the skill's page, shown with credit at the request of the Subclip owner. See LICENSE for the notice.

Examples: images from the [Claude Creative Skill Library Vol 2](https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society, plus our own test outputs made with this skill in Subclip.

## Credits: Claude Creative Skill Library Vol 2

This skill comes from the Notion list Claude Creative Skill Library Vol 2: https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1

Author shown on the list: PYNK Society (PYNK Society - AI Creative Lab, https://www.skool.com/pynk-society/about).
