# HyperFrames maps

For a general map request the built-in route is the two Remotion map styles in `remotion-motion-layers` (a Cesium globe and a flat vector river map). Use a HyperFrames map when the creator asks for HyperFrames, or after they reject both of those.

1. Apply the creator's feedback on palette, labels, route treatment and camera. If the direction is clear, build without another question.
2. Resolve places to verified coordinates. For a route, use the route geometry tool with exact labels and coordinates and keep the geographic paths and coordinate-bound markers it returns. Never hand-draw continents or approximate borders.
3. Build one standalone document. Put the map, route and markers in one shared world wrapper and keep one projection for the whole shot. Replace any CSS animation rules from the tool output with one paused GSAP timeline, so the same property is never animated twice.
4. Keep the shot readable and seekable: establish the source, travel the route, arrive, hold.
5. Validate, add, then view frames of that layer. If the replacement is for a map made in the same edit, remove that exact rejected item so it cannot cover the new one.

Do not claim satellite imagery, terrain or photoreal cities from vector shapes. If the geographic data is missing, say so instead of inventing an accurate-looking map.
