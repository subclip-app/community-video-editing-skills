---
name: archify
description: Turn an idea, a plan, a codebase or a pull request into a narrated diagram video in Subclip, using Archify's method. Pick one of 10 diagram types (architecture, workflow, sequence, dataflow, lifecycle, ERD, class, tree, timeline, waterfall), write an Archify story brief with every claim tied to a source file, voice it, then build each scene as an editable HyperFrames layer (or Remotion on request) that enters nodes, draws edges, traces a token along the path, focuses one part and shows the exact code lines, with captions, music and checked frames. Also makes one-page answer explainers, Architecture Diagnosis summaries and PR walkthrough videos. Use for "explain how this repo works", "architecture video", "diagram explainer", "story video of this system", "walk through this PR", "animate this flowchart", "make a one-page answer video".
---

# Archify for Subclip

Archify draws trustworthy, explorable diagrams: the right diagram type for the question, every node and arrow backed by a source, the main path first, then a guided story that walks the reader through it. This adaptation keeps that method and points it at video. The output is a narrated explainer inside a Subclip project: one HyperFrames layer per scene, a voice track, captions and sound, all editable.

What you can make:

| Mode | When | Result |
| --- | --- | --- |
| Story video | "explain how X works", "architecture video", a repo or system | 2 to 4 scenes, each one native diagram that builds up while the narrator walks the path |
| Diagram explainer | one diagram, one idea ("animate this flowchart", Mermaid in, a plan) | one scene, 10 to 25 s |
| One-page answer | a diagnosis, comparison, test report or plan to share | conclusion first, then 2 to 4 panels, each with one native diagram or table |
| PR walkthrough | "walk through this PR" | before and after views with added, modified and removed marks, plus the changed lines |
| Architecture Diagnosis | "why is this repo hard to change" | coupling, cycles and hotspots you found in the source, shown as a marked-up architecture view |

Read the reference files as you need them:
- `references/story-video.md`: the story brief, the beat operations and their timing, the scene loop.
- `references/diagram-types.md`: the type router and how to draw each of the 10 types in a 1920 by 1080 scene.
- `references/scene-kit.md`: the light palette, the layer skeleton and the data-driven scene kit used for the reference video.
- `references/explainer-pr-diagnosis.md`: one-page answers, PR walkthroughs and Architecture Diagnosis as video.
- `upstream/`: the original Archify skill, references, schemas and examples by tt-a1i, for the exact field meanings and authoring rules.

## Rules that never bend

1. **Evidence first.** For a real codebase, read the source before drawing. Every node names the file or module it comes from; every arrow says what moves (call, event, data) and in which direction. Pin the repository and the 40-character commit in the director brief. Examples you invent (a sample middleware, a sample payload) are labeled "example" on screen.
2. **One question per diagram.** Show the main user journey first and the branches that change behavior. No node, edge or card count is a target. Leave out what the question does not need and say so in the brief.
3. **Color is meaning.** Use the fixed semantic palette and a legend whose labels tell the truth for this subject (rename "backend" to "Koa core file" when that is what green means here). Never use color as decoration.
4. **Motion has one owner and finishes.** Things enter, edges draw, one token travels the path, one part is in focus. Nothing loops forever, nothing moves only to look busy, and every frame still reads as a diagram when paused.
5. **White background.** Videos use the light theme on white with Subclip blue `#153592` and cyan `#26c9d5` as the trace and focus accents. Use the dark Archify console look only when the creator asks for it.
6. **Honest output.** State what is illustrative and what is measured. Say which checks ran and which frames you looked at. Never claim visual review you did not do.

## Workflow

1. **Read the project.** `get_project_outline`, then `read_project_section` for the lanes you need and `list_editor_assets`. Reuse media context with `get_media_context` before rescanning anything. Keep the same `projectId` on every call and make one edit at a time.
2. **Gather evidence.**
   - Local repository: read the files yourself and note path and line numbers for each claim.
   - Public pull request: `fetch_public_github_pull_request` for metadata, changed files and the exact diff.
   - Website or product: `inspect_public_website`.
   - Idea or plan: ask for missing facts (dates, amounts, rules) instead of inventing them.
