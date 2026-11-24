# 05 A5 Historical cartoon

- **Reference clip:** `examples/07-historical-cartoon.mp4` (Edo Japan samurai). Original author's sample, first 10 seconds of a 30 s film, silent. Style and Roman era pack contributed to the upstream by leksautomate.
- **Upstream source:** `references/historical-cartoon.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/historical-cartoon.md).
- **Engine:** A, video model. **Best for:** world history, daily life in the past, historical figures, humorous history shorts.

## The look

White round heads on a short white neck, bold ink outlines, thin black exposed limbs with small solid black mitten palms, expressive faces with solid black oval eyes, in colorful painted period settings (streets, temples, camps). Costume, buildings and props set the era; the drawing grammar never changes, only the era pack.

## Style lock (repeat verbatim)

```text
CHARACTER: A 2D cartoon [man | woman] with a round white head and a short sturdy white neck growing naturally from the clothed shoulders, supporting the jaw. Head and neck form one continuous white filled silhouette, with black outline only along its two sides, entering the [garment] neckline.
FACE: Appealing expressive storybook-cartoon face. Two solid black vertical oval eyes without irises. [Cast-card eyebrows, nose, mouth, hair]. Subtle cheek shading. Expressions change, identity does not.
PALMS: Each thin black wrist ends in one compact solid black rounded palm with one small integrated thumb bump, wider than the wrist, no separate fingers, no white fill, no glove.
EXPOSED LIMBS: Every uncovered arm, forearm, wrist and shin is one slender solid black stroke.
BACKGROUND: Full-color painted period landscape or architecture with clean cel shading. No white canvas, no paper texture, no ink wash, no photorealism.
```

Negative line: `no visible text, letters, numbers, subtitles, logos or watermarks, no speech bubbles, no gore, no photorealistic faces, no 3D, no extra limbs, no fused or duplicate heads, no costume changes, no extra characters, no individual fingers, no white hands or gloves, no floating head, no gap between head and neckline`.

## Phase A: the era pack (put it in the proposal)

Era and place and the story's factual premise; each role's silhouette, clothing and accessory (full cast card); settings and landmarks with screen direction; four to six palette words and their roles; props with counts and owners; era music (instruments); facts versus invented comic scenes. A different era needs its own new pack: do not borrow Roman armor for Egypt or Japan. Roman example: bronze-gold helmet with black crest, grey chainmail, red tunic, leather skirt; palette Roman red, bronze gold, steel grey, grass green, sky blue, tan; drums and brass for epic scenes, plucked strings for daily life.

## Prompt skeleton

```text
Create one [10]-second [16:9] stickman animated video, silent actors, no music.
[style lock] ERA PALETTE: [colors]. SETTING: [segment place]. CAST: [full cards].
TIMED ACTIONS: [0-3s] [3-6s] [6-10s] with readable physical action, a reaction close-up and a playful contrast.
[negative line]
```

Separate supported history from invented comic scenes in the narration; never invent quotes or statistics.

## Subclip route and credits

Gemini Omni class or `p-video-2` at 720p, quote per clip. The upstream advises making your own front, side and back views of each character first; do that with Codex CLI images (free) or `nano-banana-2` (2.5 credits) and attach them as references to every clip.

## Checks

Continuous white jaw to neck to garment; solid black oval eyes; the same palm shape in every shot; era costume and architecture correct for the story; one voice for the whole film, matching the main character.
