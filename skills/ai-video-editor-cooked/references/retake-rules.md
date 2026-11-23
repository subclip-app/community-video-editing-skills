# Retake and editorial rules

Craft from the cut skill of nextwork-projects/ai-video-editor-cooked (MIT). Decide cuts from the transcript (`get_script`), never from memory of the audio.

## What you decide and what you do not

- You decide which words go. Quote them by word id. Never type a timestamp for a span of words.
- Pauses are decided by a target, not by hand: tighten silences over the target (see below). Do not write a cut for plain silence.
- Fillers, false starts and "wait, sorry" are in the transcript on purpose. They are the evidence.
- Local free transcription tidies speech and may drop some fillers or a false start. A repeated opening a second apart is often all that is left of one. Read the timings as well as the words.

## What to cut

- **False start.** A sentence stops mid-thought and restarts with the same opening words, usually within 2 seconds. Cut the abandoned attempt, keep the finished one.
- **Retake.** A whole line said twice, seconds to about 30 seconds apart. The last take wins, because people retry until it is right. Exceptions: the last attempt is itself broken or unfinished (keep the best complete one); the creator supplied a script and both takes are complete (keep the one closer to the script). A script breaks ties; it is never a reason to cut an improvised line.
- **Alternate hooks are not retakes.** Takes of the opening line recorded after the body (often after the call to action) are alternate hooks. The hook at the start stays (the last good take of it there). Cut every later take from the main cut whole; the main cut must not end on a hook. Afterwards ask once whether to make one version per hook. A version per hook is a duplicate project timeline with that hook first, built through the same stages.
- **Filler.** "um", "uh", "you know", "I mean", "like". Cut whole words only. Do not strip every one: a "so" or "like" that carries rhythm stays. Cut the ones that sound like hesitation. Never produce machine-gun delivery with no breath.
- **Meta talk.** Talking to themself, not to the viewer: "wait", "shoot", "let me start again", "was that okay?". Always cut.
- **Audio events.** Coughs, sniffs, lip smacks.
- **Words that often come just before a retake:** "wait", "sorry", "again", "let me do that again", "one more time", or a hard stop followed by a long pause.
- **A pause of about a second or more between two runs at the same idea** means the first run was abandoned, even if it is a clean sentence on its own. Keep the run the speaker carried on from. Never keep the start of one run and the end of another unless the join reads as one sentence.

## Procedure

1. Read the whole transcript. Note gaps over 1 second: retakes cluster there.
2. Find repeats: near-identical phrases within about 30 seconds.
3. Per cluster pick the keeper (last take wins, then the exceptions). Mark alternate hooks.
4. Mark false starts, then meta talk, then fillers.
5. For every cut ask: is this a worse take of something said better elsewhere? If there is no better take, it is not a cut. Repetition for emphasis, delivered cleanly both times, stays.
6. Apply, then read the new transcript as the viewer will hear it and fix what reads wrong at each join.

## Mistakes to check yourself against

- Cut the good take because the retry was last but flubbed.
- Cut deliberate repetition: said twice for rhythm, both clean, keep both.
- Cut an improvised line because it was not in the script.
- Over-cut fillers.
- A number mismatch: "fifty million" and "50 million" are the same words.
- A word clipped by a pause cut: widen the margin or narrow the cut. A short function word ("so", "I", "you") right after a join needs a little lead-in or it is swallowed.
- A join inside speech: listen to it; cut on a quiet frame.
- Words said twice in a row after the cut ("very, very" can be natural; a stumble is not).

## Pauses

Pause target by the take's shape: a tall take (reel) about 0.15 s, a wide take (16:9, long-form) about 0.30 s, because long-form cut at reel speed reads as jumpy. A pause is doing work in these cases, so keep it up to about 1.2 s:

- the beat after a setup, before a punchline, after a punchline, or before a reaction (read every bit of comedy, sarcasm, callback or aside on a wide take);
- before a number or a reveal, so it lands;
- inside a spoken list, where very tight pauses make the items run together.

Cut dead air before the first kept word and after the last. A breath that opens a personal story can be part of the story.

## Optional editorial pass (only when the creator wants it shorter)

These are riskier than removing retakes. The bar: a cut that removes something the creator wanted is far worse than leaving a line in. When unsure, keep it. Mark each such cut so the creator can review it.

1. **Subsumed line.** Cut a complete line when the next line says the same thing better. Keep the first if it carries a detail the second drops.
2. **Doubled discourse marker.** "You see, you see", "So, so": cut the doubling. Connecting words only; repeated content can be deliberate.
3. **Restating the point after it lands.** Cut sentences that only say it again.
4. **Announce, then ask.** "Let's start with what an API is." then "So, what is an API?" Cut the announcement, keep the question.
