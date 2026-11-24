# 06 A6 Amber noir

- **Reference clip:** `examples/08-amber-noir.mp4` (8 second original sample, a character in a warm-lit city street). Original author's sample, silent.
- **Upstream source:** `references/amber-noir.md`, `a6-reference-prompts.md`, `a6-finishing.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/amber-noir.md). Visual inspiration credited upstream to a YouTube channel (see README).
- **Engine:** A, video model plus finishing. **Best for:** what-if stories, modern fables, temptation and consequence, twist endings.

## The look

An orange-hooded figure moves through golden light and deep plum shadows. Compact matte-black round heads on short black necks, small cream-white eye marks and a thin line mouth, simplified black hands and limbs, angular illustrated contours, restrained cel shading, amber lights and layered full-color city sets. It stays illustrated, never glossy 3D or realistic.

## Style lock

```text
Original illustrated 2D night-city animation. The actor is a compact matte-black round head on a short black neck, with small cream-white eye marks and a short line mouth, wearing [orange hoodie], simplified black hands and limbs with a readable silhouette. Angular illustrated contours, restrained cel shading, warm amber illumination and deep plum shadows in layered full-color settings. Dimensional lighting without glossy 3D toys or realistic people. The actor performs silently; the mouth stays a small stable line, never lip-synced.
```

## Shot record and prompt skeleton

For each shot write: time, location and camera, visible cast, incoming prop and pose, one main action and its reaction, outgoing state, first-frame reference, the separate voice interval, effects, planned cut. Hands and props must touch clearly; keep screen direction.

```text
Create one [8]-second [16:9] clip from the attached first frame. Silent non-speaking actor, no narration, no music.
STYLE: [style lock]
SHOT: [location, camera move]. ACTION: [one clear action then the reaction]. OUTGOING STATE: [pose, prop, direction].
```

Make a first-frame still for each shot (Codex CLI image first, else `nano-banana-2`) in the amber noir look; a still from a good earlier shot also works. The original sample film was made with Veo 3.1 Fast at 720p in clips up to 8 seconds, plus a separate narrator and local finishing.

## Finishing (our own tools)

Narration is a separate local voice, curious and exploratory in tone, gender matched to the character. Large uppercase captions with a thin outline and an amber highlight on the active word, a short pop on phrase entry, one persistent white title top left, motivated local effects, a slow dark bed. Time captions to the real speech.

## Subclip route and credits

Veo-class or Gemini Omni class model if `list_ai_models` lists one, else `p-video-2` with a start frame. A few stills (2.5 credits each on `nano-banana-2`) plus clips; quote the whole set. Local voice and captions are free.

## Checks

Silent actor with a steady mouth (if a model makes the mouth talk, regenerate that shot, never paint over it); amber and plum palette holds; first-frame identity matches; hands touch props; captions follow the voice; no unfinished mouth or action faults left unreported.
