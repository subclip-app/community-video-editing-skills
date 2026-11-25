Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) by OpenMontageInc, AGPL-3.0

# video-translate (Subclip edition)

<!-- cli:start -->
> Install from your terminal: `npx @subclip/community-skills install video-translate`
<!-- cli:end -->

Translate and dub a video into another language, or several, inside Subclip. The agent writes the translation, Subclip voices each speaker, checks every line against the original timing, places the dub on your timeline and, if you want, translates the captions and runs lip-sync.

The original called the HeyGen video translation API with a key. This version uses Subclip's own dubbing workflow and voice models, so there is no outside account, key or script.

## Install

In Subclip: **Skills > Add skill**, paste `https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/video-translate`.

## Use

> Dub this product demo into Spanish and German. Keep the product name as it is.

## Reference

[examples/coffee-spanish-dub.mp4](examples/coffee-spanish-dub.mp4) and [examples/coffee-french-dub.mp4](examples/coffee-french-dub.mp4) are dubs of [examples/coffee-english-source.mp4](examples/coffee-english-source.mp4) made with this skill: translated lines on the original timing, a new voice and translated captions. SKILL.md explains how.

## What's inside

| File | What it covers |
|---|---|
| `SKILL.md` | Workflow, translation craft, lip-sync, multi-language versions, original options mapped to Subclip |

## Needs

Subclip's `subclip-dubbing` skill and tools (dubbing workspace, voices, transcription). Lip-sync needs a lip-sync capable model in the live catalog.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/coffee-spanish-dub.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-translate/coffee-spanish-dub.gif" alt="1. Spanish dub: the coffee tutorial voiced in Spanish on the original timing, Spanish captions. Images: gpt-image-2. No video model." width="480"></a><br><sub>1. Spanish dub: the coffee tutorial voiced in Spanish on the original timing, Spanish captions. Images: gpt-image-2. No video model. <a href="examples/coffee-spanish-dub.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/coffee-french-dub.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-translate/coffee-french-dub.gif" alt="2. French dub: same video and timing, French voice and captions. Images: gpt-image-2. Rendered in code, no video model." width="480"></a><br><sub>2. French dub: same video and timing, French voice and captions. Images: gpt-image-2. Rendered in code, no video model. <a href="examples/coffee-french-dub.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/coffee-english-source.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-translate/coffee-english-source.gif" alt="3. English source: the original video both dubs follow. Images: gpt-image-2. Rendered in code, no video model." width="480"></a><br><sub>3. English source: the original video both dubs follow. Images: gpt-image-2. Rendered in code, no video model. <a href="examples/coffee-english-source.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/french-cue-fit.jpg" alt="4. French cue fit: paper-folding cues with original timing windows and measured speech fit." width="720"><br><sub>4. French cue fit: paper-folding cues with original timing windows and measured speech fit.</sub></p>

<p align="center"><img src="examples/spanish-cue-fit.jpg" alt="5. Spanish cue fit: paper-folding cues with original timing windows and measured speech fit." width="720"><br><sub>5. Spanish cue fit: paper-folding cues with original timing windows and measured speech fit.</sub></p>

<p align="center"><a href="examples/dubbing-cue-fit.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-translate/dubbing-cue-fit.gif" alt="6. Cue fit check: French and Spanish cues appear with their original time windows and measured speech fit." width="480"></a><br><sub>6. Cue fit check: French and Spanish cues appear with their original time windows and measured speech fit. <a href="examples/dubbing-cue-fit.mp4">Play with sound</a></sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Stills: gpt-image-2 through the Codex CLI. Voices: the free local Supertonic model. Captions: local transcription. Scenes rendered in code (HyperFrames): no video model.</sub></p>

<!-- examples:end -->

## License

AGPL-3.0, same as the original project. See `LICENSE`.
