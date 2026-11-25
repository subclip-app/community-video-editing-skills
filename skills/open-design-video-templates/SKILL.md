---
name: open-design-video-templates
description: "Build one of 22 editorial and motion title, data, promo and brand frames as an editable Subclip HyperFrames or Remotion layer from a recipe card: bold poster, kinetic type, stat reveal, NYT-style chart, decision tree, logo outro, product promo and more."
---

# Open Design Video Templates for Subclip

Use this when the creator wants a branded title card, statement frame, stat or chart reveal, flowchart, product promo, logo outro or social stat overlay, and a named recipe below fits. Each recipe card in `references/` keeps the original template's look (palette, type, layout) and its timeline beats. You rebuild it as an editable motion layer with the creator's real copy, brand and numbers. Nothing here is a rendered video: the creator ends with layers they can still edit.

Default engine is a HyperFrames layer. Use a Remotion layer only when the creator asks for Remotion or React, or picks `frame-data-rollup` in its Remotion form. Default canvas is 16:9; honor the project's ratio when a main video already sets it.

## Pick a recipe

| Recipe | Look and move | Default length | Card |
| --- | --- | --- | --- |
| frame-bold-poster | 1970s editorial poster, red rule, tilted giant figure, three-line headline | 5 s | [card](references/frame-bold-poster.md) |
| frame-bold-signal | Orange card slides over a dark gradient, big section number | 4 s | [card](references/frame-bold-signal.md) |
| frame-build-minimal | Luxury whitespace, one word revealed letter by letter, gold hairline | 5 s | [card](references/frame-build-minimal.md) |
| frame-creative-voltage | Electric blue and dark split, outlined word, hand-drawn script | 4.5 s | [card](references/frame-creative-voltage.md) |
| frame-electric-studio | Two panels open from the center, pull quote across the seam | 4.5 s | [card](references/frame-electric-studio.md) |
| frame-swiss-grid | Navy and gold grid, mechanical slides, three stat callouts | 10 s overlay | [card](references/frame-swiss-grid.md) |
| frame-vignelli | Portrait red, black and white stat overlays, bold captions | 10 s overlay, 9:16 | [card](references/frame-vignelli.md) |
| frame-warm-grain | Cream and earth tones, soft stat shapes, speaker card | 10 s overlay | [card](references/frame-warm-grain.md) |
| frame-play-mode | Hot pink and blue stickers, elastic bounces | 10 s overlay | [card](references/frame-play-mode.md) |
| frame-kinetic-type | Six styled mini scenes about type, wipes between them | 15 s | [card](references/frame-kinetic-type.md) |
| frame-glitch-title | Cyberpunk title, chromatic offset, scanlines, data corruption | 5 s | [card](references/frame-glitch-title.md) |
| frame-light-leak-cinema | Film light leaks, grain, letterbox, serif title | 6 s | [card](references/frame-light-leak-cinema.md) |
| frame-liquid-bg-hero | Drifting color blobs behind a difference-blend quote | 8 s loop | [card](references/frame-liquid-bg-hero.md) |
| frame-takram-organic | Frosted card and a radial node graph that draws itself | 5 s | [card](references/frame-takram-organic.md) |
| frame-pentagram-stat | Swiss stat anchor, giant number, growing bars, black data bar | 4 s | [card](references/frame-pentagram-stat.md) |
| frame-data-chart-nyt | Newsroom line chart with staggered reveal and annotations | 8 s | [card](references/frame-data-chart-nyt.md) |
| frame-nyt-graph | Bars plus a drawing line, headline wipes on left to right | 15 s | [card](references/frame-nyt-graph.md) |
| frame-data-rollup | Bars grow by spring while the numbers roll up from zero | 6 s | [card](references/frame-data-rollup.md) |
| frame-decision-tree | Sticky-note flowchart, elbow connectors, cursor edit | 15 s | [card](references/frame-decision-tree.md) |
| frame-logo-outro | Five logo pieces assemble, glow, shimmer, tagline | 4 s | [card](references/frame-logo-outro.md) |
| frame-product-promo | Logo intro, UI canvas build, logo outro | 20 s | [card](references/frame-product-promo.md) |
| frame-product-promo-30s | Eight scenes: problem type, brand reveal, flowchart, surfaces, CTA | 30 s | [card](references/frame-product-promo-30s.md) |

