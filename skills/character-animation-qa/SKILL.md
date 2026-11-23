---
name: character-animation-qa
description: Review a character animation in Subclip before showing it to the creator, with static checks, sampled frames, motion-delta checks, console and validation checks, and a pass, revise or fail verdict. Use after building or editing any animated character layer, rig, mascot scene or acting beat, or when the creator says a character looks broken, glitchy, frozen or off-model.
---

# Character animation QA (Subclip edition)

Run this review before you present a character animation preview or a finished render. It checks that the animation works, moves, and reads. The original skill used Playwright and ffprobe; in Subclip the same layers of review are done with the editor's own tools, so nothing needs to be installed.

## Review layers

1. **Plan check.** Compare what was built with the plan: the character design, the rig parts, the pose list and the action timeline (kept in `get_project_director_brief`). List what is missing.
2. **Static asset check.** `list_editor_assets` and `read_layer_source` for the layer: every referenced part, image and background exists, uses a project media URL, and loads. Missing or stale `subclip-media://` URLs are a fail.
3. **Source validation.** `validate_runtime_layer_source` for the layer source and variables, then `validate_project`. Any error is a fail until fixed.
4. **Preview check.** `seek_timeline` to the layer and `view_current_frame`. Look for a blank frame, a black or opaque background where transparency was intended, clipped parts and console-level failures that show as missing parts.
5. **Motion check.** Sample frames across the layer with `seek_timeline` plus `view_current_frame` at a fixed step (every 0.25 to 0.5 s, and denser around key actions), or take a `get_timeline_contact_sheet` over the time range. Compare consecutive frames: there must be meaningful change, and no long frozen stretch where nothing happens.
6. **Final output check.** If the creator exported, read `get_export_status` and `list_render_queue` for the finished file, then check an exported frame with `export_current_frame` or `view_frame`. Confirm duration, size and that audio is present. Do not claim an audible check you did not do.
7. **Agent visual review.** Look hard at the sampled frames for: detached limbs, parts in the wrong layer order, characters off frame, unreadable or wrong expressions, mouth shapes not matching the speech, broken or overlapping text, and a character that changes shape or size between frames without a reason.

## How to sample

- Entrance, the strongest pose, a mid-action frame, the settle, and the exit: at least five frames per layer.
- Every pose change and every blink or mouth swap you wrote: one frame just before and one just after.
- Boundaries between adjoining layers: the last frame of one and the first of the next.

## Verdict

- `pass`: technical checks pass and the acting is readable.
- `revise`: a fixable rig, timing or layering issue. Say exactly what and where (item ID, time).
- `fail`: missing assets, blank or opaque render, runtime error, or the wrong engine.

Fix `revise` items in place with `edit_layer_source` (pass the returned source hash) or `update_runtime_layer`, then repeat the affected checks. Never report a pass from saved state alone.

## Report

Give the creator a short list: verdict, the frames you inspected (with times), what you fixed, and what you could not verify (for example, audio sync that needs a listen). Save it with `write_session_summary`.

Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) (skill character-animation-qa) by OpenMontageInc, AGPL-3.0
