# Frame skeleton (Step 2): lay out the frames

At Step 2 you read the beat map and write the **skeleton** of the plan: cut the track into **frames** (one frame = one scene = one layer or one native clip run), and for each frame set its **span**, its **pacing** (hard beat-cuts, or calm phrase and energy flow), its **mood** and a one-line **feel** note.

You classify and lay out the spine only. You do not pick treatments, write copy or choose colors and fonts. Those are Step 3. Write the skeleton into the director brief (`update_project_director_brief`).

## How to lay out frames (run in order)

1. **Gestalt.** From the tempo, the duration and the roll count, write a one-line read of the track's density arc.
2. **Cut into frames.** Walk the energy phases and split where the music genuinely changes state: at hard stops, surge or drop key moments, the start or end of a roll, an onset desert (a long gap with no hits) or a big energy jump. Collapse adjacent phases that are one gesture. Expect about 1 to 6 frames. Snap every boundary to a beat-map anchor, and to the nearest beat (within half a beat) only when the grid is reliable; on calm material snap to phrase or energy edges. Frames tile the track: first at 0, last at the duration, no gaps or overlaps.
3. **Set `pacing` per frame:**
   - `beat_cut`: genuinely rhythmic. A roll is present, or the section is dense, or onset rate is clearly high and the grid is steady. Hard cuts and per-onset reveals may anchor to beats.
   - `phrase_flow`: calm and sparse. Few or no rolls, mostly sparse, low onset rate. Do not anchor hard cuts to the grid. Pace by phrases and the energy envelope (slow crossfades, long holds).
4. **Set `mood`:** 1 to 3 of warm, dark, hype, elegant, glitch, cinematic, playful, tense, dreamy, aggressive, from the energy feel and any genre cue in the brief.
5. **Write `feel`:** the plain music situation in one line, drawn from the robust fields. Examples: "accelerating onset stream into a held downbeat", "calm held pad, one onset desert", "fast sustained fill roll, no readable message". Step 3 matches treatments against it.

## Skeleton shape

```
duration_s: 30.0          (exactly the track length)
canvas: 1920 x 1080, 30 fps (or the creator's ratio)
style: (blank until Step 3)

Frame 1 - f1
  span_sec: [0.0, 7.198]
  pacing: beat_cut
  mood: [hype]
  feel: accelerating onset stream building into a held downbeat
  groups: TBD (Step 3)

Frame 2 - f2
  span_sec: [7.198, 17.598]
  pacing: phrase_flow
  mood: [warm, cinematic]
  feel: calm held pad, one long onset desert
  groups: TBD (Step 3)
```

## Self-check

- Frame spans add up to the exact track duration, with no gaps.
- Every frame has a span, pacing, mood and feel.
- `pacing` came from the robust fields (energy, density, rolls, onset rate), never from the tempo number alone.
- No frame boundary sits inside a roll or leaves a fragment shorter than one bar.
- Every frame's groups are still TBD and the style is blank. No treatment, copy, color or font anywhere yet.
