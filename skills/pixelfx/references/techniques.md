# Pixel art effect techniques

The craft behind the 244 effects, from pixelfx and from Hugo Duprez's method at Sprite Fusion ("How to make good pixel art effects": code is clay, trust your eyes, feed your references). Read this before drafting a new effect.

## The bar: what makes an effect good

1. **Lines and light, not fills.** Build with 1 px rims, rings, trails and sparks, and let light carry the brightness. A big flat area of saturated color is almost always wrong. White-hot cores and edges, tinted middles, deep color only in shadow.
2. **Light everywhere.** A big soft pool at low strength, a tight hot one at the core, a light on every spark and glint, lights that flare at the moment of impact and fall away, light along arcs and beams, a warm or cold pool on the floor while something burns or freezes.
3. **Translucent volumes.** Smoke, vapour, dust and mist are soft (translucent discs, lit on top, swelling and thinning). Never a dithered checkerboard for smoke.
4. **Real motion.** Sparks stretch with speed, fall and bounce. Debris tumbles, bounces, settles and fades. Fire rises and cools into smoke. Things that land kick up dust. Use drag: fast burst, slow drift.
5. **Choreography in phases.** Anticipation or charge (things gathering in), release (a 1 to 2 frame white hero frame, a flare, light, a burst), spread, hold (twinkles, glints, embers), break or melt, a long decay. Many small events, each varied in size, speed, timing and life.
6. **Depth.** Rings on the floor are flat ellipses with a far half behind the subject and a near half in front. Back rows of crystals or flames are dimmer.
7. **Timing.** Fast attack, slow release. Big effects linger 2 to 4 seconds while smoke clears and sparkles fade. Hits are snappy (0.3 to 0.8 s) but keep follow-through.
8. **Reads at 1x** with a clear focal point and no speckle noise inside shapes.
9. **Original.** Generic motifs are fine. Never recreate a specific game's sprite, character or logo.
10. **Clean.** Fits its canvas, ends empty or loops clean, deterministic, cheap per frame.

## Color

- Use a ramp: 6 to 8 steps, dark to bright, with hue shifts (shadows lean cool or deep, highlights lean warm or white). See [palettes.md](palettes.md).
- Pick a step; do not blend between two (`at(ramp, t)`). Pixel art chooses a color. Blending is only right for light and translucent smoke.
- Recoloring is one swap of the ramp: a blue fire is the fire recipe with the ice ramp.
- Keep white for the hottest core only.

## Dithering and translucency

- Alpha below 1 on a solid pixel becomes an ordered 4 by 4 Bayer dither: a pixel at alpha `a` is drawn when `a` is above the threshold of its cell. This gives the classic pixel fade.
- Truly translucent blends are for smoke, vapour and mist only.
- Additive light is the only smooth gradient allowed.

## Particles and what each one is for

| Kind | Look and behavior |
| --- | --- |
| Spark | Speed-stretched two-tone streak, gravity, bounces on the floor, glows |
| Mote | Streak with a dark tail that dithers out |
| Streak | Accelerating dotted line: energy gathering in |
| Flake | Drifting speck, a cross when big |
| Vapour | Soft translucent puff that swells and thins |
| Dust | Denser puff, kicked up on landings |
| Smoke | Three soft discs with a lit cap, rises and sways |
| Fire | A ball of flame cooling down the fire ramp as it rises, turns to smoke when it dies |
| Brand | Burning chunk that trails flame and keeps burning where it lands |
| Grit | Falling bits that bounce once and settle |
| Ember | Rising, wandering, cooling |
| Star | Twinkling cross |

Rigid debris (shards, chunks, drips) tumbles, bounces, settles, fades. Lights flare and die with strength falling with life squared. Rings on the floor: draw an ellipse about 0.16 as tall as wide, the far half behind the subject, the near half in front. Gravity: about 950 px per second squared at pixel scale.

## Easing

Fast in, slow out. `outQuart` and `outExpo` for bursts. A 1 to 2 frame white hero frame at the moment of impact. Shorter total time beats longer when an effect feels floaty.

## Look, judge, fix (the loop)

1. Say it in one line with art direction: what it is, how it moves, its palette, its timing. "A frost nova: crystals erupt in a ring from the feet outward, a white flash at the center, shards spin off, the floor stays frosted and fades."
2. Find the closest rows in [catalog.md](catalog.md) and borrow their phase lists.
3. Draft 3 to 5 genuinely different versions when the direction is open (separate layers or revisions). Look at every one before choosing.
4. Look with `view_current_frame` at the hero frame, the middle and the tail, and with `get_timeline_contact_sheet` across the time range. Judge like a picky pixel artist. Fix the worst thing and look again. Three rounds minimum; a showpiece takes more. Motion, pace and feel can only be judged on playback.
5. Delete the drafts you did not keep (only ones this run made).

| You see | Fix |
| --- | --- |
| Reads as mush at 1x | Fewer colors, a clear silhouette, one focal point, bigger shapes |
| Speckle: lone noise pixels inside shapes | Threshold noise less, quantize with ramp steps, no noise on small shapes |
| Floaty, no punch | Fast in, slow out, a 1 to 2 frame white hero frame, shorter total time |
| Stiff or mechanical | Vary every particle (size, speed, delay, life), add secondary motion (sparks, smoke, debris) |
| Washed out | Less glow (strength 0.2 to 0.5), darker edge steps, white only for the core |
| Flat | Light from one side: brighter top-left, darker bottom-right; a darker ramp step at the base |
| Smooth gradients, vector look | Hard ramp steps in color; softness only in light and translucent smoke |
| A checkerboard where smoke should be | Translucent discs, lit on top |
| Seam when a loop wraps | Use phases that wrap exactly, whole-cell scrolls, `sin(phase * TAU * n)` with whole n |
| A one-shot that pops off | Let it shrink, dither out or fall away before the end |

## Hit-stop, shake and anticipation (the "act")

In pixelfx a character winds up, freezes on contact and recovers. A hit with no body behind it looks like a sticker. In Subclip the body is the creator's footage or sprite, so apply the same timing with native tools:

- **Wind-up** before the effect starts: a small move the opposite way to the blow (`add_media_keyframe` on the subject, 0.1 to 0.3 s).
- **Freeze on contact**: hold the picture for 0.03 to 0.2 s (heavier blow, longer). Hold the keyframes and let only the effect's light flare.
- **Shake**: after contact, 2 to 3 px of position shake on the footage for 0.15 to 0.2 s (alternating `add_media_keyframe` points, a frame or two apart, decaying).
- **Recovery** and follow-through: an overshoot that settles.
- Line the effect's origin up with where the blow lands, and set its start time from the effect's own hit moment, not a time you eyeballed.

## Using an effect in a Subclip edit

- The effect is a transparent layer over footage; place it in a contained box at the point of action (`add_runtime_layer`, x and y as canvas percent), or full frame for a transition.
- For an effect that should look like game footage, composite pixel art over a dark background; additive light reads best over dark scenes. Over bright footage, recolor with a darker ramp.
- Match the pixel scale to the project: if the effect is 160 by 90 at scale 6 on a 1920 by 1080 canvas, one art pixel is 6 screen pixels. Never mix scales in one shot.
- Keep sound in native audio lanes: a hit sound at the hero frame (`search_public_audio`, `import_public_asset_to_timeline`, or `generate_music` for stings).
- Sprite sheets are not produced here; the effect is rendered by the layer on every export.
