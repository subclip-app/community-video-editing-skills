# Liquid Motion

Original film: drop. "It All Starts with a Drop". 1920x1080, 30 fps, 10 s, final jury score 7.57 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/07-liquid.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/07-liquid).

Pick it for: music videos, food and drink ads, logo reveals, transitions, anything organic and high energy.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer with a WebGL2 fragment shader on one full-frame canvas: 2D SDF metaballs with smooth-min, fake 3D lighting from the field gradient as normals (specular plus fresnel rim), and a text SDF for the logo (draw the word to an offscreen canvas once, blur it, sample it as a texture). Uniform `uTime` comes from the seek time only. A lighter alternative is the SVG gooey trick (`feGaussianBlur` then an `feColorMatrix` alpha threshold) on shapes that contain no text. Upstream route: WebGL2 fragment shader, 2D SDF metaballs with smooth-min, fake 3D lighting from field gradient normals, text SDF for the logo.

## Creative seed (swap this)

"Liquid genesis." A liquid logo genesis: glossy, organic, high energy.
- Deep plum ground; glossy candy liquid (hot orange to pink to violet) with specular highlights and a fresnel rim so it reads like thick 3D liquid, not flat blobs.
- 0 to 2 s: droplets fall and splash with squash on landing. 2 to 4 s: blobs merge through metaball fusion, stretched necks, snap, 2 to 3 frame rebound; secondary droplets follow 2 to 3 frames late.
- 4 to 6 s: a big liquid wave floods across the frame as a transition (wavy front with 3 to 5 phase-offset bulges).
- 6 to 8.5 s: the liquid coalesces into a wordmark (for example "FLUX"): the text SDF blended with the metaballs.
- 8.5 to 10 s: a last drip falls from the logo and ripples; hold.
- Ease: flung, never uniform (`cubic-bezier(0.22,1,0.36,1)`).
- Sound: bubbly gloops, pour, splash, drip, a deep bass swell under a glossy synth bed.

## Signature features and key techniques

Shapes flow like liquid: stretching, dripping, merging. A transition is a splash of paint washing over the screen, and the logo gathers from a single drop. Organic, satisfying and high energy; widely used in music videos, food and drink ads and transition packs.

Visual features: wavy-edged transitions, stretching and dripping, metaball merging, secondary droplets that follow, organic curves and never a straight line.

Key techniques:
- Liquid transition: hand-key a mask path whose wavy front sweeps the frame, with 3 to 5 bulges at offset phases on the front.
- The universal metaball fake: Gaussian blur (20 px or more), then raise the contrast threshold (Levels in After Effects, an `feColorMatrix` alpha threshold on the web); two balls stick together as soon as they get close.
- Stretch, break, rebound: when the main shape leaves it keeps a thin neck; at the moment it breaks, both ends rebound for 2 to 3 frames.
- Ease fast then slow with `cubic-bezier(0.22,1,0.36,1)`; liquid is always flung, never moved at constant speed.
- Secondary droplets follow the main body 2 to 3 frames late (follow-through) and squash flat when they land.

## Sound in Subclip

`search_public_audio` with `source: "sfx"` for bubble, pour, splash, drip, and "glossy synth pad" or "future bass" beds (CC0 first).
