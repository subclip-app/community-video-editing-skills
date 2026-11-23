# Decision Tree (frame-decision-tree)

Best for: How-to flow, decision branching, process diagram, a friendly sticky-note flowchart.

## Canvas and engine

HyperFrames, 16:9, 12 to 15 s.

## Look

Palette: White dotted-grid canvas (#E5E5E5 dots, 20 px spacing), sticky colors yellow, green, peach, lavender, blue and pink, dark connectors #333 at 4 px, red squiggle #E53935.

Type: Inter, medium to semibold, centered text in rounded 12 px sticky notes.

## Layers

- Root sticky at the top center, two children, four leaves (1 + 2 + 4).
- Elbow connectors drawn as SVG paths between levels, with small labels (Yes, Not sure).
- A pointer cursor with a name tag, a selection border, a squiggle under a typo and a thumbs-up emoji.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 root scales from 0 to 1 over 0.4 s (power2.out); hold 0.6 s.
- t=1.0 two connectors draw over 0.5 s (linear dash offset); labels fade at t=1.25; children pop at t=1.4 and 1.6 (back.out 1.7).
- Hold 0.5 s, then four connectors draw over 0.4 s and four leaves pop 0.15 s apart.
- Cursor drifts in over 1 s to the lavender leaf, clicks (scale 0.8 and back), a selection border appears; a double click highlights the typo, the text retypes letter by letter 0.05 s apart, the squiggle disappears.
- Cursor clicks away, the thumbs-up pops (back.out 2), hold 2 s, fade to white over 0.5 s.

## Signature to keep

Each branch grows in order; a small cursor story corrects a typo.

## Notes for Subclip

Write the tree from the creator's real decision: one question, two answers, up to four outcomes. Do the typing step with fixed text states placed on the timeline, not a timer.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-decision-tree by nexu-io, Apache-2.0.
