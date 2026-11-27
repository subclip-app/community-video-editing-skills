# Punch-up: making a film that already exists much better

Someone has a finished film and says it should be far better: the music, the rhythm, the motion. The film is usually correct (the layers validate, the facts and the brand are right) and flat.

**A correct, flat film is not fixed by polishing it.** Longer eases, a nicer shadow and one more sound effect leave it where it was. Three things make the jump, in this order:

1. **Every stretch gets its own shot.** The flat film is one layout shown many times.
2. **The frame is on the change, large, at the moment it changes.**
3. **The score is rebuilt on the picture's grid**, with something added at every section.

Keep the idea, the material, the palette and the words. Rebuild the shots and the score.

## 1. Diagnose with numbers before touching anything

Adjectives ("more premium", "ten times better") do not say what to change. These do:

| Look at | How | What flat looks like |
| --- | --- | --- |
| motion per second | `get_timeline_contact_sheet` from 0 to the end, `every: 1` | neighbouring tiles that barely differ for most of the film (a healthy launch film changes nearly every tile, with one planned still stretch) |
| the whole film at once | the same sheet, read row by row | rows of the same picture; scenes that are one layout with other content |
| cuts | `get_project_outline` and the media lane | few cuts, none on the beat, the same shot length everywhere |
| the sound | `get_audio_timeline_sheet` and the audio lane | one level from start to end, no stop, no section change, hits piled into one second |

Write the diagnosis as three or four lines with the numbers in them (tiles that change, cuts per minute, shot lengths), and tell the creator before rebuilding. It is the "before" the result is measured against, and it shows you watched their film.

## 2. Decide what stays

- **Stays:** the idea and its spine (the one object that travels through the film), every approved word on screen, the claims and numbers, the palette and type, the material, the length within a few seconds, the delivery settings. Commissioned films have had their copy approved: a second pass that rewrites it creates a new approval round nobody asked for.
- **Goes:** layouts, eases, the camera, the cut points inside sections, the arrangement of the music.
- **Kept:** clone the project with `clone_project` before rewriting and work on the copy, or keep the old export untouched. The creator will compare.
- No new direction gate when the style is unchanged. If the fix you believe in changes the style (flat to depth, light to dark, a new palette), that is a direction: show it and wait.

## 3. The slide test, and five ways out

For each stretch ask: **could this frame be a slide?** A thing on a ground with a caption under it is a slide, however well it eases in. If yes, give the stretch one of these, and never the same one twice running:

- **Full bleed.** The material is the frame. An edit wipes across the whole screen.
- **Macro.** Cut to the detail that changed, large enough to be the only thing in frame; one detail per beat is a montage made of a single image. Lay a 10 percent grid over the material, read off where each thing is, and write the regions down as fractions of the image before framing them.
- **In space.** A row, a stack or a wall standing in perspective, the camera stepping along it. Only what has happened is lit; what has not happened yet is not on screen.
- **All at once.** Every version flies out of the one you were watching into a wall; then one is pulled forward. This is the release after a run of fast single shots.
- **Collision.** Two things meet in the frame and one thing comes out, on the beat, with a flash.

**The label stays where it is.** One caption position, one tag position, in screen space, the same for every stretch, while the world behind changes. The eye learns once where to read. A label that sits over the material it describes is the note people give most often: check every stretch for it.

## 4. The frame is on the change

For anything that edits, transforms or compares: when something changes, the camera is already on it, it fills a third of the frame or more, and the change happens while you look. A wide shot in which a small region changes is a spot-the-difference puzzle.

A marker that follows the subject (a selection box, a cursor, a ring) is placed from the subject's planned coordinates at each time, inside the same layer and the same camera transform, so it follows any move without a second set of keyframes. Do not measure layout inside a tween.

## 5. Rebuild the rhythm on the grid

- Keep the bar plan if the sections were right; change what happens inside them.
- A burst: accelerate (two beats a shot, one, half), lock to the beat, release into something wide.
- The stop: fold everything into one small object, hold it in near silence, let one small event happen (a click), and open the next section out of that object.
- No still frame anywhere: every hold drifts (3 to 6 percent of scale, linear) until the next move takes over.
- Cuts sit on whole frames; anything that counts on screen is quantised to whole frames too.

## 6. Rebuild the music, do not just turn it up

Energy is arrangement, not tempo or volume. With a fixed track, choose sections of it that step up (a quiet part under the hook, a fuller part for the burst, the strongest part at the drop), cut between them on bar lines, and add the stop. With `generate_music`, ask for the sections by time (pad under the hook, a build with a roll, the full band at the drop, the motif alone on the logo) and align the edit to the real output. Then check: levels that step up, dip once and peak at the drop.

## 7. Two rounds of your own notes before anyone sees it

1. Validate every changed layer, then look at `view_current_frame` at two or three times per section and the first quarter beat after every cut. Fix.
2. Read the one-tile-per-second contact sheet of the whole film. Write the notes a demanding director would give (there are always some after the first full pass), fix them.
3. After export, look at frames of the exported file around the fastest cuts, and at frame 0 and the last frame.

Report the before and after with the same numbers as the diagnosis.

## 8. What a second pass must not do

Change approved words or claims; invent new copy to fill a transition (a transition that needs words needs a different transition); add narration without being asked; delete the old version; call the film better on the strength of the numbers alone. The numbers say it moves. Only the person watching can say it is good, and until they have, the result is "rebuilt, not yet judged".

*Source: one commissioned launch film rebuilt on 2026-11-09 by the upstream author (most of the film barely moving, 13 cuts; after the rebuild, strong motion throughout and 34 cuts). The method is observed on that one film.*
