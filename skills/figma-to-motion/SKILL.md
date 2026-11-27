---
name: figma-to-motion
description: Turn a Figma design into motion inside Subclip. Exported layers, logos and brand tokens become editable HyperFrames layers, and storyboard frames become states of one moving element instead of slides. Product UI frames become a live mock where a cursor click causes each change. Use when the creator wants to use a Figma design, frame, storyboard, logo or brand in a video. A bare figma.com link without that ask is not a trigger.
---

# Figma to motion

> Modified for Subclip (2026-11-27) from the HyperFrames `figma` skill by HeyGen, Apache-2.0 (upstream commit b4f47ce). Kept: the storyboard method (frames are keyframes, not slides), element matching, motion notes, UI frames as interactions, the shader fallback and "no Figma link in the composition". Changed: the HyperFrames CLI, the Figma REST token and the verify script are replaced by files the creator exports and Subclip tools. The original is in `upstream/figma/`.

Every Figma input is frozen into a project file before anything is built, so renders never call Figma. Subclip never asks for a Figma token, password or API key.

## 1. Get the design in

Ask once how the creator wants to share the design, then use the first route that works:

1. **Exported files (default).** In Figma: select the frames or layers, then Export as SVG (vectors, logos, icons) or PNG at 2x (photos, raster art, complex effects). Attach them or give their paths. Export one file per element you want to move, not one still per frame.
2. **The creator's own Figma connector.** If their agent client already has a signed-in Figma connector, they can use it to export the same files or read frame geometry, colours and text. Save its raw answer in the project brief, not in the layer.
3. **A frame described or screenshotted.** Rebuild it by hand from the screenshot, and say that the geometry is estimated.

Bring files in with `import_attachment_to_project_media` (attachments) or `import_external_media` with `addToTimeline: false` (a path or a public HTTPS link). Read `list_editor_assets` for the exact URLs and bind those URLs in layers. Never leave a figma.com URL in a layer.

Before you design, read what you imported: `get_media_context` with `includeContactSheet: true`. Never claim to have seen a frame you only know by name.

## 2. Tokens and components

