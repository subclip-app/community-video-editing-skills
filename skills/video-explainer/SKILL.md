---
name: video-explainer
description: Turn a topic, article, codebase, doc or URL into a tight 60 to 75 second explainer video in Subclip, in one of three modes - Motion (default, 2D kinetic graphics, live SVG routes and charts, CSS 3D cards, press clippings), Illustrated (gouache and pastel picture book with line boil and word-synced characters) or 3D (single-take Three.js flythroughs). Narration first, word-anchored motion and sound, captions, real web media, and a 10-check review before delivery. Use when someone wants an animated explainer, a "how does X work" video, or a short video that teaches one idea.
---

# Video explainer (Subclip edition)

Input: a topic, article, codebase, rough notes or a URL. Output: an editable Subclip project and, when asked, an exported 1920x1080 30 fps film (or 9:16 or 1:1 on request) that runs 60 to 75 seconds and never more than 2 minutes.

You write the script, the narration and the scene code. Subclip does the rest: voice, word timing, HyperFrames layers, captions, audio mix, frame review and export. No setup script, no outside API key, no local render pipeline.

```
TOPIC -> 1.Mode -> 2.Research + script -> 3.Voice + word timing -> 4.Scenes -> 5.Sound + captions -> 6.Review -> 7.Export
         (ask)     (agent)                 (local or cloud TTS,      (HyperFrames   (search_public_audio,  (10 checks,   (export_video)
                                            transcribe_project)       layers)        captions preset)       contact sheet)
```

## When to use this skill, and when not

- **Use it** for a fast general explainer about anything: how a payment, a protocol, a law, a star or a codebase works. Pick a mode and go.
- **Use `vox-explainer`** when the creator wants the Vox documentary look (paper collage, archival cutouts) made from AI keyframes and AI animation.
- **Use `website-to-video`** when the subject is one website or product page and the film should show that site.

## Before you start

- Read `subclip-video-editor` and `subclip-hyperframes-layer` with `read_subclip_skill`, plus `subclip-tts`, `subclip-transcription`, `subclip-dynamic-captions`, `subclip-audio-editing` and `subclip-review-safety` as needed. Current tool schemas beat anything written here.
- `list_projects` first. Reuse a project the creator names. Otherwise `create_project` with `canvasPreset: "landscape"` (or the requested aspect) and pass that `projectId` on every later call.
- Run one editing call at a time on the project and re-read state (`get_project_outline`, `read_project_section`) after each coherent change.
- If the creator attached media, call `get_media_context` with `includeContactSheet: true` before anything else. Never describe media you have not looked at.

## 1. Pick a visual mode

Offer three modes, numbered, with their relative cost in agent work:

1. **Motion (default).** Full-frame 2D kinetic graphics, live SVG routes and charts, CSS 3D cards or devices, documentary press clippings. Fastest.
2. **Illustrated.** Hand-drawn picture-book animation: gouache, pastel, paper grain, 10 fps line boil, characters whose mouths follow the words. About 6 times the agent work of Motion.
3. **3D.** Single-take Three.js camera flythroughs with studio lighting, reflections and camera-facing labels. About 7 times the agent work of Motion.

If the creator already named a mode or said "use defaults", go straight on with Motion and captions on. Otherwise show the list, ask whether they want burned-in captions (on by default), and wait for the answer. All three modes cost 0 credits with local voice; only cloud voice and generated music use credits.

Read [references/modes.md](references/modes.md) for the build rules and a starter rig for each mode.

## 2. Research and write the script

Verify every claim, number, quote and step against the creator's files or primary sources. For a URL, `inspect_public_website` returns real copy, colors, logos and page captures. For real photos and clips, `search_public_media` then `import_public_asset_to_timeline` with its attribution; for a link the creator gave, `fetch_linked_media`. Look at every imported image or clip before you use it and drop anything blurry, broken or off topic.

Write the plan into the director brief (`update_project_director_brief`) in the shape shown in [references/script.md](references/script.md). The rules that matter most:

- **Length.** 60 to 75 seconds, 135 to 185 spoken words over 5 to 8 scenes (about 2.5 words per second). For ELI5, 45 to 60 seconds and 100 to 150 words. For another length, write about 2.5 words per second of it. Hard cap 2 minutes (about 260 words). Cut tangents rather than speeding up the voice.
- **Audience.** Default `general` (a smart non-engineer): plain English, concrete mental models, no file paths, variable names, error codes, flags or unexplained acronyms in speech or on screen. `eli5` uses physical metaphors and zero jargon. `technical` may name architectures, protocols and tradeoffs. Switch only when asked.
- **Hook in 3 seconds.** Open with a concrete question, tension or number that reads with the sound off.
- **One example, end to end.** Trace one request, one dollar, one star or one user through every step, and close by answering the opening question.
- **Clean spoken copy.** No throat-clearing openers, no "it's not X, it's Y" contrasts, no colon reveals, no hype adjectives. Short sentences, active verbs, numbers a listener can hold.

Go straight from script to build unless the creator asked to approve the script first.

## 3. Voice first, then word timing

Narration length is the clock for everything else.

