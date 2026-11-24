Adapted for Subclip from https://github.com/emilkowalski/skills by Emil Kowalski, MIT

# Motion polish

Eight animation skills from Emil Kowalski, re-aimed at video. The original skills judge interface motion in code. These judge motion in a Subclip project: media keyframes, text keyframes, transitions, and HyperFrames or Remotion motion layers.

The craft stays: should it animate at all, what is its purpose, which easing and duration, how it enters and exits, what is cheap to render. What changed is how things get made. Everything runs through Subclip's editing tools. No code base to scan, no npm packages to install.

## The skills

- [animate](animate/SKILL.md): build one animation, deciding in the right order.
- [animate-expo](animate-expo/SKILL.md): spring physics and momentum for motion layers (the React Native parts were dropped).
- [animation-performance](animation-performance/SKILL.md): keep previews smooth and exports correct.
- [animation-vocabulary](animation-vocabulary/SKILL.md): turn "that bouncy thing" into the right term.
- [find-animation-opportunities](find-animation-opportunities/SKILL.md): read-only sweep for moments that deserve motion, and the many that do not.
- [improve-animations](improve-animations/SKILL.md): audit a project's motion and write precise fix plans.
- [remove-animations](remove-animations/SKILL.md): cut motion that cannot defend itself.
- [review-animations](review-animations/SKILL.md): review motion against a strict bar and give a verdict.

Shared numbers (easing curves, durations, spring settings, native keyframe mapping) live in [references/video-motion-values.md](references/video-motion-values.md).

## Install

In Subclip: **Skills > Add skill**, paste `https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/motion-polish`.

## Try it

> Review the motion in my project and tell me what to fix.

> Animate this lower third in: it should feel quick and clean.

> What is it called when text pushes in and settles with a little bounce?

## What was dropped

Hover and press states, keyboard shortcut rules, `prefers-reduced-motion` code, drag and gesture handling, haptics, Reanimated, Expo Router and every React Native specific recipe. A video has no cursor and no finger. Their ideas survive where they still apply (springs, momentum, interruptions become "do not restart a move that is already in flight").

<!-- examples:start -->

## Examples

<p align="center"><img src="examples/anchored-callout.jpg" alt="Settled callout with its leader anchored to the sea star in the diagram." width="720"><br><sub>Settled callout with its leader anchored to the sea star in the diagram.</sub></p>

<p align="center"><a href="examples/anchored-callout.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motion-polish/anchored-callout.gif" alt="A short ease-out introduces the sea star callout, then it exits on the same path." width="480"></a><br><sub>A short ease-out introduces the sea star callout, then it exits on the same path. <a href="examples/anchored-callout.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/spring-marker.jpg" alt="Settled illustrated check marker in the tide pool guide." width="720"><br><sub>Settled illustrated check marker in the tide pool guide.</sub></p>

<p align="center"><a href="examples/spring-marker.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motion-polish/spring-marker.gif" alt="A check marker lands with a small overshoot before it settles." width="480"></a><br><sub>A check marker lands with a small overshoot before it settles. <a href="examples/spring-marker.mp4">Play with sound</a></sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Rendered in code (HTML, SVG or canvas, HyperFrames): no image, video or audio model.</sub></p>

<!-- examples:end -->
