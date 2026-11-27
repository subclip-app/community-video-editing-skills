# Finding moments and writing opening headings

This is the method NeonClipping uses, described in our own words and mapped to what an agent can do in Subclip. No code is copied.

## 1. Look at the cheap signals first

NeonClipping never studies a whole long stream frame by frame. It reads the words and the sound first, keeps a short list, and only then looks closely. Do the same.

| Signal | What it means | How to read it in Subclip |
| --- | --- | --- |
| Loudness jump | A sudden boom, shout or scream compared with the last two minutes, not just a loud game | `get_audio_timeline_sheet` on the source item, 300 s windows: look for short-term loudness that jumps well above its own surroundings |
| Raised voice | Screaming, yelling, a hard laugh | Transcript tags such as `[screaming]`, `[laughter]`, `[gasps]`, words written in capitals by the caption track, and spectrogram energy in the upper voice band on the same sheet |
| What is said | Reaction words: "oh my god", "no no no", "run", "what just happened", "I'm dead", "they killed me", in Hindi or Hinglish "bhaago", "arre yaar" | Search the transcript |
| On-screen action | Fast motion, a flash, a jump scare, a scene cut, a death screen | `get_media_context` with `inspectAtSeconds` (at most six moments per call) on the shortlisted times |
| Chat spike (live) | Chat reacts a few seconds after the moment | Only when the creator supplies a chat log with times. Start the clip about 20 to 25 s before the spike |

Shortlist about twice as many moments as the creator asked for (four times as many in a slow, careful pass).

## 2. Judge each shortlisted moment

Read the transcript of each candidate, plus about 15 s before and after it. Loudness and fast motion are not quality by themselves: a quiet funny exchange, a reversal, an honest opinion or a complete little story can beat a scream. Penalise filler, sponsor reads, repetition, shouting with no payoff, and thoughts that are not finished.

Give each candidate:

- `score` 1 to 10, plus four parts 1 to 10: hook, engagement, value, shareability
- `kind`: action, reaction, humour, story, opinion, insight or other
- a short title (at most 7 words) and an opening heading (rules below)
- `evidence`: a short exact quote from the clip that supports the heading
- 3 to 6 punch words that are really spoken in the clip (for caption emphasis)
- 5 hashtags and a one or two sentence post description, if the creator wants post copy

Then compare the candidates with each other, because each was scored alone. Order them by how likely a stranger is to keep watching and share. Drop overlapping moments and moments that repeat the same beat.

**Moment mix.** Balanced (default) mixes energy and story. Action favours loudness, motion and reaction. Dialogue favours story, humour and insight.

**Game hint.** Read the game from the video title or category (GTA, Fortnite, Valorant, Minecraft, BGMI, Phasmophobia and so on). It tells you what a good moment looks like in that game and which hashtags people search. It is a hint for copy, never a filter.

## 3. Snap the edges

- **Start where the speech starts.** If the first word comes more than about 2.5 s after the planned start, move the start to 0.4 s before that word.
- **End on a finished thought.** A sentence ends after a word with `.`, `?` or `!`, or after a word that is not a connector ("and", "so", "but", "the", "because", "matlab", "ki", "aur") followed by a pause of about 0.5 s. Extend the end to the next sentence end, up to 8 s later, within the maximum length. If that is too far, pull back to the previous sentence end when that keeps at least 70% of the clip. Never end on a connector.
- Leave a short breath after the last word, but stop before the next word starts.
- Stay inside the creator's minimum and maximum length (default 30 to 80 s).

## 4. Write the opening heading

The heading is the first thing a scrolling viewer reads, shown over the clip for the first 8 s by default (2 to 60 s allowed).

Rules:

- 4 to 9 words. One key word in capitals. End with `?!` when it fits.
- Use a concrete noun that is actually in the clip. Replace a vague "they", "this" or "it" with what it is.
- Pick the shape that fits this moment: a curiosity gap, a bold framing of the speaker's real opinion, a mistake warning, a secret, a shocked reaction, a before and after, or a challenge question.
- Never invent events, numbers, money, people or accusations. Every number in the heading must be in the transcript.
- No bland lines: "Watch this", "You won't believe this", "Epic moment", "Interesting clip".
- Same language as the clip. A Hindi clip is written in Roman letters (Hinglish), with English words spelled in English.
- Keep a short exact quote as evidence. If you cannot support a heading with a quote, fall back to the strongest real sentence from the clip (one with a turn such as "but", "instead", "finally", "the whole time"), cut to at most 9 words.

Tone examples only, never transfer their facts: "The keys were in his pocket?!", "Wait, this jet has an ejection seat?!", "Why removing sound made this cut stronger".

## 5. Heading looks

| Look | Native text settings |
| --- | --- |
| Box (black backing) | White, bold, uppercase, on a black rounded box at about 85 to 90% opacity. Use it on bright gameplay and on every facecam layout |
| Impact (NeonClipping's default) | Big bold uppercase white text with a thick black outline and a soft shadow, one accent word in yellow, a short pink bar under it |
| Neon | White text with a cyan outline and a pink glow, accent word lime |
| Banner | White text with a black outline on a wide pink rounded bar |

One accent word needs a second text item or per-word colour; if neither is practical, keep the heading in one colour. A 0.3 s fade in and out is optional.