If no recipe fits, say so and offer the closest two. Read [references/layer-rules.md](references/layer-rules.md) once per session before building any of them.

## Workflow

1. Read state first. Call `get_project_outline`, then `read_project_section` for the lanes you need, `get_project_director_brief`, and `list_editor_assets` for real item and file IDs. Use one explicit project ID on every project call. Before using any footage, logo or screenshot, call `get_media_context` with `includeContactSheet: true`. If media has no context, run `list_media_without_context` and `generate_media_context` in an editing run, then save what you saw with `describe_media`. Never describe media from a filename.
2. Collect the creator's real content: headline, numbers with sources, brand colors, logo file, CTA. Do not ship the sample copy from a card. Ask once if the numbers or logo are missing; never invent statistics.
3. Read the official Subclip skills `subclip-video-editor`, `subclip-motion-graphics` and `subclip-hyperframes-layer` through `read_subclip_skill` (add `subclip-remotion-layer` for Remotion). Current tool schemas win over anything written here. Call `list_runtime_layer_templates` once to see whether a built-in template already covers the need.
4. Set the canvas with `set_canvas_properties` and the length with `set_project_duration` when the layer is the whole piece. If the project is empty and untitled, call `rename_project` with a short title.
5. Open the recipe card. Author the full layer source: root composition ID, explicit dimensions and duration, named elements, one paused timeline registered under the same ID, every state driven by timeline time. Run `validate_runtime_layer_source`, then `add_runtime_layer` with explicit geometry. Overlay recipes go above footage on their own lane; do not hide the creator's video.
6. Check fonts as the layer skill requires. The cards name the intended families. Verify they load in the runtime, otherwise choose a verified substitute and refit line breaks.
7. For revisions, use `read_layer_source` then `edit_layer_source` with the returned hash, or `update_runtime_layer` for a full replacement. Keep manual edits. One edit call at a time per project; reread the section after each change.
8. Add sound natively when asked: music through `generate_music` or `search_public_audio` plus `import_public_asset_to_timeline`, short effects the same way, narration through `generate_speech` or `generate_local_speech`. Mix with `update_audio_item`. Keep audio in its own lanes, not inside the layer.
9. Verify. Call `get_timeline_contact_sheet` over the range, then `view_current_frame` at the first frame, each beat, the hold and the last frame. Seek forward and backward to the same beat and compare. Check for text overlapping faces or captions, clipped long words, and a blank tail. Fix and recheck. Record decisions with `update_project_director_brief` and `write_session_summary`.
10. Export only when asked: `get_export_configuration`, `list_render_queue`, then `export_video`. Full film means no range fields.

## Credits

The recipes are code only, so building one costs no credits. Credits are spent only if the creator also asks for generated music, narration, stock audio or generated images. Then use `list_ai_models`, quote the model, count, duration and total with `estimate_ai_generation`, check `get_ai_credit_status`, get approval, and import with the matching `import_*` tool. For images, offer the creator's signed-in Codex route first and use Subclip's image model otherwise. Never ask for provider keys.

## Verification checklist

- The first frame is a designed frame, not blank; the last frame holds the final message.
- Real copy and real numbers; the chart values match the creator's data and the source line is shown.
- Seeking to the same time twice gives the same picture; nothing depends on wall-clock CSS animation.
- No text sits under a filter or blur (see the layer rules). Fonts verified.
- Audio, if any, sits in native lanes and is listened to; say which listening checks remain.

A finished example: [open-design-reference.mp4](examples/open-design-reference.mp4). Three recipes built as HyperFrames layers with the skill's own cards: the bold poster, a data rollup with bars and counting numbers, and the glitch title with split-color bursts. Percussion loops change per scene, with a whoosh at each cut, typing under the status line and a glitch hit on each burst.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates by nexu-io, Apache-2.0.
