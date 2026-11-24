---
name: motion-graphics-skills-pack
description: Make launch-grade motion graphics as editable Subclip layers from 15 recipes drawn from the motion-graphics-skills pack - brand memory (brand.md and MOTION.md), motion briefs and 8-part prompts, reference breakdowns, a Mac-style launch film with a notch, a milestone number reveal, 16 premium UI, data, type and system effects, a 3D night-street title opener, a three-model showdown, a loop cover and a vertical reel export. Use when the creator asks for a launch film, a milestone or follower-count reveal, an Apple-style notch animation, a chart morph, a masked or elastic type reveal, a looping cover, a model comparison video, a 9:16 reel version, or says "set up my brand for motion", "motion brief", "Motion prompt" or "break down this reference".
---

# Motion graphics skills pack (Subclip edition)

Fifteen recipes for motion that is built from code, one frame at a time, and placed on the Subclip timeline as editable layers. Nothing is screen-recorded and no video model is needed. Each recipe has its own file in `references/` with the exact brief, the Subclip tools, the checks and a reference clip in `examples/`.

Four recipes are fully new to the community library, nine are partly new, and two are already covered by other skills and are only pointers. The full check is in `references/overlap.md`.

## Capability reference video

`examples/capability-motion-graphics-skills-pack.mp4` (about 20 seconds) cuts together eight of the recipes with labels. Show it when a creator asks what this skill can do. Every recipe, and every one of the 16 effects, also has its own 10 second clip in `examples/`.

## Style index

| # | Recipe | Status | Reference file | Reference clip |
| --- | --- | --- | --- | --- |
| 01 | Brand intake (brand.md + MOTION.md) | partly new | [references/01-brand-intake.md](references/01-brand-intake.md) | `examples/01-brand-intake.mp4` |
| 02 | Motion brief writer | partly new | [references/02-motion-brief-writer.md](references/02-motion-brief-writer.md) | `examples/02-motion-brief-writer.mp4` |
| 03 | Motion prompt writer (8 parts) | partly new | [references/03-motion-prompt-writer.md](references/03-motion-prompt-writer.md) | `examples/03-motion-prompt-writer.mp4` |
| 04 | Reference to motion | partly new | [references/04-reference-to-motion.md](references/04-reference-to-motion.md) | `examples/04-reference-to-motion.mp4` |
| 05 | Launch video (30 to 45 s) | covered: use `product-launch-motion` | [references/05-launch-video.md](references/05-launch-video.md) | `examples/05-launch-video.mp4` |
| 06 | Apple-style launch film (notch) | new | [references/06-apple-launch-film.md](references/06-apple-launch-film.md) | `examples/06-apple-launch-film.mp4` |
| 07 | Vox-style explainer | covered: use `vox-explainer` | [references/07-vox-explainer.md](references/07-vox-explainer.md) | `examples/07-vox-explainer.mp4` |
| 08 | Animated chart (looping) | partly new | [references/08-animated-chart.md](references/08-animated-chart.md) | `examples/08-animated-chart.mp4` |
| 09 | Milestone reveal (number from points) | new | [references/09-milestone-reveal.md](references/09-milestone-reveal.md) | `examples/09-milestone-reveal.mp4` |
| 10 | Motion effects (16 effects) | new | [references/10-motion-effects.md](references/10-motion-effects.md) and `references/effects/` | `examples/10-motion-effects.mp4` plus `examples/fx-01` to `fx-16` |
| 11 | 3D title sequence | partly new | [references/11-title-sequence-3d.md](references/11-title-sequence-3d.md) | `examples/11-title-sequence-3d.mp4` |
| 12 | Model showdown | partly new | [references/12-model-showdown.md](references/12-model-showdown.md) | `examples/12-model-showdown.mp4` |
| 13 | Newsletter promo | partly new | [references/13-newsletter-promo.md](references/13-newsletter-promo.md) | `examples/13-newsletter-promo.mp4` |
| 14 | Loop cover | new | [references/14-loop-cover.md](references/14-loop-cover.md) | `examples/14-loop-cover.mp4` |
| 15 | Reel export (9:16) | partly new | [references/15-reel-export.md](references/15-reel-export.md) | `examples/15-reel-export.mp4` |

The 16 effects: fx-01 Button to player, fx-02 Search to results, fx-03 Card to workspace, fx-04 Tabs to panels, fx-05 Chart morph, fx-06 Dashboard zoom, fx-07 Spring stack, fx-08 Magnetic dock, fx-09 Masked type, fx-10 Elastic type, fx-11 Text to layout, fx-12 Image reveal, fx-13 Perspective shift, fx-14 Glass focus, fx-15 Flowing paths, fx-16 Particle logo. Each has a file `references/effects/fx-NN-name.md` and a clip `examples/fx-NN-name.mp4`.

## Pick a recipe

