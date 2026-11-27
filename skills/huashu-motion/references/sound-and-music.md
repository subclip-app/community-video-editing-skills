# Sound and music

A film ships with music and hits. Silent motion reads as a draft: the same cut that feels abrupt without sound feels intended when a note starts on it, and a card that lands without a thud looks weightless. Leave a film silent only when it is an overlay for someone else's edit or the creator asks for silence.

The upstream tool synthesized its own score from notation and placed effects with code. In Subclip the music and every hit are native audio items, so the creator can move, trim and mix each one by hand.

## 1. Where the track comes from

In this order:

1. **The creator's own track.** Import it with `import_external_media`. It is theirs; claim nothing on it.
2. **An openly licensed track** from `search_public_audio` (Freesound and the Subclip sound catalog). Take only CC0 or CC BY. Reject CC BY-NC (no commercial use) and CC BY-ND (a trim, loop or fade is a derivative); CC BY-SA only if the creator accepts share-alike on the soundtrack. Import with `import_public_asset_to_timeline`, passing the attribution, and write the credit into the director brief and the film's description: `Title by Artist (source URL), licence, trimmed and faded`.
3. **Generated music** with `generate_music` after reading `subclip-music-generation`, quoting the model and price with `list_ai_models` and getting approval. Ask for an instrumental 30 to 60 s longer than the film, and describe the shape by time (quiet intro, build, a break, the drop at a stated second). Import the finished operation with `import_ai_operation_to_timeline`, then align the edit to the real output: generation does not guarantee exact onsets.
4. If none of these is possible, say the film has no music and why. Do not hide synthesized audio inside a motion layer.

Pick by the film's temperament, not by habit. The world comes from the product: who uses it, where, at what pace. A terminal tool can be pulse minimalism or minimal techno; a consumer app garage or folk; a model release cinematic or minimal; a notes app lo-fi; a game chiptune. Precise and technical products avoid a lyrical waltz; warm, human stories avoid techno and trap; hype and sport avoid ambient. Never the world of the last film unless the creator asked for it.

## 2. The track comes before the cuts

Find the track's tempo (from its title or tags, or by counting beats on `get_audio_timeline_sheet`) and where its sections change. At 120 BPM a beat is 0.5 s and a bar 2 s. Then:

- Put scene starts on bar lines and the burst's cuts on beats.
- Put the burst and the peak on the track's lifts (where it gets louder or fuller). If the picture and a lift are within a bar of each other, move the picture.
- Shape the energy with the edit, not by rewriting the music: a lower level under the hook and build (`update_audio_item` volume around 0.6 to 0.8), full level from the drop.
- **The stop:** end one audio item a beat or two before the drop (with a short fade) and start the next audio item exactly on the drop frame, ideally on a fuller section of the same track (`sourceStartTime` on a bar line). A small sound (a click, a riser) can sit in the gap.
- **The ending:** prefer the track's own ending; otherwise a fade of 1 to 2 s that finishes on the last frame. Set the film length with `set_project_duration` so nothing plays after the end card.

A looped or cut track can be audible at the join. Make joins on bar lines, inside steady stretches, never across a lift, and listen to every join once if you can; say where they are if you cannot.

## 3. Hits on the scene cues

While animating, write down the time where each motion lands (not where its tween starts). Hits go on those times as short audio items:

- **On the landing frame, not the start of the tween.** With `back.out` a card first reaches its place at about 45 percent of the duration; with `expo.out` most of the travel happens in the first 30 percent. Look at the frame if unsure.
- **Density follows the energy curve:** sparse in the hook and the stop, one per cut in a montage. About 8 to 15 per 30 s for a motion piece; one big impact and one end chime at most.
- **Kinds:** a click or tick for interface presses; a whoosh or whip for a fast move or a cut into a new section (start it just before the move so its peak lands on the cut); a boom or deep hit for the drop or the big number; a shutter for a capture or a screenshot reveal; a chime for the end card.
- **Repeat with variation.** Four cards: four hits panned left to right (`update_audio_item` pan). A row of identical sounds sounds like a bug.
- **Big moments get space.** Let the drop, the end card or the punchline number have a beat where nothing else hits.

Search the catalog with `search_public_audio` (`source: "sfx"` for the curated set) and import each hit with `import_public_asset_to_timeline` at its cue time. Trim long ones with `update_audio_item` (`endTime`, `sourceEndTime`, `fadeOut`).

## 4. Narration

Settle it once at the start: none, a voice reading a script you write, the creator's own recording, or the footage's own sound. For a free draft use `generate_local_speech` and `import_generated_audio_to_timeline`; for cloud speech follow `get_voice_samples`, `set_approved_voice`, `generate_speech`. With narration, the voice is the clock: place reveals so they land on the word (start a half-second fly-in half a second early), and keep the music about 12 dB under the voice, lower again under every phrase.

## 5. Levels

- Music alone around -18 LUFS with hits on top; the finished mix near -14 LUFS for social feeds, -16 for a web page or a deck.
- Peaks under -1 dB. Hits sit a few dB under the music's peaks, not above them.
- Check what you can: the waveform on `get_audio_timeline_sheet` (are the hits where the picture lands, and not piled into one second?), and the exported file's levels. Then ask the creator to listen. Taste in sound is theirs; what you can guarantee is sync, shape, balance and level.
