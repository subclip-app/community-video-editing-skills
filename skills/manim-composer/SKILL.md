---
name: manim-composer
description: Turn a vague math or science idea into a scene-by-scene plan and then into an animated, narrated explainer in the 3Blue1Brown style, built as math scenes in Subclip motion layers (SVG, HTML, GSAP). Use when the creator wants an educational or explainer video, says "3b1b style" or "explain like 3Blue1Brown", has a concept to visualize, or asks to plan or compose a math or science animation. There is no Manim runtime in Subclip, so the scenes are rebuilt as editable motion layers.
---

# Manim Composer (Subclip edition)

Plan a math or science explainer like a 3Blue1Brown video, then build it in Subclip. The original skill only wrote a `scenes.md` plan for Manim. Subclip has no Manim or Python runtime, so this version keeps the planning craft (research, narrative patterns, visual grammar, scene specs) and builds every scene as an animated HyperFrames motion layer: inline SVG and HTML driven by a paused GSAP timeline. The result is editable on the Subclip timeline, voiced, captioned and exportable.

## When to use

- The creator wants an educational or explainer video about math, physics, computer science or another science.
- The creator has a vague concept and wants it visualized ("make a video about why Fourier series work").
- The creator says "3b1b style", "explain like 3Blue1Brown", "compose" or "plan" a math visualization.

Do not use for a general topic explainer with collage visuals (use a Vox-style skill instead).

## Before you start

- Read `references/narrative-patterns.md` and `references/visual-techniques.md` first. Open `references/scene-examples.md` when you need a model scene and `references/scenes-template.md` for the plan layout.
- Read the installed Subclip skills with `read_subclip_skill`: `subclip-video-editor`, `subclip-hyperframes-layer`, `subclip-tts`, `subclip-music-generation`, `subclip-hyperframes-captions` and `subclip-export`. Their current tool schemas win over anything written here.
- Create one landscape project with `create_project` (canvas preset landscape) unless the creator asks for vertical. Use its project ID on every call.
- Start project work with `get_project_outline`, then `read_project_section` only for the lanes you need. Call `get_media_context` before touching any existing media.
- One timeline edit at a time. Generation jobs may run in parallel; timeline writes may not.

## Phase 1: Understand the concept

Research the topic before asking questions. Use web search if your client has it; otherwise rely on what you know and say what you could not check.

1. Find the "aha moment": what makes this idea click for a learner.
2. Note the common misconceptions to address.
3. Find the narrative hook: what question does the video answer, why should the viewer care, what is surprising.

Facts must be true. State only formulas, numbers and history you are sure of.

## Phase 2: Clarify with the creator

Ask a few targeted questions, not all at once. Skip what the creator already answered.

- Audience and scope: what background to assume, target length, standalone or part of a series. Short means 1 to 3 minutes in Subclip; a 10 minute film is a series of short layer scenes, so say so.
- Focus and depth: what to emphasize or skip, proof-heavy or intuition-focused, real-world applications.
- Style: color scheme, narration tone (casual, formal, playful), visual metaphors they have in mind.

## Phase 3: Write the plan

Write the scene plan using `references/scenes-template.md` (same structure as the original `scenes.md`): overview, narrative arc, numbered scenes with duration, purpose, visual elements, content, narration notes and build notes, then transitions, color palette, math content and implementation order.

Apply the 3b1b principles:

- Show, do not just tell. Every concept gets a visual representation.
- Progressive revelation. Build complexity gradually.
- Visual continuity. Transform objects instead of replacing them.
- Pause for insight. Vary the pace. End each scene with resolution.
- Emphasize elegance, connect representations (algebra, geometry, intuition), abstract gradually.
- Pose questions, acknowledge difficulty, make the aha moment feel earned.

Save the plan with `update_project_director_brief` (title, hook, palette, voice, one line per scene) so later sessions can resume. Show the creator the plan and wait for approval before building. Ask for approval of the credit estimate at the same time (see Cost).

## Phase 4: Voiceover first

Narration length drives every timing decision, so voice the script before building scenes.

