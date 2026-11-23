# Singing ad

An original song carries the ad and the lead sings on camera, like a micro music video.

## Steps

1. **Lead**: one character or a real presenter look, locked with a reference picture.
2. **Song**: write 8 to 12 short lines (hook first, one product line, one proof line, one call to action). Read `read_subclip_skill` for `subclip-songwriting` and `subclip-music-generation`. Generate with `generate_music` with vocals, quote first, and let the creator listen before animating anything. You cannot judge the song yourself.
3. **Sections**: split the song into beats at its line ends; each beat is a 3 to 5 second clip.
4. **Performance clips**: the lead picture plus the song section as an audio reference when the chosen model accepts it (`audio_reference` in `sourceAssets`), or a lip sync capable model from `list_ai_models`. If neither is offered, tell the creator and use cutaway shots with the song over them.
5. **Cutaways**: product close-ups between performance shots.
6. **Assemble** with the song as the clock (see `subclip-assembly.md`).

Keep the song original. Do not imitate a living artist or reuse a known tune.
