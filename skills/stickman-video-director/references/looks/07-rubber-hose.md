# 07 A7 Rubber hose

- **Reference clip:** `examples/09-rubber-hose.mp4` (chased by a cloud). Original author's sample, 10 s, silent.
- **Upstream source:** `references/rubber-hose.md`, `a7-prompt-contract.md`, `a7-acceptance.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/rubber-hose.md).
- **Engine:** A, video model. **Best for:** absurd comedy, everyday mishaps, twist stories, music-led shorts.

## The look

A thin-line stickman acts with elastic theatrical comedy inside finely drawn early-cartoon scenery. A paper-white round face, two curved hair tufts, black oval eyes, tiny brows and mouth; neck, spine and limbs are single narrow ink strokes. Sets use confident pen outlines, flat matte paint, sage grey, pearl grey, taupe, pale ivory and tiny faded brick-red accents. Subdued color, not black-and-white or sepia.

## The four-block prompt (blocks 1 and 2 are frozen, copy them exactly)

**Block 1, fixed character**

```text
ONE original stickman, drawn as a literal thin-line stick figure. Flat paper-white circular face, two black oval eyes, tiny brows and mouth, exactly two short curved black hair tufts. The head outline touches a short black neck. Neck, vertical spine, two arms and two legs are each a SINGLE uniform fine ink stroke, like a pen-drawn stick diagram, very thin relative to the frame. Background stays visible beside the narrow spine, even between the shoulders. Two small white outlined hands and two short black curved feet. All joints connected; head size and line width constant while bending. Bare line body: no clothing, tie, filled chest, triangular neck or rounded torso.
```

**Block 2, fixed drawing and palette**

```text
An original early hand-inked theatrical cartoon: a fine-line stickman in an exquisitely hand-drawn 1930s background painting. Subdued colored palette of dusty sage-gray green, pearl-gray plaster, muted gray-taupe, pale ivory furnishings and tiny faded brick-red details. Not monochrome, not sepia. Face and hands flat clean white, no yellow tint. Every object defined first by a confident visible black pen outline with small seams, hinges and irregular edges; color laid in as flat matte paint with delicate brush texture, soft stippling and sparse hatching. Uniform diffuse stage lighting, lamps off, no glints, bloom, glossy surfaces or dramatic shadows.
```

**Block 3, variable scene** (short): [period place], [two or three inked construction details], [the main prop], clear acting space. Do not copy a reference set's furniture.

**Block 4, variable timed action and camera**: a causal performance with anticipation, action, consequence and reaction, with named grips and foot contacts, for example `0-2.5s medium side view of the approach and grip, 2.5-5s cut closer on the surprise, 5-7.5s medium-wide effort and release, 7.5-10s closer reaction`. Keep the two hair tufts, head-neck connection and the bare thin body throughout.

(The wording above is our paraphrase of the upstream's frozen strings. For a strict match to the author's accepted prompts, see the upstream file `a7-prompt-contract.md` linked above.)

## Reference image

Use one character-and-style image as a reference input for identity and drawing, not as the literal first frame. Make it once: a clean frame of the character in the era room (Codex CLI image, else `nano-banana-2`). Start the film in the new location.

## Acting rules

Direct anticipation, connected elastic movement, overshoot and recovery, blinks and reactions, a readable grip and release, planted steps with counter-motion in shoulders and hips. A sliding body or random flailing is not rich acting. The spine stays a thin line through every bend. Use motivated framing: setup, contact, reveal, reaction, payoff; keep screen direction and prop states.

## Subclip route and credits

Gemini Omni class or `p-video-2` at 720p, 10 s clips, one result per scene, quote each (about 25.5 credits on `p-video-2`). Music-led shorts: pick the track first (`search_public_audio` or `generate_music`), cut on its accents. No default narration or lyrics.

## Checks

Thin single-stroke spine and limbs; head and line width constant; white (not yellow) face; no filled torso; diffuse light only; the action has anticipation and consequence; no clothing appears.
