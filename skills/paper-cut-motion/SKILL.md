---
name: paper-cut-motion
description: Turn an image into a paper-cut collage motion video in Subclip. Use when the creator drops in an image and wants it as a torn paper collage, a craft or stop motion look, a scene that assembles itself piece by piece, a nine panel storyboard sheet, or a premium handmade motion graphic from a still. Makes the collage still, the storyboard sheet and the final animation with Subclip or the creator's Codex CLI, and places it on the editable timeline.
---

# Paper-cut motion (Subclip edition)

Three prompts, one finished video (the original calls them the paper-cut prompt, the 9-panel sheet prompt and the animation prompt). The still defines the look, the storyboard defines the order in which pieces appear, and the video model follows that order.

```
IMAGE -> 1 Paper-cut still -> 2 Motion choice -> 3 Nine panel storyboard sheet -> 4 Animation -> 5 Timeline
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

Read `references/prompts.md`. Describe what is really in the source (subject, pose, colors, layout, any text or numbers) in a sentence or two, then add the fixed style block from the reference: layered cut and torn pieces, each a separate flat cutout with rough torn edges, paper grain, a hard drop shadow, small white slivers of negative space between pieces, muted slightly desaturated color, soft directional light, no gradients, no gloss. Keep subject, composition and colors; change only the material to paper. Never name real public figures, famous artworks or brands: describe them generically.

Generate with the source as the reference (`sourceAssets`, `role: "reference"`). Generate two or four versions and let the creator pick. Everything after depends on this still.

## Step 2: Ask about motion

Every paper-cut motion starts with the scene assembling itself out of torn paper, then settling. After assembly the creator may add one simple action (the car drives off, the figure lifts away on a balloon, a ball is kicked and confetti scatters). Ask once: motion at the end, or pure assembly? Store the answer; pure assembly is the safe default.

## Step 3: Storyboard sheet

Write one prompt for one image with a 3 by 3 grid of nine sequential panels, thin borders, absolutely no text, labels, captions or numbers. Order far to near: panel 1 a nearly empty frame with the first background pieces sliding in, then ground, set pieces, crowd, props, then the hero assembling part by part, the second-to-last panel showing the action beat if one was requested, and the last panel the complete scene matching the still. Keep the same paper look in every panel and end by restating that there is no text. Attach the chosen still. Generate in the aspect ratio of the final video (16:9, 9:16 or 1:1). Review: the panels must agree with each other and with the still.

## Step 4: Animation

Write the animation prompt in the fixed order from `references/prompts.md`: constant opening, assembly body (back to front: backdrop, ground, set pieces, crowd, props, hero last and part by part, each with an entry direction and a hard paper shadow), the optional "as the final beat" action using only paper-legal verbs (slide, drop, rotate, tumble, lift, plant, scatter, tip, swing, snap forward, drive off; no morphing, folding or bending), then the constant style, negative and sound closings. Pieces are rigid flat cutouts that reposition; nothing folds or morphs.

Attach the storyboard sheet as the start or reference frame (seeding from the sheet gives the smoothest, most coherent build), plus the still. Generate with `generate_ai_media` `kind: "video"`, the ratio of the sheet, 10 seconds, 720p, `generateAudio: true`. Import with `import_ai_operation_to_timeline`.

Renders differ each time. Offer 2 variants if budget allows; a set of variants in the same style makes a nice series.

## Step 5: Timeline

- Trim head and tail with `trim_media_item` so the first frame is not empty for too long.
- Title or words: add them as native text with `add_text_overlay`, never ask the model for lettering. Place them after `get_timeline_contact_sheet` shows the clear paper areas. Use a paper-like look (cream chip, slight rotation of -2 to 2 degrees) with `update_text_item`.
- Sound: the model's paper-only foley (slides, taps, shuffles, drops) is the intended sound; keep it, or lower it under a soft bed from `generate_music` (instrumental, volume about 0.2 with fades) imported through `import_ai_operation_to_timeline`.
- Check frames at the start, mid assembly and the end with `view_current_frame`.
- Export only when asked.

## Tips

- Start with a clean, finished, poster-like image; the more polished the source, the cleaner the result.
- Keep actions simple: one clear motion at the end ("drives off", "lifts away", a kick then a scatter), or skip it for pure assembly. Multi-step actions get messy.
- Recommended settings: 10 seconds, 720p, audio on.
- Run it again for variations. Each render comes out a little different, so make a whole set in the same style; keep the same still and sheet and change only the end action to build a family.

## Verification

- The finished frame matches the still's composition.
- Pieces appear in the sheet's order, back to front, hero last, and nothing pops in without a paper move; nothing folds, bends or morphs.
- Any text is native and correct.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
