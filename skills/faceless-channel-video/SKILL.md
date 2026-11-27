---
name: faceless-channel-video
description: Faceless channel episodes in Subclip, planned as an arc (hook, build, turn, payoff) with one through-line object or character, five sized shots per 10 second block, a narration pacing gate of about 20 to 23 words per block, and a locked look (editorial collage, paper diorama, cinematic storybook, mannequin or children's). Also covers a sung children's video, a still-picture story and a presenter overlay. Use when the creator asks for a faceless video, a faceless YouTube or TikTok episode, a narrated history, science or story short with no person on camera, a children's narrated or sung video, or an edit to such an episode.
---

# Faceless channel video (Subclip edition)

Make one finished faceless episode: a narrator nobody sees, pictures that show exactly what the narrator says, and a story that goes somewhere. The craft comes from Higgsfield's faceless video skill. Everything it did with its own CLI, Python gates and shell assembly happens here with Subclip tools, so every scene, voice line and caption stays editable on the timeline.

The original skill is kept unchanged in `upstream/` (its `SKILL.md` files are renamed `SKILL.upstream.md` so Subclip does not load them as extra skills). `higgsfield-video-explainer` is only a redirect to `higgsfield-faceless-video` in the original; this skill covers both, and a request for "a narrated explainer" lands here too.

## Choose the mode first

| The request | Mode | Read |
| --- | --- | --- |
| A narrated episode, documentary, story or kids narration with motion | Channel episode (default) | `references/arc-and-shots.md`, `references/pacing-gate.md` |
| "Still pictures", "picture story", "slideshow story" | Still-picture story | `references/modes.md` |
| A sung children's song or music video (not just background music) | Children's song | `references/modes.md` |
| "Put me in it as a presenter" with an authorised photo | Presenter overlay on the channel episode | `references/modes.md` |
| Change seconds 10 to 20 of an episode made earlier | Block edit | `references/modes.md` |

Never infer a presenter from an incidental photo. A request for background music alone is not a song request. Keep the mode when continuing an earlier episode.

## Before any work

1. Resolve topic, length (in 10 second blocks; a shorter last block is fine, never round the length up), aspect ratio, language, look, voice, music and captions. Ask once for anything missing.
2. Pick the look from `references/looks.md` (editorial collage, paper diorama, cinematic storybook, mannequin, children's). The look is locked for the whole episode.
3. Choose how the pictures are made:
   - **Code scenes (0 credits):** one HyperFrames layer per block, the look drawn in SVG and CSS. Best for editorial collage and paper diorama, and for diagrams.
   - **Generated stills or clips:** for painted storybook, clay mannequin or 3D children's looks. Images: offer the creator's own signed-in Codex CLI first, else `generate_ai_media` with an image model from `list_ai_models` (the original used GPT Image 2.5 for references; Subclip lists `gpt-image-2.5-*`). Motion: the original used MiniMax H3 for 10 second blocks; Subclip lists MiniMax H3 Max (`h3-max`). Quote every paid step first (below).
4. For factual topics, research reliable sources and keep the URLs in the plan. Never invent facts.

## The plan file (the arc)

Write the plan before any voice or picture and save it in the project brief with `update_project_director_brief` (and as a project note if long). Shape, kept from the original `script.json`:

- `genre`: education, history, kids or storytelling. `sources`: URLs for factual work.
- `through_line`: `{ name, asset, progression, resolution }`. One object or character that changes across the episode and resolves at the end (a tower's lean, a seed becoming a tree, a lost letter reaching home).
- `arc`: `{ hook: 1, build: [2, 3], turn: <block>, payoff: <last block> }`. With three blocks: hook, turn, payoff. With four or more, at least one build block.
- One entry per block: `arc_role`, `vo_line`, `location`, `through_line_state`, `assets_used` (include the through-line asset), and `shots`.

Gates the plan must pass (check them yourself, line by line, and write down that you did):

- **Hook:** for education and history, block 1 opens with a flat fact of at most 8 words before its first full stop.
- **Shots:** five per block (four for kids). Each starts with a size: `WIDE:`, `MEDIUM:`, `CU:` or `DETAIL:` (also `TOP:`/overhead). Adjacent shots never share a size. Every shot shows what the narrator says in that moment. A later block that returns to a location opens on a closer size, never WIDE. No location in more than two blocks in a row. No two blocks with the same location, assets and size order.
- **Narration:** see the pacing gate. No digits (write "eleven seventy-three"), at most two sentences per block, no filler (basically, you know, sort of), no word repeated within six words, no five-word phrase repeated across blocks.

Details and a worked example: `references/arc-and-shots.md`.

## Voice first, then pictures

Narration timing drives every cut.

1. Voice: free local voice for tests and drafts with `generate_local_speech` (`list_local_voices`; let the creator pick with `get_voice_samples` unless they delegated it). For a paid voice, the original named ElevenLabs v4; Subclip does not list it, so use **ElevenLabs v3** (`elevenlabs-v3`) through `generate_speech`, after `estimate_ai_generation` and a yes. Keep one voice for the whole episode.
2. Generate one take per block. Measure each with `get_audio_analysis` or the returned duration: **the spoken part must last 7.8 to 9.5 seconds of the 10 second block** (7.2 to 7.8 is a soft pass after one retry), with no pause over 0.8 seconds and no more than 2.9 words per second. Pacing gate details: `references/pacing-gate.md`.
3. A failing take means the **line** changes: rewrite it and generate again. Never speed the audio up or slow it down, never set `speed`, `targetDurationSeconds` or a playback rate to make it fit. Trying another voice of the same kind is fine before the episode is locked. Stop after three attempts per line and report it.
4. Place each passing take with `import_generated_audio_to_timeline` at the block start (0, 10, 20 and so on). Speech starts at once in each block.

## Style lock and first scene check

1. Write the look as a short style key (palette, one accent colour, paper or material, light, motion character) and reuse it word for word in every scene or prompt.
2. Build **only block 1** first (code layer or generated asset). Check it with `view_frame` at each of its five shots: look, framing size, the through-line, no stray text, nothing outside the frame.
3. Then build the rest. Inspect each block. Name defects (wrong size, look drift, identity drift, frozen motion, text in a picture) and **redo only the failed asset**, never the accepted ones. Respect moderation refusals.

## Building a block in Subclip

Code scenes (default, 0 credits):

- One `add_runtime_layer` per block: `kind: "hyperframes"`, `startTime` at the block start, `duration: 10`, `x: 50`, `y: 50`, `width: 100`, `height: 100`, `intrinsicWidth: 1920`, `intrinsicHeight: 1080`, `fitMode: "cover"`. Run `validate_runtime_layer_source` first.
- Inside it, five shot groups cut every two seconds (or on the narration words), each framed at its planned size. Keep every element inside 1920 by 1080 with `overflow: clip` on the root, no CSS filter on text, and a paused GSAP timeline registered in `window.__timelines`.
- Paper motion: move cut-outs on twos (stepped eases) with a small seeded jitter, so it reads as handmade and every render is identical.
- Revise with `read_layer_source` and `edit_layer_source`.

Generated pictures:

- Stills: `generate_ai_media` (`kind: "image"`) or Codex CLI files brought in with `import_external_media`; place with `import_generated_media_to_timeline` or `import_ai_operation_to_timeline`, five per block, cut with `trim_media_item` and given slow moves with `add_media_keyframe`.
- Motion: one 10 second clip per block with `generate_ai_media` (`kind: "video"`), prompt written as the five sized shots, no spoken words or captions in the prompt. Import with `import_ai_operation_to_timeline`. Wait on `get_ai_operation`; never submit a duplicate while one runs.

## Sound, captions and finish

- Music only if wanted: a quiet bed from `search_public_audio` (CC0) or `generate_music`, ducked well under the voice with `update_audio_item`, peak below -1 dB. A few soft paper or object sounds on key moments, never on every cut.
- Captions if wanted: `transcribe_project` with `mode: "local"` on the narration, then `apply_dynamic_caption_preset` with no preset id (the default), and on a light background set the text colour dark with `update_caption_style` (for example `#153592`, shadow off). Fix words against the plan with `update_caption_words`. The original kept captions at four words or fewer per line.
- `set_project_duration` to the planned length, then review every block at one frame per second with `view_frame` or a contact sheet: shot sizes alternate, each shot matches its words, the through-line changes and resolves, captions readable.
- `export_video` only when the creator asks. Report the length, look, voice, sources and every model used.

## Credits

Code scenes, local voice and catalog audio cost 0 credits. Before any paid step, call `list_ai_models` and `estimate_ai_generation` for the exact model, count, duration and resolution, quote the total with a retry allowance, and wait for a yes unless the request already approved that exact scope. Stop on a credit or storage limit.

## Reference

The [Pisa reference episode with sound](examples/pisa-reference.mp4) and its [one-frame-per-second sheet](examples/pisa-contact.jpg) were made by following this skill: three 10 second blocks (hook, turn, payoff) in the editorial collage look, the tower and its lean as the through-line, five sized shots per block, local voice, 0 credits. The plan file is in `references/arc-and-shots.md`.

Adapted for Subclip from [higgsfield-ai/skills](https://github.com/higgsfield-ai/skills) by Higgsfield AI, MIT
