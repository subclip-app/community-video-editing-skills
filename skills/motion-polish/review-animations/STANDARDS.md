# Animation standards for video

Exact values for reviews. Curves and principles come from Emil Kowalski's design engineering work; durations and native mapping are the Subclip adaptation. See also `../../references/video-motion-values.md` in the pack root.

## Should it move?

| How often it repeats in the video | Decision |
| --- | --- |
| Many times (every caption, row, lower third) | Near-imperceptible, or none |
| A few times (section titles, callouts) | Standard motion |
| Once or twice (hook, reveal, ending) | Delight allowed |

Valid purposes: cue, spatial, state, bridge, explain, delight (rare tier only).

## Easing

- Entering or exiting: ease-out (default).
- Moving or morphing on screen: ease-in-out.
- Constant motion (progress, marquee, credits): linear.
- Never ease-in on an entrance.
- Strong curves: `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out), `cubic-bezier(0.77, 0, 0.175, 1)` (ease-in-out), `cubic-bezier(0.32, 0.72, 0, 1)` (drawer). Find others at easing.dev or easings.co; do not invent them.
- Native keyframes offer only `linear`, `ease-in`, `ease-out`, `ease-in-out`. Strong curves come from sampled keyframes, CSS in `add_html_motion_graphic`, or a layer.

## Duration (30 fps)

| Element | Seconds |
| --- | --- |
| Word or caption pop | 0.12 to 0.25 |
| Small label, icon, badge | 0.20 to 0.30 |
| Lower third or title in | 0.30 to 0.50 |
| Same element out | 0.20 to 0.30 |
| Transition between clips | 0.25 to 0.50 |
| Scene change | 0.40 to 0.70 |
| Hero reveal | 0.60 to 1.00 |

## Physicality

- Scale from 0.90 to 0.97 with opacity 0, never from 0.
- Pivot at the anchor: a callout grows from the point it labels.
- Same path in and out.
- Bounce 0.1 to 0.3 and only when the object carries momentum. No overshoot on text the viewer must read.
- Percent moves survive size changes better than pixels.

## Continuity

- A new move that overlaps an old one starts from the current value. No snap to the start.
- No stray start state: the first frame of a move must be intentional (opacity 0 is correct only if the element enters).
- The last keyframe holds. Do not add a duplicate final keyframe.
- Matched position and scale across a cut when the same subject continues.

## Cost and export safety

- Cheap: position, scale, rotation, opacity.
- Short bursts only: blur (under 20 px, ideally 2 to 5), brightness, saturation.
- No `filter` or `backdrop-filter` on text or on any container holding text, even `blur(0px)`.
- Layers must be pure functions of time: no unseeded random, no `Date.now()`, no real-time loops.
- Footage, narration and music live in native lanes, not inside layer code.
- Remotion layers can omit elements in an export; verify with an export, or use HyperFrames.
- Verify in an export for anything important, not only in the preview.

## Stagger

30 to 80 ms between items. Uneven gaps. One stagger per group. At most about 0.4 s in total. Decoration only; never hold back information.

## Masking a crossfade seam

If a crossfade shows two objects swapping, a 2 to 4 px blur during the transition blends them. Graphics only, under 20 px, never on text.

## Calm option

Fewer and gentler: keep opacity and gentle scale, drop slides, shake, overshoot, flashing and fast full-frame motion. Same timing.

## Cohesion

Match the project's personality and its own earlier decisions. Do not mix three different entrance styles in one video. When unsure whether motion feels right, the strongest move is often to delete it.

## Checking feel

- Play at normal speed, then watch the move alone, then again later with fresh eyes.
- Step frame by frame at the start and end of each move.
- Check synced motion against the audio, not against the picture.
