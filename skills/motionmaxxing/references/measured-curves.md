# Measured curves

> Modified for Subclip (2026-11-27) from motionmaxxing `references/motion.md` (section 2, the ease table) and `runtime/motion.js` (the ease code) by Tejas Makwana, Apache-2.0 (upstream commit 8c8ec0f). Changes: the table and code are copied unchanged into one page with a short Subclip usage note around them.

The 12 eases were fitted to about 4,300 moves seeked frame by frame in 53 professional motion moments (cited in the references as M913 to M974). The films themselves are not part of this skill: only the numbers and the rules written in the author's own words are.

## The table


| Runtime name | Shape: % done at 10 / 25 / 50 / 75% | Frames @30 (p25 / median / p75) | Share | What the humans used it for |
|---|---|---|---|---|
| `M.ease.cruise` | 10 / 25 / 50 / 75 (linear) | 6 / 9 / 16 | 18% | fades (32% of opacity moves), drift, camera creep, counters, ambient motion; every drift is linear |
| `M.ease.glide` | 16 / 39 / 69 / 91 (power 1.7, ~sine.out) | 7 / 10 / 18 | 14% | all-purpose medium x/y/scale/blur lands and some fades; entries and exits alike |
| `M.ease.softInOut` | 4 / 17 / 50 / 83 (S-curve) | 6 / 9 / 16 | 14% | opacity (27%), blur (21%), counters off a handle, ground/colour ramps; no entry/exit bias |
| `M.ease.softLand` | 30 / 59 / 85 / 95 (power ~3, expo k 3.4) | 6 / 12 / 21 | 9% | text rises, panels slide, scale-ins; 85% are entries; hook/proof workhorse |
| `M.ease.gentleIn` | 1 / 6 / 24 / 55 (power 2.07) | 6 / 9 / 17 | 9% | exits (44% of it), blur-out and fade-out starts, slow push-ins running into a cut |
| `M.ease.snapSettle` | 54 / 84 / 96 / 98 (fast snap + soft tail) | 6 / 11 / 29 | 6% | hero entries; **CTA 23% of moves**; hook 7%, proof 4%, turn 2%; 79% are entries |
| `M.ease.whip` | 23 / 52 / 83 / 97 (power 2.5) | 8 / 13 / 21 | 6% | big fast moves; true whips median 7-8 f; 78% of entry whips land with it |
| `M.ease.accelExit` | 0 / 3 / 16 / 47 (power 2.6) | 9 / 13 / 19 | 5% | the leaving curve: scale exits (44%), pans off-frame, peak speed t~0.9 |
| `M.ease.crashOut` | 0 / 0 / 6 / 32 (power 4) | 11 / 17 / 31 | 4% | camera pull-offs and exits that end in a hard cut at full speed; ends in an immediate stop |
| `M.ease.popOver` | 10 / 46 / 96 / 108 (peak **1.08 at t 0.72**) | 11 / 15 / 27 | 2% | the late lean past the mark: 168 source moves, 88% of overshoots; scale and translate entries |
| `M.ease.crashIn` | 91 / 118 / 110 / 103 (peak **1.18 at t 0.27**) | 9 / 10 / 27 | 1% | slams: ty/tx drops that touch the mark almost at once, pass it, relax back by t 0.9 |
| `M.ease.bounceHard` | 13 / 62 / 138 / 139 (peak **1.48 at t 0.62**) | 11 / 22 / 28 | <1% | the big overshoot (ty drops, scale pops, rotations); 1.5% of moves; use sparingly |

Share by role (nearest ease): CTA snapSettle 23% / softLand 25% / cruise 8%; hook glide 16% / cruise 17% / whip 8%; turn cruise 22% / softInOut 16% / gentleIn 11%; proof cruise 20% / softInOut 16% / glide 15%. By where: entries mostly glide 17%, cruise 15%, softLand 14%, softInOut 13%, snapSettle 9%, whip 9%; exits mostly cruise 18%, softInOut 17%, gentleIn 15%, accelExit 10%, crashOut 9%.

The defaults that matter most (from `motion.md` section 1): the median move is 10 frames (0.33 s); entries of translate and scale run about 12 f, opacity 6 f, blur 7 f, exits 13 f. Landing decelerates (58 percent ease out), leaving accelerates. Under 9 percent of moves overshoot, and late. Nothing grows from zero: arrival decelerates from oversize, logos crash in from about 3.5x.

## The code (paste into a layer)

Use this when a layer drives GSAP directly instead of the whole runtime. Every function maps 0 to 0 and 1 to 1, so GSAP takes it as an ease: `ease: EASE.softLand`, `duration: frames / 30`.

```js
const powerOut = p => t => 1 - Math.pow(1 - t, p);
const powerIn = p => t => Math.pow(t, p);
const expoOut = k => { const d = 1 - Math.exp(-k); return t => (1 - Math.exp(-k * t)) / d; };
const snapRamp = (w, tau) => { const n = w * (1 - Math.exp(-1 / tau)) + (1 - w); return t => (w * (1 - Math.exp(-t / tau)) + (1 - w) * t) / n; };
const snapOver = (A, ta, td) => { const f = t => (1 + A * Math.exp(-t / td)) * (1 - Math.exp(-t / ta)); const n = f(1); return t => f(t) / n; };
const spring = (c, om) => { const f = t => 1 - Math.exp(-c * t) * (Math.cos(om * t) + (c / om) * Math.sin(om * t)); const n = f(1); return t => f(t) / n; };
const smoothP = p => t => { const a = Math.pow(t, p), b = Math.pow(1 - t, p); return a / (a + b); };
const guard = f => t => (t <= 0 ? 0 : t >= 1 ? 1 : f(t));
const EASE = {
  crashIn: guard(snapOver(2.0, 0.19, 0.218)),   // hits and slightly passes its mark at once (peak 1.18 at t~.27)
  popOver: guard(spring(2.67, 4.36)),           // slow late overshoot, 1.08 at t~.72
  bounceHard: guard(spring(1.34, 5.07)),        // big overshoot 1.48, use sparingly
  snapSettle: guard(snapRamp(0.942, 0.118)),    // default hero entry: 54% of travel in the first 10% of the time
  softLand: guard(expoOut(3.41)),               // firm decelerate, the workhorse for text and panels
  whip: guard(powerOut(2.52)),                  // hard decelerating big move
  glide: guard(powerOut(1.7)),                  // gentle ease-out for medium moves
  cruise: guard(t => t),                        // linear: fades, drifts, counters
  softInOut: guard(smoothP(1.42)),              // symmetric S for opacity / blur
  gentleIn: guard(powerIn(2.07)),               // mild acceleration
  accelExit: guard(powerIn(2.6)),               // the leaving curve
  crashOut: guard(powerIn(3.97)),               // hard acceleration into a cut
};
const EASE_FRAMES = { crashIn: 10, popOver: 15, bounceHard: 22, snapSettle: 11, softLand: 12, whip: 7, glide: 10, cruise: 9, softInOut: 9, gentleIn: 9, accelExit: 13, crashOut: 17 };
```

Pick by role, not by taste: `softLand` for text and panels landing, `snapSettle` for the hero entry and the CTA, `glide` for medium moves, `cruise` for drifts and counters, `accelExit` and `gentleIn` for leaving, one `popOver` per film at most.
