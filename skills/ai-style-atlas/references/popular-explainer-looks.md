# Popular Explainer Looks (6 of 7 listed)

Styles from the AI Style Atlas by Futurepedia (https://www.futurepedia.io/resources/ai-style-atlas/view), described and recipe-d in our own words. Each entry links to the atlas.

## Flat-Vector Science (#01)
Source: [AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view)
Look: space-science illustration with smooth gradients, no outlines, round friendly characters, glow and stars.
Make it: HyperFrames SVG layers, one group per object. Palette: navy #0B1033 to violet #4B2A8A, cyan #26C9D5, warm yellow #FFC857. Motion: slow parallax drift on stars, gentle bob on characters, eased 0.6 s entrances. Captions: rounded sans, white, no outline.
Check: no hard strokes on shapes, and gradients stay smooth at 1080p.

## Tech Glow Explainer (#06)
Source: [AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view)
Look: dark indigo tech video with a faint perspective grid, neon-edged cards and glowing connected node diagrams.
Make it: HyperFrames layer. Palette: #0A0F2C base, electric blue #3B6CFF, cyan #26C9D5, magenta accent. Motion: a light pulse travels along each connector as the narration names the step; cards fade up 12 px. Bloom with a blurred duplicate at low opacity.
Check: glows do not wash out text; contrast stays readable on a frame view.

## Papercraft Models (#07)
Source: [AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view)
Look: objects that read as folded printed cardstock with visible seams and tabs, on a green craft mat.
Make it: generated image or video (`generate_ai_media`) with a prompt of your own: boxy low-poly paper figures, dotted fold lines, soft warm key light, green cutting mat. Keep the same mat and light in every scene. Native slow push-ins.
Check: every scene shows seams and the same mat color.

## Manim-Style Math (#09)
Source: [AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view)
Look: pure black canvas, thin crisp vector lines, serif math, axes and curves that draw on.
Make it: HyperFrames SVG with stroke-dashoffset draw-on, no external math tool. Palette: black, blue #58C4DD, teal, yellow #FFFF00 sparingly, red, green. Motion: draw lines over 1 s, transform one shape into the next.
Check: seek to three frames; strokes must be deterministic and crisp.

## Editorial Essay Collage (#11)
Source: [AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view)
Look: warm paper, halftone photo cutouts with torn edges, clipped newspaper text, highlighter sweeps, tape, big condensed headlines.
Make it: HyperFrames layers with a paper-grain overlay; use real or generated cutouts (own or licensed only). Motion: pieces slide in with a slight rotation, highlighter wipes across key words. Palette: cream #F2EBDD, ink black, one accent.
Check: shadows and grain match across scenes; headline is readable.

## Product Launch Reveal (#13)
Source: [AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view)
Look: one glossy hero object on a near-black stage, rim light, a passing highlight, huge clean headlines.
Make it: generate the hero still with `generate_ai_media` (studio product lighting prompt of your own), then native keyframes for a slow orbit-like push and a HyperFrames text layer with a gradient number. Palette: black, white, one brand accent.
Check: the highlight sweep happens once per scene, not constantly.
