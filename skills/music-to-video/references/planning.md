# Planning (Step 3): pick the brand, fill every frame

At Step 3 you turn the skeleton into a complete plan the creator approves. Pick the brand spine, then for each frame decide its groups, give each a treatment, bind real beat anchors and write the copy.

Your mantra: **music is the spine; a treatment is a head start, not a cage; typography is the floor and the creator's media is an optional ingredient on the same beat grid.**

You own WHAT (treatment, content, brand, anchor seconds, intent). The build step decides HOW (micro-timing, layout). Never write millisecond tweens into the plan.

## Inputs

- The skeleton from Step 2 and the beat map from Step 1 (read the real anchor seconds inside each frame's span).
- [`template-catalog.md`](template-catalog.md): the menu of treatments.
- [`motion-primitive-catalog.md`](motion-primitive-catalog.md): the free-compose menu.
- [`montage.md`](montage.md): how the creator's own clips and images join the beat grid.
- The creator's brief and any exact words to keep.

## Step A: pick the brand spine

The whole video shares one type family and one palette. Choose by the track's mood and the brief:

| Mood | Palette direction | Type direction |
|---|---|---|
| hype, aggressive | near black ground, one hot accent (red, acid yellow), white text | heavy condensed sans |
| elegant, cinematic | deep neutral ground, warm off-white text, one muted accent | high contrast serif for the hero word, clean sans for small text |
| playful | light ground, 3 saturated colors | rounded bold sans |
| dreamy, warm | soft gradient ground, cream text | light geometric sans or soft serif |
| glitch, tense | dark ground, cyan and magenta accents | monospace or wide grotesque |

Write down 4 to 6 hex colors and one or two font families, exact values. Verify that each font is installed in the layer runtime before you rely on it (see `subclip-hyperframes-layer`); if not, choose a verified font and say so. Every group's colors draw from this one palette: that unity is what makes different treatments read as one piece.

## Step B: per frame, decide its groups

A frame is usually one group. Split into 2 or more groups only when one treatment cannot cover the frame, for example a busy opener plus a closing lockup. Cut at a real anchor inside the frame (a key moment, a phrase edge, a gap between onset clusters), never inside a roll, and keep every group at least about one bar. Density does not force more groups: a dense frame is usually one group whose treatment absorbs the density. Group count tracks distinct treatments, not beats.

## Step C: per group, pick one of three treatments

- **A. Match a treatment** from the template catalog. Match the group's feel, mood and pacing to its "Reach for it when". Fill its params (your copy, palette from the brand spine, duration = the group length) and bind its roles to this group's real anchor seconds. If its natural stop and the group end disagree, snap to the nearest anchor.
- **B. Free-compose** when nothing fits: write one visual thesis (a dominant system, the named primitives, a density topology) plus the real anchor seconds the moves ride. This is a first-class choice.
- **C. Asset treatment** only when the creator supplied media and it fits. Obey pacing: on a `beat_cut` frame use beat_cut or bg_under_text; on a `phrase_flow` frame use ken_burns or a slow crossfade, never per-onset cuts. If no media fits a group, fall back to A or B. A complete video needs no media at all.

## Copy

- Keep the creator's exact words; otherwise write with taste for the brief's mood.
- Message versus texture: a readable word holds at least one beat (headline 3 to 8 words, sentence 4 to 10); a word held for less than a beat is texture (strobe, grid, ticks). Never force a message onto a sub-beat: demote it to texture.
- Place copy into the treatment's text params, onto a free group's anchors, or as an asset group's overlay text.
- A closing logo or call to action lands on the final hit or hard stop and holds through trailing silence.

## Transitions

Everything is a 0 ms hard cut between frames and between groups. Adjacent spans already imply the cut.

## Plan shape

For each frame record: span, pacing, mood, feel, and its groups. For each group record: span (track seconds), the kind (treatment id with params and bound anchors, or free design with primitives and anchors, or asset treatment with clips and anchors), and the copy. Save the whole plan with `update_project_director_brief`, show the creator a frame-by-frame summary and iterate until approved.

## Self-check

- Palette and fonts are exact values from one spine.
- Every frame has at least one group; groups tile the frame span in order; none shorter than about a bar; no boundary inside a roll.
- Each group is exactly one of treatment, free design or asset.
- Params match the catalog entry; anchors are real beat-map seconds.
- Asset treatments obey pacing.
- Span totals equal the track duration.
