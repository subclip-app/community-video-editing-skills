---
name: video-shortform
description: "Plan and generate a single 3 to 10 second product reveal, teaser or ambient video shot."
---

# Video Shortform

Read the official Subclip AI generation and video generation skills. Plan one shot with one idea. Read the intended aspect ratio and shot length from the brief and timeline, then use explicit supported model settings. Use separate calls and timeline items for multiple shots. For graphic cards and title interstitials, use the official HyperFrames workflow and build from a brief covering subject, layout, palette, movement and tone.

- For a generated shot, describe the subject, framing, camera path, key light direction and warmth, subject motion, and sound only when the selected model supports it. Seedance prompts lead with motion, camera and mood. Kling prompts lead with subject, camera and style. For Veo include cinematography and supported sound cues. Use only creator-approved reference assets.
- Start with Seedance 2 (`seedance-2` in the checked catalog). For a requested Kling 4 or Sora 2 shot, check the live catalog first; the checked catalog did not expose either. If still absent, propose Kling 3 for Kling or Seedance 2 for Sora if the framing and modalities fit. Use the matching Veo 3 family option if requested and discuss any version change. Use the catalog's actual aspect, duration and input limits.
- Sample shot: ceramic mug turning on a soft paper backdrop, warm camera-left side light, dust flecks in the beam, and a slow camera drift. Set 5 seconds and 16:9 through supported settings.
- Import the completed shot as editable media and use `trim_media_item` for nondestructive timing. Inspect the actual first and last frames, motion cadence and any sound. Give the creator the shot summary and resulting asset name.

## Project context

Read the official Subclip skill gateway and video editor skills, then the specific workflow skills named below. Discover exact tool schemas before editing. Start with `get_project_outline`, then `read_project_section` for the relevant lanes and `get_project_director_brief` for project and workspace guidance. Use `list_editor_assets` for exact IDs. Keep the same explicit project ID on project calls.

Read `get_media_context` before transcribing, rescanning or extracting frames. Set `includeContactSheet: true` for source video; reuse available descriptions and transcripts. If needed, inspect specific moments with `fileId` and `inspectAtSeconds` (up to six). In an editing run, use `list_media_without_context` and `generate_media_context` for needed context, then inspect the returned sheets and save observations via `describe_media`. For attached videos, read their context manifest and storyboard paths and import the manifest's originalPath. Keep original video out of prompt context.

Reuse suitable creator media first. For image generation, offer the creator's working signed-in Codex route first when no generator was chosen. For video, the creator's working Grok CLI is optional. Ask once when a generator choice is needed, follow the official AI generation skill's creator CLI reference, respect prior choices, and use `import_external_media` with exactly one source for a creator-generated file. That path uses the creator's own plan.

For Subclip generation, use `list_ai_models` and choose the source model when available and suitable. Use `estimate_ai_generation` for the exact settings and source durations and check `get_ai_credit_status`. Quote model, count, duration, settings, total and retry allowance before spending. Obtain approval for any scope the creator has yet to authorize. Stop on credit or storage limits. Keep stable operation IDs. In-app agents end the turn after acceptance and resume on completion; external clients can check `get_ai_operation` at reasonable intervals. Reconcile status before retrying, and import completed media with `import_ai_operation_to_timeline` at the intended beat. Record stable IDs and omit temporary signed URLs from notes.

## Review and handoff

Serialize edits and reread the affected section after each coherent change. Preserve existing item IDs and unrelated creator work. Use `get_timeline_contact_sheet` across the placement range before adding text, keeping faces, key content and captions clear. Inspect actual frames via `view_current_frame` at entrances, holds, cuts and exits. Compare forward and backward seeks to the same beat for animated layers. Set intentional duration with `set_project_duration` when needed and check the last visible frame for blank tails. Check audio balance when playback is available and report any listening checks still needed.

For a requested finished file, use `get_export_configuration` and `list_render_queue` before `export_video`. Use range fields only for a requested segment. External clients can check `get_export_status` for the same export. Record decisions and limits with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/design-templates/video-shortform by nexu-io, Apache-2.0.
