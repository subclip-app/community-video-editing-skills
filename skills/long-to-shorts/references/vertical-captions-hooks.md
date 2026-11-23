# Vertical layout, captions, hook and music

All of this uses Subclip's native tools. Everything stays editable.

## Layout choice

Look first. Use `get_media_context` with contact sheets, then `inspectAtSeconds` for specific moments.

| Source | Layout | How |
| --- | --- | --- |
| One person talking to camera | `fill_face` | Full-canvas cover crop. `set_media_source_focus` so the eyes sit around the upper third of the frame. |
| Two speakers in one wide shot | `fill_faces_split` | Two stable panels, one crop per speaker, one copy muted. Switch only at a stable speaker change. |
| Screen recording with presenter | `tutorial` | Screen on the upper 62 to 72 percent, presenter below, content copy audible. |
| Slides, code, dashboards, landscape UI | `fit_canvas` | Contained foreground, blurred full-canvas copy behind it, muted. |

Read `subclip-ai-clipping` for the exact geometry. Use `update_media_item` for container, fit and position. Keep a stable shot identical across adjacent pieces. Prefer hard cuts; do not use motion to hide a mismatch.

Check the first frame, the last frame, each shot or sentence boundary, and a frame every 3 to 5 seconds on long clips.

## Captions

1. Reuse timing: `reuse_caption_timing_for_media_items` once all clip copies are trimmed. Keep `removeSourceCaptions` false until the copied words are verified.
2. If no timing exists, `transcribe_project` with `purpose: "captions"` for each clip item, one at a time.
3. Read `subclip-dynamic-captions`. `list_dynamic_caption_presets`, pick the calmest preset that fits the voice, `apply_dynamic_caption_preset`, then `set_dynamic_caption_priorities` and `arrange_dynamic_caption_pages`.
4. Only change style with `update_caption_style` when the creator asks or legibility needs it.
5. Safe area for 9:16: keep captions out of the top 12 percent and bottom 20 percent, where app buttons and descriptions sit.

Fix transcription mistakes with `update_caption_words` before the final look. Never change what the speaker said.

## Hook

The hook is a line that makes the viewer stay.

- Use the speaker's own words and language. Under 12 words, usually under 90 characters.
- No "In this video", no "Wait for it", no promise the clip does not keep.
- If the first spoken sentence is already the hook, let the opening caption page carry it. No extra title.
- If an extra title helps, make it a static `add_text_overlay` for the first 2 to 4 seconds, two lines at most, in verified empty space (above the head, or the empty part of a `fit_canvas` frame). Style it with `update_text_item`.
- Check with `get_timeline_contact_sheet` before and `view_current_frame` after. A title that covers a face is a failure.

## Optional music

- Default off for talking clips. Offer it for story and inspiration clips.
- Find licensed audio with `search_public_audio` and place it with `import_public_asset_to_timeline`, or make an original bed with `generate_music` (read `subclip-music-generation`; quote the model and cost, then `import_ai_operation_to_timeline`).
- Speech always wins. Set music volume low (about 0.12 to 0.2) with `update_audio_item`, fade in 0.3 s and out 0.8 s, and end the music with the clip.
- Use one track per clip so each export is complete.
- Tell the creator the balance still needs a listening check.

## Final look checklist

- First spoken frame: face visible, hook visible, captions clear.
- Midpoint: layout stable, captions inside safe area.
- Last frame: last word complete, nothing cut off, no blank tail.
- Every layout change: no jump in framing.
