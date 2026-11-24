# QA before you hand over

1. **Stills per scene.** One frame per scene (`seek_timeline`, `view_current_frame`) plus `get_timeline_contact_sheet`. Look for text outside x 60 to 960 and y 160 to 1420, overlaps, empty areas, text that is too small, floating or hanging pieces, black or white planes from textures.
2. **Seams.** The frames just before and just after every cut: no jump, no object popping in, nothing sliding differently on a second pass.
3. **Words.** The transcript matches the script; brand names are heard right; captions are spelled right (`update_caption_words`).
4. **Numbers.** Every number on screen traces to data; examples are labelled.
5. **Motion.** No random flicker or tick; handheld is smooth; the character only is on twos in the anime style.
6. **Loop.** The last frame equals the first.
7. **Sound.** Effects only on actions; music under the voice; loudness measured or stated as not measured (see `safe-zones-and-delivery.md`).
8. **Delivery.** Master and the phone copy under 29 MB, both checked.
9. **Honest status.** Implemented, seen in frames, checked in motion, measured, and what still needs a human to watch and listen to.
