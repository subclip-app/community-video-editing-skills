# fx-06 Dashboard zoom

**Group:** Data and lists. **What it is:** One KPI tile lifts out of a dashboard and fills the frame.

**Use it when:** pulling the one KPI that matters out of a monthly dashboard.

## Inputs to ask for

The real words, labels and numbers that go in it (samples carry a visible "example" label on every frame), the size (1080x1080, 1080x1350, 1080x1920 or 1920x1080), and loop or hold. Loop repeats forever (a post or a GIF). Hold plays once and stays on the finished frame (under narration, so it never resets mid-sentence). Colors and fonts come from the creator's brand notes (recipe 01) or are asked for.

## The 8 second clock

Start 0.0 (held one frame), move 0.0 to 2.2 (cubic ease in and out), hold 2.2 to 6.6 (something small stays alive), return 6.6 to 8.0, loop at 8.0 identical to 0.0. Inside the move parts start at different moments: early is the first 0.8 s, middle about 0.8 to 1.4 s, late 1.4 to 2.2 s.

## Recipe

- **Start:** A quiet dashboard: three KPI tiles, a trend line and two grey text bars.
- **End:** The dashboard dimmed behind a large card: [METRIC NAME], a delta chip [+18%], the big number [12,480] and a sparkline.
- **Timing:** In the first 0.9 s four accent corner brackets snap around the chosen tile. Across the move the rest of the dashboard dims. From about 0.7 s the tile scales forward from its exact position to the large card, with dashed guides joining the corners. The card contents fade in over the second half. The return shrinks it back into its slot.
- **What makes it premium:** The card grows from the tile's real position and size, so it reads as the same object coming closer. The brackets say "this one" before anything moves.

## Prompt (swap the [brackets])

```text
Build one seekable HyperFrames layer, [1080 x 1350], 8 seconds, [loop | hold], an effect called "Dashboard zoom" in my brand ([GROUND], [SURFACE], [INK], [MUTED], [ACCENT], [FONT]).
Start state: A quiet dashboard: three KPI tiles, a trend line and two grey text bars.
End state: The dashboard dimmed behind a large card: [METRIC NAME], a delta chip [+18%], the big number [12,480] and a sparkline.
Timing: In the first 0.9 s four accent corner brackets snap around the chosen tile. Across the move the rest of the dashboard dims. From about 0.7 s the tile scales forward from its exact position to the large card, with dashed guides joining the corners. The card contents fade in over the second half. The return shrinks it back into its slot.
Keep this detail: The card grows from the tile's real position and size, so it reads as the same object coming closer. The brackets say "this one" before anything moves.
Rules: every frame from time alone; frame 0 and frame 8 identical; the return eases every element back, nothing snaps; real content only, samples labelled "example"; fonts and images embedded; scale the effect to fill the frame with margins from the brand notes; load fonts before frame 0.
Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s. Check: frame 0 equals frame 8, frames 0, 1 and 2.2 all differ, nothing is cut off, the point reads from the single frame at 4.4, and every color and font is from the brand notes.
```

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `export_video`. For a reel cut, use the active move (about 1.4 s) and hold mode under narration, then recipe 15.

## Credit cost

The code route costs no credits.

## Reference clip

`examples/fx-06-dashboard-zoom.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/motion-effects/references/effects.md` (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/references/effects.md), MIT, effect 06. Rewritten in our own words for Subclip. Back to the overview: [10 Motion effects](../10-motion-effects.md).