- **Free local voice:** `list_local_voices`, then `generate_local_speech` once per scene, then `import_generated_audio_to_timeline` with an explicit `startTime`. Leave 0.4 to 0.8 s between scenes; give the hook a little more air.
- **Cloud voice (credits):** the source skill uses Gemini TTS (voice Kore by default). In Subclip: `get_voice_samples`, `set_approved_voice`, then `generate_speech` and `import_speech_to_timeline`. Quote the credits first.
- **Voice choice:** if the creator has not picked one, offer `get_voice_samples` unless they told you to choose.
- **Word timing:** `transcribe_project` in local mode with `allTimelineClips: true` before any music is added. It writes word-level captions. Read them with `read_project_section` (lane `captions`) and use each word's `startMs` as a cue. Fix misheard words with `update_caption_words` (the source calls these caption fixes).

## 4. Build the scenes as HyperFrames layers

- Split the film into 2 to 4 layers at natural scene boundaries (for example hook plus setup, mechanism, payoff plus ending). Each layer is one standalone HyperFrames document with its own paused GSAP timeline. Keep the visual world identical across layers so the cuts are invisible: same camera rig, same node positions, same HUD, and each layer starts in the exact state the previous one ended.
- Anchor motion to words: a layer starting at project time `S` puts a beat at `word.startMs / 1000 - S`. Land the beat on the word, not after it.
- **A moving film, never slides.** One hero visual fills 60 to 85 percent of the frame and visibly changes every 2 to 3 seconds: the camera dives, pans or draws a live path, objects morph instead of swapping. Cards or text on a flat background with no moving hero read as a slide deck. Save single-beat visuals (title, number, compare, quote) for one-off moments.
- **Readable labels.** 1 to 4 words, 28 px or larger, hero numbers 88 to 160 px, WCAG AA contrast, and above the caption band (below y 860 on 16:9, y 1400 on 9:16).
- **Deterministic on seek.** Drive everything from the timeline time (an `onUpdate` that computes positions from `tl.time()` works well), no `Math.random()`, no wall clock, no CSS transform on an element GSAP also moves, no CSS `filter` on text.
- Validate with `validate_runtime_layer_source`, add with `add_runtime_layer` (full-frame scene: x 50, y 50, width 100, height 100, intrinsic 1920x1080), revise in place with `read_layer_source` and `edit_layer_source`.
- Real media inside a layer must be imported first and referenced by the URL `list_editor_assets` returns.
- Set the exact film length with `set_project_duration`.

## 5. Sound, music and captions

- **Sound cues.** The source anchors sound to words (`@s05:iron: rumble 0.8`). Do the same: `search_public_audio` with `source: "sfx"` (whoosh, whip, ding, pop and more), then `import_public_asset_to_timeline` at the word's start time. Use a few, on camera moves and payoffs. See [references/sound.md](references/sound.md).
- **Music.** A quiet bed: a CC0 loop from `search_public_audio` (loop it with `update_audio_item`, `loop: true`), or, when the creator wants the source skill's Lyria score and accepts credits, `generate_music` with Lyria 3 Pro instrumental. Keep it about 18 to 20 dB under the voice; peaks under -1 dB.
- **Captions.** On by default when voiced, off when the creator says so. Use the owner's default look: `apply_dynamic_caption_preset` with the core default preset (`ivory-spotlight`), no highlight. Move the captions to the bottom band with `update_caption_style` `positionY` if they would cover labels.

## 6. Review before the creator sees it

1. `get_timeline_contact_sheet` across the film and around every cut. Check framing, contrast, clipped text, whiteouts and frozen stretches.
2. **Fresh-eyes check.** Look at the sheet as if new, or give it to a subagent with only the mode and the hook line: does any frame read as a slide? Do the first 15 seconds open on a striking visual that changes every 2 to 3 seconds? Does any art look like generic clip art? Fix every yes and look again.
3. Answer every item in [references/review-checklist.md](references/review-checklist.md). Fix any no first.
4. Ask the creator to listen for voice pacing and music balance; you cannot hear the mix.

## 7. Export

Only when the creator asks: `list_render_queue`, then `export_video` (1080p MP4), then `get_export_status`. Report the file path, duration and anything that still needs a listen. Record decisions with `update_project_director_brief` and finish with `write_session_summary`.

## Reference

[How a card payment travels in 2 seconds](examples/card-payment-2-seconds.mp4) is a 32.5 second Motion-mode film made with this skill in Subclip at zero credits: local voice, three HyperFrames layers sharing one camera rig and route map, word-anchored dings and whooshes, a CC0 music loop and default captions. [One frame per second](examples/card-payment-2-seconds-contact.jpg). [Silent preview](preview.mp4).

## References

- [references/script.md](references/script.md): plan format, word budgets, audience levels, spoken copy rules.
- [references/modes.md](references/modes.md): Motion, Illustrated and 3D build rules with starter code.
- [references/sound.md](references/sound.md): word-anchored sound cues, music bed and mix levels.
- [references/review-checklist.md](references/review-checklist.md): the source skill's checks as a review list.
- [references/subclip-mapping.md](references/subclip-mapping.md): what each upstream script became in Subclip.

Adapted for Subclip from [petergyang/video-explainer](https://github.com/petergyang/video-explainer) by Peter Yang, MIT
