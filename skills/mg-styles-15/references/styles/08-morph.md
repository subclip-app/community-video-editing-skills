# Shape Morph

Original film: morphe. "One Shape, Every Story". 1920x1080, 30 fps, 10 s, final jury score 7.64 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/08-morph.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/08-morph).

Pick it for: visual storytelling chains, keynote-style feature intros, logo endings, icons that tell a story in sequence.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer with SVG paths. Load GSAP's MorphSVGPlugin from the pinned GSAP 3.15 jsDelivr path if validation accepts it (tune `shapeIndex`); otherwise resample every shape to the same number of points once at load (same start vertex, same winding) and interpolate the point lists from the seek time. Color-field wipes are full-frame rectangles or circles behind the hero shape. Upstream route: SVG with flubber or GSAP MorphSVGPlugin (tune shapeIndex), color-field wipes.

## Creative seed (swap this)

"Everything connects." A keynote-grade morph chain: one hero shape continuously becomes 6 to 8 meaningful icons, on the beat.
- Chain example: coffee cup, circle, sun, sunset over the sea, gull, paper plane, location pin, heart, then an invented brand logo "morphe" with wordmark.
- Every A to B passes through a simple intermediate (circle or capsule) with rotation and 10 to 15% squash and stretch; sub-parts morph in sync (steam to sun rays to waves).
- Background color fields change with each morph (clean color-block wipes); ease `cubic-bezier(0.7,0,0.3,1)`, 3-frame cushions at start and end; no knotting or tangling ever (check stills at the midpoint of every morph).
- Sound: a rhythmic plucky arpeggio; a pitched whoosh per morph, landing on the beat.

## Signature features and key techniques

One shape turns smoothly and continuously into another: a phone becomes a map pin, a coffee cup becomes a sunset. It is the core grammar of visual storytelling and the most demanding part of keynote motion and high-end explainers.

Visual features: outlines that change continuously with no jumps, intermediate shapes as bridges, morphing combined with movement and rotation, squash and stretch at the moment of change.

Key techniques:
- Path alignment comes first: both shapes need the same number of vertices and matching first-vertex positions (reset the first vertex in After Effects), or the morph will knot.
- A complex A to B never morphs directly: first collapse to a simple intermediate (circle or capsule) and then expand; A to circle and circle to B take 8 to 12 frames each.
- Add 10 to 15% squash and stretch and a slight rotation throughout the morph to hide the mechanical look of interpolation.
- Fastest in the middle with `cubic-bezier(0.7,0,0.3,1)`: leave 3 frames of cushion at each end.
- On the web, flubber or polymorph libraries give optimal vertex matching, far better than naive SMIL.

## Sound in Subclip

`search_public_audio` for "pluck arpeggio loop" (CC0 first) and `source: "sfx"` whooshes, one per morph on the beat.
