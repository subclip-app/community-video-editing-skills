# Script, scene plan, edit grammar and checks

## Topic and angle

If the creator has no idea, offer to find one: search what is trending now (two or three queries) and turn each hot anchor into a story with a secret: a myth everyone believes, a documented "actually" angle, and strong physical or visual potential. Offer the top three as a numbered list, one line each (topic, why it is hot, the hidden angle). Never pick for them.

If they give a topic, it still goes through the angle formula: find the surprising "actually" inside it. State the angle in one sentence: everyone believes X, but [historians, engineers, scientists] now think Y, and the real mechanism is Z. The angle must flip the familiar story, not retell it.

Settings, with defaults the creator can accept in one word:

| Setting | Default | Options |
|---|---|---|
| Length | 30 s | 20 to 60 s; every 10 s is one block |
| Aspect | 9:16 | 9:16 vertical or 16:9 landscape |
| Edit | full | full (zoom-ins and shakes), zooms only, clean (none) |

## Research first, never narrate it

Search the topic and cross-check every claim against two sources; keep a sources list for the final message (never in the video). Mechanisms must be true claims someone really holds. "Others think" is the honesty valve. Never invent a number.

## The 5 beat script (the curiosity loop)

The growth engine is the script: the first line opens a question the viewer needs closed and the last line closes it with a reframe. About 2.7 words per second, so 30 s is roughly 75 to 85 words.

| Beat | Share | Job | Pattern |
|---|---|---|---|
| 1 Myth | about 30% | state the belief as fact, with a time-scale hook | "For 3,000 years we have been told..." |
| 2 Twist | about 12% | snap the rug: authority plus negation | "But historians now think no such X existed." |
| 3 Mechanism A | about 22% | the first real explanation, physical, visual, specific | "To break down gates, armies used..." |
| 4 Mechanism B | about 22% | the second explanation, stranger or bigger | "Others think the X was actually..." |
| 5 Kicker | about 14% | close the loop by reframing beat 1 with both mechanisms in one image | "So X may have fallen to A, or to B." |

Writing rules: every sentence must be filmable (if you cannot storyboard it in three shots, rewrite it; "armies used battering rams covered in wet hide" works, "siege warfare evolved" does not). Numbers beat adjectives, with one number in beat 1. Authority phrases carry the twist ("historians now think", "engineers found", "footage shows"). Cold open: no greeting, no meta, no "let's find out". Facts defensible with two or more sources.

Rewrite pass before showing it: read at 2.7 words a second and cut hedges first, then merge clauses; replace each abstract noun with a physical one; check that the last line answers the exact question the first line raised (fix the kicker, not the hook); check that a viewer can tell who does what without names beyond famous ones ("the Greeks", "armies", "others").

## Block math and shot list

N = length divided by 10, rounded up. The narration is one continuous take laid over the whole video, so a beat may span a block boundary. House pacing: 6 to 9 hard cuts per 10 s block (about 1.0 to 1.6 s a shot), never fewer than 5, never a shot over 2.5 s except a final hold of about 2 s.

Shot line format: `[t0 to t1] SIZE/ANGLE, subject and action, annotation, assets`. Rules: vary size and angle on each cut (wide, medium, close-up, macro, wide); each shot names its roster assets, and anything not in the roster is described inline; at most one annotation per shot; schedule the signature shots (macro eyes in the myth and twist zone, one gag beat, a whip-in on shot 1); damage states only progress (intact, cracked, breached) and never revert.

## Block prompt template (one generation per block)

```
<style formula, unchanged>

Vertical 9:16 3D animated sequence, 10 s, 6 to 9 HARD CUTS exactly as timed:
SHOT 1 [0.0-1.0] <size and angle>: <subject, action, materials>. <annotation direction>. HARD CUT.
SHOT 2 [1.0-2.5] ... HARD CUT.
...
SHOT K [8.6-10.0] ...

Characters only emote and gesture, they do not talk, no lip sync, no dialogue.
Scene sound effects only (creaks, impacts, wind), no music, no voices.
Continuity: characters, costumes, objects and lighting exactly as in the reference images; the same light and sky in every shot.
NEGATIVE: photorealism, 2D flatness, cartoon outlines, on-screen text, words, letters, numbers, captions, watermark, UI, extra characters, style drift, a frozen first frame.
```

