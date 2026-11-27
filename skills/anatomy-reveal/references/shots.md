# The film

One continuous take in the original's rhythm: **drift, whip, hold**, repeated, then the object comes apart, one part at a time is highlighted, and it comes back together for a hero shot. Subclip layers are 16:9 at 1920 by 1080 by default; set another canvas when the creator asks for 9:16, 4:5 or 1:1 and reframe every key.

## Beats

The reference film (30 s, mirrorless camera) plays these beats. Adapt the details and features to your object; keep the rhythm.

| t (s) | Beat | What it shows |
| --- | --- | --- |
| 0.0 to 2.2 | **Tumble in** | Seen from behind and above, rolled about -26 degrees. It turns about 190 degrees in yaw into a three quarter front view while the roll rights itself. Slow start (`si`), fastest mid way (`lin`), settling (`so`). |
| 2.2 to 2.5 | Breath | A tiny drift. |
| 2.5 to 2.85 | **Whip 1** | Onto the richest detail at 2.5 to 4x (the mode dial). |
| 2.85 to 4.3 | **Hold** | The detail large, drifting; it moves (the dial turns 90 degrees). |
| 4.3 to 4.65 | **Whip 2** | To a second detail (the shutter button). |
| 4.65 to 5.7 | **Hold** | It works (the button presses and returns). |
| 5.7 to 6.05 | **Whip 3** | To another face (the back). |
| 6.05 to 8.1 | **Feature** | Something real happens and comes back (the screen tilts out 70 degrees and returns). |
| 8.1 to 10.0 | **Whip 4 and hold** | A second feature (the lens zooms out and back). |
| 10.0 to 10.8 | **Pull out** | Back to the whole object, three quarter from above. |
| 11.0 to 11.9 | **Explode** | It comes apart fast (`o`). |
| 11.9 to 24.3 | **Highlight shots** | Apart and drifting a few degrees. One assembly at a time turns accent cyan while the rest fade to ghosts, with a callout: sensor, battery, main board. Between highlights `hl` dips to 0.15 and rises again. |
| 24.6 to 26.2 | **Implode** | Back together while turning to face the viewer (`io`). |
| 26.2 to 30.0 | **Hero** | Front, a slight three quarter. A slow push that eases out to stillness. |

For a 10 s film keep only the tumble, two details, one feature, the explode and the hero. Over 12 s, add beats rather than stretching: more details, a second feature, more highlight shots.

## Keys

`KEYS` is a list of `{ t, channel values, ease }`. Each channel keeps its own keys; a key that leaves a channel out leaves it to its neighbours. Give every channel a value at t = 0.

| Channel | Meaning |
| --- | --- |
| `yaw` | Degrees about the screen vertical. 0: the front (+y) faces the viewer; 90: the right side (+x) does. Keep it continuous (write 200, not -160, when the short way round passes 180). |
| `pitch` | Degrees about the screen horizontal. Positive: seen from above. |
| `roll` | Degrees about the view axis. |
| `zoom` | 1 fits the scene radius; interpolated in log space. Details 1.8 to 3; the explode about 0.6. |
| `focus` | An anchor name the frame centres on. It moves with its assembly, so a close-up stays on its subject while the object turns or explodes. |
| `panX`, `panY` | Screen offset in pixels. |
| `apart` | 0 to 1 through the staggered explode. |
| `hl` | 0 to 1: how strongly the label's highlight target lights up and the rest fades. |
| feature channels | One per feature group (such as `dial`, `tilt` and `press`), in `DEF` too. |

`ease` is the ease into that key:

| Ease | Use |
| --- | --- |
| `whip` | Subject changes (about 0.3 to 0.35 s). |
| `io` | Pull outs, features, the implode, highlight changes. |
| `o` | Explode and settle. |
| `si`, `so` | The tumble's start and end. |
| `lin` | Drifting holds. |

## Labels, highlights and callouts

`LABELS` is a list of `{ t, hint, readout, hl, callouts }`. From its time on, the label sets the plate's bottom corners, the highlight target (`hl`: an assembly, part name or tag) and the callouts. `{parts}` and `{assemblies}` are filled in from the build.

A callout is `{ anchor, text, sub, dx, dy }`: a dot on the anchor, a leader to `dx`, `dy` pixels away and a label in Subclip blue. It fades in just after its label time and out just before the next. Keep the label at least 80 px inside the frame; check the widest explode frame.

## Framing

Never guess an angle. Before adding the layer, render candidate poses and pick by eye. Inside Subclip, add the layer and call `view_frame` with up to eight times at once; change keys with `edit_layer_source` and look again. When the creator's coding agent has a browser, the same document opens as a plain page, and `window.__renderAt(t)` (if you expose it) draws any time.

What to check in every beat:

- the share of the frame width the object fills (45 to 65 percent in wide shots);
- nothing important cut off, the explode fully inside the frame at its widest;
- the feature and the highlight target visible and not hidden behind another part;
- callout labels inside the plate and not over the highlighted part.

## Motion blur

The original renders each frame from many sub-frames with an adaptive shutter, so whips smear. A HyperFrames layer renders one sample per frame, so this edition has no motion blur. Keep whips at 0.3 to 0.35 s (a little longer than the original's 0.24 s) so they read at 30 fps without strobing, and add a short whoosh on each whip.
