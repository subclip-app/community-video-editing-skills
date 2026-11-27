---
name: pr-to-video
description: Turn a public GitHub pull request into a short video (about 30 to 45 s, up to a few minutes for a large PR) that explains what changed and why it matters, for users, reviewers or social. Reads the real PR, picks an angle (changelog, feature reveal, fix explainer or refactor walkthrough), shows at most a few legible code hunks, and checks every claim against the diff before building editable HyperFrames scenes on white with a voice, captions and music. Use when the creator pastes a pull request link and asks for a PR video, a fix explainer, a feature reveal or "explain this PR".
---

# PR to video

> Written for Subclip (2026-11-27) from the HyperFrames guide "Turn a GitHub PR into a video" (`docs/guides/pr-to-video.mdx`) by HeyGen, Apache-2.0 (commit b4f47ce). The HyperFrames repository has no skill file for this workflow, only the guide, which is kept unchanged in `upstream/`. Kept: impact before diff, the angles and audiences, the knobs (hunks, code block, end card, narration, length), the common mistakes and "verify the proof". Added: the Subclip tool workflow, the evidence ledger, the scene kit and the gates.

Input: a public pull request URL and, ideally, who will watch.
Output: a Subclip project with one editable HyperFrames layer per scene, one voice clip per scene (or kinetic captions only), native captions and a music bed. Export when the creator asks.

## The rules from the guide

- **The video explains the change; it does not read the diff or the description aloud.**
- **Lead with what the viewer gets** (or, for a fix, the symptom they saw). The diff is the payoff, not the hook.
- **2 to 4 real hunks at most**, each a small legible snippet. A whole file is unreadable at video scale.
- **Never confuse proposed, merged and released.** A PR does not carry its shipping version: find it from the release tags or the package manifest on main.
- **Tests and refactoring are not product features.**

## Workflow in Subclip

Pass the same `projectId` on every project call, make one editor change at a time and re-read with `read_project_section` after each change (items can vanish from a stale editor window; re-import if one is missing).

### 1. Read the PR

- `fetch_public_github_pull_request` with the URL. It returns verified metadata (state, merged, mergedAt, base and head), changed files with line counts, commit messages with author names, and the exact public diff. For a private repository use the creator's connected GitHub tools instead.
- Check whether it has shipped: compare `mergedAt` with the repository's latest release (release page or the package manifest on main, read with `inspect_public_website` or the creator's GitHub tools). If it merged after the latest release, the end card says "ships in the next release", never "released".
- Write an **evidence ledger** into `update_project_director_brief`: every fact you may show or say, each with where it comes from (diff line, PR body section, commit message, release tag). Contributor names come from the commit authors. Do not show email addresses.

### 2. Pick the angle and audience

| Angle | Story shape | Code |
| --- | --- | --- |
| Feature reveal | What users get, visible proof, one key hunk, end card | `code-diff` for one beat |
| Fix explainer | Symptom, root cause, the fix on the diff, proof it works | `code-diff`, one or two hunks |
| Refactor walkthrough | Why the old shape hurt, the new shape, why it is better | a before and after morph of one file |
| Changelog | Release line, one beat per notable change, at most two hunks in the film | sparse |

Audience: developers (default) can take a hunk; mixed or non-technical viewers get more impact and less code. Name any breaking change and any action the viewer must take. Use the creator's words when they gave an angle, length or narration choice (see the knob table in `upstream/pr-to-video.mdx`).

### 3. Script

One short line per scene (at most about 14 words), in plain words, from the ledger only. Say identifiers the way people say them ("task kill", "W M I", "C L I") and keep the normal spelling in captions; the lexicon and rules in the `changelog-video` skill (`references/script-voice.md`) work here too. Never speak commit hashes or PR numbers; show them on the end card.

### 4. Verify the proof (before you build)

Go through the ledger and the script line by line:
- The PR and target branch are right; merged, released or proposed is stated correctly.
- Every user-facing claim matches the actual diff or the PR's own test notes; numbers are copied, not rounded into new claims.
- Code excerpts show only the relevant lines, copied exactly (you may drop unrelated lines and mark the gap with a context line).
- Tests and refactors are not presented as features.
- Contributor names and release details are accurate.
Fix the script, not the evidence. Record the result in the brief.

