# Video prompt blocks (relight or swap)

Image reference order: the clip is the video source, the still is the image reference. The clip controls camera, framing, timing and every movement. The still controls light, haze and colour. Pose, hands and expression always come from the clip, never from the still.

Write one block per heading. Keep the headings; they stop the model from changing things you did not list.

```text
VIDEO-TO-VIDEO [RELIGHT or SWAP] of the clip. Same full duration, one continuous shot, no cuts.
Every frame must look like the still: [LOOK NAME].

LOCKED FROM THE CLIP
The face 100% matching the clip, same hair, skin, build, clothes and jewellery. The camera exactly
as in the clip: same framing, lens and depth of field; it never moves, zooms or reframes. Every
gesture, head turn, expression and mouth movement frame for frame.

THE ROOM IS UNCHANGED (relight only)
Same room, same layout, same objects. Nothing added, removed or moved. Only the light changes.

REMOVE
[What goes: the original room light (relight), or the real objects in the room (swap): list them by name.]

LIGHTING (exactly as in the still)
[Describe the winning still: source, direction, rim, shadow, haze, exposure, colour split.]

STATIC LIGHT, NO REVEAL
The new light is at full strength from the first frame to the last: no fade-in, no light switching
on, no flicker, no brightness change. Haze drifts very slowly; its density and the light stay constant.

LENS AND LOOK
A frame from a real feature film: real photographic light, natural skin texture, organic grain, soft
halation on the brightest highlights. No CG sheen, no AI look.

LOCK
Same person, performance and framing, identical timing frame for frame. No cuts, no camera move,
no frozen or held frames, no other people, no text.
```

## Notes

- List the room's real objects in REMOVE and KEEP. Naming the actual sofa, TV, shelves and curtains is what makes swaps clean.
- If the clip is not 6 to 8 seconds, set the duration to the clip's real length.
- Audio: generate none and keep the original audio on its own item; or if the model returns audio, mute it.
- Run a draft first, then check it against Step 5 of the skill.
