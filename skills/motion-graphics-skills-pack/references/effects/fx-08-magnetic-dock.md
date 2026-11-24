# fx-08 Magnetic dock

**Group:** Data and lists. **What it is:** A dark app dock whose icons swell as a cursor passes over them.

**Use it when:** showing the tools you use or a product's integrations.

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** Seven small square icons in a translucent dock, all the same size, the cursor off to the right.
- **End:** The cursor over the middle of the dock, nearby icons grown, a label above the biggest.
- **Timing:** During the move the cursor glides in and icons grow; each icon's size follows a bell curve of its distance from the cursor. The dock re-centres as it widens, growing around the cursor. Through the hold the cursor sweeps left and right once and the swell and label follow. On the return the cursor leaves and icons shrink.
- **What makes it premium:** Size is a smooth falloff, not "this one big, the rest small". The label always sits over the largest icon and a faint dashed curve above the dock draws the falloff.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Magnetic dock" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: Seven small square icons in a translucent dock, all the same size, the cursor off to the right.
End state: The cursor over the middle of the dock, nearby icons grown, a label above the biggest.
Timing: During the move the cursor glides in and icons grow; each icon's size follows a bell curve of its distance from the cursor. The dock re-centres as it widens, growing around the cursor. Through the hold the cursor sweeps left and right once and the swell and label follow. On the return the cursor leaves and icons shrink.
Keep this detail: Size is a smooth falloff, not "this one big, the rest small". The label always sits over the largest icon and a faint dashed curve above the dock draws the falloff.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-08-magnetic-dock.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 08. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
