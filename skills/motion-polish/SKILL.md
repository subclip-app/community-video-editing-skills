---
name: motion-polish
description: Entry point for eight motion craft skills for Subclip projects: animate, animate-expo (spring physics), animation-performance, animation-vocabulary, find-animation-opportunities, improve-animations, remove-animations, review-animations. Use for animating video layers, keyframes, text and transitions, or judging and simplifying existing motion.
---

# Motion polish

Pick the sub-skill by name with `read_subclip_skill` (or open its folder in a checkout). Each one is a separate entry point.

| Skill | Use it when |
| --- | --- |
| `animate` | Someone asks to animate something. Decides in order: should it move, why, which tool, which properties, which curve, how it exits. Then builds it. |
| `animate-expo` | The motion needs a spring, momentum or a settle (bounce, overshoot, drift). Spring and momentum settings for video. |
| `animation-performance` | Preview scrubs badly, the export differs from the preview, or a motion layer is heavy. |
| `animation-vocabulary` | You need the exact name of an effect, to prompt an agent or designer. |
| `find-animation-opportunities` | "What could move here?" Read-only. Rejects most ideas on purpose. |
| `improve-animations` | Audit a whole project's motion, then write exact fix plans. |
| `remove-animations` | The edit feels busy. Remove or reduce motion that has no purpose. |
| `review-animations` | Check motion against a strict bar and return a verdict. |

Start with `animate` for new work, `review-animations` for existing work.

## How this pack works in Subclip

- Read the project first: `get_project_outline`, then `read_project_section` for the lanes you need, `list_editor_assets` for real IDs. Keep one explicit project ID on every call.
- Look before you judge: `get_timeline_contact_sheet` over the time range, `view_current_frame` for specific frames. Never judge motion from a still alone; check start, middle and end of each move.
- Native first: media keyframes (`add_media_keyframe`), text keyframes (`add_text_keyframe`), Element keyframes (`add_element_keyframe`), transitions through `update_media_item`. Motion layers second: `add_runtime_layer` (HyperFrames by default, Remotion only when asked) and `edit_layer_source` for revisions. One small CSS effect: `add_html_motion_graphic`.
- One edit call at a time. Re-read state after each coherent edit. Preserve the creator's work.
- Shared values: [references/video-motion-values.md](references/video-motion-values.md).
- Record decisions with `update_project_director_brief` and `write_session_summary`. Never claim a visual check you did not do.

## Reference output

[examples/aero-one-before-after.mp4](examples/aero-one-before-after.mp4) shows the pack at work on one product callout scene (stills: [after](examples/aero-one-after.jpg), [review](examples/aero-one-review.jpg)):

| Part | What happens |
| --- | --- |
| Before (0 to 5 s) | The title scales up from 0 on a linear curve and wobbles, cards fly in from off screen with an ease in, the text bounces, leader lines pop on with no anchor |
| After (5 to 10.6 s) | `review-animations` and `animate` applied: the title rises 40 px from 0.96 scale with a strong ease out, each callout starts as a dot on the product, its leader draws outward and the card follows, staggers are uneven and short, a small spring only on the dots, and everything exits on the same path, faster |
| Review (10.6 to 14.2 s) | The five fixes as a checklist, with the strong ease out curve drawn against ease in |

Each part is one HyperFrames layer; music and the soft pops sit on native audio lanes.

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
