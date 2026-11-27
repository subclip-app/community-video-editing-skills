# Narration pacing gate

From the original `references/channel-motion.md`, `scripts/measure_narration_takes.py` and `scripts/speech_metrics.sh`. In Subclip the agent measures with the take's returned duration and `get_audio_analysis` instead of running those scripts.

## Write to the budget

- About **20 to 23 words per full 10 second block**; **17 to 21 for kids**. A shorter last block gets a proportional share.
- At most two sentences per block. Each extra full stop costs about 0.7 seconds of air and the voice rushes the rest.
- Numbers, dates and years as words ("nineteen ninety"). They are spoken longer than written.
- No filler (you know, I mean, sort of, basically, um). Reach the count with facts, not padding.
- No content word repeated within six words. No five-word phrase shared between two blocks; if a line is short, add one more fact to that line.
- No delivery tags or timecodes inside the line itself.

## Measure the take

| Measure | Pass |
| --- | --- |
| Spoken length (first word to last word) | 7.8 to 9.5 s in a 10 s block |
| Soft band | 7.2 to 7.8 s: retry once, then accept it and say so |
| Pauses inside the line | none of 0.8 s or longer |
| Rate | 2.9 words per second or slower (under 2.1 reads as slow) |

## When a take fails

- Too long or rushed: cut the line toward `words x 9.0 / spoken seconds` (never below 17), then generate again.
- Too short: add words toward `words x 8.5 / spoken seconds` (never above 23), then generate again.
- Every voice has its own pace. Before the episode is locked you may try another voice of the same kind; in the reference the first local voice read at 3.2 words per second and failed every line, a second voice read the same lines at 2.5 to 2.6 and passed.
- **Never change the speed**: no `speed`, no `targetDurationSeconds`, no stretched audio, no playback rate. The words change, not the clock.
- At most three attempts per line. Then stop and report the line that would not fit.

## Reference measurements

Local voice Eponine (Subclip local Pocket TTS):

| Block | Words | Spoken | Words per second | Result |
| --- | --- | --- | --- | --- |
| 1 hook | 23 | 8.96 s | 2.57 | pass |
| 2 turn | 22 | 8.32 s | 2.64 | pass |
| 3 payoff | 21 | 8.32 s | 2.52 | pass |
