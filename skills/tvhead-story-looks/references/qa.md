# QA before you hand over

Run these in order. Fix causes, not symptoms: write each finding as interval, observation, cause, fix, re-check.

1. **Contact sheet.** `get_timeline_contact_sheet` with `at: "auto"`. Look for empty frames, overlaps, things off-frame, wrong faces, a character that changed design between scenes.
2. **Seams.** `view_current_frame` just before and just after every cut and every transition. A match cut agrees on silhouette, scale and direction. Check text over text during crossfades.
3. **Captions.** `get_timeline_contact_sheet` with `at: "caption-pages"`. Captions inside the safe zone, one size, no caption across a cut, spelling fixed with `update_caption_words`.
4. **Voice.** The transcript matches the written line; brand names and numbers are spelled so they are pronounced right. Say which lines you checked by transcript. Never say you heard the audio.
5. **Look lock.** Compare the first, middle and last still against the style anchor and the plates: same line weight, same palette, same character.
6. **Rhythm.** A visible event every 2 to 3 seconds, no hold over about 0.6 seconds except the end card, frozen time at most 1 second per 30 seconds.
7. **Facts.** Every number and name on screen has a source or is labelled illustrative. No invented quotes.
8. **Sound.** Music under the voice, effects only on actions, no clipping. State that levels were set by volume and not measured; ask the creator to listen.
9. **Honest status.** Report what was implemented, what you saw in frames, what you checked in motion, and what still needs a human listen.
