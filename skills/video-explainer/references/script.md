# Script and plan

The source skill keeps its plan in a `script.md` file. In Subclip, keep the same plan in the director brief (`update_project_director_brief`) so the next session can pick it up.

## Plan shape

```markdown
# how-card-payments-work

Mode: motion            (motion | illustrated | 3d)
Aspect: 16:9            (16:9 | 9:16 | 1:1)
Audience: general       (general | eli5 | technical)
Max duration: 120
Voice: local jean       (local <voice id> | cloud <voice id> | none)
Captions: auto          (auto = on when voiced, off when silent; on | off)
Music: CC0 loop         (CC0 loop | generated | <imported file> | none)
Sound effects: on       (on | subtle | off)
Style: default          (default | paper | blueprint, see below)

## Narration
- s01: You tap your card for a four dollar coffee. Two seconds later, the screen says approved.
- s02: In those two seconds, your tap makes a round trip. The terminal encrypts your card details and sends them to the shop's bank.

## Scenes
| id | start | end | visual | note |
|---|---|---|---|---|
| s01 | 0.3 | 4.7 | layer A | card tap, $4 coffee, 2 seconds, Approved stamp |
| s02 | 5.5 | 11.7 | layer A | rewind clock, route appears, packet encrypts and flies |

## Sound
- @s01:approved: ding 0.5
- @s02+0.10: whoosh 0.5

## Caption fixes
- car -> card
```

Fill `start` and `end` from the imported narration items, then refine every cue from the word timings that `transcribe_project` writes.

## Word budget

| Target | Words | Scenes |
|---|---|---|
| Default 60 to 75 s | 135 to 185 | 5 to 8 |
| ELI5 45 to 60 s | 100 to 150 | 4 to 6 |
| No voice | 8 to 12 beats of on-screen text | 8 to 12 |
| Hard cap 120 s | about 260 | up to 10 |
| Any other length | about 2.5 words per second | one scene per 8 to 12 s |

Local voices speak faster than 2.5 words per second. Measure the real clip lengths after voicing and add short pauses between scenes rather than padding the text.

## Audience levels

- **general (default):** a smart adult who is not an engineer. Plain English, concrete mental models, everyday cause and effect. No raw file paths, function or variable names, error codes, command flags or unexplained acronyms, in speech or on screen.
- **eli5:** physical metaphors, zero jargon, shorter film.
- **technical:** architecture names, protocols and tradeoffs are fine. Still one example end to end.

## Story rules

1. **Hook in 3 seconds.** A concrete question, tension or number that reads with the sound off. Show the end state early if it makes the question sharper (the reference film shows "Approved" first, then rewinds the clock).
2. **One example traced end to end.** One request, one dollar, one star, one user. Name it once and keep it on screen as the thing that moves.
3. **Close the loop.** The last scene answers the opening question in plain words.
4. **Verify.** Every claim, number, quote and step comes from the creator's files or a primary source. Soften or cut anything you cannot verify.

## Clean spoken copy

- No throat-clearing ("In this video", "Let's dive in", "Have you ever wondered").
- No binary contrasts ("It's not X, it's Y").
- No colon reveals ("The answer: speed").
- No hype adjectives ("incredible", "game-changing", "revolutionary").
- Short sentences, active verbs, numbers written so they are easy to say.

## Styles

The source ships three themes. Use them as palettes for the layers and captions:

| Style | Background | Surface | Text | Accent |
|---|---|---|---|---|
| default | #0B0B0D | #15161B | #F8FAFC | #3B82F6 |
| paper | #FAF8F4 | #FFFFFF | #18181B | #2563EB |
| blueprint | #0B1220 | #111C30 | #F0F9FF | #38BDF8 |

Shared semantic colors: good #10B981, warn #F59E0B, danger #EF4444, muted #94A3B8. The source uses the Inter typeface; in Subclip layers use a system UI stack unless a font has been verified in the layer runtime (see `subclip-hyperframes-layer`).
