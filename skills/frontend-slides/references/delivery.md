# Narration, captions, and export

## Choose a voice and quote cloud work

Read the installed Subclip speech skill. The upstream deck skill has no speech model preference. Honor a chosen or previously approved voice. Otherwise offer `get_voice_samples` in the script language and record the chosen voice with `set_approved_voice`. A creator who delegates voice choice can skip the sample round.

- **Local speech:** Use `list_local_voices` and `generate_local_speech` with the supported voice and language settings. Local speech spends no credits and is the test path. If the build lacks local speech or the model needs downloading, follow the installed skill and tool state. Use `import_generated_audio_to_timeline` with the returned WAV path.
- **Cloud speech:** Look for speech operations in `list_ai_models` with kind `audio`. Use the creator's model or the live speech default. Resolve the exact voice with `list_ai_voices`. Get the live `estimate_ai_generation` quote with kind `audio`, the model ID, and the supported script and settings inputs and check `get_ai_credit_status`. Quote the model, voice, segment count, expected duration, settings, total and retry allowance. Obtain approval for that scope when needed. Launch `generate_speech` with the exact approved inputs. Pass confirmation only for the authorized operation and stop on credit or storage limits.
- Store each cloud operation ID. In-app agents resume on the completion event. External clients can check `get_ai_operation` at reasonable intervals. Reconcile a queued or uncertain operation before any retry. Import a completed ID with `import_speech_to_timeline`. Keep temporary URLs out of notes.

Use one voice throughout unless speaker changes are intentional. Import contiguous narration beats with purposeful gaps and read the actual editor audio lengths. Give a slide enough time for both its spoken point and its longest reading task. For a fixed runtime, tighten copy before stretching audio or stripping useful holds. Use `update_audio_item` for level and fades, and listen at cuts and where any music shares the timeline.

## Native captions and review

When captions are requested, check `get_media_context` for a usable transcript. Use the supported caption workflow in the installed transcription skill, and use `transcribe_project` with the exact `audioItemId` and `purpose: "captions"` when transcription is needed. Use local mode for tests. Wait for each job before starting the next. External clients can check `get_transcription_status`. Before adding or positioning captions, inspect a contact sheet across their range. Correct names and numbers with `update_caption_words`, and style with `update_caption_style`. Check that captions survive slide cuts and stay clear of labels and charts.

## Video delivery

For a requested video export, read `get_export_configuration` and `list_render_queue`, then call `export_video` once with the agreed settings. Omit range fields for the whole timeline. For a requested excerpt pass the exact bounds. Follow the installed export skill through completion, using `get_export_status` from an external client where supported. Verify the output and inspect an exported frame when available, particularly fonts and runtime assets. Report any listening or export checks that could not be performed.
