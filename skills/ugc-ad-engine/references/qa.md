# QA before hand-over

Check each item yourself on the contact sheet and on single frames. Do not say you heard audio you only measured.

## Strategy

- One angle, one dominant emotion, one call to action.
- The hook is both seen and read within the first second, under 8 words.
- Every claim can be proved by the creator. No health, medical or income results, no invented numbers, reviews or counts. No `[data to fill in]` left.
- The ad talks about the viewer, not the brand.

## People and likeness

- The avatar is fictional or the creator's own likeness with their consent.
- The same face, hair, clothes and product appear in every clip. If the face drifts, regenerate that clip from the same approved image (a new quote and a new yes).
- Hands have five fingers, the product keeps its shape and has no melted logo.

## Picture and timing

- Clips are back to back with no black gap and no repeated tail. Silent tails trimmed.
- Mouths move on the words (look at 3 or 4 frames per clip). Say plainly if lip sync looks weak.
- Total length matches the plan (a UGC ad is usually 15 to 35 seconds).

## Captions and text

- Words match what is said, names and product spelled right.
- One line, 2 to 3 words a page, one size for the whole ad, inside the safe zone, not covering the product or the face where it can be avoided.
- The hook and the call to action are readable and do not overlap the captions.
- An AI label is on screen where the platform or local law asks for one.

## Audio

- The voice matches the avatar's apparent gender and age. Check the voice's gender field or a pitch measurement, and say if it was not checked.
- Voice is the loudest element. Local speech is robotic and its pitch is unreliable: prefer a cloud speech model for the final.
- Check loudness with a measurement tool if you have one and report the number as measured. Otherwise say the level was set by volume and not measured.

## Common fixes

| Problem | Fix |
| --- | --- |
| Clip longer than its speech | `trim_media_item` to the speech length plus about 0.1 s |
| Doubled voice | The clip already has speech: delete the separate speech item |
| Caption covers the product | Move the caption style position or lift it to the top band |
| Face drift between clips | One approved image, same movement style, regenerate the clip |
| Speech cut off or too long | Shorten the line, make the speech again, then the clip |
| Caption word wrong | `update_caption_words` with the word ID |
| Captions reset after a preset | Apply the preset first, `update_caption_style` last |
