# The 20 shots

Camera sentence to paste into block 2 (replace the bracketed parts), what it gives you, and a native way to fake it on existing footage. Native moves use `add_media_keyframe` on the clip. Effects use `add_media_effect` (check `list_element_catalog`).

| # | Shot | Camera sentence (block 2) | Native fake |
|---|---|---|---|
| 1 | Top-down | The camera is flat against the ceiling straight above [the row of seats], looking straight down; the furniture forms a bold graphic pattern on the floor and [person] is seen from above. | Not possible from a flat shot. Generate it. |
| 2 | Silhouette | The camera is low at the far end of the room looking toward [the bright window]; [person] sits side-on in front of it as a pure black silhouette, crisp outline of the hand and object. | Add `brightness` and `contrast` effects with a `vignette` on a backlit clip. |
| 3 | Inside the object | The camera is inside [a machine or cabinet] behind its glass front, looking out; items fill the edges of the frame large and soft, with reflections on the glass, and [person] sits centred beyond. | Add `radialProgressiveBlur` or `blur` on the frame edges. |
| 4 | Frame in frame | The camera is deep in [a narrow dark gap between two big objects] so its dark sides form a tall narrow frame; [person] sits small and sharp in the lit room beyond. | Crop with `set_media_framing` and add a dark overlay shape. |
| 5 | Reflection | The frame is filled by [a round convex mirror]; the image is the view in the mirror: the room curved and bulging, [person] small at its centre. | `fisheye` or `barrelDistortion` plus a circular crop shape. |
| 6 | Extreme macro | An extreme close-up of [the object in their hand]: its surface fills the frame, with a small detail (steam, light) in motion; fingers rest at the edge and the background is a soft blur. | Keyframe `sourceZoom` toward the object and `set_media_source_focus` on it. |
| 7 | Wide shot | A wide shot from the back corner of the room at standing height, the whole space in frame, [person] small in the middle, lines of machines or furniture receding. | Scale below 100 percent over a styled background, or keyframe a slow pull-out. |
| 8 | Side profile | The camera is at eye height beside them about 1.5 m away, catching a clean profile parallel to the frame, the room melting into soft light behind. Action: one slow sip or turn. | Needs a profile source. Generate it. |
| 9 | Security cam | The whole frame is the grainy black and white image of a security camera high in a corner, with a small white timestamp; it looks down the room at [person]. | `grayscale`, `noise`, `scanlines`, `vignette`, plus a small timestamp from `add_text_overlay`. |
| 10 | Low angle | The camera is at knee height in front of them looking up; knees and object large in the foreground, the face rising above, ceiling lights glowing over the head. | Slight `tiltX` perspective and a slow upward keyframe. |
| 11 | Foreground occlusion | The camera shoots through [hanging clothes, plants or a rack] that fill most of the frame large and soft-blurred; [person] sits sharp in a gap between them. | Overlay a blurred foreground layer with `linearProgressiveBlur`. |
| 12 | Lens flare | A medium close-up of the face with a bright light source at the top edge and a soft streak of flare across the lens; the face stays clear under it. | `shine` or `glow` keyframed across the top edge. |
| 13 | Peek through | The camera looks through [a wire mesh or grid] directly in front of the lens, soft and close across the frame; [person] sits sharp beyond it. | Overlay a mesh pattern (`pattern`, `gridlines`) and blur it softly. |
| 14 | Through glass | The camera is outside on a long lens, looking in through [a window with half-open blinds]; the glass and slats frame and flatten the room; [person] sits sharp inside. | `venetianBlinds` overlay plus a slight `blur` and a cool `tint`. |
| 15 | High angle | The camera is about 1 m above their head in front of them looking down; the object in their lap is in the centre with knees, seats and floor around. | Slight `tiltX` the other way and a slow downward keyframe. |
| 16 | Shallow focus | A close-up of the face with very shallow focus: only the eyes are sharp; lights behind melt into big soft circles of bokeh. Action: one slow blink. | `radialProgressiveBlur` centred on the eyes, with `sourceZoom` on the face. |
| 17 | Dutch angle | A medium shot with the whole frame rolled about 20 degrees; the lines of seats and background slant diagonally across the frame. | Keyframe `rotation` about 20 degrees and raise `scale` until the corners are covered. |
| 18 | Ground level | The camera rests on the floor at the end of the row, a foreground object large and close, then the legs and shoes, with the whole seated figure rising above. | Low-angle fake plus a blurred foreground layer. |
| 19 | Eye level | A calm medium shot at their exact eye height, three-quarter view, background slightly soft. | Plain crop with a gentle `blur` on a background copy. |
| 20 | Over the shoulder | The camera is close behind their shoulder: the blurred shoulder and ear frame the edge; ahead, in focus, is what they are looking at, with the object they hold low in the frame. | Needs a different viewpoint. Generate it. |

## Set order that cuts well

Start on a wide or top-down to place the viewer, alternate close and far, put two strange angles (inside the object, reflection, security cam) in the middle, and end on a quiet eye-level or over-the-shoulder.
