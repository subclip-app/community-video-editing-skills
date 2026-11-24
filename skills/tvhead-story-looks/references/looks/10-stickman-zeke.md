# 10 Stickman 2: Zeke in a red beanie (look id `beanie`)

Reference: `examples/10-stickman-zeke.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Tech and productivity explainers (studio) or cinematic motivation (dusk, summit).

Format: 16:9 by default, 9:16 on request.

## Visual signature
- The same stick figure in a red beanie with no pom-pom and a yellow tee.
- 2A: a white high-key studio, a faint grid floor, cyan glass UI panels.
- 2B: cinematic places: dusk highway, summit above clouds, a lamp-lit room.

## Palette
zeke paper #f7f9fb, ink #16181d, cyan #19b8e6, blue #2f6fd6.

## Places, cast and props
- Places: studio, dusk, summit, lamproom.
- Cast: Zeke only, default beanie and tee.
- Props and HUD: glasspanel, ripple, lightbridge.

## Captions, sound, camera
- Captions: Captions on.
- Music and sound: Ambient.
- Camera and pace: Slow push in the studio, slow pull-back on the summit.

## Style anchor (paste into every still and every clip prompt of the video)
> stick figure with a white round head, a red beanie with no pom-pom, a yellow t-shirt, thin black limbs, in a white high-key studio with a faint grid floor and cyan glass UI panels (or cinematic dusk, summit or lamp-lit room)

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: Zeke [action] in [studio, dusk, summit or lamproom], glass panel shows [content]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Studio scenes work in code (glass panels, grid floor). Cinematic scenes need stills.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/stickman.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/stickman.js)
Repository: https://github.com/Vladic20/tvhead-studio
