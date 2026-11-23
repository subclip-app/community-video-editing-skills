# Motion values for Subclip

Shared by every skill in this pack. The curves and spring ideas come from Emil Kowalski's skills. The video durations and the native keyframe mapping are the Subclip adaptation: Emil's numbers are for interfaces people click, a video is watched.

## The big difference between UI and video

A UI animation delays a person who wants to act, so it must be short. A video animation never blocks anyone, but it still costs viewer attention and screen time. The craft is the same: land fast, ease out, do not decorate what repeats, and let the moment that matters carry the delight. Keep the entrance quick so the subject is readable early, and keep exits shorter than entrances.

## Frames and time

Subclip projects usually run at 30 fps. Check `get_project_outline` for the real fps. One frame at 30 fps is 33 ms. Durations below are in seconds and frames at 30 fps.

## Easing

Native keyframe easing is one of: `linear`, `ease-in`, `ease-out`, `ease-in-out`. These are the weak built-in curves. For a deliberate move, prefer a strong curve.

| Name | Curve | Use |
| --- | --- | --- |
| Strong ease-out | `cubic-bezier(0.23, 1, 0.32, 1)` | Entrances, exits, anything arriving. The default. |
| Strong ease-in-out | `cubic-bezier(0.77, 0, 0.175, 1)` | Something already on screen moving or morphing from A to B. |
| Drawer curve | `cubic-bezier(0.32, 0.72, 0, 1)` | Large panels and sheets sliding in. |
| Linear | none | Constant motion only: progress bars, marquees, scrolling credits. |

Never `ease-in` on an entrance. It is slow at the exact moment the viewer is looking.

### Where each curve can be used exactly

- `add_html_motion_graphic` and CSS in a HyperFrames layer: write the `cubic-bezier(...)` above directly.
- Remotion layer (only when the creator asked for Remotion): `Easing.bezier(0.23, 1, 0.32, 1)` with `interpolate`.
- HyperFrames GSAP timelines: use the nearest named ease (`power4.out` for strong ease-out, `power4.inOut` for strong ease-in-out) unless the layer's runtime exposes a custom bezier ease. Say it is the nearest, not identical.
- Native keyframes: use several keyframes with `easing: "linear"` through sampled points. Position of the move from 0 to 1, over its duration:

| Time (share of move) | Strong ease-out | Strong ease-in-out | Drawer curve |
| --- | --- | --- | --- |
| 0.05 | 0.21 | 0.00 | 0.12 |
| 0.10 | 0.40 | 0.01 | 0.27 |
| 0.20 | 0.68 | 0.03 | 0.66 |
| 0.30 | 0.84 | 0.09 | 0.85 |
| 0.40 | 0.93 | 0.22 | 0.92 |
| 0.50 | 0.97 | 0.60 | 0.95 |
| 0.60 | 0.99 | 0.84 | 0.98 |
| 0.70 | 1.00 | 0.93 | 0.99 |
| 1.00 | 1.00 | 1.00 | 1.00 |

Example: a title that slides up 120 px over 0.4 s with a strong ease-out, with `add_text_keyframe` at t0 (offset 120), t0+0.04 (offset 72, that is 0.10 progress = 0.40 eased), t0+0.08 (38), t0+0.12 (19), t0+0.20 (4), t0+0.4 (0), all `linear`. Use fewer points (0.10, 0.30, 1.00) when the move is small; three points are usually enough to beat the built-in `ease-out`.

## Duration

| Element | Seconds | Frames at 30 fps |
| --- | --- | --- |
| Word or caption pop | 0.12 to 0.25 | 4 to 8 |
| Small label, icon, badge | 0.20 to 0.30 | 6 to 9 |
| Lower third or title card in | 0.30 to 0.50 | 9 to 15 |
| Same element out | 0.20 to 0.30 | 6 to 9 |
| Transition between clips | 0.25 to 0.50 | 8 to 15 |
| Full-frame scene change | 0.40 to 0.70 | 12 to 21 |
| Hero reveal, one per video | 0.60 to 1.00 | 18 to 30 |
| Slow ambient drift (Ken Burns, float) | the clip length, 2 to 8 s | n/a |

Rules of thumb: repeated elements (every caption, every lower third) sit at the short end; the one hero moment sits at the long end. A stagger step is 30 to 80 ms (1 to 2 frames at 30 fps); longer feels slow. Stagger a group once, with non-uniform delays, not every item in sequence at the same gap.

## Springs

A spring has no fixed duration; it settles. Use one when something should feel physical: a pop with overshoot, a card settling, an element that carries momentum.

- Apple-style settings are easiest to reason about: a perceived duration plus a bounce amount. Bounce 0.1 to 0.3 only. Default 0 to 0.2.
- Traditional physics: mass 1, stiffness 100 to 200, damping 10 to 20. Lower damping means more wobble.
- Native keyframes have no spring easing; approximate with keyframes: reach about 108 percent at 55 percent of the move, 98 percent at 80 percent, 100 at the end for a small overshoot. A spring needs a runtime layer for exact physics (Remotion `spring()`, or a HyperFrames timeline with an elastic or back ease).
- Never overshoot something the viewer must read the moment it lands (small body text, a price, a name).

## Physicality

- Never scale from 0. Start from 0.90 to 0.97 with opacity 0. Nothing appears from nothing.
- Move things from where they belong: a callout grows from the point it labels, not from its own center. Set the transform origin at the anchor (pivot) point.
- Enter and exit along the same path. A card that rises in drops out the same way.
- Percent moves (a title travels its own height) hold up when the font size changes; hard pixel moves do not.
- A soft blur (2 to 4 px) can hide a crossfade that looks like two objects swapping. Keep it under 20 px. Only on graphics, never on text (see animation-performance).

## What to animate (cheap properties)

Position, scale, rotation and opacity are the cheap, safe ones. Blur, brightness and saturate on media are fine in short bursts. Avoid animating large soft shadows, big blurs, or text-bearing containers with `filter`.

## Native Subclip tools for motion

- `add_media_keyframe`: position (x, y), size, scale, rotation, opacity, crop focus, zoom, roundness, blur, brightness, saturation, effects, tilt. Easing `linear`, `ease-in`, `ease-out`, `ease-in-out`. The last keyframe holds.
- `add_text_keyframe` and `delete_text_keyframe`: text position (canvas percent), size, scale, rotation, opacity, tilt.
- `add_element_keyframe` and `delete_element_keyframe` for Elements.
- `update_media_item` with `transitionType`, `transitionDurationFrames`, `effectDurationFrames`, `kenBurnsDirection`, `fadeIn`, `fadeOut` for transitions and Ken Burns.
- `set_text_animation` is a legacy preset control (fade, scale-up, slide-up, typewriter, pop, smooth-pop, float, glide, wave). Prefer text keyframes for new work.
- Captions: `apply_dynamic_caption_preset` (read `subclip-dynamic-captions`).
- 3D: `set_3d_keyframe_sequence` and the 3D keyframe tools.
- Layers: `add_runtime_layer`, `read_layer_source`, `edit_layer_source`, `update_runtime_layer`, `add_html_motion_graphic`.

Not available as separate tools today: deleting a single media keyframe, per-keyframe custom bezier easing, native spring easing. Use the workarounds above and say so.
