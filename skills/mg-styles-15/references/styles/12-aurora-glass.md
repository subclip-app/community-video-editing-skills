# Aurora Gradient and Glassmorphism

Original film: Aurora, "Think in Light". 1920x1080, 30 fps, 10 s, final jury score 8.07 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/12-aurora-glass.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/12-aurora-glass).

Pick it for: AI and software launches, calm premium product reveals, keynote-style UI moments.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer. Draw the aurora as a WebGL mesh-gradient shader or as large blurred circles on a canvas (canvas `ctx.filter = 'blur(120px)'` is fine because it is not a CSS filter on text). Important export rule: never put CSS `filter` or `backdrop-filter` on text or on any element that contains text. Build each glass card as two siblings: a decorative frosted panel (a canvas crop of the blurred aurora, 5 to 10% white fill, 1 px 30% white inner line, large radius) and, above it, an unfiltered text and UI group. The refraction lens is a shader pass or a magnified canvas crop with an offset per color channel on the rim. Upstream route: WebGL aurora mesh-gradient shader, glass refraction (SDF lens, chromatic dispersion), DOM and CSS backdrop-filter glass cards.

## Creative seed (swap this)

"Liquid Glass." The 2025 to 2026 AI product launch aesthetic: slow, translucent, expensive.
- Deep indigo-black base; 4 to 5 aurora blobs (violet, blue, cyan, magenta: adjacent hues only) drifting on bezier paths, blending into a mesh gradient, with 3 to 5% noise dithering (no banding).
- Frosted glass cards (backdrop blur about 30 px, 5 to 10% white fill, 1 px 30% white inner highlight, large radius) float in with parallax depth and a slight 3D tilt; micro UI inside (chat bubble, voice waveform, toggles) animates with opacity plus an 8 px rise.
- WOW: a Liquid Glass lens (true refraction, chromatic dispersion on the rim, specular edge) glides across and magnifies the aurora and the cards.
- Title (an invented product, for example "Aurora, think in light") in a light elegant sans; sine or breathing easing everywhere; nothing fast.
- Sound: an ambient cinematic pad, soft shimmer, very subtle UI ticks.

## Signature features and key techniques

Large Gaussian-blurred colored light blobs (aurora or mesh gradient) drift slowly as the base, and frosted translucent glass cards float above. Apple's iOS 26 Liquid Glass and many AI product launches made this the default look of 2024 to 2026 tech brand films; the mood is slow, translucent and premium.

Visual features: large blurred color blobs drifting, frosted glass cards, a 1 px highlight edge, low-contrast adjacent-hue palettes, a slow breathing rhythm.

Key techniques:
- Aurora base: 3 to 5 large solid circles blurred by 80 to 150 px, each drifting on its own bezier path in a 20 to 40 s loop, blending into a mesh gradient.
- Glass card recipe: backdrop blur 20 to 40 px, 5 to 10% white fill, a 1 px 30% white inner stroke, large corner radius.
- Use 2 to 3 adjacent hues (purple, blue, cyan or orange, pink, red); contrasting hues look dirty; bright blobs on a dark base work better than a light base.
- Overlay 3 to 5% noise everywhere to prevent banding (this crosses over with grain techniques).
- Easing close to linear or a sine breathing curve; everything is slow, fast moves instantly break the mood; text enters only with opacity and an 8 px rise.

## Sound in Subclip

`search_public_audio` for "ambient pad" or "cinematic shimmer" (CC0 first), soft UI ticks from `source: "sfx"`.
