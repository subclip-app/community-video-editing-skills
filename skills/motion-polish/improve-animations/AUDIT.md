# Audit playbook

The eight categories, what to look for, and the target values to cite. Values come from `../../references/video-motion-values.md`. Never approximate a value that appears there.

## 1. Purpose and frequency

Every move must answer "why does this move?" (cue, spatial, state, bridge, explain, delight). Hunt for: the same entrance on every caption or lower third, loops under talking heads, motion on numbers the viewer must read, a flashy transition on every cut. The strongest fix is often to delete it.

## 2. Easing and duration

Entering or exiting: ease-out. Moving on screen: ease-in-out. Constant motion: linear. Ease-in on an entrance is always a finding. The weak built-in ease on a hero move is a finding: replace it with sampled keyframes, CSS in `add_html_motion_graphic`, or a layer using the strong curve. Durations from the values reference; exits shorter than entrances.

## 3. Physicality and origin

Scale from 0.90 to 0.97 with opacity 0, never 0. Callouts grow from the point they label. Same path in and out. Bounce only with momentum, none on readable text.

## 4. Continuity

Overlapping moves must retarget from the current value, not snap. The first and last frames of each move must be intentional. Matched position and scale across cuts. The last keyframe holds; extra terminal keyframes are noise.

## 5. Cost and export safety

Cheap properties first. No filter or backdrop blur on text or containers with text. Deterministic layers only. No footage inside layer code. Heavy blur and big shadows in short bursts only. Remotion layers can omit elements in an export: verify in an export or use HyperFrames. Verify in an export, not only in the preview.

## 6. Calm option

Large fast full-frame motion, shake and flashing (more than three flashes a second) are uncomfortable. A calm cut keeps opacity and gentle scale at the same timing.

## 7. Cohesion and tokens

One motion language per video: the same few durations, the same curves, the same stagger step. Flag mixed entrance styles, one-off durations and three libraries of moves. Plans extend the project's own values and never create a parallel system.

## 8. Missed opportunities

Places that do not move but should: a hard cut that teleports a title, a callout with no link to its target, a flat hook or ending, a dead still. Keep the list short and gate each through find-animation-opportunities first.
