---
name: ai-style-atlas
description: Restyle an explainer video in a named visual style from a catalog (flat-vector science, watercolor, whiteboard, film noir, papercraft, isometric, tech glow and more), built in Subclip as editable layers or generated images with narration, captions and export. Use when the creator asks for a look, an art style, a visual style by name or mood, "make it look like X", or wants to compare styles for an explainer.
---

# AI Style Atlas (Subclip edition)

A style catalog plus a workflow. The creator picks a style by name or mood. You make an explainer on their topic in that style, inside Subclip, with every scene editable.

Catalog: `references/` has one file per category (14 files) and `references/index.md` lists all 86 styles. Each entry has a poster, the atlas description, the atlas style card (look, motion, how it explains) in a code block, our own Subclip recipe (engine, palette, motion, one check) and a link back to the atlas. The full atlas Copy prompt text for every style (reference animation source plus sound kit) is in `references/prompts/NN-name.txt`.

Coverage: all 86 styles of the atlas. If the creator asks for a look that is not listed, offer the closest listed style or build a custom look using the same recipe pattern.

## Before you start

- Read `get_project_outline` if a project exists; otherwise `create_project` with `canvasPreset: "landscape"`. Use the same project ID on every call.
- Media context first: if the creator attached footage or images, use `get_media_context` before any new analysis.
- Offer the creator's own Codex CLI for images first when it works; otherwise use Subclip's `generate_ai_media` after `list_ai_models`. Ask once and respect the choice.
- Before paid work: `estimate_ai_generation` with exact inputs, `get_ai_credit_status`, quote model, count and total, get approval.
- One timeline edit at a time. Generations may run together within the approved budget.

## Workflow

1. **Choose the style.** Ask for the topic, length (default 45 to 60 seconds, landscape) and a style name or a mood. Map moods to the catalog (calm and handmade: Watercolor Wash, Whiteboard Explainer; sleek and techy: Tech Glow Explainer, Product Launch Reveal; moody: 1940s Film Noir, Bioluminescent Deep Sea). Offer two or three candidates when unsure and let the creator pick.
2. **Load the style.** Find the style in `references/index.md`, open its category file and read the style card and recipe. Use the card (Look, Motion, How it explains) as the style prompt: paste it into the `generate_ai_media` prompt for images or video, or follow it as design direction for HyperFrames or Remotion layers. Open the full prompt file `references/prompts/NN-name.txt` only when you need the reference animation source (it is about 70 KB); never paste it whole into a generation prompt. The recipe names the engine:
   - HyperFrames layer (`add_runtime_layer`): default for CSS, SVG and canvas looks.
   - Remotion layer: only when the creator asks for React or a Remotion template.
   - Generated image or video (`generate_ai_media`): for painterly, photographic or illustrated looks that code cannot fake. Use the style card plus the recipe's palette and texture notes as the style prompt.
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

## All 86 styles

- [Popular Explainer Looks](references/popular-explainer-looks.md): 01 Flat-Vector Science, 06 Tech Glow Explainer, 07 Papercraft Models, 09 Manim-Style Math, 11 Editorial Essay Collage, 13 Product Launch Reveal, 20 Kawaii Anime
- [Painterly](references/painterly.md): 02 Watercolor Wash, 25 Cathedral Glass, 32 Sumi-e Ink Wash, 38 Impasto Night, 49 Gouache Travel Poster, 71 Pointillist Afternoon
- [Print](references/print.md): 14 Halftone Pop Panel, 17 Risograph Zine, 29 Linocut Relief Print, 42 Wood Type Letterpress, 65 Vintage Newsprint, 80 Silkscreen Grid
- [Paper & Craft](references/paper-and-craft.md): 03 Shadow Puppet Theatre, 18 Claymation Set, 24 Cut-Paper Diorama, 28 Origami Studio, 35 Punk Zine Collage, 44 Felt & Patchwork, 57 Cross-Stitch Sampler
- [Hand-Drawn](references/hand-drawn.md): 04 Whiteboard Explainer, 23 Chalkboard Lesson, 33 Etch A Sketch Toy, 37 Engineering Blueprint, 50 Napkin Sketch, 68 Ballpoint Notebook, 78 Sketchbook Graphite
- [Illustration](references/illustration.md): 10 Illuminated Manuscript, 41 Manga Page, 47 Tarot Card, 60 Botanical Plate, 62 Byzantine Mosaic, 64 Sticky-Note Wall, 73 Patent Drawing
- [Art & Design Movements](references/art-and-design-movements.md): 21 Ukiyo-e Woodblock, 51 Art Deco Foil, 58 Constructivist Propaganda, 67 Memphis Group, 74 Bauhaus Poster, 83 International Typographic Style
- [Retro Digital](references/retro-digital.md): 16 Oscilloscope Vector Art, 22 16-Bit Pixel Odyssey, 45 Phosphor Terminal, 59 Pocket Monochrome, 72 Vector Arcade 1980, 82 ASCII Demoscene, 85 MacPaint 1984
- [Retro UI & Neon](references/retro-ui-and-neon.md): 27 Synthwave Outrun, 39 Win95 Desktop, 53 Vaporwave, 63 Y2K Liquid Chrome, 75 Bitmap Paint Doodle, 79 Teletext Page
- [Dimensional](references/dimensional.md): 15 Isometric Pastel, 31 Voxel Diorama, 40 Low-Poly Faceted, 46 Glassmorphism UI, 56 Soft 3D Clay, 66 Hidden-Line Wireframe
- [Light & Imaging](references/light-and-imaging.md): 08 1940s Film Noir, 12 Bioluminescent Deep Sea, 19 Neon Sign at Night, 30 Holographic Foil Card, 36 Thermal Camera, 43 Light Painting, 52 Radiograph on Lightbox
- [Data & Information](references/data-and-information.md): 26 Editorial Chart, 48 Transit Map, 55 ISOTYPE Pictograms, 70 Topographic Survey, 77 Ridgeline, 84 Flow Field
- [Generative & Type](references/generative-and-type.md): 54 Ebru Paper Marbling, 61 Kinetic Type, 69 Op Art Sphere, 76 Nail & Thread String Art, 81 Guilloché Security Print, 86 Multi-scale Truchet
- [Cosmic & Psychedelic](references/cosmic-and-psychedelic.md): 05 Psychedelic Poster, 34 Cosmic Star Chart

## Credit

Style names, categories, descriptions, prompts and poster images come from the AI Style Atlas by Futurepedia and are reproduced with credit and a link to every entry, at the Subclip owner's request. The atlas states no license. The Subclip recipes and checks are our own wording. See LICENSE and the project REFERENCES.md.

Adapted for Subclip from the AI Style Atlas by Futurepedia (https://www.futurepedia.io/resources/ai-style-atlas/view)
