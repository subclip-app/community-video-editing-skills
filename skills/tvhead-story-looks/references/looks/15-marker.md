# 15 Marker sketch (look id `marker`)

Reference: `examples/15-marker.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Vertical explainers of the type here is the problem, here is the fix, here is the arithmetic: a hand draws it live.

Format: 9:16 (vertical shorts).

## Visual signature
- A hand with a felt-tip marker draws on a gridded white sheet: black outlines first, problems in red (cracks, a crossed-out part), fixes in green or blue, handwritten numbers.
- A page flip to a summary sheet: problem struck out, fix ticked, boxed result, a call to action.
- Marker squeaks on every stroke.

## Palette
marker paper #fbfaf6, ink #1f2024, red #e5322d; colours k black, r red, g green, b blue, o orange, y yellow.

## Places, cast and props
- Places: sheet.
- Cast: None: the hand is the actor.
- Props and HUD: A drawing DSL: line, rect, circle, curve, arrow, cross, check, spring, hatch, highlighter, handwritten text, underline, dimension line, dots; ledger and bars for money pages.

## Captions, sound, camera
- Captions: Handwritten captions on a paper plate coloured by meaning.
- Music and sound: Upbeat with marker squeaks.
- Camera and pace: One keep-chain with glide cameras, then a page turn to the summary.

## Style anchor (paste into every still and every clip prompt of the video)
> top-down gridded white sheet of paper, black felt-tip marker outlines, red problem marks, green and blue fixes, handwritten numbers, a hand holding a marker

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: Sheet: [drawing of the object], red marks [problems], green fix [fix], handwritten [numbers]. Frame: [9:16 portrait], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Stroke-by-stroke drawing is a natural code layer: each shape is an SVG path animated with stroke-dashoffset, the hand follows the pen tip, and a squeak sound (search_public_audio) is placed on each stroke.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/marker.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/marker.js)
Repository: https://github.com/Vladic20/tvhead-studio
