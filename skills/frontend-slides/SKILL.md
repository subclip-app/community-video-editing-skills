---
name: frontend-slides
description: Design or rebuild a pitch, lesson, talk, or report as an editable animated slide video in Subclip. Use for timed slide scenes, visual style exploration, and optional narration, captions, and video export.
---

# Frontend Slides

## Read the project and shape the deck

Read `subclip-video-editor` with `read_subclip_skill`, then the relevant installed skills for HyperFrames, media, timeline contact sheets, speech, transcription, captions, and export. Follow their live schemas. For a new project use `create_project` with the requested canvas preset or `canvasPreset: "landscape"` by default. Start project reads with `get_project_outline`, then use `read_project_section` for the affected lanes and `get_project_director_brief` for prior decisions. Use the same explicit project ID on every project-scoped call.

Use `list_editor_assets` to resolve item IDs, file IDs, and media URLs. Read `get_media_context` before transcribing or analyzing imported media. Include contact sheets for video and use `fileId` with `inspectAtSeconds` for up to six specific moments if needed. Reuse a usable transcript. In an editing run, find missing context with `list_media_without_context`, then use `generate_media_context` and save observed descriptions with `describe_media`. For attached video use its context manifest and storyboards, import the manifest's originalPath through the supported attachment workflow, and keep the original video out of prompt context.

- **New deck:** Resolve purpose, audience, slide count or runtime, available content, and reading density together where missing. Speaker-led slides carry one idea with up to three short bullets. Reading-first slides can use four to eight short bullets or four to six structured cells if every line fits comfortably. Split packed slides into continuation scenes.
- **Deck rebuild:** Use supplied slide copy, order, notes, and images. Confirm the extracted outline before redesigning. For a PowerPoint-only input, call `get_more_tools` to check for a deck reader. The editor catalog has no native PowerPoint extraction or import. Use creator-supplied text, notes, and images for an editable rebuild. Use `import_attachment_to_timeline` for supplied page images if timed stills meet the brief.
- **Existing slide video:** Inspect current timings and source. Preserve established structure, text, visual language, and creator edits unless the brief changes them.

Inspect supplied images and integrate their actual subject, colors, and framing into the outline. Compare crops before choosing a hero. A screenshot can carry a feature slide and a verified logo can anchor the opener and closer. Use native media for separable stills and footage. For an intrinsic image in a composition, import the attachment into project media with `import_attachment_to_project_media`, then bind the exact URL returned by `list_editor_assets`.

## Show three opening slides

Read [style recipes](references/styles.md). When the visual direction is open, make three real title-slide variants from the creator's content: a readable preset, a bold recipe, and a wildcard that fits the occasion. Keep the comparison restrained for high-formality work. Use the same title and, if applicable, the same imported logo. Keep style names and process notes in the conversation.

Build one short HyperFrames item per variant in a scratch project using the assembly rules below. Show clean rendered frames at comparable points in their entrances and at rest. Ask for the creator's pick or which elements to combine, unless the creator has already chosen or delegated the decision. Record the approved palette, type roles, layout, and motion patterns before carrying them across the final deck. Keep drafts outside the delivery project.

## Set the clock

Plan each scene with a headline, key point, visual, layout, optional spoken text, reveal cues, and a time window. Use speaker notes as a starting point for spoken text. Keep the voice distinct from the short on-screen wording.

For narration, import it before committing slide timings. Read [narration and delivery](references/delivery.md) for local and cloud paths. Use the actual imported audio lengths, intentional pauses, and cues inside the spoken beat to set the cuts and reveals. For a silent deck, estimate a dwell time from reading the slide and inspecting its visual, then preview at speed. Give comparisons and reading-first slides longer holds. Keep scene windows contiguous, and use `set_project_duration` to end on the intended final frame.

## Build editable scenes

Read the installed `subclip-hyperframes-layer` authoring contract and its linked references. Author at a fixed 1920 by 1080 design size. Use explicit pixel layout inside that stage and fit the whole slide uniformly into the project canvas. For portrait or square output, keep the 16:9 slide contained and check readability at the final size. Split dense content if needed.

Use one standalone composition per slide. Give the root a unique composition ID, local start zero, explicit width and height, and a duration matching the item. Register one paused GSAP timeline under the same ID. Use finite, time-driven animation and keep settled copy visible through its reading hold. Preserve the style's dominant palette and distinctive type pairing. Verify the exact font faces and weights in preview and export. Use verified substitutes when needed and recheck wrapping. Prefer original CSS shapes, gradients, patterns, and creator assets for this workflow. Reserve caption space in the composition.

Before placing slide text, inspect `get_timeline_contact_sheet` for the intended interval where there is existing content. Keep faces, important graphics, and captions clear. Call `validate_runtime_layer_source` with kind `hyperframes`, then `add_runtime_layer` with explicit startTime, duration, and contained geometry. A full deck slide can fill a clear 16:9 canvas. For another engine or template chosen by the creator, use its installed skill and validation contract.

Make one edit at a time. Re-read the relevant section after each coherent edit. Revise an existing slide with `read_layer_source` and `edit_layer_source` using the returned source hash or `update_runtime_layer` for a full replacement. Keep its item ID and manual edits. Keep narration, captions, and separable media on native lanes.

Use `get_timeline_contact_sheet` to sample entrances, settled frames, and adjacent cuts. Use `view_current_frame` with explicit timeSeconds for full-size checks. Inspect the same moment after moving both backward and forward on the animation clock. Check readability, overflow, panel overlap, edges, and caption clearance. A validation result checks source. Rendered frames show whether the composition actually works.

## Deliver

Follow [narration and delivery](references/delivery.md) for native captions, audio checks, and requested video export. Record selected style, timing and failed or incomplete checks with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/zarazhangrui/frontend-slides by zarazhangrui, MIT.
