---
name: animate
description: Build one animation for a Subclip project, deciding in the order that makes it feel right: should it move at all, what is its purpose, which tool, which properties, which curve and duration, how it exits. Use when asked to animate a layer, title, lower third, caption, overlay or transition, or to add motion to a clip. For critique use review-animations; for a whole-project audit use improve-animations.
---

# Animate

Turn a request for motion into keyframes or a motion layer that would survive a strict review. Decide in order. Steps 1 and 2 can end the job with no animation, and that is a good result. Never present motion options as a menu: make the call, give the reason in one line, build it.

Shared values (curves, durations, springs, native keyframe mapping): [../references/video-motion-values.md](../references/video-motion-values.md).

## Before you start

- `get_project_outline`, then `read_project_section` for the item and its neighbours. `list_editor_assets` for IDs. Note fps, canvas and existing motion (keep the project's style: extend its durations and curves, do not invent a parallel system).
- `get_timeline_contact_sheet` over the item's time range. Know where the subject, faces and other text are.

## The sequence

### 1. Should it move at all?

Ask how often the viewer sees this kind of element in the video.

| How often it recurs | Decision |
| --- | --- |
| Many times (every caption, every list row, every lower third) | Near-imperceptible only: short and subtle, or no motion. |
| A few times (section titles, callouts) | Standard motion. |
| Once or twice (the hook, the key reveal, the ending) | The delight budget lives here. |

Data the viewer must read (a chart value, a price, a quote) does not move for style. If the request fails this step, say so plainly and leave it still, or use a cut.

### 2. Name the purpose

One word: **cue** (syncs with a spoken word or beat), **spatial** (shows where something came from or went), **state** (makes a change legible), **bridge** (stops a jarring cut or jump), **explain** (shows how something works), **delight** (rare tier only). If you cannot name it, do not build it. "It looks cool" on something that repeats is a reason to stop.

### 3. Pick the tool, cheapest first

| Need | Tool |
| --- | --- |
| Move, scale, fade, rotate or zoom a clip or still | `add_media_keyframe` (a few keyframes) or `update_media_item` for fades and transitions |
| Move, scale or fade a text overlay | `add_text_keyframe` (`add_text_overlay` and `update_text_item` for the text itself) |
| Word by word caption motion | Dynamic Captions: `apply_dynamic_caption_preset` |
| Clip to clip transition or Ken Burns | `update_media_item` with `transitionType`, `transitionDurationFrames`, `kenBurnsDirection` |
| One small standalone CSS effect | `add_html_motion_graphic` |
| A scene, chart, diagram, kinetic type, exact curves, springs | `add_runtime_layer` HyperFrames by default; Remotion only if the creator asked for it. Revise with `read_layer_source` and `edit_layer_source`. |
| 3D model or device | Native 3D layers and `set_3d_keyframe_sequence` |

Do not build a motion layer for a fade. Do not stack three native animations where one layer would be cleaner.

### 4. Pick the properties

Position, scale, rotation and opacity first. Never scale from 0: start from 0.90 to 0.97 with opacity 0. Set the pivot where the thing is anchored (a callout grows from the point it labels). Use percent moves where possible so the move survives a size change. Add a 2 to 4 px blur only on graphics and only to hide a crossfade seam.

### 5. Easing and duration, or a spring

- Entering or exiting: strong ease-out. Moving on screen: strong ease-in-out. Constant motion: linear. Default: strong ease-out. Never ease-in on an entrance.
- The native `ease-out` is weak. For a deliberate move use the sampled-keyframe table in the values reference, or a layer with the exact curve.
- Durations come from the values reference. Exits are shorter than entrances.
- Reach for a spring when something should feel physical or carry momentum (see `animate-expo`). Small bounce only.

### 6. Do not restart a move that is in flight

When two moves can overlap (a title leaves while the next arrives, rapid word pops), retarget from the current value: put the new keyframe at the moment the old one is still moving and let it continue smoothly. Do not snap back to the start. Exit the way it entered. Slow where the viewer is meant to take something in, snappy where the system answers.

### 7. Group entrances

A list, grid or row of cards: one entrance per group, stagger 30 to 80 ms with uneven gaps, never more than about 0.4 s in total. Stagger is decoration; do not let it hold back the information.

### 8. Calm option

Large fast full-frame motion, flicker and more than three flashes a second can be uncomfortable. If the creator asks for a calm or accessible cut, use fades and gentle scale (no slides, no shake, no flashing) at the same timing.

## Build, then look

1. Make the edit with one tool call at a time. Re-read the item to confirm the keyframes landed.
2. `view_current_frame` at the start, middle and end of the move, and at the hold. Check it is clear of faces, captions and other text, and that the first and last frames are right.
3. Say what a person still has to judge by playback: feel, bounce, sync to a word. Remind them to watch it at normal speed and once more later with fresh eyes.

## Never ship

| Never | Instead |
| --- | --- |
| Scale from 0 | Scale from 0.90 to 0.97 with opacity 0 |
| Ease-in on an entrance | Strong ease-out |
| Weak built-in ease on a hero move | Sampled keyframes or an exact-curve layer |
| Motion on something that repeats all video long | Still, or very subtle |
| Entrance longer than about 0.5 s on a small element | 0.2 to 0.4 s |
| Everything entering at once | One stagger, 30 to 80 ms steps |
| Overshoot on text that must be read | Settle without bounce |
| Filter or backdrop blur on text | Opacity and transform only |
| Moving the thing the viewer must read | Hold it still |

## Output

Build it, then reply briefly: the gate result (how often, what purpose), the ingredients (tool, properties, curve, duration), and what to check by playback. Save the decision in the director brief.

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
