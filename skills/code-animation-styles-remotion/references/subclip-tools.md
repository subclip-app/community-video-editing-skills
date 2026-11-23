# Subclip tools for code-drawn styles

Check names with the live tool list if a call fails; schemas can change. All edits are one at a time.

## 1. Read before building
- `get_project_outline`, then `read_project_section` for the lanes you need. `create_project` if none exists. Keep one project ID everywhere.
- `get_media_context` before anything is placed over footage. Look at the contact sheet before deciding where a layer sits.
- `read_subclip_skill` for `subclip-hyperframes-layer` (default) or `subclip-remotion-layer` (explicit React or TSX request) and `subclip-motion-graphics` for routing.

## 2. Pick the engine
| Style needs | Engine |
| --- | --- |
| SVG drawing, strokes, filters, paper, print, boards (families 1 to 6, 8, 10) | HyperFrames layer: inline SVG plus a paused GSAP timeline |
| Canvas (pixel art, microscope, generative strokes, film grain) | HyperFrames layer with a canvas drawn from time |
| Three.js (57, 58, 59, 62, 80) | HyperFrames Three.js scene, read `threejs-3d-scenes` first. Use the Remotion layer only if the creator asks for it |
| The creator wants React or Remotion code | `subclip-remotion-layer`. Drive everything from `useCurrentFrame()`; load fonts through the layer's supported route; do not start a GSAP timeline on its own clock, seek it from the frame |

A Remotion version of a style keeps the same story timing in frames at 30 fps. 150 frames is 5 seconds.

## 3. Build and validate
1. Write one self-contained scene: no network calls, no external scripts, fonts only from what the layer contract allows.
2. `validate_runtime_layer_source` and fix every finding.
3. `add_runtime_layer` with kind `hyperframes` (or `remotion`). Use the project's aspect ratio. Keep segments short (5 to 10 s); chain several layers for a longer story.
4. Never use CSS filters on text layers. SVG filters on shapes are fine (feTurbulence, feDisplacementMap, goo). Unique ids for every filter and clipPath.
5. If an edit is needed later, update the layer source rather than adding a second layer over it.

## 4. Sound
- `search_public_audio` for the main action (pour, tap, whoosh, paper, click) and one bed if the creator wants music. `import_public_asset_to_timeline` returns the attribution; keep it.
- Voice: `generate_local_speech` free draft, `import_generated_audio_to_timeline`. Cloud voice: `get_voice_samples`, `set_approved_voice`, then `generate_speech` after the creator approves the cost.
- Sound is 48 kHz on export; keep music under speech.

## 5. Check
- `seek_timeline` then `view_current_frame` at the start, middle and end of every beat.
- `get_timeline_contact_sheet` for the whole piece.
- Look for: clipped text, shapes outside the safe zone, flicker, motion that differs between two passes, thin lines vanishing at export size.

## 6. Export
`get_export_configuration`, `list_render_queue`, `export_video` only when asked. Renders from code layers use no AI credits.

## 7. Credits and cost
- Code styles: 0 AI credits. Sound search: free. Local speech: free.
- Cloud speech or generated media: quote with `get_ai_credit_status`, `list_ai_models`, `estimate_ai_generation`, show the total, wait for approval.
- If a look needs generated imagery (a painted background, a real texture), offer the creator's own Codex CLI image generation first, then `generate_ai_media` after a quote. Import files made outside Subclip with `import_external_media`.
