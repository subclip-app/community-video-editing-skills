# The director's proposal and storyboard method

Phase A of every film. Nothing is generated, drawn or voiced until the creator approves the proposal. It follows the method of the original project's "Director's Proposal Contract" (`skills/directing-stickman-videos/references/storyboard-template.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/storyboard-template.md)), rewritten for Subclip.

A finished worked example is the picture `examples/director-storyboard-table.jpg`. Its text is at the end of this file.

## 1. Rewrite the source into a speakable script

- Keep the source's core claim, names, numbers and meaning. Do not invent research, statistics, quotes or product claims.
- Open with a hook inside the first 2 to 5 seconds (30 to 60 second films). Cut repetition and side branches. Expand a very short source with one relevant example or a callback.
- Prefer plain spoken English to literal translation. Simplify wording before you raise speaking speed.
- Count the time: about 120 to 150 words per minute is only a first estimate. 60 to 75 words is roughly 30 seconds. The real clock is the voice you generate later (`voice-and-sound.md`).
- Leave room for physical beats, reaction pauses and music-only moments. Do not stuff words into every second.

## 2. The five-stage heartbeat

Shape the script in five steps. In a 30 or 60 second film the stages are quick; in a 3 to 5 minute film they stretch.

1. **Golden hook.** An unexpected question or a striking visual paradox that opens an information gap. No slow throat-clearing.
2. **Break the assumption.** State what everyone believes, then break it in one decisive sentence.
3. **Insider secret.** Show the hidden mechanism, friction or system behind it.
4. **Truth.** Give the plain cause or insight with full clarity. The "aha".
5. **Elevate and ask.** One memorable line, then an open question that invites replies. Narrative looks (A3, A4, A5, A6, A7, A8, B4, B7) may end on a reaction, a callback or a quiet beat instead of a forced question; follow the look file.

## 3. The proposal header (show it in this order)

1. English title and, if useful, a reference translation.
2. Core message and the opening hook.
3. Aspect ratio (16:9 or 9:16), target length (do not round it to a fixed multiple) and the chosen look.
4. Voice: the complete voice profile (gender, age, accent, timbre, pace), language, estimated speaking time, and the route (local voice first, see `voice-and-sound.md`). The voice gender must match the cast.
5. Palette: at most three saturated accent colors named in plain words, and what each one means. No hex, RGB or Pantone in the proposal or in any prompt.
6. Sound plan: voice or no voice, caption style, music bed, effects, ambience, and the emotional turn.
7. Shot timing and, for the model engine, the generation clips and what each one gets as a reference image.

## 4. The storyboard table

One row per edited shot. Final-timeline times first. Columns:

| Final time | Narrative job | Scene (locked look) | Motion and camera | Voice over | Link to next row | Sound |
| --- | --- | --- | --- | --- | --- | --- |

Rules:

- Every row has its own narrative job. No two rows do the same thing.
- Time the rows to the spoken words (words in the row divided by the words-per-second of the chosen voice), not to equal slices.
- For the model engine, also give: generated clip length, retained range (in and out), trim and overlap, and which rows share one generation. A clip is source footage; the shot is the part you keep. Generation prompts are grouped by clip, so N prompts do not equal N rows.
- For the code engine, give the still for each row, the motion layer moves, and the caption group.
- Visual change every 2 to 3 seconds: setup, action, consequence can spread across adjacent rows.
- Use at least four relevant visual devices per coherent segment unless the look says otherwise: character action, environment change, concrete metaphor, icon or arrow (never text), particles or light, camera push, pull or track, a foreground wipe, a match cut or shape morph, interaction with another figure or an oversized object. Each device must clarify the spoken idea. No abstract liquid morphing.
- No words inside generated pictures by default. Planned captions and 2 to 5 word overlays are post-production, listed after the table with their placement.
- Composition by ratio: 16:9 uses left-center-right staging, lateral tracking and negative space; 9:16 uses foreground and background depth and vertical reveals. A ratio change means new staging, not a crop.
- Continuity: end each row with something the next row inherits (a pose, a moving object, a travel direction, a shape, a camera move) and write both sides of the join in the "Link to next row" column.

