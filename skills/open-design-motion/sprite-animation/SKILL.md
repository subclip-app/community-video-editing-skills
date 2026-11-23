---
name: sprite-animation
description: "Create a pixel-art history or trivia beat with a hero year, looping sprite, kinetic type and timeline ribbon."
---

# Sprite Animation

Take a verified year, a one-line headline, a short fact caption and an original pixel subject. Honor the requested canvas ratio; use 9:16 for a requested vertical short and 16:9 for an unspecified landscape explainer. Use editable self-contained vector shapes for the sprite with zero generation credits.

- Use cream paper (#f5efe2), ink and one red accent. Place the year first in the visual hierarchy, then the sprite, then the caption. Pair a heavy display serif year with a sturdy sans headline and compact monospace markers. Give the top stripe an episode name and progress count if relevant.
- Build crisp pixel edges on a 96 by 128 grid or equivalent, using inline SVG rectangles with crisp-edge rendering and whole-pixel scale. Bob around 4 px each way on a 1.6-second cycle. Use a brief scanline crop and one-frame pop on the year, match a short kana entrance to the bob if the content calls for it, and move a repeated strip of verified year ticks at constant speed.
- A factual example is an 1889 Hanafuda history beat, using an original flower-card sprite with 花 as the accent glyph and a caption about the start of a Kyoto playing-card maker. Use the creator's own factual subject and artwork for the real film. Provide fonts that cover the intended glyphs.
- Loop the ribbon by exactly one repeated strip width. Check the bob extrema, single-frame year pop, script legibility, and loop seam. Keep the year and captions clear on portrait crops.

## Project context

Read the official Subclip skill gateway and video editor skills, then the specific workflow skills named below. Discover exact tool schemas before editing. Start with `get_project_outline`, then `read_project_section` for the relevant lanes and `get_project_director_brief` for project and workspace guidance. Use `list_editor_assets` for exact IDs. Keep the same explicit project ID on project calls.

Read `get_media_context` before transcribing, rescanning or extracting frames. Set `includeContactSheet: true` for source video; reuse available descriptions and transcripts. If needed, inspect specific moments with `fileId` and `inspectAtSeconds` (up to six). In an editing run, use `list_media_without_context` and `generate_media_context` for needed context, then inspect the returned sheets and save observations via `describe_media`. For attached videos, read their context manifest and storyboard paths and import the manifest's originalPath. Keep original video out of prompt context.

Read the official Subclip HyperFrames layer skill. Author standalone HTML/CSS with named elements, a root composition ID, explicit dimensions and duration, and a paused timeline registered under that same ID. Use the runtime's supported pinned GSAP when needed. Drive every state from layer time; translate CSS loops to finite seekable curves or time-derived states. For a loop, compare the last frame with the first and use phase-aligned cycles. Import any needed media to the project library, reread assets, and bind the exact returned URLs. Keep separable audio and footage in their native lanes.

Use `validate_runtime_layer_source` before `add_runtime_layer`; supply explicit geometry and use the full canvas for an intended full-frame design. For revisions, use `read_layer_source` and `edit_layer_source` with the returned source hash, or `update_runtime_layer` for a complete replacement. Preserve manual edits. A single small standalone CSS effect can use `add_html_motion_graphic` if the official motion graphics skill confirms it can be previewed and exported as intended.

## Review and handoff

Serialize edits and reread the affected section after each coherent change. Preserve existing item IDs and unrelated creator work. Use `get_timeline_contact_sheet` across the placement range before adding text, keeping faces, key content and captions clear. Inspect actual frames via `view_current_frame` at entrances, holds, cuts and exits. Compare forward and backward seeks to the same beat for animated layers. Set intentional duration with `set_project_duration` when needed and check the last visible frame for blank tails. Check audio balance when playback is available and report any listening checks still needed.

For a requested finished file, use `get_export_configuration` and `list_render_queue` before `export_video`. Use range fields only for a requested segment. External clients can check `get_export_status` for the same export. Record decisions and limits with `update_project_director_brief` and `write_session_summary`.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/design-templates/sprite-animation by nexu-io, Apache-2.0.
