---
name: motion-frames
description: "Build a looping kinetic poster, title card or animated hero with a wireframe globe, type ring or monogram."
---

# Motion Frames

Use a single full-bleed composition, defaulting to 16:9 unless the project or request calls for another ratio. Take a headline, one focal mark, short ring labels and the creator's active palette/type tokens. This design can use inline SVG and CSS shapes with zero generation credits.

- Start with an off-white canvas and a faint dotted grid spaced about 22 to 32 px at 1920 px width. Draw two or three hairline concentric circles. Give each rotating ring an asymmetric mark so the movement reads.
- Put a wireframe globe, object outline or monogram at about 28% of canvas width. Counter-rotate orbiting labels so they stay upright. Set the bottom headline in an expressive display serif with one italic accent. Keep the top stamps and baseline rule still where they provide context.
- Vary ring velocities. For an ambient hold, the source suggests 60, 90 and 180 second cycles and a roughly 2-second pulse. For a seamless 12-second version, use whole cycles that divide 12, such as 12, 6 and 4 seconds, or small returning arcs with those periods. Use a letter-spacing and opacity reveal for a one-shot opener; for a seamless loop, hold the headline or return it to the same visible state.
- Sample brief: "Reach every country." Build a clean editorial poster with a wireframe globe, an upright multilingual label orbit and a gentle focal pulse. Check that frame zero reads as a poster and that the moving layers remain distinct at normal playback speed.

## Project context

Read the official Subclip skill gateway and video editor skills, then the specific workflow skills named below. Discover exact tool schemas before editing. Start with `get_project_outline`, then `read_project_section` for the relevant lanes and `get_project_director_brief` for project and workspace guidance. Use `list_editor_assets` for exact IDs. Keep the same explicit project ID on project calls.

Read `get_media_context` before transcribing, rescanning or extracting frames. Set `includeContactSheet: true` for source video; reuse available descriptions and transcripts. If needed, inspect specific moments with `fileId` and `inspectAtSeconds` (up to six). In an editing run, use `list_media_without_context` and `generate_media_context` for needed context, then inspect the returned sheets and save observations via `describe_media`. For attached videos, read their context manifest and storyboard paths and import the manifest's originalPath. Keep original video out of prompt context.

Read the official Subclip HyperFrames layer skill. Author standalone HTML/CSS with named elements, a root composition ID, explicit dimensions and duration, and a paused timeline registered under that same ID. Use the runtime's supported pinned GSAP when needed. Drive every state from layer time; translate CSS loops to finite seekable curves or time-derived states. For a loop, compare the last frame with the first and use phase-aligned cycles. Import any needed media to the project library, reread assets, and bind the exact returned URLs. Keep separable audio and footage in their native lanes.

Use `validate_runtime_layer_source` before `add_runtime_layer`; supply explicit geometry and use the full canvas for an intended full-frame design. For revisions, use `read_layer_source` and `edit_layer_source` with the returned source hash, or `update_runtime_layer` for a complete replacement. Preserve manual edits. A single small standalone CSS effect can use `add_html_motion_graphic` if the official motion graphics skill confirms it can be previewed and exported as intended.

## Review and handoff

Serialize edits and reread the affected section after each coherent change. Preserve existing item IDs and unrelated creator work. Use `get_timeline_contact_sheet` across the placement range before adding text, keeping faces, key content and captions clear. Inspect actual frames via `view_current_frame` at entrances, holds, cuts and exits. Compare forward and backward seeks to the same beat for animated layers. Set intentional duration with `set_project_duration` when needed and check the last visible frame for blank tails. Check audio balance when playback is available and report any listening checks still needed.

For a requested finished file, use `get_export_configuration` and `list_render_queue` before `export_video`. Use range fields only for a requested segment. External clients can check `get_export_status` for the same export. Record decisions and limits with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/design-templates/motion-frames by nexu-io, Apache-2.0.
