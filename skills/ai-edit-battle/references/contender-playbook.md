# Contender playbook: the native Subclip way

For each contender. Read the Subclip skills you need with `read_subclip_skill` (start with `subclip-video-editor`, then motion graphics, captions, audio and export as required). Check tool schemas before calling.

## Order of work

1. `get_project_outline`, then `read_project_section` for only the lanes you need. Use your own project ID on every call. Do not touch the other contender's project.
2. Read the brief and the footage context (`get_media_context`, `get_script`). Reuse the transcript; do not transcribe twice.
3. Write the short treatment from the brief and save it with `update_project_director_brief`.
4. Style frames: build 4 to 6 representative moments, then `view_current_frame` to review them as a set.
5. Build one passage with its transitions, check it frame by frame, and fix curves and timing before doing the rest.
6. Finish the timeline. One edit call at a time. Re-read state after each coherent edit.
7. Verify with `get_timeline_contact_sheet` (once per second) and `view_current_frame` on every transition. Check duration against the raw clip.
8. Report honestly what you built and what you could not check.

## Tool map for the brief's craft rules

| Brief rule | Subclip tool |
|---|---|
| Footage reframing, panels that resize | `update_media_item`, `set_media_framing`, `adjust_media_transform`, `add_media_keyframe` (position, size, scale, rotation, blur) |
| Kinetic typography, hero words | HyperFrames layers with `add_runtime_layer` (read `read_subclip_skill` for the hyperframes layer skill); simple titles with `add_text_overlay` and `update_text_item` |
| Small CSS effect | `add_html_motion_graphic` |
| Type or shapes behind the speaker's head | the `subclip-text-behind-subject` skill |
| Counters, charts, diagrams | runtime layers |
| Background music | `generate_music` or `search_public_audio` then `import_public_asset_to_timeline`; only within the credit cap |
| Sound effects | `search_public_audio`, or a generated effect if allowed |
| Mix levels, ducking, fades | `update_audio_item`, kept on separate audio items |
| Keep the raw voice at its original timing | never trim, speed up or move the source clip; `set_project_duration` to match it |
| Export | `get_export_configuration`, then `export_video` only when the creator asks |

## Limits to state, never hide

- Loudness and true peak: report only if you measured them.
- You cannot hear audio. Say what still needs a listening pass.
- Text rendered inside generated images can be wrong. Use native text for exact words.
