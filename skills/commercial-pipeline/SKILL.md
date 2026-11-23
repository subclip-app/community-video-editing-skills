---
name: commercial-pipeline
description: Plan and make a 30 second cinematic AI commercial in Subclip. Use when the creator wants a product film, an AI commercial, a multi-cut ad with locked references, a hero product shot with before and after states, a character sheet and an empty location, or a failed commercial generation diagnosed and fixed. Writes an asset plan of 5 to 8 reference images, then one structured video prompt that assembles them, then rewrites only the sections that caused a failure.
---

# Commercial pipeline (Subclip edition)

Every reference is locked before the film is assembled. Three stages: assets, the video prompt, fixes.

## Before you start

1. Read project state: `get_project_outline`, then `list_editor_assets`. Use one explicit project ID on every project call. If the creator gave footage or stills, call `get_media_context` first and look at the contact sheets before describing them.
2. Offer the creator's own tools first. If the Codex CLI is signed in and working, offer it for the still images (preferred image route, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with `kind: "image"`. Read `read_subclip_skill` for `subclip-ai-generation`, `references/creator-cli-generators.md` for the check and the commands. Import files made outside with `import_external_media`.
3. Call `list_ai_models` for the kinds you need and `get_ai_credit_status`. Prefer the model families named below when the live catalog offers them; otherwise use the closest match and say which and why. Copied model names are examples, the catalog wins.
4. Quote before spending: model, number of outputs, duration, settings and the total from `estimate_ai_generation` with the exact inputs, plus a retry allowance. Get approval for that scope. A larger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact generation.
5. Create or reuse one project with `create_project`. Make one editing call at a time. Independent generations may run together inside the approved budget.

Model families: the creator's Codex CLI or an image model for the references, and a video model that takes many reference images and makes multi-cut clips with sound (Seedance class, for example `seedance-2.5`). Check `list_ai_models` for the maximum duration, number of references and resolution. If one generation cannot reach 30 seconds, plan two halves with the same references and join them on the timeline.

## Stage 1: Assets

1. The creator describes the film in a few plain sentences. Ask only for what you need: product, audience, tone, setting, any people or mascot, the offer, and the real logo and product photos.
2. You write the **asset plan**: 5 to 8 reference images. Typical set: hero product on white, product in its before state and after state, a character sheet for each person, the empty location, and the hero machine or key object. Give each an ID and a purpose.
3. Write one prompt per asset (see `references/asset-prompts.md`), quote the set, then generate. Four versions of the important ones, keep the cleanest.
4. **The logo is never generated.** Import the client's real file with `import_external_media` (`addToTimeline: false`) and add it later as a native overlay.
5. Record the kept assets and their roles in `update_project_director_brief`.

## Stage 2: The video prompt

Ask the creator (or check the outputs yourself) what actually generated, not what was asked for. If a detail did not make it, say so, and adapt the script around the real image.

Write one structured prompt, see `references/video-prompt.md`: a look line, the reference handles in the order you will attach them, then a timed multi-cut shot list for 30 seconds with camera, action, sound and no on-screen text. Generate with `generate_ai_media` `kind: "video"`, 16:9 or 9:16 as needed, the assets in `sourceAssets` with `role: "reference"` in that order, `generateAudio: true` if the creator wants model sound. Quote first. Import the finished clip with `import_ai_operation_to_timeline`.

## Stage 3: Fixes

The creator says what broke in plain words. You name the failure (identity drift, wrong product shape, extra limbs, hard cut, a missing reference), then rewrite only the sections that caused it. See the table in `references/video-prompt.md`. Regenerate, keep the clean one. Stop when it is clean; about ten generations per film is normal and only three or four of those are real prompt changes.

## Finish on the timeline

- Trim with `trim_media_item`, join halves, and add native text and the real logo with `add_text_overlay` and the imported logo item. Look first with `get_timeline_contact_sheet`.
- Sound: model sound plus an optional bed from `generate_music`, balanced with `update_audio_item` and `update_media_item` volume.
- Review every cut with `view_current_frame`. Export only on request: `get_export_configuration`, `list_render_queue`, `export_video`.
- Log decisions with `write_session_summary`.

## Verification

- The product looks like the hero reference in every cut.
- The logo is the client's real file, not a generated one.
- Text and prices are native layers.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
