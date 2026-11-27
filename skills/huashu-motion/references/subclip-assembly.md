# Subclip assembly

How the director's plan becomes an editable Subclip timeline. Read `subclip-hyperframes-layer` and its `references/authoring-contract.md` with `read_subclip_skill` first; this file adds the film-making conventions on top.

## Shape of the timeline

- **HyperFrames layers for animated scenes.** One short layer per scene (a hook, a peak, a landing), each a standalone HTML document with one paused GSAP timeline. Keep each one small enough to revise alone. At most three animated scenes for a test film.
- **Native media for real material.** Screenshots, recordings, the creator's clips and real template previews are native media items, so their trims and framing stay editable. A montage burst is a run of short native items cut on beats.
- **Native audio for sound.** The track (split into items where the edit stops or jumps), and each hit as its own short item on its cue.
- **Native text** (`add_text_overlay`) for static labels that must stay editable, such as a URL or a legal line. Animated type belongs in the scene.

## Order of work

1. `get_project_outline`, `read_project_section` for the lanes you need, `list_editor_assets` for real ids and URLs. Read `get_media_context` for anything already imported before rescanning it.
2. Gather material: `inspect_public_website` for a URL, `import_external_media` (with `addToTimeline: false` for files only a scene will show) for the creator's files and the captures you will use. Look at every capture you plan to use.
3. Write the treatment into the director brief (`update_project_director_brief`).
4. Build the hardest scene first. Write the HTML, run `validate_runtime_layer_source`, then `add_runtime_layer` with explicit `startTime`, `duration`, `x`, `y`, `width`, `height`. A full-frame scene uses 100 by 100 because it is explicitly a full-frame scene. Look at it with `view_current_frame` just after its entrance, at its hero moment and near its exit.
5. Place native media for the cuts. Choose each clip's source range where it is already moving (`update_media_item` `sourceStartTime`, `sourceEndTime`, `startTime`, `endTime`), mute clip audio unless it is the point, and use `fitMode: "cover"` for full-bleed shots.
6. Build the other scenes the same way.
7. Add the track and the hits ([sound and music](sound-and-music.md)), then `set_project_duration` to the last frame of the landing.
8. Review ([verification](verification.md)) and fix in place.

One edit call at a time per project, with the same explicit `projectId` on every call. Re-read the lane after each coherent edit. Revise existing items instead of adding duplicates, and delete only drafts this run created.

## Scene conventions

- The root is a fixed 1920 by 1080 (or 1080 by 1920) element with `data-composition-id`, `data-start`, `data-duration`, `data-width`, `data-height`; register the timeline in `window.__timelines` under that id.
- **Frame 0 is the poster.** The scene is already showing the subject at time 0, not fading in from nothing. Use `fromTo` so the start state is explicit at every seek.
- **Real material inside a scene** comes from the project library: import it, then use the exact URL `list_editor_assets` returns as the `src`. Never a provider URL, a local path or a hand-written custom-scheme URL.
- **Rebuilt interface pieces** are traced from a capture at the same size, with the real text, colours and type. Put the capture and the rebuild side by side in a quick `view_current_frame` check before animating.
- **Fonts**: use a face that is really available to the renderer (a system face that is present, or one loaded through the host). Check the exported frame, not just the preview.
- **Everything stays inside the frame.** Set `overflow: clip` on `html`, `body` and the root, and size every element (including a capture you push into) to fit 1920 by 1080; crop a taller capture with `object-fit` instead of letting it hang below. An element partly outside the frame can shift the whole scene up in the export and leave a black band at the bottom, which the editor preview does not show.
- **Text safety**: no CSS `filter` or `backdrop-filter` on text or on any ancestor of text. Animate text with opacity and transforms only.
- **Determinism**: no `Date.now()`, `performance.now()`, timers, unseeded random or live data. Seed any scatter with a small generator. Finite tweens only.
- **Typing** is a counter tweened with `ease: 'none'` that slices the string; the caret is a separate element.
- **Labels for comments**: `tl.addLabel('scene:<name>', t)` at each beat, and stable element ids, so a later comment can be matched to a line of source.
- **Variables** for anything the creator may want to change (headline, number, hold time): read `window.__hfVariables` with defaults in the HTML, and change them later with `update_runtime_layer` and `mergeBindings: true`.
- **Some static checks are strict about property names**: if validation rejects a script, change the approach (CSS classes, `nth-child`, GSAP `set`) rather than hiding the code.

## Continuity across layers

Each layer has its own clock. When an object carries the eye from one scene to the next, end the first scene on the frame the next begins with: the same colour flood, the same position of the shared element. Then cut on a beat. Check the last frame of one scene and the first frame of the next together on a contact sheet.

## Versions and formats

- A variant, a different length or a vertical edition: `clone_project`, then change the canvas with `set_canvas_properties` and re-lay the scenes for that frame. Never squeeze a 16:9 layout into 9:16.
- Transparent overlays: export with an alpha-capable format through `get_export_configuration`.
- Export only when asked: `get_export_configuration`, `list_render_queue`, `export_video`, then `get_export_status`. Do not queue a duplicate.
