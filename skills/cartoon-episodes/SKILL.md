---
name: cartoon-episodes
description: Make consistent AI cartoon episodes in Subclip. Use when the creator wants an animated series, a cartoon with recurring characters, a kids-TV style show, a show bible, character and location sheets, or scene-by-scene episodes with dialogue. Defines cast, world, props and art style once, turns each one-sentence scene into a timed shot plan and a generation prompt that attaches the locked sheets, then cuts the clips into one episode on the editable timeline.
---

# Cartoon episodes (Subclip edition)

The rule behind this skill: whatever you leave undefined, the model invents, and it invents differently every time. So the show is defined once and every scene is built from the same assets.

```
IDEA -> 1 Show bible -> 2 Cast and world sheets -> 3 Scenes, one at a time -> 4 Episode cut
```

## Before you start

1. Read project state: `get_project_outline`, then `list_editor_assets`. Use one explicit project ID on every project call. If the creator gave footage or stills, call `get_media_context` first and look at the contact sheets before describing them.
2. Offer the creator's own tools first. If the Codex CLI is signed in and working, offer it for the still images (preferred image route, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with `kind: "image"`. Read `read_subclip_skill` for `subclip-ai-generation`, `references/creator-cli-generators.md` for the check and the commands. Import files made outside with `import_external_media`.
3. Call `list_ai_models` for the kinds you need and `get_ai_credit_status`. Prefer the model families named below when the live catalog offers them; otherwise use the closest match and say which and why. Copied model names are examples, the catalog wins.
4. Quote before spending: model, number of outputs, duration, settings and the total from `estimate_ai_generation` with the exact inputs, plus a retry allowance. Get approval for that scope. A larger bill needs a new decision. Pass `confirmed: true` only when the request authorizes that exact generation.
5. Create or reuse one project with `create_project`. Make one editing call at a time. Independent generations may run together inside the approved budget.

Model families to look for: an image model that takes reference images (Seedream class, for example `seedream-5-lite`) and a video model that takes reference images and can speak dialogue (Gemini Omni class, for example `gemini-omni-1.1`). Verify in `list_ai_models`. The cast and world sheets are cheap, scenes are the real spend, so quote per scene.

## Stage 1: Show bible

Ask the creator for the lead, the world and the kind of comedy or story. Then write the bible in a short project note (`update_project_director_brief`):

- **Art style**: one paragraph used verbatim in every prompt (line quality, palette, lighting, background style).
- **Characters**: for each one a visual lock (shape, colors, clothing, one unique feature, size relative to the others), a voice description and a speech habit.
- **Locations**: each with the views you will need (wide, close, reverse).
- **Props**: only the ones that recur.
- **Rules of the world**: what is possible, what is never shown.

Get approval before generating anything.

## Stage 2: Cast and world sheets

One image per character (front, three-quarter, back, with three expressions), per location view and per prop.

- Generate the main character first and review it. Then use it as a reference for the others so the style matches.
- Use Codex first for images when the creator has it, otherwise `generate_ai_media` with `kind: "image"`.
- Plain backgrounds for characters and props, no text on any sheet. Keep sheet IDs in the brief (`CHAR-lead`, `LOC-kitchen`).
- If a sheet drifts from the bible, regenerate it now. A wrong sheet costs more later.

## Stage 3: Scenes

The creator describes a scene in one sentence. You return the production plan, then generate.

1. Plan the shots: how many, how long (2 to 4 seconds each), camera for each, blocking, and the dialogue with timing. A 10 second scene fits about 25 spoken words.
2. Name the sheets the scene needs, never more than the model can use (see the attachment limit in `list_ai_models`).
3. Write the prompt: art style line, then timestamped shots, then dialogue lines in quotes with the speaker named, then sound effects. See `references/scene-prompt.md`.
4. Quote, get approval, then `generate_ai_media` with `kind: "video"`, `durationSeconds`, `aspectRatio` 16:9, `generateAudio: true` when dialogue should come from the model, and the sheets in `sourceAssets` with `role: "reference"`.
5. Wait for `get_ai_operation` to finish, import with `import_ai_operation_to_timeline`, look at it with `view_current_frame` at the start, middle and end. Judge against the sheets. Do not generate the next scene until this one is accepted or the creator accepts it as is.

Run two or more versions of an important scene and keep the best. When something breaks, say in plain words what came out wrong and rewrite only the lines that caused it.

## Stage 4: Episode cut

Read `references/subclip-assembly.md`.

- Scenes go in order on the main lane. Trim dead frames with `trim_media_item`.
- Smooth joins with a quick cut by default; add short fades only when the creator wants them.
- For an episode title card use `add_text_overlay`, never generated lettering.
- Dialogue clarity: keep the clips' own audio, check levels with `update_media_item` volume, add music with `generate_music` only when asked and import at a low volume.
- Check with `get_timeline_contact_sheet`, then `view_current_frame` on every join.

## New episode

Open the same project and the bible. Do not redefine anything. Describe the next scene and continue from Stage 3. Add a sheet only for something truly new, and add it to the brief.

## Verification

- Each character matches its sheet in every clip.
- Dialogue is the lines you wrote, in the right voice. Tell the creator what needs a listen.
- No generated lettering disagrees with the script.

---

Adapted for Subclip from the Notion list Claude Creative Skill Library Vol 2 (https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1) by PYNK Society. No license is stated for the original; this skill is written in new words.
