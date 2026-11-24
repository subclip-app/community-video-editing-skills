# 02 A2 Modern pop (minimal tech and colorful story)

- **Reference clips:** `examples/03-modern-pop-minimal-tech.mp4` (A2.1) and `examples/04-modern-pop-colorful-story.mp4` (A2.2). Original author's samples, first 10 seconds, silent.
- **Upstream source:** `references/style-catalog.md` section 3 in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/style-catalog.md).
- **Engine:** A, video model. **Best for:** AI tool demos, tutorials, personal growth, a character-led journey. A2.1 for tech and method, A2.2 for emotional stories.

## The look

A stick figure with a bright red beanie and a yellow t-shirt, recognizable at a glance. A2.1: a pure white high-key studio with a faint grey perspective grid and floating cyan glass interface panels. A2.2: the same figure inside full-color cinematic places (warm bedroom, desert road at dusk, mountain ridge above golden clouds) with volumetric light and depth of field.

## Style lock (character anchor, repeat verbatim in every prompt)

```text
A minimalist 2D animated stick figure wearing a bright red beanie (smooth rounded knit, no pom-pom) and a yellow t-shirt, with simple black stick limbs and shorts. Simple black lines, vibrant colors, smooth 2D animation style.
```

Always keep both beanie and shirt in the lock (without the shirt you get a naked stick body, without the beanie you get look 01). Use a hollow circle head or minimal dot eyes only; detailed pupils make alien bug eyes.

## Environment line

- A2.1: `in a modern bright white studio space with subtle light-gray perspective grid lines on the floor plane, high-key lighting, clean white negative space, sleek glowing cyan and electric blue glass holographic interface elements`. Add: `strictly minimalist studio, no circuit boards, no sci-fi wall panels, no spaceship corridors, no cracked concrete, no grunge, no photorealistic skin, no speech bubbles, no text boxes`.
- A2.2: `in a rich full-color cinematic environment: [setting], cinematic volumetric lighting, soft depth of field, atmospheric narrative mood`. Add: `no photorealistic skin or faces, no 3D humanoid CGI, no chaotic line glitches, no speech bubbles, no text boxes`.

## Prompt skeleton

```text
Create one [10]-second [16:9] clip, silent actors, no music, no speech.
CHARACTER: [anchor above]
SETTING: [environment line]
TIMED ACTIONS: [0-3s physical setup] [3-6s action with a prop or interface] [6-10s consequence, reaction and an exit pose the next shot inherits].
```

Use physical character-driven actions (bump an invisible glass ceiling, tap the grid to emit a cyan ripple, draw a glowing bridge across a gap, touch a floating panel). Do not use liquid or morphing transformations; they flicker. Never let the figure stand and stare for several seconds.

## Subclip route and credits

Same as look 01: Gemini Omni class model if listed, else `p-video-2` (about 25.5 credits per 10 s at 720p, quote it). A reference image of the beanie figure on white, made once with the creator's Codex CLI or `nano-banana-2` (2.5 credits), helps keep the identity.

## Checks

Beanie smooth (no pom-pom) and yellow shirt in every shot; the 2A background stays clean white with a faint grid; the 2B light is cinematic but the figure stays a flat 2D stick figure; no text in the picture; each shot hands a pose or direction to the next.
