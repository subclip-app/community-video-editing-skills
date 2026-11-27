# Presets, fills and hand-written fonts

All values are Rough.js options. Pass them with a fixed `seed` (an integer above 0) on every shape. `seed: 0` or no seed makes Rough.js pick a random seed, so the drawing changes on every seek. Never ship that.

## Pen presets

| Preset | Look | Options |
| --- | --- | --- |
| pencil | Thin graphite on paper, two loose passes per line | `stroke: '#2b2b2b', strokeWidth: 2, roughness: 1.6, bowing: 1.2, hachureGap: 7, fillWeight: 1` |
| marker | Bold whiteboard marker, one confident pass | `stroke: '#1f2a44', strokeWidth: 4.5, roughness: 1.1, bowing: 0.8, hachureGap: 11, fillWeight: 3, disableMultiStroke: true` |
| chalk | Wide, wobbly chalk on a dark board | `stroke: '#f4f1e8', strokeWidth: 3.5, roughness: 2.4, bowing: 1.6, hachureGap: 9, fillWeight: 2` |
| blueprint | Neat drafting lines on blue paper | `stroke: '#e8f1ff', strokeWidth: 2, roughness: 0.6, bowing: 0.3, hachureGap: 6, fillWeight: 1, hachureAngle: -45` |

Backgrounds that suit each preset: pencil on warm paper `#fbf8f1`, marker on white `#ffffff`, chalk on board green `#23352b` or slate `#1e2326`, blueprint on `#1d4f91` with a faint grid.

Tuning:

- `roughness` 0 is a clean line. 1 is the default sketch. Above 3 looks scribbled.
- `bowing` bends straight lines. Keep it under 2 for diagrams people must read.
- `strokeWidth` above 6 reads as a highlighter. Pair it with a light, semi-transparent color for underline marks.
- `disableMultiStroke: true` draws one pass instead of two. Use it for marker and for anything that is drawn on, so the reveal does not trace every line twice.
- `preserveVertices: true` keeps the corners of a polygon exactly where you put them, useful when arrows must meet a box corner.

## Fills

Set `fill` to a color and `fillStyle` to one of:

| fillStyle | Use for | Extra options |
| --- | --- | --- |
| `hachure` (default) | Most boxes and bars | `hachureGap`, `hachureAngle` (default -41), `fillWeight` |
| `cross-hatch` | The one bar or box that matters most | Same as hachure |
| `zigzag` | Headers, banners, a filled strip | `hachureGap`, `zigzagOffset` |
| `dots` | Images or placeholders inside a mockup | `hachureGap` sets the spacing, `fillWeight` the dot size |
| `dashed` | Areas that are planned or not ready | `dashOffset`, `dashGap` |
| `zigzag-line` | Loose scribble fill | `zigzagOffset` |
| `solid` | Status dots, small icons, legend swatches | none |

Rule of thumb: one cross-hatched or red element per frame. It is the answer. Everything else is hachure in a calm color.

## Hand-written fonts

Layers load Google Fonts through a stylesheet link (`https://fonts.googleapis.com/css2?family=...&display=block`). These families have a free license (SIL Open Font License) and the editor ships Caveat and Permanent Marker for its own templates:

| Font | Pairs with | Note |
| --- | --- | --- |
| Caveat 600 or 700 | marker, pencil | The default. Easy to read at 44 px and up. |
| Permanent Marker | marker titles | Heavy. Use for one title or one callout word only. |
| Patrick Hand | pencil labels | Neat print. Good for long labels and numbers. |
| Kalam 400 or 700 | pencil, chalk | Slanted note style. |
| Architects Daughter | blueprint | Drafting style capitals and numbers. |
| Gochi Hand | chalk | Rounded and friendly on dark boards. |

Check the font in a rendered frame before you rely on it. If it falls back to a system cursive face, switch to Caveat, which is known to load in preview and export.

Keep labels as HTML text over the SVG (absolute `div`s), not as Rough.js shapes. Reveal them with an animated `clip-path: inset(...)` from left to right. Never put a CSS `filter` on text or on a parent of text.

## Line boil (only when asked)

A still sketch is the default. When the creator asks for the hand-animated boil look, prebuild two or three versions of each shape with seeds `seed`, `seed + 100`, `seed + 200` and show one at a time on a fixed step, for example every 0.25 s on a 2 s or 4 s loop (8 or 16 steps). Drive the swap from the timeline with `tl.set(groupA, {opacity: 0}, t)` calls, never with a timer, so seeking to any time shows the same version.
