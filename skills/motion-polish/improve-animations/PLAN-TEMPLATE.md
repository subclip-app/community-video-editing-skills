# Plan template

Every plan follows this structure. The builder may have no context and no taste, so the plan holds everything, exactly.

```text
NNN - Short imperative title

Status: TODO
Severity: HIGH, MEDIUM or LOW
Category: one of the audit categories
Scope: items and time ranges touched

Problem
What is wrong, where, and why it matters to how the video feels. Cite item
IDs and times, and the current values verbatim (keyframes, durations, easing).

Target
The exact end state, every value spelled out: tool, curve, duration, keyframe
times and values, pivot, stagger step. Never "use a nicer easing".

Project conventions to follow
The project's own durations, curves and style, with one exemplar item to imitate.

Steps
Ordered tool calls, one edit at a time, with the exact parameters.

Scope boundaries
What must not change (other items, timing of sound, captions, the creator's work).

Verification
view_current_frame at the start, middle and end of the move and at its hold.
Say which feel checks need playback (sync, bounce, pace) and when to look again.
```
