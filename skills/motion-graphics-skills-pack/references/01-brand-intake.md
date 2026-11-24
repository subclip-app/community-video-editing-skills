# 01 Brand intake

**Status:** partly new. **Use it for:** the setup step. A short interview and a few reference frames become two small documents that every other recipe reads first, so the look stops drifting between pieces.

## Inputs to ask for

Batch 1 (ask together, then wait):
1. Brand name and what it does, in one line.
2. Who watches: one sentence.
3. What the videos promote, with the real link.
4. What people should feel in the first second (pick up to three: calm, premium, playful, urgent, technical, warm, bold).

Batch 2 (then wait):
5. Colors as hex codes, font names, logo files. If there are no hex codes, ask for a link to sample from and say the samples are approximate.
6. Three to five frames of motion the creator likes (screenshots), attached to the chat.
7. One thing the motion must never do.

If an answer is blank, ask once more, then move on. Never fill a gap with a guess.

## Document 1: brand notes (under 300 words)

Headings: name and what we do, audience, what we promote (with link), the feeling, assets (hex, fonts, logo file names), never.

## Document 2: MOTION notes, from the frames

```text
Write one document that any agent can read before animating anything for [BRAND]. It covers:
1. Every color as a hex code and what it is for.
2. Fonts and type sizes.
3. Timing: how things come in, how long they hold, how they leave.
4. How things move: frame rate, easing, anything that makes it feel handmade.
5. Texture and finish.
6. Five things the motion must never do, named plainly.
7. One example, described shot by shot, of it done right.
Work only from the attached frames. Where you cannot tell, write ASK ME instead of guessing.
```

Show both documents to the creator before saving. Typed hex codes win over sampled ones (a color read off a JPEG is a few points out). If the frames show several looks, name them and ask which one is the master look.

## The read-first rule

Save this block next to the documents and apply it in every later recipe:

```text
Before designing or animating anything, read the MOTION notes in full. Every color, font, timing and motion value comes from them. They set the look, not the ambition: when asked to go all out, go all out. If something is not covered, ask. When finished, check your own frames against the notes, fix what fails, then show the result.
```

## Where to keep the documents in Subclip

- Per project: `update_project_director_brief` holds the brand and motion decisions, and every later call can read them with `get_project_director_brief`.
- Across projects: if the creator's own agent (Claude Code, Codex, Cursor) has a working folder, save the two documents there as brand.md and MOTION.md and add the read-first rule to that agent's instruction file. Ask before writing any file.

## Tips from the source

- The ambition line is not optional. Without it the first result with the file is too polite.
- "ASK ME" is a feature: a good result stops and asks one question when the notes are silent.
- Proof test (optional): run the same one-line request in an empty project and in this one, side by side. Both should be ambitious; only one should look like the brand.

## Subclip tools

`get_project_outline`, `get_project_director_brief`, `update_project_director_brief`, `get_media_context` (to read the attached frames). No generation is needed.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/01-brand-intake.mp4` (rough reference, rendered in code with no AI model unless the status line says it is the original author's sample).

## Source

Upstream file: `skills/brand-intake/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/brand-intake/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
