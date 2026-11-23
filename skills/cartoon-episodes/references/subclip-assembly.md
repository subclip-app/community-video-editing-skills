# Cutting an episode in Subclip

One editing call at a time, with the episode's `projectId`.

1. Import each accepted scene with `import_ai_operation_to_timeline`, scene 1 at 0 and every next scene at the end of the previous one. Use `get_project_outline` to read the real end time.
2. Trim head and tail frames that hold nothing with `trim_media_item`. Keep trims non-destructive.
3. Title card: `add_text_overlay`, then `update_text_item` for font, color and background. Place it with a clear area behind it (check `get_timeline_contact_sheet`).
4. Levels: `update_media_item` volume per clip so dialogue is even across scenes. Music, if asked, comes from `generate_music` and goes in with `import_ai_operation_to_timeline`, then `update_audio_item` volume about 0.15 to 0.2 with fades.
5. Captions only when asked: `transcribe_project` per clip or per episode in local mode, then `update_caption_words` for names.
6. `set_project_duration` to the last scene end.
7. Review frames at each join with `view_current_frame`. Export only on request (`get_export_configuration`, `list_render_queue`, `export_video`).
8. Log decisions with `write_session_summary`.
