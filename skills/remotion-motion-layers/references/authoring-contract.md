# Remotion layer contract in Subclip

## Component shape

```tsx
import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

type Props = {
  title?: string;
  accent?: string;
  layerDurationInFrames?: number;
  layerWidth?: number;
  layerHeight?: number;
  layerFps?: number;
};

export default function MetricCard({title = 'Launch', accent = '#26c9d5', layerDurationInFrames = 150}: Props) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18, layerDurationInFrames - 12, layerDurationInFrames - 1], [0, 1, 1, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity}}>
      <div style={{padding: '36px 52px', borderRadius: 28, color: 'white', backgroundColor: accent, fontSize: 72}}>{title}</div>
    </AbsoluteFill>
  );
}
```

One named default export. No composition registration, no player, no CSS imports. Keep essential styling inside the component.

## Timing

- Derive every animated value from the frame counter, the injected layer props or the video config.
- Use `interpolate`, `spring` and `Easing`; clamp both sides where a value should stop.
- Local frame 0 is the item's start. `layerDurationInFrames` is its length at the project frame rate.
- Seed any pseudo-random pattern from stable props.

## Props and editability

Copy, colours, counts, URLs and variants go in JSON props: serializable, at most 12 levels deep, no functions or binary data. A creator edits the layer through props, source, timing, rectangle, fit, opacity and lane.

## Approved imports

react, remotion, @remotion/captions, @remotion/effects (and installed effect entry points), @remotion/gif, @remotion/gsap, @remotion/lottie, @remotion/media, @remotion/motion-blur, @remotion/shapes, @remotion/three, @remotion/transitions (and installed presentation entry points), three, d3-geo, topojson-client, the packaged world-atlas countries-50m topology, and Subclip's Cesium facade for globe routes. Nothing else: no arbitrary npm package, dynamic import, require or import.meta.

Pinned versions: Remotion 4.0.530, Three.js 0.181.2, Cesium 1.145.0.

## Three.js

Use the 3D canvas from `@remotion/three` with explicit width and height and `gl={{preserveDrawingBuffer: true}}` so a still-frame export keeps the pixels. Add lights, drive every transform from the frame counter, never use the render-loop hook from React Three Fiber, and give any sequence inside the canvas `layout="none"`.

## Lottie and media

Lottie data arrives as validated JSON props, never fetched inside the component. Embedded video and audio come from the media package, with library URLs.

## Not available

No `Composition`, `registerRoot`, static-file helper, CLI render, Studio or cloud renderer: the layer is a component inside Subclip, not a standalone project.
