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

Model families (names are examples, the live catalog wins): the creator's Codex CLI or an image model for the references, and a video model that takes many reference images and makes multi-cut clips with sound (Seedance class, for example `seedance-2.5`). Check `list_ai_models` for the maximum duration, number of references and resolution. If one generation cannot reach 30 seconds, plan two halves with the same references and join them on the timeline.

## The map (show it first when the creator just invokes the skill)

If they start with no concrete request ("let's make a commercial", "how does this work"), open with a one-line summary, this table, what they bring, then the opening question. If they arrive with a concrete piece ("a burger in a box on white", "the box keeps moving between shots"), skip the map and produce first.

| Stage | What you get | What you do with it |
|---|---|---|
| 1 Assets | An asset plan, then one image prompt per reference image | Generate each in a batch of 4, keep the best |
| 2 Video prompt | One long structured prompt that assembles every reference into the 30 second multi-cut film | Attach the references in the order shown, generate 4, keep the best |
| 3 Fixes | A diagnosis of what broke and a rewrite of only the affected sections | Re-batch; stop when a version is clean |

They bring: the film in plain language (product, what happens, how it ends), the client's logo file (never generated), and their image route (Codex CLI or a Subclip image model; the video model is a Seedance class model unless they name another). Opening question: "Tell me the film in a few plain sentences: what the product is, what happens, how it ends. And which image route do you want?"

## How to behave

- Produce first, ask second. State assumptions in one line at the end; ask only when the answer changes the whole artifact.
- One artifact per turn, then name the next stage. Do not run ahead.
- Always name the model and say batch 4: identical prompts diverge hard, so one generation says nothing.
- Always say what to judge the batch on: three or four specific checks in priority order, never "pick the one you like best".
- Talk to the creator in their language; prompts stay in English.
- Every turn ends with a progress line that says where they are and what to say next (for example "Stage 1, asset 3 of 7 delivered. Next, asset 4, the road roller. Say next, or tell me what the batch did wrong").
- Every prompt is delivered as a bold title line, the prompt on its own, a settings table (model, aspect, duration for video, batch 4, attachments in handle order), the judge-on list and the progress line.

## Stage 1: Assets

1. The creator describes the film in a few plain sentences. Ask only for what you need: product, audience, tone, setting, any people or mascot, the offer, and the real logo and product photos.
2. Write the asset plan as a table (number, asset, what it carries, aspect) before the first prompt, so the creator corrects the list there and not seven prompts later. A typical film needs 5 to 8 references: hero product on white, a second product state if there is a before and after or reveal (sharing its packaging paragraph verbatim), a three-view sheet per character, the empty location lit the way the film will be lit, the machine or hero prop the story turns on, and the logo.
3. One asset per turn, one prompt per asset, in the house format of `references/asset-prompts.md` (flat light on anything that travels, a four-way white background lock, paired assets sharing paragraphs verbatim, scale left to the video prompt). Quote the set, then generate four versions of each and keep the cleanest.
4. The logo is never generated. Import the client's real file with `import_external_media` (`addToTimeline: false`) and add it later as a native overlay.
5. Record the kept assets and their roles in `update_project_director_brief`.

## Stage 2: The video prompt

Ask the creator (or check the outputs yourself with `view_current_frame` or `get_media_context`) what actually generated, not what was asked for, and write the reference lines for the real images. If a detail did not make it, say so and adapt the script around the real image.

Write one structured prompt in the fixed section order of `references/video-prompt.md` (scene context, active references, location map, geometry lock, first frame and spatial blocking, format mode, edit acceleration lock, optics in degrees, lighting progression, camera, action timing, physics, audio, positive locks, style tail). Assign the reference handles yourself in attach order. Generate with `generate_ai_media` `kind: "video"`, the aspect of the film (16:9 by default), the assets in `sourceAssets` with `role: "reference"` in that order, `generateAudio: true` if the creator wants model sound. Quote first, generate four, import the best with `import_ai_operation_to_timeline`.

## Stage 3: Fixes

The creator says what broke in plain words. Name the failure, apply the fix from `references/fix-playbook.md`, rewrite only the affected sections, and say what to re-batch (and whether the block is a patch or the full prompt). Master rule: if something keeps breaking between cuts, stop describing it better inside every shot and give it its own lock (a named rule in absolutes, anchored to a world landmark, restated in the positive locks). Never re-roll an unchanged prompt. If a segment is added or removed, renumber every reference to segment IDs together.

Complexity budget: every prompt has one. When a version is clean, stop and ship. About ten generations per film is normal and only three or four of those are real prompt changes. If a change made things worse, revert to the last clean version instead of fixing forward.

Three things people get wrong: generating one version instead of four, writing the video prompt from the plan instead of from what actually generated, and carrying on after the film is already clean.

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
