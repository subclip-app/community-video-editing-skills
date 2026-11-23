---
name: documentary-case-file
description: Plan and build a short cinematic 3D documentary in Subclip from one sentence. Use when the creator wants a Netflix-style documentary, an incident reconstruction, a large-scale investigation video, a true-story explainer with a narrator, or a "case file" with chapters, asset prompts and scene prompts. Produces the case file, locked stills, scene clips with sound design, one narrator take and a finished edit with timestamp overlays.
---

# Documentary case file (Subclip edition)

A documentary feels real because it has a timeline, scenes and one narrator. This skill plans all three first, then generates, then assembles in the editor.

```
SENTENCE -> 1 Case file -> 2 Locked stills -> 3 Scene clips -> 4 Narrator -> 5 Edit
```

## Before you start

1. Read project state: `get_project_outline`, then `list_editor_assets`. Use one explicit project ID on every project call. If the creator gave footage or stills, call `get_media_context` first and look at the contact sheets before describing them.
2. Offer the creator's own tools first. If the Codex CLI is signed in and working, offer it for the still images (preferred image route, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with `kind: "image"`. Read `read_subclip_skill` for `subclip-ai-generation`, `references/creator-cli-generators.md` for the check and the commands. Import files made outside with `import_external_media`.
3. Call `list_ai_models` for the kinds you need and `get_ai_credit_status`. Prefer the model families named below when the live catalog offers them; otherwise use the closest match and say which and why. Copied model names are examples, the catalog wins.
4. Quote before spending: model, number of outputs, duration, settings and the total from `estimate_ai_generation` with the exact inputs, plus a retry allowance. Get approval for that scope. A larger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact generation.
5. Create or reuse one project with `create_project`. Make one editing call at a time. Independent generations may run together inside the approved budget.

Model families: an image model for the stills (Seedream class or the creator's Codex CLI) and a video model that takes reference images and makes ambient sound (Gemini Omni class or Seedance class, check `list_ai_models`). Quote the whole film before Stage 2. Default length is 3 scenes and about 1 minute 30; a longer runtime adds scenes and cost.

## Truth rules

The film presents a real or realistic event. Do not invent facts about real people or real tragedies. For a real event, check names, dates and numbers, mark anything uncertain for the creator, and say clearly when a scene is a dramatized reconstruction. For a fictional story, label it fictional in the case file.

## Stage 1: Case file

Choose the format that fits:

| Format | Best for | Look |
|---|---|---|
| Incident reconstruction | Human-scale events: an accident, a disappearance, a heist | Low-poly or stylized 3D, cinematic lighting, tight cameras |
| Large-scale investigation | Geographic stories: a vanished flight, a search operation | Night satellite maps, route lines, radar sweeps, wide cameras |

Write one message, in the director brief (`update_project_director_brief`):

1. Title and logline.
2. Timeline split into chapters.
3. Scene table with clock times (start, end, what the viewer learns).
4. Asset list with IDs (`CHAR-01`, `LOC-01`, `PROP-01`).
5. Narrator voice card: age, tone, pace, accent, what to avoid.

Get approval.

## Stage 2: Lock the stills

One image per asset ID, plain staging, no text. Generate and review the anchor look first, then attach it as a reference to the rest. Codex first when the creator has it, otherwise `generate_ai_media` `kind: "image"`. Keep the best version of each and record its project file in the brief. See `references/scene-pack.md`.

## Stage 3: Scene clips

For each scene write a scene pack: the narration for that scene, one video prompt of up to 30 seconds with a timestamped shot list and sound design (room tone, footsteps, score cue) but no voice, and the stills to attach. Generate with `generate_ai_media` `kind: "video"`, 16:9, `generateAudio: true`, stills in `sourceAssets` with `role: "reference"`. Import each with `import_ai_operation_to_timeline`. Check start, middle and end frames with `view_current_frame`. Rewrite only the part that failed.

## Stage 4: Narrator

One take keeps the voice identical across the film. `get_voice_samples`, approval with `set_approved_voice`, then `generate_speech` with the full script and the voice card as style instruction. Test runs can use `generate_local_speech`. Import with `import_speech_to_timeline` or `import_generated_audio_to_timeline`.

Cloud text length is limited, so if the script is longer than one request allows, split it at a chapter break and keep the same voice and style text in both.

## Stage 5: Edit

Read `references/subclip-assembly.md`. Narration on top, clip sound underneath, a clock overlay in a corner, and a short chapter title for each chapter with `add_text_overlay`. Check with `get_timeline_contact_sheet`, then `view_current_frame`. Export only when asked.

## Verification

- Every fact in the narration is supported, or flagged to the creator.
- Narration matches the scene on screen at its moment.
- Overlay clock times match the case file.
- Say honestly which audio parts need a listen.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
