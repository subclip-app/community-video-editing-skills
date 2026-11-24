# 01 A1 Classic black and white (light and dark)

- **Reference clips:** `examples/01-classic-black-on-white.mp4` (A1.1, black on white) and `examples/02-classic-white-on-black.mp4` (A1.2, white on black). Original author's samples, first 10 seconds, silent.
- **Upstream source:** `references/style-catalog.md` section 2 and `references/a1-prompt-structure.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/a1-prompt-structure.md).
- **Engine:** A, video model. **Best for:** mental models, science, psychology, business breakdowns, any idea that becomes clear through one good visual analogy.

## The look

A hollow round head and a handful of lines. Crisp black ink on a flat pure white canvas (light) or white lines on a flat pure black canvas (dark). A few bright accents point at the one detail that matters; anxiety becomes a cage, attention a battery running low. Flat two-dimensional shapes only: no gradients, shadows, bevels, texture, depth or lighting.

## Style lock (repeat in every prompt, choose light or dark once)

```text
Minimalist two-dimensional [black | white] line animation on one uniform digitally pure [white | black] canvas. The same stick figure throughout: a hollow circular head, [no face, no eyes, no mouth | occasional simple line expressions], no hair, no clothing, no filled body, stable proportions, connected line limbs, uniform medium line weight. Exactly two arms and two legs are visible; each limb appears only in its current pose, so raising an arm replaces the resting arm and never leaves a second one underneath. The figure stays [black | white]; accent colors affect only props and graphic effects. Accent colors: [vivid red = wasted effort], [electric blue = the lever point], [warm gold = the result].
```

## Prompt skeleton (one clip)

```text
Create one [10]-second [16:9] kinetic motion-graphics clip, silent actors, no music, no speech, with room for effects added later.
STYLE: [style lock above]
TIMED SEQUENCE:
[0-3s] [Concrete first frame: situation and key prop. The figure enters the action in this beat.]
[3-6s] [A visual metaphor changes the situation: one cause, one visible effect.]
[6-9s] [Escalation or reversal with a visible consequence.]
[9-10s] [Payoff that earns the hold: a bridge the figure steps onto, a gap closed. End on a held frame.]
CONSTRAINTS: flat outlines and solid accent fills, no depth, extrusion, bevel, gradient or texture, no duplicated or detached limbs, no visible words, letters or numbers (icons only), no speech bubbles. Motion trails belong on props, never as extra limb poses.
```

Each beat should add a new metaphor or change the situation. Read the beats back as a silent storyboard: a viewer should understand without sound. Effects sit on contacts; narration is a separate voice track (`voice-and-sound.md`).

## Subclip route and credits

`list_ai_models` kind video, pick the Gemini Omni class model if present (the original used Omni Flash in Google Flow at 720p), else `p-video-2`. Text-to-video, 16:9, 720p. Quote with `estimate_ai_generation`: a 10 second clip on `p-video-2` is about 25.5 credits. Plan one clip per 8 to 10 seconds of story, test one representative clip first. For a cheaper film use look 09 (B1 minimal line art). Voice: local, gender matched.

## Checks

Pure flat canvas with no gray tint; exactly two arms and two legs in every frame; head never changes size or fill; accents only on props; no stray text; the final beat has a visible consequence; a visual change every 2 to 3 seconds.

## Limits

Hands and feet and line weight can vary across clips even with a repeated lock. Say so, and re-roll only the affected clip.
