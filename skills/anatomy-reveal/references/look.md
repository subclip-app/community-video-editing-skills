# The look

## Ground

The original draws on warm paper. In Subclip the default ground is plain white (`#ffffff`) with Subclip blue `#153592` for the plate, labels and callouts and cyan `#26c9d5` as the highlight accent. Use the original's warm paper (`#f1ece2`, a soft lighter patch behind the object, a faint warm vignette) only when the creator asks for it; build it from CSS gradients, never from a bitmap, and never put a CSS `filter` on an element that holds text.

## Plate

A thin frame inset from the edges with four corners of small mono text: figure number top left, title top right, the beat's hint bottom left and its readout bottom right. Corner labels sit on a white backing so they stay readable over a dark close-up. Drop the plate only when the creator wants a clean product shot.

## Materials

Each material is four fill tones from dark to light plus an outline ink. A face takes the tone of how it faces the light (upper left, in front), so every part reads as solid in any pose.

| Material | For |
| --- | --- |
| `aluminium` | Bright metal: dials, mounts, buttons, plates. |
| `graphite` | Dark painted or anodised shells. |
| `rubber` | Grips, seals, eyecups, black plastics. |
| `porcelain` | Soft touch white plastics. |
| `glass`, `lens` | Clear glass, coated lens elements. |
| `pcb`, `copper` | Boards, coils, traces. |
| `brass` | Warm metal. |
| `signal` | A red for record buttons and lamps. |
| `sensor`, `cell` | Image sensors, battery cells. |
| `accent`, `navy` | Subclip cyan and blue. `accent` is also the highlight colour. |

A new colour is a new entry in `materials` when creating the kit, ordered dark to light.

## Highlight

The highlight target blends to `accent` tone by tone, its outline turns deep teal, and every other part fades to about a quarter opacity. Highlight one thing at a time, for 2.5 to 3.5 s, with a callout that names it and gives one true number.

## Lines and detail

- Outlines are 1.3 px at every zoom; cylinders draw only their silhouette and cap edges, so they read as smooth.
- Small detail is what a close-up is for: screw heads, ticks, numerals, a screen, a sensor grid. Every region a shot visits needs some, and every detail belongs to a real part.
