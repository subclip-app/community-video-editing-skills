# 13 B5 Avatar explainer

- **Reference clip:** `examples/15-avatar-explainer.mp4` (three video mistakes, with the original author's own presenter). Original author's sample, first 10 s of a 49 s film, silent.
- **Upstream source:** `references/b5-character-explainer.md`, `b5-left-stage-motion.md`, `b5-crazymei-directing-structure.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/b5-character-explainer.md).
- **Engine:** B, stills plus motion layers. **Best for:** explainers, everyday psychology, pop-culture commentary, witty observations with visual metaphors.

## The look

Warm paper, dark ink, restrained red accents and bold black-and-red headline type. A distinctive presenter (an abstract cartoon head on a simple stick body) speaks at the bottom right; the left stage tells the idea with energetic anonymous stickmen, oversized objects, successive visual metaphors, graphic transformations and causal physical comedy (dragged by bills, flattened by pressure, caught in a punchline).

## Two separate jobs

- **Presenter (bottom right).** Use the creator's own character or a new original one. A complex, real-person or well-known character needs permission: do not make one the creator did not supply or clear. Design the presenter's head and body as a still first (Codex CLI image, else `nano-banana-2`), get approval, then test a short speaking moment before the story.
- **Left stage.** Plan a relay of lead visuals: each major event hands over to the next so the former group clears and a new lead takes over. Draw the objects, states and key contact poses the events need before tweening, then animate whole objects and graphics, not animal joints.

## Planning cards (before building)

For each beat: the sentence, the visual metaphor, the lead object or figure, the contact pose, the transformation, the handoff to the next beat. Let the words choose the ending; never force a side-by-side summary to fill time. Static raised arms across unrelated beats, reaches with no object, and repeated gestures are the failures to avoid.

## Image recipe (left stage assets)

```text
Warm paper background, dark ink, restrained red accent. Simple expressive stick figure(s) and oversized [object] in a clear key pose: [pose and contact]. Bold flat shapes, no text in the image, blank space for headline type. Complete figure and prop, source proportions, no cropped limbs.
```

## Build

HyperFrames layer: a presenter mouth envelope driven by the voice, bold headline text as live HTML type (black and red), left-stage objects as separate images moved with GSAP (slide, squash, tilt, handoff). Captions up to three semantic lines. Sound: light bed, comic effects on actions, voice at native speed. The presenter's voice must match the presenter's gender.

## Subclip route and credits

Presenter and 6 to 12 prop or pose stills by Codex CLI (free) or `nano-banana-2` (2.5 credits each). Local voice, captions and layers are free.

## Checks

Presenter identity stable; every left-stage change is cued to a sentence; contact poses drawn, not stretched; clear handoffs; no unrelated restating summary; the presenter is the creator's own or an original character.
