# Geometric Bauhaus Motion

Original film: KONSTRUKTION, "20 Beats". 1920x1080, 30 fps, 10 s, final jury score 7.71 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/09-bauhaus.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/09-bauhaus).

Pick it for: kinetic posters, music-driven brand idents, event and festival openers, anything rational, graphic and on the beat.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer, SVG or Canvas2D plus GSAP on a strict modular grid, with a beat grid at 120 BPM (one action every 0.5 s). Use `multiply` blending for overprint where shapes overlap. Match the music: pick a 120 BPM loop so beat n lands at `n * 0.5` s. The test film in `examples/` uses this route with 120 px modules. Upstream route: SVG or Canvas with GSAP on a strict modular grid, beat grid at 120 BPM.

## Creative seed (swap this)

"Bauhaus kinetic poster." A Bauhaus 1919 kinetic poster: mechanical, rational, musical.
- Cream paper (#F1E9DA), primaries red #E03C31, yellow #F2B705, blue #1E4FA3, black #111; a strict modular grid (for example 240 px modules); every move is a whole number of modules and every landing is on a grid line.
- 120 BPM (0.5 s per beat): on each beat one module acts: quarter circles rotate 90 degrees about a corner pivot, semicircles slide one module, triangles flip, squares split; rotation pivots alternate (own center, corner, frame center).
- 0 to 2 s: grid lines draw and the first red circle lands. 2 to 6 s: the composition assembles into a Kandinsky or Bauhaus poster. 6 to 8 s: a phase-shifted cascade wave runs across the grid on the drop. 8 to 10 s: freeze into a perfect poster with Swiss typography: "BAUHAUS" set vertically in a heavy geometric sans plus small caps "FORM / FARBE / FUNKTION".
- Easing: power2.inOut or linear, NO overshoot; subtle paper tooth and slight print misregistration are allowed.
- Sound: minimal techno or click: each flip is a pitched click or blip, a kick on quarters.

## Signature features and key techniques

Circles, triangles and rectangles translate, rotate and scale precisely on a strict grid, in a limited palette of the three primaries plus black and white: the ordered beauty of mechanical rationality. It comes from the Bauhaus and Swiss International graphic tradition (Adobe once worked with the Bauhaus archive on the Hidden Treasures project) and is the main language of kinetic posters; it fits musical beats naturally.

Visual features: basic geometric shapes, a limited red, yellow, blue and black palette, strict grid alignment, rotation around geometric centers, modular motion driven by the beat.

Key techniques:
- Every move is anchored to the grid: travel is a whole multiple of the module and every landing falls on a grid line.
- Restrained easing: easeInOutQuad or simply linear; overshoot is forbidden. The mechanical feel is a feature, not a flaw.
- Beat driven: each element appears or flips instantly on a beat point, one action per beat, like cutting to the beat.
- Play with rotation pivots: alternate between the shape's own center, an edge vertex and the frame center to create rhythm.
- Generative variants: in Processing or p5.js, drive a geometric array with phase-shifted trigonometric functions (the mainstream approach in the kinetic poster community).

## Sound in Subclip

`search_public_audio` for "120 bpm minimal techno" or "120 bpm drum loop" (CC0 first) plus `source: "sfx"` clicks and blips on the flips.
