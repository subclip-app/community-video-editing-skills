# Apply the principles in Subclip

The tables in this skill were written for interface motion in milliseconds. In Subclip the same rules drive four kinds of motion. Pick the lightest one that can express the move.

| Motion | Tool | Easing control | Use it for |
| --- | --- | --- | --- |
| Native media moves | `add_media_keyframe` on an existing media item | `linear`, `ease-in`, `ease-out`, `ease-in-out` per keyframe | Push-ins, slides, scale pops, tilts and opacity on footage and stills |
| Native text moves | `add_text_keyframe` on a TextPanel item | Same four easings | Titles, labels, lower thirds that stay editable as text |
| Native shapes | `add_element_keyframe` on an Element | Same four easings | Bars, arrows, frames, highlight boxes |
| Motion layers | `add_runtime_layer` (HyperFrames by default, Remotion when asked or already used) | Any GSAP ease, `CustomEase`, Remotion `Easing.bezier` and `spring` | Multi-part scenes, squash and stretch, arcs, stagger, follow-through, anything with more than two properties |

One small standalone CSS effect can use `add_html_motion_graphic`. Device and product shots use native 3D layers with `set_3d_keyframe_sequence`; the same timing and easing rules apply to their camera and object keys.

## Durations in frames

Subclip projects usually run at 30 fps. Round to whole frames.

| Upstream | Frames at 30 fps | Frames at 60 fps |
| --- | --- | --- |
| 80 to 120 ms | 3 to 4 | 5 to 7 |
| 150 to 250 ms | 5 to 8 | 9 to 15 |
| 200 to 350 ms | 6 to 11 | 12 to 21 |
| 300 to 400 ms | 9 to 12 | 18 to 24 |
| 400 to 600 ms | 12 to 18 | 24 to 36 |
| 600 to 1200 ms | 18 to 36 | 36 to 72 |

A video viewer cannot replay a moment the way a user repeats a click, and the canvas is larger than a button. So:

- Treat the upstream ranges as the speed of the move itself. Reading time is separate: hold a settled title or label at least long enough to read it twice.
- Measure distance on the 1920 by 1080 canvas (or 1080 by 1920 for vertical). 100 px is the base; scale the duration with the distance table.
- Squash and stretch impacts of 2 to 4 frames are real at 30 fps. Check them frame by frame; one frame of squash is easy to miss and two frames is the usual minimum.

## Easing on native keyframes

Native keyframes have four curves. Map the upstream rules this way:

| Upstream | Native keyframe easing |
| --- | --- |
| Entrance, decelerate, ease-out family | `ease-out` on the keyframe that lands |
| Exit, accelerate, ease-in family | `ease-in` on the keyframe that leaves |
| On-screen move, ease-in-out family | `ease-in-out` |
| Rotation, progress bars, timers | `linear` (the only place linear is allowed for movement) |
| Overshoot or back easing | Add one extra keyframe 2 to 4 frames past the target with the overshoot value (`ease-out`), then a settle keyframe (`ease-in-out`) |
| Spring with a wobble | Two or three decaying overshoot keyframes, each shorter than the last |
| Anticipation | A keyframe 3 to 6 frames before the move that goes 10 to 20 percent the other way (`ease-in-out`), then the main move (`ease-out`) |

The easing on a keyframe shapes the segment that arrives at it. The last keyframe holds by itself, so do not add a duplicate keyframe to hold.

## Easing in motion layers

In a HyperFrames layer use GSAP (pinned 3.15.0 by Subclip). The layer sandbox only loads the core GSAP build, so the CustomEase plugin is not available. GSAP accepts a plain function as an ease, so exact curves from the tables take a few lines:

