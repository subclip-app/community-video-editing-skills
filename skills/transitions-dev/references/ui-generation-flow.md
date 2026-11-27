# "Agent is building this UI" moment

Adapted from the transitions.dev UI generation skill, which plays a generation animation over a real element: a dotted drawing measured from the element itself, then the real UI revealed behind a scan line. In a video it sells an AI feature: the chart, card or draft that an agent produces. The upstream runtime is not copied here; build a small seekable version in the same HyperFrames layer as the UI it reveals.

## When

- An AI feature returns UI (a generated component, a chart, a summary card, a draft) and that moment is the point of the scene.
- A launch or demo video that tells the "built by an agent" story.
- Not for small inline UI (under about 120 px, a badge, one button) and not for anything that appears often. Use Skeleton loader and reveal or Texts reveal instead. It is a moment, not a loading state: once per video.

## Variants to choose from

| Element | Variant | What to draw |
| --- | --- | --- |
| Card, panel, component | UI | Dot field, guides past the corners, corner handles, a size label, the outline, then each box, text line and icon in reading order. |
| Headline | Text | Each letter traced in dots, then letters fade in one by one. |
| Subtitle, eyebrow, label | Small text | A dotted line through each line of text; characters appear as it passes. |
| Photo | Image | Frame, tone sketch, halftone, colour dots, then the photo. |

Optional texts beside the element (an agent log, the motion values being written, a step line such as "Planning layout, Drawing structure, Writing styles, Adding motion, Ready") fit showcase and launch videos when there is empty space beside the element.

## Timing

- About 2.4 s of drawing and 2.6 s in all for a UI build; 3 s for a headline. Keep a UI build between 1.6 and 3.6 s.
- Several elements: start each about 260 ms after the previous one.
- Reveal top to bottom behind a scan line with the smooth out easing, while the drawing wipes away.

## Build it seekable

1. Keep the real UI in the DOM from the start and know its boxes: write the rectangles of the card, its text lines and icons as constants in the source (do not measure inside `render`).
2. Draw the dots and guides in an SVG over the card. For a part that starts at `t0` and draws over `d`, set `stroke-dasharray` to its length and `stroke-dashoffset` to `length * (1 - prog(t, t0, d, SMOOTH))`.
3. Size label: show `Math.round(width * p)` by `Math.round(height * p)`.
4. Reveal: clip the real card with `clip-path: inset(0 0 ${100 * (1 - r)}% 0)` and move a 2 px scan line to `top + height * r`; fade the drawing out with `1 - r`.
5. No CSS blur on the card text. Fade and clip instead.

Check the build at its start, at the middle of the drawing, at the scan line half way and at the settled card with `view_current_frame`.
