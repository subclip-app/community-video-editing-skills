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

Read `references/show-bible.md`. Ask once, in one compact message, for the lead, the world and the kind of comedy or story (a logline, characters with look, personality and how they talk, recurring places and props, art style, aspect ratio); if they say "just build it", fill the gaps yourself. Then write the bible in a short project note (`update_project_director_brief`):

- **Art style**: one paragraph used verbatim in every prompt (line quality, palette, lighting, background style).
- **Characters**: for each one a visual lock (shape, colors, clothing, one unique feature, size relative to the others), a voice line a video model can act (for example "lazy teenage boy, low, dry, slightly nasal", or "no voice, barks") and a speech habit.
- **Locations**: two views each, a master wide and a counter angle or detail.
- **Props**: only the ones that recur.
- **Rules of the world**: what is possible, what is never shown.

Original cast only: no real people, existing characters or brand names. Show the bible back as a compact table with aspect (16:9 or 9:16) and scene length (default 15 s). Get approval before generating anything.

## Stage 2: Cast and world sheets

One style key first (a representative scene, which locks the look), then one image per character (full body, neutral pose, front three-quarter view, plain backdrop, 2:3), two views per location (empty plates, with the empty-plate guard from the reference) and one per prop (1:1). A turnaround with three expressions is a good extra for complex characters. Generate a few variations of each character and keep the one that feels like the face of the show. Check that every bible asset has a sheet before directing any scene.

- Generate the main character first and review it. Then use it as a reference for the others so the style matches.
- Use Codex first for images when the creator has it, otherwise `generate_ai_media` with `kind: "image"`.
- Plain backgrounds for characters and props, no text on any sheet. Keep sheet IDs in the brief (`CHAR-lead`, `LOC-kitchen`).
- If a sheet drifts from the bible, regenerate it now. A wrong sheet costs more later.

## Stage 3: Scenes

The creator describes a scene in one sentence. You return the production plan, then generate.

1. Plan the shots with the chain in `references/scene-prompt.md`: you decide how many (3 to 5 seconds each, timestamps tiling the duration exactly), the camera for each with `CUT TO:` or `CONTINUOUS,` transitions, the blocking, and the dialogue about 2 words per second, each line labelled with the speaker's name and voice line. Default scene length 15 seconds.
2. Name the sheets the scene needs, characters first, then one location view, then props, at most 4 and never more than the model can use (see the attachment limit in `list_ai_models`). One location per generation; a bigger episode is split into numbered scenes.
3. Write the prompt: art style line, then timestamped shots, then dialogue lines in quotes with the speaker named, then sound effects. See `references/scene-prompt.md`.
4. Quote, get approval, then `generate_ai_media` with `kind: "video"`, `durationSeconds`, `aspectRatio` from the bible (16:9 by default), `generateAudio: true` when dialogue should come from the model, and the sheets in `sourceAssets` with `role: "reference"`.
5. Wait for `get_ai_operation` to finish, import with `import_ai_operation_to_timeline`, look at it with `view_current_frame` at the start, middle and end. Judge against the sheets. Do not generate the next scene until this one is accepted or the creator accepts it as is.

Run two or more versions of an important scene and keep the best. When something breaks, say in plain words what came out wrong and rewrite only the lines or the one shot that caused it (fix table in `references/scene-prompt.md`). Trim a small glitch at the start or end on the timeline instead of regenerating.

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
