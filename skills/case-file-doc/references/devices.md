# Devices and the 11 scene recipes

Each recipe below is one HyperFrames layer (or one part of a longer layer) built on the skeleton in
subclip-build.md. Replace every sample line with real, sourced text, then key each tween to the narration's word
onsets and write the word and time above it, for example `// "Northwest" 8.12: the ticket slides on`. Marker
strokes (underlines, rings, arrows) sit in fixed coordinates: after the text changes, look at a frame with
`view_frame` and move them onto the words. One device carries each line; the rest of the frame holds still or
drifts with the camera.

## Shared snippets

```js
// draw-on stroke: the SVG path has pathLength="100" stroke-dasharray="100 120" stroke-dashoffset="110"
tl.to('#ring', { strokeDashoffset: 0, duration: 0.55, ease: 'power2.inOut' }, t);
// typewriter: one step per character; clip the whole tape box so no empty box shows before typing
tl.fromTo('#line', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.25, ease: 'steps(27)' }, t);
// bar behind a word: a position:relative inline-block wrapper with an absolute .bar child,
// transform-origin 0 50%; give the line isolation:isolate so the bar never drops behind footage
tl.fromTo('#bar', { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: 'power3.out' }, t);
// highlighter: .hl { background-image: linear-gradient(#f2d300,#f2d300); background-repeat: no-repeat;
// background-position: 0 72%; background-size: 0% 62% }
tl.to('#hl1', { backgroundSize: '100% 62%', duration: 1.4, ease: 'power1.inOut' }, t);
```

Do not draw strokes with `vector-effect: non-scaling-stroke` together with `pathLength`: the dash no longer
hides the path and the underline shows before its cue.

## 1. wall-date

The hook. Concrete wall (noise from an SVG `feTurbulence` rect, radial shade). The date in red Anton about
300 px, one `span` per letter, each fading on 0.06 s apart on the spoken date, with a hard drop shadow
`0 5px 0 rgba(20,8,8,.55)`. A lime bar wipes under it (scaleX, 0.35 s) and the year lands on it in ink. A black
source tape types on above. Slow camera pull 1.12 to 1.0 over the scene. The first big hit lands on the date.

Optional on the same wall: a **pinned card or polaroid** (`#f3efe6` frame, red pin as a radial-gradient ball,
Permanent Marker caption) that waits dimmed under a 55% black layer and snaps to full in 0.12 s with a flash
sound on the line that introduces the person; and a ticket, letter or second polaroid that slides in from below.

Exit options: **object becomes the world** (a paper slides up onto the wall, the camera dives into it, scale
about 3.4 with power3.in, and the next scene is that paper full frame) or a push toward one card and a dip to
black.

## 2. document

A 1700 to 2000 px wide paper inside a `perspective: 1900px` stage. The camera is the paper's own transform:
start tilted (rotationX about 24, rotationZ about -4, scale about 1.5), travel along the line being read with
x tweens of 2 to 3 s, end flatter (rotationX about 7, scale about 0.92) to show the page. Old Standard TT
46 px on 76 px lines, the wording exactly as published. Dark gradient bands top and bottom keep the eye on the
read line (gradients only; no blur filters over text).

**Highlighter on the voice:** sweep each quoted phrase over exactly the span the narrator reads it, then draw a
red underline under the key figure at the end of the phrase. A **source tape** (black `#151412`, Special Elite
30 to 38 px cream, `OUTLET, MONTH D, YYYY`) slides or types on inside the safe area.

Variant **real document, real underline:** the actual screenshot of a letter or filing as a tall card scaling
slowly from 0.92 to 1.12, with red underlines drawn in the image's own coordinates (an SVG with the image's
viewBox and `preserveAspectRatio="none"`).

## 3. newsprint-origin

Who they are. Newsprint ground with a six-column ghost layer of real background facts in Old Standard 15 px at
15% ink. The name in Anton 200 to 255 px hard-cuts on with the big hit (no fade). Under it, one fact per line in
Anton about 100 px, with one word per line on a red bar (white text) or a yellow bar (ink text):
`BORN IN [PLACE]`, `FIRST JOB AT [16]`. Lines fade on in 0.3 s; bars wipe 0.1 to 0.25 s after the word.
For a printed, rough edge, lay a fixed noise texture over the type as a separate element instead of filtering
the text.

**Double-print word:** a word in ink, then a red copy on top wipes on left to right (clip-path, 0.55 s).

**Circle, arrow, marker label** on a photo of the person named: a hand-drawn red ring (0.55 s), an arrow
(0.35 s) and a Permanent Marker label rotated -4 degrees wiping on.

## 4. newsprint-rise

The rise. A 500 px year drifting x -40 over 4 s; the company's official logo split into mark and wordmark,
each wiped on with `clip-path: inset(0 100% 0 0)` to 0 over 0.6 s with `mix-blend-mode: multiply` so it prints
into the paper. **Page flip** to the next layout: rotationY -96 to 0 from the left edge, 0.5 s power3.out,
inside a `perspective: 2200px` stage, with a soft shadow. **Face-matched strobe** when the creator supplies
keynote stills: 8 to 12 frames with the face at the same place and size, 0.2 s each, a 1.0 to 1.03 push per
frame and a click on each, under one big line with a red box wiping behind the key words.

