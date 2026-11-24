# 13 Stickman 5: historical cartoon (look id `history`)

Reference: `examples/13-stickman-history.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
History explainers and short stories set in Edo Japan, ancient Egypt or Rome.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- White heads with black oval eyes and thick outlines, cel-shaded era costumes, painted era backdrops.
- Costumes: kimono and topknot, shendyt and nemes, legionary helmet, toga.

## Palette
history paper #efe1c0, ink #141414, red #b8322a, gold #d4a33a.

## Places, cast and props
- Places: edo, egypt, rome.
- Cast: kind stick with body kimono, shendyt, legionary, toga or robe; hat topknot, nemes or romanhelm; hold katana, spear or shield.
- Props and HUD: cat, lantern.

## Captions, sound, camera
- Captions: Captions on.
- Music and sound: Koto (epic for Rome).
- Camera and pace: Slow pans over painted backdrops; Keep facts factual, dramatise only with fictional people.

## Style anchor (paste into every still and every clip prompt of the video)
> historical cartoon stickman, white round head, black oval eyes, thick outlines, cel-shaded costumes, painted era backdrops

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [stickman in era costume] in [Edo, Egypt or Rome], [action]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Stills first; era backdrops are painted. Facts, dates and names on screen must be checked.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/stickman.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/stickman.js)
Repository: https://github.com/Vladic20/tvhead-studio
