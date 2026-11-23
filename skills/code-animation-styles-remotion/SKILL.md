---
name: code-animation-styles-remotion
description: Make a short code-drawn animation in one of 39 named looks (whiteboard, chalkboard, blueprint, watercolour, cel anime, papercut, woodcut, ukiyo-e, stained glass, low-poly, brick toy, claymation, pixel art, hologram HUD, circuit board, liquid motion and more) and put it on the Subclip timeline as an editable HyperFrames or Remotion layer. Use when the creator names one of these styles, asks to retell a story or explain a topic "in a whiteboard, chalk, paper, pixel or retro style", wants to compare or pick an animation style, or says "now do it in another style". Costs no AI credits.
---

# 39 animation styles in code (Subclip edition)

Thirty-nine animation looks that are drawn entirely in code, with no image or video model. Each one has a ready example clip, a build recipe (palette, motion rules, typography, engine) and a "retell with your story" method. The original collection retells one 5-second chai story in every style so the looks can be compared side by side. In Subclip you keep that method: fix the story, change the style.

The code route spends no AI credits. If the creator wants a look that code cannot fake, say so and hand over to `ai-style-atlas` or `ai-illustration-styles` (they generate with credits and quote first).

## Capability reference video

`examples/capability-animation-styles.mp4` (about 20 seconds) shows ten of the styles back to back with labels. Every one of the 39 styles also has its own 5 second clip in `examples/<number>-<slug>.mp4`. Open the clip of the chosen style before building: it is the visual target.

## Read these files as needed

| File | Use |
| --- | --- |
| `references/style-index.md` | All 39 styles, family, look, clip, and which other community skill also covers it |
| `references/<family>.md` | Build recipe per style: palette, motion, typography, engine. Families: `drawn-on-a-board`, `hand-drawn-and-painted`, `cartoon`, `paper-and-puppets`, `print-and-craft`, `graphic-and-explainer`, `3d-look`, `cinema-eras`, `screens-and-science`, `abstract` |
| `references/our-guide.md` | Choosing a style by topic and audience, retelling the story, durations, vertical safe zones, QA |
| `references/subclip-tools.md` | The exact Subclip tool calls for HyperFrames and Remotion layers, sound, check and export |
| `references/overlap.md` | Dedupe: which skill to use when another covers the same look |

## Workflow

1. **Read the project first.** `get_project_outline` if a project exists (otherwise `create_project`), keep the same project ID on every call, `get_media_context` before placing anything over footage.
2. **Choose one style.** If the creator named one, map it with `style-index.md`. If not, offer three from `our-guide.md` with their example clips and let the creator pick. One style per video unless asked. If `style-index.md` shows another skill that covers the look better for the job, read `overlap.md` and say which skill you use.
3. **Write the story beats.** Show a short table: actor, action, result, aftermath, and a time for each (see "Retell the story" in `our-guide.md`). Show it to the creator and continue unless something is unclear.
4. **Build one layer.** Default engine: HyperFrames (SVG, canvas, a paused timeline, everything a function of layer time). Use Remotion only when the creator asks for React or TSX, or the layer is already Remotion. Follow `subclip-tools.md`. Take palette, motion and typography from the style's recipe, shapes from the creator's story.
5. **Check.** `seek_timeline` plus `view_current_frame` at the start, middle and end of each beat, then `get_timeline_contact_sheet`. Fix and repeat; two or three passes are normal.
6. **Sound.** A short piece gets one sound on its main action from `search_public_audio` (soft whoosh, pour, tap, paper). Voice only if asked: `generate_local_speech` for a free draft, `generate_speech` after the creator approves the voice and cost.
7. **Export** only when asked: `get_export_configuration`, `list_render_queue`, `export_video`. Record the result with `write_session_summary`; never claim a check you did not run.

## Rules for every style

- Deterministic: every value is a function of layer time. Seeded randomness only; no `Math.random`, no wall clock, no accumulated state.
- Own shapes: no real brands, logos, people, maps, flags, TV networks or known characters. A toy brick is never named by brand.
- Facts on screen are true. A data style plots the story's own values only; invented numbers carry a visible "ILLUSTRATIVE DATA" label.
- Text only where the style is typographic, broadcast or game UI, short English about the creator's story.
- Never ask for an API key in chat. Never run an installer or download command without the creator's approval. The upstream repository is a reference only; nothing here needs it installed.
- One timeline edit at a time.

## Credit

The 39 styles, their numbering, the chai story and the example clips come from the animation-styles collection by deenukhan (MIT). The descriptions, recipes and guide here are our own wording.

Adapted for Subclip from https://github.com/deenukhan/animation-styles by deenukhan, MIT
