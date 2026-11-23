---
name: ai-ad-formats
description: Make short AI ads in five proven formats in Subclip. Use when the creator wants a claymation ad, a paper animation or origami ad, a singing story or song-style ad with an original song, a talking object ad (a product, an ingredient or an organ with a face and a voice), or a skeleton progression ad ("what happens if you do X for 365 days"). Needs a product photo or a reference. One locked style and one locked character carry every beat.
---

# AI ad formats (Subclip edition)

Five formats, one method. Pick a format, lock one style and one character, then make one picture per beat and turn each picture into a short clip. Keep the product photo in every prompt so the product never changes.

## Before you start

1. Read project state: `get_project_outline`, then `list_editor_assets`. Use one explicit project ID on every project call. If the creator gave footage or stills, call `get_media_context` first and look at the contact sheets before describing them.
2. Offer the creator's own tools first. If the Codex CLI is signed in and working, offer it for the still images (preferred image route, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with `kind: "image"`. Read `read_subclip_skill` for `subclip-ai-generation`, `references/creator-cli-generators.md` for the check and the commands. Import files made outside with `import_external_media`.
3. Call `list_ai_models` for the kinds you need and `get_ai_credit_status`. Prefer the model families named below when the live catalog offers them; otherwise use the closest match and say which and why. Copied model names are examples, the catalog wins.
4. Quote before spending: model, number of outputs, duration, settings and the total from `estimate_ai_generation` with the exact inputs, plus a retry allowance. Get approval for that scope. A larger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact generation.
5. Create or reuse one project with `create_project`. Make one editing call at a time. Independent generations may run together inside the approved budget.

Model families: an image model for the beat pictures (the creator's Codex CLI first, else a Seedream or GPT image class model), a video model that takes a start frame (Seedance class, `seedance-2.5`, or Gemini Omni class), and for the singing format `generate_music` plus a lip sync or avatar capable model if `list_ai_models` shows one. Verify before quoting.

## Pick the format

| Format | Use when | Reference file |
|---|---|---|
| Claymation | Fun, tactile, memorable brand | `references/claymation.md` |
| Paper animation | Craft, calm, premium handmade | `references/paper-animation.md` |
| Singing ad | The product needs emotion and repeat views | `references/singing-ad.md` |
| Talking object | The thing itself is the hero (product, ingredient, organ) | `references/talking-object.md` |
| Skeleton progression | A time based claim told as a visual countdown | `references/skeleton-progression.md` |

If the creator is undecided, offer the two that best match the product and the audience, in one line each.

## Shared workflow

1. **Brief**: product, who it is for, one promise, platform and ratio (9:16 for short feeds, 16:9 otherwise), length (15 to 30 seconds), and the call to action. Look at the product photo first (`get_media_context` for project media, or import it with `import_external_media` and `addToTimeline: false`). Do not claim anything the product cannot do. Keep medical or income style claims out of the script unless the creator has proof.
2. **Lock**: one style paragraph and one lead character (or the object) written once and pasted into every prompt. Make the lock image first and review it. Everything else references it with `sourceAssets` `role: "reference"`.
3. **Beats**: five to eight beats, each 2 to 4 seconds. Write what is on screen, the camera, and any line spoken or sung.
4. **Pictures**: one still per beat. Product photo attached in every request. Review the product in each; regenerate when the label or shape drifts.
5. **Clips**: each picture becomes a clip with `generate_ai_media` `kind: "video"`, the picture as `start_frame`, short duration, `generateAudio` only when the format needs sound from the model. Quote first, then run. Poll `get_ai_operation` sparingly.
6. **Assemble** on the timeline (`references/subclip-assembly.md`): clips in order, voice or song, native text for the offer and the call to action, native logo overlay from the client's real file. Never let a model draw a logo or a price.
7. **Review** with `get_timeline_contact_sheet` and `view_current_frame` at every cut. Export only when asked.

## Cost control

- Make the lock and the pictures first, then animate only after the creator likes the pictures.
- Generate four pictures for the key beats and keep the best. One generation tells you little.
- Stop when the result is clean. About ten generations for a whole ad is normal.

## Verification

- The product looks the same in every beat.
- Text, offer and logo are native layers and correct.
- Any sung or spoken line matches the script. Say plainly what needs a listen.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
