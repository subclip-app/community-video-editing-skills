# Storyboard layer skeleton

A worked pattern from the reference video: three Figma frames side by side, a push into frame one, two clicks that move one live element through the next two states, and a pull-back. Replace the card markup with the creator's exported components. Times are seconds at 30 fps.

## Structure

- `#scene`: 1920 by 1080, white, `overflow: clip`, `data-composition-id="scene"`.
- `#dots`: a fixed dot grid (Figma canvas feel), outside the camera so pitch changes prove the zoom.
- `#cam`: one camera group with `transform-origin: 0 0`. Everything that belongs to the canvas sits inside it, including the cursor, so a push moves frames and cursor together.
- `.frame` x3: the Figma frames at their real size, a grey label above (`Habit / 1 Idle`), the motion note below in italics, and a `.sel` outline in Figma's selection blue for the reading pass.
- Frame one holds the live element (`#live`). Frames two and three hold static copies of the later states, built from the same markup with the state values filled in.
- `#cursor`: a coloured arrow with a name tag that travels as one rigid unit. Scale presses on the arrow tip.

Write all of this as static HTML in the layer. Layers block `innerHTML`, so generate the repeated frame markup before you paste it, not at runtime.

## Camera

```js
const PUSH = 1.55, PC = { x: 500, y: 430 }; // centre of the live element in cam space
const camAt = (s) => (s === 1 ? { scale: 1, x: 0, y: 0 } : { scale: s, x: 960 - PC.x * s, y: 540 - PC.y * s });
tl.fromTo('#cam', camAt(1), { ...camAt(PUSH), duration: 1.2, ease: 'power3.inOut', immediateRender: false }, 4.4);
tl.to('#cam', { ...camAt(1), duration: 1.2, ease: 'power3.inOut' }, 12.0);
```

Return to the exact identity at the end. A pull-back that ends at a shifted origin was the first bug in the test.

## Beats

| Time | Beat |
| --- | --- |
| 0.6 to 1.5 | cursor enters from below, straight up to frame one |
| 1.4 to 4.0 | selection outline steps frame one, two, three while the cursor reads them |
| 4.4 to 5.6 | push into frame one; frames two and three, labels and notes fade out |
| 6.0 | click 1: toggle presses (0.94), knob slides, ring fills one step, chip pops |
| 6.6 | cursor drifts aside while the result settles |
| 9.6 | click 2: card grows, bars rise one by one with a 0.12 s stagger |
| 12.0 to 13.2 | pull back; the other frames return; the live card now matches frame three |
| 13.4 to 14.8 | selection outline steps the three frames again: they were states |
| 16.3 | cursor leaves off the right edge |

Text changes inside the live element (counters, labels) use `tl.set(el, { textContent })` at time 0 for the first state and at the click for the next, so seeking backwards restores them.

Tween only the elements that change. Animate a subset with an explicit list (`[...fills].slice(0, 3)`), not a function value, so the result is the same in preview and export.