1. Write the narration per scene. Write numbers and symbols as they should be spoken ("x squared", "pi over two").
2. If the creator has not approved a voice, call `get_voice_samples`, let them choose, then `set_approved_voice`. For free tests use `generate_local_speech`.
3. Generate with `generate_speech` (cloud) or `generate_local_speech`, then place each scene's audio with `import_speech_to_timeline` or `import_generated_audio_to_timeline`.
4. Read the real duration of each audio item with `read_project_section`. These durations are the scene lengths.
5. Run `transcribe_project` on the narration (local mode is fine) to get word timings. Use them to time each reveal in a scene: the term appears when the word naming it is spoken.

## Phase 5: Build each scene as a motion layer

Build one scene at a time, each as its own short HyperFrames layer. Never put the whole film in one layer.

1. Read `subclip-hyperframes-layer` and its authoring contract. Use one standalone HTML document per scene, one paused GSAP timeline registered under the composition ID, GSAP 3.15.0 from the pinned CDN URL, finite and seekable animation only.
2. Map each Manim idea to a layer technique with the table at the end of `references/visual-techniques.md`: draw-on with stroke-dashoffset, matching-symbol moves, value-driven redraws in `onUpdate`, grid transforms by interpolated matrices.
3. Set the root `data-duration` to the scene's narration length plus a short hold (0.5 to 1 s) so the last read lands.
4. Share the palette through CSS variables and keep the same colors for the same meaning in every scene.
5. Math text: use Unicode symbols, sub and superscripts and SVG text. Use KaTeX only if `validate_runtime_layer_source` accepts its pinned CDN script. Verify fonts render the symbols you need.
6. Call `validate_runtime_layer_source`, fix every error, then `add_runtime_layer` with explicit geometry (a full-frame scene on a dark background is fine here because the scene replaces the background; say so in the item name).
7. Seek with `seek_timeline` and check the entrance, the settled state and the exit with `view_current_frame`. Look for clipped equations, overlapping labels, unreadable colors and elements that do not move at all.
8. Fix in place with `edit_layer_source` or `update_runtime_layer`. Only then start the next scene.

Timing rule from the original: fast, fast, SLOW. Quick setup animations, then slow down and hold on the key insight.

## Phase 6: Score, captions and assembly

- Music is optional. For a quiet underscore, quote and generate it with `list_ai_models`, `estimate_ai_generation` and `generate_music` (instrumental), import it with `import_ai_operation_to_timeline`, and mix it low with `update_audio_item` so it never competes with narration.
- Captions: `apply_dynamic_caption_preset` or `update_caption_style` on the transcribed narration. Keep captions clear of equations; check with `get_timeline_contact_sheet`.
- Set the intentional length with `set_project_duration`. No blank tail.
- Export only when the creator asks: `get_export_configuration`, `list_render_queue`, then `export_video`.

## Cost

Voice is free with local speech, a few credits with cloud speech. Motion layers cost no credits. Music is a few credits. Before any paid call quote the model, length and `estimate_ai_generation` total, and get the creator's go-ahead. A direct request for a full video counts as approval of the quoted plan, not of a larger one.

## Verify

- Every scene has narration under it and a visible event that changes between its first and last frame.
- Frames inspected with `view_current_frame` at entrance, middle and end of each scene, and at every scene boundary.
- Equations are readable at the export size; colors keep their meaning across scenes.
- State clearly what you did not check, for example the audible balance of music and voice, so the creator can listen.
- Record decisions and failed checks with `update_project_director_brief` and `write_session_summary`.

## Known limits

- No Manim, LaTeX or Python runtime. Heavy 3D and long proofs are approximated with SVG and short layer scenes.
- Math typesetting is limited to what SVG and HTML text can show unless KaTeX validates.

## Reference

A finished example: [odd-squares-reference.mp4](examples/odd-squares-reference.mp4). A 27 second explainer in three motion-layer scenes: the question 1 + 3 + 5 + 7, borders of 1, 3, 5 and 7 that build a 4 by 4 square, and the n squared rule. Local speech voices it, word timings drive each reveal and captions sit below the drawing. The [contact sheet](examples/one-second-contact-sheet.jpg) shows one frame per second.

Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) (skill manim-composer) by OpenMontageInc, AGPL-3.0
