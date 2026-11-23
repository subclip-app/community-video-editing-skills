# Export-safe Remotion

Subclip exports Remotion layers with Remotion's client-side renderer. It redraws each element from computed styles and drops anything it has not implemented. A layer that looks right in preview can lose elements in the export. Source of the supported list: the Remotion client-side rendering limitations page.

## Supported

- Layout: margin, left and top, display, width, height, flex, overflow, object-fit.
- Transforms, transform-origin, translate, scale, rotate, opacity.
- background-color, text background clip, linear-gradient backgrounds.
- Borders, border-radius, outline, plain box-shadow (offset, blur, colour).
- Text: colour, font family, size, weight, style, line height, letter and word spacing, text-transform, text-shadow, text stroke.
- Filters: blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia.
- Clip path shapes (polygon, path, circle, ellipse, inset) and linear-gradient masks.
- Elements: media-package video and audio, Img (including SVG data URIs), inline SVG, Gif, Lottie, ThreeCanvas.

## Never author these

| Avoid | Use instead |
| --- | --- |
| z-index | Order the JSX back to front |
| backdrop-filter | A semi-opaque colour or a pre-blurred image |
| mix-blend-mode, background-blend-mode | Pre-mixed colours or an image |
| radial, conic and repeating gradients | Linear gradients, or an SVG radial gradient inside an inline SVG |
| background-image: url() | An Img element with object-fit |
| inset or spread box-shadow | A border, an inner element or outline |
| object-position | A clipped wrapper with an offset child |
| perspective, transform-style | 2D transforms, or the 3D canvas for real 3D |
| writing-mode | Rotate the text with a transform |
| filter, clip-path or mask pointing at an SVG id | The filter functions and clip shapes above |
| iframe | Render the content directly |
| off-thread video components, Html5 video and audio | The media package components |

Fonts used inside SVG text must be loaded through the Remotion font packages and chosen inside the SVG markup.

## Before saving

1. Validation shows no "Export can't draw this" warnings.
2. Stacking is JSX order, not z-index.
3. Every gradient is linear, or lives inside an inline SVG.
4. A short ranged export of the layer shows the same elements as the preview.

If an element is still missing after export, the supported recovery is to rebuild that layer faithfully in HyperFrames (see `hyperframes-motion-layers`) rather than simplifying the design.
