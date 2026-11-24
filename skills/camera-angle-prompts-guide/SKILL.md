---
name: camera-angle-prompts-guide
description: Pick, prompt and edit any of 44 cinematic camera angles (eye level, low angle, worm's eye, dolly zoom, orbit, crane, whip pan, rack focus, Snorricam, fisheye, split diopter and more) for AI video in Subclip. Includes our own guide to choosing angles by emotion and use case, a prompt formula, how to pair angles into a cut, which angles Subclip can fake natively with crops, zooms and keyframes, and which need a video model. Use when the creator asks for camera angle prompts, a camera move, "make this shot feel more cinematic", B-roll coverage, or a shot list for AI video.
---

# 44 Cinematic Camera Angles Prompt Guide for AI Video (Subclip edition)

A vocabulary of 44 camera angles and moves, plus our own method for choosing them. The angle names follow the free guide by Digital Windows AI (credited in the README); the wording, prompts and tips here are ours.

## Capability reference

`examples/capability-camera-angles.mp4` is a short montage of ten angles with labels. Show it to the user when they ask what this skill can do.

## When to use this skill and when to hand over

- 13 of the 44 angles are already written up in the `ai-camera-shots` skill (eye level, low angle, high angle, bird's eye, over the shoulder, wide shot, Dutch angle, profile, reflection, dirty frame, ground level, frame in frame, macro). For those, use that skill by slug. `references/angle-index.md` shows which.
- This skill fully writes the other 31, and adds the choosing guide and the cut pairing.
- Not in this list but in `ai-camera-shots`: silhouette, inside the object, security cam, lens flare, peek through, through glass, shallow focus.

## Workflow

1. **Understand the shot.** Ask what the shot must do (feeling or job) and what footage or keyframe exists. If unclear, read `references/our-guide.md` and propose three angles from its table with one line of reasoning each.
2. **Pick the angle** from `references/angle-index.md`. Open its family file for the camera sentence, tip and the Subclip route:
   - `references/height-and-distance.md`
   - `references/viewpoint-and-framing.md`
   - `references/camera-moves.md`
   - `references/lens-and-focus.md`
3. **Fake or generate?** If the "In Subclip" line gives a native fake, do that first: it is free and keeps the real performance. Generate only angles that need a new viewpoint.
4. **Build the prompt** with `references/prompt-formula.md`: fixed look block, your grade, the angle sentence, one subject beat.
5. **Choose the model and quote credits.** Follow `references/subclip-tools.md`: `list_ai_models` for video and image models, `estimate_ai_generation` for the cost. Tell the user the model, number of clips, duration and the total including a retry allowance. Wait for approval before every credit-spending step. Never ask for an API key in chat.
6. **Generate small first.** Two or three angles, 4 to 6 seconds each, from a keyframe. Check with `view_current_frame` before making more.
7. **Cut it.** Use the pairing and set-order rules in `references/our-guide.md`. Edit one clip at a time on the timeline.

## Hard rules

- Never spend credits without a quoted cost and a yes.
- Never claim a model supports a camera move: read its schema in `list_ai_models` first.
- Keep subject, outfit, place and grade identical across angles of one set.
- No hidden actions: tell the user every tool call that changes the project or spends credits.
- No em dash, middle dot or ellipsis in text you write for the user.

## Files

- `references/angle-index.md`: all 44 angles, where each is written, and whether a native fake exists.
- `references/height-and-distance.md`, `viewpoint-and-framing.md`, `camera-moves.md`, `lens-and-focus.md`: the 31 angles written in full.
- `references/prompt-formula.md`: the angle prompt formula and failure rules.
- `references/our-guide.md`: choose by emotion and use case, set order, pairing, continuity, generate or fake.
- `references/subclip-tools.md`: models, credits, the workflow and the native fake recipes.
- `examples/`: example frames numbered `01` to `44` as in `angle-index.md` (`NN-<angle>.jpg`) and the capability video.
