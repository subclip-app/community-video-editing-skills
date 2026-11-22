# Native Subclip production

Checked against Subclip's local-mcp-service.ts and user-skills/mcp-tools.ts on 2026-11-23. Discover the current schema again before a real edit; the current internal skills win over upstream examples. This reference supplies the production path for Claude Code, Codex, Cursor and the in-app agent.

## Discover, inspect, preserve

Read internal skills with `read_subclip_skill` and their linked references via `resourcePath`. Use `mcp_editor__list_tools` for exact schemas when tools are not directly exposed. Start project work with `get_project_outline`, scoped `read_project_section`, `get_project_director_brief` and `list_editor_assets`.

Every call that supports a project must carry the same explicit `projectId`. Some discovery/validation tools have no such field. Follow their schema. Do not add fields to a tool merely because another tool uses them. Use returned revisions and `ifRevision` where supported to avoid redundant reads.

Before any new analysis, use `get_media_context` with `includeContactSheet: true`. Read the actual images, description and existing transcript. Inspect at most six specific times with `fileId` and `inspectAtSeconds` before broader work. Missing context uses `list_media_without_context`, then `generate_media_context` and `describe_media` in an editing run. No context generation in Plan mode. Read attached video manifests and import `originalPath`.

Only write through named tools. Serialize project mutations and re-read the affected items after each coherent edit. Save source changes on the existing item, with manual element edits intact. No editor-state files are edited on disk.

## Optional generation

Keep the creator's own assets first. Before images/video, honor a prior generator choice. If none exists, follow `subclip-ai-generation` and its `references/creator-cli-generators.md` to offer a working signed-in creator generator once. Do not require it or collect credentials. Use Subclip for an explicit Subclip choice, unavailable CLI, or an unsupported CLI capability. Import external results with `import_external_media`, providing exactly one source: absolute path, public HTTPS URL or base64. Confirm files exist and inspect outputs. External provider cost is separate from Subclip credits.

Subclip image/video flow:

1. Call `list_ai_models` for the requested kind. Read its actual operation, aspect ratio, resolution, reference roles, duration and settings support. Do not preserve upstream provider IDs or rate-limit recipes.
2. Resolve each approved input through `list_editor_assets`. Pass exact IDs and supported roles in `sourceAssets`, never inside `settings`. References visible in chat are not automatically approved for upload. Never send original video merely as prompt context; use only supported, explicitly chosen source inputs for the requested transformation.
3. Call `estimate_ai_generation` with matching `kind`, `modelId`, resolution, duration, audio mode, output count, settings and asset metadata. Include exact source durations for video. This tool takes `assets` metadata for pricing, while generation takes `sourceAssets` IDs. `outputCount` is outputs per generation, not total clip count. Multiply a matching per-generation quote by the planned number of jobs and quote music/voice separately.
4. Use `get_ai_credit_status` to check affordability. State number and duration of outputs, settings, estimated total, maximum reservation where returned, and retry allowance. Zero retries is a valid default. Get the creator's decision if the exact scope is not authorized. Confirmation fields attest to that specific authorization, not blanket permission.
5. Call `generate_ai_media` once per approved output with `kind: "image"` or `kind: "video"`, live `modelId`, prompt, settings and references. Preserve the returned stable operation ID. In-app agents end the turn after accepted async work and resume on completion. External clients can inspect `get_ai_operation` at reasonable intervals. A slow or queued operation is not a failure.
6. Reconcile an uncertain request before retrying. Stop on credit or storage limits. A broader batch, model change or extra retry needs a new budget decision unless covered already. Never keep temporary signed output URLs in notes or runtime source.
7. Read `get_ai_operation` before use and import the completed stable ID with `import_ai_operation_to_timeline`. A replacement can pass the exact existing media `replaceItemId`, preserving its slot. Do not add a duplicate and then rediscover it. Imported pixels are editable as a Media item, not decomposed into vector parts.

Use Subclip's internal background-removal skill for that specific operation; do not invent a generic remove_background tool. Keep any paid processing inside the approved scope. If unavailable, use an agreed vector design or supplied transparent asset and disclose the limitation.

