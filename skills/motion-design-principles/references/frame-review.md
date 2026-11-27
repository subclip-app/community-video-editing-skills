# Frame review checklist

Saved state and a successful tool call are not visual proof. Motion is judged in frames. Run this review after every coherent motion edit, on the exact project ID.

## 1. Find the key poses

For each move, write down the times of its poses before looking:

| Pose | Where it is |
| --- | --- |
| Start | The first frame of the move |
| Anticipation extreme | The furthest point of the wind-up, just before the main move |
| Passing position | The middle of the main move (fastest point on an ease-in-out) |
| Contact or impact | The frame the object lands or hits |
| Squash or overshoot peak | 1 to 3 frames after contact |
| Settle | The frame the object stops for good |
| Follow-through end | The frame the last trailing part stops |

## 2. Look at the poses

- `view_current_frame` at each key pose for the exact full-size result. Name the layer type and item when one layer is under review.
- `view_frame` with several `times` for quick checks while iterating.
- `get_timeline_contact_sheet` with `from`, `to` and `every: 0.033` (one tile per frame at 30 fps) across one move to read its spacing like an onion skin. Close spacing at both ends means slow in and slow out. Even spacing means linear.
- `get_timeline_contact_sheet` with `every: 1` over the whole piece for pacing, the attention budget and the 1/3 rules.

## 3. Check each pose against the rules

| Check | Pass when |
| --- | --- |
| Slow in and slow out | Spacing is tight near start and end; no even spacing on spatial moves |
| Squash and stretch | Contact frame is visibly wider and flatter; the fall is taller and narrower; the volume looks the same |
| Anticipation | The wind-up goes the opposite way, 10 to 20 percent of the move, and is readable for at least 3 frames |
| Arcs | The passing positions trace a curve, not a ruler line (unless the look is deliberately mechanical) |
| Follow-through and overlap | Trailing parts stop 2 to 5 frames after the body and settle with a small overshoot |
| Staging | In every frame one element is clearly the hero; others are dimmer, smaller or still |
| Timing | The move lasts the frames the duration table gives for its element type and distance |
| Exaggeration | Overshoot fits the chosen personality (0 percent Premium, up to 25 percent Playful) |
| Layers | A primary action, a secondary reaction (shadow, related part) and quiet ambient life are all present |
| 1/3 rules | No single unbroken move crosses more than a third of the frame; at most a third of the elements move at once |
| Text | Every label is inside its panel, readable for long enough, and not clipped in exported frames |

## 4. Check the export

- Look at exported frames too: the first two frames, every key pose of the hero beat, and the last frame.
- Ambient loops must not jump at layer boundaries: compare the last frame of one layer with the first frame of the next.
- Listen to the result where possible: hits and whooshes should land on contact frames, not a frame early.

## 5. Record it

Write what was checked, at which times, and anything that failed with `update_project_director_brief` and `write_session_summary`. Never claim a frame check that was not done.
