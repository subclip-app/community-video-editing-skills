# Polish checklist on rendered frames

Adapted from the transitions.dev polish method (match on usage, open and close asymmetry, hover in and out, stagger and delay) and turned into checks you run on frames in Subclip. Saved source and a successful tool call are not proof; only rendered frames are.

## 1. Read the motion values

For each layer, `read_layer_source` and list every duration, easing, distance, scale and delay with the UI moment it belongs to. Write one line each: `modal close: 300 ms, should be 150 ms (quick)`. Use `references/motion-tokens.md`. Values whose usage matches no token stay as they are.

Fix with `edit_layer_source` (pass the source hash). Change only the motion values.

## 2. Whole-film sheet

`get_timeline_contact_sheet` with `from: 0`, `to: <duration>`, `every: 1`, `detail: "balanced"`.

- No empty frame, no frame where two states of the same element are fully visible together.
- Every label sits clear of the UI it names and is readable at thumbnail size.
- Camera holds while a transition plays; it never moves during one.
- Busy and still alternate: at least 0.5 s of hold after each transition so the viewer sees the result.

## 3. Transition sheets

For each transition at time T with duration D, one sheet with `times`: T minus one frame, T plus D/3, T plus D/2, T plus D, T plus D plus two frames.

- The first moving frame starts from the documented pre state (scale 0.96 for a modal, 0.97 for a dropdown, 16 px down for a toast).
- The middle frames show the surface partly in: if a mid frame already looks settled, the duration is too short for the frame rate; if three frames still look half open, it is too long.
- The settled frame is exactly the rest state (scale 1, no offset); nothing drifts afterwards.
- Dropdowns grow from their trigger corner; modals from their centre.

## 4. Pairs and rhythm

- Close quicker than open (dropdown and modal 250 in, 150 out; panel 400 in, 350 out; toast 350 in, 250 out). Symmetric pairs stay symmetric: tabs, page slide, accordion, icon swap, text swap.
- Overshoot only on entrances. Never bounce a close.
- Stagger 40 ms per item and under about 300 ms in total.
- No delay on a close or a hover-out. A delay is only for intent (tooltip 80 ms) or sequencing.
- Two transitions never fight over one element in the same frames: close the dropdown, then filter the list.

## 5. Full-size checks

`view_current_frame` at the settled state of every transition and at each segment cut (last frame of A, first frame of B).

- Text is crisp and complete (no blur filter on any text-bearing element; exports drop such text).
- Nothing is clipped by the window, the camera or the frame edge.
- The cut between segments matches: same rows, same camera, same label.

## 6. After export

Look at the exported file at 1 s intervals, including its first two frames. Measure audio peaks (keep them under -1 dB). Report what you saw and what you only measured.