## Narration and soundtrack

For an approved existing voice, reuse it. Otherwise use `get_voice_samples`, let the creator choose or honor delegated choice, then `set_approved_voice`. For a local draft, check available voices through `list_local_voices` and call `generate_local_speech`. Do not silently download a voice model without resolving the internal skill's download consent requirement. Import the returned WAV using `import_generated_audio_to_timeline`; use the returned `filePath` or `projectFilePath` as the current import schema specifies.

For cloud narration, discover the audio model and stable voice, quote the exact script and generate through `generate_speech`. Import a completed result with `import_speech_to_timeline`. Do not accelerate speech merely to fit an arbitrary earlier animation length.

Read the imported audio's actual duration from the project. Keep a beat table: narration item ID / phrase / source timing / project start / project end / visual action. Read existing transcript context first. If a transcript is needed, use `transcribe_project` on the exact `audioItemId` or `mediaItemId`, one terminal job at a time. Choose `purpose: "reference"` for timing analysis or `purpose: "captions"` for requested visible captions. Local single-speaker mode is for tests or a creator's local-processing choice. Cloud mode and speaker detection follow their own supported scope and cost rules. Do not manually re-offset completed word batches.

If music is requested, use `generate_music` after live model selection and approved estimate. Reuse a suitable existing track when no new music is requested. Import its completed operation as a native Audio item. Keep voice, music and SFX independent. Use `update_audio_item` for trim, volume and fades. An initial music volume around 0.15 to 0.30 under speech can help, but it is a starting point, not proof of audible balance. Keep one audible owner per source.

## HyperFrames segments

Read the current internal authoring contract. It describes a complete HTML document with one visible composition root, fixed local pixel dimensions and matching `data-composition-id`, `data-start`, `data-duration`, `data-width` and `data-height`. Use exactly one paused GSAP timeline registered in `window.__timelines` under that composition ID. Subclip injects its HyperFrames runtime. Use its currently pinned GSAP URL, not the upstream starter version.

Author one natural scene or beat per source. Flat `variables` contain only strings, finite numbers or booleans and are read from `window.__hfVariables`; Remotion uses `props` instead. Keep text content, palette and key dimensions easy to revise. Do not bundle an entire long film and split it afterward: each split starts its own internal clock.

Use finite, seekable motion. No independent playback loop, wall-clock time, unseeded random state, interactive debug player or upstream autoplay controls. Preload needed resources before registration, keep initial state explicit, and make backward seeking reproduce forward seeking. For continuous sequences, match boundary pose and background distance between focused segments. A cut can change worlds deliberately; a matched transition cannot hide a missing frame by accident.

Use `list_runtime_layer_templates` for current templates. For an exact named Motion template, `list_motion_graphics_templates` returns the import arguments. For a named registry block or recognizable registry effect, use `list_hyperframes_registry` and `get_hyperframes_registry_item`, read required source, then adapt it to Subclip's contract. Do not install or run upstream packages.

Saving a new segment:

- `validate_runtime_layer_source`: pass `kind: "hyperframes"`, complete `source` and any `variables`. This is read-only and has no `projectId` field. Fix errors before save.
- `add_runtime_layer`: pass explicit project ID, `kind: "hyperframes"`, `source` or `templateId` (never both), semantic `name`, `startTime`, `duration`, and deliberate geometry. X/Y are center percentages; width/height are canvas percentages. Set `intrinsicWidth`/`intrinsicHeight` only when needed to match the authored size.
- A full-frame film scene can use 100 by 100 when the request calls for that scene/background. Overlays need the smallest useful transparent box after frame inspection. No opaque full-frame default over existing creator work.
- Re-read inventory, then inspect exact composed pixels with `view_current_frame`, `timeSeconds`, `targetType: "motion-graphics"` and the returned `itemId`.

Revising a segment:

