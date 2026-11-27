---
name: changelog-video
description: Turn a changelog, release notes or a weekly digest into a short branded release video (about 40 to 60 s) where every theme is acted out by an animated mock of the real UI, with narration, captions and quiet music. Builds editable HyperFrames scene layers on a white ground in Subclip. Use when the creator pastes or links a changelog, release notes or a version entry and asks for a changelog video, release recap, "what's new" video or weekly update video.
---

# Changelog video

> Modified for Subclip (2026-11-27) from the HyperFrames `changelog-video` skill by HeyGen, Apache-2.0 (upstream commit b4f47ce). Kept: the prime directive, the editorial budget, the visualization registry, the two-layer script with its lexicon, the scene anatomy, one rationed accent per scene, the seam and beat rules and the gates. Changed: every step runs on Subclip tools (no repo CLI, no seam-stamp script, no HeyGen voice, no outside render), 16:9 by default, white ground with the creator's brand. The original SKILL.md and its files are in `upstream/` for reference.

Input: a changelog in any form (pasted text, a Markdown file, a public release page, a GitHub release or a version entry from the creator's own site).
Output: a Subclip project with one editable HyperFrames layer per scene, one narration clip per scene, native captions and a music bed. Export only when the creator asks.

## The prime directive: visualize, don't list

Every theme is shown by an **animated mock of the actual UI, or an honest analog**, acting out the change. Never text bullets. Route every theme through `references/visualization-registry.md` BEFORE you write the script. The registry decides ui-recreate, ui-analog, terminal or checklist. A checklist is the last resort, kept for truly non-visual items (fix lists).

Never invent UI that implies a screen that does not exist. An analog shows the behavior (speed, batching, caching, parallel work), not a fake product page.

## Pipeline in Subclip

Start with `get_project_outline` (or `create_project` with `canvasPreset: "landscape"`), pass the same `projectId` on every call, make one editor change at a time and re-read with `read_project_section` after each change.

### 0. Read the source and the brand

- Read the changelog fully. For a public page use `inspect_public_website` (or `fetch_linked_media` for a linked file); for a PR or release on GitHub use `fetch_public_github_pull_request` for each merged PR you cite. Check that what you show has shipped: proposed is never shown as released.
- Brand: take the creator's colors, type and product name from `inspect_public_website` or the workspace brand assets. The upstream HeyGen look (dark pattern, green accent, TT Norms) is a house brand that does not ship here; `references/subclip-build.md` maps each of its tokens to a white-ground equivalent. Keep the ground white and use the brand's main color for ink and its accent for the one rationed moment per scene.
- Write the plan into `update_project_director_brief` as you go.

### 1. Parse and cut

- Extract: version or date range, headline stats, themes, items.
- **Budget: 40 to 60 s.** Title at most 2.8 s, outro at most 3.6 s, 3 or 4 themes of about 9 to 10 s each, plus an optional 5 to 6 s fix checklist.
- Per theme keep ONE hero mock and at most 3 spoken items. Everything else lives behind the outro's "full changelog" pointer. Cutting is the job: 30 items still give at most about 14 spoken beats.
- Order by story: marquee feature, product surface, performance, reliability.

### 2. Route each theme

For each theme write one line in the brief: `theme -> surface -> the 2 to 4 actions the mock performs, each tied to a script phrase`. Use the surfaces and analogs in `references/visualization-registry.md`; add a row to your notes when you mock a new surface so the next video reuses it.

### 3. Two-layer script

Write token lines as in `references/script-voice.md`: conversational, one breath per beat (at most about 14 words), versions and PR numbers are shown, not spoken. Every technical term gets a `spoken` form from `references/lexicon.json` while `display` keeps the normal spelling. A term not in the lexicon: ask the creator how it is said, never guess. Keep the token lines in the director brief.

### 4. Voice (the audio is the clock)

- Upstream pins a HeyGen voice; Subclip does not call HeyGen. For drafts and tests use `generate_local_speech` (free, offline). For the final, `get_voice_samples`, `set_approved_voice`, then quote and run `generate_speech`. Name the voice and model you used.
- Generate **one clip per scene** from the spoken layer, so each scene's beats can be timed on its own clip. Import each with `import_generated_audio_to_timeline` (or `import_speech_to_timeline`) at its scene start plus about 0.4 s.
- Word times: `transcribe_project` with `mode: "local"` and the exact `audioItemId`, one job at a time. This replaces the upstream `align-captions.mjs` and whisper fallback. Read the word times with `read_project_section` (captions) and write each scene's beat times in the brief.
- Captions show the display layer: fix each misheard or phonetic word with `update_caption_words` ("seven twenty p" becomes "720p", "subclip dot app" becomes "subclip.app/changelog").

### 5. Build the scenes

Follow `references/subclip-build.md`: one HyperFrames layer per scene with `add_runtime_layer` (`kind: "hyperframes"`, x 50, y 50, width 100, height 100, full-frame scene), validated first with `validate_runtime_layer_source`. Each layer carries the same chrome (kicker chip top left, progress dots top right), a section chip and a headline, and the mock in the band y 270 to 910 so the bottom caption zone stays clear. Root is 1920 x 1080 with `overflow: clip` and every element inside the frame.

- Seams: the scene content sits in a `.swrap` wrapper; it enters from the right in 0.42 s (`power3.out`) and leaves to the left in the last 0.34 s (`power2.in`). Chrome does not move, so cuts read as one surface. Never animate the root.
- Every internal beat lands on a word time from step 4, starts at least 0.4 s after the cut and ends at least 0.45 s before the next.
- One accent moment per scene. GSAP `tl.to` only, deterministic, no `repeat: -1`, counters as an object tween with `onUpdate`.
- `set_canvas_background` to white for the whole film.

### 6. Captions and music

- Captions: `apply_dynamic_caption_preset` with no preset id (the creator's default), then `update_caption_style` with a dark text color (for example the brand ink) and no shadow, because white text vanishes on a white ground. One quiet line at the bottom, like the upstream caption rail.
- Music: one low instrumental bed from `search_public_audio` (CC0 or CC BY, keep the credit) imported with `import_public_asset_to_timeline`, or `generate_music` after a quote. Set it with `update_audio_item` to sit well under the voice (the upstream bed is at 0.14), fade in and out, peaks under -1 dB.

### 7. Gates (all green before you present)

1. `get_timeline_contact_sheet` across the film, then `view_current_frame` at 3 or 4 beats per scene (after the entry, on each beat, before the exit). Describe what you saw.
2. Captions present on frames inside every spoken stretch (the upstream "caption presence gate"). Missing captions is a failed build.
3. Scene content stays above the caption zone; small dim text keeps strong contrast on white (use #5b6478 or darker).
4. Mock text and numbers are true to the changelog; nothing unreleased is shown as shipped.
5. `validate_project`, then record checks and open issues with `write_session_summary`. Export with `export_video` only on request, then look at frames of the file.

## Anti-patterns

| Don't | Instead |
| --- | --- |
| Bullet slides for UI changes | Mock the surface acting out the change |
| Fake UI for things you cannot show honestly | An honest checklist scene |
| "JSON" or "CLI" as plain text in the voice | Lexicon spoken forms; captions keep the display spelling |
| Phonetic spellings in captions | Fix them with `update_caption_words` |
| Guessing a term's pronunciation | Ask, then grow the lexicon |
| Speaking every changelog item | At most 3 per theme; the changelog link carries the rest |
| Accent color everywhere | One accent moment per scene |
| One giant layer for the whole film | One layer per scene, each validated and checked |
| Dark full-frame ground or white captions on white | White ground, brand ink, dark captions |
| Shipping with captions missing in a spoken stretch | Re-run step 4 and check frames again |

## Reference

[Release recap of the Subclip AI Editor 1.0.50 changelog with sound](examples/changelog-1050-reference.mp4) and its [one-frame-per-second sheet](examples/changelog-1050-contact.jpg), made with this skill in Subclip for 0 credits from the real 1.0.50 entry of subclip.app/changelog. Title, four themes routed through the registry (a new Home as a ui-recreate of the Home window: sidebar, scrolling page, docking assistant box, previews that play; Skills in one click as a ui-recreate of the Skills window with an oversized cursor, a press and Installed; Exports as a render-queue analog with three renders running at once; Fixes as the checklist), and an outro with the changelog URL. Six HyperFrames layers on white, six local voice clips, native captions, a CC0 music bed. The [silent preview](preview.mp4) is the hero.

## Files

| File | What |
| --- | --- |
| `references/subclip-build.md` | Brand token mapping, the scene scaffold, the reference timing and the tool map |
| `references/visualization-registry.md` | Surfaces and analogs for "show, don't tell" (upstream) |
| `references/script-voice.md` | The two-layer script contract and phonetics rules (upstream) |
| `references/build-spec.md` | The upstream square build spec: brand, scene anatomy, seams (read for the craft; Subclip mapping in `subclip-build.md`) |
| `references/lexicon.json` | Display to spoken vocabulary (upstream, unchanged) |
| `upstream/` | The original SKILL.md, the master skeleton, the token example and the caption aligner, kept for reference; not run in Subclip |
| `LICENSE` | Apache-2.0 from the HyperFrames repository, unchanged |

Not included: the HyperFrames house fonts (ABC Solar Display, TT Norms Pro and TT Norms Mono are commercial fonts), the house music track and the animated HeyGen background pattern. They are brand assets that the repository's license does not let us pass on.

Adapted for Subclip from https://github.com/heygen-com/hyperframes (skill `.claude/skills/changelog-video`) by HeyGen, Apache-2.0
