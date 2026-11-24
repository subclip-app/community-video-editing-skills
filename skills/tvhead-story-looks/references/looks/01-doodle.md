# 01 Doodle (look id `doodle`)

Reference: `examples/01-doodle.jpg` (a frame sheet by the original author).

## What it is for
Calm essays and psychology explainers: why we procrastinate, what burnout is, how attention works. Works for 16:9 and 9:16.

Format: 16:9 by default, 9:16 on request.

## Visual signature
- Pencil on grey paper, black and white, lines that boil slightly, film grain, vignette.
- TV-headed stick figures (a small TV set as the head, one antenna, a dark dress-like body) that show feelings on the screen face.
- Floating pencil doodles and confetti dots; empty paper is part of the style.

## Palette
paper #c6ccd0, ink #141414, bezel #585858, screen #e9ebeb. Other paper themes: sepia, blueprint, chalkboard, night, mint.

## Places, cast and props
- Places: Plain paper with a ground line, spotlight night scenes (paper turns dark grey with a cone of light), rooms, city, forest, sea, space, stage.
- Cast: TV-head figures in lineups of 2 to 6, a hero on a pile of TVs holding up an endless feed, a lone figure in a spotlight.
- Props and HUD: Speech bubbles with hearts, clocks, batteries draining, scribbles over a head, chains, simple infographics (counter, bars, pie, progress, timeline, checklist, odd-one-out grid).

## Captions, sound, camera
- Captions: Handwritten lower-case words, at most 1 to 3 on screen for the key concept. Karaoke captions off by default.
- Music and sound: Quiet dark drone (mood dark, calm, tense or hope), no beat. Paper-flip sound on cuts.
- Camera and pace: Slow push-in, glide between kept scenes, zoom-through and iris only on meaning. Hook in line 1.

## Style anchor (paste into every still and every clip prompt of the video)
> hand-drawn black and white pencil doodle on grey paper, slightly boiling lines, subtle film grain and vignette, a stick figure whose head is a small retro TV set with one antenna, simple dark body, empty paper around it

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: [scene metaphor, for example: four TV-head figures in a row, one waves] on grey paper, [face on the TV screen]. Frame: [16:9 landscape], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Doodle is the easiest look to draw in code: a HyperFrames layer with an SVG figure (rounded-rect TV head, antenna, trapezoid body), a turbulence filter for the boil, and a paper texture. Use the route when the scene is a diagram or a counter.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/scene.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/scene.js)
- [template/engine/character.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/character.js)
- [references/images/demo_sheet.jpg](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/references/images/demo_sheet.jpg)
Repository: https://github.com/Vladic20/tvhead-studio
