---
name: video-hyperframes
description: "Turn a short script into consecutive editable motion scenes with a hook, evidence and a CTA."
---

# HyperFrames Video

Start with about six to ten beats for a short script and roughly three seconds per silent beat, adjusting for content and available runtime. Default to landscape 1920 by 1080. For a narrated video, read the official TTS skill, use existing narration if suitable, or use `generate_local_speech` and `import_generated_audio_to_timeline` for free local narration. Use the approved Subclip speech workflow when cloud narration is requested. Time the visuals against actual imported speech, including pauses.

1. Hook with a question, a surprising verified number or a claim the video can support. Follow with one shot or idea per beat. Close with the conclusion and the requested next action.
2. Use one dark cinematic palette with one neon accent. Set one short headline per beat in large type and vary centered, thirds and offset compositions. Use the creator's real facts and footage. Build an optional progress line from the elapsed scene time. Match transitions to content, usually a brief fade or a clean cut.
3. Put distinct beats in separate editable layers if they need independent retiming. Inside a linked sequence, place explicit starts and durations and keep next/previous navigation in Subclip's timeline. Keep optional captions native. Read the transcription and text captions skills, then use `transcribe_project` per exact item, one completed job at a time, and `update_caption_words` and `update_caption_style` as needed.
4. Inspect the first read, each cut and the final CTA hold. Check that any progress indicator follows scrubbing. Use the Remotion layer skill only when the creator requests that engine, chooses a Remotion template or already has a Remotion layer.

## Project context

Read the official Subclip skill gateway and video editor skills, then the specific workflow skills named below. Discover exact tool schemas before editing. Start with `get_project_outline`, then `read_project_section` for the relevant lanes and `get_project_director_brief` for project and workspace guidance. Use `list_editor_assets` for exact IDs. Keep the same explicit project ID on project calls.

Read `get_media_context` before transcribing, rescanning or extracting frames. Set `includeContactSheet: true` for source video; reuse available descriptions and transcripts. If needed, inspect specific moments with `fileId` and `inspectAtSeconds` (up to six). In an editing run, use `list_media_without_context` and `generate_media_context` for needed context, then inspect the returned sheets and save observations via `describe_media`. For attached videos, read their context manifest and storyboard paths and import the manifest's originalPath. Keep original video out of prompt context.

Read the official Subclip HyperFrames layer skill. Author standalone HTML/CSS with named elements, a root composition ID, explicit dimensions and duration, and a paused timeline registered under that same ID. Use the runtime's supported pinned GSAP when needed. Drive every state from layer time; translate CSS loops to finite seekable curves or time-derived states. For a loop, compare the last frame with the first and use phase-aligned cycles. Import any needed media to the project library, reread assets, and bind the exact returned URLs. Keep separable audio and footage in their native lanes.

Use `validate_runtime_layer_source` before `add_runtime_layer`; supply explicit geometry and use the full canvas for an intended full-frame design. For revisions, use `read_layer_source` and `edit_layer_source` with the returned source hash, or `update_runtime_layer` for a complete replacement. Preserve manual edits. A single small standalone CSS effect can use `add_html_motion_graphic` if the official motion graphics skill confirms it can be previewed and exported as intended.

## Review and handoff

Serialize edits and reread the affected section after each coherent change. Preserve existing item IDs and unrelated creator work. Use `get_timeline_contact_sheet` across the placement range before adding text, keeping faces, key content and captions clear. Inspect actual frames via `view_current_frame` at entrances, holds, cuts and exits. Compare forward and backward seeks to the same beat for animated layers. Set intentional duration with `set_project_duration` when needed and check the last visible frame for blank tails. Check audio balance when playback is available and report any listening checks still needed.

For a requested finished file, use `get_export_configuration` and `list_render_queue` before `export_video`. Use range fields only for a requested segment. External clients can check `get_export_status` for the same export. Record decisions and limits with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/examples/video-hyperframes by nexu-io, Apache-2.0.
