# Narration: cold, clinical, evidence

The narrator is not telling a story; the narrator is reading a case file into the record. The voice never reacts, never sells, never asks the viewer to feel anything, which is why the viewer does. The visuals are the reconstruction; the narration is the paperwork, and the paperwork is scarier.

## Writing rules

- Present tense, always. "He signs into the lab." Past tense turns it into a story; present tense keeps it a file.
- Short declarative sentences. Full stops are the rhythm. An occasional fragment lands like a stamped exhibit ("Eleven visits. No incidents.").
- Numbers are texture: clock times, counts, distances, IDs, at least one per scene. Precision is what makes an invented incident feel documented.
- Clock callouts anchor scenes: each scene's narration cites its in-world time near the top (the minute-by-minute pillar, spoken aloud).
- Withhold, then name. Use the clinical designation first ("the specimen", "the individual in the east stairwell") and reveal what it is only when the timeline forces it.
- Zero editorializing. No "shocking", "incredible", "tragic". If a fact is shocking, state it flatter than the facts around it.
- The narrator knows more than they say. Every non-final scene ends on an open loop.
- Write the narration in the creator's language when their channel is in another language; keep image and video prompts in English because models follow English most reliably.

## Word budget

The clinical read is slow, about 2.4 words per second.

| Scene length | Target | Hard max |
|---|---|---|
| 30 s | about 65 words | 75 |
| 15 s | about 32 words | 38 |
| 10 s | about 22 words | 26 |

Count the words and print the count by each scene's narration. Voices pause at full stops and this style wants those pauses, which is why 65 and not 80. Under budget is better than over: the edit can breathe but it cannot compress.

## Curiosity loops

Non-final scenes end on an opened door, structural not melodramatic: "What the camera records next has never been fully explained." / "By the time anyone checks the log, it is already too late." / "The next entry in the file is a photograph." / "It will take four minutes for anyone to notice."

The final scene closes the film's big loop and stamps it shut with a flat kicker: a reframe, a number or the file itself ("The report runs 214 pages. The word accident appears once." / "The file remains open.").

## The register in four lines

"08:41. A research intern signs into the east genetics lab. His eleventh visit that summer." / "The enclosure holds one specimen. The label reads 8-C." / "At 09:14, the motion sensor above bench four triggers twice. Nine seconds apart. There is no one on camera." / "Search area: one hundred twenty thousand square kilometers. Depth: four thousand meters."

## The master take

After the scene packs, assemble every scene's narration in order into one block and generate it as a single take so pacing and tone stay continuous. Scene labels stay outside the text so the voice does not read them. In Subclip: `get_voice_samples`, `set_approved_voice`, then `generate_speech` with the voice card as the style instruction (`generate_local_speech` for a test). If the text is too long for one request, split at a chapter break with the same voice and style text.

## Voice card (fill it in for the film)

- Voice: start from a deep, neutral, low male read with minimal warmth, or a voice the creator owns. Character in the voice breaks the illusion; flatness is the character.
- Dials: slow the delivery slightly below default, lower the pitch a notch, keep volume even. Small moves; the goal is reading evidence into the record, not a movie trailer.
- Calibration: generate the calibration sentence three to five ways, changing one dial at a time, until it sounds like evidence. Only then generate the full script in one take.
- Calibration sentence: the most case-file line of this film's narration, usually a clock callout with a number.
- Save the voice as an asset (`set_approved_voice`). Every episode reuses it so the channel always sounds the same.
