---
name: 3d-myth-short
description: Build a narrated 30 second 3D animated short from one idea in Subclip. Use when the creator wants a 3D animated explainer short, a "the story everyone believes" myth-busting video, a stylized 3D mini movie with a voiceover, or consistent 3D characters across generated shots. Writes the script and shot plan, locks style, character and place reference sheets, generates three 10 second blocks, voices the narration and finishes zoom-ins, shakes and audio on the editable timeline.
---

# 3D myth short (Subclip edition)

A 30 second short with a fixed shape: the myth, the twist, the mechanism, the kicker. Everything is generated with Subclip tools and cut on the native timeline. There is no outside key, no ffmpeg and no script.

```
IDEA -> 1 Brief -> 2 Reference sheets -> 3 Three video blocks -> 4 Voice -> 5 Cut on the timeline
```

## Before you start

1. Read project state: `get_project_outline`, then `list_editor_assets`. Use one explicit project ID on every project call. If the creator gave footage or stills, call `get_media_context` first and look at the contact sheets before describing them.
2. Offer the creator's own tools first. If the Codex CLI is signed in and working, offer it for the still images (preferred image route, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with `kind: "image"`. Read `read_subclip_skill` for `subclip-ai-generation`, `references/creator-cli-generators.md` for the check and the commands. Import files made outside with `import_external_media`.
3. Call `list_ai_models` for the kinds you need and `get_ai_credit_status`. Prefer the model families named below when the live catalog offers them; otherwise use the closest match and say which and why. Copied model names are examples, the catalog wins.
4. Quote before spending: model, number of outputs, duration, settings and the total from `estimate_ai_generation` with the exact inputs, plus a retry allowance. Get approval for that scope. A larger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact generation.
5. Create or reuse one project with `create_project`. Make one editing call at a time. Independent generations may run together inside the approved budget.

Model families to look for: an image model that accepts reference images (Seedream class, for example `seedream-5-lite`) and a video model that accepts reference images and makes scene sound (Gemini Omni class, for example `gemini-omni-1.1`). Check both in `list_ai_models`. Expect about 12 generations for the whole short, so quote it up front.

## Stage 1: Brief (no tool call, the creator approves)

Research the idea with what you already know and say what you are unsure of. Then write:

- **Myth**: the common belief, stated in one punchy line. Open on it.
- **Twist**: the fact that breaks it.
- **Mechanism**: the real cause, shown as something you can see happening.
- **Kicker**: one closing line that changes how the viewer sees the topic.
- A **style key**: one sentence for the look (for example soft stylized 3D, warm key light, shallow depth of field).
- A **shot table** for three blocks of 10 seconds: time range, what is on screen, camera move, what the narrator says. Each shot is 2 to 4 seconds.

Keep the narration at about 70 to 80 words in total, about 2.5 words a second. Facts must be true. Mark anything the creator should verify.

Save the approved brief with `update_project_director_brief`.

## Stage 2: Reference sheets

Make one image for the style key and one image per recurring character, place and key object. Sheets are what keep the three blocks consistent, so each one needs a plain background, one subject, a clear silhouette and no text.

1. Generate the style key first. Review it. If it is wrong, fix the prompt before anything else.
2. Generate the rest with the style key attached as a reference (`sourceAssets` with `role: "reference"`, sourced from an item or file already in the project).
3. Bring Codex images in with `import_external_media` and `addToTimeline: false`. Cloud results come through `get_ai_operation` and `import_ai_operation_to_timeline`; remove drafts from the timeline when you only need them as media.
4. Name each sheet by what it is (`hero`, `lab-room`) and keep the list in the director brief.

Generate two or four versions of anything that matters and keep the cleanest. Single generations tell you little because identical prompts vary a lot.

## Stage 3: Video blocks

Write one prompt per 10 second block and attach only the sheets that block needs.

Prompt layout: the style key line, then a timestamped list such as `0-3s: ...`, `3-6s: ...`, `6-10s: ...`, each with subject, action, camera and lighting; then a line for ambient sound and effects. Ask for no spoken voice, because the narrator is added separately and stays the same across blocks. See `references/block-prompts.md`.

`generate_ai_media` with `kind: "video"`, the chosen video model, `aspectRatio` 16:9 unless the creator wants vertical, `durationSeconds` 10, `generateAudio: true` for scene sound, and every needed sheet in `sourceAssets`. Poll `get_ai_operation` sparingly (every 15 to 30 seconds, or wait for the completion event in the app). Do not submit duplicates for a slow job. Import each finished block with `import_ai_operation_to_timeline` at 0, 10 and 20 seconds.

If a block breaks a rule (a character changes, a prop vanishes), tell the creator what actually came out, then rewrite only the part of the prompt that caused it.

## Stage 4: Voice

Voice is the final clock for pacing, so write the narration to fit the three blocks.

- Cloud voice: `get_voice_samples`, let the creator choose (or delegate), `set_approved_voice`, then `generate_speech` and `import_speech_to_timeline` at 0.2 seconds.
- Free test voice: `generate_local_speech`, then `import_generated_audio_to_timeline`.

Keep the narrator in its own audio item.

## Stage 5: Cut on the timeline

Read `references/subclip-assembly.md`. In short:

- Place the three blocks back to back and trim with `trim_media_item` or `update_media_item` so the cuts land on a narration beat.
- Zoom-ins on reveals: `add_media_keyframe` with `scale` from 1 to 1.12 over the reveal beat. Impact shakes: three or four quick keyframes of small `x` and `y` offsets (about 1 to 2 percent), then back to rest.
- Mix: `update_audio_item` on the narrator (volume near 1) and on each block's own audio (volume about 0.35 to 0.5) so the voice stays clear.
- Optional captions with `transcribe_project`, local mode, then `update_caption_style`.
- `set_project_duration` to the end of the last block plus a short tail. Check with `get_timeline_contact_sheet` and `view_current_frame` at every cut and every effect. Export only when asked, using `get_export_configuration`, `list_render_queue`, then `export_video`.
- Record decisions with `update_project_director_brief` and `write_session_summary`.

## Verification

- Every character looks the same in all three blocks.
- The narration matches what is on screen at each beat.
- No text or number baked into a frame disagrees with the script. Add exact words as native text, never rely on generated text.
- Sound: tell the creator which parts need a listen, you cannot hear the mix.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