- **Colours and type.** Collect the design's colours, font families, sizes and radii from the creator's styles or from the exported frames. Put them as CSS variables at the top of the layer (`--brand-primary: #153592;`), one variable per token, and use the variables everywhere. One edit then re-brands every element. Name a token you could not confirm as an estimate in the brief; never match a library by hex alone.
- **Components.** Rebuild a frame you must animate as HTML at its exact geometry (Figma's x, y, width, height and corner radius in pixels) inside a HyperFrames layer. Keep static artwork as the exported SVG or PNG inside that HTML. Check the hero components against the exported PNG side by side in a frame (`view_current_frame`): text drift is the usual cause. Report drift you cannot fix instead of guessing.
- **Fonts.** A font family name is not proof that the face loads. Check a rendered frame; fall back to a close system font and say so.

## 3. Storyboards: frames are keyframes, not slides

Two frames that hold the same element describe that element's state through time. Animate the element between the states. Playing frames back to back as stills is the failure mode.

1. Scenes are every frame-sized node in the section, named frames and loose full-frame rectangles alike: filter by size, not by type or name. Order them by x position.
2. Match children across neighbouring frames by name first, then by similar size and position. Tween geometry (x, y, scale, size, colour) between states. Crossfade two exports in place only when the pixels really changed. Children with no match enter or exit on their scene's beat.
3. Text nodes below the strip are motion notes for the scene above them, not on-screen copy. A note about motion inside a scene ("lines reveal one after another") means: rebuild that frame and animate it as the note says.
4. Frames that show one product UI in successive states: rebuild the UI as live DOM. Code what changes state, keep what does not change static, and treat each frame change as an interaction (the cursor moves, clicks, the screen responds), not a tween that just starts. For the cursor, read `screen-recording-polish`: a Figma-style coloured cursor with a name tag is a good brand-motif cursor here.
5. Stills are the fallback, only for frames with no shared elements.

A good opening shows the storyboard as the creator drew it (the frames side by side on a dot grid), then pushes into frame one, which becomes the live element. A good ending pulls back so the viewer sees the live element now matches the last frame.

## 4. Motion from Figma prototypes

When the creator's connector gives prototype or Smart Animate data (durations, eases, from and to values), translate it into one paused GSAP timeline in the layer: keep the durations and bezier eases, drop loop-wrap tail keyframes, and map named eases you cannot match to the nearest GSAP ease and say which. Never copy keyframes by eye when numbers exist.

Verify against Figma's own export: ask the creator for a screen recording or MP4 export of the prototype, import it, and compare the same moments with `extract_video_frames` (their export) and `get_timeline_contact_sheet` (your layer). Compare motion between samples, not pixel noise. If a track will not translate, import the creator's export and place it as native video instead.

## 5. Shaders and effects

Figma's export flattens shader fills to their base colour. Ask the creator for a native PNG or MP4 export of that frame and place it as media or as an image inside the layer.

## Build in Subclip

1. `get_project_outline`, then `read_project_section` for the lanes you need. Pass the same `projectId` on every call and make one edit at a time.
2. Write the director brief (`update_project_director_brief`): source frames, token table, matched elements, which frame changes are interactions.
3. Build each scene as a HyperFrames layer: one root sized 1920 by 1080 (or the project canvas), `overflow: clip`, every element inside the frame, one paused GSAP timeline registered under the composition id, no timers or randomness. Build the DOM in the HTML itself (layers block `innerHTML`). Validate with `validate_runtime_layer_source`, then `add_runtime_layer`. Revise with `read_layer_source` and `edit_layer_source`.
4. Sound: music and clicks from `search_public_audio` (prefer CC0), imported with `import_public_asset_to_timeline`, a click on each tap. Narration, if wanted, with `generate_local_speech` (free) or `generate_speech` after `get_voice_samples`. Keep music peaks under -1 dB.
5. Check with `get_timeline_contact_sheet` across the whole film: the strip is readable, the push-in lands on the live element, each click changes something on the same frame, the final state matches the last Figma frame.
6. Export only on request (`export_video`, then `get_export_status`). Record decisions with `write_session_summary`.

Code layers and local speech cost 0 credits. If a missing surface truly needs a generated image, offer the creator's own Codex CLI first, then quote the Subclip model and price and wait for a yes.

## Verification checklist

- [ ] No Figma URL, token or account detail in any layer, variable or note
- [ ] Every element that appears in two frames moves between states; no frame plays as a still slide
- [ ] Motion notes became motion, not on-screen text
- [ ] UI state changes are caused by a click or a typed input
- [ ] Hero components match the exported PNGs; drift is reported
- [ ] Tokens are CSS variables; estimated ones are named in the brief

## Reference

The [reference with sound](examples/figma-to-motion-reference.mp4) and its [one-frame-per-second sheet](examples/figma-to-motion-contact.jpg) were made by following this skill for a storyboard designed for the test (no Figma account needed): three frames of a habit card on a dot grid, a cyan "Ana" multiplayer cursor reads them, the camera pushes into frame one, two clicks move the live card through the next two states, and the pull-back shows it matching frame three. The [silent preview](preview.mp4) is the hero. Edited by Claude Opus 5.5 (claude-opus-5-5) driving Subclip over MCP, no AI generation model, 0 credits.

## Files

| Path | What it is |
| --- | --- |
| `upstream/figma/SKILL.original.md` | the original HyperFrames skill, unchanged |
| `upstream/figma/scripts/` | the original verify script and helpers, unchanged, kept for reference only; Subclip does not run them |
| `references/storyboard-layer.md` | a worked layer skeleton for a three-frame storyboard |
| `LICENSE` | Apache-2.0, unchanged from the original |

Adapted for Subclip from https://github.com/heygen-com/hyperframes by HeyGen, Apache-2.0