## 5. Phase A checks (run them, show the result)

- [ ] Source, ratio, length and look are known.
- [ ] Script follows the five-stage heartbeat (or the look's own arc).
- [ ] The ending returns to the message and, where the look allows, invites replies.
- [ ] Narration fits the speaking time at the voice's real pace, with pauses and action-only beats.
- [ ] Rows have distinct jobs and real times that add up to the target.
- [ ] Four or more visual devices per segment; a visible change about every 2 to 3 seconds.
- [ ] At most three accent colors, named in words.
- [ ] Any proposed text is a post-production overlay, never part of the generated picture.
- [ ] Every adjacent pair has a named continuity link.
- [ ] No unsupported factual detail was added.
- [ ] One voice profile for the whole film, matching the cast gender.
- [ ] The cost quote is on the page (see below).

## 6. The cost quote

At the bottom of the proposal, before the ending question, quote the work that will spend credits: stage, model, count, duration, credits, a total and about 15 percent for retakes. Get the numbers with `estimate_ai_generation` and `get_ai_credit_status`. Code-engine films usually spend nothing when the creator's Codex CLI makes the images, and local voice, captions and motion layers are free. A model-engine film is priced per generated second.

## 7. The confirmation ending

End Phase A by asking the creator to do one of three things: approve the proposal, revise a named row or passage, or change a global setting (ratio, length, look, palette, voice, tone). Do not write model prompts or generate anything before approval. A material change needs approval of the revised part only; keep every still-valid approval.

When the creator approves, continue with `locks.md` (character and style locks), then the look file, then `subclip-assembly.md`.

## Worked example: "The two-minute rule"

Look B1 Minimal line art, 16:9, 30 seconds, one female cast member (Mina), local female voice. Script, 67 words:

1. Your to-do list has forty items, and you start none of them. (hook)
2. That is not laziness. Big tasks feel heavy, so your brain keeps them for later. (break)
3. Here is the trick: shrink the first step until it takes two minutes. (secret)
4. Open the document. Write one sentence. That is it. (truth)
5. Once you start, stopping gets harder than continuing. (truth, payoff)
6. What is the smallest first step you could take today? (ask)

| Final time | Narrative job | Scene | Motion and camera | Voice over | Link to next row | Sound |
| --- | --- | --- | --- | --- | --- | --- |
| 0.0 to 5.4 | Hook | Mina at a desk under a wall calendar, a paper to-do list taller than she is | Slow push in, list unrolls to the floor | line 1 | The list slides off left | paper unroll, room tone |
| 5.4 to 12.1 | Break | Mina flat under a heavy red stone marked with a document icon | Drop, small shake, she peeks out | line 2 | The stone rolls out right | thud, string sigh |
| 12.1 to 17.9 | Secret | A hand chips the stone into a pebble, a clock face shows two minutes | Match cut stone to pebble, clock hand sweeps | line 3 | The pebble becomes a pen tip | chisel taps, tick |
| 17.9 to 22.0 | Truth | Mina at the laptop, one typed sentence, a green check | Close on hands, pull out to wide | line 4 | The check grows into a path | key clicks, chime |
| 22.0 to 25.7 | Payoff | A green path of stepping stones, Mina walks, jogs, arrives | Side tracking, parallax | line 5 | She reaches a door of light | steps speed up, bed swells |
| 25.7 to 30.0 | Ask | Mina at the door turns to camera, an empty speech icon above her | Hold, tiny head tilt | line 6 | End card on the same paper | bed resolves, room tone |

Accents: warm yellow for the idea, red for pressure, green for progress. Cost quote (prices checked 2026-11-24): six stills by the creator's Codex CLI cost 0 Subclip credits; with `nano-banana-2` they cost 6 x 2.5 = 15 credits. Local voice, captions and HyperFrames motion cost 0. The same film made with video clips (`p-video-2`, 3 x 10 s at 720p) would cost 76.5 credits, up to about 84. Nothing is spent before approval.

The picture is a table made in code for this skill, not an AI image. It shows the table as the creator sees it, with the checks and the cost line.
