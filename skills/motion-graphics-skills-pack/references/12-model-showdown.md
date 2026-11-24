# 12 Model showdown

**Status:** partly new (`ai-edit-battle` compares two contenders editing one clip; this one has three models write the same code motion). **Use it for:** a fair, visible test. One brief, three AI models, first try each, one renderer, stacked into one comparison video with model names.

## Inputs, then wait

1. The brief, word for word: every model gets the exact same text.
2. The three models, named exactly as their makers write them (version included), and how the creator reaches each one. Only the creator's own accounts and tools; you cannot call outside models yourself.
3. Logo files for each model if wanted, attached, never redrawn from memory.
4. A two-line headline (for example "Same prompt." / "Three AI models.").

## Fair-test rules

- First try only. No re-rolls, no fixes, no "one more go" for the one you hoped would win.
- The models write code; you render it. Add this to the brief so no model gets a better export:

```text
Deliver one self-contained scene, [WIDTH] x [HEIGHT] px. Output the complete code only. A shared renderer will call a seek(t) function and export each output at the same settings. Implementation: a deterministic seek(seconds) that wraps modulo [SECONDS], every visual state derived from time, no external requests, no controls, no debug text, no model name.
```

- Same renderer and settings for all three: same size, frame rate, length.
- A failure stays in. If a model returns broken code or nothing, its panel says so. Never swap in a later try.

## Stack them in Subclip

Import each model's code scene as its own layer (`add_runtime_layer`, kind `hyperframes`) or as a rendered clip (`import_external_media`), then arrange the three on the timeline.
- Wide layout (16:9): three panels side by side, each with its model name above on a plain strip.
- Reel layout (1080x1920): three 1080x360 panels stacked at y 540, 900 and 1260 over a near-black background, the headline between y 360 and 520, nothing below y 1420 or in the right 120 px.
Put each label on its own dark rounded tile in the top-left of its panel so it never vanishes on a light frame. Use the full model name. End the post caption on a question ("Which one would you post?").

## Check

Pull one frame from the middle of each panel. Is every label readable at phone size and is each name right? Then follow the checks in recipe 15 before upload.

## Subclip tools

`add_runtime_layer`, `import_external_media`, `add_text_overlay`, `update_media_item`, `get_timeline_contact_sheet`, `view_current_frame`, `export_video`.

## Credit cost

The comparison video costs no credits. Running the three models happens in the creator's own accounts and is outside Subclip, so Subclip cannot quote it. If the creator wants Subclip models in the test, use `list_ai_models` and `estimate_ai_generation`, show the total, and wait for approval.

## Reference clip

`examples/12-model-showdown.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/model-showdown/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/model-showdown/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
