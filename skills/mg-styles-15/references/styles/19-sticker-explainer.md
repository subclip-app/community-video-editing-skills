# Bold-outline Sticker Explainer (PaperClip and Lin Chao style)

Original film: "How Many Elements Hide in a Phone?" (70 of 118). 1920x1080, 30 fps, 10 s, final jury score 7.71 / 10. The original copy is Chinese; this edition writes it in English. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/19-paperclip.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/19-paperclip).

Pick it for: hard science and finance explainers, corporate knowledge videos, data-heavy stories told fast.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

- Photos: the creator's product shots, or licensed stock via `search_public_media` and `import_public_asset_to_timeline` (keep attribution). Cut out with `remove_media_background`.
- One HyperFrames layer per camera stretch: a huge inner canvas (for example 6000x3000 px) inside a wrapper whose transform is the camera (long eases between information points), stickers as imported images with a 10 px white outline and soft shadow, SVG charts drawn to scale, count-ups from the seek time.
- Narration first when narrated: `generate_local_speech` for a free draft or `generate_speech` after the voice is approved, then time each sentence's new element to the imported audio.
- Upstream route: one huge canvas with a camera transform (long eases), SVG charts, photo stickers with a 10 px white outline.

## Creative seed (swap this)

"PaperClip-style hard science." The PaperClip knowledge video look: sticker-ized photos plus flat icons plus precise charts on a giant canvas with continuous camera moves.
- Topic (write your own tight copy), for example "How many elements hide in a phone?".
- A calm blue-grey or off-white canvas (#E9EEF2 and slate), 2 to 3 colors plus one accent (for example #FF5A36); equal-weight sans typography, strict alignment.
- One continuous camera path: a sticker phone photo (white 10 px outline, soft shadow), exploded-parts stickers with leader-line labels, a periodic table grid where element tiles light up, a bar chart that grows with a count-up to "70+", a world map with supply routes drawing, then a pull-out to a bold typographic title card in the PaperClip manner (heavy sans, huge number, small caption).
- Every beat introduces a new visual element; charts are exact (bars to scale, numbers consistent).
- Sound: a clean tech-explainer bed, UI clicks, ticking during the count-up, a soft whoosh on camera moves.

## Signature features and key techniques

The standard packaging of knowledge channels made popular by PaperClip: real photos are cut out and given a thick white outline to become stickers, laid out with flat icons and data charts on a big canvas, and the camera pans and zooms to connect the points. Lin Chao and other finance and cross-discipline creators combined it with handwritten boards and formula cards. It is still the main format for hard science, finance knowledge and corporate films.

Visual features: photos turned into stickers (thick white outline), calm blue-grey or off-white base, flat icons plus precise data charts, big-canvas camera pans and zooms, very dense beat-by-beat storytelling.

Key techniques:
- Cut out photos and give them an 8 to 12 px white outline for a unified texture that hides differences between image sources.
- Lay out an extra-wide canvas and move a camera layer (pan and zoom with long ease curves) so one shot strings together many points.
- Chart motion: bars grow, numbers roll as counters, paths draw on.
- Each line of narration drives an element onto the screen: fast speech, and every sentence brings a new visual.
- A restrained palette (2 to 3 colors) and even-weight type keep the serious tone.

## Sound in Subclip

`search_public_audio` for "tech explainer background" or "corporate minimal loop" (CC0 first), `source: "sfx"` for UI click, ticking clock, soft whoosh.
