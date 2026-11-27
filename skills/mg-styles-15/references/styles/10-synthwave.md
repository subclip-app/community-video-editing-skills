# Retro: 80s Synthwave, VHS and Y2K

Original film: NEON DRIVE, "Midnight 1986". 1920x1080, 30 fps, 10 s, final jury score 8.21 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/10-synthwave.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/10-synthwave).

Pick it for: music releases, retro gaming, nostalgic brand drops, night-drive moods.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer: a WebGL or Canvas2D perspective grid, striped sun and wireframe mountains, metallic title drawn on canvas with multi-stop gradients, double glow via canvas `shadowBlur` (never CSS `filter` on text), and a VHS pass in the same canvas (RGB split by redrawing channels offset 1 to 2 px, scanlines, seeded tracking glitches on fixed frames). Upstream route: WebGL perspective grid, sun and mountains shader, canvas metallic text, CSS and SVG glow, VHS pass.

## Creative seed (swap this)

"OUTRUN 1986." The quintessential 80s synthwave title sequence.
- Starry night, a striped retro sun (horizontal band cut-outs, magenta to orange to yellow), wireframe mountains, palm silhouettes, a neon magenta and cyan perspective grid rushing toward the camera.
- 0 to 1 s: VHS tracking noise and a "PLAY" on-screen display. 1 to 4 s: the camera flies low over the grid, the sun rises. 4 to 6 s: a MIRROR-METAL title (for example "NEON DRIVE": multi-stop metallic gradient, bevel highlight, a star glint sweeping across) SLAMS in with a lens flare. 6 to 7.5 s: a pink neon script word (for example "Midnight") writes on like a neon tube with flicker. 7.5 to 10 s: sustained ride, subtle VHS chroma bleed and scanlines, ending on the hero frame.
- Double glow (tight about 4 px plus wide about 30 px), deep purple sky gradient.
- Sound: synthwave: gated reverb snare, arpeggiated saw bass, lush pads, a big chord and crash on the title slam.

## Signature features and key techniques

A wholesale quotation of one era's media aesthetics. 80s synthwave is a neon grid plus sunset gradient plus mirror-metal type; VHS is scanlines plus color shift plus tape noise; Y2K is liquid mirror metal, acid green and purple, skeuomorphic system windows and low-fi 3D. Y2K has come back strongly in music videos and streetwear brand films over the last two years, and template markets are full of acid metallic assets.

Visual features: neon glow, a perspective grid horizon, scanlines and RGB shift, mirror-metal type, acid colors, skeuomorphic window UI.

Key techniques:
- Synthwave trio: a scrolling perspective grid (one-point perspective grid with a looping vertical offset), a multi-layer gradient sunset disc, and a double glow (an inner tight 4 px highlight plus an outer loose 30 px glow at low opacity).
- VHS aging chain: RGB split (red and blue channels offset 1 to 2 px), then scanlines (10% black bars every 2 px), then wave distortion jitter (1 to 2 random glitch frame drops per second), then a 4:3 rounded-corner mask.
- Y2K mirror-metal type: a very high contrast multi-stop metal gradient plus a bevel highlight plus environment-map style reflections, with a lens flare.
- Y2K motion language: pop-up style appearances, cursor clicks, window drags; the skeuomorphic interface itself tells the story.
- A deliberately unstable frame rate: drop key passages to 15 fps or play 2 frames backwards to fake tape stutter.

## Sound in Subclip

`search_public_audio` for "synthwave loop" or "retrowave" (CC0 first; many results are CC BY, keep the attribution), `source: "sfx"` for crash, tape stop, whoosh.
