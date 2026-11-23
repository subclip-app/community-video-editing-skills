---
name: ugc-ad-director
description: Direct a 9:16 UGC style ad one approved stage at a time in Subclip. Use when the creator wants a UGC ad with a consistent creator character, a product and a location, wants character, product and location reference sheets, 10 ad concepts, a script, a storyboard image and a final clip plan, or asks for a strict step by step or stage gated UGC ad workflow. For the faster angle and clip prompt route use ugc-ad-engine.
---

# UGC ad director (Subclip edition)

A strict, stage-gated way to make a 9:16 ad that looks like a real creator filmed it on a phone. Three reference sheets come first (character, product, location), then concepts, script and one storyboard image. Only then are clips made. One stage per reply, one confirmation per stage.

Sibling skill: `ugc-ad-engine` covers angles, script and clip prompts without the sheet stages. Use this skill when the creator wants control and consistency; use that one when speed matters more.

## Capability reference

`examples/capability-ugc-ad-director.mp4` shows the four separate 9:16 sheets the skill builds before any clip (character, product, location, storyboard). The images are in `examples/`.

## Rules that never change

1. One stage at a time. Deliver that stage's output, say it is complete, ask one question, then stop and wait. Never answer for the creator.
2. The character sheet (8 panels, 9:16) is never skipped. One nice portrait is not a sheet. Do not lock the character, or mention the product stage, until the sheet is shown and approved.
3. Four separate 9:16 images: character sheet, product sheet, location sheet, storyboard. Never merge two into one picture. If one picture contains another asset, regenerate only that picture.
4. Never make a later-stage asset early (no storyboard while making sheets, no clips before the storyboard is approved).
5. UGC realism: shot like a smartphone (selfie arm, propped phone, hand-held), window or room light, real skin, lived-in room, casual speech. No cinema grade, no drone, crane or gimbal sweeps, no studio lighting.
6. Consent: only fictional characters, or the creator's own likeness with their clear consent. Never a real person, celebrity or an employee's face without written consent.
7. No health, income or guarantee claims, no invented numbers, no fake reviews presented as real customers. Tell the creator when a platform requires an AI disclosure label and offer to add one.
8. Credits: before every paid step call `estimate_ai_generation`, quote model, count and total with `get_ai_credit_status`, and wait for approval. Never ask for an API key in chat and never spend silently.
9. One question per reply, in plain English.

## Stages

The table is the contract. Details are in `references/`.

| # | Stage | Required output | Creator confirms | Detail |
| --- | --- | --- | --- | --- |
| 1A | Character | Base portrait (new, or analysis of uploaded photos) | Look is OK | `references/sheets.md` |
| 1B | Character sheet | 9:16 sheet, 8 panels, one person | Sheet approved, identity locked | `references/sheets.md` |
| 2 | Product | Product notes plus 9:16 product sheet from the creator's real product photo | Sheet approved, product locked | `references/sheets.md` |
| 3 | Location | Location notes plus 9:16 location sheet (location only) | Sheet approved, location locked | `references/sheets.md` |
| 4 | Concepts | 10 text concepts in different UGC formats | Picks one | `references/concepts-and-script.md` |
| 5 | Duration | 15, 20, 30 or 45 seconds | Picks one | `references/concepts-and-script.md` |
| 6 | Script | Spoken lines, on-screen text, soft call to action | Script approved | `references/concepts-and-script.md` |
| 7 | Storyboard plan | Shot table with smartphone framing | Plan approved | `references/storyboard.md` |
| 8 | Storyboard image | One 9:16 image of all panels | Image approved | `references/storyboard.md` |
| 9 | Consistency check | Report on character, product, location, story, format | Passed | `references/consistency-check.md` |
| 10 | Clip plan and build | Credit quote, clips, voice, captions, timeline | Quote approved, then review | `references/subclip-tools.md` |

After each stage write: "Stage N complete: <what was delivered>." then one question such as "Shall I start the next stage (<name>)?" and stop.

## Before you start

- Read `get_project_outline` if a project exists, otherwise `create_project` with `canvasPreset: "portrait"` (9:16), 30 fps. Use the same project ID on every call.
- Ask once which image route to use. Default: the creator's Codex CLI image generation (no Subclip credits); fallback: Subclip image models after `list_ai_models`. Respect the choice.
- Start by asking only: "Do you want to generate a new character, or upload an existing one?" Offer A (new) or B (upload up to 10 photos of a consenting person) and stop.

## Style and format

Keep the ad native: handheld selfie, propped phone, POV or over-the-shoulder, captions in the platform style, a hook in the first 1 to 3 seconds, a soft call to action at the end. Animals never speak; they act only through movement and sound. Keep text inside the platform safe zone (x 71 to 1027, y 347 to 1426 on 1080 by 1920).

## Wrap up

Save the director brief with `update_project_director_brief` (character, product, location locks, script, storyboard) and `write_session_summary`. Do not claim a visual check you did not run.
