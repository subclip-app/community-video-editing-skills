# QA checks and fixes

These are manual steps with Subclip's review tools. Do each one yourself and read the frames. "Done" means every check below passed, or you told the creator which one you could not run. Saved state and a successful tool call are not visual proof.

## Checks before "done"

1. **Sync.** For every line, compare the shot's start to the line's first word time from the transcript. Cuts within about 0.04 s of the words. Look at `get_timeline_contact_sheet` with `at: "auto"` and at the cut times with `view_current_frame`. Audio and picture must start and end together; the video has no drift.
2. **Every picture shows its line.** Read the contact sheet shot by shot against the script. A shot that shows something else is remade.
3. **First word at 0 s.** Frame 1 already has the voice or the first sung word. No dead air, no breath or room tone first. A transcript's first-word time is no proof (it often says 0.0 over a breath): check the audio item's start, not only the transcript.
4. **Faces and product.** Plates and stills side by side: same face, same clothes, same product and label in every shot. Put the first, middle and last frame of each product clip next to each other: the product must not grow, shrink or stretch. Product proportion within the band you wrote in the brief.
5. **Safe zone.** View `at: "caption-pages"`, and the last 3 seconds (end card, offer). Every caption, headline and sticker lies fully inside x 71 to 1027 and y 347 to 1426, and below y 868 only x 71 to 886 (scale these numbers for other sizes: 720p x 0.667, 4K x 2). Fail anything outside it, including the app-bottom area.
6. **Captions.** One line, 2 to 4 words, one size for the whole video, white, no commas, periods or quotes, spelled as approved (brand names fixed), none across a cut, none over a face, the product, its label or the hand holding it.
7. **Lip-sync shots.** Look at mouth crops at several moments with the word spoken at each (or "silence"): the mouth moves with the words and stays shut when nobody speaks. A pixel measure is not the check.
8. **Two people talking** in one generated clip: the model puts a line in the wrong voice or on the wrong face where a line crosses a cut. Give each line its own shot and look at the mouths.
9. **No reused footage.** No clip stretch appears twice, no shot is sped up or slowed.
10. **End of every clip.** Look at the last frames: eyes turning to empty sockets, colour drift (green lamps going amber), a dark frame. Trim the shot to end before it.
11. **Text and logos in the picture.** Look at every sign, card, screen and label at full size. A font without a glyph draws a box (the middle dot: use a hyphen). Image models put a well-known brand's logo on laptops and phones: check every device and remove it by regenerating.
12. **Silence and loudness.** No silence hole in the middle, no sudden loudness jump between audio items, the music bed under the voice. Say plainly that you can check the structure but the creator must listen.
13. **Claims.** Every spoken or sung claim is supported by the product page and the creator's notes; nothing from the never-claims list.
14. **Hook (first 3 seconds).** Read the opening frames: is the hook readable, is there a caption or headline in the safe zone, does the voice start on frame 1.

Record the result of each check, what you could not run, the credits spent and where the project is in the final message and `write_session_summary`.

## Review round

Ask the creator for notes with timestamps ("0:04 the bottle is twice too big"). Read every note, fix it (a paid retake needs a yes first), review again. A note that comes back twice becomes a rule in the project brief.

## Recurring failures

- A split frame (a second image in the bottom fifth), a stranger instead of the hero when the prompt asks for "a hand", logo misprints in close-ups, a transparent product turning into a coloured streak on the skin after about 2.5 s. For the last one, use only the clean start of the clip (shorter shot), not another prompt.
- Short shots and a different camera move every time make 15 s feel fast; one long static shot kills it.
- If the last shot ends on the product label, lift that shot's caption into the top band.
- A song style can come back as talk-singing. Write the style as melodic with long held notes, put talk-singing and staccato chanting in the avoid list, and read the take's transcript: half-spoken staccato lines mean generate another take.
- Words changed or swallowed by the singer: keep the approved spelling in captions and list the changes for the creator.

## Common fixes

| Problem | Fix |
| --- | --- |
| Caption outside the safe zone | Move it with `update_caption_style` (position) or shorten it; look again |
| Caption covers the product or a face | Lift that shot's caption to the top band (about 33 percent from the top) |
| Faces change between shots | Plates first: attach the approved plate and the face close-up to every still, repeat the same description words, redo drifting stills from the plate |
| Product grows or shrinks | Attach the product photo, write its real size against a hand, rebuild from the approved still |
| Clip barely moves | Source start 0.45; give the motion line a real action, not only a camera move |
| Song has a long intro | Trim the audio so the first sung word is at most 0.5 s in |
| Captions show a misheard word | `update_caption_words` with the approved spelling |
| Voice too slow or fast | New take with a changed pace instruction (new quote and yes) |
| Lip-sync shot mumbles its own words | The model ignores external audio: switch to a model with audio-conditioned lip sync, or frame the line without a visible mouth |
| First 1 to 2 s of clips show a grey character sheet | The sheet was the start frame. Make a scene still per shot with plates attached and start from that |
| A name is printed in the picture | A name was in the prompt. Describe the person instead and regenerate |
| Too few cuts with fixed-length clips | One clip per scene cannot hit the clock: one shot per line, pairs, still-only inserts, trim each clip into its slot, never repeat a clip at an offset |
| Insufficient credits | Say so, give the creator the billing option, wait, then retry the same quote |
