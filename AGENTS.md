# Convert a skill to Subclip

Use these instructions when adapting any upstream skill for this directory. Keep its creative method and useful references. Turn its production steps into an editable Subclip workflow that works with Claude Code, Codex, Cursor and the in-app agent.

## Read and check the source

1. Read the source SKILL.md, README, references and LICENSE. Identify its triggers, creative techniques, required inputs, outputs, external services and scripts.
2. Confirm that the license allows changes, redistribution and commercial use. Keep the original LICENSE and notices byte for byte. Respect attribution and share-alike requirements. If no license grants those rights, or it is non-commercial or no-derivatives, do not copy it. Add a link and explanation to INSTALL_YOURSELF.md instead.
3. Read CONTRIBUTING.md. Use the Vox conversion in `skills/vox-explainer/`, especially `references/subclip-models.md` and `references/subclip-assembly.md`, as an example of narration-led timing and native assembly. Its historical model prices and retry advice do not replace the live catalog or current operation state.
4. Read the installed Subclip skills through `read_subclip_skill`, starting with `subclip-video-editor` and the relevant generation, media, motion, captions, audio, 3D, export and review skills. In a Subclip source checkout, read `resources/agent-skills/`. Follow current tool schemas and internal skills when they differ from upstream recipes.
5. Verify every named tool against the current catalog. For source-based verification, search `src/main/local-mcp-service.ts` and `src/main/user-skills/mcp-tools.ts` in the Subclip AI Editor checkout. Do not invent a capability. State any missing operation and the closest supported alternative.

The tool names below were checked against those two source files on 2026-11-23. Check again when making a new conversion.

## Read media context first

Begin project work with `get_project_outline`, then `read_project_section` for only the required lanes and fields. Use `list_editor_assets` for real item and file IDs. Keep the same explicit project ID on every call.

Before rescanning, transcribing or extracting frames, call `get_media_context`. Read descriptions and video contact sheets with `includeContactSheet: true`. If needed, inspect specific moments with `fileId` and `inspectAtSeconds`, at most six moments, before requesting wider analysis. Reuse an existing transcript when it answers the question.

For files without context, call `list_media_without_context`, then `generate_media_context` in an editing run. Inspect the returned contact sheets and save observed descriptions with `describe_media`. Context generation writes state, so do not do it in Plan mode. Never claim to have seen or heard media based only on a filename. For attached videos, read their context manifest and storyboard paths; import the manifest's `originalPath`, not its storyboard directory. Never upload or encode original video as prompt context.

## Replace outside generation and API keys

Remove instructions to create provider accounts, collect API keys, set provider key environment variables, call outside AI endpoints or run provider SDKs. Do not include credentials in files or chat. Use this mapping:

| Upstream operation | Subclip workflow |
| --- | --- |
| Image or video generation | `list_ai_models`, then `generate_ai_media` with the supported kind, settings and exact project references. |
| Cloud narration | `get_voice_samples` first unless a voice is already approved or delegated, `set_approved_voice`, then `generate_speech`. |
| Free local narration and tests | `generate_local_speech`, then `import_generated_audio_to_timeline`. |
| Music or soundtrack | `generate_music`, then import the completed operation as an audio item. |
| Model selection and price | `list_ai_models`, `estimate_ai_generation` for exact inputs, and `get_ai_credit_status` to check the budget. |
| Completed cloud output | `get_ai_operation`, then `import_ai_operation_to_timeline` using the stable operation ID. Cloud speech can use `import_speech_to_timeline`. |
| Creator's own generated file | `import_external_media` with exactly one path, public HTTPS URL or base64 source. |
| Generated project-local visual | `import_generated_media_to_timeline`, using `replaceItemId` when replacing an existing visual. |
| Attached media | `import_attachment_to_timeline`, or `import_attachment_to_project_media` when only a media file is needed, such as a 3D screen source. |
| Licensed stock result | `import_public_asset_to_timeline` with the search query and returned attribution. |

Before image or video generation, offer the creator's own signed-in, working Codex CLI for images or Grok CLI for images and video. Ask once if no generator is chosen. Read Subclip's `subclip-ai-generation` reference `references/creator-cli-generators.md` for supported checks and commands. Respect a prior choice. Import the resulting files with `import_external_media`. This route uses no Subclip credits; do not promise the outside provider is free. Do not require those CLIs or ask for their credentials. Use Subclip when chosen, when no CLI works or for capabilities those CLIs do not provide.

Before spending credits, quote the model, number and duration of outputs, settings, estimated total and retry allowance. Use the live catalog; copied model names and prices are examples only. Quote video with `estimate_ai_generation` using the exact source durations and settings. Get approval for the quoted scope when it has not already been authorized. An existing approval covers the same scope; a larger bill needs a new decision. Pass confirmation fields only when the request authorizes the exact operation. Stop on credit or storage limits.

Keep stable operation IDs. In-app agents end their turn after accepted asynchronous work and resume on its completion event. External clients can check `get_ai_operation` at reasonable intervals. Do not submit duplicates because an operation is queued or appears slow. Reconcile its actual status before retrying an uncertain request. Do not store temporary signed URLs in project notes.

## Replace shell assembly with native editing