3. **Choose the diagram type** with the router in `references/diagram-types.md`. Mermaid input is read for topology and meaning, then redrawn: flowchart to workflow, sequenceDiagram to sequence, stateDiagram to lifecycle, erDiagram to ERD, classDiagram to class.
4. **Write the story brief** in the Archify v2 shape (title, intro, outro, scenes with points: anchor, via, title, text, caption). In video the top area is `scene.title`, the side panel is `point.title` and `point.text`, and `point.caption` becomes the spoken line and the captions. Save it with `update_project_director_brief` together with the repository pin and the source list.
5. **Voice first.** Free and offline: `generate_local_speech` (one clip per scene), then `import_generated_audio_to_timeline`. Cloud voices: `get_voice_samples`, `set_approved_voice`, `generate_speech`, `import_speech_to_timeline`, after quoting the cost. Leave about 0.5 s before each scene's voice. The voice durations set the scene lengths.
6. **Get word timings.** `transcribe_project` in local mode (captions purpose) gives word times; use them to place each beat on the word that names it.
7. **Build each scene** as its own HyperFrames layer, following `subclip-hyperframes-layer` (read it with `read_subclip_skill`). Start from `references/scene-kit.md`: node and edge data plus a list of timed steps (enter, connect, focus, trace, parallel, panel, code). Check it with `validate_runtime_layer_source`, then `add_runtime_layer` with the scene start and duration. Keep every element inside 1920 by 1080 with `overflow: clip` on the root, and keep the bottom 170 px free for captions. Use Remotion (`add_runtime_layer` with kind `remotion`) only when the creator asks for React or Remotion. Revise in place with `read_layer_source` and `edit_layer_source`, or `update_runtime_layer` for a full replacement.
8. **Captions.** Keep the default caption preset (`apply_dynamic_caption_preset` with no preset id, highlight none). On white, set the caption text color to `#153592` with the shadow off via `update_caption_style`, and move it to the bottom (positionY about 89). Fix code names in `update_caption_words` (".js" file names, `ctx.body`), and remove split leftovers with `delete_caption_segment`.
9. **Sound.** A quiet CC0 bed from `search_public_audio` (or `generate_music` when the creator wants an original score and approves the cost), imported with `import_public_asset_to_timeline`, around -24 dB under the voice with fades via `update_audio_item`. A soft whoosh on scene cuts and a click when a key node lands are enough. Peaks stay under -1 dBFS.
10. **Check.** `set_project_duration` to the last beat plus a short hold. `get_timeline_contact_sheet` across the whole film, then `view_frame` at each scene start, each focus change and the final frame. Follow the arrows on screen from the start to the end and confirm each claim against its source line. Fix overlaps, clipped text and empty first frames in the same layer.
11. **Export only on request** with `export_video`, then `get_export_status`. Record what was checked with `write_session_summary`.

## Costs

Code layers, local speech, local transcription and catalog or CC0 audio cost 0 credits. Cloud voices, generated music and any generated image or video are quoted first with `list_ai_models` and `estimate_ai_generation` and wait for the creator's yes. For an image, offer the creator's own signed-in Codex CLI first and import its file with `import_external_media`. No API keys, no scripts to run, no outside services.

## Optional: the creator's own Archify install

Archify itself is an open-source command line tool. A creator who has it installed can export a finished diagram as SVG on their own machine and give you the file; import it with `import_external_media` and animate around it. This skill never asks you to install or run it.

## Verification checklist

- Every node and arrow traces to a file, a line or a stated fact; examples are labeled.
- The first frame already shows the scene title; no scene opens on an empty frame.
- One focus per beat; the token reaches the node the narrator names at the moment it is named.
- Code panels show at most 20 real lines with real line numbers.
- Captions are readable navy on white and never cover the diagram.
- Audio: voice clear over music, peaks under -1 dBFS.

## Reference

A [38 s story video of how Koa handles a request](examples/archify-koa-reference.mp4) and its [one-frame-per-second sheet](examples/archify-koa-contact.jpg) were made with this skill in Subclip for 0 credits, edited by Claude Opus 5.5 (claude-opus-5-5) driving Subclip over MCP. Evidence came from koajs/koa at commit 98a19bc (lib/application.js, context.js, request.js, response.js). Three HyperFrames scenes from the scene kit: an architecture view (what Koa is made of), a sequence view with the matching lines of `callback()` and `handleRequest()` highlighted as the token moves down and back up the middleware, and a workflow view of `respond()` that ends on the one loop per request. Voice: Subclip local speech (voice Marius). Music: Chill Background Music by Seth_Makes_Sounds (CC0). Whooshes, clicks and a ding from the Subclip catalog. The [silent preview](preview.mp4) shows the same film in under 20 s.

Adapted for Subclip from https://github.com/tt-a1i/archify by tt-a1i, Apache-2.0
