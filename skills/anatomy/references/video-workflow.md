# From figure to explainer clip

## Scene structure

Each scene is a separate HyperFrames layer item with its own `data-duration`. Typical clip of four scenes:

| Scene | Seconds | What the viewer sees | Narration job |
|---|---|---|---|
| 1 Build | 6 to 10 | Base fades in, parts land one by one (opacity and a small rise along z), card appears | Name the machine and the question |
| 2 Mechanism | 8 to 12 | The carriage moves, the needle follows, the readout changes | Say what moves and what it means |
| 3 Edge case | 8 to 12 | The same machine at a limit: full, empty, overload | The twist or the failure case |
| 4 Takeaway | 4 to 8 | Machine settles, the lit part pulses once, card readout shows the final number | One line to remember |

Start each scene in the state the previous one ended in. Reuse the same geometry code in each layer, so the machine is identical.

## Build-up choreography

- Stagger parts with `tl.fromTo(el, { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, at)`, base first, then structure, then mechanism, then the lit subject last. Use group elements (`<g class="grp-base">`) so one tween moves a whole group.
- Use `ISO.vec(0, 0, 14)` for a rise along z so parts land along the real vertical.
- A soft halo ellipse under the base fades in first.

## Readout

The card readout is text driven by the model. Precompute the values that appear in the scene, one `text` element per value, and switch them with `tl.set` at the beat where the physical quantity changes. Keep the value and the physical state in the same beat (for example "blocked" together with the full counter).

## Timing to narration

1. Import the narration and read each sentence's start and end from the project (`get_project_outline`, or transcribe locally with `transcribe_project` to get word times).
2. Set each scene's start time and duration to cover its sentences with about 0.3 s of lead and 0.5 s of tail.
3. Place key motion (the needle swing, the gate closing) on the word that names it.
4. Do not stretch audio to fit the picture. Rewrite the line and regenerate when it is too long.

## Cuts between scenes

Scenes share one camera, so use hard cuts. If the creator wants a soft join, fade only the card text, never the machine. Do not add camera moves that change the projection, because the mini kit draws a fixed camera.

## Text and fonts

- Titles, hints and readouts are SVG text inside the layer. Use a system stack and check wrapping in a real frame. If a specific font is needed, follow the font rules of `subclip-hyperframes-layer`.
- Never apply CSS `filter` to text or to an ancestor of text.
- Long explanatory text belongs in narration or native captions (`transcribe_project`, `update_caption_style`), not in the drawing.

## Checks per layer

- `validate_runtime_layer_source`, then `add_runtime_layer`.
- `seek_timeline` then `view_current_frame` at the entrance, mid motion, the settled state and the exit.
- Compare the first frame of scene n+1 with the last frame of scene n.
- Run through the craft checklist: every part rests on another, every line ends on something, nothing passes through anything, depth order reads right, the readout is true.