- Use `get_runtime_layer` for the current full source/bindings, or `read_layer_source` for numbered lines and `sourceHash`.
- Use `edit_layer_source` with `expectedSourceHash` for a precise patch; validation occurs in the save path. For complete replacement, prevalidate and use `update_runtime_layer` on the same item.
- Preserve the HyperFrames manual element-edit style block and unrelated variables. `mergeBindings: true` supports partial variable updates. Update timing/source duration together during retiming.
- Do not add a corrected duplicate. Remove only exact obsolete current-run drafts through `delete_runtime_layer`.

Fonts must actually load in preview and export. A font installed for the agent is not proof the sandbox can see it. Import media into the library first, re-list assets and use exact returned URLs for inseparable embedded assets. Prefer native Media/Audio lanes. Never construct a subclip-media URL from a guessed ID or use a temporary provider URL. A custom Three.js scene must follow the current pinned deterministic adapter; a bundled device belongs in native 3D.

## Native items

| Content | Owner and tools |
| --- | --- |
| Supplied media | `import_attachment_to_timeline`; use `import_attachment_to_project_media` when only a library file is needed. |
| Licensed stock | `import_public_asset_to_timeline` with search query and returned attribution. |
| Project-local generated visual | `import_generated_media_to_timeline`, with `replaceItemId` for replacing an existing visual. |
| Clip placement, framing and motion | `update_media_item`, `trim_media_item`, `add_media_keyframe`; never shorten source-file duration to an edit trim. |
| Simple titles and labels | `add_text_overlay`, `update_text_item`; intrinsic/requested Text motion uses `add_text_keyframe`. |
| One small standalone script-free effect | `add_html_motion_graphic`, after the internal HTML/CSS validation workflow. Full scenes stay in runtime layers. |
| Requested captions | `transcribe_project` per exact source, then `update_caption_words` and `update_caption_style`. |
| Devices | `list_3d_models`, `add_3d_layer`, `set_3d_screen_content`, `set_3d_keyframe_sequence`, `verify_3d_layer_setup`. Use returned IDs and screen slots. |
| Audio | `update_audio_item` for timing, gain and fades; keep normal Audio items. |

Media transforms use normalized canvas fractions, while Runtime geometry and Text keyframe positions use percentages. Check the particular schema, do not copy numeric placement blindly between them. Runtime timing uses start plus duration when adding; updates support end or duration, never both.

Before text placement, call `get_timeline_contact_sheet` with times across its whole range. Keep subjects, existing titles and captions clear. After placing it, render the same times again. Keep static native labels static unless motion supports this requested piece.

For a 3D screen source, import the exact attachment to Project Media, bind its returned file ID to the returned screen slot, and verify setup. If screen audio is requested, follow the current 3D skill's supported screen-audio binding; do not add duplicate audio playback.

## Verification, export and handoff

After each coherent edit, read saved timings and inventory. Inspect entrances, settled poses, exits, every boundary, and the visible peak of a requested payoff with `view_current_frame` and the correct project ID. Contact sheets help broader review. Check continuous action with actual playback where available; sampled stills alone do not prove smooth motion. Resolve missing fonts/assets, clipping, text overlap, broken joints and unintended blank frames in place.

Use `set_project_duration` for the final intentional content end, preserving deliberate holds. Re-read the resulting duration and inventory. Do not let the canvas background create an unplanned tail.

Export only when requested: `get_export_configuration`, then `list_render_queue`, then `export_video` once. Omit start/end for the full film. Use both only for a requested segment. In-app agents resume from completion; external clients can call `get_export_status`. MP4 does not carry alpha. If transparency is requested, follow the export skill's supported format and background checks. Review the actual requested output before claiming export quality. Publication is a separate explicit action.

Record decisions with `update_project_director_brief` and `write_session_summary`. Include script, fingerprint, beat table, asset and operation IDs, credit scope, font substitutions and failed checks. Do not store signed URLs or raw editor JSON. Clearly separate saved structure from observed pixels, listened audio and export review.

No app test was performed during this conversion because the conversion contract prohibited touching running apps. A future authorized smoke test can use local speech and at most three animated scenes; inspect real frames and report only those actual results.
