---
name: animate-expo
description: Spring physics, overshoot, momentum and settle for Subclip motion layers and keyframes. Adapted from a React Native and Expo animation skill; the mobile parts were dropped. Use when something should feel physical in a video, a pop with a little bounce, a card that lands and settles, a throw that decelerates, a rubber-band stop.
---

# Spring physics for video (adapted from animate-expo)

The original skill built animation in React Native and Expo: Reanimated worklets, Gesture Handler, Expo Router, haptics, UI-thread rules, Android elevation. **None of that applies to a video, so it was dropped.** What carries over is the physics: when to use a spring, how to tune it, how momentum should behave, and how to keep the result calm. This skill adds the Subclip way to build it.

Shared values: [../references/video-motion-values.md](../references/video-motion-values.md). Decide whether to animate at all with the `animate` skill first.

## What was dropped, and why

| Original topic | Status |
| --- | --- |
| Reanimated, worklets, shared values, UI thread rules | Dropped. Video has no live thread to protect. |
| Gesture Handler, drag, swipe, pointer capture | Dropped. Nobody touches a video. The momentum ideas stay. |
| Haptics | Dropped. |
| Expo Router, native tabs, sheets, keyboard handling | Dropped. |
| Press and hover feedback | Dropped. |
| Springs, damping, overshoot, bounce only with momentum | Kept and rewritten below. |
| Rubber-band at an edge, projected landing from velocity | Kept as ideas for motion design. |
| Reduced motion, calmer fallback | Kept as a calm option. |

## When a spring beats a curve

Use a spring when the motion should look like it has weight: something thrown and settling, a pop, a card dropped into place, a sticker slapped on. Use a curve (strong ease-out) for everything else. Press-style discrete moves and ordinary entrances are curves.

**Bounce only when the thing carried momentum.** A card that was flung can overshoot. A title that faded in cannot.

## Settings

Describe a spring by feel first: a settle time and how much it overshoots.

| Feel | Settle | Overshoot | Use |
| --- | --- | --- | --- |
| Clean settle, no bounce | 0.4 s | none | Default for panels and cards |
| Light snap back | 0.4 s | about 5 percent | A card that lands |
| Playful pop | 0.5 s | about 10 to 15 percent | Stickers, emoji, badges, hero reveal |
| Heavy drop | 0.6 s | about 3 percent, one small bounce | Big objects |

Physics form (Remotion `spring()` or a physics ease): mass 1, stiffness 100 to 200, damping near `2 * sqrt(stiffness * mass)` for no overshoot (stiffness 120 gives about 22), 70 to 80 percent of that for a light bounce (about 16 to 18). Set `overshootClamping` when the thing must not pass a hard edge (a progress bar at 100 percent).

## Build it

- **Exact spring:** a Remotion layer (only when the creator asked for Remotion or the project already uses it): `spring({ frame, fps, config: { damping, stiffness, mass } })`. Otherwise a HyperFrames layer with GSAP `back.out` (one overshoot) or `elastic.out` (several, rarely right). Create with `add_runtime_layer`, revise with `read_layer_source` then `edit_layer_source`.
- **Native approximation:** keyframes with `add_media_keyframe` or `add_text_keyframe`, `linear` between points. Scale 0.92 at t0, about 1.08 at 55 percent of the move, 0.98 at 80 percent, 1.00 at 100 percent gives a light pop. Opacity reaches 1 by 30 percent. Do not claim it is a true spring.
- **Momentum:** something that arrives with speed decelerates over a longer tail than a plain ease-out. Use the drawer curve for a large panel, or a strong ease-out stretched to 0.6 to 0.9 s for a thrown object. Where it would pass a boundary, let it overshoot a little and come back (a rubber-band), rather than stopping dead on an invisible wall.
- **Interruption:** if a second move starts while the first is settling, start it from the current value and keep the velocity. Do not snap back to the start.

## Calm option

If the creator wants a calmer cut, remove overshoot and bounce, keep opacity and gentle scale, same timing.

## Check

`view_current_frame` at the start, the peak of the overshoot, the settle and the hold. The peak must stay in frame and clear of faces and captions. Say that bounce and weight can only be judged on playback.

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
