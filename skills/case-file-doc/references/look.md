# Look

Four physical worlds that read as one investigation: the case file on a concrete wall, the document under a
camera, the newspaper that tells the story, and the evidence board in the dark.

## Frame

- 1920 by 1080, 30 fps, with a **2.39:1 letterbox**: black bars 138 px tall at the top and bottom, above
  everything else in each scene. The picture lives between y 138 and y 942; keep text and faces between y 160
  and y 900.
- Film grain over the picture: a seeded noise canvas at about 20% opacity with overlay blending, moved to a new
  seeded position every two frames (see subclip-build.md).
- Neighbouring scenes overlap by 0.1 to 0.4 s or meet on a dip to black, so each exit reveals the next world.
- The dark look belongs inside the scenes. Plain beats between scenes (a line of type, the title) can sit on the
  project's own ground; on a white ground use ink `#141210`, red `#c8102e` and navy `#153592` text.

## Worlds

| world | ground | light | how media is treated | used for |
|---|---|---|---|---|
| wall | concrete `#46484c` with noise, radial shade to 55% black at the edges | flat and cool | portraits clean or black and white in polaroids | the date hook, the title |
| document | paper `#e2d4b8` or newsprint `#e8e2d4` on a tilted plane over a dark `#1a1714` backdrop | soft, darker bands top and bottom | the real screenshot or the exact published text | primary documents, reports |
| newsprint | newsprint with six columns of faint ghost text at 15% ink | flat | black and white, high contrast | who they are, the rise, report spreads |
| board | cork under a 94% dark vignette with one warm spotlight | one moving spot | sepia | the people, the links, the question |
| footage | full frame clip with a bottom scrim | as shot | black and white for news, colour for keynotes | the rise, soundbites |

Grade photos and clips before they enter a scene (for example with `add_media_effect` on a native item, or a
graded copy the creator supplies). Do not put CSS filters on text or on cards that hold text.

## Colour tokens

```
ink        #141210   soft ink #1d1a16 / #26221c
paper      #e2d4b8   newsprint #e8e2d4   card #f4efe2   polaroid #efe9dc to #f6f2ea
concrete   #46484c   behind it #2c2e31   board dark rgba(8,6,3,.94)   document backdrop #1a1714
red        #c8102e   one hit word per shot, marker strokes, stamps; string #b3121f; bright marker on dark #ff2a3d
yellow     #f2d300   highlighter, about 62% of the line height
lime       #c9d400   only the year bar under a date stamp
orange     #e8701a   one rule on the title card
tape       #151412   with cream #efe7d6 text
```

## Type

| role | family | size |
|---|---|---|
| display, names, slams, dates | Anton | 150 to 500 px, slight negative tracking, line height 0.9 |
| documents, mastheads, ghost columns | Old Standard TT (regular, bold, italic) | 46 to 70 px for documents, 15 px for columns |
| typewriter, source tapes, captions on clips | Special Elite | 28 to 56 px |
| hand labels on photos, the question | Permanent Marker | 30 to 76 px |
| spare mono | Courier Prime | |

Anton, Old Standard TT and Courier Prime ship in `assets/fonts` under the SIL Open Font License. Inside
HyperFrames layers, load all five families from the pinned jsDelivr `@fontsource` URLs in subclip-build.md,
because layer code cannot read local font files.

## Motion

- Arrivals: expo.out or power2.out, 0.45 to 0.7 s. Slams: a hard set or 0.1 to 0.13 s. Exits: power3.in,
  0.25 to 0.45 s.
- Every scene has one slow camera for its whole length (scale 1.0 to about 1.05, or a pull from 1.12 to 1.0).
  Moves between subjects take 0.5 to 0.7 s with power2 or power3 inOut.
- A highlighter or typewriter lasts as long as the narrator takes to read those words.
- Something changes every 0.5 to 1.5 s (a word, a highlight, a camera move, a string). A still hold over 2 s is
  a mistake unless a line is typing or the camera is travelling.
- Titles and words land and stop. Nothing drifts after it lands except the scene camera.
- Animate transforms, opacity, clip-path, background-size, CSS variables and SVG attributes. Never top, left,
  width or height.

## Banned

Chapter cards between beats, pop-in on every element, a dark void with floating cards, glow, particles, lens
flares, purple or neon gradients, a coloured box rotated behind a logo, filters on photos or text inside a
layer, AI-made or glamour photos, an on-screen claim without a source tag, a docked channel logo.
