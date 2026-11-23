# Remotion map styles

Two built-in map templates cover most requests. Import one and edit the returned item; do not create both unless asked.

- `map-explainer`: a Cesium globe. Use for a city-to-city journey, a world-scale route, an orbital view, or anything that wraps around the Earth. The camera starts on the source region, pulls back, holds a stable world view while the route draws, then closes on the destination.
- `river-sequence`: a flat vector map from packaged Natural Earth country shapes with an ordered route line, SVG borders and a vector camera. Use for a river, watershed or ordered flow. It needs no network fetch.

Default to the globe for an unspecified map. An exact template choice by the creator wins.

## Rules

- Resolve places to verified coordinates; never approximate geography.
- Surface routes use zero arc height. The host keeps a small clearance and hides far-side geometry.
- Anything asynchronous that must exist in the export uses the render-delay helpers from the current render context.
- Blank or loading pixels are a failed check even if the preview finished loading.
- Elevation terrain and photoreal city flyovers are not available. Do not fake them.
- If the creator rejects both styles, or asks for HyperFrames, use the HyperFrames map route in `hyperframes-motion-layers` (`references/maps.md`).
