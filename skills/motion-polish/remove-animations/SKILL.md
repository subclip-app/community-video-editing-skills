---
name: remove-animations
description: Put every existing animation in a Subclip project on trial, then delete or reduce the ones that cannot defend themselves. The counterpart to find-animation-opportunities. Use when an edit feels busy, over-animated, restless, or when asked to simplify, calm down or tone down motion.
---

# Remove animations

A subtraction skill. It puts existing motion on trial and removes or reduces what has no purpose. It does not add motion and does not retune what stays (that is `review-animations` and `improve-animations`).

Premise: agents and templates add motion by default (fade on every line, bounce on every title, shake on every cut). Each is defensible alone; together they tire the viewer and hide what matters. The burden of proof is reversed: motion stays only if it passes the gate. "It is already there" is not a defense. Deleting everything is also wrong: motion that bridges a jarring change earns its place.

Shared values: [../references/video-motion-values.md](../references/video-motion-values.md).

## Hard rules

1. **Only subtract.** Every edit deletes motion, reduces it, or removes what it left orphaned. Never add motion or retune a curve. If something should stay but is badly built, list it for `improve-animations`.
2. **Check what depends on the motion before deleting it** (hazards below).
3. **Ask before deleting a whole layer, template element or the creator's own work.** Propose, then act on approval. Remove only what is clearly an obsolete draft you made this run without asking.
4. **Respect documented decisions.** If the director brief or a note explains why a move exists, keep it and say so.
5. **One edit at a time.** Re-read state after each edit.

## The gate

Walk every animated item through this tree and record the branch.

```
Does it repeat many times in the video (every caption, every list row, every lower third)?
|-- Yes, and it is more than a very short fade -> REDUCE to a very short fade or DELETE.
Is it on data the viewer must read (chart, number, quote, price)?
|-- Yes -> DELETE, unless it shows a real change of value (a number ticking from old to new).
Can you name its purpose: cue, spatial, state, bridge, explain?
|-- No -> Is it a rare moment (the hook, the reveal, the ending)?
|    |-- Yes -> KEEP. This is the delight budget.
|    |-- No -> DELETE.
|-- Yes -> Is it over budget (long for its role, a slide or scale where a fade carries the same meaning, loops forever)?
     |-- Yes -> REDUCE.
     |-- No -> KEEP.
```

## Reducing

Reduce means a smaller version of the same motion, never a different one.

| Today | Reduced to |
| --- | --- |
| Slide plus scale plus rotate entrance on a repeating element | Opacity only, 0.15 to 0.2 s |
| Entrance longer than about 0.5 s on a small element | 0.25 to 0.35 s, same curve |
| Stagger over 80 ms per item or over 0.4 s in total | 30 ms steps, or fade the group as one |
| Infinite loop (pulse, shimmer, glow) on a persistent element | Run once, or keep the static end state |
| Shake, glitch or zoom punch on every cut | Keep it on one or two key cuts, delete the rest |
| Bounce or elastic on text that must be read | Settle without overshoot |

If reducing leaves motion so small it carries no purpose, delete it.

## Where to hunt

- Every caption word and line animated differently, or animated heavily.
- The same title animation on every section.
- Ken Burns on every still, in different directions, at different speeds.
- Transitions on every cut, especially flashy ones. Most cuts should stay cuts.
- Looping effects (pulses, glows, floating) under a talking head.
- Numbers that count up every time they appear.
- Three layers of motion on one element (keyframes plus preset plus layer animation).

## Removal hazards

Check before deleting; removal is not find and replace.

- **Hidden start states.** An element that starts at opacity 0, scale 0.9 or off-screen, then animates in. Delete the move and not the start state, and the element stays invisible or misplaced. Remove the start state with the move, or set the first keyframe values to the final look.
- **Last keyframe holds.** Keyframes hold their last value. Deleting only the last point leaves the previous value held.
- **Things timed to the motion.** A sound effect, a caption, a cut or a second element timed to land with the animation. Move or keep it consistent.
- **Layer code.** Delete the animation code and its start state in the layer source with `read_layer_source` then `edit_layer_source`. Never leave a half-removed timeline.
- **Disguised cuts.** A move may hide a jump (a re-framed shot). Remove it and the jump appears. Keep the move and list the jump.

## Tools

- Text: `delete_text_keyframe`, `set_text_animation` with preset `none`, `update_text_item`.
- Elements: `delete_element_keyframe`.
- Media: there is no delete for a single media keyframe. Set the item's values to the intended final look with `update_media_item` and overwrite the keyframe values with `add_media_keyframe` so the item does not move, or recreate the item. Say which you did.
- Transitions: `update_media_item` with `transitionDurationFrames: 0` (or the none type) and `fadeIn` or `fadeOut` 0.
- Layers: `edit_layer_source`. Remove obsolete drafts you made with the matching delete tool.

## Workflow

1. Recon: `get_project_outline`, `read_project_section`, `get_timeline_contact_sheet`. List every animated item (native keyframes, presets, transitions, layers) with its time range.
2. Gate each item and record the branch.
3. Present the plan as a table (item, what it does now, decision, reason). Ask to proceed unless the creator already approved removal.
4. Edit one item at a time. Re-read it. `view_current_frame` at the start, middle and end of the affected range.
5. Report what was deleted, reduced and kept, what was left for `improve-animations`, and what to check on playback. Write it with `update_project_director_brief`.

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
