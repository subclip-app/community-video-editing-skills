---
name: animation-vocabulary
description: Reverse-lookup glossary that turns a vague description of a motion effect into its exact term ("the bouncy thing when a title pops in" is Pop in; "text appears letter by letter" is Typewriter), with the Subclip tool that builds it. Use when someone asks "what is it called when...", or describes motion without knowing its name and wants the right word to prompt an agent or designer.
---

# Animation vocabulary

Turn a loose description of motion into the precise term, so the creator knows what to ask for. This skill names effects. It does not design or build them (use `animate` for that). Hover, drag, scroll and browser performance terms from the original glossary were dropped because they do not exist in a video.

## How to answer

1. Read for intent, not keywords. People say what they see or feel ("springy", "slides off", "draws itself in").
2. Lead with the term in this format, then stop unless asked for more:

```
**Stagger**: Animate several items one after another with a small delay between each, creating a cascade.
```

3. When two terms compete (Clip-path or Mask, Pop in or Bounce, Shared element transition or Layout animation), list the best match first and one or two alternates with a one-line difference.
4. Quote the glossary descriptions as written. If nothing matches exactly, name the closest term and say it is an approximation, or describe the effect in glossary words ("a stagger of scale-in entrances"). Do not invent a term.
5. After the name, add one line on how to build it in Subclip when it is simple (see the tool table below). Offer the `animate` skill for the build.

Example. User: "A caption grows out of the thing it points at instead of from its own middle." Answer: **Origin-aware animation**: An element animates out of its trigger, like a popover growing from the button that opened it instead of from its own center which is the default in CSS. In a video, set the pivot at the point it labels.

## Glossary

### Entrances & Exits: how elements appear and disappear
- **Fade in / Fade out**: Element appears or disappears by changing opacity.
- **Slide in**: Element enters by sliding in from off-screen (left, right, top, or bottom).
- **Scale in**: Element grows from smaller to full size as it appears, often paired with a fade.
- **Pop in**: Element appears with a slight overshoot, like it bounces into place.
- **Reveal**: Content is uncovered gradually, often by animating a clip-path or mask.
- **Enter / Exit**: The animation an element plays when it's added to or removed from the screen.

### Sequencing & Timing: coordinating multiple elements or moments
- **Keyframes**: Defined points in an animation (0%, 50%, 100%) that the browser fills the gaps between.
- **Interpolation / Tween**: Generating all the in-between frames between a start and end value, so motion is continuous.
- **Stagger**: Animate several items one after another with a small delay between each, creating a cascade.
- **Orchestration**: Deliberately timing multiple animations so they feel like one coordinated motion.
- **Delay**: Time before an animation starts.
- **Duration**: How long an animation takes.
- **Fill mode**: Whether an element keeps its first or last frame's styles before the animation starts or after it ends (e.g. forwards).
- **Stepped animation**: An animation that is divided into discrete steps, like a countdown timer.

### Movement & Transforms: changing an element's position, size, or angle
- **Translate**: Move an element along the X or Y axis.
- **Scale**: Make an element bigger or smaller.
- **Rotate**: Spin an element around a point.
- **Skew**: Slant an element along the X or Y axis, shearing it out of its rectangular shape.
- **3D tilt / Flip**: Rotate in 3D space (rotateX / rotateY) to add depth.
- **Perspective**: How strong the 3D effect looks: a lower value exaggerates depth, like the viewer is closer.
- **Transform origin**: The anchor point a scale or rotation grows or spins from.
- **Origin-aware animation**: An element animates out of its trigger, like a popover growing from the button that opened it instead of from its own center which is the default in CSS.

### Transitions Between States: connecting one state, view, or element to another
- **Crossfade**: One element fades out as another fades in, in the same spot.
- **Continuity transition**: A change that keeps the user oriented by visually connecting before and after. For example, making the same rectangle bigger and smaller.
- **Morph**: One shape smoothly turns into another shape, e.g. Dynamic Island.
- **Shared element transition**: An element travels and transforms from one position into another, like a thumbnail expanding into a card.
- **Layout animation**: When an element's size or position changes, it animates to the new spot instead of snapping.
- **Accordion / Collapse**: A section smoothly expands and collapses its height to show or hide content.
- **Direction-aware transition**: Content slides one way going forward and the opposite way going back, so navigation has a sense of direction.

### Camera and scene: motion across the frame and between scenes
- **Parallax**: Background and foreground move at different speeds as the camera or layers move, creating depth.
- **Transition**: An animation that plays between two clips or scenes (cross dissolve, wipe, push, zoom).

### Feedback & Interaction: responding to the user's actions
- **Rubber-banding**: Resistance and snap-back when you drag past a boundary (the iOS overscroll feel).
- **Shake / Wiggle**: A quick side-to-side jitter signaling an error or rejected input.

