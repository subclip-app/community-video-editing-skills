# fx-07 Spring stack

**Group:** Data and lists. **What it is:** A stack of cards fans out and the top card overshoots, then settles.

**Use it when:** showing three offers, case studies or testimonials in turn.

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** Three product cards stacked at the same angle. The top shows an image, a name [NAME], a price [PRICE] and a tick button.
- **End:** The three cards fanned at three different angles.
- **Timing:** Each card follows a real spring with its own damping: the back card heavily damped, the middle less, the top least, so it swings past its resting angle and wobbles back. The top card leads and the others follow 0.05 and 0.1 s behind. It settles by about 1.8 s. A dashed ghost shows the top card's resting angle, a short trail of accent dots follows its corner, and a small easing graph in the corner shows a dot riding the overshoot. The return eases everything back with no spring.
- **What makes it premium:** Springs, not easing curves, with different damping per card. The ghost and the curve inset explain the physics without a word.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Spring stack" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: Three product cards stacked at the same angle. The top shows an image, a name [NAME], a price [PRICE] and a tick button.
End state: The three cards fanned at three different angles.
Timing: Each card follows a real spring with its own damping: the back card heavily damped, the middle less, the top least, so it swings past its resting angle and wobbles back. The top card leads and the others follow 0.05 and 0.1 s behind. It settles by about 1.8 s. A dashed ghost shows the top card's resting angle, a short trail of accent dots follows its corner, and a small easing graph in the corner shows a dot riding the overshoot. The return eases everything back with no spring.
Keep this detail: Springs, not easing curves, with different damping per card. The ghost and the curve inset explain the physics without a word.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-07-spring-stack.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 07. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