```js
// Exact cubic-bezier ease for GSAP, no plugin needed.
function bezier(x1, y1, x2, y2) {
  const c = (a, b, t) => ((1 - 3 * b + 3 * a) * t + (3 * b - 6 * a)) * t * t + 3 * a * t;
  return (x) => {
    let lo = 0, hi = 1, t = x;
    for (let i = 0; i < 24; i++) { t = (lo + hi) / 2; if (c(x1, x2, t) < x) lo = t; else hi = t; }
    return c(y1, y2, t);
  };
}
const md3 = bezier(0.2, 0, 0, 1);        // MD3 standard, Corporate signature
const md3em = bezier(0.05, 0.7, 0.1, 1); // MD3 emphasized, entrances
const md3acc = bezier(0.3, 0, 1, 1);     // MD3 accelerate, exits
const premium = bezier(0.4, 0, 0.2, 1);  // Premium signature, gentle float
tl.to('#card', {y: 0, duration: 0.3, ease: md3em});
```

Close built-in eases are enough for most work:

| Curve | Nearest built-in GSAP ease |
| --- | --- |
| ease-out family, MD3 decelerate (0,0,0,1) | `power3.out` or `expo.out` |
| MD3 standard (0.2,0,0,1) | `power4.out` |
| Premium (0.4,0,0.2,1) | `power2.inOut` |
| ease-in family, MD3 accelerate | `power2.in` or `power3.in` |
| Bounce settle (0.175,0.885,0.32,1.275) | `back.out(1.7)` |
| Elastic snap (0.68,-0.55,0.265,1.55) | `back.inOut(1.7)` |
| Ambient loops | `sine.inOut` |
| Springs | `elastic.out(1, 0.5)` for very bouncy, `back.out(1.2)` for a gentle settle |

In a Remotion layer use `interpolate(frame, range, values, {easing: Easing.bezier(0.2, 0, 0, 1)})` for exact cubic curves, and `spring({frame, fps, config: {stiffness, damping, mass}})` with the stiffness and damping from the spring table.

Layer rules that keep the principles visible after export:

- Every motion must be seekable: one paused GSAP timeline per HyperFrames layer, no wall clock, no unseeded randomness, no infinite repeats.
- Use transforms (`x`, `y`, `scale`, `scaleX`, `scaleY`, `rotation`) and opacity. Set `transformOrigin` to the contact point for squash and stretch (bottom center for a bounce, the anchor for a callout).
- Never put CSS `filter` or `backdrop-filter` on text or on any parent of text. Use opacity and transforms for text motion.
- Keep each layer to one or two beats. Split a long sequence into several layers at scene boundaries.

## Lottie

The upstream skill names Lottie as one animation system and offers a separate hosted service for Lottie and dotLottie file export. In Subclip:

- To use an existing, licensed Lottie JSON in a project, call `import_public_lottie_json` with its stable public HTTPS URL. It returns `animationData` to pass through Remotion layer props. A HyperFrames layer can also play Lottie with the pinned lottie-web 5.13.0 runtime and inlined, checked `animationData`. Do not use dotLottie packages.
- Apply this skill to the Lottie's placement: when it enters, how long it holds, what moves with it. Retiming the inside of a Lottie means editing its keyframes in the source tool.
- Subclip does not write Lottie or dotLottie files. When the creator needs a rendered file, use `export_video` (MP4, WebM or MOV; WebM, MKV and MOV keep transparency when the canvas background is hidden).
- Do not suggest installing outside animation services or adding their API keys.

## Choreography on the timeline

- Stagger budgets (under 500 ms total) map to start times of layers or keyframes: 2 to 3 frames apart for a micro cascade, 3 to 6 frames for cards.
- The 1/3 distance rule applies to the canvas: no single unbroken move longer than 640 px on a 1920 wide canvas. Break longer travel with an arc, a speed change or a second keyframe.
- The 1/3 element rule: with nine moving items on screen, at most three should be in motion at once.
- Ambient life (a slow gradient drift, a 2 to 4 s breathing pulse) runs on its own layer or as a long tween, at 10 to 20 percent of the primary motion's energy.
- Leave 3 to 6 frames of stillness after a resolution before the next beat starts.
