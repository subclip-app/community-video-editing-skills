---
name: bang-motion
description: Make brand-led openers, promos, bumpers, kinetic typography, animated product demos and illustrated explainers in editable Subclip HyperFrames layers. Use for Bang Motion requests or motion pieces that feel like slides and need a persistent world, purposeful camera and fresh structure.
---

# Bang Motion for Subclip

Make motion with a clear visual argument. Keep Bang Tutorial's concept choices, brand-derived style, living typography, persistent subject and deterministic camera. Deliver editable Subclip timeline layers, with separate native footage and audio.

Use this for openers (about 15 to 40 seconds), product tours (20 to 60), bumpers (3 to 8), kinetic type (10 to 60), and explainers (30 to 90). These are planning ranges, not limits. Respect the creator's length and aspect ratio. Default new motion films to landscape 16:9 when no main imported video sets the ratio. Captions are optional and off by default.

## 1. Inspect before designing

1. Start with `get_project_outline`, then `read_project_section` for only needed lanes and fields. Read `get_project_director_brief`, then `list_editor_assets` for real item and file IDs. Keep one explicit `projectId` on every project-scoped call. Discovery and source validation calls follow their own schemas.
2. Read `subclip-video-editor` through `read_subclip_skill`, then `subclip-motion-graphics` and `subclip-hyperframes-layer`. Read the latter's `references/authoring-contract.md` and required resources in `references/official-index.md`. Load `subclip-ai-generation`, `subclip-media-editing`, `subclip-audio-editing`, `subclip-tts`, `subclip-text-captions`, `subclip-3d-mockup`, `subclip-export` and `subclip-review-safety` only for the work needed. Internal skills and current schemas take precedence.
3. Before rescanning, transcribing or extracting frames, read `get_media_context` with `includeContactSheet: true`. Inspect its descriptions and contact sheets. For unclear moments, use `fileId` and `inspectAtSeconds`, at most six moments before wider analysis. Reuse existing transcripts. Do not infer content from filenames.
4. For missing context, use `list_media_without_context`, then `generate_media_context` in an editing run. Inspect returned images and save observed descriptions with `describe_media`. Context generation writes state, so skip it in Plan mode. For attached videos, read the context manifest and storyboard paths; import its `originalPath`, never the storyboard directory. Do not upload original video as prompt context.
5. If the project is empty and untitled, use `rename_project` for a short creative title before other editor writes. Preserve a creator's existing title. Set the canvas deliberately with `set_canvas_properties` before adding layers.

## 2. Choose a concept and style

Read [anti-slide checks](references/anti-ppt.md) before planning. For openers and promos, read [the 19 concept menu](references/opener-concepts.md). For explainers, read [explainer modes](references/explainers.md), plus [cartoon stages](references/cartoon-stages.md) when characters carry the story.

Write a compact brief before source authoring:

- Subject, audience, message, length, ratio, audio plan and three feeling words.
- Three concept candidates, one recommendation grounded in what the product can prove visually. Record a structure fingerprint: concept / beat count / main object per beat / opening / ending.
- Main, background and accent colors with hex values and their brand source or a reason for deriving them. Choose a verified display face and companion face; faithful UI demos use the product's actual UI font. Confirm font weights in preview and export.
- Optional word emphasis, one motion signature, background movement, surface and object material family. State any palette change and its visible trigger.
- Asset sources and shot list, transition choices, and one special moment with a visible acceptance criterion.

Show the brief for review. Honor prior choices and delegated creative decisions; ask only for missing information that affects the result. Do not make every new sentence a new scene. From references take rhythm, attention and motion language, then build a structure and visual identity from this subject. Compare with any known previous opener: change the concept or at least three fingerprint fields, and at least three of palette, typography, background language and motion signature.

## 3. Settle assets and cost

Use supplied or already imported assets first. Exact titles, numbers and logos stay editable, outside generated pixels. Keep one approved persona and costume across character shots. Generated factual reconstructions need a visible illustration label; use rights-cleared real images for named real people and evidence.

For AI images or video, use Subclip's `generate_ai_media` workflow in [native production](references/subclip-production.md). If the creator has not chosen a generator, offer their own working signed-in Codex CLI for images or Grok CLI for images/video once, following `subclip-ai-generation` resource `references/creator-cli-generators.md`. Respect a prior Subclip choice. Those optional routes use no Subclip credits, but the provider may charge. They need no new credentials and are never required. Import chosen external results with `import_external_media`.

