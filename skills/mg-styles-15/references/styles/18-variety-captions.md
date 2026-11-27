# Variety Show Kinetic Captions (Hanazi), 9:16

Original film: "Meow Diary" EP.07, "Today's Dose of Happy". 1080x1920, 30 fps, 10 s, final jury score 7.64 / 10. The original on-screen copy is Chinese; this edition writes it in English. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/18-hanazi.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/18-hanazi).

Pick it for: vertical vlogs, pet clips, interviews, comedy edits, reaction shorts.

## Output (fixed in the original)

1080x1920 (vertical), 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

- Canvas: `create_project` with `canvasPreset: "vertical"` or `set_canvas_properties` with `preset: "vertical"`.
- Footage: the creator's own clip or photos as native media items. Ken Burns, handheld shake and snap punch-ins with `add_media_keyframe` (seeded small offsets for shake). Only use stock when asked, through `search_public_media` and `import_public_asset_to_timeline` with its attribution.
- Decorative captions: one short HyperFrames layer per caption moment, placed clear of faces (check `get_timeline_contact_sheet` first). Three-layer type with fill, thick white stroke and colored outer stroke via SVG `stroke` with `paint-order` or stacked `text-shadow` (never CSS `filter` on text). Bursts, sweat drops and sparkles are SVG in the same layer.
- These hanazi are designed graphics, not transcript captions. If the creator also wants speech captions, transcribe and apply the owner's default caption preset (`apply_dynamic_caption_preset` with no preset id).
- Upstream route: DOM and SVG multi-layer text-stroke caption components, spring pops, SVG burst, sweat and sparkle decorations over a pet vlog footage layer (CC0 photos with Ken Burns, handheld shake and punch-ins).

## Creative seed (swap this)

"Cute pet variety vlog." Variety captions in their native habitat: reactive captions over a pet vlog.
- A base layer that feels like footage: cat or dog photos or clips with slow Ken Burns, subtle handheld shake, snap punch-in zooms on the moments (a stylized scene is fine if photos look weak).
- Caption moments synced to beats: the title "Today's dose of happy" (gradient fill, thick white stroke, colored outer stroke, drop shadow, rounded heavy font), bouncing "???" question marks, "SHOCKED!!" inside a radial explosion frame with speed lines and a radial flash, a small "(whispering)" aside, "Iconic" with sparkles, sweat drops, and a "Certified by the cat boss" stamp. The original used the same six moments in Chinese; write them in the creator's language.
- Motion: pop scale 0 to 1.15 to 1.0 in about 8 frames, per-character bounce with a 2-frame stagger, slight rotation, gentle wiggle while holding; appear 2 to 3 frames after the audio or visual moment. Saturated pink, yellow and cyan with white strokes.
- Sound: a bouncy variety-show bed (pizzicato, bass, claps) plus boing, pop, ding, slide whistle, and a record scratch on "???".

## Signature features and key techniques

Emotional decorative captions from TV variety show post-production: multi-stroke rounded type with elastic entrances that changes color and shape with the person's mood, paired with hit sound effects. It has spread down to vlogs, pet videos, interviews and comedy remixes as a general packaging language; CapCut ships many such caption templates and free style packs circulate on Bilibili.

Visual features: multi-stroke rounded or chubby type, saturated clashing colors with white edges and drop shadows, elastic pop entrances, timed with sound effects, hand-drawn decoration symbols (explosion frames, sweat drops, sparkles).

Key techniques:
- Three-layer type: fill color, thick white stroke, colored outer stroke or shadow (simulate with stacked `text-shadow` in CSS or an SVG stroke).
- Overshoot entrance: scale 0 to 1.15 to 1.0 (about 8 frames), or per-character bounce staggered by 2 frames.
- Match the emotion: slanted handwriting for sarcasm, a radial explosion frame for surprise, sweat drops for awkwardness.
- Time the appearance to the punchline or sound effect; 2 to 3 frames after the speech feels more natural.
- Captions that stay on screen a long time get a slight wiggle to stay alive.

## Sound in Subclip

`search_public_audio` for "pizzicato comedy loop" (CC0 first) and `source: "sfx"` for boing, pop, ding, slide whistle, record scratch, each on its caption frame.
