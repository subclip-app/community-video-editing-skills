# Subclip assembly

Start with project outline, focused section reads, asset inventory and media context as described in SKILL.md. All project-scoped calls use the same explicit `projectId`. Make one timeline write at a time. Re-read saved state after a coherent edit; do not use filesystem writes for project state or layers.

## Narration clock

Import supplied narration with `import_attachment_to_timeline` or use an existing native audio asset. For an attached video's master soundtrack use the current audio skill's `extract_attachment_audio_to_timeline` and reuse its returned item on repeated calls. Import the manifest's original video path, not its storyboard folder.

For speech, present `get_voice_samples` unless a voice was chosen or delegated. Save it with `set_approved_voice`. A local draft uses `generate_local_speech`, followed by `import_generated_audio_to_timeline` with `generatedPath` set to its returned `filePath` or `projectFilePath`. Inspect the imported item's real duration. Cloud speech uses `generate_speech`, operation completion and `import_speech_to_timeline`.

Create a beat table from the imported audio duration and existing transcript. Record cue start, word/verb, action start, action landing and hold. Do not infer spoken timing from word count or silently speed the voice to fit an earlier visual plan.

## Native media

Use `import_ai_operation_to_timeline` for completed cloud output. Pass `replaceItemId` when replacing a beat's still. Use `import_external_media` for creator-generated media with exactly one path, public HTTPS URL or base64 source. Use `import_attachment_to_timeline` for supplied files. Imported images/video become normal media items.

Use `update_media_item` to place, frame and size, `trim_media_item` for non-destructive source trims, and `add_media_keyframe` for deliberate pan/zoom/object movement. Keep original source duration. Respect clip availability instead of stretching a short source beyond its end. Avoid identical camera motion on every still.

For media intrinsic to runtime code, import it into the project library first. An attachment can use `import_attachment_to_project_media` without adding an unwanted visible copy. Then use the exact asset URL from `list_editor_assets`. Never invent an asset URL or embed a temporary download path. Keep primary footage, narration and soundtrack in native lanes.

## Short runtime scenes

Read `subclip-hyperframes-layer`, its authoring contract and required creative references through `read_subclip_skill`. Inspect available `list_runtime_layer_templates`. For a named effect or block, discover with `list_hyperframes_registry` and read `get_hyperframes_registry_item` before recreating it. Raw upstream engines and scripts are reference material, not a Subclip template.

Author one standalone HTML document per short beat, with fixed local dimensions, one visible root, `data-composition-id`, `data-start`, `data-duration`, `data-width` and `data-height`. Register one paused timeline in `window.__timelines` with that composition ID. Use the internal pinned runtime dependencies and let Subclip inject its HyperFrames runtime. Keep variables flat strings, numbers and booleans.

Use a deterministic local scene clock. For continuity across beats, explicitly include the project's phase offset in the source or variables. No timers, unseeded randomness, accumulated physics or a playback-only render loop. A custom Canvas draw routine must be driven by the supported seek contract. Test revisiting a time after seeking backward and forward.

Call `validate_runtime_layer_source` on full source and variables, fix errors, then `add_runtime_layer` with `kind: "hyperframes"`, explicit start and duration. Use the smallest useful item rectangle; full-canvas bounds are only for an intended full-frame scene/background. An art film can use full-frame scenes; an explanatory overlay over footage should occupy only its needed area.

Check entry, settled action and exit before proceeding. For revisions, use `read_layer_source`, then `edit_layer_source` with `expectedSourceHash`. Validate a source revision; use `update_runtime_layer` for a full replacement. Preserve manual edits and the original item ID. Never create a stack of corrected duplicates.

Text-bearing elements must not have CSS filter or backdrop-filter on themselves or ancestors. This includes blur set to zero. Animate text with opacity and transforms. Isolate painterly raster processing from text. Confirm exact fonts/weights are available in preview and export. Do not assume a named font exists.

Use Remotion only when selected by the creator, a chosen template or an existing layer. Read its internal skill and validate against its renderer restrictions. One small script-free CSS effect can use `add_html_motion_graphic`; full scenes belong in runtime layers.

## Device shots

For a real device or product model use native 3D ownership. Read `subclip-3d-mockup`, discover `list_3d_models`, add using `add_3d_layer`, bind actual media IDs with `set_3d_screen_content`, animate using `set_3d_keyframe_sequence`, and inspect `verify_3d_layer_setup`. Do not invent model paths or conceal a device shot in a generic motion layer. This does not provide automatic character modeling or rigging.

## Titles and captions

Look at `get_timeline_contact_sheet` across the full text time range before placing it. Reserve space away from subjects and captions. Put exact words in `add_text_overlay` and adjust through `update_text_item`. Keep ordinary labels static; kinetic-type requests permit deliberate motion, not motion on every label. Avoid baking exact figures into generated art.

Reuse a transcript when it answers the request. For new captions, call `transcribe_project` for the exact narration/audio/media item, one completed job at a time. Choose local for an explicitly local test; cloud mode and costs follow the current transcription skill. Local speaker diarization is not supported. Keep each returned `jobId`; in-app agents resume by completion event, external clients can use `get_transcription_status`.

Correct words with `update_caption_words`, then style with `update_caption_style`. Native captions own word timing. Never paste subtitle timing into graphics as a parallel transcript. Inspect caption pages and cuts for collisions after final layout changes.

## Audio, duration and completion

Import completed music with `import_ai_operation_to_timeline`. Mix and trim through `update_audio_item`, keeping speech and music separate. Start music under speech around 0.15 to 0.30 volume, then judge the actual mix. Native fades soften incidental edges; deliberately hard musical onsets may be appropriate for a rhythmic speedrun. Do not loop voice.

Set `set_project_duration` to the final intentional end, including only a deliberate closing hold. Re-read all new items, source references, timing and duration. Delete only obsolete drafts created by this run, through the matching native deletion tool after checking its schema. Preserve creator work.

Inspect frames with `view_current_frame` at representative moments, cuts and animation boundaries. A successful save or validator does not prove pixels. Follow [verification](verification.md) and report any playback or listening gap.

When export is requested, read `get_export_configuration` and `list_render_queue` before `export_video`. For a full film omit range fields. For a requested segment use both exact bounds. Use `get_export_status` only as appropriate for an external client. No duplicate render. No social publication without its separate exact request and confirmation flow.

Write choices and failed checks in `update_project_director_brief` and `write_session_summary`. Store stable operation IDs, not signed URLs.
