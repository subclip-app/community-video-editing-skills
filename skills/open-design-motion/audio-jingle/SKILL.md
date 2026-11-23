---
name: audio-jingle
description: "Make a jingle, soundtrack bed, narration or sound effect and mix it as editable Subclip audio."
---

# Audio Jingle

Read the official Subclip music generation, TTS and audio editing skills for the selected branch. Use existing creator audio when available. Establish the exact purpose, target timeline length and entry/exit cues. Describe the plan briefly before paid generation.

- **Music.** Specify genre, BPM and key when useful, three to five instruments, vocal mode and progression. Use a single idea under 30 seconds, intro plus body at 30 to 90 seconds, and a fuller arc for longer work. The source defaults to Suno V5, with Udio and Lyria 2 alternatives. The checked catalog offers Lyria 3 Pro as the closest listed source-family match for a bed, or ElevenLabs Music through `generate_music` when target length is important. Lyria has approximate duration in the brief; ElevenLabs Music takes supported duration in settings. Trim the actual output to the edit. Example: warm electric piano, brushed drums, soft bass and an optional wordless choir swell for a coffee launch, with a clean loop tail.
- **Speech.** Proof the literal script and specify pace and pronunciation. Preserve the source's MiniMax default using the listed MiniMax Speech 2.8 Turbo when available, or ElevenLabs v3 if selected. Audition via `get_voice_samples` unless the voice is already approved or delegated, then `set_approved_voice` with the exact identifier and call `generate_speech`. Use `import_speech_to_timeline` for completed cloud speech. For free local narration, use `generate_local_speech` and `import_generated_audio_to_timeline`. Read actual placed speech duration before timing visuals.
- **SFX.** Use the source's ElevenLabs Sound Effects model through `generate_music` with `elevenlabs-sound-effects`. Specify texture, sharp or soft attack, decay, length and one hit or layered sound. For example, one dry paper flick with a short decay for a page transition. Use the supported SFX duration setting from the schema.
- Set timing, volume and fades with `update_audio_item`. Keep music, speech and effects independent, keep narration intelligible, and listen through the loop or end cut if possible.

## Project context

Read the official Subclip skill gateway and video editor skills, then the specific workflow skills named below. Discover exact tool schemas before editing. Start with `get_project_outline`, then `read_project_section` for the relevant lanes and `get_project_director_brief` for project and workspace guidance. Use `list_editor_assets` for exact IDs. Keep the same explicit project ID on project calls.

Read `get_media_context` before transcribing, rescanning or extracting frames. Set `includeContactSheet: true` for source video; reuse available descriptions and transcripts. If needed, inspect specific moments with `fileId` and `inspectAtSeconds` (up to six). In an editing run, use `list_media_without_context` and `generate_media_context` for needed context, then inspect the returned sheets and save observations via `describe_media`. For attached videos, read their context manifest and storyboard paths and import the manifest's originalPath. Keep original video out of prompt context.

Reuse suitable creator media first. For image generation, offer the creator's working signed-in Codex route first when no generator was chosen. For video, the creator's working Grok CLI is optional. Ask once when a generator choice is needed, follow the official AI generation skill's creator CLI reference, respect prior choices, and use `import_external_media` with exactly one source for a creator-generated file. That path uses the creator's own plan.

For Subclip generation, use `list_ai_models` and choose the source model when available and suitable. Use `estimate_ai_generation` for the exact settings and source durations and check `get_ai_credit_status`. Quote model, count, duration, settings, total and retry allowance before spending. Obtain approval for any scope the creator has yet to authorize. Stop on credit or storage limits. Keep stable operation IDs. In-app agents end the turn after acceptance and resume on completion; external clients can check `get_ai_operation` at reasonable intervals. Reconcile status before retrying, and import completed media with `import_ai_operation_to_timeline` at the intended beat. Record stable IDs and omit temporary signed URLs from notes.

## Review and handoff

Serialize edits and reread the affected section after each coherent change. Preserve existing item IDs and unrelated creator work. Use `get_timeline_contact_sheet` across the placement range before adding text, keeping faces, key content and captions clear. Inspect actual frames via `view_current_frame` at entrances, holds, cuts and exits. Compare forward and backward seeks to the same beat for animated layers. Set intentional duration with `set_project_duration` when needed and check the last visible frame for blank tails. Check audio balance when playback is available and report any listening checks still needed.

For a requested finished file, use `get_export_configuration` and `list_render_queue` before `export_video`. Use range fields only for a requested segment. External clients can check `get_export_status` for the same export. Record decisions and limits with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/design-templates/audio-jingle by nexu-io, Apache-2.0.
