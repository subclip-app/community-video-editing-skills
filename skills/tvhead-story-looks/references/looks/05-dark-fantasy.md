# 05 Dark fantasy (Dota-like) (look id `dota`)

Reference: `examples/05-dark-fantasy.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Strategy, rivalry and epic-stakes stories told like a MOBA match: two sides, a lane, a tower, an ultimate.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- Dark fantasy lane with a stone ancient, Radiant green on one side and Dire red on the other, embers in the air, gold serif type.
- Horned or helmed armoured heroes with swords, staffs and shields.
- Original drawings inspired by the genre; no game assets or logos.

## Palette
dota paper #1c2026, accent gold #c8a24a, bezel #6b5a3a, screen #e9dcbc.

## Places, cast and props
- Places: lane, ancient (team radiant or dire), arena.
- Cast: Heroes with hat helm, horns or hood; body armor or robe; hold sword, staff or shield.
- Props and HUD: unitbar (name, level, HP and MP bars), abilities (QWER icons with a cooldown), gold counter, banner, minimap.

## Captions, sound, camera
- Captions: Captions on, gold serif.
- Music and sound: Epic: brass, strings, taiko.
- Camera and pace: Slow push on the hero, hard cuts on impacts, a banner at each turn.

## Style anchor (paste into every still and every clip prompt of the video)
> dark-fantasy MOBA battlefield, painterly, embers floating, gothic gold frame details, green glow side versus red glow side, magic effects, original designs, no game logos, no gore, no blood

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [two heroes facing off, magic effects, banner such as LANE PUSH or VICTORY] on [lane, ancient or arena], [HUD element: unit bar, abilities, gold]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): The HUD (unit bar, ability keys, gold counter, minimap) is a good code layer on top of a painted still.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/dota.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/dota.js)
Repository: https://github.com/Vladic20/tvhead-studio