### Easing: how speed changes over an animation
- **Easing**: The rate at which an animation speeds up or slows down.
- **Ease-out**: Starts fast, ends slow. The default for most UI and anything responding to the user.
- **Ease-in**: Starts slow, ends fast. Usually avoided; can feel sluggish.
- **Ease-in-out**: Slow, fast, slow. Good for elements already on screen moving from A to B.
- **Linear**: Constant speed. Avoid for UI; reserve for spinners or marquees.
- **Cubic-bezier**: A custom easing curve you define for precise control.
- **Asymmetric easing**: A curve that accelerates and decelerates at different rates. Feels more alive than a symmetric one.

### Spring Animations: physics-based motion as an alternative to fixed-duration easing
- **Spring**: Motion driven by physics (tension, mass, damping) rather than a set duration.
- **Stiffness / Tension**: How strongly the spring pulls toward its target. Higher feels snappier.
- **Damping**: How quickly a spring settles. Lower damping means more bounce and oscillation.
- **Mass**: How heavy the animated element feels. More mass makes it slower and more sluggish.
- **Bounce**: A spring that overshoots and settles, adding playfulness.
- **Perceptual duration**: How long a spring takes to look finished, even though it keeps micro-settling underneath.
- **Momentum**: Motion that carries velocity, especially after a drag or interruption.
- **Velocity**: How fast and in which direction an element is moving. A spring carries it into the next animation when interrupted, so a flicked element keeps its speed.
- **Interruptible animation**: An animation that can be smoothly redirected mid-flight instead of finishing first.

### Looping & Ambient Motion: animations that run on their own
- **Marquee**: Text or content that scrolls continuously in a loop.
- **Loop**: An animation that repeats, a set number of times or infinitely.
- **Alternate (yoyo)**: A loop that plays forward then reverses each iteration, instead of jumping back to the start.
- **Orbit**: An element circling around another in a continuous path.
- **Pulse**: A gentle repeating scale or opacity change to draw attention.
- **Float**: A gentle, continuous up-and-down drift that makes a static element feel alive and weightless.
- **Idle animation**: Subtle motion that plays while an element is just sitting there, waiting to be interacted with.

### Polish & Effects: the small touches that separate good from great
- **Blur**: A blur filter used to soften an element or mask tiny imperfections.
- **Clip-path**: Clipping an element to a shape, used for reveals, masks, and before/after sliders.
- **Mask**: Hiding or revealing parts of an element using a shape or gradient: like clip-path, but with soft, fadeable edges.
- **Before / after slider**: A draggable divider that wipes between two overlaid images to compare them.
- **Line drawing**: An SVG path that draws itself in, like an invisible pen tracing it.
- **Text morph**: Text that animates character by character when it changes, drawing attention to the new value.
- **Skeleton / Shimmer**: A placeholder with a moving sheen shown while content loads.
- **Number ticker**: Digits rolling or counting up to a value.
- **Tabular numbers**: Fixed-width digits so numbers don't shift around as they change. Essential for tickers, timers, and counters.
- **Typewriter**: Text appearing one character at a time, as if being typed.

### Principles to Know: concepts that guide when and how to animate
- **Purposeful animation**: Motion should serve a function: orient, give feedback, show relationships: not just decorate.
- **Anticipation**: A small wind-up in the opposite direction before a move, hinting at what's about to happen.
- **Follow-through**: Parts of an element keep moving and settle slightly after the main motion stops, adding weight.
- **Squash & stretch**: Deforming an element as it moves to convey weight, speed, and flexibility.
- **Perceived pace**: The right motion makes an edit feel quicker and cleaner, even at the same length.
- **Frequency of use**: The more often a viewer sees the same kind of animation in one video (every caption, every lower third), the shorter and subtler it should be.
- **Spatial consistency**: Animating so an element keeps its identity and position across states, so users never lose track of where things went.
- **Calm cut**: A version with fades and gentle scale only: no shake, no fast slides, no flashing.

## Where each term lives in Subclip

| Term family | Build it with |
| --- | --- |
| Fade, slide, scale, pop, rotate, keyframes, tween | `add_media_keyframe` for clips and stills, `add_text_keyframe` for text |
| Typewriter, word-by-word, text morph | Text presets (`set_text_animation`), Dynamic Captions, or a motion layer for custom kinetic type |
| Crossfade, wipe, push, Ken Burns | `update_media_item` with `transitionType`, `transitionDurationFrames`, `kenBurnsDirection` |
| Stagger, orchestration, line drawing, number ticker, shimmer, marquee, loop | A motion layer: `add_runtime_layer` (HyperFrames by default) |
| Spring, bounce, momentum, rubber-banding | `animate-expo`: a layer for exact physics, sampled keyframes otherwise |
| Clip-path, mask, blur, before and after slider | Motion layer or CSS in `add_html_motion_graphic`; blur on media via keyframes |
| Perspective, 3D tilt, flip | `tiltX`, `tiltY`, `tiltZ` fields, or native 3D layers |

Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT
