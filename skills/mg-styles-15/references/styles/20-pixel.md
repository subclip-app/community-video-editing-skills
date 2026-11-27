# Pixel Art / 8-bit

Original film: PIXEL QUEST. 1920x1080, 30 fps, 10 s, final jury score 8.07 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/20-pixel.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/20-pixel).

Pick it for: game channels, indie game trailers, chiptune music videos, nostalgic brand moments.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer with a 320x180 canvas scaled by CSS to 1920x1080 (exactly x6) with `image-rendering: pixelated`; sprites authored as pixel arrays in code; a limited palette; positions rounded to whole pixels; sprite frames stepped from the seek time (`Math.floor(t * 10) % 8`). A CRT pass draws scanlines on a second full-size canvas so pixels stay crisp. Upstream route: Canvas at 320x180 internal resolution, integer-scaled x6 with nearest neighbor, sprites authored as pixel arrays in code, limited palette.

## Creative seed (swap this)

"PIXEL QUEST." A retro side-scroller title or attract sequence.
- Internal 320x180, x6 nearest neighbor; a limited palette (PICO-8-like, 16 to 32 colors) with a dithered sky gradient; 3 to 4 parallax layers (sky, far mountains, mid forest or city, near ground tiles) moving by whole pixels.
- A hero sprite (hand-authored 16x16 to 24x24, a 6 to 8 frame run cycle at about 10 to 12 fps) runs, jumps, collects coins (sparkle) and bops a slime; the palette shifts from day to sunset; a treasure chest opens with a light burst.
- A dialogue box with a pixel font typing "Welcome to the pixel world!"; a chunky pixel logo "PIXEL QUEST" drops in with a shine sweep; an optional CRT pass (scanlines, slight barrel, phosphor glow) that does not blur the pixels into mush.
- Strictly: nearest neighbor, integer pixel positions, stepped timing (no smooth easing on sprites).
- Sound: chiptune (pulse lead, triangle bass, noise drums) plus jump, coin and chest SFX.

## Signature features and key techniques

The retro game aesthetic of big low-resolution pixels, a limited palette and low frame rate sprite animation. Common in game channels (Minecraft, Terraria, indie games), 8-bit music videos and nostalgic brand marketing; Aseprite tutorials have a steady learning audience.

Visual features: big pixels with hard edges, a limited palette (8 to 32 colors), 8 to 12 fps sprite animation, dithered gradients, a CRT scanline filter.

Key techniques:
- Draw sprite sheets in Aseprite and loop frame sequences (walk 6 to 8 frames, breathing 2 to 4 frames).
- Scaling must use nearest-neighbor interpolation (CSS `image-rendering: pixelated`); never allow antialiased blurry edges.
- Animate with `steps()` stepped timing rather than smooth easing, to keep the frame-by-frame feel.
- Parallax scrolling backgrounds: far, middle and near layers move at different speeds by whole pixels.
- Optional CRT post-processing: scanlines plus barrel distortion plus phosphor glow.

## Sound in Subclip

`search_public_audio` for "chiptune loop" or "8-bit music" (CC0 first), `source: "sfx"` for jump, coin, chest, powerup.
