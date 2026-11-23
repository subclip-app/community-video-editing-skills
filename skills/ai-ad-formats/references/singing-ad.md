# Singing ad (`/song-style-ad`)

A micro music video. An original song carries the product story over animated visuals (usually a Pixar-like 3D look). It wins when the song is a real song people would listen to, not a jingle, and its hook lands the product's angle in the first five seconds.

Identity of the format: the song is the spine. It sets pacing, mood and emotional arc. The video is a mix: one or two lip sync beats where the animated lead sings on camera, and the rest silent B-roll cut to the music. Pacing is audio first: the finished song's real timestamps are the clock for everything else.

Three fundamentals: every generation is self-contained (the model remembers nothing, so anything that must stay the same is re-described and re-attached each time); recurring things hold through one locked hero reference (one clean shot of the lead, one of the product); and the song is generated first.

Settled by the format: deliverable is an animated music video ad, speech is sung (lip sync beats plus silent B-roll), pacing is the song. Asked of the creator: which product, genre and duration (inferred from the audience, stated, confirmed), what the animated lead is, which lines are the on-camera moments.

## Three stages (detect the stage from what the creator gives you)

| They give you | Run |
|---|---|
| A product (brief, link, notes), no song yet | Stage 1, song scripts |
| A generated song (a finished track, an upload) | Stage 2, storyboard the song |
| An approved lead design and storyboard | Stage 3, generate and assemble |

If unclear, ask one short question. If they name a stage, do that stage.

## Stage 1: song scripts

1. Ground in the product page, brief or notes: brand voice, target customer, main pain, hero benefit. Never invent proof.
2. Settle four things, state them in one line and let the creator adjust: the angle (the customer outcome the song is about, a specific transformation, not a brand brag or a feature), the awareness stage (how much the lyric must teach), the genre (genre map below) and the duration (15, 30 or 60 seconds).
3. Write two or three distinct song scripts. Vary the point of view (product, customer, narrator), the mood (upbeat, emotional, playful, intimate) or the structural hook. No near duplicates.
4. After the creator picks one, generate the song with `generate_music` in a mode that keeps exact lyrics (custom lyrics input, vocals on), with the title, a tight style description and the lyrics. A simple prompt mode reinterprets the text and drops your lyrics. Read `read_subclip_skill` for `subclip-songwriting` and `subclip-music-generation`. Quote first. The creator listens; you cannot judge the song yourself.

### Genre map (infer from the audience, say why when it is a loose fit)

| Audience | Genres that resonate |
|---|---|
| Moms, general | pop, indie pop, light acoustic |
| Moms, 40 plus | country, soft pop, throwback pop |
| Gen Z women | pop, hyperpop, R&B, indie pop |
| Gen Z men | hip-hop, trap, EDM, indie rock |
| Millennial women | pop, indie pop, R&B, alt-pop |
| Millennial men | indie rock, hip-hop, alt-rock |
| Black audiences, general | hip-hop, R&B, trap, neo-soul, pop |
| Latino and Latina market | reggaeton, Latin pop, bachata, trap latino |
| Fitness | hip-hop, EDM, hard rock, trap |
| Skincare and beauty | pop, R&B, indie pop, hyperpop |
| Luxury buyers | ambient, modern jazz, cinematic pop |
| Pet owners | folk, indie pop, country |
| Wellness and spiritual | ambient, indie folk, soft acoustic |
| Outdoor adventurers | folk, indie folk, alt-rock, americana |
| Gamers and tech | EDM, synthwave, hyperpop, lo-fi, electro-pop |
| Foodies | indie pop, jazz-pop, acoustic |

### Lyric and style rules (every option)

- Hook in the first five seconds, whatever the length.
- Lyrics carry the angle, not the brand. Sing the outcome; do not just chant the product name.
- A real song: verses, a chorus, a rhyme scheme. Never "buy buy buy".
- Short singable lines, 4 to 8 syllables for a pop hook.
- Vocabulary and energy match genre and audience.
- Structure by length: 15 s is the hook plus one chorus pass; 30 s is verse, chorus, verse, chorus; 60 s is a full song with a bridge.
- Style description under about 25 words: genre, vocal type, tempo or BPM, mood, production feel (modern polished, lo-fi, vintage). Never name an artist or band; describe the sound.
- The visual concept must be producible as animated beats (animated objects, a stylized character, simple 3D look), not live-action crane shots.
- Keep the song original. Do not imitate a living artist or reuse a known tune.

