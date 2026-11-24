# fx-16 Particle logo

**Group:** Systems. **What it is:** Scattered dots fly in and form a logo.

**Use it when:** closing a video, reel or launch post on your mark (use the creator's own logo file for the target shape).

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** A scatter of small dots on the left and a faint dashed outline of the mark on the right.
- **End:** The dots packed into the mark ([a ring with a diamond inside], the diamond in the accent color), a label [Mark 01] top left and "assembled" bottom right.
- **Timing:** Each dot starts its flight at a slightly different moment (leftmost first, with a little seeded randomness) spread over the first 1.1 s and flies on a gentle arc with a short trail. The last dots land at the end of the move and at about 2.0 s the label changes from "assembling" to "assembled". The return scatters them back to their exact start points.
- **What makes it premium:** Dots sit on a grid inside the mark's real shape so the finished logo is crisp, the scatter is seeded so every loop is identical, and the trails show direction without blur.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Particle logo" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: A scatter of small dots on the left and a faint dashed outline of the mark on the right.
End state: The dots packed into the mark ([a ring with a diamond inside], the diamond in the accent color), a label [Mark 01] top left and "assembled" bottom right.
Timing: Each dot starts its flight at a slightly different moment (leftmost first, with a little seeded randomness) spread over the first 1.1 s and flies on a gentle arc with a short trail. The last dots land at the end of the move and at about 2.0 s the label changes from "assembling" to "assembled". The return scatters them back to their exact start points.
Keep this detail: Dots sit on a grid inside the mark's real shape so the finished logo is crisp, the scatter is seeded so every loop is identical, and the trails show direction without blur.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-16-particle-logo.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 16. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
