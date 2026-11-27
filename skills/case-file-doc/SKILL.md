---
name: case-file-doc
description: >-
  Build a narrated investigative documentary cold open (a streaming-doc style trailer, 45 to 120 s) in the
  Subclip AI Editor from real, attributed reporting. One deep narrator walks the viewer through four paper and
  evidence worlds made in code as HyperFrames layers: a concrete wall with a red date stamp, a document under a
  tilted camera with a highlighter swept on the spoken words, grunge newsprint kinetic type with red and yellow
  word bars, and a cork board in the dark with a moving spotlight, red string and a magnifier. 2.39:1 letterbox,
  film grain, 11 scene recipes, a score and effects placed on native audio lanes, every claim tagged with its
  source, and an ending that asks a question instead of giving a verdict. Use for "case file doc", "make a
  documentary about <person, company or news story>", "investigative doc trailer", "doc cold open from this
  post", "the Netflix doc style".
---

# Case file doc

A real story told like a case file being opened: the date, the subject's own words, who they are, how they
rose, the turn, the reporting, what is not known, the open question, the title. Every picture is made in code
(HyperFrames layers) or is real material the creator supplies. No AI image or video generation.

Read before building:

- [references/story.md](references/story.md): the beat shape, how to write the script, the voice.
- [references/look.md](references/look.md): frame, worlds, colour tokens, type, motion rules, banned moves.
- [references/devices.md](references/devices.md): every visual device and the scene recipe that holds it.
- [references/research.md](references/research.md): where evidence comes from and the sources table.
- [references/sound.md](references/sound.md): score and effects on native audio lanes, the mix targets.
- [references/subclip-build.md](references/subclip-build.md): the exact Subclip tool flow, scene skeleton,
  fonts, grain and letterbox code.
- [references/review.md](references/review.md): the frame and audio review checklist before export.

## Hard rules

1. **Every claim traces to a source row.** On screen, each fact or allegation carries its outlet (or archive)
   and date. The narration says "reported", "according to", "allegedly" where the claim is someone else's.
   Quotes are exact. Include what is not known or not proven, and end on a question, never a verdict.
2. **Real material only.** The actual document, post, article, archive page or footage the creator can use.
   Leave out AI-made images, deepfakes, face swaps, glamour or paparazzi photos. People who are not the subject
   are shown plainly and never mocked. If there is no usable photo, show an empty frame that says so.
3. **Rights are the creator's call.** News footage, press photos and other people's posts are marked FLAG in the
   sources table and shown to the creator before export.
4. **Two gates.** Gate 1: script, shot list, sources table with flags and the voice choice, before any paid voice
   or building. Gate 2: the frame and audio review (review.md) before the final export. Nothing is published.
5. **A short film, not a slideshow.** No chapter cards. One device per line; calm fades, hard cuts, one big hit
   on the name with silence before it. Logos are the official mark wiped on in ink.
6. **No placeholder ships.** Every sample line in a scene recipe is replaced with real, sourced text.
7. **Code scenes stay deterministic.** One paused GSAP timeline per layer, seeded randomness only, no CSS filter
   or backdrop-filter on text or on anything that contains text, every element inside the 1920 by 1080 frame,
   `overflow: clip` on the root.

## Workflow

1. **Start.** `get_project_outline` (or `create_project` with `canvasPreset: "landscape"`), then
   `get_media_context` for anything the creator attached. Write the goal into `update_project_director_brief`.
2. **Research** (research.md). Find the primary document, the reporting with outlet and date, and any footage
   or one real voice the creator may use. Fill the sources table as you go.
3. **Script and shot list** (story.md). One line per fact, pauses written in, the name held back for the first
   beat, the counterweight and the question at the end. Map each line to a world and one device. Show Gate 1.
4. **Voice.** Free and offline: `generate_local_speech` with a deep voice, one call per beat, so the pauses
   between beats are timeline gaps you control. Cloud: `get_voice_samples`, `set_approved_voice`,
   `generate_speech` after quoting the cost. Import each line with `import_generated_audio_to_timeline` at its
   planned start time.
5. **Word timing.** `transcribe_project` with `purpose: "reference"` and `allTimelineClips: true` (local mode).
   The saved transcript gives every word's start time: this is the clock for every tween, highlighter and hit.
6. **Scenes.** One HyperFrames layer per beat or per world with `add_runtime_layer` (full frame, `fitMode:
   "cover"`), built from the recipes in devices.md and the skeleton in subclip-build.md. Write the spoken word
   and its time in a comment above each tween. Calm beats between scenes can be native text on a plain ground
   (`add_text_overlay`, `update_text_item`). Check each scene with `view_frame` before the next.
7. **Sound** (sound.md). Score and effects as native audio items: `search_public_audio` for CC0 drones, hits,
   typewriter, stamp, paper and whoosh, `import_public_asset_to_timeline`, then `update_audio_item` for trims,
   fades and levels. `generate_music` (after a quote) when the creator wants a composed score.
8. **Review** (review.md). `get_timeline_contact_sheet` across the film, `view_frame` at every QA second, the
   audio checks. Fix in place with `read_layer_source` and `edit_layer_source`. Show Gate 2.
9. **Export** only when asked: `get_export_configuration`, then `export_video`. Finish with
   `write_session_summary`, saying plainly what was only measured and not heard.

## Cost

A film with local narration, code scenes and CC0 sound costs 0 credits. Cloud voice or generated music costs
credits: quote with `list_ai_models` and `estimate_ai_generation`, check `get_ai_credit_status`, and wait for a
yes. This skill never calls image or video generation.

## How it differs from nearby skills

- **documentary-case-file** builds a documentary from AI stills and clips with a narrator. This skill makes no
  AI pictures: every frame is paper, type, light and evidence made in code, around real sourced material.
- **vox-director** and **vox-explainer** make paper-collage explainers. This skill is an investigative cold
  open: a date hook, documents under a camera, a dark evidence board and an open question.

## Reference

- `examples/case-file-doc-reference.mp4`: "The Cooper File", a 58 s cold open on the 1971 Flight 305 hijacking
  built by following this skill: three HyperFrames scenes (wall date, archive document with highlighter, cork
  board), two native text cuts, local narration, CC0 score and effects, every claim tagged National Archives at
  Seattle or FBI.gov. 0 credits.
- `examples/case-file-doc-reference-sheet.jpg`: one frame per second of that film.
- `examples/tejas-t3-code-excerpt.mp4`: the first 66 s of "The T3 Code situation, explained like you're five"
  by Tejas Makwana, made with the original case-file-doc skill
  ([post](https://x.com/makwanatejas170/status/2125608178385821824)).

Adapted for Subclip from https://github.com/Tejashmakwana/case-file-doc by Tejas Makwana, Not stated
