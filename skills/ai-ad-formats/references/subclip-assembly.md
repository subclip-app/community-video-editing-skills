# Ad assembly in Subclip

One editing call at a time, with the ad's `projectId`.

1. Create the project at the target ratio (`create_project` with the matching canvas preset).
2. Import clips with `import_ai_operation_to_timeline`, in beat order, each at the end of the previous one. Trim with `trim_media_item` so each beat holds only its useful seconds.
3. Voice or song: import and place at 0. Align cuts to the beats of the audio, not the other way round. A singing ad uses the song as the clock.
4. Text: offer and call to action with `add_text_overlay`, last 2 to 3 seconds. Check clear areas on `get_timeline_contact_sheet` first. Style with `update_text_item`.
5. Logo: import the client's real logo with `import_external_media` and place it as a native item. Do not generate a logo.
6. Subtle motion: `add_media_keyframe` scale 1 to 1.06 across still-like beats.
7. Audio: `update_audio_item` voice about 1, music 0.15 to 0.25 under speech, fade out the last second.
8. Captions for sound-off viewing: `transcribe_project` local mode on the voice or song, `update_caption_style`, `update_caption_words`.
9. `set_project_duration`. Review with `view_current_frame`. Export on request.
