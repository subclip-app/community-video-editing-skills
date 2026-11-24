Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) by OpenMontageInc, AGPL-3.0

# website-to-video (Subclip edition)

Paste a URL and get a video made from that site's own brand: its colors, fonts, copy, logo and imagery. The agent captures the page, writes a short brand sheet, agrees the message with you, storyboards concept-first, voices it, designs sound, builds every beat as an editable motion layer and checks the result frame by frame.

The original used a command line capture tool, a hosted image describer and several voice API keys. This version uses Subclip's own site inspector, voices, music and sound effects, motion layers and export. No outside API keys, no Python, no ffmpeg, no scripts to run.

## Install

In Subclip: **Skills > Add skill**, paste `https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/website-to-video`.

## Use

> Make a 20 second vertical clip for Instagram from https://example.com. Fast and punchy, no voice, music only.

## What's inside

| File | What it covers |
|---|---|
| `SKILL.md` | The seven steps, routing, quick reference |
| `references/brand-and-brief.md` | Capture, brand sheet, message and arc questions |
| `references/storyboard.md` | Concept, pacing, technique pick, asset audit, shot grammar, sound design |
| `references/build-and-verify.md` | Voiceover timing, building beats, motion rules, the verification checklist |

## Limits

Subclip captures up to 3 page screenshots plus logo and image candidates. It does not export every SVG or Lottie file on the page. Sound effects are generated or found, not bundled. The original `w2h-verify` script is replaced by a manual checklist.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/trail-tour.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/website-to-video/trail-tour.gif" alt="A local field guide’s captured map pushes in behind a two-line tour opener." width="480"></a><br><sub>A local field guide’s captured map pushes in behind a two-line tour opener. <a href="examples/trail-tour.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/trail-closeup.jpg" alt="A close-up reuses the site’s original contour map to show how to spot the ridge." width="720"><br><sub>A close-up reuses the site’s original contour map to show how to spot the ridge.</sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Rendered in code (HTML, SVG or canvas, HyperFrames): no image, video or audio model.</sub></p>

<!-- examples:end -->

## License

AGPL-3.0, same as the original project. See `LICENSE`.
