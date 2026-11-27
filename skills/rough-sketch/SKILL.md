---
name: rough-sketch
description: Draw hand-drawn, sketchy whiteboard explainers in Subclip with Rough.js inside HyperFrames layers. Boxes, arrows, flowcharts, bar charts, maps, annotated screenshots and circled callouts drawn on stroke by stroke in sync with the voice, fully repeatable when seeking. Use for "whiteboard explainer", "hand-drawn diagram", "sketchy chart", "circle this", "draw an arrow to", "Excalidraw style", "napkin sketch" or "Rough.js".
---

# Rough sketch

Build explainer scenes that look drawn by hand on a whiteboard: sketchy boxes, arrows, flowcharts, charts, maps, product screenshots with marker notes, and loose circles around the thing that matters. Shapes come from [Rough.js](https://github.com/rough-stuff/rough) and are drawn on stroke by stroke in a HyperFrames layer. Everything is code, so the core workflow uses zero Subclip AI credits.

How this differs from nearby skills:

- `claude-drawing-skill` paints illustrations (ink wash, paper collage, continuous line art). Use it for pictures. Use rough-sketch for diagrams and callouts that explain.
- `anatomy` builds precise isometric objects. Use rough-sketch when the look should be quick, flat and hand-drawn.
- `vox-director` and `vox-explainer` direct whole documentary films. A rough-sketch scene can be one of their beats.

## How the library gets into a layer

Subclip layers only load pinned GSAP, Lottie and HyperFrames scripts from a CDN. A `<script src>` that points at Rough.js on jsDelivr or unpkg is rejected by `validate_runtime_layer_source`, and Remotion layers cannot import it either. So:

1. Read [assets/rough.min.js](assets/rough.min.js) with `read_subclip_skill` (`skillName: "rough-sketch"`, `resourcePath: "assets/rough.min.js"`; follow `nextOffset` until the file is complete). It is the unchanged Rough.js 4.6.6 browser build with its MIT notice on the first line.
2. Paste it, notice included, into an inline `<script>` in the layer. Inline source may be up to 32 MiB; this file is about 28 KB.
3. Read [references/sketch-kit.js](references/sketch-kit.js) the same way and paste it into a second inline `<script>`. It turns each Rough.js shape into separate SVG strokes and reveals them along their length on the layer's GSAP timeline.
4. Start from [references/layer-template.md](references/layer-template.md) for the document shape.

Layer rules learned in testing:

- `<link>` tags are rejected. Load a hand-written font with `@font-face` pointing at its `fonts.gstatic.com` woff2 file, as the template does.
- The validator rejects scripts that contain `parent.`, `top.`, `opener.`, `require`, `process` or `electron`, even as local names. Rough.js itself passes; keep your own variable names clear of these.
- Rough.js 4.6.6 still uses `Math.random()` for the `dots` fill even with a seed. The kit swaps in a seeded generator while each shape is built, so dots match in preview and export. Keep that wrapper if you change the kit.
- The kit keeps fills behind outlines in the SVG so light hachure lines never cut a dark outline, while still drawing the outline first.
- After adding a layer, compare the returned `sourceHash` with a SHA-256 of your local file when you pasted a long source. They must match.

Use HyperFrames for this skill. If the creator insists on Remotion, explain that Rough.js cannot be imported there and offer native Elements shapes or a HyperFrames layer instead.

## Workflow

1. Load Subclip's `subclip-video-editor` and `subclip-hyperframes-layer` skills and follow their current tool schemas. Use one explicit project ID on every call. Start with `get_project_outline`, then `read_project_section` for the lanes you will touch, `get_project_director_brief`, and `list_editor_assets` for exact IDs and media URLs.
2. When the drawing annotates existing media (a screenshot, a screen recording, a product shot), call `get_media_context` with `includeContactSheet: true` first. Inspect up to six exact moments with `fileId` and `inspectAtSeconds` before asking for more. For files without context, use `list_media_without_context`, then `generate_media_context` in an editing run and save what you saw with `describe_media`. Never describe media you have not inspected.
3. Voice first for a narrated explainer. Write the script in short sentences, one idea each. For free narration and tests, use `generate_local_speech` and `import_generated_audio_to_timeline`. For a cloud voice, call `get_voice_samples` unless a voice is approved, then `set_approved_voice` and `generate_speech`, and quote the cost first. Transcribe the narration with `transcribe_project` (local mode) and read the word times from the captions lane. Those word times are the clock for every stroke.
4. Plan each scene on a 1920 by 1080 board. Keep the bottom 18 percent clear for captions. One idea per scene, three to six shapes, one accent color for the answer. Write down, for each shape, the word it lands on.
5. Build one HyperFrames layer per scene (a scene is 5 to 12 seconds). Give every shape its own fixed `seed`. Draw the outline before the fill. Time each draw so it finishes on its word, with 0.3 to 1 second per box and 0.5 to 1 second per arrow. Write labels with a left to right clip reveal just after their shape.
6. Call `validate_runtime_layer_source` with the full source. Fix every error. Then `add_runtime_layer` with `startTime`, `duration`, `intrinsicWidth: 1920` and `intrinsicHeight: 1080`. Full-frame geometry (`x: 50, y: 50, width: 100, height: 100`) is right only when the scene paints its own board background. For marks over footage, keep the layer background transparent and use the smallest rectangle that holds the marks.
7. Look at the result with `view_frame` or `view_current_frame` just after each shape starts, in the middle of a long arrow, at the settled hold and near the exit. Seek backward and forward and confirm the same time gives the same strokes. Fix overlaps, clipped labels and anything drawn before its word.
8. Add captions with Subclip's defaults (`apply_dynamic_caption_preset` with the creator's default preset, or the captions that `transcribe_project` creates). On a white board, make sure the caption color still contrasts.
9. Add music or sound only from the creator's library, `search_public_audio` (check the license) or `generate_music` with a quoted cost. Keep voice, music and pencil or marker sounds on native audio lanes. Keep music peaks under -1 dB.
10. Use `set_project_duration` to end on the last hold. Record seeds, timing and checks with `update_project_director_brief` and `write_session_summary`. Export only when asked: `get_export_configuration`, `list_render_queue`, then `export_video`.

