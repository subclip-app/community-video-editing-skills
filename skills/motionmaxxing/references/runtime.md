# Motion runtime in a Subclip layer

> Modified for Subclip (2026-11-27) from motionmaxxing `runtime/README.md` by Tejas Makwana, Apache-2.0 (upstream commit 8c8ec0f). Changes: the install, 3D (hero3d), phone UI (native-ui), canvas hashing and render sections were removed, because Subclip layers block dynamic imports and render through their own export. The API text below is unchanged apart from that.

`assets/motion-layer.js` is the upstream `runtime/motion.js` with one change: `M.hero3d` is a stub. It needs GSAP, which Subclip loads itself. Paste the file into one inline script after the pinned GSAP tag; a layer may only load GSAP 3.15.0, Lottie 5.13.0 and HyperFrames 0.8.26 from a CDN, so the runtime cannot be linked.

Order inside the layer document: first the pinned GSAP 3.15.0 tag from jsDelivr, then one inline script element holding the whole of `assets/motion-layer.js`, then your own inline script that calls `Motion.film({...})`.

Layer rules that follow from it:
- Give the composition root `id="main"`. `Motion.film()` writes `data-composition-id="main"` and the other data attributes on it and registers `window.__timelines.main`, which is the paused timeline Subclip seeks.
- One layer per scene, 1920 x 1080, full frame. Set `Motion.film({ duration })` to the layer item length.
- Fonts: use fonts the renderer has, or load one from Google Fonts with a link tag, and look at a frame before you rely on it.
- `Motion.selfTest(M)` still works in a browser preview of the same document; in Subclip, the proof of seek safety is that `view_current_frame` at any time shows the same pose as playing to it. Check a few times out of order.
- When you need a 3D hero, use a native 3D layer (`add_3d_layer`) or a separate Three.js layer on the pinned module, not `M.hero3d`.
- Agents that cannot paste 40 KB can copy only the 12 measured eases from `references/measured-curves.md` and drive GSAP directly: `tl.fromTo(el, from, { ...to, ease: EASE.softLand, immediateRender: false }, t)`.

## Film
```js
const M = Motion.film({ fps: 30, duration: 15, width: 1920, height: 1080, clock: 'smooth' });  // 'twos': even-frame onsets, __seek holds each pose 2 f
M.tl; M.f(12);          // paused gsap timeline; frames -> seconds (0.4)
M.twos(7);              // 6 (nearest even frame at or below)
M.mark(66, 'cut', 'A to B');   // record an event; cut/show/press/enter/exit/word/type/count/snap/whip/dive auto-record
window.__events;        // [{t, frame, type, label}] sorted by frame: place audio on these
```

## Eases (`M.ease.*`, also `Motion.ease`) - measured from 53 human-made films, f(0)=0, f(1)=1
`crashIn` (hit + 1.18 overshoot) `popOver` (late 1.08) `bounceHard` (1.48) `snapSettle` (hero entry) `softLand` (workhorse ease-out)
`whip` (big move) `glide` (gentle out) `cruise` (linear) `softInOut` `gentleIn` `accelExit` `crashOut`. Anywhere an `ease` is accepted you can pass a
name, one of these functions, or a GSAP ease string. Typical frames: `Motion.easeFrames` (softLand 12, whip 7, accelExit 13 ...).

## Keyframes and visibility
```js
M.kf('#box', 'x', [[0, 0], [30, 400, 'whip'], [60, 0, 'accelExit']]);          // [frame, value, easeOfSegmentEndingHere]; default linear
M.kf('#box', 'opacity', [[0, 1], [20, .2]], { ease: 'softInOut' });              // opts: ease (name | array per segment), fmt: v => v + 'px', step: 2 (hold poses)
M.kf('#g', '--b', [[0, 12], [6, 0]], { fmt: v => v + 'px' });                    // CSS vars and any gsap prop work
M.kf('#x', 'opacity', [[0, 1], [40, 1], [40, 0], [90, 0]]);                      // DUPLICATE frame = a hard step: 1 on frame 39, 0 on frame 40 (no tween in between)
M.show('#tag', 40, 70);                                                          // visible on frames 40..69 (hard cut in, hard cut out); off omitted = stays
M.hide('#tag', 120);                                                             // hard hide from frame 120
M.cut(66, { hide: ['#sceneA'], show: ['#sceneB'] });                             // several swaps on one frame; labelled in __events
```
**Visibility is ONE track per element.** `show`, `hide`, `cut`, `enter`, `exit`, `cursor` each add a hard on/off op at a frame; the state on frame `f` is the *last op at or before `f`*
(same frame: authored later wins). So `M.enter(el, {at: 20})` + `M.show(el, 20, 70)` is visible on [20, 70) and hidden again from 70, and an explicit later hide always wins.
An element whose first op is an "off" (an `exit` / cut-hide on something never shown) is visible until it; before its first "on" an element is hidden.
An element authored `style="visibility:hidden"` is fine (the spelling does not matter to the runtime or to `selfTest`). `M.type` owns its caret's `visibility`.

