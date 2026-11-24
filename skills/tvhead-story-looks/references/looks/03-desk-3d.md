# 03 3D desk (look id `desk3d`)

Reference: `examples/03-desk-3d.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Product and app showcases: a post, a timeline, a beat maker or a prompt box shown as UI lying on a desk.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- A dark UI slab lies flat on a wooden desk and is filmed by a moving 3D camera with depth of field.
- The mascot is a clay cube with a tiny candle on its head that stands upright on the slab and hops over a post or a timeline.
- The camera glide is the transition, so cuts are hard cuts.

## Palette
desk #14161a, ink #e8ecf2, accent #ffcc33, screen #f0e8dc.

## Places, cast and props
- Places: The slab is the world. Camera presets: tilt, left, right, close, wide, top, low.
- Cast: One clay cube mascot (kind cube, hat candle).
- Props and HUD: Full-slab screens: tweet, timeline, daw (step sequencer), prompt box, chat, app, code; big text titles.

## Captions, sound, camera
- Captions: Captions on, bold and readable on the dark slab.
- Music and sound: Upbeat.
- Camera and pace: Alternate wide, top and close presets; let the camera glide between them; always keep one hero element in focus.

## Style anchor (paste into every still and every clip prompt of the video)
> dark UI slab lying on a warm wooden desk, tilted 3D camera, shallow depth of field, soft shadows, a small clay-cube mascot with a tiny candle on its head standing on the slab

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [UI content: tweet, timeline, beat maker, prompt box] on the slab, clay cube mascot [action], camera [preset]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Real 3D camera moves come from a Three.js layer (see the threejs-3d-scenes skill): a textured plane for the slab, a rounded cube for the mascot, depth of field. A still plus a slow keyframed move is the cheap version.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/desk3d.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/desk3d.js)
Repository: https://github.com/Vladic20/tvhead-studio
