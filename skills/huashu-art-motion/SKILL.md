---
name: huashu-art-motion
description: Make living paintings, art-history journeys, long-scroll worlds and narration-led explainer animation in Subclip. Use for art-style motion, reference-animation breakdowns, painterly character scenes or a choice of nine explainer grammars.
---

# Huashu art motion

Make the painting move within the shot. Design a strong frame first, then give its objects specific actions. A sequence of stills with transitions is not a living painting.

Use Subclip's native timeline for media, voice, music, text and captions. Use short editable HyperFrames layers for painted motion and diagrams. Use Remotion only for an explicit React/TSX/Remotion request, a chosen template or an existing Remotion layer. Generated clips have editable timing and framing, but their pixels are not separate editable objects.

## Read for the task

| Request | Read |
| --- | --- |
| Break down a reference or plan an art short | [Directing](references/directing.md) |
| Make an art style or compare new directions | [Style recipes](references/style-recipes.md) |
| Explain mechanisms, evidence, data or stories | [Nine grammars](references/explainer-grammars.md) |
| Walk through paintings or repaint one scene | [Painted worlds](references/painted-worlds.md) |
| Generate frames, poses or organic animation | [Generation and prompts](references/generation.md) |
| Build or revise the timeline | [Subclip assembly](references/subclip-assembly.md) |
| Review the result | [Verification](references/verification.md) |

Read the installed Subclip skills with `read_subclip_skill`, beginning with `subclip-video-editor`. Read `subclip-ai-generation`, its `references/creator-cli-generators.md`, and the relevant image/video, media-editing, hyperframes-layer, tts, audio-editing, text-captions, export and review-safety skills. Follow current schemas and internal instructions over historical upstream recipes. For native device shots, read `subclip-3d-mockup` too.

## 1. Understand the project and media

Begin with `get_project_outline`, then `read_project_section` for only the relevant fields and lanes. Call `list_editor_assets` for actual item and file IDs. Keep the same explicit project ID on each project-scoped call; discovery and pricing tools may not accept it.

Call `get_media_context` with `includeContactSheet: true` before rescanning, transcribing or extracting frames. Read existing descriptions and transcripts. If they leave a question, inspect one video by `fileId` and `inspectAtSeconds`, at most six times per request. For missing context use `list_media_without_context`, then `generate_media_context` only in an editing run. Inspect its sheets and save only observed facts with `describe_media`. Context generation writes state, so skip it in Plan mode.

For an attached video, read its context manifest and storyboard paths; import the manifest's `originalPath`. Never use the storyboard directory as the film or upload original video as prompt context. Never claim to see or hear media from its filename.

## 2. Lock the creative plan

Confirm the subject, audience, aspect ratio, desired length, available media, narration and output. Preserve an imported main video's ratio. Without one or an explicit ratio, use landscape 16:9.

Write a shot table in the director brief: time range, physical subject, action, camera, screen words and production route. Start with a concrete event in the first three seconds. Carry one example through the piece. A normal shot lasts about 2 to 6 seconds; longer concepts need several actions and genuine reading time. Let text-led shots stay below about 30 percent unless typography is the actual request.

Lock one visual language, a palette of 3 to 6 main colors and a character route. An art-history journey can deliberately change styles while retaining its scene skeleton and continuous action. For a new direction, show three compositions of the same beat, not three recolors, and let the creator choose before expanding it. Reuse a direction already approved. Include paid candidates in the quote.

Prefer real screenshots, photos and footage when they are the evidence. Code explains the material; it does not replace it with an invented picture. Use [directing](references/directing.md) to avoid repeated push-ins, empty frames and slide-like structure.

## 3. Put voice and timing first

Reuse supplied narration. For new speech, use `get_voice_samples` unless the voice is approved or the creator delegated its choice, then `set_approved_voice`. Use `generate_local_speech` for a free local draft or `generate_speech` for approved cloud speech. Import local audio through `import_generated_audio_to_timeline`, cloud speech through `import_speech_to_timeline`. Use returned durations as the beat clock.

For a silent or music-led montage, use a shared beat table instead. An eighth note is `30 / BPM` seconds. Shorten the number of beats per scene to accelerate without accelerating the music. Generated music does not guarantee exact musical onsets. Check and align the actual output.

## 4. Make one frame, then motion

Choose the route by what needs control:

- **Drawn motion:** original SVG/Canvas/DOM inside a HyperFrames runtime layer. Use it for exact object motion, diagrams and painterly materials. Keep each beat short and independently editable.
- **Generated parts:** make approved character poses or separated illustrations with `generate_ai_media`, import them, then animate native items or intrinsic assets in a runtime layer. Preserve image coordinates and feet/hand anchors.
- **Living painting:** make an anchor image, then use a discovered video model that supports the required image references or first/last frames. Keep the camera fixed and describe each moving object. Inspect loop seams; matching endpoint inputs do not guarantee a loop.
- **Hybrid:** keep narration and music native, combine generated texture or poses with exact drawn motion. Do not bake captions or evidence into generated pixels.

Before image or video generation, offer the creator's signed-in, working Codex image or Grok image/video route once if no generator was chosen. Follow the internal creator CLI reference for checks and supported commands. Do not require those CLIs or their credentials. Import chosen creator-generated files with `import_external_media`; this uses no Subclip credits, but the provider may charge. Use Subclip when chosen, when no CLI works or for capabilities those CLIs lack.

For Subclip generation, call `list_ai_models`, `estimate_ai_generation` for exact inputs and `get_ai_credit_status`. Quote model, output count, duration, settings, total and retry allowance. Prior approval covers the same scope; a larger bill needs a new decision. Pass confirmation fields only for an authorized exact operation. Stop on credit or storage limits. Use [generation](references/generation.md) for source-checked model examples and prompt recipes.

## 5. Assemble and review

Follow [Subclip assembly](references/subclip-assembly.md). Make one edit call at a time per project and re-read state after each coherent edit. Independent generation can overlap only within the approved scope. Keep returned IDs. Revise existing items and preserve creator work. Never write project JSON, layer files or editor state on disk.

In-app agents end their turn after accepted async work and resume on its completion event. External clients can check the stable operation with `get_ai_operation` at reasonable intervals. Reconcile uncertain state before retrying. A queued or slow job is not a failed job. Import completed output by operation ID, not a temporary signed URL.

Use `get_timeline_contact_sheet` across the text's time range before placement. Put exact titles in `add_text_overlay` and revise with `update_text_item`. Keep ordinary labels static; animate only when requested or intrinsic to the piece. Transcribe exact narration items one completed job at a time with `transcribe_project`; use local mode for an explicitly local test. Correct native words and style with `update_caption_words` and `update_caption_style`.

Set the intentional end with `set_project_duration`. Inspect representative frames, cuts and animation boundaries using `view_current_frame` with the same project ID. Check forward and backward seeking, material stability, character identity and text clearance. Review playback and audio where available. State any missing listening or playback review. Do not describe static validation as video verification.

Export only when requested, using `get_export_configuration`, `list_render_queue`, then `export_video`. Omit range fields for a complete film. External clients can check `get_export_status`. Do not queue duplicate exports or publish socially by default.

Record decisions and failed checks with `update_project_director_brief` and `write_session_summary`. Report the editable result, sources, costs, actual checks and remaining limits.

Adapted for Subclip from https://github.com/alchaincyf/huashu-art-motion by alchaincyf, MIT.