## Rules for drawing on

- Fixed seed on every shape. Rough.js is random by design. With a fixed `seed` the same shape is drawn the same way on every frame and every render. Without one, the lines change on every seek and the board boils.
- Line boil only on request. If the creator wants the hand-animated wobble, prebuild two or three seeds per shape and switch between them on a fixed step (for example every 0.25 s on a 2 s or 4 s loop) from the timeline. See [references/presets.md](references/presets.md).
- Reveal by path length. Split each Rough.js path at every `M` so each pass is its own stroke, measure it once with `getTotalLength()` while building, set `stroke-dasharray` to the length and tween `stroke-dashoffset` from the length to 0. The kit does this. Never measure inside a tween.
- One paused GSAP timeline, registered under the composition id. No `requestAnimationFrame`, timers, `Date.now()` or `Math.random()` in your own code.
- Text is HTML, not SVG paths. Use a hand-written font from the presets file and reveal it with `clip-path`. Never put a CSS `filter` on text or a parent of text.
- Keep the board calm: at most two pen colors plus one accent, generous empty space, labels outside shapes when they would cover hatching.

## What to draw

- **Flow or system diagram**: rectangles for parts, a cloud for the network, a cylinder (ellipse plus path) for storage, arrows with a slight `bend` and a label on the arrow.
- **Flowchart**: diamond (`polygon`) for decisions, rounded boxes for steps, `yes` and `no` written on the arrows.
- **Bar or line chart**: hand axes with `line`, bars as `rectangle` with hachure, one cross-hatched bar for the point, values written above the bars. Use real numbers from the script.
- **Map**: a simple outline with `path` or `curve`, dots with `circle` and a dashed or bent route arrow. For real geography, use Subclip's map skills and add rough callouts on top.
- **Annotated screenshot**: import the image as a native media item, place a transparent rough-sketch layer above it, then circle, underline and arrow the parts that matter. Use `get_timeline_contact_sheet` first so marks land on the real pixels.
- **Circled callout**: the kit's `circle` draws a loose loop that overshoots its start, like a marker. Follow it with a short arrow and a two or three word note.

See [references/presets.md](references/presets.md) for pencil, marker, chalk and blueprint settings, every fill style, the hand-written fonts and the line boil recipe.

## Cost

Drawing, animation, captions and local narration use zero Subclip credits. Cloud voices, generated music and any generated image or video cost credits: quote the model, count, duration and estimate from the live catalog and get approval first. For images, offer the creator's own signed-in Codex CLI first.

## Verify

- Every shape has a seed, and two views of the same time match.
- Each stroke lands on its word. Nothing appears before it is mentioned.
- Labels are readable at phone size (44 px and up on a 1080 p board) and clear of the caption band.
- The export shows the hand-written font, not a fallback face.
- Audio: narration clear, music under the voice and peaking under -1 dB.

## Reference

[rough-sketch-reference.mp4](examples/rough-sketch-reference.mp4): a 22 second whiteboard explainer of how a web request travels from browser to server and back, then a bar chart of where the wait goes with the database bar circled. Two HyperFrames layers built with this kit (the second cloned from the first and patched with `edit_layer_source`), local narration with word times from `transcribe_project`, Subclip's default captions recolored navy for the white board, and the CC0 loop Zimbalom by BuytheField. The [contact sheet](examples/one-second-contact-sheet.jpg) shows one frame per second. Zero AI credits.

Adapted for Subclip from [rough-stuff/rough](https://github.com/rough-stuff/rough) (Rough.js) by Preet Shihn, MIT.