### 5. Voice and timing

- Free: `generate_local_speech`, one clip per scene, imported with `import_generated_audio_to_timeline` at the scene start plus about 0.4 s. Paid: `get_voice_samples`, `set_approved_voice`, then `generate_speech` after a quote. A "no narration, kinetic captions" request skips voice and paces scenes on a fixed reading time.
- `transcribe_project` with `mode: "local"` and the exact `audioItemId`, one job at a time, waiting with `get_transcription_status`. Read word times with `read_project_section` (`section: "captions"`) and put them into each scene's beats.
- Fix caption spellings with `update_caption_words` ("task kill" becomes "taskkill").

### 6. Build the scenes

One HyperFrames layer per scene with `add_runtime_layer` (`kind: "hyperframes"`, full frame, validated first with `validate_runtime_layer_source`). Use `references/scene-kit.md`: white ground, a static kicker chip naming the repository and PR, progress dots, a section chip and headline per scene, content in the band y 270 to 850 so captions stay clear, entry and exit seams inside each layer, one accent moment per scene, every beat on a spoken word. `set_canvas_background` to white.

The **code-diff block**: a white card with the file path and its +/- counts, mono 24 to 26 px, added lines on a light cyan wash with a teal `+`, removed lines on a light red wash with a red `-`, a dim context line for any gap. Lines appear hunk by hunk on the words that explain them; removed lines dim after their replacement lands. One code-diff beat per film unless the creator asked for more.

### 7. Captions, music, gates, export

- Captions: keep the creator's default preset (`apply_dynamic_caption_preset` with no preset id, or what transcription applied), then `update_caption_style` with a dark text color, no shadow and `positionY` about 90 on a white ground.
- Music: a low CC0 or CC BY bed from `search_public_audio`, imported with `import_public_asset_to_timeline`, set with `update_audio_item` well under the voice with fades, peaks under -1 dB.
- Gates: `get_timeline_contact_sheet`, then `view_current_frame` on every beat and the first and last frame of each scene. Code must be readable at the video size, captions present in every spoken stretch, the end card true to the ledger. `validate_project`, then `write_session_summary`.
- Export with `export_video` only when the creator asks; then look at frames of the file.

## Common mistakes

| Avoid | Instead |
| --- | --- |
| Walking the whole diff file by file | Feature the 2 or 3 key hunks |
| Opening on the code | Open on what users get or saw break |
| Calling a merged PR "released" | Check the latest release; say "ships in the next release" |
| A fixed length for a narrated cut | Let the voice set the length; give a range |
| Claims not in the PR | Only facts from the ledger |
| Dark full-frame ground, white captions on white | White ground, brand ink, dark captions |

## Reference

[Fix explainer for heygen-com/hyperframes PR 8965 with sound](examples/pr-8965-reference.mp4) and its [one-frame-per-second sheet](examples/pr-8965-contact.jpg), made with this skill in Subclip for 0 credits. The PR ("a Windows browser close no longer freezes the CLI when taskkill hangs", merged 27 Nov 2026 after v0.9.102) was read with `fetch_public_github_pull_request`. Fix angle for developers: the symptom (15 silent minutes), the root cause as a chain (CLI, browser close, taskkill with no limit, a hung WMI, a frozen event loop), the fix on one code-diff beat from `hideChildConsoles.ts`, the proof from the PR's own Windows test notes (64,955 ms before, 5,027 ms after), and an end card that says merged and ships in the next release. Five HyperFrames layers on white, five local voice clips, native captions, a CC0 music bed. The [silent preview](preview.mp4) is the hero.

## Files

| File | What |
| --- | --- |
| `references/scene-kit.md` | The white scene kit, the code-diff block, the evidence ledger template and the reference timing |
| `upstream/pr-to-video.mdx` | The original HyperFrames guide, unchanged |
| `LICENSE` | Apache-2.0 from the HyperFrames repository, unchanged |

Related: `changelog-video` (release notes into UI mocks; same scene kit), `hyperframes-motion-layers` (layer contract).

Adapted for Subclip from https://github.com/heygen-com/hyperframes (guide `docs/guides/pr-to-video.mdx`) by HeyGen, Apache-2.0
