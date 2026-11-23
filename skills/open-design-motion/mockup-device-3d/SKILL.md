---
name: mockup-device-3d
description: "Build a native 3D phone and optional laptop product showcase with real screen media and an optional turntable."
---

# Device 3D Showcase

Read the official Subclip 3D mockup skill. Use the actual mobile UI at a tall ratio such as 375 by 812 and optional desktop UI around 1440 by 900, cropped to the selected screen model. For live HTML, ask for or use a creator-supplied screenshot or recording of the rendered UI. For a text/data brief, create an accurate static mock UI in a Subclip motion layer and, when a supported image output is available, import its still as screen media. A creator-provided still is the direct fallback. Native 3D screen bindings take project media, so this preserves what viewers see in a video.

1. Use `list_3d_models` and select verified phone and optional laptop models with screen support. Add a separate `add_3d_layer` per device. If the requested laptop or phone is absent, disclose the closest available device and use its actual screen aspect.
2. Import attachments with `import_attachment_to_project_media` or existing creator files with `import_external_media` as media only. Re-list assets and bind the exact file ID using `set_3d_screen_content`. Use `set_3d_screen_appearance` for fit, padding or clipping. If an input has audio, choose one playback owner.
3. Compose 16:9 unless the brief calls for another ratio. Place the larger phone left of center, titanium or neutral finish where supported, yaw about -12 degrees and pitch about 4 degrees; put the smaller laptop on the right at about +8 degrees yaw. Use charcoal, pearl, midnight blue or mocha. Behind the devices add a soft radial falloff and restrained floor glow in a separate background layer if the model and scene controls lack those effects. Keep any small version label or product mark clear of screen content.
4. For the requested static showcase, hold the pose. For an optional eight-second turntable, use `set_3d_keyframe_sequence` with eased yaw from -12 to +12 and back to -12 for a closed loop. Keep screen heads visible during the turn. Simulate lens glints with restrained, screen-clear highlights if model controls lack refraction. Use a soft floor shadow or glow when a true reflection is unavailable.
5. Call `verify_3d_layer_setup`. Inspect screen legibility, reflections or glints, and available model angles at the start, midpoint and end. Owned screen media and native layers need no generation credits.

## Project context

Read the official Subclip skill gateway and video editor skills, then the specific workflow skills named below. Discover exact tool schemas before editing. Start with `get_project_outline`, then `read_project_section` for the relevant lanes and `get_project_director_brief` for project and workspace guidance. Use `list_editor_assets` for exact IDs. Keep the same explicit project ID on project calls.

Read `get_media_context` before transcribing, rescanning or extracting frames. Set `includeContactSheet: true` for source video; reuse available descriptions and transcripts. If needed, inspect specific moments with `fileId` and `inspectAtSeconds` (up to six). In an editing run, use `list_media_without_context` and `generate_media_context` for needed context, then inspect the returned sheets and save observations via `describe_media`. For attached videos, read their context manifest and storyboard paths and import the manifest's originalPath. Keep original video out of prompt context.

## Review and handoff

Serialize edits and reread the affected section after each coherent change. Preserve existing item IDs and unrelated creator work. Use `get_timeline_contact_sheet` across the placement range before adding text, keeping faces, key content and captions clear. Inspect actual frames via `view_current_frame` at entrances, holds, cuts and exits. Compare forward and backward seeks to the same beat for animated layers. Set intentional duration with `set_project_duration` when needed and check the last visible frame for blank tails. Check audio balance when playback is available and report any listening checks still needed.

For a requested finished file, use `get_export_configuration` and `list_render_queue` before `export_video`. Use range fields only for a requested segment. External clients can check `get_export_status` for the same export. Record decisions and limits with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/examples/mockup-device-3d by nexu-io, Apache-2.0.