### Option format (per script)

```
OPTION N: "<hook line or title>"
Concept: 1 to 2 sentences, the song's vibe and the animated treatment.
Lyrics: [Verse 1] ... [Chorus] ... [Verse 2, 30 s and up] ... [Bridge, 60 s only]
Style: genre, vocal, tempo, mood, production (under 25 words)
Visual concept: 2 to 3 sentences tied to specific lyric moments; which lines are sung on camera and which are B-roll.
```

End with: pick one or ask for more variations, then you will generate the song and storyboard to it.

## Stage 2: storyboard the song

1. Import the song and transcribe it with word timestamps (`transcribe_project`, local mode) and note the exact length. The song is generated whole, once. Music models are not deterministic, so never regenerate sections separately.
2. Settle the elements (infer, state, confirm): the animated lead (design once, lock one clean reference picture in the chosen animated style), the product (one clean accurate hero picture, used in every beat it appears), and the recurring set (for example a neon stage for the singing beats; lock a reference only if it must stay the same).
3. Map beats onto the song's timestamps, one row per beat with a time range. Two kinds:
   - Lip sync beat: the lead sings a slice of the song on camera (chorus, hook, payoff line).
   - B-roll beat: silent animated visuals that illustrate the lyric at that moment (the product, ingredients, a setting), generated without audio and laid over the song.
   Most of the ad is B-roll with one or two lip sync beats. The hook and the final chorus are the usual singing moments. Vary the framing across B-roll beats.
4. Show the storyboard for approval, then say the stills come next.

Quality bar to imitate (not a template): a 42 second animated musical for a balm. Lip sync at 0:00 to 0:06 (lead belts the opening line on a stage), B-roll 0:06 to 0:34 (hands bin old products and open the jar, ingredient cards, a golden pasture, scent jars rotating), lip sync again at 0:34 to 0:40 (the chorus), B-roll to close on the jar on a pedestal with the call to action. Two singing beats bookend five silent beats; every B-roll beat shows the lyric being sung at that second; one locked lead and one locked product throughout.

## Stage 3: generate and assemble

1. Stills: the lead reference first, then one start frame per beat. Attach the lead, product and set references again and restate them in the prompt, then add the beat's action, setting, framing and light. No text in any still. Offer Codex CLI first for stills.
2. Clips with `generate_ai_media` `kind: "video"`. Group beats up to the model's duration cap (often about 10 to 15 seconds).
   - Lip sync beats: a model that can sing or lip sync (check `list_ai_models`); pass the start frame plus that beat's song slice (`audio_reference` in `sourceAssets` when accepted). Cut the song into slices on natural musical beats, never mid word. If no model offers lip sync, tell the creator and use cutaways with the song over them.
   - B-roll beats: generate silent (`generateAudio` off); the model only needs the pacing so the visual lands with its lyric.
3. Assemble over the whole song on the timeline (`subclip-assembly.md`). Captions come from the edit with `transcribe_project` and `update_caption_style`, never burned into footage.

## Locked rules

1. The song is the spine. Time everything to its real timestamps, never to a guessed length.
2. Lyrics carry the angle, not the brand name.
3. The lead is a hero character: one locked reference, re-attached and re-stated in each beat it appears in, never chained off a previous output.
4. Lip sync beats carry a song slice (about 15 s or less); B-roll beats are silent and laid over the song in the edit.
5. Producible animated visuals only.
6. Footage stays free of text. Captions are an edit layer, only on request.

## What you need

A music model with a custom lyrics mode (`generate_music`), an image route for the lead, product and start frames, a lip sync capable video model for the singing beats and any video model for B-roll, transcription with word timestamps, and the Subclip timeline for assembly.