## Enter / exit
```js
M.enter('#panel', { at: 66, frames: 12, ease: 'softLand',
  from: { x: 0, y: 46, scale: .93, rotation: 0, blur: 0, opacity: 0 },            // any subset; lands on neutral (or opts.to)
  smear: { axis: 'y', px: 30, frames: 3 } });                                     // directional blur, strongest on the FIRST frame, decays over 3 f
M.exit('#panel', { at: 120, frames: 12, ease: 'accelExit', to: { y: -80, blur: 6 }, smear: true, hide: true });  // smear peaks on the LAST frame; hides at the end
```
`blur` is a CSS var (`--b`) read by the element's filter; smear is a per-element SVG `feGaussianBlur` made for you. The element is hidden before `at` (and, if you also
`M.show(el, a, b)`, hidden again after `b`; see "Visibility is ONE track").

## Words
```js
const onsets = M.words('#headline', { at: 2, mech: 'rise', gaps: [5, 4, 7], dist: 84, frames: 13, ease: 'softLand',
  smear: true, accent: { color: '#F2542D', frames: 24, word: -1 }, fixedSlots: false });   // returns onset frames
```
`mech`: `rise` (y), `slide` (x), `pop` (scale from `dist`=.5), `shrink` (from 1.6), `focus` (blur + opacity). `gaps`: number or per-word frames
(default speech-like: 4, 3 ... slower last). `accent.word`: index, -1 last, array or `'all'`; it tints on arrival and settles to the ink colour.
`fixedSlots:false` keeps the visible line centred (widths measured once, line x glides); single line only. Words are never split into letters.

