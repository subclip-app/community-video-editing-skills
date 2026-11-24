# 03 Motion prompt writer (8 parts)

**Status:** partly new. **Use it for:** a reusable brief for one short looping motion graphic. Parts 1 to 7 stay the same for every video in one brand; only part 8, the scene, changes. Save parts 1 to 7 as the brand's brief and change only the scene next time.

## Inputs

Ask in one batch of four or fewer, then wait: the moment (what changes on screen, before and after), the exact words and numbers (real, never invented), the size (1080x960 tile, 1080x1350 portrait post, 1080x1920 reel, 1920x1080 wide), and the brand only if none exists. With no brand, use the neutral default below and say so.

## The eight parts

1. **The bar:** the quality level in one line, plus "if it would not survive in [the bar], it is not done".
2. **Format:** width x height, exact seconds (6 by default), seamless loop (last frame matches the first), sound on or off.
3. **The one rule:** one hero object fills 60 to 70 percent of the frame and shows one satisfying change, then resets.
4. **Look:** background, depth (shadows, glass, highlights), real components, one or two accent colors as hex codes, font, the hero word or number at 120 px or more, labels never under 34 px, at most five words on screen.
5. **Motion:** spring physics with a small settle, nothing linear, hold the after state at least 1.2 seconds, one thing always alive but only one focus.
6. **Never:** grey placeholder bars, stock icons, emoji, clip art, dark or noisy backgrounds when the brand is light, small objects floating in empty space, real logos of other brands.
7. **Before you finish:** capture a frame every second, judge each as a design director, then again at 200 px wide, and fix anything generic, cheap, too small or empty.
8. **The scene:** one moment in two or three sentences: the hero object, the one change, then the reset.

Add one originality line: every element is original, never a copy of a real product's interface, icons or logos.

## Neutral default (label it "Neutral default, replace with your brand")

Quality bar: premium keynote, tactile and precise. Look: light background #F5F5F7, layered soft shadows, frosted panels with a bright 1 px edge, rounded widgets. System colors used sparingly (blue #0A84FF, green #30D158, orange #FF9F0A), one or two per piece. Font: a clean system sans, tight tracking, heavy weights.

## Output: three parts only

1. One line saying which brand was used (the creator's or the neutral default).
2. The full prompt in one code block: "Build one seekable motion layer. Follow this brief exactly:", a title line, then the eight parts as headings in order, then an Originality line.
3. Two or three extra scenes to swap into part 8, one line each, in the same brand.

If the moment or the real words are missing, ask for them and wait. If everything was supplied, write the prompt straight away.

## Example scene lines

- [A button turns into a tick, the card behind it lifts, then everything resets.]
- [The sign-up count rolls from [OLD NUMBER] to [NEW NUMBER] inside a single pill, then the pill shrinks back.]

## Subclip tools

`update_project_director_brief` to store parts 1 to 7 as the brand brief, then the shared build workflow (`add_runtime_layer` kind `hyperframes`) to build part 8.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/03-motion-prompt-writer.mp4` (rough reference, rendered in code with no AI model unless the status line says it is the original author's sample).

## Source

Upstream file: `skills/motion-prompt-writer/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-prompt-writer/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
