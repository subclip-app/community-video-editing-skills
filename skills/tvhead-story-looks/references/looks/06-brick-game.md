# 06 Toy-block game (Roblox-like) (look id `blocks`)

Reference: `examples/06-brick-game.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Game, creator-economy and kids-friendly stories: obby courses, leaderboards, coins.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- Smooth rounded toy blocks and ramps in bright colours (no studs) forming an obstacle course under a bright blue sky.
- Original block-robot characters: rounded-square head with a visor, barrel torso, stubby limbs, hats such as a helmet, crown or headphones. Never a minifigure shape.
- Original design inspired by the genre.

## Palette
blocks sky #8fd3ff, baseplate #4caf50, bezel #f5cd30, accent #00a2ff.

## Places, cast and props
- Places: baseplate, obby (obstacle course).
- Cast: Blocky characters, skin = head and arms, colour = torso and legs.
- Props and HUD: leaderboard, chatbox, pickup (+1 coin), hotbar.

## Captions, sound, camera
- Captions: Captions on, chunky.
- Music and sound: Upbeat.
- Camera and pace: Bouncy pushes, quick cuts on every pickup.

## Style anchor (paste into every still and every clip prompt of the video)
> bright generic toy-block game world, smooth rounded colourful blocks and ramps, no studs, clear blue sky, an original round-headed block robot hero with a visor and a red helmet, not a minifigure, no brand names

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [block robot hero, hat] on [baseplate or obby of rounded blocks], [pickup, leaderboard, chat or hotbar]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Leaderboard, chat box and hotbar are easy code layers; the world is a still or a Three.js block scene (r3f-physics-and-effects).
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/blocks.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/blocks.js)
Repository: https://github.com/Vladic20/tvhead-studio
