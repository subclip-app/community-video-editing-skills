# 02 Cartoon (warm garage) (look id `cartoon`)

Reference: `examples/02-cartoon.jpg` (a frame sheet by the original author).

## What it is for
Product stories, tutorials and tool explainers with a character and a laptop: anything that shows a screen, a chat or a terminal.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- Warm night garage: brick wall, a window on a city at night, pegboard, a shelf with an old TV, a hanging lamp with a light cone.
- Thick brown outlines, tube arms with skin-tone hands, coloured clothes, TV casing colours, blush on screen faces.
- Dust drifting in the lamp light, soft vignette, grain.

## Palette
garage #5a4a3a, ink #2a1c14, bezel #c8693a, screen #f6ecd2, accent #ffc93a.

## Places, cast and props
- Places: garage, desk (close-up table edge with a laptop), blackout (darkness with one spotlight).
- Cast: Two or three named characters introduced with a name badge (a small label with a role line).
- Props and HUD: screen (a laptop showing a chat, an app, code or a video), notes, badge, outlined kinetic type in rounded cream letters.

## Captions, sound, camera
- Captions: Karaoke captions on a dark plate, the current word in yellow. On by default.
- Music and sound: Warm lo-fi, soft whooshes instead of paper flips.
- Camera and pace: Open on blackout with the hero in a spotlight and a badge, iris into the garage, zoom into the desk for anything on a computer, back to the garage for reactions, a title card, a joke button with the lamp off.

## Style anchor (paste into every still and every clip prompt of the video)
> warm flat cartoon in a night garage, thick brown outlines, soft film grain, brick wall, a window onto a city at night, a hanging lamp with a visible light cone, a pegboard with tools, characters with TV-set heads, coloured clothes, tube arms

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [character name and role] [action] in the garage, [laptop screen shows chat, app or terminal]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): The warm look needs painted shapes, so use stills (Route A). Put the laptop screen and the karaoke captions in code layers on top so the text stays crisp.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/cartoon.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/cartoon.js)
- [references/images/cartoon_sheet.jpg](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/references/images/cartoon_sheet.jpg)
- [docs/tvhead-cartoon.jpg](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/docs/tvhead-cartoon.jpg)
Repository: https://github.com/Vladic20/tvhead-studio
