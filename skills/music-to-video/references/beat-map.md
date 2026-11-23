# The beat map (Step 1)

The original skill ran a Python analyzer (librosa) once and wrote `audiomap.json`. Subclip has no beat detection tool yet and runs no Python, so you build the same map yourself from what the editor can give you, and you say how sure you are. The map is the timing truth for the whole video. Keep it in the director brief with `update_project_director_brief`.

## What the map holds

- `duration_sec`: the exact length of the track.
- `bpm` and `confidence` (0 to 1).
- `beats_sec`: beat times. When the grid is steady write it as a formula (`first_beat`, `period`, `count`) plus any exceptions.
- `downbeats_sec`: the first beat of each bar (usually every 4th).
- `onsets`: audible hit times that are not on the grid (snare ghost notes, fills, vocal starts).
- `energy_phases`: spans with a level (low, mid, high) and density (sparse, medium, dense).
- `silences` and `hard_stops`: places where the music stops, with the time it stops and restarts.
- `key_moments`: surges, drops, risers, crashes.
- `phrases`: 4 or 8 bar groups with start times.

## Where the numbers come from, best first

1. **Generated music with a known tempo.** Generate the track in Subclip with `generate_music`. With `modelId: "elevenlabs-music"` the length is exact (`settings.music_length_ms`, 5000 to 300000). Say the tempo in the prompt: "exactly 120 BPM, 4/4, drums enter on beat one at 0:00, no intro silence, steady tempo, no tempo changes". Lyria and MiniMax only follow timing approximately, so verify them harder. The requested tempo is a claim, not a measurement: check it against the waveform (point 3) before you trust it.
2. **The creator's numbers.** Ask for the BPM, the time of the first beat, and any known drop times. A producer usually knows them.
3. **The waveform.** Call `read_project_section` for the audio lane with the item's ID and `fields` that include `waveform`. It returns a normalized peak envelope (0 to 1) of about 5000 samples across the clip, so one sample is `duration / 5000` seconds (6 ms for 30 s, 36 ms for 3 minutes). That is fine for tracks up to about a minute. If the field comes back omitted or as a reference, you do not have it: do not invent values, use points 1, 2 and 4 and tell the creator the grid is unmeasured.
4. **Transcript timings.** For tracks with vocals, `transcribe_project` (local mode is fine) gives word start times. Use them for phrase and lyric anchors.
5. **Context.** `get_media_context` may describe the track's feel and structure. Use it for mood and energy phases, not for exact times.

You cannot listen. Never claim you heard the beat.

## Measuring a beat grid from the waveform (the librosa method, done by hand)

librosa tracks beats in three steps: an onset strength curve, a tempo estimate from its autocorrelation, and dynamic programming that picks beats which both fall on strong onsets and keep an even spacing (Ellis 2007). You can do a short version:

1. **Onset strength.** Walk the peak envelope and take the positive rise between neighbors. Smooth with a 3 sample window.
2. **Onset times.** Keep local maxima above 35 percent of the largest rise, at least 80 ms apart.
3. **Tempo.** Try periods from 0.33 s to 1.0 s (60 to 180 BPM) in 5 ms steps. For each period `P` and each phase `t0` in `[0, P)` sum the onset strength within 40 ms of `t0 + k P` for every k that fits. The best pair is your beat period and first beat. If two answers differ by a factor of 2 (half time or double time), prefer the one where the kick or bass hits sit on the beat and the 16ths between them on the half beat.
4. **Drift check.** Fit the first 8 beats and the last 8 beats separately. If they disagree by more than 60 ms the tempo is wrong or drifts: use per-phrase anchors from the onsets instead of one grid.
5. **Downbeat.** Of the four possible bar phases choose the one whose beats have the highest mean onset strength.
6. **Confidence.** The share of grid beats with an onset within 50 ms. Below 0.6 the music is not rhythmic enough to cut on a grid.

Check your work: write the first 8 beat times down and compare each against the nearest waveform peak. State the worst error. Anything beyond 50 ms needs another pass.

## Trust boundary (decides `pacing`)

| Field | Trust |
|---|---|
| energy phases, onsets and their rate, rolls (dense hit runs) and their absence, silences, hard stops, key moments, phrases, duration | Robust on any music |
| `bpm`, `beats_sec`, `downbeats_sec` precision | Reliable only when the music is genuinely rhythmic and your confidence is 0.6 or more. On calm or sparse music a beat grid is a metronome you imposed (often at double time): pace by phrases and energy instead and never hard-cut to it |

## Sync offset

Cuts and hits that land 1 to 3 frames before the beat feel on the beat. Hits that land after it feel late. After assembly ask the creator to play the preview and say whether it feels early or late, then shift every anchor by the same amount. Do not shift only some.

## Gap to report

A native beat and onset detection tool is missing from Subclip. Until it exists, this hand method is a best effort, and the creator should confirm the sync by listening.
