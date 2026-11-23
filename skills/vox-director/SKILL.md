---
name: vox-director
description: Direct Vox-style paper-collage explainers, scrapbook shorts and ads in Subclip. Use for beat maps, shot lists, visual theme comparisons, wide-to-detail coverage, or collage treatments for recorded presenters, portrait photos, product photos and speaking digital hosts.
---

# Vox director

Design the collage as a strong still before adding motion. Use [Vox explainer](https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/vox-explainer) for the full topic-to-film workflow. Bring its script or timed narration into this skill for shot direction. Hand the approved arc, theme, timecodes and shot plan back into its production stages when needed.

## Read the project

Read the built-in Subclip video editor skill first. Use the generation, media editing, transcription, motion, avatar, audio, captions and export skills as needed. In an existing project, start with `get_project_outline` and targeted `read_project_section` calls. Use `list_editor_assets` for item and file IDs. Keep the same explicit project ID wherever the schema accepts it.

Before scanning or transcribing, call `get_media_context` with `includeContactSheet: true`. Reuse matching transcripts. If needed, inspect the exact file with `fileId` and up to six `inspectAtSeconds` moments. In an editing run use `list_media_without_context`, then `generate_media_context` for missing context and `describe_media` for observed descriptions. For attached video, read the context manifest and storyboard first. Import the manifest's original media via `import_attachment_to_timeline`. Use contact sheets and observed descriptions as prompt context.

## Approve the beat map

1. Pick a mode. **B-roll** builds a collage from a topic or narrated script. **A-roll** keeps an existing speaker's performance. **C-roll** keeps one photo as a cutout. **Host** adds a speaking digital presenter to selected beats.
2. Read [beat and shot design](references/beat-layer.md). Fit the arc to the topic. Put the hook inside the first three seconds. Plan wide-to-detail coverage where the narration has room. Use sentence ends and natural pauses to group A-roll and supplied narration. If timed words are missing, use `transcribe_project` in local reference mode on the exact item. Complete one job before starting another.
3. Show the creator the beat map before visual generation. Include the narration, provisional shot windows, headline, shot size, camera move, separate element motion, mood, palette and placement of any subject that must stay visible. Honor the requested canvas or existing main video. Default new motion explainers to 16:9. Confirm a proposed aspect compromise if a model cannot match the canvas.
4. For a production run, use imported speech durations as the clock before locking cuts. Draft with `generate_local_speech` and `import_generated_audio_to_timeline` if needed. Update the shot map with the measured windows, then carry one continuous voice take across the wide and the detail.

## Approve the look

Read [themes and prompt recipes](references/prompt-guide.md). Compare three or four topic-appropriate themes on the same representative composition, aspect and framing. Show text or native mockups first for planning. Generate samples only within the approved scope. Let the creator choose by eye before making the rest of the keyframes. Save the chosen style block, anchor and print treatment. Vary the background within that palette to carry the story.

## Choose generation and quote the work

- Offer the creator's own signed-in Codex image generator first if available. A working signed-in Grok CLI is an optional video route. Follow the built-in Subclip AI generation skill's creator generator reference. Ask once if there is no choice, and respect prior choices. Import creator-generated files with `import_external_media`.
- For managed generation, see [production recipes](references/production.md) for the upstream models and capability matches. Use `list_ai_models` for active options, exact source roles and settings. Use `estimate_ai_generation` on the exact model, references, source durations and settings. Check `get_ai_credit_status`. Quote model, output count, duration, settings, total estimate, reservation when returned, and retry allowance. Obtain approval for any unapproved scope before spending. Requote on material changes. Stop on credit or storage limits.
- Keep accepted operation IDs. In app, end the turn and resume on completion. External clients can check `get_ai_operation` at reasonable intervals. Reconcile uncertain submissions before retrying. Import completed visuals with `import_ai_operation_to_timeline`. Keep temporary signed URLs out of project notes.

## Cut and verify

For editing, read [production recipes](references/production.md). Keep one edit call at a time. Re-read the affected state after each coherent edit and preserve existing item IDs and manual work. Keep voice, music, exact text and individual cutouts editable. Use `get_timeline_contact_sheet` before placing text, then check the same times for collisions. Transcribe visible captions one exact narration or speaker item at a time when requested. Correct with `update_caption_words` and style with `update_caption_style`.

Use `set_project_duration` for the intended ending, with no blank tail. Check representative shots, both sides of cuts, entrances and settled poses with `view_current_frame`. Compare faces and labels to their originals, and review presenter lip sync and narration/music balance where playback is available. State what still needs listening or playback review. Export only on request. Read `get_export_configuration` and `list_render_queue` before `export_video`. Omit range fields for a full film and reuse any matching in-flight export. Record the approved direction and verified results or failures with `update_project_director_brief` and `write_session_summary` during editing runs. Keep planning runs read-only.

Adapted for Subclip from [Vox Director](https://github.com/Alisa0808/vox-director) by Alisa0808, MIT.
