# Sound

The original skill composes every note of its score and every effect in code for each film. In Subclip the same
plan lives on native audio lanes, so every layer stays editable: a drone under the film, silence before each big
hit, one hit on the date, one on the name, one on the title, and one effect per visible action.

## Sources

- **Free:** `search_public_audio` (Freesound and the Subclip effects catalog). Keep only CC0 results unless the
  creator accepts attribution licences, and note the author and licence of each in the project notes. Useful
  searches: "dark drone loop", "cinematic boom", "trailer hit", "typewriter", "rubber stamp", "paper slide",
  "camera flash", "light switch", "whoosh", "riser".
- **Composed:** `generate_music` for a minor-key underscore with strings and a choir swell, after quoting the
  cost (`list_ai_models` with kind audio, `estimate_ai_generation`). Ask for instrumental and leave room for the
  voice.
- Import with `import_public_asset_to_timeline` or `import_ai_operation_to_timeline`, then shape every item with
  `update_audio_item` (start, end, source trim, volume, fades).

## The score plan

| layer | where | how |
|---|---|---|
| drone | under the whole film | volume about 0.3, fade in 1.5 s, fade out before the title hit |
| hit on the date | on the spoken date | a cinematic boom; the drone is quiet in the second before it |
| hit on the name | the one big hit of the story | silence before it: dip the music lane with a fade out and back in |
| strings or a pulse | origin and rise | stops dead on the turn |
| lights on | the turn | a click and a low tone as the board opens |
| pad | the case section | under the board and the reporting |
| riser | into the report's slam word | ends on the word |
| hit on the title | the title card | darker and longer, then let it ring out |

Keep big hits at least 3 s apart. Never put a hit on a word the viewer must hear other than the name: it masks
consonants.

## Effects

One effect per visible action, landing one frame after the picture: a click for a small reveal or a pin, a
typewriter run for a typed line (trim the source to the typing time), a flash for a photo snapping on, a paper
slide or whoosh for a page or camera move, a stamp for a rubber stamp, a string pull, a marker squeak. About
0.5 to 0.7 effects a second is plenty. No sound for something that does not move, no whoosh on a fade. Keep
effects out of a soundbite.

Find the transient inside each effect file before placing it: many files start with silence or a pre-swell, so
move the item earlier by that amount.

## Mix targets

- Narration clearly on top. Music about 7 LU under the voice.
- Whole mix around -16 to -14 LUFS integrated, peaks under -1 dB.
- After export, measure the file (integrated loudness, peak) and listen in the editor preview with the creator.
  Say plainly in the session summary what was only measured and not heard.
