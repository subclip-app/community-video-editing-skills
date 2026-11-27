---
name: transitions-dev
description: Put real UI transitions into SaaS explainers and product UI promos in Subclip. Picks a fitting transitions.dev transition for every UI state change (modal open, tab switch, list reorder, page change, toast, dropdown, card expand, number change, success check and more), builds the product screens as seekable HyperFrames layers on the transitions.dev motion tokens, and polishes the result frame by frame. Use when asked to animate a product UI, show a feature walkthrough, make a SaaS demo or explainer, "add a transition", "make the modal open smoothly", "animate the tabs", or to polish UI motion in a video.
---

# transitions-dev for video

Creators who make SaaS explainers and product promos need the small UI moments to move like a real product: the modal that scales in, the tab pill that slides, the toast that rises. This skill brings the method of [transitions.dev](https://transitions.dev) by Jakub Antalik to the Subclip timeline. It picks one named transition per UI state change, rebuilds the product screen as an editable HyperFrames layer whose every frame is a pure function of time, and checks the motion on rendered frames.

It does not ship the transitions.dev library. Transitions are referenced by name with a link to transitions.dev. The layer code is our own small implementation of the motion (see `references/hyperframes-recipes.md`).

## When to use it

- A SaaS explainer, feature walkthrough, onboarding video, changelog clip or product UI promo built from UI scenes rather than a screen recording.
- A screen recording that needs one UI moment rebuilt cleanly (a modal, a toast, a number update) as an overlay.
- "The UI motion in this video feels off": run the polish checklist on the existing layers.
- Not for footage-only edits or AI-generated product shots (use `commercial-pipeline`). For a whole launch film with one morphing shape, use `product-launch-motion`; for shot recipes and beat cuts, use `video-shotcraft`. This skill can supply the UI moments inside either.

## 1. Pick the transition per state change

Match the visible UI element first, then the verb. Full table with links: `references/transition-picker.md`.

- Surface grows from a trigger and stays anchored: **Menu dropdown**. Centred surface with a backdrop: **Modal open / close**.
- Segmented control or view switcher: **Tabs sliding**. Two screens such as list and detail: **Page side-by-side**. A panel sliding into a region: **Panel reveal**.
- A row moves in a list: **To-do reorder**. A container changes size: **Card resize**. A header with a collapsible body: **Accordion**.
- Transient confirmation at the edge: **Toast open / close**; several in a row: **Banner stacking**. Done moment: **Success check**.
- A number updates: **Number subtle change** for dashboards, **Number pop-in** when it should be noticed, **Spinning counter** when it is an event.
- Text in place changes: **Text states swap**. Two icons in one slot: **Icon swap**. Loading: **Skeleton loader and reveal**, **Shimmer text**. AI features: **Thinking states**, **Streaming text**, **Reasoning stream**.
- Two could fit: pick the lighter one (card resize over panel reveal, dropdown over modal). No clear match: list two or three candidates and let the creator choose. Do not guess.

Write the plan as one line per beat: `time, state change, transition name, why`.

## 2. Motion rules that carry over to video

Use the transitions.dev motion tokens (`references/motion-tokens.md`), matched by what the motion does, never by the nearest number.

- Durations: open 250 ms and close 150 ms for dropdowns and modals; panels 400 ms in and 350 ms out; toasts 350 ms in and 250 ms out. Tabs, page slides, accordions and icon swaps are symmetric.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for every surface that opens, closes, slides or resizes. Overshoot only on entrances (badge pop, number pop-in), never on a close.
- Small distances and scales: modal from 0.96, dropdown from 0.97, page slide 8 px, text reveal 12 px, toast 16 px. Stagger 40 ms per item, total under about 300 ms.
- Keep real product timing. A 250 ms open is 7 or 8 frames at 30 fps and reads fine; give the viewer the hold before and after it instead of slowing the motion down.
- Exports: never put CSS `filter` or `backdrop-filter` (blur) on text or on any element that contains text. Where a recipe uses a cross-blur, use opacity plus the small translate or scale only. Blur is allowed on purely decorative shapes.
- One camera move at a time and never during a transition: push in before the beat, hold while it plays, move on after.
- Label each transition on screen when the video teaches or showcases them (a pill with its name), otherwise leave the UI clean.

## 3. Build the scenes in Subclip

1. Read the project: `get_project_outline`, `read_project_section`, `list_editor_assets`. For supplied screenshots or recordings call `get_media_context` before describing them. For a live product, `inspect_public_website` gives the real copy, colours and layout. Never invent a real company's UI; for a demo use an invented product and say so.
2. Read `subclip-hyperframes-layer` with `read_subclip_skill` (layer contract: one paused GSAP timeline, fixed root size, no `innerHTML`, no wall clock).
3. Write the beat plan from step 1, then build the app frame (window, sidebar, header) once as static HTML inside a fixed 1920 by 1080 root. Drive every state from one `render(t)` function using the helpers in `references/hyperframes-recipes.md`: cubic-bezier easing, open and close pairs, the tab pill, the reorder slots, the cursor with press and ripple, the camera.
4. One layer per 6 to 10 seconds. Write one parametric source and pick the scene with a variable (`scene: "a"`), then `clone_runtime_layer` and change only the variable for the next segment. End each segment in the exact state the next one starts in.
5. `validate_runtime_layer_source`, then `add_runtime_layer` (full frame only when the UI scene is the whole picture). Never send two editor mutations at once; re-read the project after each.
6. Small fixes with `read_layer_source` plus `edit_layer_source` (pass the source hash). `update_runtime_layer` replaces props and variables, so resend all of them.
7. Sound: `search_public_audio` for a CC0 loop or UI clicks, `import_public_asset_to_timeline`, `update_audio_item` for volume and fades. Narration, if wanted, with `generate_local_speech` and `import_generated_audio_to_timeline`; captions with `apply_dynamic_caption_preset` (owner default, no preset id).
8. `set_project_duration` to the last frame of content, then the polish pass below.

For an "AI is building this UI" moment (a generated card, a chart an agent produced) use the flow in `references/ui-generation-flow.md`: a dotted wireframe traced from the element's real boxes, then a top-to-bottom reveal. It is a moment, not a loading state; use it once per video.

## 4. Polish on frames

Saved source is not proof. Run `references/polish-checklist.md`:

- `get_timeline_contact_sheet` with one tile per second for the whole film, then a second sheet at each transition: 1 frame before, the middle frame, and 2 frames after.
- `view_current_frame` (full size) at the settled state of every transition: nothing clipped, text crisp, no ghost of the old state.
- Check open and close asymmetry, stagger totals, that no close is delayed, that nothing is still moving when a segment ends, and that each cut between segments matches pixel for pixel.

## 5. Export and report

Export only when the creator asks: `get_export_configuration`, `list_render_queue`, `export_video`, then `get_export_status`. Look at the file at 1 second intervals and measure the audio (peaks under -1 dB). Record the beat plan and any open issue with `update_project_director_brief` and `write_session_summary`.

## Credits and safety

- Code layers cost 0 credits. Music from `search_public_audio` (check the licence of each result) and local speech are free. Anything paid (music generation, AI images or video) is quoted with `estimate_ai_generation` and `get_ai_credit_status` first and waits for a yes. Images go through the creator's own Codex CLI first when it is signed in.
- No API keys, no installers, no upstream scripts. The upstream `transitions-agent` CLI and its paid fix service are not used here; this skill applies the method itself inside the editor.
- Licence: the transitions.dev transitions and skills may be used in your own videos and products, but the library itself (or a substantial part of it) may not be redistributed as a motion pack or kit. Do not paste the collection into project files or templates you share. If you copy a single transitions.dev snippet into a layer, keep its transitions.dev comment. See `LICENSE`.

## Reference

- `examples/transitions-dev-reference.mp4`: a 27 second walkthrough of Tasknook, a made-up task app, with six labelled transitions (Tabs sliding, Menu dropdown, To-do reorder, Modal open / close, Toast open / close, Page side-by-side). Three HyperFrames layers from one parametric source, a CC0 music loop, no AI model.
- `examples/transitions-dev-contact-sheet.jpg`: the same video at one frame per second.
- References: `references/transition-picker.md`, `references/motion-tokens.md`, `references/hyperframes-recipes.md`, `references/polish-checklist.md`, `references/ui-generation-flow.md`.

## Definition of done

- Every UI state change has one named transition and a one-line reason.
- Every value maps to a motion token by usage; closes are quicker than opens; no blur on text.
- Contact sheets at 1 s and around every transition were looked at; segment cuts match.
- The exported file was checked at 1 s intervals and the audio measured. Credits spent are reported.

Adapted for Subclip from https://github.com/Jakubantalik/transitions.dev by Jakub Antalik, Transitions.dev License (transitions and skills) and MIT (tooling)
