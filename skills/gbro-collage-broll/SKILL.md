---
name: gbro-collage-broll
description: Turn a roughly 5 second voiceover line, opinion or abstract idea into a premium editorial halftone paper-collage B-roll clip inside Subclip. Use when the creator says "collage b-roll", "paper collage", "halftone collage", "collage style visuals for this script", or wants one sentence turned into a single visual metaphor. Three approval gates: metaphor first, then a colored collage still, then an assemble-from-empty animation, so credits are only spent on approved ideas.
---

# Collage B-roll (Subclip edition)

Compress one spoken line (about 5 seconds) into one sharp visual idea, then build it as a premium editorial paper-collage clip that assembles itself from an empty color field. Everything runs through Subclip's own tools and the creator's choice of image and video generator. No outside API key, no Python, no ffmpeg.

```
LINE -> Gate 1 metaphor -> Gate 2 collage still -> Gate 3 assembly clip -> place + verify
        (words only)       (image, approved)        (video, approved)      (timeline)
```

The two gates are part of the method. They keep the creator's attention on taste and direction, and stop a wrong metaphor or wrong still from burning video credits.

## Before you start

- Project: use the open project, or `create_project` with the creator's canvas preset. Default delivery is vertical 9:16, 5 seconds, silent. Use `get_project_outline` and keep the same project ID on every call. If the line already sits on the timeline as narration, `read_project_section` for its exact time range and make the clip that length.
- Read `get_media_context` before describing existing footage or audio. Never claim to know media from a filename.
- Pick generators once and respect the choice afterwards. Offer the creator's own signed-in Codex CLI for the still (preferred for images) and, if it works, the Grok CLI for the video. Otherwise use Subclip models. Read `references/subclip-models.md`.
- Run `list_ai_models`, `estimate_ai_generation` and `get_ai_credit_status` before any paid step. Quote the model, number of clips, settings and estimated total. A direct request that names the scope counts as approval; a larger bill needs a new yes.
- One timeline edit at a time. Generation jobs may run in parallel within the approved budget.

## Success criteria

- One line expresses one clear metaphor, with 3 to 6 key objects.
- A flat, strong, uniform color field, which may change with the meaning of the line.
- Black and white halftone photographic cut-outs form the skeleton. Key cards, buttons, film strips or rulebooks may use red, yellow, cyan, orange, purple or cream paper.
- Every piece has a crisp cut edge, a cream keyline, a soft low-opacity shadow and paper grain.
- Motion is assemble-from-empty, not drift, wobble or slow zoom.
- No subtitles, no full voiceover text, no logo, no watermark, no UI.

## When not to use

- The creator needs exact layers, occlusion, camera moves through the scene or an editable timeline per element: use a HyperFrames layer (see Route B in Gate 3).
- Only a video prompt is wanted: write it and stop.
- Real people, product ads or presenters: not a collage job.

## Gate 1: metaphor (words only)

No image, no video, no credits. For each line deliver:

- core meaning (what the viewer must finally understand)
- emotion (calm, surprise, urgency, relief, irony)
- one-sentence visual proposition
- 3 to 6 key objects
- suggested background color and spot colors
- expected assembly order

Method: pull out the action verb (open, connect, leak, bind, archive, light up, compress, fork, assemble) and a visualizable metaphor (machine, clock, film strip, filing cabinet, console, rulebook, funnel, track, chess piece). Never put the script text into the frame. One line, one metaphor. For a batch, give the set a narrative arc, for example manual effort and lost experience first, then standards and human-machine split.

Example:

```
1. Meaning: experience is burned again and again
   Metaphor: a skilled editor cuts frame by frame around a giant film clock; the clock finishes one full turn and yields one short strip
   Objects: film clock, editor, scissors, short film strip
   Color: burnt orange field, cream and pale cyan accents
   Order: clock, editor with scissors, film, final short output
```

Then stop and wait for "approved", "all approved" or numbered edits. Only approved items move to Gate 2.

## Gate 2: collage still

After approval write a self-contained visual spec, then the image prompt. Read `references/collage-style.md` for the spec shape, color rules and prompt template.

Generate the still at the delivery aspect ratio:

