# HyperFrames captions

Use this when a creator asks for a named caption look, GSAP word-by-word captions or kinetic captions. For plain subtitle fixes or the built-in caption presets, use the native Captions panel instead.

Two things hold the state. The native captions own the words and timing. The HyperFrames layer owns the look. Converting copies the words into the layer variables and hides the native words so nothing draws twice. Nothing is deleted.

## Order of work

1. Words first. If the project has no caption words, transcribe the project for captions and wait for it to finish. Never invent or retype words.
2. Pick the style. Search the official HyperFrames registry for the creator's style name, or for "caption" when none was named. Prefer light styles (text and simple GSAP) over WebGL, Three.js or heavy blur.
3. Read the chosen style's source as reference. Note font, colour, weight, casing, stroke, entrance and highlight.
4. Convert with the style, a pace preset (energetic: 2 to 3 words per group, conversational: 3 to 5, calm: 4 to 6), a position, and explicit style overrides for anything the hints missed. Leave native captions hidden.
5. Look at it: first cue, a spoken moment, last cue. Check legibility over the footage, safe-zone position (bottom 80 to 120 px on landscape, about 600 to 700 px from the bottom on portrait), no overlap with a face, one group on screen at a time.
6. Change options and re-run the conversion; it updates the same layer. Hand edits to the source are lost on re-run, so finish option changes first.
7. Check a short ranged export that includes a cue.

## Rules

- Captions are clamped to the project length. The project duration never changes.
- Never delete native captions unless the creator asks. Hiding is reversible: restore the native captions rather than deleting the layer by hand.
- Fix words in the native captions, then re-run the conversion.
- Never put `filter` or `backdrop-filter` on caption text. Keep the layer transparent.
- Long caption layers export more slowly than native captions. Say so, and split very long videos into ranged exports.
