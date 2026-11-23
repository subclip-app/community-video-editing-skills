---
name: review-animations
description: Review the motion in a Subclip project, a time range or a single item against a high craft bar and return a findings table and a verdict. Default to flagging; approval is earned. Use when asked to review, critique, check or sign off animation, keyframes, text motion, transitions or motion layers.
---

# Review animations

Review motion in a Subclip project against a strict bar. This skill reviews; it does not build features or fix unrelated problems. For general video review (pacing, audio, story) use the project's other review skills.

Posture: a brutal eye for craft. Motion that merely runs is not good enough: a move that is sluggish, comes from nowhere, repeats too often or breaks the export is a regression. Default to flagging. Approval is earned.

The rule catalog with exact values: [STANDARDS.md](STANDARDS.md). Read it before the verdict and take every recommended value from it. Shared tokens: [../references/video-motion-values.md](../references/video-motion-values.md).

## How to review

1. `get_project_outline`, `read_project_section` for the items and keyframes in scope, `list_editor_assets` for IDs. For layers, `read_layer_source`.
2. See it: `get_timeline_contact_sheet` over the range, then `view_current_frame` at the start, middle and end of each move and at its hold. Keyframe numbers alone are not proof.
3. Measure each animation against the eight standards below. Record item, time and evidence.
4. Write the output. Do not edit anything.

## The eight standards

1. **Justified motion.** Every move answers "why does this move?": cue, spatial, state, bridge, explain, or delight. "It looks cool" on a repeating element is a block.
2. **Frequency-appropriate.** The more often the same motion repeats in one video, the shorter and subtler it must be. Many times: near-imperceptible or none. A few times: standard. Once or twice: delight allowed.
3. **Responsive easing.** Entrances and exits use ease-out or a strong custom curve. Ease-in on an entrance is a block. The weak built-in ease on a hero move is a finding.
4. **Duration.** Within the budget for its role in the values reference. Exits shorter than entrances. A small element that takes over 0.5 s to arrive is a finding.
5. **Physical correctness.** Never scale from 0 (start 0.90 to 0.97 with opacity). Callouts grow from the point they label. Enter and exit along the same path. Bounce only with momentum, and never on text that must be read.
6. **Continuity.** Moves that overlap must not restart or snap back; a new move starts from the current value. Matched positions across cuts. No jump at the first or last frame of a move.
7. **Cheap and export-safe.** Position, scale, rotation and opacity by default. No filter or backdrop blur on text. Deterministic layers (no unseeded random, no real-time clock). Heavy blur or huge shadows are findings. Footage lives in native lanes.
8. **Cohesion.** Motion matches the project's personality and its own earlier choices. A crisp tutorial stays crisp; a playful short may bounce. Mixed styles of entrance in one video are a finding. A calm option exists if asked for.

## Escalate on sight

- Ease-in entrance. Scale from 0.
- The same flashy move on every caption or every cut.
- Motion on data the viewer must read.
- Text blur or filter in a layer (export risk).
- An element that is invisible, off-screen or mid-move on its first or last frame by accident.
- Entrance over 0.5 s on a small repeating element.
- Everything entering at once where a 30 to 80 ms stagger belongs.
- A transition on every cut.

## Fix preference

Prefer earlier moves: 1) delete it, 2) reduce it (shorter, smaller, fewer properties), 3) fix the easing, 4) fix the origin and physicality, 5) stop restarts, 6) make it cheap and export-safe, 7) asymmetric timing (slow where the viewer takes it in, snappy where the system answers), 8) polish (stagger, blur seam, spring), 9) cohesion and calm option.

## Required output

Part 1, findings table, one row per issue, never a before and after list:

| Item and time | Before | After | Why |
| --- | --- | --- | --- |
| Title, 0:03 | ease-in, 0.8 s, from scale 0 | strong ease-out, 0.4 s, from 0.95 with opacity | Ease-in delays the moment the viewer looks; nothing appears from nothing |

Part 2, verdict, grouped by impact, highest first, omit empty groups: feel-breaking regressions; missed simplifications; export and cost; continuity and timing; origin, physicality and cohesion; calm option.

Close with **Block** (any feel-breaking regression, motion that should be deleted, ease-in or scale from 0 on a shown element, or an export risk with an easy fix) or **Approve** (none of those, durations and easing inside the bounds, restarts handled). Cite the item ID and time for every finding. Say what only playback can judge.

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
