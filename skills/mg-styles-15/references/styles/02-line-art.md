# Line Art / Line Animation

Original film: ATELIER LINEA "One Line". 1920x1080, 30 fps, 10 s, final jury score 7.64 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/02-line-art.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/02-line-art).

Pick it for: luxury, finance and architecture brands, logo reveals, anything quiet, premium and minimal.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer with SVG paths drawn by `stroke-dasharray` and `stroke-dashoffset` (path lengths precomputed once with `getTotalLength`, never measured inside a tween) and GSAP. A virtual camera is a transform on one wrapper group that follows the pen tip. Upstream route: SVG paths + stroke-dashoffset + GSAP; a virtual camera that follows the pen tip.

## Creative seed (swap this)

"One line." A one-line story for a luxury or architecture brand: the whole film is ONE continuous line.
- Deep midnight ground (#0B1320 or near black) and a single champagne gold line (#E9D7A5), constant about 3 px, round caps, a softly glowing pen tip that leads the draw.
- Story (continuous path, the tail of each figure is the start of the next): a seed sprouts into a sapling, branches become the structural lines of a building, the building outline extends into a skyline and horizon, the horizon lifts and loops into a monogram logo, then the LINE-TO-FILL moment (the logo fills with gold from its anchor), then a thin letter-spaced serif wordmark (for example "ATELIER LINEA") fades up.
- Draw speed eases into corners (`cubic-bezier(0.65,0,0.35,1)`); the virtual camera drifts and pushes to keep the tip in frame, then dollies out at the end to reveal the whole drawing composed as a poster; older segments dim to about 35% as the camera moves on.
- Sound: minimal felt piano and a soft string swell; a pen-on-paper whisper whose loudness follows tip speed; a delicate chime on the fill.

## Signature features and key techniques

A single thin single-color line is the only design language. The line draws itself on, extends, turns and transforms into the next figure, and the whole film is one stroke. Very minimal and premium; common in luxury, finance and architecture brand films and logo animations.

Visual features: constant-width thin lines, one or two colors, lots of negative space, lines that keep growing, a moment where line turns into fill.

Key techniques:
- The core is the stroke draw-on: Trim Paths 0 to 100% in After Effects, SVG `stroke-dasharray` and `stroke-dashoffset` on the web.
- Keep the line width constant across the film (2 to 4 px); slow the draw slightly at corners with easeInOut `cubic-bezier(0.65,0,0.35,1)`.
- One-line storytelling: the tail of one figure is the start of the next; connect the paths in advance.
- Line to fill: after the outline is drawn, expand a fill of the same path from an anchor point.
- Small round caps and slight path jitter add a hand-drawn feel.

## Sound in Subclip

`search_public_audio` for "felt piano loop" or "soft piano ambient" (CC0 first) and an SFX chime; a pencil scratch from `source: "sfx"` under the draw, its volume keyed to the busy parts with `update_audio_item`.
