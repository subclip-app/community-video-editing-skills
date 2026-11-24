# Script, voice and timings

## What it is for
The first three stages of every reel: script, voice, word timings. Do them before any scene is built.

## Script rules
- Hook in the first 4 seconds and in the first spoken line.
- 6 to 8 scenes, 1 or 2 lines per scene, about 150 spoken words a minute. Reels run 35 to 60 seconds.
- One thesis per reel. The end is one call to action (for example "Comment [WORD] and I send it"). The last frame equals the first so the reel loops.
- Write brands and terms the way they should be heard: "Claude Code" may be read as "cloud code" by a voice model, so write the spoken form the model reads correctly, and check it in the transcript.
- Numbers said aloud are written as words in the spoken line. Numbers shown on screen come from data. Label illustrative numbers "Example".
- One main technique per line (a drop, a wipe, a pop). Not everything moves at once.

## Per-scene plan card (one row each)
| Field | Write down |
| --- | --- |
| Meaning and time | the line, the accent word, its role |
| Action | before, trigger, what moves, reaction, result |
| Space | composition, foreground, middle, background |
| Text | the exact words, how they move, the reading window |
| Camera | path, speed, framing |
| Sound | the effect and the synced action, or silence |
| Risk | what could break and how you will check it |

## Voice and timings in Subclip
1. `list_local_voices`, then `generate_local_speech` for a free draft. For the final voice, `list_ai_voices`, `get_voice_samples` and `generate_speech` after a quote and a yes. Use a voice that matches the speaker's gender. Never use a voice that imitates a real person.
2. `transcribe_project` (local mode) on the voice item for word timings. Convert them to frames at 30 fps and pass them into each layer as props. A cue word must exist in the transcript; if it does not, fix the script, not the timing.
3. Hear-check by transcript: compare the transcript with the written line, rewrite mispronounced names in the spoken form, regenerate only that line.
4. Voice is the clock. Scene lengths follow the real audio. Nothing is sped up or slowed to fit.

## Credit cost note
Local speech is free. Cloud speech, generated music and generated images are paid: quote them first.

## Upstream source
Adapted from the original author's pipeline in tvhead-studio (Vladic20, MIT):
- [SKILL.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/SKILL.md) (conveyor and rules)
- [references/audio.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/audio.md)
- [template/tools/script.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/script.mjs)
Repository: https://github.com/Vladic20/tvhead-studio
