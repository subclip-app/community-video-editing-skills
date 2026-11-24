# 04 Reference to motion

**Status:** partly new. **Use it for:** "make me something like this". Turn a reference you admire into a scene-by-scene brief for your own topic and brand, without copying anything.

## Two kinds of reference

- **Moves reference:** a video (frames, a contact sheet, a clip). It gives pace, scene changes and the one idea.
- **Look reference:** a website, brand or moodboard. It gives colors, fonts and feel.

One reference can do both if the creator says so. By default a video is a moves reference and anything still is a look reference. Never copy a video: the creator's topic and words build the piece.

## Steps

1. Sort what the creator attached into moves and look. In Subclip, for an imported video call `get_media_context` with `includeContactSheet: true` and inspect up to six exact moments with `inspectAtSeconds`. Describe only what you actually saw.
2. Break the moves reference down in five short lines: pace (how long each shot holds), change (how one scene turns into the next), type (size, weight, how words arrive), color and light, and the one idea that carries the whole piece.
3. If there is a look reference, add one Look line: background, text and accent colors as hex codes, fonts (or the closest available), and how it should feel and move.
4. Ask once for: the topic, the exact words on screen, the length in seconds and the size. Ask for brand colors and font only if there is no look reference and no brand notes (recipe 01). Wait for the answers.
5. Write the brief.

## Rules

- From the moves reference take pace, scene changes and the one idea. Leave out its logo, copy, colors and characters.
- From the look reference take colors, fonts and feel, never its logo or copy.
- Look order: the creator's look reference, then their brand notes, then a neutral dark palette labelled "Neutral default, replace with your brand".
- Never invent a number. One visual idea per scene, and each scene grows out of the last.
- Every timing is in seconds and the scenes add up to the exact length.
- If views are mentioned, you may say what they suggest, never use them as a gate.

## Output

Part 1: the five-line breakdown, plus the Look line.
Part 2: one brief in a code block, under 300 words:

```text
Make a motion graphic. Format [SIZE], exactly [SECONDS] seconds.
Look: background [BG], panels [PANEL], one accent [ACCENT], fonts [FONT], motion [ease-out, no bounce].
[0 to 2 s] [SCENE NAME IN CAPITALS]: what the viewer sees. Words: "[EXACT WORDS]".
[2 to 5 s] [SCENE NAME]: ...
Before finishing, capture a frame every 2 seconds, check each for cut-off or unreadable text, and fix it.
```

Then build it with the shared workflow.

## Subclip tools

`get_media_context` (with `includeContactSheet: true` and `inspectAtSeconds`), `get_project_outline`, `update_project_director_brief`, then the shared build workflow.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/04-reference-to-motion.mp4` (rough reference, rendered in code with no AI model unless the status line says it is the original author's sample).

## Source

Upstream file: `skills/reference-to-motion/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/reference-to-motion/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
