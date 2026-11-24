# Voice, captions and sound

Voice leads. The recorded narration is the clock of the film; pictures, captions and effects are fitted to it. This follows the voice-continuity and sound rules of the original project (`voice-continuity.md`, `a-audio-timeline-and-review.md`, `autopilot-sound-system.md` upstream), moved onto Subclip tools.

## Choose the voice once, in the proposal

1. Write a voice profile in plain words: perceived gender and age, accent, timbre, pace, delivery (calm, curious, deadpan), recording feel (close and dry). Propose one voice; do not add another approval question.
2. **The voice gender must match the character.** A female narrator character or presenter gets a female voice, a male one a male voice. For an off-screen narrator, match the cast's lead or the creator's wish. Never put a male voice on a female character or the other way round.
3. One voice for the whole film. A new place, mood or costume never recasts the narrator. Put emotion in the pictures, the music and the effects, not in a changed voice. Separate speaking characters get separate voices and a line list that says who speaks each line.

## Free local voice first

- `list_local_voices` shows the installed voices. On 2026-11-24 the built-in names included Alba, Azelma, Cosette, Eponine, Fantine (female) and Javert, Jean, Marius (male). Names are not a promise, so make a one-sentence test with the same text for the candidate, listen, and ask the creator to confirm that the gender and mood fit. If the local engine is not installed or ready (the status says so), tell the creator and offer the cloud route.
- `generate_local_speech` with the full script (or one file per scene when the film has chapters), then `import_generated_audio_to_timeline`. Local speech is free and is the default for drafts, tests and most finished films.
- Cloud voices (`get_voice_samples`, `set_approved_voice`, `generate_speech`, models from `list_ai_models` kind speech) cost credits. Only when the creator asks for a richer voice. Quote with `estimate_ai_generation` first. Read the installed skill `subclip-tts`.
- Keep the voice at its native speed. Do not stretch or squash speech to fit a picture. If the narration is too long, shorten the words or cut a row. If it is too short, add a reaction beat or a music-only moment.

## Time the film to the voice

1. Generate and import the full narration. Read its real length.
2. `transcribe_project` in local mode on that audio item (one completed job at a time) to get word timings. Fix names with `update_caption_words`.
3. Set every row's start and end from the words it carries, then fit the pictures. Cut on a spoken phrase or a pause. `set_project_duration` to the narration end plus a short tail.

## Captions

- Look rules first (they set size, font mood and lines): minimal looks use one line; B5 allows up to three semantic lines. Read the installed skill `subclip-dynamic-captions` and apply a preset after transcription, then `update_caption_style`. Re-applying a preset resets the position, so style last.
- Break on meaning and real pauses, not on word counts. White text with a dark outline reads on almost every look; follow the look file for the exact feel (B1 handwritten hierarchy, B2 ivory paper label, B3 uppercase white, B6 heavy white with outline).
- Keep captions out of faces and key action. Check with `get_timeline_contact_sheet` before and after.
- Never put the words inside the generated picture. The picture model gets "no visible text"; captions come from the timeline.

## Music, effects and ambience

Three independent layers, each its own timeline item, never baked into the clips:

- **Music bed.** First `search_public_audio` for a licensed track (free to check; use the attribution it returns). Or `generate_music` with `settings.mode: instrumental` (read the installed skill `subclip-music-generation`). Keep it under the voice: volume about 0.14 to 0.2 with `update_audio_item`, fade in and out. Choose the mood from the look file.
- **Effects on action.** Short, quiet effects on contacts and changes (a thud, a pop, a whoosh into a cut, key clicks), well below the voice, never one on every cut. Find them with `search_public_audio` first; otherwise generate a few with the sound-effects model in `list_ai_models`. Name them in the storyboard so they are planned, not sprinkled.
- **Ambience.** One quiet continuous bed (room tone, wind, city hum) that does not fight the music.

Model-engine clips: ask for silent actors and no music in the prompt, so the audio stays editable. If a model insists on native sound, mute it in the edit; do not cut speech from it.

Audible level: set the voice as the loudest element by volume. Subclip has no loudness meter in these tools, so say that the balance was set by volume and not measured, and ask the creator to listen once. Never claim a loudness number you did not measure.

## Sound ideas by look

Classic: clean impacts and soft whooshes. Modern pop: airy synth bed, glassy UI ticks. Prehistoric cave: sparse primitive percussion, dry pauses. Cozy: soft piano or acoustic bed, room tone. Historical: era instruments (drums and brass for epic, plucked strings for daily life). Amber noir: slow dark bed, restrained effects. Rubber hose: playful period jazz bed, elastic effects. Hand-painted adventure: light orchestral bed, wind. Minimal line art and colorful hand-drawn: soft bed, pencil, paper and key effects. Retro TV: static hiss, low hum, subtle clicks. Survival thriller: continuous low ambience, story-synced effects, a cliffhanger sting. Avatar explainer: light bed, comic effects on actions. Meme story: bouncy bed, punchy effects. Pixel theater: chiptune-like bed, 8-bit effects, typewriter ending.