- First time for a brand, or the look keeps drifting: 01, then 02 or 03.
- The creator has a video they admire: 04.
- A launch, offer or cohort: 05 (hand off to `product-launch-motion`). A "why" explainer: 07 (hand off to `vox-explainer`).
- A Mac-style product film: 06. A number to celebrate: 09. Results on a chart: 08 or effect 05.
- One premium moving detail (button, search, dock, type, logo): 10, effect by effect.
- A cinematic opener: 11. A fair comparison video: 12. An edition teaser: 13.
- A cover that moves: 14. A vertical version of anything wide: 15.

When a request fits two recipes, offer the two and let the creator choose. One recipe per piece.

## Before you start

- Read the project first: `get_project_outline`, or `create_project` and keep the same project ID on every call. Use `get_media_context` before placing anything over footage.
- The whole pack is the code route: it costs no credits. If a creator wants a generated clip or a voice, check `get_ai_credit_status` and `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval. Local narration (`generate_local_speech`) is free.
- Never ask for an API key in chat. Never run an installer or a download command for the creator. Tools named in the upstream pack (HyperFrames command line, ffmpeg, Python) are replaced by Subclip's own tools below.
- One timeline edit at a time, and re-read the project after each coherent change.

## House rules for every recipe

1. **Facts first.** Every name, date and number on screen comes from a list the creator approved, with a source for any claim. Sample data carries an "Illustrative data" label on every frame. Never turn a target into a result, never round a number up, never add a plus sign.
2. **Their brand, not the average.** Colors and fonts come from the creator (01) or are asked for. Typed hex codes beat hex codes sampled from an image. With nothing given, use a neutral palette and label it "Neutral default, replace with your brand".
3. **Default dislikes** (the creator may override): typewriter reveals on headlines, glow used as decoration, bouncy overshoot on serious work, gradients on text, purple-to-blue backgrounds, stock icons, lorem ipsum. Typing is fine inside a product's input box.
4. **Hand-made feel** means motion on twos: hold each pose for two frames at 24 fps (quantise time to 1/12 s).
5. **The hook is in the first 3 seconds.** If the first frame is empty, cut it.
6. **Check before showing.** One frame from the middle of every shot, looked at for cut-off text, overlaps, wrong facts and flicker.
7. **Originality.** Never recreate a real product's UI, icons or logos from memory. Use the creator's files, or original shapes and plain type.

## Shared build workflow (code route)

1. **Brief.** Open the recipe's reference file. Ask only for what is missing (the file lists its inputs). Fill the [brackets].
2. **Write the scene.** Read the built-in `subclip-hyperframes-layer` skill with `read_subclip_skill`, then write one self-contained scene whose every value is a function of the layer time: no wall-clock timers, no unseeded randomness (use a seeded generator), no accumulated state, fonts and images embedded. For a loop, the last frame must equal the first. Run `validate_runtime_layer_source`.
3. **Place it.** `add_runtime_layer` with kind `hyperframes`. Use Remotion only when the creator asks for React, TSX or Remotion. For one small CSS effect use `add_html_motion_graphic`. For real device or product 3D, prefer `threejs-3d-scenes`.
4. **Sound.** One sound on the main action is enough for a short piece: `search_public_audio` for a soft hit, riser or bed, placed on the beat. Voice only if asked: `generate_local_speech` for a free draft.
5. **Check.** `seek_timeline` then `view_current_frame` at the moments the recipe lists, plus `get_timeline_contact_sheet` over the whole piece. Look at the frames yourself. Saved state is not visual proof.
6. **Fix one thing at a time.** Name the single problem, keep the motion, timing and loop that work, and use `read_layer_source` and `edit_layer_source` to change only that part.
7. **Export** only when asked: `get_export_configuration`, `list_render_queue`, then `export_video`. If the export options list GIF, use it for loops; otherwise deliver MP4 and say so.
8. **Record.** `update_project_director_brief` for decisions, `write_session_summary` at the end. Do not claim a check you did not run, and tell the creator what still needs a listen or a look.

## Use with other skills

- `motion-polish`: replaces the upstream dependency on an Apple design skill. Run its `review-animations` on any piece that "feels cheap" and apply its ranked fixes one at a time.
- `hyperframes-motion-layers` and `remotion-motion-layers`: the two engines these recipes run on.
- `code-motion-styles`, `code-video-recipes`: other code-built looks. Use them when the creator wants a style that is not in this pack.
- `product-launch-motion`, `vox-explainer`, `vox-director`, `video-shotcraft`, `website-to-video`: the existing skills that cover recipes 05 and 07 fully.

## Credit

Adapted for Subclip from https://github.com/charlie947/motion-graphics-skills by Charlie Hills, MIT license (commit 229022ebca76972e119e36ada23a1648d51665ab). The briefs, recipes and clips here are rewritten in our own words for Subclip tools. The two clips `examples/05-launch-video.mp4` and `examples/09-milestone-reveal.mp4` are the original author's own sample animations. All other clips were rendered in code by Subclip, with no image, video or audio model.
