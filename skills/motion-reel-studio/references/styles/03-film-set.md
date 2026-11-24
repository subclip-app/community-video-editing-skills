# 03 Cozy 3D film set with a clapperboard (style `set`)

Reference: `examples/03-film-set.mp4` (rough reference: two generated stills animated in code; images gpt-image-2 through the creator's Codex CLI) and the original author's frame `examples/03-film-set-upstream.jpg` (By the original author).

## What it is for
A list or a tour told as a film shoot: the mascot is the director, a clapperboard snaps "SCENE NN/MM" at the third word of each line, tool stations with live screens stand in an arc, a small white robot helper walks to the active station, and the end credits roll on a screen.

## Scene recipe
1. Wide shot of the set at dusk: round wooden stage floor, a dusk backdrop with hills, a marquee of 30 or more bulbs, cables. [INTRO LINE]
2. For each item [N]: the camera turns to station N (the mascot is off frame behind the camera), the clapperboard flies in from below, snaps on the third word of "Scene [N]. [NAME]. [ROLE]", flies out; the station screen shows live UI for that item.
3. The robot walks to the active station and waves.
4. Pull back to the credits screen, "CUT!" and confetti. [CTA] on a plate.

## Prompt to give yourself (fill the brackets)
> Vertical 3D reel, [LENGTH] seconds. A miniature film set: round wooden floor, purple dusk backdrop with hills, a marquee of string lights, a director's chair with [NAME] on the back, [N] stations on a circle of radius at least 6.4 m with 2.2 m screens, a white robot helper, a clapperboard that reads "SCENE NN/MM [STAR COUNT OR NUMBER]" with DIRECTOR, CAMERA and TAKE fields. The clapper closes on the third word of each scene line. Warm light, tilt-shift depth of field.

## Build notes
- A camera "from behind the mascot" makes it huge and hides the stations: put the camera between the chair and the station and keep the mascot in wide shots only.
- Props and bushes must not stand on the line from camera to station.
- Any number on a clapperboard (stars, users) is real data with a date, or labelled Example.
- Check brand and tool names against the transcript.

## Subclip route
Same as style 02: a Three.js layer (`threejs-3d-scenes`) or one still per station animated with keyframes. Clap sound: `search_public_audio`.

## Credit cost note
No credits for layers. Stills as in style 02.

## Upstream source
- [references/cozy3d.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/cozy3d.md) (section on the film set)
- [template/src/cozy3d/] FilmSet and SetVideo in the upstream template (https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src)
- [template/src/crew.ts](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src/crew.ts)
- [template/tools/script.set.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/script.set.mjs)
Repository: https://github.com/Vladic20/tvhead-studio
