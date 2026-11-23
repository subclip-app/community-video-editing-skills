# SVG draw-on recipe

This six-second sprout example translates the upstream continuous-line technique into an SVG with one uninterrupted gold stroke and a green accent. Use the installed Subclip HyperFrames authoring contract to assemble the full composition in the tool's source argument. Use the contract's GSAP loader and one direct body root with composition ID `sprout`, start 0, duration 6, width 960 and height 540. Keep the root and page transparent for an overlay. Place the SVG inside the root.

```svg
<svg width="960" height="540" viewBox="0 0 960 540" aria-label="A gold line becomes a sprout">
  <path id="ink" d="M135 397 Q267 391 386 397 L481 397
    C478 328 500 282 551 246
    C605 208 650 222 672 153
    C602 143 537 177 551 246
    C500 282 468 278 441 251
    C403 211 353 221 329 166
    C402 161 449 197 441 251"
    fill="none" stroke="#e9b85f" stroke-width="6" stroke-linecap="round"
    stroke-linejoin="round" />
  <path id="accent" d="M551 246 C605 208 650 222 672 153
    C602 143 537 177 551 246 Z" fill="#539770" opacity="0" />
</svg>
```

Put this logic in the composition's inline animation block after the SVG. Initialize the dash before the runtime captures its first frame. Draw by path length, then let the finished sprout hold.

```js
const ink = document.getElementById('ink');
const length = ink.getTotalLength();
ink.style.strokeDasharray = String(length);
ink.style.strokeDashoffset = String(length);
const timeline = gsap.timeline({ paused: true });
timeline.to(ink, { strokeDashoffset: 0, duration: 3.35, ease: 'none' }, 0.2);
timeline.to('#accent', { opacity: 0.72, duration: 0.4 }, 3.7);
timeline.to({}, { duration: 1.9 }, 4.1);
window.__timelines['sprout'] = timeline;
```

Inspect at local times 0.45, 2, 3.95, and 5.5 seconds, adding the item start to each time when reviewing the project. Check that the accent stays hidden until the stroke finishes. For a still, initialize the complete stroke and accent at time zero and give the layer a hold of the requested duration. For requested Remotion, render the same SVG in JSX and derive dash offset and accent opacity directly from the local frame and project frame rate.

For paint passes, replace the stroke with named depth groups in back-to-front SVG order. Reveal each pass with opacity or a painted clip mask, leaving earlier visible groups in place. Use per-group timing for paper, wash, dry marks and the accent. If the creator needs to retime passes independently in the editor, author separate runtime items for them, give them matching bounds, and hold each visible pass until the shared beat ends.
