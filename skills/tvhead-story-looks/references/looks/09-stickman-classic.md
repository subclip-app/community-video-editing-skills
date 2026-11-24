# 09 Stickman 1: classic minimalist (look id `stick`)

Reference: `examples/09-stickman-classic.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Clean idea explainers: one concept, lots of white space, up to three saturated accents on props only.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- Black line figures on pure white (or white lines on pitch black), hollow round head, simple line expressions.
- No texture, no shadow. Red, blue and yellow only on props.
- Props: question mark, counter, arrow, check, bulb, chart.

## Palette
stick-light: paper #ffffff, ink #111111, accents #e8202a, #2f6fd6, #f2b705. stick-dark: paper #000000, ink #ffffff, accents #ff3b3b, #3da9ff, #ffd23f.

## Places, cast and props
- Places: None needed (props and a ground line).
- Cast: kind stick: headStyle hollow, faceMode lines, torso line.
- Props and HUD: question, counter, arrow, check, bulb, chart.

## Captions, sound, camera
- Captions: Captions on, white on black or black on white.
- Music and sound: Ambient.
- Camera and pace: Still frames with small pushes; one change on every key word.

## Style anchor (paste into every still and every clip prompt of the video)
> classic minimalist stickman explainer, flat pure white canvas, thick black line figures with hollow round heads and simple line expressions, no texture, no shadow, red blue and yellow accents only on props

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [stickman action] on white, prop [question mark, bulb, chart] in [red, blue or yellow]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): The easiest look to build as a HyperFrames layer: SVG lines drawn with stroke-dashoffset, props that pop on key words. No AI credits needed.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/stickman.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/stickman.js)
Repository: https://github.com/Vladic20/tvhead-studio
