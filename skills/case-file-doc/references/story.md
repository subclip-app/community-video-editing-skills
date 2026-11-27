# Story, script and voice

## The beat shape

A cold open runs 45 to 120 seconds. Keep the order below. For a short film, merge or drop beats, but never drop
the hook, the turn, the counterweight or the question. Times are a guide for a film of about 95 seconds.

| # | beat | scene recipe | what the narrator does | line shape | about |
|---|---|---|---|---|---|
| 1 | the date | wall-date | names the day and hints at who, without the name | "March third, 2026. The most watched founder in the field sends his staff a letter." | 0 to 7 s |
| 2 | their own words | document | reads the primary document exactly while the highlighter sweeps | "'We will be fine,' he writes." | 7 to 13 s |
| 3 | who they are | newsprint-origin | the name lands with the big hit and a hard cut, then 3 or 4 origin facts | "Name was born in place. First job. Met person at place." | 13 to 24 s |
| 4 | the rise | newsprint-rise | the year it started, the logo, how big it got | "In year, he started it in a garage. Ten years later, millions use it." | 24 to 35 s |
| 5 | the turn | board, opening on black | music stops, lights come on | "But this autumn, a different story came out." | about 35 s |
| 6 | the other side | board | who else is involved and what is claimed, every claim hedged | "Name runs org, which is under investigation for allegedly doing X." | 35 to 49 s |
| 7 | the reporting | report | outlet, date and the reported sentence, one slam word | "On date, outlet reported that who believes claim." | 49 to 57 s |
| 8 | the escalation | clipping | the next report, with a date counter | "Two days later, according to outlet, what happened." | 57 to 64 s |
| 9 | the consequence | consequence | what is happening now, from a document | "Now, who has opened what, into whether question." | 64 to 72 s |
| 10 | a real voice | soundbite | someone with standing says one line on camera (only with footage the creator can use) | the clip itself | 72 to 76 s |
| 11 | the counterweight | question, first half | what is not known or not proven, said plainly | "There is no public evidence that name knowingly did X." | 76 to 81 s |
| 12 | the question | question, second half | one open question, asked as a question | "So one question remains. Question?" | 81 to 89 s |
| 13 | the title | title | no narration, the title hit | THE NAME NOUN, circled, with a sources line | 89 to 97 s |

When the story is not a scandal, two other shapes fit the same worlds:

- **The document, line by line.** The film stays on one primary document. Each line opens a window into the
  reporting behind it.
- **Two timelines.** The subject's rise and the investigation's dates run side by side and meet on one day.

## Writing the script

- About 150 spoken words a minute including pauses.
- Short declarative lines, one fact per line. Write numbers and dates the way they are said.
- Plan the silences: a short gap between facts, a longer one between beats, and the longest (about a second)
  before the name, before the turn and before the counterweight. The hits and the dips live in those gaps.
- Hold the name back in beat 1. It lands at the start of beat 3.
- Put the attribution inside the sentence: "according to", "outlet reported that", "allegedly". A slam word
  never appears on screen without its source tag.
- Quotes from documents are exact. Paraphrase is the narrator's and reads as such.
- The counterweight is required for any allegation. The ending is a question.
- No jokes about, and no judgement of, people who are not the subject.
- Keep a script table: line, scene, device, source row.

## Gate 1

Show the creator the script, the shot list with times, the sources table with every FLAG, and the voice plan.
Wait for a yes before paid voice, bulk downloads or scene building.

## Voice

- Free: `generate_local_speech`. Try two or three deep voices on the first two lines and let the creator choose
  by ear. Generate one beat per call. Each call returns a WAV; place each with
  `import_generated_audio_to_timeline` at its planned start, leaving the gaps the story needs.
- Cloud: `get_voice_samples`, `set_approved_voice`, then `generate_speech` after quoting the cost.
- The voice is the clock. After all lines are placed, run `transcribe_project` with `purpose: "reference"`
  and `allTimelineClips: true`. Read the saved transcript for each word's start time and key every tween to it.
  Local transcription can run about 0.2 s late on some words; start sweeps a little before the listed onset
  and check by frame.
- If a real soundbite is used, leave a gap in the narration for it and keep effects out of that gap.
