---
name: code-motion-styles
description: Make a short code-built motion piece from a named style prompt (falling-stack 3D chart, proof machine, line-art science diagram, chain reaction, minimal line art, glow sketch, stickman notebook, 90s cel-anime launch, brick-built world, particle galaxy, glitch cut, circuit board, particle ring) and place it on the Subclip timeline as an editable layer. Use when the creator wants a short generated animation, a hook card, a transition, a diagram or a backdrop in one of these looks, or asks for "a style like" one of them.
---

# Motion style prompts (Subclip edition)

A set of 16 prompt files for short animations that are built in code. Each file names the style, the technique, the repo behind it, a ready prompt with [brackets] to swap, how to run it in Subclip and a tip. The creator picks a style, you fill the brackets with their subject and build one editable layer.

Only styles that no other community skill covers are here. The full 86-entry check is in `references/dedupe.md`: if a creator asks for a look listed there as covered (isometric, paper cut, pixel art, physics, beat-synced cards, product shots), use the skill named in that table instead.

## Capability reference video

`examples/capability-motion-styles.mp4` (about 26 seconds) cuts together eight of these styles as short clips, so you and the creator can see what the skill makes before choosing. Every style also has its own short clip and poster in `examples/` named like its prompt file.

## Style index

| # | Style | Repo behind it | Prompt file |
| --- | --- | --- | --- |
| 01 | Falling-stack 3D chart | [mrdoob/three.js](https://github.com/mrdoob/three.js) | [references/prompts/01-falling-stack-chart.md](references/prompts/01-falling-stack-chart.md) |
| 02 | Proof machine (maths as a machine) | [joeseesun/opus-video-prompts](https://github.com/joeseesun/opus-video-prompts) | [references/prompts/02-proof-machine.md](references/prompts/02-proof-machine.md) |
| 03 | Line-art science diagram | [joeseesun/opus-video-prompts](https://github.com/joeseesun/opus-video-prompts) | [references/prompts/03-line-art-science-diagram.md](references/prompts/03-line-art-science-diagram.md) |
| 04 | Chain reaction (flat rube-goldberg) | [joeseesun/opus-video-prompts](https://github.com/joeseesun/opus-video-prompts) | [references/prompts/04-chain-reaction.md](references/prompts/04-chain-reaction.md) |
| 05 | Minimal line art on black | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/05-minimal-line-art.md](references/prompts/05-minimal-line-art.md) |
| 06 | Glow sketch (dotted gold on black) | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/06-glow-sketch.md](references/prompts/06-glow-sketch.md) |
| 07 | Stickman notebook doodle | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/07-stickman-notebook.md](references/prompts/07-stickman-notebook.md) |
| 08 | 90s cel-anime launch | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/08-cel-anime-launch.md](references/prompts/08-cel-anime-launch.md) |
| 09 | Brick-built world | [mrdoob/three.js](https://github.com/mrdoob/three.js) | [references/prompts/09-brick-built-world.md](references/prompts/09-brick-built-world.md) |
| 10 | Particle galaxy | [mrdoob/three.js](https://github.com/mrdoob/three.js) | [references/prompts/10-particle-galaxy.md](references/prompts/10-particle-galaxy.md) |
| 11 | Glitch smash cut | [mrdoob/three.js](https://github.com/mrdoob/three.js) | [references/prompts/11-glitch-cut.md](references/prompts/11-glitch-cut.md) |
| 12 | Circuit-board pulse | [mrdoob/three.js](https://github.com/mrdoob/three.js) | [references/prompts/12-circuit-board.md](references/prompts/12-circuit-board.md) |
| 13 | Particle ring master prompt (style swap) | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/13-particle-ring-master.md](references/prompts/13-particle-ring-master.md) |
| 14 | Fur ring style line | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/14-fur-ring.md](references/prompts/14-fur-ring.md) |
| 15 | Matrix ring style line | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/15-matrix-ring.md](references/prompts/15-matrix-ring.md) |
| 16 | Minimal mono ring style line | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [references/prompts/16-minimal-mono-ring.md](references/prompts/16-minimal-mono-ring.md) |

## Pick a style

- Data or numbers on screen: 01 falling-stack chart.
- Teaching an idea: 02 proof machine, 03 line-art science diagram, 04 chain reaction.
- Quiet, premium, text light: 05 minimal line art, 06 glow sketch.
- Playful, social, vertical: 07 stickman notebook, 08 cel-anime launch, 09 brick-built world.
- Backdrop, hook or transition: 10 particle galaxy, 11 glitch smash cut, 12 circuit board, 13 to 16 particle ring.

When unsure, offer two candidates with their posters and let the creator choose. Keep one style per video unless asked.

## Before you start

- Read the project first: `get_project_outline` if one exists, otherwise `create_project` and keep the same project ID on every call. Use `get_media_context` before placing anything over footage.
- The code route costs no credits. Never start a paid generation without a quote: `get_ai_credit_status`, `list_ai_models`, `estimate_ai_generation`, then show the model, count and total and wait for approval.
- Never ask for an API key in chat. Ask the creator and get approval before any installer or download command runs. Repos named here are references, not things to install.
- One timeline edit at a time.

## Shared workflow

1. **Choose and read.** Open the style's prompt file. Ask only for what is missing: subject, length, aspect ratio (default 1920x1080, 1080x1920 for vertical styles) and palette if the brackets need one.
2. **Fill the brackets.** Replace every [bracket] with the creator's subject. Keep real data real: if numbers are invented, show "ILLUSTRATIVE DATA" on screen.
3. **Build the layer.** Default engine: a HyperFrames layer. Read `subclip-hyperframes-layer`, write one self-contained scene that draws every frame from time (a function of seconds: no wall-clock timers, no unseeded randomness, no accumulated state), run `validate_runtime_layer_source`, then `add_runtime_layer` with kind `hyperframes`. For real 3D use `threejs-3d-scenes` or `r3f-physics-and-effects`.
4. **Sound.** A short piece gets one sound on its main action: `search_public_audio` for an impact, whoosh or soft bed, placed on the beat. Voice only if asked (`generate_local_speech` for a free draft, `generate_speech` after approval).
5. **Check.** `seek_timeline` then `view_current_frame` at the start, middle and end, and `get_timeline_contact_sheet` for the whole piece. Look for clipped text, overlaps, flicker and anything that moves differently on a second pass.
6. **Alternative for external renders.** If a clip is rendered outside Subclip (for example with the HyperFrames command line, after the creator approves its install), bring it in with `import_external_media` and place it on the timeline.
7. **Generated alternative.** For looks that code cannot fake (a 90s cel launch with painted detail, a brick world with real light), offer `generate_ai_media` with the style description as the prompt, after the quote above. Offer the creator's own Codex or Grok generator first when it works.
8. **Export** only when asked: `get_export_configuration`, `list_render_queue`, `export_video`.

Record the result with `write_session_summary` and do not claim a check you did not run.

## Rules for every style

- Deterministic: every value is a function of the layer time; seeded randomness only.
- No logos, brand marks or real people's designs. Use original shapes.
- Keep text short and inside the safe area. Text goes in native overlays when it is long.
- Facts on screen must be true (a diagram's flow direction, a sum, a name).
- Each prompt is our own wording of the style; do not paste the source site's text.

## Credit

Style list and ideas from the Applied AI page "86 Claude Animation Styles and How to Make Them" (https://www.its-applied-ai.com/r/styles) and the Reels behind it. The page states no license. Prompts, recipes and clips here are our own wording and renders. Each prompt file names the upstream repo and its license.

Adapted for Subclip from https://www.its-applied-ai.com/r/styles by Applied AI, license not stated
