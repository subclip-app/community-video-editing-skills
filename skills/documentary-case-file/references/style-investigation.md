# Style: large-scale investigation

For stories at geographic scale: a vanished aircraft, a ship lost at sea, a search operation, a spreading wildfire, a border incident. The world is the evidence board: night satellite maps, animated flight paths, radar sweeps, topographic terrain and god's-eye wides.

## Visual DNA

- Night-dark cartography: dark ocean, unlit terrain, city lights as texture. Darkness gives the glow elements their authority.
- Glow carries the data: route lines, radar arcs, ping ripples and search grids in amber and cyan against deep navy.
- Real topography: relief, coastlines, ridgelines. The map must feel like a measured place, not a decorative graphic.
- HUD-adjacent, never literal: thin tick marks, brackets, faint rings. No readable words or numbers; real labels are added in the edit with native text where they stay crisp.
- Atmosphere over the map (haze, thin cloud, moonlight on water) separates cinematic cartography from a slide.

## The style suffix (lock 1; the accent pair is fixed for this format)

`Cinematic satellite-documentary map graphics, dark night terrain and ocean tones, deep navy palette with amber and cyan glow accents, glowing route lines, radar sweeps and abstract HUD tick marks with no readable text, soft atmospheric haze over detailed topographic relief, filmic grade, high-end motion-design render, no text, no watermark, 16:9`

Append it unchanged to every image and video prompt. Swap the aspect if needed.

## Asset scaffolds (IDs MAP, TER, OVL, VEH instead of CHAR, LOC, PROP)

- Base map (MAP): "Satellite night view of [region: what is in frame, orientation, how much coastline and terrain], seen from high orbit at a slight angle; no labels, no markers yet." plus the suffix. The region every block returns to.
- Terrain plate (TER): "Low-altitude 3D terrain view of [ridgeline, strait, runway approach], topographic relief detail, night atmosphere." plus the suffix.
- Overlay element (OVL): the data marks as glowing shapes, such as an amber flight path arcing over dark ocean, a cyan radar ring with a fading sweeping trail, a rectangular grid of faint cyan cells, an expanding ping ripple, placed over the base map context.
- Vehicle (VEH), only when the story tracks one: a stylized aircraft or vessel with a clean simplified silhouette, seen from above and slightly behind, night lighting, no insignia.

## Motion vocabulary

- Slow orbital drift over the region (the resting state of the format).
- A route line drawing itself across the map in real time.
- A radar arc sweeping with its trail fading.
- A search grid crawling cell by cell across the water.
- Ping ripples expanding at a coordinate, then fading.
- A slow zoom from orbit toward sea level, or the reverse pull-back that reveals how big the search area is.
- Cloud and haze sliding under the camera for parallax.

## Motion prompt scaffold (one scene, up to 30 seconds)

```
Continuous sequence over one region, no cuts.
SETTING: <region, night, weather>.
SEQUENCE: 0-8s <motion verb and what appears>; 8-16s <motion verb>; 16-24s <motion verb>; 24-30s <ending move, usually a pull-back that reveals scale, or a hold on the last glowing element>.
AUDIO: deep ambient drone, faint sonar pings or radio static, low pulsing score, subtle; no dialogue, no narration.
<style suffix>
```

One data event per beat: a sweep, a ping, a grid advancing. Two glow events at once read as a screensaver; one at a time reads as an investigation.

## Don'ts

- No readable text or numbers in frame; coordinates and names are edit overlays.
- No cartoon pins, arrows or UI buttons: this is cartography, not an app.
- No daylight unless the story demands it.
- Do not crowd the frame. The best maps are mostly empty ocean with one thing happening; emptiness is the scale.
