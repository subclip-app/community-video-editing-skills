# fx-11 Text to layout

**Group:** Type. **What it is:** One plain headline reflows into a full article page.

**Use it when:** turning a blog headline into a carousel cover or article teaser.

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** One line of small text in a dashed strip: [HEADLINE].
- **End:** An editorial page: a kicker [KICKER], the headline over two big lines, four body lines, an image and a pull quote card.
- **Timing:** From the start the headline splits into two halves that travel separately to their places and grow as they go. The second half drops first and then slides left so the halves never share a line. From about 0.8 s dashed guides show where each half went and the source strip shows a ghost of the old line. The kicker fades in around 1.0 s, the image wipes open left to right from about 1.05 s, body lines draw on from about 1.1 s and the quote card rises last from about 1.2 s. The return collapses it to one line.
- **What makes it premium:** The headline is the same text moving, never retyped, and everything else arrives in reading order.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Text to layout" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: One line of small text in a dashed strip: [HEADLINE].
End state: An editorial page: a kicker [KICKER], the headline over two big lines, four body lines, an image and a pull quote card.
Timing: From the start the headline splits into two halves that travel separately to their places and grow as they go. The second half drops first and then slides left so the halves never share a line. From about 0.8 s dashed guides show where each half went and the source strip shows a ghost of the old line. The kicker fades in around 1.0 s, the image wipes open left to right from about 1.05 s, body lines draw on from about 1.1 s and the quote card rises last from about 1.2 s. The return collapses it to one line.
Keep this detail: The headline is the same text moving, never retyped, and everything else arrives in reading order.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-11-text-to-layout.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 11. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
