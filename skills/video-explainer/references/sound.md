# Sound, music and captions

## Word-anchored sound cues

The source writes cues against words, for example `- @s05:iron: rumble 0.8` (scene s05, on the word "iron", intensity 0.8) or `- @s02+0.40: whoosh 0.8` (0.4 s into scene s02). Keep that habit:

1. Read the caption words with `read_project_section` (lane `captions`). Each word has `startMs`.
2. Pick the sound with `search_public_audio` (`source: "sfx"` for the curated Subclip and Remotion library, `freesound` for more).
3. Import it with `import_public_asset_to_timeline` at `startMs / 1000`, minus a few hundredths for sounds with a slow attack (risers peak late: start them 0.5 to 1 s early).
4. Set level with `update_audio_item`. Effects sit under the voice: about 0.3 to 0.5 volume for dings and whooshes.

| Source kind | Search for |
|---|---|
| whoosh, zoom, air | whoosh, whip |
| impact, boom, sub_drop | impact, boom, hit |
| riser, rumble | riser, rumble |
| chime, shimmer | ding, chime |
| pop, tick, tap | pop, click, tick |

Use effects on camera moves, reveals and payoffs, not on every line. The source's `subtle` setting means a handful per minute.

## Music bed

- **Free:** a CC0 loop from `search_public_audio` (`source: "freesound"`). Import once, then `update_audio_item` with `loop: true`, `endTime` at the film end, `fadeIn` about 0.5 s and `fadeOut` about 2 s.
- **Generated (credits):** the source scores with Lyria. In Subclip that is `generate_music` with Lyria 3 Pro, `mode: "instrumental"`, then `import_ai_operation_to_timeline`. Quote the credits first.
- **Level:** the source mixes music at -19 LUFS under voice and the final mix at -15 to -13 LUFS with peaks at or under -1 dBFS. In practice keep the bed around 0.12 to 0.18 volume under a local voice and listen. Lift it in pauses with short fades if needed.
- Credit every track and effect in the director brief.

## Captions

- On by default when voiced (`Captions: auto`), off when the creator turns them off or the film has no voice.
- `transcribe_project` (local) writes word-level captions. Fix misheard words with `update_caption_words`.
- Apply the owner's default look with `apply_dynamic_caption_preset` (core default `ivory-spotlight`, no highlight). Do not pick another preset or add word highlights unless the creator asks.
- Keep captions in the bottom band (about y 87 percent on 16:9) with `update_caption_style` `positionY` so they never cover labels.