Before paid work, use `list_ai_models`, `estimate_ai_generation` with the exact inputs, and `get_ai_credit_status`. Quote the model, count, durations, settings, total and retry allowance. Get approval for that exact scope unless already authorized. Do not auto-retry uncertain operations or exceed the approved budget. Stop on credit or storage limits.

For narration, voice first: approve a voice through `get_voice_samples` and `set_approved_voice`, then `generate_speech`, or use `generate_local_speech` for a local draft. Import the audio and derive beat windows from its real duration. If the creator explicitly wants a silent draft before recording, mark timings provisional and retime the same layers when the voice arrives. Keep the script and beat table in project notes.

## 4. Build editable motion

Read [techniques](references/techniques.md) for choreography and [native production](references/subclip-production.md) for assembly and tool fields.

- Use short, separately editable HyperFrames segments through `add_runtime_layer` with `kind: "hyperframes"`. One segment has one paused registered timeline, local time, explicit start and duration. Match shared-world boundary poses across segments. A single short beat may be one item; a long film is never one giant HTML item.
- Use Remotion only for an explicit React/TSX/Remotion request, chosen template or existing Remotion revision. Use `add_html_motion_graphic` only for one small script-free CSS effect, never a film scene.
- Inspect the insertion frame before choosing geometry. Use a contained transparent rectangle for overlays; full-canvas geometry belongs to an explicitly full-frame scene/background. Native text, media and audio remain independent where practical. Integrate kinetic words inside the runtime only when the choreography needs them there.
- Validate full source with `validate_runtime_layer_source` before saving. Use runtime templates and registry discovery as described in the internal skill. Search any named registry effect before hand-authoring it.
- Revise the same ID using `read_layer_source` and `edit_layer_source` with `expectedSourceHash`, or `update_runtime_layer` for a full replacement. Preserve manual element edits. Never write editor state or saved layer files on disk.
- Use native Media items with `update_media_item`, `trim_media_item` and `add_media_keyframe` for footage, trim and parallax. Keep original source duration. Native device shots use `list_3d_models`, `add_3d_layer`, `set_3d_screen_content`, `set_3d_keyframe_sequence` and `verify_3d_layer_setup`; use exact model, slot and media IDs.
- Ordinary titles use `add_text_overlay` and `update_text_item`; keep static unless motion is intrinsic or requested. Read `get_timeline_contact_sheet` over the text range before placing text away from faces, subjects and captions.
- Keep narration and music as native Audio items; mix and fade with `update_audio_item`. Requested captions use `transcribe_project` for one exact audio/media item at a time, then `update_caption_words` and `update_caption_style`. Tests use local single-speaker mode; cloud work follows approved credit scope.

Make one editing call at a time per project. Independent generation can overlap within budget; timeline writes cannot. Re-read relevant saved state after each coherent edit. Remove only obsolete drafts made in this run. Set the final intentional endpoint with `set_project_duration` and verify no blank tail remains.

## 5. Verify and deliver

Inspect representative frames with `view_current_frame` using the same project ID: each entrance, settled pose, cut boundary and final hold. Use contact sheets for wider review. A named spectacle needs frames before, during its visible peak, and after. Check backward and forward seeks for identical state. Static validation and saved source are not visual proof.

Apply the anti-slide checks: persistent subject/world, at most two text levels, meaningful action, varied framing, readable type, no exposed world edges. Check media loading, font wrapping, joints, palette triggers and audio ownership. Verify audible balance where possible; disclose any listening review still needed.

Export only on request. Read `get_export_configuration`, check `list_render_queue`, then call `export_video` once. Omit range fields for a full film. Use `get_export_status` from external clients; in-app agents end the turn after accepted asynchronous work and resume on completion. Review the actual output when export is authorized, especially text and grain. Social publication needs a separate exact request and the app's confirmation flow.

Update `update_project_director_brief` and `write_session_summary` with the fingerprint, palette sources, voice, beat timings, IDs, spend, failed checks and remaining review. Report what was actually verified. Do not claim playback, listening or export checks that were not performed.

Adapted for Subclip from [bangtutorial/bang-motion](https://github.com/bangtutorial/bang-motion) by bangtutorial, MIT.
