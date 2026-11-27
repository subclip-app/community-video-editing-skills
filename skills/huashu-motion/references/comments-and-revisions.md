# Comments and revisions

In the upstream tool the creator clicked a frame in a preview and typed a note. In Subclip the note arrives in chat or as an editor comment, usually with a time ("at 0:07 the card is too small") or a thing ("the second chip"). The rule is the same: **do what it asks at that place and that time, and keep everything else as it was.**

## The loop

1. **Find the place.** Read `get_project_outline` and note which item covers that time. If the note names no time, ask once, or pick the most likely moment and say which.
2. **Look before you touch.** `view_current_frame` at the named time, and once a little before and after it. The frame is the most precise thing the creator told you.
3. **Find the source.** For a HyperFrames scene, `read_layer_source` for the lines around the element (use its stable id). For a native item, `read_project_section` for that lane and item.
4. **Make the smallest change.**
   - A value exposed as a variable (a title, a number, a colour, a hold time): change only that variable with `update_runtime_layer` and `mergeBindings: true`.
   - Anything else in a scene: a minimal `edit_layer_source` with the returned source hash. Never reformat the file, never rename ids, never rewrite the whole layer for a one-line note.
   - A clip, a still, a title or a sound: `update_media_item`, `trim_media_item`, `update_text_item` or `update_audio_item` on that item only.
5. **Check the same frame again** with `view_current_frame`, plus the neighbouring seams if timing moved.
6. **Reply in one line** in the creator's language: what changed, with numbers. For example: "The empty dock now holds 2.0 s instead of 1.2 s; everything after it moved 0.8 s later."

## Rules

- Timing notes ("hold a beat longer") shift what comes after. Move the later items, hits and music cuts by the same amount so later moments stay anchored to the same events.
- If a note is ambiguous, choose the most sensible reading, do it, and say which reading you took. The creator can reopen it.
- One edit call at a time per project, and re-read the project after each one.
- Never overwrite a manual edit the creator made in the editor. Read the current state before changing anything.
- Every change is in the project history; `undo_editor_change` and `restore_project_history` can take it back.

## When the notes add up to a rebuild

Several notes about the same thing (the opening is weak, it looks like slides, the rhythm is flat) mean the film needs a [punch-up](punch-up.md), not a tenth small fix. Say so, and propose it.

## Keep what the creator taught

The creator's reactions are the evidence: a rejection, "too slow", a choice between directions ("C's composition, B's feeling"). Write them in their words into the director brief with `update_project_director_brief`. At the end, `write_session_summary` lists what changed and what is still open. Keep three kinds apart: a preference is the creator's own words and holds for them until they say otherwise; an observation is what you saw in one film; a finding is something seen in two films or measured. One person's taste never becomes a general rule.