## 5. board

The turn and the case. Cork under one camera div with sepia polaroids, a clipping, an index card, pins and red
string (`#b3121f`, 5 px, each string drawn on). The light is two oversized layers inside the camera div, driven
by CSS variables:

```css
.light { position:absolute; left:-400px; top:-400px; width:2720px; height:1880px; --sx:790px; --sy:830px; --sr:320px; }
#dark { background: radial-gradient(circle var(--sr) at var(--sx) var(--sy), rgba(8,6,3,0) 0%, rgba(8,6,3,0) 70%, rgba(8,6,3,.94) 100%); }
#warm { background: radial-gradient(circle var(--sr) at var(--sx) var(--sy), rgba(255,196,120,.30) 0%, rgba(255,196,120,.10) 60%, rgba(255,196,120,0) 78%); mix-blend-mode: overlay; }
```

Move camera and light together (same start, duration and ease), 0.5 to 0.7 s, following a string from one card
to the next. **Lights on:** the scene opens on black that fades out in 0.25 s with a click and a low tone.
**Magnifier:** a 260 px ring (12 px `#cfd2d6` border) with a wooden handle, holding an enlarged copy of the word
or face being named, slides in over it (0.7 s). **Rubber stamp:** red bordered Anton, rotated -8 degrees,
multiply blend, lands from scale 1.08 in 0.1 s with a stamp sound, fades to 35% when the camera moves on.
**Index card typed:** ruled card, Anton title, Special Elite lines typed with steps, the key phrase highlighted.
**Photo comes alive** (with footage the creator can use): push into one polaroid, cut to its clip full frame
with a `REPORTED FOOTAGE` tape, then back to the board.

## 6. report

The strongest reporting beat as a front page: a red Anton date stamp with the lime year bar, a masthead in Old
Standard Bold with wide letter spacing and a typed dateline, the reported sentence built word by word on the
onsets (word pop, at most one sentence per scene), ending in a red Anton slam word. Beside it, footage in a black
frame on a rotated yellow block with a credit line, and five black redaction bars that flick on line by line
(steps(2), 0.08 s, staggered) and flicker again on the slam. **Split slam:** an SVG filter that splits red from
green and blue with two `feOffset` nodes; on the hit, tween their `dx` through 26, -8, 16, 0 and -18, 10, -6, 0
over 0.24 s. Apply it only to the slam word on its own, never to a container of other text, and check that frame
in an export.

## 7. clipping

The escalation. A newspaper clipping recreated only with the outlet's exact published sentence and labelled
outlet and date. A **rolling date counter** (`MAR 1`, `MAR 2`, `MAR 3` stacked in a one-line box, y moves two
lines in 0.6 s) on "two days later". Exit with a **torn paper** wipe: a clip-path polygon with a seeded jagged
edge swept across in 0.3 s.

## 8. consequence

What happens now, from the subject's own document. A newsprint strip slides up from below (expo.out) and an
**echo slam** sets the key word: two faded ghosts converge from above and below (0.35 s), vanish, and the real
word sets hard in the same frame.

## 9. soundbite

Someone with standing says one line on camera, only with footage the creator can use. The clip is a native media
item with its own sound, a cream source label `PERSON, DATE` and `via OUTLET`, and the quote as boxed Special
Elite captions, one clip per phrase. Open a gap in the narration and keep effects out of it.

## 10. question

First half, **the counterweight:** blank paper, the facts that cut the other way typed on with steps, one key
word underlined in red, nothing else on screen, a slow 3.5% creep. Never skip this when the story is an
allegation. Second half, **the open question:** the wide board with every string leading to the subject, the
camera easing out (about 1.2 to 0.95 over 2 to 4 s), the question in Permanent Marker typing on, a red ring
drawing around the subject on the question's last word, the light closing (`--sr` to 0) and a cut to black.

## 11. title

Concrete wall with a newsprint strip along the bottom (or, between dark scenes, a clean ground). `THE` small,
the name large in Anton, the noun in cream on a red bar that wipes on. An ink circle draws around it, an arrow
points in, a black `WHAT WE KNOW` tape types on, then the month, an orange rule and the sources line in Special
Elite 28 px. The last hit lands as the name shows.

## Transitions between scenes

Allowed: object becomes the world, page flip, torn paper, a whip (camera x about -3200 in 0.45 s power3.in with
a swipe sound), a dip to black of 0.2 to 0.55 s (before the turn and before a soundbite), a hard cut on a hit.
At most twice a film, a one or two frame negative flash on the hardest turn. At most once, a stretch slam (a
two-frame copy of one word at scaleY 4.4, then the word at full size). Not allowed: chapter cards, crossfades
between unrelated worlds, anything easing in after it has landed.
