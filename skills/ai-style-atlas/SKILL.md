---
name: ai-style-atlas
description: Restyle an explainer video in a named visual style from a catalog (flat-vector science, watercolor, whiteboard, film noir, papercraft, isometric, tech glow and more), built in Subclip as editable layers or generated images with narration, captions and export. Use when the creator asks for a look, an art style, a visual style by name or mood, "make it look like X", or wants to compare styles for an explainer.
---

# AI Style Atlas (Subclip edition)

A style catalog plus a workflow. The creator picks a style by name or mood. You make an explainer on their topic in that style, inside Subclip, with every scene editable.

Catalog: `references/` has one file per category. Each entry has our own description of the look and a recipe (engine, palette, motion rules, one check). Each links to the source atlas.

Coverage today: 15 of the atlas's 86 styles (see `references/index.md`). If the creator asks for a style that is not listed, say so and offer the closest listed style or build a custom look using the same recipe pattern.

## Before you start

- Read `get_project_outline` if a project exists; otherwise `create_project` with `canvasPreset: "landscape"`. Use the same project ID on every call.
- Media context first: if the creator attached footage or images, use `get_media_context` before any new analysis.
- Offer the creator's own Codex CLI for images first when it works; otherwise use Subclip's `generate_ai_media` after `list_ai_models`. Ask once and respect the choice.
- Before paid work: `estimate_ai_generation` with exact inputs, `get_ai_credit_status`, quote model, count and total, get approval.
- One timeline edit at a time. Generations may run together within the approved budget.

## Workflow

1. **Choose the style.** Ask for the topic, length (default 45 to 60 seconds, landscape) and a style name or a mood. Map moods to the catalog (calm and handmade: Watercolor Wash, Whiteboard Explainer; sleek and techy: Tech Glow Explainer, Product Launch Reveal; moody: 1940s Film Noir, Bioluminescent Deep Sea). Offer two or three candidates when unsure and let the creator pick.
2. **Read the recipe** for the chosen style in `references/`. It names the engine:
   - HyperFrames layer (`add_runtime_layer`): default for CSS, SVG and canvas looks.
   - Remotion layer: only when the creator asks for React or a Remotion template.
   - Generated image or video (`generate_ai_media`): for painterly, photographic or illustrated looks that code cannot fake. Write a style prompt of your own from the recipe's palette and texture notes.
   - Native edit: titles, captions and simple moves (`add_text_overlay`, `add_media_keyframe`).
3. **Storyboard in the style.** 6 to 8 beats, one idea each. For every beat write narration, the visual in the style's vocabulary, and the motion rule. Save it with `update_project_director_brief` with the style name, palette hex values and the source link.
4. **Voice first.** `get_voice_samples` then `set_approved_voice` then `generate_speech`, or `generate_local_speech` for a free test. Import and use real audio durations as the beat clock (`set_project_duration` to match).
5. **Build scenes.** One scene per beat, as a layer or an imported generated visual (`import_ai_operation_to_timeline`, `import_generated_media_to_timeline`). Keep the same palette, line weight and texture across all scenes. Revise layers in place with `read_layer_source` and `edit_layer_source`.
6. **Captions.** `transcribe_project` per narration item, then `update_caption_words` and `update_caption_style` to match the style's type (see each recipe).
7. **Check.** `get_timeline_contact_sheet` across the range to catch style drift, then `view_current_frame` on at least one frame per scene. Run the recipe's own check. Fix, then re-check.
8. **Export** only when asked: `get_export_configuration`, `list_render_queue`, `export_video`.

Record results with `write_session_summary`. Do not claim a visual check you did not run.

## Style rules that apply to every recipe

- Keep one style per video. Do not mix families unless the creator asks.
- Type, color and texture carry the style; animation stays gentle and eased.
- Keep text away from faces and key subjects.
- Never copy an artist's or brand's artwork. Describe a look by its qualities, not by tracing a work.
- Keep facts true. Style never excuses an invented number.

## Credit

Style names and categories come from the AI Style Atlas by Futurepedia. All descriptions and recipes here are our own wording. See LICENSE and the project REFERENCES.md.

Adapted for Subclip from the AI Style Atlas by Futurepedia (https://www.futurepedia.io/resources/ai-style-atlas/view)
