# fx-14 Glass focus

**Group:** Systems. **What it is:** A lens slides down a blurred report and sharpens the row under it.

**Use it when:** making people read the one line of a report or pricing table that matters.

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** A report card [REPORT TITLE] with five rows of label and value, all softly blurred, and the lens on the first row.
- **End:** The lens resting on one row, that row sharp and slightly magnified.
- **Timing:** Over the move the lens steps to the second row. Through the hold it travels down to the last row and back up to the second, following an eased curve. On the return it goes back to the first row.
- **What makes it premium:** Only the text inside the lens is sharp, at 1.1 times size. Two faint tinted copies of that text sit a fraction of a pixel either side, like real glass, and the lens has a highlight across its top and a double rim.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Glass focus" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: A report card [REPORT TITLE] with five rows of label and value, all softly blurred, and the lens on the first row.
End state: The lens resting on one row, that row sharp and slightly magnified.
Timing: Over the move the lens steps to the second row. Through the hold it travels down to the last row and back up to the second, following an eased curve. On the return it goes back to the first row.
Keep this detail: Only the text inside the lens is sharp, at 1.1 times size. Two faint tinted copies of that text sit a fraction of a pixel either side, like real glass, and the lens has a highlight across its top and a double rim.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-14-glass-focus.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 14. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
