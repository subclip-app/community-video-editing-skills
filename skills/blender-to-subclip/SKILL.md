---
name: blender-to-subclip
description: Build, inspect and render a short Blender shot for the Subclip timeline. Use for Blender turntables, product shots, dioramas, camera moves, or numbered render frames that need placement in Subclip.
---

# Blender to Subclip

## Read the edit first

1. Load the official Subclip video editor and media editing skills with `read_subclip_skill`. Load the desktop control skill before acting in Blender's interface. Load the export skill only for a requested Subclip export.
2. Start with `get_project_outline` on the target project. Use `read_project_section` for the affected lanes and timing fields, and `list_editor_assets` for exact file and item IDs. Keep the same explicit project ID on every project-scoped call. If the creator wants a new project, use `create_project` with an intentional duration and the requested canvas preset, defaulting to landscape for a new shot without an aspect ratio reference. Read its outline before placement.
3. Use `get_media_context` on any relevant existing source before rescanning it. Request `includeContactSheet: true` for video. For precise checks, pass the file ID and up to six moments with `inspectAtSeconds`. Reuse any relevant transcript. For missing context, use `list_media_without_context`, then `generate_media_context` in an editing run and `describe_media` for observed descriptions. When working from attached video context, read its manifest and storyboard and use the manifest's original file path for media import. Keep original video out of prompt context.
4. Plan one shot with a subject, camera angle and move, aspect ratio, frame rate, start time and duration. For a narrated sequence, read the placed audio item's actual time range first and design the shot around that beat.

## Build, inspect and render in Blender

Use the already connected Blender MCP for scene inspection if the host exposes it. Discover the creator's existing connection through the host's tool catalog, or through Subclip's connected MCP catalog when available. In the Blender MCP namespace, call `get_scene_info` before making changes and confirm it is the intended scene. Use `look` in camera and angles modes for framing and grounding. For motion, use frames mode with `view: "camera"` and specific frame numbers around the start, middle, end and any direction change. Use rendered shading on a representative camera frame to check lighting and materials.

Blender's MCP in this revision has no code-free operations for constructing a scene, inserting keys or writing an animation file. Do those steps through Blender's interface using Subclip desktop control where permitted. Confirm the intended Blender window and work in a new scene or a saved copy. If inspection tools are missing, check Blender's camera view, scrub the key poses and inspect Render Result in the interface. If desktop control is unavailable, continue from a creator-supplied render or hand over the shot recipe and identify the missing render. Do not run code in Blender, install scripts or use external generation services. Local rendering and import use no Subclip AI credits.

Follow [shot and render recipes](references/shot-and-render.md) for blockout, lighting, keyframes and file output. Save the editable Blender scene separately. Use an absolute output path on the computer running Subclip, and choose a unique output name so a rerender preserves earlier files. Render a test frame or short preview before committing to the final render. Confirm completion and check the real output before import.

## Place the render

- **Clip:** Call `import_external_media` with the project ID, the exact absolute file `path` and the timeline `startTime` in seconds. Supply exactly one source. Leave duration unset to keep the natural video duration. If the file is on another machine, use a creator-authorized shared copy accessible on Subclip's machine or an already available public HTTPS URL authorized for that media.
- **Numbered sequence:** For continuous motion, prepare one clip from the numbered frames using Blender's Video Sequencer as described in the recipe. Import that clip. For selected stills or a storyboard, import individual images in frame order with explicit `startTime` and `durationSeconds`. External image import clamps durations below 0.1 seconds, so use the video route for frame-accurate motion.
- Make one edit at a time. Re-read the affected lane after each coherent edit and use returned IDs. If a call times out, check whether the file and item already exist before retrying. Use `update_media_item` for requested framing or placement changes and `trim_media_item` for source in and out points. For a requested rerender replacement, use `replace_media_item_source` with the exact target item and the newly imported source file ID. Preserve the existing cut and framing. For a new project, use `set_project_duration` to align the project end with the intended last visible or audible beat.
- Before placing any title, view its range with `get_timeline_contact_sheet`. Use `add_text_overlay` only for requested text, keeping it clear of the subject and captions.

## Verify and hand off

Use `view_current_frame` with the project ID and exact `timeSeconds` at the start, middle and last visible frame, plus cuts or transitions. Confirm placement, framing and the absence of gaps. For loops, inspect both sides of the seam. Check audio balance if the surrounding edit has audio and report any listening review still needed. The rendered file is editable as a Subclip media item. Changes to the 3D scene happen in Blender.

If the creator requests a finished Subclip export, read `get_export_configuration` and `list_render_queue`, then call `export_video` once. Omit range fields for the full project. Use `get_export_status` when an external client needs to check progress. Record the source version, render settings, placement and unresolved checks with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) by Siddharth Ahuja, MIT.
