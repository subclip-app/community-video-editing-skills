---
name: video-shotcraft
description: Build editable cinematic product promos in Subclip from real product captures and named shot recipes. Use for launch films, the Ink Press sequence, a single shot such as Spotlight Hero Card or Deck Deal Fly-In, beat-aligned edits, or finding, replacing and aligning product sound effects.
---

# Video Shotcraft for Subclip

Production workflow adapted for Subclip from the original Apache-2.0 skill. Read [shot recipes](references/shot-recipes.md) and [beat and sound](references/beat-and-sound.md) for the relevant task.

## Choose the scope

- **Full promo.** Use the Ink Press sequence when named. For a custom promo, check the supplied product material first. If creative mode is open, offer Ink Press, autonomous direction or guided direction and recommend one based on the product. Honor a named card as a constraint. In autonomous mode, record decisions and keep moving. In guided mode, review the product brief, requirements, visual direction and styleframe, feature-to-shot map, then full storyboard before final asset collection and production.
- **Named shot.** Confirm the card and any variant against the [upstream Gallery](https://vincentwei1021.github.io/video-shotcraft/). Read the selected card and its exact demo source as reference for timing, easing and pitfalls. Build the motion for the creator's product through Subclip. For a single shot skip the full promo planning.
- **Sound only.** Go straight to the sound reference. For a shortlist, return previews and licenses. Add or replace timeline audio only when requested. When the creator supplied a sound, use that source. Skip SFX discovery for a music-only or silent brief.

## Inspect before editing

1. Read `subclip-video-editor` with `read_subclip_skill`, then load the relevant Subclip skills for media, HyperFrames or Remotion, music, audio and review. Load export, captions or 3D guidance only when needed. External clients should discover exact schemas through `mcp_editor__list_tools`.
2. For an existing project, start with `get_project_outline`, then use `read_project_section` for only the lanes and fields in scope. Read `get_project_director_brief` and identify exact files/items with `list_editor_assets`. If a new project is needed, use `create_project` and inspect the new project the same way. Keep one explicit project ID on project-scoped calls. Respect the requested ratio or main clip ratio and default new promos to 16:9.
3. Read `get_media_context` before new scans, transcription or frame extraction. Request contact sheets with `includeContactSheet: true`. Inspect up to six specific times with `fileId` and `inspectAtSeconds` when needed. Reuse existing transcripts. For missing context, use `list_media_without_context`, then `generate_media_context` in an editing run, inspect the sheets and save observations with `describe_media`. For attached videos, read the context manifest and storyboard and import its `originalPath` with the appropriate attachment import. Keep original video out of prompts.
4. Use actual screenshots or recordings of the featured product state. Import creator attachments with `import_attachment_to_project_media` for layer bindings or `import_attachment_to_timeline` for clips. For a creator-supplied file use `import_external_media` with one supported source. If essential states are missing, use the supported Subclip recorder workflow when available or request clean captures. Freeze demo data and remove sensitive details before capture. Use separate high-resolution captures for deep zooms and let real UI define target slots. Brand-only sections can use abstract shapes.

## Plan the film

Write the product, audience, promise, concrete proof, CTA, duration and aspect ratio. Sample real brand colors, type, spacing, surface and corner treatment into one styleframe. Borrow shot choreography and timing while using the target product's visual language. Map each feature to a single visual payoff. Storyboard start, payoff, hold, page state, text, transition and sound for each shot. Budget rests before building motion.

For a music-led edit, establish the timing anchors before locking the storyboard. For a narrated edit, place the voice first and work around the real imported durations. Local narration uses `generate_local_speech` then `import_generated_audio_to_timeline`. For cloud narration load the TTS skill, use `get_voice_samples` unless choice was made or delegated, record the approved voice with `set_approved_voice` when applicable, and use `generate_speech` then `import_speech_to_timeline` after completion.

Prefer real product captures. For optional abstract generated images, offer the creator's working, signed-in Codex CLI first when available and respect their choice. Read `subclip-ai-generation` and its `references/creator-cli-generators.md`. Import creator-generated files with `import_external_media`. If using Subclip images, select a live model suited to the approved brief with `list_ai_models`, then use `generate_ai_media` and import the completed operation with `import_ai_operation_to_timeline`. The source has no preferred AI visual model. Quote paid generation before starting as described in the sound reference.

## Assemble and review

1. Build one editable HyperFrames runtime layer per composed shot by default. Use Remotion when requested or selected, or for an existing Remotion layer. Read the engine skill, use the project media URLs returned by `list_editor_assets`, validate complete source with `validate_runtime_layer_source`, then place with `add_runtime_layer`. Keep time local to the shot and deterministic at any seek point. Keep static titles, straightforward media moves and audio on native lanes where practical. For small source edits use `read_layer_source` and `edit_layer_source` with its hash. Preserve manual edits and make one editing call at a time, then re-read affected state.
2. Inspect a `get_timeline_contact_sheet` over the text range before placing titles or captions. Use `add_text_overlay` for native titles. For requested speech captions, load the caption skills, run `transcribe_project` against each exact speech item one job at a time, then apply `update_caption_words` or `update_caption_style` as needed. Keep text clear of the product and existing captions.
3. When picture timing settles, pin each sound to its action through native audio items. Recheck every changed and downstream cue after edits. Set the intended full duration with `set_project_duration` and remove unintended blank tails.
4. Inspect setup, visible peak, settle, holds, transitions and final frame with `get_timeline_contact_sheet` and targeted `seek_timeline` and `view_current_frame`. Verify readability and UI continuity, data safety, product claims, shot fidelity and any intended snap or sync. Listen for timing and balance when playback is available. Report unmeasured timing or unchecked audio. Record the storyboard and decisions with `update_project_director_brief` and the review with `write_session_summary`.
5. Deliver the editable timeline. For a requested export, read `get_export_configuration` and `list_render_queue`, then call `export_video` once per requested version. Omit range fields for a full film. External clients can check `get_export_status`. When a music-free version is requested, mute only the score for that version, keep effects, and restore the creator's mix after that render finishes. Follow the separate confirmation flow for any explicit publication request.

Adapted for Subclip from [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) by Vincentwei1021, Apache-2.0.
