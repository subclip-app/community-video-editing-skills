# Verification and rework

## What a machine can answer, and what it cannot

Tools answer measurable questions: does every layer validate, does the file decode completely, are the length, frame size and frame rate right, does a seek to the same time give the same frame, is a font or asset missing. Visual checks cover the key text, the caption zone and the moments where motion lands. When there is no automatic detector for something, name the exact time windows you checked by eye, and do not claim to have checked everything.

Before the creator sees anything:

1. **Layers.** `validate_runtime_layer_source` with 0 errors for every scene.
2. **Stills.** `view_current_frame` at frame 0 (it is the poster), the hook, the hero moment, the densest frame, the end card, and the first quarter second after every scene change, where early-flashing elements show up.
3. **The whole film.** `get_timeline_contact_sheet` from 0 to the end at one tile per second. Read it for runs of identical tiles (dead time), stretches that are one layout with other content (slides), text over the interface, cropped type and half-way frames that are ugly.
4. **Rhythm.** Count what changes per second from the sheet and compare it to the rhythm sheet: is there a hook inside 3 s, a burst, a stop, a peak, a landing?
5. **Sound.** `get_audio_timeline_sheet`: hits where the picture lands, not piled into one second; the stop really is quiet; levels step up toward the drop.
6. **Your own notes.** Write the three notes a demanding director would give, then fix them.

After an export, look at frames of the exported file too (frame 0, the fastest cuts, the last frame), and check its length, frame size and audio stream.

## A cold review

When another agent or person can review, give them only the original request, the exported file, the chosen direction, the treatment, a list of where every on-screen line came from (which screenshot or page), and the facts that must be checked. Do not give them your explanation first. Without the source list, a reviewer will mistake the product's own words for invented copy. Always ask one question about attention: "where does it start to drag, where does it go flat?" A review that only asks about correctness misses "boring", which is the note people give most. Ask for specific timecodes, the defect, its severity and what was watched.

Tell apart: not clear, wrong, hard to read, rough craft, monotonous or uncontrolled rhythm, unmotivated camera, technical fault.

## Rework

Do not chase a single high score. Fix what blocks understanding or use, check the original defect and the seams next to it, and leave choices the creator already accepted unless there is new evidence. When the creator says stop, stop and state what was not verified.

Rework starts from the version actually delivered. After a change, check that the target window changed as intended and that everything else did not.

## Honest claims

- Stills alone do not prove motion was reviewed.
- Audio levels alone are not a listening test.
- A passing build or validation is not proof the film is good. Engineering acceptance and creative acceptance are recorded separately.
- A version the creator rejected becomes a technical regression case, with the rejected dimension written down.
- Record what you checked and what you could not check with `update_project_director_brief` and `write_session_summary`.
