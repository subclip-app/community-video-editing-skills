# 12 Stickman 4: cozy storytelling (look id `cozy`)

Reference: `examples/12-stickman-cozy.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Everyday stories and warm explainers: a new location every 10 second block.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- White heads and slim white torsos with dark limbs, oval eyes, round hands.
- Full-colour 2D places: platform, terrace, office, lamp-lit room, dusk.
- A new location for each block keeps it moving.

## Palette
cozy paper #f3e6cf, ink #1f1a17, accent #f2a03d, bezel #3f6d9e.

## Places, cast and props
- Places: platform, terrace, office2, lamproom, dusk.
- Cast: kind stick with a slim torso.
- Props and HUD: phone or coffee in hand, any prop.

## Captions, sound, camera
- Captions: Captions on.
- Music and sound: Lo-fi.
- Camera and pace: Calm pushes; location cut at each block boundary.

## Style anchor (paste into every still and every clip prompt of the video)
> cozy storytelling stickman in full-colour flat 2D places, white round head, slim white torso, dark limbs, oval eyes, warm evening light

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [stickman] [action] at [platform, terrace, office, lamp-lit room or dusk]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Stills first; add captions and small props in code.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/stickman.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/stickman.js)
Repository: https://github.com/Vladic20/tvhead-studio
