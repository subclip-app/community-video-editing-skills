# Sound design recipes

Numbers are starting values from earshot's motion-design notes (practitioner practice, tune by listening). Pitch is in Hz or semitones (st). Levels are relative to the loudest cue in the mix.

How to use a recipe: search the library with the words in "Search", or ask a generator or the local engine with the "Request" line, then judge the result by the parameters.

## Shared rules

- One sound, one job. Layers (transient, body, sub, tail) each own a frequency band and peak together.
- Movement is the effect: filter, pitch, level and pan change over time. A static sound with a fade is cheap.
- Start on the first sample of the transient. Leading silence feels like lag.
- Repeated sounds need variants: pitch within +-1 st, level +-1 to 2 dB, timing +-10 to 20 ms. Never the same take twice in a row.
- Pitch down = bigger and heavier, up = smaller and lighter.
- Loudest cue lands on the frame. A sound a frame or two off breaks the illusion.

## UI click
- Search: ui click, soft tap, button click, toggle.
- Request: "a short soft UI click, 80 ms, not harsh".
- Parameters: 30 to 150 ms, most under 100. Mechanical: noise band-passed near 5 kHz, Q 8 to 12, 1 ms attack, 20 ms squared decay. Tonal blip: sine or triangle 600 Hz to 2 kHz, attack 1 ms, decay 20 to 60 ms, optional 1 to 3 st drop over 10 to 20 ms, with a 1 to 3 ms noise tick above 3 kHz 6 to 10 dB down. High-pass about 120 Hz, mono.
- Meaning: neutral = one flat tone, positive = rising (major third or fifth), negative = falling or slightly detuned. Toggle on rises, off falls. Hover: nothing, or at most 30 to 50 ms, 12 to 20 dB under the click.
- Level: 10 to 15 dB under music peaks. Place on the press frame. Pan toward the screen position.

## Whoosh
- Search: whoosh, swish, swipe, fast pass.
- Request: "a fast whoosh, 0.4 s, bright, peak in the middle" (heavier: "a bigger, darker whoosh, 1 s").
- Parameters: pink noise through 2 or 3 band-pass bands at ratios 1 : 1.6 : 2.5, Q 1 to 3, centre sweeping 300 to 600 Hz up to 1.5 to 5 kHz at the peak and back to 400 to 800 Hz. Peak at 50 to 70 percent of the length, accelerating rise (power 2 to 3), decay about twice as fast as the rise. UI swipe: 100 to 250 ms, high-passed above 300 to 800 Hz, no low end. Heavy: add a 40 to 80 Hz sine swelling with the peak, 12 dB under the body. Pan L to R through the peak, keep mono sum intact.
- Lengths: UI swipe 0.1 to 0.25 s, fast cut 0.25 to 0.5 s, general 0.8 s, big reveal 1 s or more. Make separate lengths instead of stretching one file.
- Timing: the peak sits on the cut or the fastest frame, so the sound starts 0.2 to 0.6 s earlier. Leave about 80 ms of silence before a following impact.
- Level: under the picture, about -6 dB from the loudest cue. Reserve the longest, widest one for the biggest move. Skip scene changes where nothing moves.

## Riser
- Search: riser, uplifter, build, tension rise, reverse swell.
- Request: "a 3 second tension riser that ends cleanly on a hit".
- Parameters: noise low-pass or band-pass at 24 dB per octave, cutoff 150 Hz up to 10 kHz, Q 1.5 to 3, plus an optional saw or triangle with 5 to 7 voices detuned 10 to 15 cents rising 12 to 24 st. Accelerating curves: p(x) = p0 + (p1 - p0) * x^3. Level from -20 dB up to 0 across the riser. An LFO or roll that speeds up and deepens helps. High-pass about 150 Hz, no energy below 100 Hz. Reverb grows 30 to 70 percent.
- Length: 1 to 4 s in a short film, longer for music drops.
- Ending: the peak lands on the reveal frame. Cut abruptly, dip 3 to 6 dB just before, or leave 0.1 to 0.5 s of silence, then the impact. Use once or twice per film.

## Impact
- Search: impact, hit, boom, slam, logo hit, sub drop.
- Request: "a heavy cinematic impact with a short sub tail, 1 s".
- Parameters: layers. Transient: 2 to 10 ms noise burst above 1 to 2 kHz, 0 to -6 dB vs the body. Body: sine or triangle from 100 to 180 Hz falling to 45 to 70 Hz with a 30 to 80 ms pitch time constant. Sub: sine 30 to 60 Hz, falls 12 to 24 st over 200 to 400 ms, mono, no reverb, a parallel saturated copy under 200 to 400 Hz so phones can hear it. Tail: darkened 2 to 6 s reverb on body only. High-pass 25 Hz, limit at -1 dBTP.
- Contrast makes the slam: pull music and ambience back to near silence for 0.1 to 0.5 s before it.
- Level: the loudest cue in the mix. Only for the biggest moments.

## Typewriter and keys
- Search: keyboard typing, typewriter, keys, laptop keyboard.
- Request: "eight laptop key presses at 6 a second, soft".
- Parameters: one sound per visible character, never the same take twice, timing jitter +-15 to 25 percent, a longer gap before spaces and after punctuation. Human typing 3 to 7 characters per second (150 to 300 ms apart). Fast on-screen prompts 10 to 20 per second. Laptop keys: soft, no thock, bright 2 to 6 kHz, high-pass 120 to 200 Hz. Space and Enter slightly lower and louder. Pan by key position within +-20 percent.
- Level: about -12 dB from the loudest cue, quieter than the voice. Sync to the text animation start, not the clip start.

## Notification and success
- Search: notification, ding, chime, success, complete.
- Request: "a soft two note success chime, rising, 400 ms".
- Parameters: two quick rising notes a major third or fifth apart, under 500 ms. FM bell: carrier at the note, modulator ratio 1.4 (bell) or 3.5 (glassy), index from 3 to 8 down to 0.5 over 30 to 80 ms, amplitude decay 150 to 600 ms. Error: lower, falling, slightly detuned. Pitch between 150 Hz and 5 kHz. Tail under 0.6 s for frequent cues. Tune to the music key if there is one. High-pass about 120 Hz.
- Level: 10 to 15 dB under the music peak, on the frame the toast appears.

## Ambience
- Search: room tone, cafe ambience, rain, office, forest, city (add "loop").
- Request: "a quiet room tone, 20 seconds, seamless loop".
- Parameters: a continuous bed, 20 to 30 dB below the effects, filtered to sit away from voice (cut 1 to 4 kHz a few dB under dialogue). Seamless loop or a fade of 1 to 2 s on each end. No events that read as a cue.
- Level: about -24 dB relative to effects, constant through the film so cuts do not change the room. Fade out over the last 1 to 2 s.

## Cue density by film
- Explainer: clicks and typing on UI actions, a whoosh only on big moves, notification at the payoff.
- Launch film: sound from 0:00, riser into impact once or twice, ending lands at body level.
- Short vertical clip: fewer, brighter, a riser or whoosh on the hook and the cut to the payoff.
