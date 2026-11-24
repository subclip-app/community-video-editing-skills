# 11 B3 Retro TV

- **Reference clip:** `examples/13-retro-tv.mp4` (a fictional 3 AM television mystery). Original author's sample, first 10 s, silent. Visual inspiration credited upstream to a YouTube channel (see README).
- **Upstream source:** `references/b3-television.md` and `b3-semantic-motion.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/b3-television.md).
- **Engine:** B, stills plus motion layers. **Best for:** everyday science, psychology, animal behavior, curious facts, short mysteries.

## The look

Luminous rounded white and grey figures on dark screens, clean uppercase white text, faint bloom, subtle scanlines and an analog-broadcast finish. Ordinary humans have blank round heads; orientation comes from body arrangement, not noses or ears. Generous negative space, framed insert views, small purposeful reactions, brief signal interruptions.

## Image recipe

```text
Dark field illustration, refined white and grey rounded silhouettes with soft glow, clean objects, generous negative space, no color except [one accent]. Human characters have blank circular heads and rounded joints. Scene: [subject, viewpoint]. Compact uppercase text is not drawn in the image. No photorealism, no heavy noise.
```

Pets or animals carrying the story must be designed as appealing characters first (a softer head-to-body balance, rounded short muzzle, small distinct eyes and nose, readable ears and paws), with enough white and grey separation to survive bloom.

## Semantic motion (the key rule)

Plan events cued to the sentence, not decoration. Every motion needs a before, a visible process and an after: a diagram that builds, a connector bound to the objects it joins, an object that changes state, a framed surveillance-style insert, a character reaction. A global pan, a CRT flicker, a breathing loop or caption change do not count as meaning. First build the hardest shot cleanly with the TV treatment off, check it at normal speed, then add the scanline and bloom pass once. Do not force horror, red warnings or CCTV into a gentle explainer.

Edit across shots: establish a relationship, isolate a detail, reveal alternatives, regroup them into an explanation, return to something actionable.

## Captions and sound

White uppercase, no paper label (34 design units on a 1280 plane for landscape, 64 portrait). Static hiss and low hum, subtle clicks, restrained effects. Local voice (a calm narrator fits).

## Subclip route and credits

Stills via Codex CLI, else `nano-banana-2` (2.5 credits each). Motion in HyperFrames layers with the scanline and bloom pass as CSS or a canvas overlay. All else free.

## Checks

Dark field with white and grey figures; every motion has a purpose; connectors attach to real objects; the TV finish is restrained; the same dog or room is not reused in an unrelated story.