**Per-word options.** `dist` may be a number, an array (the last value repeats) or `(i, word) => number`. For everything else give `words` (array, or `(i, word) => object | null`):
```js
M.words('#headline', { at: 0, mech: 'rise', dist: 60, accent: { color: '#F2542D', word: -1 },
  words: (i, w) => (i === 2 ? { dist: 160, scale: 1.25 } : null) });          // the thesis word enters further away AND bigger (lands on neutral)
M.words('#h', { mech: 'pop', words: [{}, { frames: 18 }, { from: { scale: 2.4 }, accent: '#F2542D' }] });
```
Keys: `dist` (that word's travel), `scale` (START scale for any mech: lands on 1, so 1.25 = enters 25 % bigger and comes down), `from` (explicit start pose, wins over dist/scale),
`frames`, `ease`, `accent: true | '#colour' | {color, frames} | false` (true = the film-level `accent` colour; false = no accent even if the word is in `accent.word`). Words keep their layout size (transforms do not reflow), so use `scale` for entry only.

## Typing
```js
const ev = Motion.cadence('Summarise Tuesday\'s calls', { style: 'prompt', seed: 5, start: 0, cps: null });   // [[frame, nGraphemes], ...]
M.type('#prompt', { at: 74, style: 'prompt', seed: 5, caret: '#caret', caretGap: 6, recenter: false,
  accentNewest: { color: '#F2542D', frames: 2 } });                                // or events: [[0,2],[3,5],[8,'all']]
```
`style`: `prompt` (1-3 chars/frame bursts), `compose` (1 char per 2-4 f, 4-10 f after spaces), `fast`. Same `seed` gives the same rhythm. The target
element's text is the final text; `M.type` makes it `white-space:pre`. `recenter:false` reserves the full line width (left anchored);
`true` shrink-wraps so a centred host re-centres every event. The caret must share an offsetParent with the text (it is positioned by `left`); `caretOff:frame` hides it.

**Multi-line and pre-styled text.** The host may contain real line breaks (`\n` in the text, or `<br>`) and child elements with their own classes/styles:
```html
<div id="code" style="position:absolute;white-space:pre;font:52px/76px ui-monospace"><span class="k">const</span> <span class="v">name</span> = <span class="s">'Maya'</span>;
<span class="k">await</span> <span class="v">send</span>({ to: <span class="s">'a@b.dev'</span> });</div>
<div id="caret" style="position:absolute;left:0;top:210px;width:6px;height:60px;background:#F2542D"></div>   <!-- top = the FIRST line -->
```
```js
M.type('#code', { at: 104, style: 'fast', seed: 3, caret: '#caret', accentNewest: { color: '#F2542D', frames: 2 } });
```
The text is revealed grapheme by grapheme across the children; each span keeps its class (syntax colours survive), spans not yet reached are absent (no empty pills), and a line break
costs a short pause. The caret follows the last revealed glyph in 2D: `left` always, `top` too when the text has more than one line (offset from the caret's own authored `top`,
which is therefore the first line's position). Write the markup tight (no indentation inside the host: whitespace is typed too). `accentNewest` paints the newest glyphs even inside a styled span.

## Cursor and press
```js
M.cursor('#cursor', { keys: [[96, 2050, 1260, 3.4, -28], [121, 1498, 548, 1, 0]], ease: 'glide', twos: false });   // [frame, x, y, scale, rotation], about the TIP (origin 0 0)
M.press('#cursor', '#send', { at: 127, cursorDepth: .8, targetDepth: .8, lag: 1, frames: 3, release: true });     // target reacts `lag` f later; no ripple
```
Draw the cursor with its tip at the element origin. `press` extras: `hold`, `releaseFrames`, `cursorBase/targetBase` (resting scale), `targetStep: {backgroundColor: '#..'}` (hard colour step).
Cut on a frame before the release to land on maximum compression.

## Camera family
**transform-origin is a per-element track, not one static value.** `camera` (from its first key), `snap` and `dive` (from `at`) and `cursor` (whole film) each *claim* an origin from their
own start frame; the runtime switches it on that frame with one renderer, so seeking is safe. The console warns once (and tells you the fix) when
(a) two claims with different origins overlap in time on one element, or (b) the origin switches while the earlier claim ended scaled/rotated (the element would visibly jump).
Whenever two moves need different origins at the same time, or you want a clean mental model, **nest wrappers**:
```js
const wA = M.wrap('#box');            // new <div class="mwrap"> that takes over #box's layout role; returns it (wrap a wrapper for another level)
const wB = M.wrap(wA);
M.camera('#box', [[172, { scale: 1 }], [190, { scale: 1.6 }]], { origin: '0% 0%' });        // about the box's own top-left
M.snap(wA, { at: 200, from: { rotation: 20 }, to: { rotation: 0 }, origin: '100% 100%' });
M.dive(wB, { at: 222, frames: 6, perStep: 1.3, origin: [900, 300] });
```
A wrapper around an absolutely positioned element fills its parent (`left:0;top:0;width:100%;height:100%`), so **its origin is in the parent's px** (scene coordinates); around an in-flow
element it is a block/inline-block of that element's size. `z-index` is copied. Remember `from` values (snap, enter) apply from frame 0: a wrapper you only use later still sits at its `from` pose until then.
```js
M.camera('#cam', [[0, { scale: 1 }], [30, { scale: 1.4, x: 80 }, 'softInOut']], { origin: '50% 50%', ease: 'glide' });
M.snap('#cam', { at: 157, from: { scale: 2 }, to: { scale: 1 }, firstFrameShare: .6, tail: 15, origin: '960px 440px' });  // frame at+1 is already 60% there, then a decelerating tail
M.whip('#cam', { at: 120, dx: 300, dy: -50, frames: 8, smearPx: 40 });          // fast pan with smear on the first frames
M.dive('#cam', { at: 130, frames: 9, perStep: 1.6, origin: [960, 540] });       // constant-octave zoom: scale x1.6 every frame, never slows
M.drift('#cam', { prop: 'scale', from: 1, to: 1.05, start: 0, end: 270 });      // linear, never-freeze creep (prop: scale | x | y | rotation)
```

## Count and cascade
```js
const vals = M.count('#num', { at: 130, from: 0, to: 10000, frames: 23, round: true, format: 'comma', skip: .12, seed: 2 });  // one value per frame, steps decay, lands on `to`
M.cascade(['#a', '#b', '#c'], { at: 50, gaps: [3, 2], fn: (el, frame, i) => M.enter(el, { at: frame, from: { y: 40 } }) });      // returns the onset frames
```
`format`: `'comma'` or `v => '$' + v`. Digits are never eased and use tabular numerals.

## Self test
```js
Motion.selfTest(M, { samples: 24 });   // -> { ok, samples, elements, mismatches: [...] }; also window.__seekcheck and a console line
```
Plays frames 0..N in order, then jumps to 24 random frames (via a detour, so each is a real jump, backwards included) and compares every element's
attributes, inline style (compared as a parsed property map: `visibility:hidden` and `visibility: hidden`, declaration order and colour spelling can no longer cause a false FAIL),
computed transform and own text, **and the pixels of every `<canvas>`** (see "Canvas hashing" below). Open any film with `?selftest` (template/demo wire it) to run it. Wire it as `window.__ready = Motion.loaded().then(() => ...)`:
`Motion.loaded()` resolves after fonts AND the load event; text measurement is only cached then, and a selfTest started earlier can take a minute.
`Motion.loaded()` also waits for every `M.hero3d` scene (module + fonts + env + shader compile), so `window.__ready = Motion.loaded()...` is all a 3D film needs.
`examples/selftest/index.html` is the regression page for this runtime (visibility composition, per-word options, multi-line styled typing, origin claims, `kf` steps); it must print `PASS` and `[asserts] PASS`.

