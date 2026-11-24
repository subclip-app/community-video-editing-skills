# 04 A4 Cozy storytelling

- **Reference clip:** `examples/06-cozy-storytelling.mp4` (outdoor cafe). Original author's sample, first 10 seconds, silent.
- **Upstream source:** `references/cozy-storytelling.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/cozy-storytelling.md).
- **Engine:** A, video model. **Best for:** relationships, everyday emotions, habits, warm stories that still have room for anxiety and tiredness.

## The look

A minimalist character with a white filled round head and slim white torso inside a full-color 2D cartoon world: stations, bedrooms, corner cafes, parks. Gentle light, clear cartoon contours, wide shots that breathe and close-ups on hesitation. "Cozy" means warmth of treatment, not a cheerful script.

## Style lock (default cast, repeat verbatim)

```text
One minimalist 2D cartoon protagonist with a white filled circular head, two small dark oval eyes, simple eyebrow strokes and a short curved mouth. The torso is a slim closed tapered shape with solid white fill inside its dark outline. Both arms and both legs are dark single-line strokes with constant medium weight; hands are small dark rounded shapes and feet are short dark rounded strokes. No hair or clothing accessories. Same head-to-body proportions, white head and torso fill and outline weight in every shot. Exactly two arms and two legs exist; a moving limb replaces its previous pose. Expressions change only the facial marks, never the head shape or design.
```

Add extra characters only when planned, each with its own full card. Do not spawn background commuters.

## One new place per segment

Each planned story segment gets a different recognizable main setting (office, commute, cafe) with wide, close and moving shots inside it. Three clips at the same table with different zoom do not count. Name each location, its purpose, and what carries across the cut (character, prop, travel direction, a foreground wipe, or a named time jump). Re-block for 9:16 with vertical depth.

## Prompt skeleton: four scopes

```text
Create one [10]-second [16:9] clip, silent actors.
1 DESIGN: [character lock] plus [this clip's location and fixed furniture].
2 MOVABLE PROPS: [each prop: count, shape, color, visible faces].
3 FIRST FRAME AND TRANSFERS: [who holds what, where it starts; timed handoffs; which place becomes empty].
4 FINAL STATE: [what remains visible and which changes persist; nothing resets after a cut].
TIMED ACTIONS: [0-3s] [3-6s] [6-10s] with a shot change about every 2 to 3 seconds.
No captions, labels, color codes or interface writing; use icon shapes for alerts. No liquid furniture transformations.
```

Keep a pressure graphic only inside its timed beat, never in the global scene text, or it leaks into the calm ending. A screen-down phone shows its blank back, not a lit screen.

## Sound

Soft piano or acoustic bed, real-feeling room ambience (trains, leaves, street) as separate layers. One narrator for the whole film, gender matched to the protagonist.

## Subclip route and credits

Gemini Omni class or `p-video-2`, 720p, quote per clip. Character sheet from Codex CLI first.

## Checks

Count, fill and proportions of the character stable; prop ownership and visible faces match the action; a location change is clear; wipes land on a real usable frame; no white border or stray writing; the ending is calm.
