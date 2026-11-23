# HyperFrames layer contract in Subclip

## Standalone document

One HTML document, one visible composition root directly in `body`, fixed pixel size that matches `data-width` and `data-height`, transparent page background.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
      #scene { position: relative; width: 1920px; height: 1080px; overflow: hidden; }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
  </head>
  <body>
    <div id="scene" data-composition-id="scene" data-start="0" data-duration="5" data-width="1920" data-height="1080">
      <div class="card">A seekable scene</div>
    </div>
    <script>
      const timeline = gsap.timeline({paused: true});
      timeline.fromTo('.card', {opacity: 0, y: 48}, {opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'});
      window.__timelines['scene'] = timeline;
    </script>
  </body>
</html>
```

Do not add the HyperFrames runtime script; Subclip injects its own pinned copy. The root size is the layer's local canvas. Where it sits on the project is set by the timeline item rectangle.

## Timing

- Register exactly one paused timeline under the same key as `data-composition-id`.
- `data-duration` is the layer's internal clock and should match the item length.
- Use `x`, `y`, `scale` and `rotation` for motion, and `fromTo` when an element has a starting transform. Do not fight a CSS transform with a tween of the same property.
- Entrances use opacity (or `autoAlpha`), never `display`.
- Keep layout stable while seeking: no measuring inside a tween.
- A payoff beat (a flash, a burst, a reveal) should last at least two output frames and be checked by looking at the frame inside its peak, not at the tween start.

## Pinned runtime

- GSAP 3.15.0 from jsDelivr or unpkg. Lottie 5.13.0 (plain Lottie JSON, no dotLottie packs). HyperFrames 0.8.26.
- Three.js 0.181.2 through the pinned jsDelivr module or import map (`three` and `three/addons/`). Never mix versions. Create the renderer with `alpha: true`, call `setClearColor(0x000000, 0)`, `setPixelRatio(1)`, and render only from a function driven by the seek event. An opaque floor paints its colour into the frame: use a shadow-only material for a transparent overlay.
- Dynamic evaluation, dynamic imports and inline event attributes are blocked.

## Media and size

- Project media (`img`, `video`, `audio`, `source`, SVG `image`) must come from the library URL the asset list returns. Public HTTPS images, fonts and allowed CDN scripts also load, but many hosts send no CORS header, so import the file when in doubt.
- Inline source up to 32 MiB, variables up to 16 MiB. Do not downsample images to fit variables.

## Variables

Put copy, colours, numbers and image URLs in flat variables so a creator can edit them without touching code. Template imports keep defaults and merge overrides by key.

## Small edits

Read the numbered source, then patch only the lines that change using the source hash from the read, so a concurrent edit is never overwritten. Replace the whole source only for a rewrite.

## Heavy scenes

On a machine without a GPU, 3D transforms, perspective, blur, per-image colour grading and WebGL can take minutes per second of video. Prefer light designs there.