- Codex CLI chosen: generate with it and import the file with `import_external_media`.
- Subclip chosen: `generate_ai_media` with an image model from `list_ai_models` (see `references/subclip-models.md`), then `get_ai_operation` and `import_ai_operation_to_timeline` or `import_generated_media_to_timeline`. Keep stable operation IDs; do not duplicate a queued job.

Still QA, by looking at the real image (use `view_current_frame` or the returned media):

- Is the metaphor obvious at a glance?
- Is the subject centered, within the middle 70 percent?
- Any fake letters, logos, watermarks or UI?
- Enough clean color field to assemble from empty?
- 3 to 6 large separable groups, not screen-wide confetti?
- A batch shares one look but varies color.

Show the numbered stills to the creator and stop. Redo only rejected stills. Keep old versions so they can be compared.

## Gate 3: assemble-from-empty clip

Only after the still is approved. Do not ask again which model to use: follow the choice made earlier.

### Route A (default): first and last frame video

1. The last frame is the approved still. The first frame is the empty color field of the same background color. Make it as a flat image: generate a plain `<hex>` paper field with the image generator (a flat field with fine paper fiber and nothing else), or reuse the still's field color as a native solid layer. Import both as project media.
2. Write the animation prompt from `references/collage-style.md`: image 1 is the exact empty first frame, image 2 the exact completed last frame, pieces slide in, snap into place and connect in order, then hold the finished composition.
3. Use a video model from `list_ai_models` that accepts first and last frames (the source used Gemini Omni Flash; see `references/subclip-models.md`). Quote with `estimate_ai_generation` using the exact durations. Request silent output; if the model adds audio, mute or delete the audio so the clip is silent.
4. `get_ai_operation`, then `import_ai_operation_to_timeline` at the right start time. Trim with `trim_media_item` to the beat length. One clip per approved still. Rerun only failed jobs.

### Route B: editable layer, no video credits

For exact control, build the assembly as a motion layer: one HyperFrames layer (`add_runtime_layer`, read the HyperFrames internal skill first through `read_subclip_skill`). Generate or import the approved still's separate paper groups as individual images (ask the image model for each group as a cut-out on a plain field, or use cut-outs the creator supplies), then place each group in a layer with eased slide-in and a small overshoot snap, shadows deepening on landing, in the planned order. Revise with `read_layer_source` and `edit_layer_source`. Keep motion deterministic so scrubbing works.

## Video QA

Do not only look at the last frame. With `view_current_frame` at several exact times:

- First frame is close to an empty color field. A little paper peeking at the edge is acceptable.
- Mid frames show pieces entering one by one, not a whole-image fade.
- No scene cuts, zoom, 3D look or photoreal drift, no fake text, logos or UI.
- Final frame matches the approved still. Small pose or detail drift that does not change the metaphor passes; do not rerun for it.
- Silent, correct aspect ratio, correct length.

Common fixes: weak assembly, cut the number of elements and write an explicit slide-in and snap order; end frame drifts, stress "image 2 is the exact completed last frame" and "hold the supplied completed composition"; fake text, go back to the still, never patch it in the video prompt.

## Deliver

- One clip per approved line on the timeline, silent, trimmed to the beat.
- One sentence per line on how the script became a visual metaphor.
- `update_project_director_brief` with the approved metaphors, color fields, models and operation IDs; `write_session_summary` with checks done and not done.
- Export only if asked: `get_export_configuration`, `list_render_queue`, then `export_video` once.

Say plainly what you did not check, for example that no one listened to audio or that the clip was seen only at sampled frames.

## Reference

A [three-line reference with sound](examples/one-line-collage-broll.mp4) and its [one-frame-per-second sheet](examples/one-line-collage-broll-contact.jpg) were made with this skill in Subclip. Line 1 uses Route A with a twist: the model had no end-frame input, so Wan 3 took the approved still apart and the clip plays in reverse, assembling from the empty field. Lines 2 and 3 use Route B: gpt-image-2 cut-outs with transparent backgrounds animated in Remotion layers, with blurred silhouette images as shadows (a CSS drop shadow can make a piece vanish in rendered frames) and motion on twos. The [silent preview](preview.mp4) shows all three.

Adapted for Subclip from [pyang5166/gbro-collage-broll](https://github.com/pyang5166/gbro-collage-broll) by pyang5166, MIT.
