# 13 Newsletter promo

**Status:** partly new. **Use it for:** a 12 to 20 second promo that turns an edition into a reason to read: a hook question, three proof frames, then the newsletter name and where to read it. Show the best bits, never the whole thing.

## Inputs, then wait

1. The edition link or full text. Read it first.
2. The hook: the one question or promise the edition answers. If none, propose three from the edition's own lines and wait for a pick.
3. Three proof frames: real images, charts or clips from the edition (attached files only).
4. The ending card, word for word: newsletter name, where to read it, an optional subscriber count with its source.

## Structure (15 seconds)

| Time | Frame |
| --- | --- |
| 0 to 3 s | The hook, big. A question works better than a statement. |
| 3 to 11 s | Three proof frames, about 2.5 s each, each with a 3 to 5 word label and a slow push-in. |
| 11 to 15 s | Newsletter name and "Read it free at [URL]", held still and readable on a phone. |

## Build brief

```text
Build a [15]-second promo, [WIDTH] x [HEIGHT], for my newsletter edition using only the files I attached.
Hook (0 to 3 s): "[HOOK]" in bold condensed type, [TEXT] on [BG], key words in [ACCENT].
Proof (3 to 11 s): my three images in this order, about 2.5 s each, slow push-in, labels: [LABEL 1], [LABEL 2], [LABEL 3].
End card (11 to 15 s): "[NEWSLETTER NAME]" and "Read it free at [URL]". Hold still.
No typewriter text, glow, bounce, gradient text, or any claim or number not in my brief.
Capture one frame per shot and check every label is readable at phone size.
```

Build it with native media items for the proof frames (`add_media_keyframe` for the push-in) and `add_text_overlay` for the hook and end card, or as one HyperFrames layer if the creator wants a fully code-drawn look. Export 1080x1350 for a feed and 1080x1920 for stories (recipe 15). Put the edition link in the first line of the caption, not only in the comments.

## Subclip tools

`import_attachment_to_timeline`, `add_media_keyframe`, `add_text_overlay`, `update_text_item`, `add_runtime_layer`, `get_timeline_contact_sheet`, `export_video`.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/13-newsletter-promo.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/newsletter-promo/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/newsletter-promo/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
