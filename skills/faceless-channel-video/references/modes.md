# Other modes

From the original `references/song.md`, `references/picture-story.md`, `references/presenter.md`, `references/talking-characters.md` and `references/editing.md`, mapped to Subclip tools. Model names are what the original used and the closest Subclip model today; check `list_ai_models` before quoting.

## Children's song

- Only for an explicitly sung children's song or music video. Background music alone is not this mode.
- The original supports 60 or 120 seconds only; ask for one of those if another length was requested. Never replace the song with narration or shorten it.
- Lyrics in the requested language: verses and a repeating chorus (identical every time), one steady 100 or 112 BPM in 4/4, eight-syllable lines, one syllable per beat, each line starting on beat one, four-bar phrases. Prompt under 2048 characters.
- Generate the song with `generate_music` and a model that takes lyrics (the original used Seed Audio, which Subclip does not list; use MiniMax Music 2.6 or ElevenLabs Music). Quote it first. The song is the only voice and the only music.
- Check the length is within three seconds of the target. At most three attempts in total, each with a changed prompt. Do not stretch, join or swap lengths.
- Six or twelve 10 second blocks that follow the lyrics and chorus, four shots per block, same characters and look, no lip-sync. Inspect block 1 before the rest.
- Captioning singing is not supported reliably. Say so before starting if captions were asked for. Transcription may help spot wrong words but does not prove them.

## Still-picture story

- For an explicit request for still scenes or a picture story.
- Write one continuous narration and numbered beats (`{ "n": 1, "phrase": "the words of this beat" }`). Research factual topics.
- Generate one continuous take (local or `generate_speech`). If it misses the requested length by more than the larger of three seconds and ten percent, rewrite and retry at most twice. Never change the requested length or the speed.
- Transcribe the take first: `transcribe_project` with `purpose: "reference"` and `mode: "local"`. Build the frame timeline from the word times of each beat's phrase.
- Then make one distinct picture per timeline frame, in timeline order. A variation of the previous frame attaches that frame's actual operation or file as its reference and describes only the change. Never repeat one picture to fill a slot.
- Place stills on the timeline at their beat times with slow `add_media_keyframe` moves. Repair only failed or wrong frames.
- Check three points against the script before delivery.

## Presenter overlay

- Only when the creator asks for a presenter and is allowed to use the photo. Ask for placement and style: bottom cut-out, round badge or full-frame cameo.
- The original made a clean green-background version of the photo (GPT Image 2.5), one talking clip per block with the block's narration (Gemini Omni Flash 1.1), then re-voiced it. In Subclip: a talking avatar from the photo with `generate_ai_media` (`kind: "avatar"`) driven by the block's approved narration audio, or `generate_ai_media` with `gemini-omni-1.1`; remove the background with the background remover model or a native chroma key, and place it over the block.
- Each talking clip must finish inside its block; rewrite a failing line, never speed it up. Do not also lay a separate narration on that block.
- Trim any frozen opening frames, then check identity, key edges, lip sync and legibility by looking. A technical pass is not proof of lip sync.

## Talking characters (kids only)

- Only when asked. Narration on odd blocks, dialogue on even blocks; each dialogue block names one or two speakers with one short turn each (16 to 22 words).
- Generate the dialogue clips with audible synced speech, check the words and mouths, and keep their own audio. Narration blocks follow the normal pacing gate. Stop and report if the model cannot deliver usable dialogue.

## Block edit

- The creator names 10 second ranges to change. Ranges are ordered, do not overlap and sit on 10 second boundaries.
- Keep the original project: `clone_project` first, then change only those blocks in the clone (replace the layer, take or clip). Everything else stays identical.
- Check each replacement, review the full episode, and present it as a draft. If a patch fails, keep the original.
