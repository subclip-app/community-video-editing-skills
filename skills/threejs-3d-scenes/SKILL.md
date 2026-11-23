---
name: threejs-3d-scenes
description: Build editable native 3D shots in Subclip. Use for bundled device mockups, screen replacements, hero reveals, product turntables, camera pushes, or Three.js-inspired 3D compositions. Route explicit custom Three.js Remotion requests to the separate supported runtime.
---

# Three.js 3D scenes

Use a clear silhouette, a deliberate camera target, and one move that reveals something. Start with the subject, the shot's purpose, the available media, and the requested timing and aspect ratio. Read [shot recipes](references/shot-recipes.md) for worked examples.

## Inspect the project and media

1. Read the installed `subclip-video-editor` and `subclip-3d-mockup` skills with `read_subclip_skill`. For custom keys, also read the 3D skill's `references/keyframes.md`. Discover the current 3D tool schemas through the editor tool catalog.
2. Begin project reads with `get_project_outline`. Use `read_project_section` for the relevant lanes and fields and `get_project_director_brief` for the project's direction. Keep the same explicit project ID on every project-scoped call. Use `list_editor_assets`, `list_3d_models`, and `inspect_3d_composition` to find exact item, file, model, and screen slot IDs. Resolve relevant composition warnings before adding motion. Watch the insertion frame with `view_current_frame`.
3. For screen or background media, read `get_media_context` before rescanning or extracting frames. Request `includeContactSheet: true` for video and inspect up to six exact moments with `fileId` and `inspectAtSeconds` if needed. Reuse relevant transcripts. For missing context during an edit, use `list_media_without_context` and `generate_media_context`, inspect the result, then save observed descriptions with `describe_media`. For an attached video, inspect the context manifest and storyboard, then use `import_attachment_to_project_media` with the manifest's original media path for a screen-only source. Keep the original video out of prompt context.
4. Honor the requested canvas ratio. With no main video or requested ratio, use landscape 16:9 for a new promo or motion explainer. If narrated, place the voice first and use the actual audio item's timing as the shot clock. Local narration is available through `generate_local_speech` and `import_generated_audio_to_timeline`.

## Build the native shot

1. Add the approved model with `add_3d_layer` using the shot's start and duration. Keep the default viewport proportions initially. The standard template starts with Tilt Reveal. For a fully custom keyframe sequence set `animationPresetId: "none"`, then give the new item the intended keys. Read back `get_3d_layer` and confirm the exact model ID and saved timing.
2. Use `set_3d_screen_content` with the exact project file ID and semantic slot ID when screen media is requested. Use `cover` for full bleed or `contain` to preserve all edges. Define the source trim in source-media seconds and set `loop` explicitly for video. Enable screen audio only if requested and check that it has one audible owner. Keep the model's placeholder when no media is specified.
3. Use `update_3d_layer` for framing, a static base pose, lighting, and the scene background. Keep the registry's scale and camera as a starting point. Canvas X/Y describe the viewport center in percentages. Model and camera positions use the model's GLB units. Native rotation inputs use degrees.
4. Write a custom move with `set_3d_keyframe_sequence`. Use absolute project seconds and ordered points inside the saved item. Use merge for additions and replace only for a new layer or an explicitly requested reset. In a new sequence, omitted fields inherit the previous state. Repeat poses to hold. Easing on a point applies to the outgoing move. Use `list_3d_keyframes` and `update_3d_keyframe` for focused revisions by stable keyframe ID.
5. Serialize timeline edits and re-read after each coherent change. Preserve creator edits and revise the existing item in place. Keep labels in native text overlays when requested. Check `get_timeline_contact_sheet` across each label's range before adding text with `add_text_overlay`. For a new finished composition, use `set_project_duration` for the intentional end and check for blank tails.

## Cost and scope

Native model placement, lighting, and keyframes require no AI generation credits. Prefer approved project media. If the creator separately asks for generated media, read `subclip-ai-generation` and its `references/creator-cli-generators.md`. Offer the supported signed-in creator generator first where available and respect a prior choice. For Subclip cloud work, use the live model catalog and estimate for the exact inputs, check credits, and obtain approval for the model, settings, output count and duration, total estimate, and retry allowance before starting. Reconcile each operation's status before retrying.

The native track accepts approved registry models and semantic edits. A creator-supplied GLB, editable custom meshes, or a custom shader on that track requires additional app support. For an explicit custom Three.js Remotion request, read the installed `subclip-remotion-layer` skill and follow the runtime route in the [shot recipes](references/shot-recipes.md). For a request that needs the native track, explain the model limit and offer an approved model if it serves the shot.

## Verify and deliver

- Read `get_3d_layer`, `list_3d_keyframes`, and `inspect_3d_composition`. Require `verify_3d_layer_setup` to pass with the expected model, timing, bindings, lighting, background type, and key times as applicable. Read back other requested appearance and transform values directly.
- Use `view_current_frame` with the project ID, `targetType: "3d"`, item ID, and exact time. Inspect the opening hold, each transition midpoint and boundary, and the last visible frame. Check clipped geometry, screen orientation and legibility, screen playback, and layer order. Where audio is requested, check audible balance and call out any listening review still needed.
- Export only on request. Read the installed export skill, then use `get_export_configuration` and `list_render_queue` before `export_video`. Omit range fields for the full film and avoid duplicate queue entries. Check exported frames when an export is part of delivery.
- Record the shot, source segment, decisions, and any failed or pending checks through `update_project_director_brief` and `write_session_summary`. Report which frames and audio were actually reviewed.

Adapted for Subclip from [mrdoob/three.js](https://github.com/mrdoob/three.js) by mrdoob and the three.js contributors, MIT.
