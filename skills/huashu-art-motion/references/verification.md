# Review and verification

A successful tool call proves that state changed. It does not prove that a painting, animation, caption or sound is correct.

## Saved-state check

Read only changed lanes and fields with `read_project_section`. Confirm returned IDs, item/source references, start/end times, scale, aspect ratio, captions and project duration. Keep pre-existing work. Remove only obsolete current-run drafts. Check that a short source was trimmed non-destructively and that no background-only tail remains.

## Visual check

Use `get_timeline_contact_sheet` across representative shot times and text ranges. Inspect the returned images. Use `view_current_frame` with the same project ID and exact `timeSeconds` for doubtful detail, entry, settled action, peak and exit. Check both sides of cuts and world seams. A saved thumbnail or source read is not rendered evidence.

Look for subject readability, clipping, bars, blank frames, unintended overlaps, missing assets, wrong stacking, stretched pictures and visible patch edges. Keep titles away from faces, key evidence and captions. Correct the same item, re-read state and inspect again after the correction.

For an action peak, inspect a frame inside the visible effect, not precisely at its tween start. A full-frame reveal must cover corners. Compare the same time after a forward and backward seek; no state accumulation or randomized texture reshuffle should appear. The source used a sequence like 1, 7, 1, 0, 1 seconds for an eight-second sample. Choose valid times for the current scene.

Do not claim pixel-perfect determinism unless a real comparison was performed. Consistent saved source is insufficient. Do not report the upstream frame-time measurements as Subclip performance.

## Material and character check

Compare with actual selected references and a neighboring style. Check that the material is more than a flat image plus noise, the subject has weight, and props and character share light and brush language. For research work, note the scope actually covered: one frame, one animated scene or multiple subjects. A plausible self-score does not upgrade research status.

Check identity, silhouette, grip, gait contact, eyes, costume and local motion. Global grain, flicker and camera zoom do not count as object animation. Avoid replacing a missing body action with more particles.

## Playback and sound

A frame sheet cannot show smoothness or rhythm. Watch normal-speed playback when available, especially the densest section and seams. Check repeated zooms, stale poses, gait resets and loop jumps. If playback was unavailable, report that gap explicitly.

Listen where possible for clear narration, voice seams, clipping, competing music, doubled audio and intentional accent timing. Check actual music onsets instead of trusting a requested BPM. Keep narration, music and effects independent. A numerical starting volume is not listening evidence. Tell the creator what still needs a listening pass.

The upstream automated QA, motion heatmaps, anti-slide score, blank-frame gate, blue/purple ratio and audio-onset fitting are not dedicated operations in the checked Subclip catalog. Visual review, saved-state reads and creator playback are the supported alternatives. Never invent a numerical pass result.

## Export and report

Export only on request. Read configuration and render queue, export once, preserve request ID and distinguish queued from completed. Inspect requested output moments after completion when accessible. An unexported preview is not proof of export quality. MP4 does not preserve alpha; consult the current export skill for a supported transparent format.

Record each defect as time, observation, cause, change and actual recheck. Put creative decisions and failed checks in `update_project_director_brief`, then `write_session_summary`. Report runtime tests, frame checks, playback and audio review separately. If app testing is prohibited, stop at source/static verification and say so.
