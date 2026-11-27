# Review rubric: a jury pass, then one more round

The original films were made this way: make, independent review, revise from the review, review again. Use these two prompts. The review works best in a separate session or subagent that did not build the film; if none is available, run it yourself and be strict. The original jury scores ran from 7.57 to 8.21 out of 10.

## Step 1: review

Give the reviewer the project ID (or the exported video path) and the style prompt (at least its Style, Output and Signature features sections).

```text
You are a senior motion-design jury member (think: Motionographer editor, Buck or ManvsMachine creative director, a top
Douyin or Bilibili design account lead for the Chinese styles). You did NOT make this film. Judge it harshly and precisely
so it can reach award-level or high-end commercial quality. Kindness is useless here; specificity is everything.

The film: <Subclip project ID, or the path of the exported video>. The prompt it was made from: <paste the style prompt, or
at least its Style, Output and Signature features sections>.

1. Look at the film properly: a contact sheet with a frame every 0.5 s (get_timeline_contact_sheet with from, to and
   every: 0.5), filmstrips around the fastest and most important moves and the hero moment (every: 0.033 over that
   range), and full-resolution frames at 5 to 8 key times (view_current_frame or view_frame at width 1920). Look at small
   details at full resolution: edges, type setting, aliasing, banding, texture, clipping.
2. Check the spec: exact duration, resolution and frame rate as specified, audio present, music peaks at or under -1 dB,
   no black frames except intended, no unintended static spans, visual hits aligned with audio onsets
   (get_audio_timeline_sheet helps).
3. Score 1 to 10 on each dimension (5 = competent student work; 6 = decent template level; 7 = solid professional;
   8 = high-end agency work; 9 = award shortlist; 10 = best in the world). Most first renders deserve 5 to 7. Do not
   inflate.
   - style_fidelity: instantly recognizable canonical form; every signature feature and technique present and correct
   - concept_wow: a clear idea, a hook in the first 0.5 s, an unmistakable hero moment, a satisfying end frame
   - motion_craft: easing, spacing, overlap, anticipation and follow-through, arcs, transitions, motion blur; no dead or
     jittery motion
   - design_typography: composition, hierarchy, grid, type setting (CJK too), palette, negative space
   - finish_texture: lighting, texture, grain, glow and detail appropriate to the style; no banding, aliasing or artifacts
   - sound_sync: musicality, genre-correctness, sound design, sync to picture, mix
   - technical: spec compliance, fonts loaded, no glitches, clipping or popping
4. Give 5 to 10 fixes ordered by impact on the final impression. Each: timecode(s), what is wrong (observable), why it
   matters, and a concrete how-to (technique and numbers: easing curve, frame counts, px, colors, font, layout change).
   Prefer a few big upgrades over many nitpicks. At least one fix must raise the wow factor, not just polish.
5. Flag as critical: anything that reads as generic or AI template, unnatural copy in any language, fallback fonts or
   missing glyphs, and any spec failure.
Return: the score table, the critical issues, and the fix list.
```

## Step 2: revise

Back in the session that built the film, paste the review in:

```text
An independent jury reviewed your film. Here is the full review:
<paste the review>

Raise the film to award level (target 9 or more in every dimension):
- First keep the current state as version N (note the project revision, or clone_project for a safe copy).
- Implement every critical issue and every high-impact fix. You may substitute a better solution for a listed fix if you
  are confident; say why. Go beyond the list where you see a bigger upgrade, especially for the wow factor. Do not
  regress anything the jury listed as a strength.
- Revise the same layers in place (read_layer_source and edit_layer_source), re-check the spec and look at the frames
  until the fixes have truly landed.
- Report which fixes you applied or skipped, and why.
```

The original films went through make, review, revise twice. Offer the creator the same loop; each round costs no credits on the code route.
