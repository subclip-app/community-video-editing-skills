# 02 Motion brief writer

**Status:** partly new. **Use it for:** an idea that is still rough ("make my Q3 results move"). You write the brief; a later step builds from it. A precise brief is the difference between a generic animation and a branded one, and it keeps an invented number from reaching a public post.

## Steps

1. Read what the creator gave: the idea, logo, brand notes (see recipe 01), exact words and numbers, platform or size, maybe a motion reference.
2. If something essential is missing, ask once, in one batch of five questions or fewer, then wait. Essential means: exact words and numbers, size, length, brand. Skip what was already answered.
3. Brand: use only hex codes the creator typed or that are clearly readable. Otherwise ask for the exact color. You may propose a neutral palette if you label it "Neutral default, replace with your brand".
4. Brand rules outrank any reference. From a reference take the motion idea only, never its logo, copy or colors.
5. Keep results, targets and sample data apart. If a performance claim has no supporting figures or its status is unclear, ask. With no data, offer a demo marked "Illustrative data". Never present a target as a result.

## Output: two parts only

Part 1: a plain summary in three sentences or fewer.
Part 2: one build prompt in a code block with:
- width x height in pixels and total seconds
- four states with timings: start, change, hold, return (last frame matches the first)
- the exact text and numbers, marked as fixed
- colors, font and assets (name the files the creator attached)
- one self-contained seekable scene (a function of time) and a reduced-motion setting that shows the held frame
- after the build: named frames to capture, checked for overlap, cut-off text and changed numbers, with the earlier version kept
- no spending, sending or publishing without asking

## Build prompt skeleton

```text
Build one seekable motion layer, [WIDTH] x [HEIGHT], [SECONDS] seconds, for [PLATFORM].
Fixed text and numbers (do not alter, round or restyle): [TEXT AND NUMBERS]. [If sample: keep "Illustrative data" visible.]
States: 1 start: [what it looks like first]. 2 change ([T1] to [T2] s): [the one thing that moves]. 3 hold ([T2] to [T3] s): [finished state, headline value labelled]. 4 return ([T3] to [SECONDS] s): eases back so the last frame equals the first.
Look: background [BG], text [TEXT], accent [ACCENT], font [FONT]. No external images or fonts.
After the build, capture frames at [LIST OF SECONDS] and check them. Fix what is real, keep the first version.
```

## Examples of the right behavior

- "Bars grow for my Q3 results" with no numbers: ask for the numbers. Do not write a prompt yet.
- A reference that carries another firm's logo: copy its motion only and say its logo and colors are excluded.
- A blurry brand screenshot: ask for the exact color, never guess a hex.
- "20 percent growth" with no figures: ask whether it is a result, a target or an example.

## Subclip tools

`get_project_outline`, `get_media_context` for attached references, `update_project_director_brief` to record the approved brief. The brief is then built with the shared build workflow.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/02-motion-brief-writer.mp4` (rough reference, rendered in code with no AI model unless the status line says it is the original author's sample).

## Source

Upstream file: `skills/motion-brief-writer/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-brief-writer/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
