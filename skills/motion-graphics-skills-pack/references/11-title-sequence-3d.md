# 11 3D title sequence

**Status:** partly new (`threejs-3d-scenes` covers device reveals and camera moves; this adds the lit night-street title opener). **Use it for:** a scroll-stopping 8 to 15 second opener: a camera moves through a lit 3D scene, such as a rainy street at night with brand names as neon signs, then a big question or title lands.

## Inputs, then wait

1. The line that lands at the end (for example "Why does every brand logo look the same now?").
2. The world: one setting that fits the story (night street, empty office, desk at 5 am, stage). Default: rainy street at night.
3. The objects: real names or logos as signs, screens or posters. Logo files attached, never redrawn from memory. Use plain type or original shapes when no file exists.
4. Brand and size: one accent color for the key word; 1920x1080 or 1080x1920.

## Review rules (from rejected rounds)

- Sound is not optional: a low bed, a hit on each new shot, a lift on the last line.
- Cards, images and objects that move in depth. A single line sliding across the screen reads as static.
- Logos fill their sign and come from the real files. A small logo in a big box looks wrong.
- Keep grids symmetrical: equal sizes, equal gaps.
- If the first 3 seconds would not stop your own thumb, rebuild them before building the rest.

## Build brief

```text
Build one seekable HyperFrames layer using Three.js, [SECONDS] seconds, [WIDTH] x [HEIGHT]. Scene: [WORLD]. Low-poly buildings, wet reflective ground, fine rain (seeded, never an unseeded random call at render time). Each attached object becomes a lit sign: draw its file onto a canvas texture on a plane, with a soft bloom (subtle, never blown out).
Camera: one slow steady dolly forward and slightly up, passing the signs. No shake, no spins.
Title: in the last third, "[LINE]" lands in bold condensed type, lower left, white with [KEY WORDS] in [ACCENT]. Keep the ground under the title dark so reflections never show through the letters.
Every value comes from time alone. Capture frames at 1 s, the middle and the last second. Check that each sign is readable at phone size, nothing mirrored sits behind the title, and every logo matches its file.
```

## Sound and export

Place a low drone and a rain bed with `search_public_audio`, a hit on each new sign and a riser into the title. Check readability on a phone-size frame and make sure small labels (dates, captions) are at least twice the size you think they need. Export MP4. For email or a newsletter, a short GIF under 5 MB is useful if the export options offer it.

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`, Three.js inside), `threejs-3d-scenes` for device or product 3D, `search_public_audio`, `view_current_frame`, `get_timeline_contact_sheet`, `export_video`.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/11-title-sequence-3d.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/title-sequence-3d/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/title-sequence-3d/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
