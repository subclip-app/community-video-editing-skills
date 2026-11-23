# Five relight looks

Each look has a still prompt (for the image model, image 1 = frame 0) and a video prompt (clip plus still). Only the "new light" part changes between looks. Keep a motivated source in every one.

## Still prompt frame

```text
Relight image 1 like a feature-film cinematographer. Keep image 1 exactly: same person, face,
expression, pose and hands, same framing, lens and camera position, same room layout and depth
of field. Change ONLY light, atmosphere and colour, taking image 2 as the reference for light,
haze and colour only (never its people, objects or room).
NEW LIGHT: [look paragraph below]
No lamp or bulb visible. A photoreal 35mm film still with natural skin texture, film grain and
soft halation.
```

## Looks

1. **Amber haze (burning sunset through haze, orange and teal).** Haze fills the room. A saturated orange sun glows through the window behind the subject, with beams slanting through the haze. Backlit: a hot orange rim on hair, ear, jaw, neck and a raised hand; the front of the face in deep warm shadow, still readable. The rest falls into dark teal-green shadow. Three stops darker than the raw clip; orange highlights, teal shadows, rich blacks.
2. **Rain on glass (stormy night, steel blue and cyan).** Cold and wet, deep blacks, about three stops darker. The window behind is covered in droplets and running streaks, with soft blurred city lights beyond. A cold white-blue streetlight from one side lights the face and hands. The rain exists only on the window glass, never on skin.
3. **Shadow play (one hard slash across the eyes, near black).** Night. A single narrow hard slash of warm tungsten light from one side, like light through a gap in a door, falls only across the eyes and the bridge of the nose and catches a raised hand as it passes. Everything else sinks into near black, faintly readable. About four stops darker.
4. **Teal smoke (cold shafts through smoke, teal and amber).** A dark room full of drifting smoky haze. Cold teal-green light pours through the window as volumetric shafts; one shaft crosses the face and shoulder, the rest of the body in silhouette. A faint warm amber glow touches the far wall. Deep low-key, haze glowing teal where the shafts pass.
5. **Red danger (blood-red window, red haze, horror).** The room is drenched in saturated red light and thick red haze. A hot red light blazes through the window, almost white-hot at the brightest point, so the air itself glows. Backlit: a burning red rim traces hair, ear, jaw, neck and a raised hand; the face and clothes fall into deep red-black shadow, face just readable. Walls glow deep red and fall to black in the corners. Monochrome red and black, crushed blacks, ominous. The eyes stay natural.

## Six fixes that solved every problem

| Problem | Fix |
|---|---|
| The model changed the room | State "nothing is added, removed or moved" and list what stays |
| A bulb or lamp appeared ("light from above") | Keep every source out of frame: "no lamp or bulb visible" |
| The light faded in | "Full strength from the first frame to the last, no fade-in, no flicker" |
| Rain or pattern landed on the face | "The rain exists only on the window glass" |
| Horror looks gave glowing eyes | "The eyes stay natural" |
| The video drifted from the still | Describe the winning still, not the reference |

## Ordering for the stack

Amber haze, rain on glass, shadow play, teal smoke, red danger alternates warm and cool well enough. Check that no two neighbours share a hue.