Reference images, in order: environment sheet, then character sheet or sheets, then the prop sheet. Maximum 3 per block; choose the assets the block shows most. If a block collapses into one long shot, regenerate once with the cut count in the first line and "HARD CUT" emphasized after every shot.

## Narrator

Offer three narrator characters and let the creator hear a line from each: a deep US male with calm documentary authority, a British male who is serious and measured, a clear warm US female. In Subclip use `get_voice_samples`, then `set_approved_voice`, or `generate_local_speech` for a free test. The brief gate shows the angle, the five script lines labelled by beat, one compact table per block, and the asset roster, and ends with "All good, or change anything?". Loop until approved.

## Edit grammar

The blocks already carry camera energy; the edit adds punctuation.

- Punch: a quick zoom from 1.00 to about 1.08 over about 0.4 s, ease out, at the moment a reveal lands (annotation appears, twist word, kicker image). 3 to 6 per video. Anchor each to the shot that carries the reveal (shot start plus block offset); a punch that belongs to a spoken word uses that word's timestamp from the transcript.
- Shake: about plus or minus 1 percent jitter for about 0.3 s at every block boundary and on impact beats (ram hits, wall collapse).
- Never stack a punch and a shake on one instant. Shake wins on impacts, punch wins on reveals.
- Trim the video to the narration end plus about 0.4 s. Do not freeze frames.
- Narration target: N times 10 minus 1.5 s. If it is more than 2 s off, nudge the speaking rate (plus or minus 5%, at most 10%), then shorten or lengthen the line that overflows and re-voice. Never time-stretch audio. Narration must be no longer than N times 10 s.
- Mix: narration at full level from t=0, block sound effects ducked under speech, final loudness around -16 LUFS.
- Edit modes: full means punches and shakes, zooms means punches only, clean means none.

## Failure handling

- A sheet or block is refused or fails: retry the same prompt twice; then soften violence words (battle becomes clash, blood becomes dust) and drop tight close-ups of distressed faces; then reframe the beat with a different size or staging. Never drop a block or leave a gap.
- An environment plate shows the style key's subject or people: the bleed guard was missing; regenerate with it.
- A character drifted (wrong costume or colors): the sheet was not attached or was not first in order; fix and regenerate that block.
- Blocks come back misnamed or missing: verify the count and sort obvious variants; ask only when a pairing is truly ambiguous. A completed block is final unless it fails a named check (style drift against sheets, wrong aspect, collapsed cuts), in which case regenerate that one block.

## Final checklist

- One finished video at the target size, narration in sync, no dead air over 1 s.
- Every recurring element looks identical across blocks.
- Green marks reveals, red marks danger or physics; no on-screen words anywhere.
- At least one macro eye or detail shot, at least one gag beat, and the kicker closes the loop.
- Zoom-ins on reveals and shakes on impacts and boundaries (unless clean).
- No brand or franchise names; characters never lip sync.
- Final message shows the video and lists the sources behind the facts.

## Worked shape (quality bar, not a template)

The reference short busted the Trojan horse story in 28.5 seconds: myth line (5.8 s), twist (3.4 s), mechanism A (a wet-hide battering ram that torches cannot burn), mechanism B (an earthquake blamed on the sea god), kicker (a log dressed as a horse, or the ground itself). It used about 10 sheets, three blocks of 8 to 10 cuts each, five punches and five shakes. Lessons it recorded: the key image's subject leaked into both location plates until the empty-plate wording was added, and platform presets that push a photoreal or "3D render" look should be declined.
