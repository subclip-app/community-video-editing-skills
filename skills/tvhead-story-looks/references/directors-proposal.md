# Director's proposal (Phase A)

Reference: `examples/16-directors-proposal.jpg` (a proposal sheet made for this skill).

## What it is for
A one-page plan the creator approves before any paid step: the whole story as a 5-stage heartbeat storyboard, with continuity, on-screen text and automatic checks. Cheap to change, so it comes first.

## When to use
Always, for every story, before voice and pictures. For a short comedy use the payoff arc instead of the heartbeat.

## The five stages (arc `heartbeat`, explainers)
1. **Golden hook** (the first 2 to 5 seconds): a counter-intuitive question or a visual paradox.
2. **Disrupting assumptions**: state the common belief, then break it in one sentence.
3. **Insider secret**: the hidden mechanism or friction.
4. **Truth revelation**: the aha, shown as a visual change.
5. **Elevation and discussion**: a memorable punchline plus an open question for the comments.

For 60 seconds: hook 1 block, assumptions 1, secret 1, truth 2, elevation 1 (a block is about 10 seconds). Arc `payoff` (comedy, prehistoric, history shorts): setup, escalation, ironic payoff; a held reaction of 0.5 to 2 seconds can be the joke.

## Template (fill every [bracket])

```text
Director's proposal: [title]
| Title | [title] |
| Hook | [line 1] |
| Format and length | [16:9 or 9:16], [m:ss], [N] blocks of about 10 s |
| Look and palette | [look name], [palette words, no hex codes] |
| Arc | [heartbeat or payoff] |
| Narrator | [voice name and gender], one frozen voice for the whole video |
| Music | [kind], drums drop out in dark scenes and hit on big transitions |

Storyboard
| # | Time | Stage | Picture | Motion, camera, seam | Voiceover |
| 1 | 0:00-0:04 | Golden hook | [what is seen, one metaphor] | [camera move, how it connects to scene 2] | "[exact line]" |
(one row per scene)

Continuity
- 1 to 2: [seam type]; carries [character or prop]
(one line per pair of scenes)

On-screen text (overlays added later)
- scene [n]: [exact words]

Checks
- [see below]
```

## The checks (run them yourself on your own table)
- **Narration density:** about 20 to 25 spoken English words per 10 seconds (a little fewer in other languages). Flag a scene under 12 or over 30 words per 10 seconds.
- **Visual rhythm:** one visual event (a cue, a change, a camera move, a seam) at least every 2 to 3 seconds. Flag a scene longer than 4 seconds with fewer events.
- **The ending:** for a heartbeat story the last line must be a question or an open invitation for the comments. Flag it if not.
- **Hook:** line 1 is 12 words or fewer and states a contradiction, a confession or a question.
- **Facts:** every number on screen has a source or is labelled illustrative.
- **Variety:** no more than 3 cuts in a row with the same layout; 2 to 3 transition types per film.

Write each flag as: scene number, what is wrong, the fix. Fix them, re-run the checks, then show the table to the creator.

## Subclip tools
Plain text in the chat and `update_project_director_brief`. No credits. Ask for a go before voice or pictures.

## Upstream source
Adapted from the original author's director module in tvhead-studio (Vladic20, MIT), which itself adapts kaomei/stickman-video-director (MIT):
- [template/lib/director.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/lib/director.mjs)
- [references/writing.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/references/writing.md)
Repository: https://github.com/Vladic20/tvhead-studio
