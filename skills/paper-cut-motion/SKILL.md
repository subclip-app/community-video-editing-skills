---
name: paper-cut-motion
description: Turn an image into a paper-cut collage motion video in Subclip. Use when the creator drops in an image and wants it as a torn paper collage, a craft or stop motion look, a scene that assembles itself piece by piece, a nine panel storyboard sheet, or a premium handmade motion graphic from a still. Makes the collage still, the storyboard sheet and the final animation with Subclip or the creator's Codex CLI, and places it on the editable timeline.
---

# Paper-cut motion (Subclip edition)

Three prompts, one finished video. The still defines the look, the storyboard defines the order in which pieces appear, and the video model follows that order.

```
IMAGE -> 1 Paper-cut still -> 2 Nine panel storyboard sheet -> 3 Animation -> 4 Timeline
```

## Before you start

1. Read project state: `get_project_outline`, then `list_editor_assets`. Use one explicit project ID on every project call. If the creator gave footage or stills, call `get_media_context` first and look at the contact sheets before describing them.
2. Offer the creator's own tools first. If the Codex CLI is signed in and working, offer it for the still images (preferred image route, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with `kind: "image"`. Read `read_subclip_skill` for `subclip-ai-generation`, `references/creator-cli-generators.md` for the check and the commands. Import files made outside with `import_external_media`.
3. Call `list_ai_models` for the kinds you need and `get_ai_credit_status`. Prefer the model families named below when the live catalog offers them; otherwise use the closest match and say which and why. Copied model names are examples, the catalog wins.
4. Quote before spending: model, number of outputs, duration, settings and the total from `estimate_ai_generation` with the exact inputs, plus a retry allowance. Get approval for that scope. A larger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact generation.
5. Create or reuse one project with `create_project`. Make one editing call at a time. Independent generations may run together inside the approved budget.

Model families: a strong image model for the still and the sheet (GPT Image class: the creator's Codex CLI first, or the best GPT image entry in `list_ai_models`) and a video model that follows reference images and can make sound (Seedance class, for example `seedance-2.5`). Recommended settings: 10 seconds, 720p, audio on. Use `estimate_ai_generation` with those exact values.

## Step 0: Look at the source

If the image is in the project, call `get_media_context` with `includeContactSheet: true` and read it. If it is a loose file, import it with `import_external_media` (`addToTimeline: false`). Check it is clean and finished. A busy or low quality source makes messy paper. Tell the creator if you advise a better source.

## Step 1: Paper-cut still

Write an image prompt that recreates the scene as layered torn paper: ragged white edges on every piece, visible paper fibers, slight shadows between layers, flat colors with subtle grain, a plain background. Keep the composition, the subject and the palette of the source. See `references/prompts.md`.

Generate with the source as the reference (`sourceAssets`, `role: "reference"`). Generate two or four versions and let the creator pick. Everything after depends on this still.

## Step 2: Storyboard sheet

Write a prompt for one image with nine panels, in reading order, showing the same scene assembling from empty background to complete scene, a few pieces added per panel, the same camera in every panel. Attach the chosen still as the reference. Review the sheet: panels must agree with each other and with the still.

## Step 3: Animation

Write the video prompt: the scene builds itself from torn paper following the panel order, pieces slide, flip and settle into place with small paper-like overshoots, no hands, then one simple end action only if the creator wants it (the car drives off, the card lifts away), otherwise end on the finished scene. Attach the storyboard sheet and the still. Generate with `generate_ai_media` `kind: "video"`, 16:9 (or the source ratio), 10 seconds, 720p, `generateAudio: true`. Import with `import_ai_operation_to_timeline`.

Renders differ each time. Offer 2 variants if budget allows; a set of variants in the same style makes a nice series.

## Step 4: Timeline

- Trim head and tail with `trim_media_item` so the first frame is not empty for too long.
- Title or words: add them as native text with `add_text_overlay`, never ask the model for lettering. Place them after `get_timeline_contact_sheet` shows the clear paper areas. Use a paper-like look (cream chip, slight rotation of -2 to 2 degrees) with `update_text_item`.
- Sound: keep the model's paper sound at a low volume or replace with a soft bed from `generate_music` (instrumental, volume about 0.2 with fades) imported through `import_ai_operation_to_timeline`.
- Check frames at the start, mid assembly and the end with `view_current_frame`.
- Export only when asked.

## Tips

- One clear motion at the end works best. Skip it for pure assembly.
- A polished source gives clean pieces.
- Keep the same still and sheet to make a family of videos with different end actions.

## Verification

- The finished frame matches the still's composition.
- Pieces appear in the sheet's order and nothing pops in without a paper move.
- Any text is native and correct.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
