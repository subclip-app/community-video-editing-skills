# fx-12 Image reveal

**Group:** Type. **What it is:** Dark shutter slats pull back to reveal an image.

**Use it when:** teasing a product drop (swap in your own photo afterwards).

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** The frame covered by seven dark vertical slats.
- **End:** The image in full with a small label pill [New drop] top left.
- **Timing:** Each slat narrows to nothing toward its own centre line, left to right, each starting a beat after the last. The last slat is gone at about 1.7 s. The label fades in from about 1.05 s. The return closes the slats again.
- **What makes it premium:** Each slat has a faint light edge so it reads as a physical object, and the slats go in sequence, not together.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Image reveal" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: The frame covered by seven dark vertical slats.
End state: The image in full with a small label pill [New drop] top left.
Timing: Each slat narrows to nothing toward its own centre line, left to right, each starting a beat after the last. The last slat is gone at about 1.7 s. The label fades in from about 1.05 s. The return closes the slats again.
Keep this detail: Each slat has a faint light edge so it reads as a physical object, and the slats go in sequence, not together.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-12-image-reveal.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 12. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
