# Assembly in the Subclip editor

All calls take the short's `projectId`. One editing call at a time. Re-read state with `get_project_outline` after each coherent edit.

## 1. Video blocks

- `import_ai_operation_to_timeline` for each completed block with `startTime` 0, 10 and 20. Check the real duration of each clip afterward and trim with `trim_media_item` if one is longer than asked.
- Landscape 16:9 by default. For vertical, create the project with a portrait canvas first and generate in the same ratio.

## 2. Narration

- Cloud: `import_speech_to_timeline` with the `operationId` and `startTime` 0.2.
- Local: `generate_local_speech`, then `import_generated_audio_to_timeline`.
- Narration should end 1 to 1.5 seconds before the film ends. If it runs long, tighten the words and regenerate rather than speeding the audio.

## 3. Zoom and shake

- Zoom on a reveal: `add_media_keyframe` at the start of the reveal (`scale: 1`) and at its end (`scale: 1.1` to `1.15`), `easing: "ease-in-out"`.
- Impact shake: keyframes every 0.05 to 0.08 seconds on the clip with `x` and `y` offsets that alternate and shrink, ending at the clip's rest position. Keep it under 0.4 seconds.
- A keyframe time must sit inside the item, so create keyframes after trims are final.

## 4. Audio balance

- Narrator: volume about 1.
- Each block's own sound: `update_audio_item` is for audio items, so for sound that belongs to a video clip use the clip's volume control via `update_media_item`. Aim for about 0.4 under the voice.
- Fade the last block's sound out over 1 second.

## 5. Review

- `get_timeline_contact_sheet` with `at: "auto"` across the whole short, then `view_current_frame` at each cut, each zoom peak and each shake.
- Confirm the end has no blank tail and the duration is set with `set_project_duration`.

## 6. Export

- Only on request: `get_export_configuration`, `list_render_queue`, then `export_video`. Check `get_export_status` for progress.
