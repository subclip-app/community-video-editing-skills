# Documentary edit in Subclip

One editing call at a time, with the film's `projectId`.

1. Narration first: import it at 0.3 s. Note its real duration from the imported item.
2. Scene clips: import each at its scene start from the case file. Trim to the narration beats with `trim_media_item`; do not stretch clips to fill.
3. Clip sound under the voice: `update_media_item` volume about 0.35. Never both voice sources at once.
4. Clock overlay: `add_text_overlay` with the time text, small, in a corner clear of subjects (look first with `get_timeline_contact_sheet`). One overlay per scene.
5. Chapter titles: `add_text_overlay` for 2 seconds at each chapter start, `update_text_item` for font and background.
6. Optional score: `generate_music` instrumental, import and set volume 0.12 to 0.18 with fades.
7. `set_project_duration` to the last scene end.
8. Review every cut with `view_current_frame`. Export on request only.
9. Record the brief and `write_session_summary`.
