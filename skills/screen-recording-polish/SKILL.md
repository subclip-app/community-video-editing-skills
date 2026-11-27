---
name: screen-recording-polish
description: Polish a screen recording or product demo with two house rules from HyperFrames launch films. An oversized cursor enters from off-screen, lands with its tip, and each click causes the next beat. Captions are an overlay on top of the film, never a reserved band, and every phrase is either dropped, shown on the rail or, rarely, embedded as one big word behind the subject. Use for screen recordings, website or app demos, SaaS walkthroughs, and any UI scene that feels static or needs captions.
---

# Screen recording polish

> Modified for Subclip (2026-11-27) from two HyperFrames skills by HeyGen, Apache-2.0 (upstream commit b4f47ce): `oversized-cursor` and `captions-overlay`. Kept: the cursor size, entry, tip-targeting, click-ignition, drift and exit laws, the drop, rail and embed caption model, and the overlay law. Changed: the two skills are merged, and each rule is mapped to Subclip tools for real recordings and for code-built scenes. The originals are in `upstream/`.

Two cheap moves make a screen demo read as directed: one big cursor that carries the eye and causes things, and captions that ride on top of the full frame instead of shrinking it.

## Pick the route

- **A real Subclip Recorder recording** (the creator recorded their screen): edit it with the Recorder tools. Read `subclip-recorder` first.
- **A website, app capture or designed UI with no recording**: capture with `inspect_public_website` (or use the creator's screenshots) and build the scene as a HyperFrames layer with a code cursor.
- **Imported footage from elsewhere** with its own small cursor: either keep it and add captions only, or rebuild the key moment as a layer.

## Part 1: the oversized cursor

**Size.** Full-frame scenes: a cursor box of about 7% of the frame width (134 px at 1920). Inside a smaller mock: 4.6 to 5.5%. Never smaller; when unsure, bigger. In a real recording, raise the cursor size with `set_recording_cursor`.

**Look.** One arrow shape for the whole film. White body with a black edge on dark UI, black body (#1c1c1c) with a 1.4 px white edge on light UI. Soft drop shadow, always above every other element. A brand-motif cursor (a design tool's coloured multiplayer arrow with a name tag, a precision crosshair) is allowed when viewers will recognise it; it moves as one rigid unit with its tag. Otherwise use the plain arrow.

**Entry.** It always enters from off-screen (default: from below, starting at 115 to 120% of the frame height) and glides to its first target in one decelerating move, 0.4 to 0.9 s, `power3.out`. Straight up the y axis by default; a diagonal only when the target is off-axis, and then one straight vector. Never fade it in at rest and never mask-reveal it.

**Tip-targeting.** The hot spot is the arrow tip, not the box centre. Land the tip on the centre of the target and scale presses around the tip (`transformOrigin` at the tip, about 21 to 23% across and 13 to 14% down for a standard arrow in a 24 unit box).

**The click.** Compress to 0.84 in 0.1 s (`power2.in`), back to 1 in 0.22 s (`power2.out`). The target reacts in a parallel tween at the same moment (a button scales to 0.94 and darkens). A tap that only focuses a field gets no target reaction. Add a click sound on the same frame.

**The click causes the next beat.** Never let a morph, typing run, panel change or scene start by itself. Park the cursor on the trigger and let the click start it on the same frame: tool selected, typing starts, menu opens, toggle flips, toast lands.

**Drift.** During beats it does not own (typing, narration, a result settling) the cursor drifts aside in 0.5 to 0.9 s with `power2.out`. It never sits frozen on the action and never wobbles idly.

**Exit.** Two allowed exits, never a fade in place: accelerate off the nearest edge (`power2.in`, 0.5 to 0.7 s), or hand off across a cut: in the last 0.3 s before the cut it starts towards the next scene's first click point, and the next scene starts with the cursor at that pose and finishes the move with `power2.out`.

### In a real recording

- Agent-made takes: clicks made through `click_element`, `type_into` or `mouse_click` with `windowId` are stored like real clicks, so click zoom follows them. For scripted takes that never move the real pointer, give the path with `set_pointer_track` so Subclip glides a cursor between the points.
- Use `set_recording_cursor` for size, style and click effect, and `edit_recording_zoom` so the zoom lands where the click lands. One zoom per click that matters.
- Then `import_recording_to_project` to add captions, music and titles in the editor.

### In a code-built scene

Put the capture inside one camera group with the cursor, so a push-in moves both. Animate the cursor with GSAP `x` and `y` in one paused timeline; precompute every target in the layer's own pixels from the capture size. Draw the screen's response (a highlight on the tool, a drawn shape, a typed label, a toast) as overlays above the capture, timed to the click. Cover parts of the capture that the real app would hide after the action (for example a welcome screen that disappears when drawing starts).

## Part 2: captions as an overlay

**The model.** Every spoken phrase is one of three things:

| | What | How it shows |
| --- | --- | --- |
| drop | filler: um, uh, stutters, self-corrections | not shown |
| rail | ordinary speech, word for word (the default) | a clean caption line near the bottom, in front, readable |
| embed | the one peak word of a beat | one big word behind the subject, with its own entrance and exit |

The rail carries most of the text. Embed is rare: at most one per sentence or beat, never two on screen at once or back to back, a beat apart at least. A short clip usually has one embed; a long explainer about one per section. Embedding everything is the common mistake. A purely cinematic piece may drop the rail; an explainer or voiceover never does.

**The overlay law.** The caption line is a layer on top of the whole film. Do not reserve a bottom band or shift content up to make room: centre the composition on the true vertical centre (540 on landscape, 960 on portrait) and let content run to the edges. One soft rule: keep small critical text (a URL, a legal line) out of the bottom 80 px centre span where the line sits. Large imagery under the captions is fine; judge legibility by looking at frames, not by a keep-out zone.

### Captions in Subclip

1. Words first. Reuse existing captions. Otherwise `transcribe_project` with `purpose: "captions"` for one exact narration or media item at a time, local mode for tests; wait for `get_transcription_status` to finish before starting the next item. Never type words by hand.
2. Rail: keep the creator's default preset (`transcribe_project` applies it; `apply_dynamic_caption_preset` with the default id if needed). Change only what legibility needs with `update_caption_style`: on a white or light background set a dark text colour (for example #153592) and turn the shadow off.
3. Correct misheard words with `update_caption_words` (product names are the usual misses). Remove filler words from the rail; they are dropped, not shown.
4. Embed: choose the peak word of the beat and build it as one large word behind the subject. On footage of a person use `subclip-text-behind-subject`. On a composed scene put the word in the layer below the window or card, rising from behind it while the camera pulls back so its upper half shows. Time it to the spoken word.
5. Check with `get_timeline_contact_sheet` using caption pages: one caption group at a time, readable over the content, no collision with the embed or with key UI, nothing parked under the caption line.

## Build order

1. `get_project_outline`, `read_project_section`, `list_editor_assets`, `get_media_context` before anything else. One edit at a time, the same `projectId` on every call.
2. Voice first: `generate_local_speech` per sentence (free), `import_generated_audio_to_timeline` at the beat times, so the clicks can land on the words.
3. Cursor scene (route above), then captions, then music and click sounds (`search_public_audio`, prefer CC0; music peaks under -1 dB).
4. Review frames before, during and after each click and each embed. Saved state is not visual proof.
5. Export only on request (`export_video`, `get_export_status`). Record choices in `update_project_director_brief` and `write_session_summary`.

0 credits for code layers, local speech and local captions. Quote any paid voice or generation first and wait for a yes.

## Checklist

- [ ] Cursor at least 7% of frame width full-frame (4.6 to 5.5% inside a mock)
- [ ] Enters from off-screen in one straight move; no fade or mask reveal
- [ ] The tip lands on the target; presses scale around the tip
- [ ] Every click causes something on the same frame; a click sound on that frame
- [ ] Drifts aside during beats it does not own; no idle wobble
- [ ] Leaves the frame physically or hands off across the cut
- [ ] Rail carries the words; filler dropped; product names corrected
- [ ] At most one embed per beat, never two at once
- [ ] Composition centred on the true centre; no reserved caption band

## Reference

The [reference with sound](examples/screen-recording-polish-reference.mp4) and its [one-frame-per-second sheet](examples/screen-recording-polish-contact.jpg) were made by following this skill on a capture of the public excalidraw.com page: an oversized cursor rises to the rectangle tool, drags out a box, clicks to type a label and clicks Share; the camera pulls back and "LIVE" rises behind the window as the one embed while the rail captions run. The [silent preview](preview.mp4) is the hero. Edited by Claude Opus 5.5 (claude-opus-5-5) driving Subclip over MCP, voice: Subclip local TTS (Alba), captions: local Whisper, 0 credits.

## Files

| Path | What it is |
| --- | --- |
| `references/cursor-layer.md` | the cursor timeline from the reference, with the tip helper |
| `upstream/oversized-cursor/SKILL.original.md` | the original cursor skill, unchanged |
| `upstream/captions-overlay/SKILL.original.md` | the original caption doctrine, unchanged |
| `LICENSE` | Apache-2.0, unchanged from the original |

Adapted for Subclip from https://github.com/heygen-com/hyperframes by HeyGen, Apache-2.0