Remove required ffmpeg, Python, shell and executable assembly scripts from the skill. Preserve useful design rules as references and implement their result with editor tools. Never write project JSON, layer files or editor state on disk.

| Upstream technique | Editable Subclip equivalent |
| --- | --- |
| Concatenate, trim, pan, zoom, composite | Native media items with `update_media_item`, `trim_media_item` and `add_media_keyframe`. Preserve source duration and non-destructive trims. |
| Titles and labels | `add_text_overlay` and `update_text_item`. Keep text static unless motion is requested or intrinsic to the piece. |
| Motion scenes, diagrams, code animation | HyperFrames layers by default through `add_runtime_layer`; Remotion for an explicit React/TSX/Remotion request, chosen template or existing Remotion layer. Read the corresponding internal skill and validate deterministic seeking. |
| One small standalone CSS effect | `add_html_motion_graphic`. Full video scenes belong in runtime layers. |
| Revision of a motion layer | `read_layer_source` and `edit_layer_source` with the returned source hash, or `update_runtime_layer` for a full source replacement. Preserve manual element edits. |
| Device or product 3D shots | Native 3D layers. Discover `list_3d_models`, add with `add_3d_layer`, bind exact media IDs with `set_3d_screen_content`, animate with `set_3d_keyframe_sequence` and check `verify_3d_layer_setup`. Do not invent model paths or hide device layers in Motion Graphics. |
| Subtitle files or burned captions | `transcribe_project` per exact narration/audio/media item, one completed job at a time. Use local mode for tests, then `update_caption_words` and `update_caption_style`. Keep native timing ownership. |
| Audio mixing and fades | Native audio items with `update_audio_item`. Keep narration and music independently editable. |
| Final render | `get_export_configuration`, `list_render_queue`, then `export_video` when requested. External clients can use `get_export_status`. |

One edit call at a time per project. Independent generation jobs may run together within the approved budget; timeline writes may not. Re-read state after each coherent edit. Use returned item IDs, preserve creator work, revise existing layers in place, and remove only obsolete drafts created by the current run.

Honor the requested aspect ratio. Without a main imported video or explicit ratio, new motion explainers and promos use landscape 16:9. For narrated films, voice first: use imported audio durations as the beat clock, then fit visuals, captions and music to those timings. Set intentional duration with `set_project_duration`; avoid blank tails.

Before placing text, use `get_timeline_contact_sheet` across its time range. Place it clear of faces, key subjects and existing captions. After editing, inspect representative frames, cuts and animation boundaries with `view_current_frame` using the correct project ID. Saved state and successful tool calls are not visual proof. Verify audible balance where possible and tell the creator what still needs listening review.

Export only when the creator requests export or a finished exported film. Omit range fields for a full film; use explicit start and end only for a requested segment. Do not queue a duplicate export. Keep social publication outside a conversion's default workflow; it needs the creator's exact publication request and the app's confirmation flow.

Record decisions and any failed checks with `update_project_director_brief` and `write_session_summary`. Never claim a video test or visual verification that was not performed.

## Package the adaptation

- Put the full skill in `skills/<slug>/`, with root SKILL.md, README.md, original LICENSE and optional references/assets. SKILL.md starts with YAML `name` and `description` fields and includes clear triggers, workflow, cost choices and verification.
- Start README.md with `Adapted for Subclip from <upstream link> by <author>, <license>`. Put the same credit at the end of SKILL.md. For an original skill, state authorship instead of inventing upstream credit.
- Add skill.yml with slug, name, summary of at most 160 characters, category, tags, cover, adaptedBySubclip, license, upstream and addedAt. Use `upstream: null` and `adaptedBySubclip: false` for an original. The builder derives paths, pack names and the upstream URL. See CONTRIBUTING.md for the schema and allowlist format.
- Include a 16:9 cover strictly under 300 KB. Use a licensed demo still or make a designed card with the skill name and "Adapted for Subclip". An optional silent MP4 preview must be under 2 MB and at most 6 seconds.
- Use plain, short English. Do not use an em dash or middle dot in any text you write. Keep links and license notices intact.
- Scanner exceptions need a specific reason in skill.yml. Do not weaken the scanner or hide dangerous instructions to pass it.

## PR checklist

- [ ] Confirm changes and commercial use are allowed; preserve the original LICENSE and notices.
- [ ] Check README's opening credit and SKILL.md's closing credit against the actual source.
- [ ] Verify every named tool in the current Subclip sources/catalog and replace required outside APIs, keys and executable scripts.
- [ ] Keep media context first, one edit at a time, creator generator choice and approved credit quotes.
- [ ] Confirm complete skill.yml, required files, valid cover and optional preview.
- [ ] Review all static scan findings and document each justified exception.
- [ ] Remove em dashes, middle dots, secrets and hidden instructions from authored text.
- [ ] Test in Subclip using local speech and at most three animated scenes when app testing is authorized. Inspect real frames. Record actual results and limitations; do not touch running apps when the task prohibits it.
- [ ] Run `npm run build`, `npm run check`, `npm run scan` and `npm test`. Include registry.json and the generated README table.
- [ ] Follow CONTRIBUTING.md and the PR template. Do not commit or push unless explicitly instructed.
