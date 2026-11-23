# Block prompt pattern

Use this shape for each 10 second block. Replace the angle brackets with real content.

```
<style key line>

0-3s: <subject and action>. Camera: <move>. Light: <note>.
3-6s: <subject and action>. Camera: <move>. Light: <note>.
6-10s: <subject and action>. Camera: <move>. Light: <note>.

Sound: <room tone, impacts, music bed>. No spoken voice.
```

## Rules of thumb

- Prefer the hard-cut template in `script-and-plan.md` (6 to 9 cuts per block) over three long beats; the three-beat layout above is only the fallback when a model ignores cut counts.
- One clear action per shot. Two actions in one shot is where models drift.
- Name every attached sheet in the prompt by what it shows, in the order attached (environment, character, prop; at most 3), so the model knows which is which.
- Block 1 carries the myth and the twist; block 2 the first mechanism; block 3 the second mechanism and the kicker in its last 2 seconds.
- The first block should make the myth feel believable and a little ordinary. The flip works better against a calm setup.
- If two blocks share a location, attach the same location sheet to both. After a wall breaks, use the damaged-state sheet in later blocks.

## Beat map for the narration

| Beat | Block | Seconds | Job |
|---|---|---|---|
| Myth | 1 | 0 to 6 | State the belief while the picture agrees with it |
| Twist | 1 | 6 to 9 | One sentence, one visual break |
| Mechanism A | 2 | 9 to 16 | Show the first true cause in motion |
| Mechanism B | 2 to 3 | 16 to 22 | A stranger, bigger second cause |
| Kicker | 3 | 22 to 28 | One line that closes the loop and reframes the myth |
