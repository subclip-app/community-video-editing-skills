# Height and distance

How high the camera sits and how far it is from the subject. Prompt wording is ours; [brackets] are placeholders. Paste each sentence into the camera block of the prompt formula (`prompt-formula.md`).

## Already covered by the ai-camera-shots skill

- 1. Eye level: see ai-camera-shots: eye level in the `ai-camera-shots` skill.
- 2. Low angle: see ai-camera-shots: low angle in the `ai-camera-shots` skill.
- 3. High angle: see ai-camera-shots: high angle in the `ai-camera-shots` skill.
- 4. Bird's eye: see ai-camera-shots: top-down in the `ai-camera-shots` skill.
- 11. Wide shot: see ai-camera-shots: wide shot in the `ai-camera-shots` skill.
- 35. Ground level: see ai-camera-shots: ground level in the `ai-camera-shots` skill.
- 40. Macro: see ai-camera-shots: extreme macro in the `ai-camera-shots` skill.

## 5. Worm's eye

**Feeling:** Extreme low, the subject towers over the lens and looks monumental.

**Camera sentence:** The camera lies on the ground tilted steeply up past [a foreground object]; [subject] stays upright in the frame and looks down at the lens, [tall background element] rising behind.

**Tip:** Say the subject stays upright, or the model may flip the whole shot. Put something large in the foreground edge to sell the height.

**In Subclip:** Generate it. No flat clip can be tilted into this view. Start from a keyframe that already has the low viewpoint.

## 7. Close up

**Feeling:** The face fills the frame and the feeling is the story.

**Camera sentence:** The face of [subject] fills the frame from the top of the head to the collar, eyes clearly lit by [light source]; [subject] speaks quietly to the lens.

**Tip:** Light the eyes on purpose. A cap, hood or hair shadow will hide the emotion otherwise.

**In Subclip:** Native: crop with set_media_framing or keyframe sourceZoom on a medium shot, only if the source is 1080p or higher. Else generate.

## 8. Extreme close up

**Feeling:** One small feature carries the whole shot: an eye, lips, a hand.

**Camera sentence:** Only [the eyes and the bridge of the nose] of [subject] fill the frame, [light] catching the iris; one slow blink, then the gaze finds the lens.

**Tip:** Name the exact feature. The tighter the sentence, the tighter the shot. For objects see the macro entry in ai-camera-shots.

**In Subclip:** Native: sourceZoom to 250 percent on a sharp 4K source, with a little sharpen. Generate for true skin detail.

## 9. Medium shot

**Feeling:** The workhorse: face plus body language from the waist up.

**Camera sentence:** A medium shot at eye level from the top of the head down to the waist with clear headroom; [subject] sits in [place], hands loose, talking to the lens.

**Tip:** Ask for headroom in words, or the top of the head gets cut off.

**In Subclip:** Native: crop a wide or full-body clip. This is the cheapest angle to fake.

## 10. Full body

**Feeling:** Head to toe: clothing, posture and how the subject moves.

**Camera sentence:** Full body from head to toes in frame; [subject] stands up from [seat] in [place], turns to face the lens and settles, hands relaxed.

**Tip:** Give the subject a simple action so a still pose does not feel dead.

**In Subclip:** Native: pull a wide clip to 100 percent scale over a styled background. Generate if no wide source exists.

## 12. Extreme wide

**Feeling:** The subject is tiny inside a vast space: scale and isolation.

**Camera sentence:** The camera is far back and frames the whole [place] through [a doorway, arch or window], with [subject] tiny in the middle of the space.

**Tip:** Frame it through something (a doorway, trees, a window). The near edge sells the distance at once.

**In Subclip:** Native: scale a clip to 50 to 60 percent over a blurred copy of itself. Generate for a believable huge space.

## 23. Cowboy shot

**Feeling:** Framed from the head to mid-thigh: attitude, hands and hips stay in view.

**Camera sentence:** A cowboy-framed shot from the top of the head to mid-thigh; [subject] stands by [landmark] with hands resting at the hips and weight on one leg, then gives a small sure nod.

**Tip:** Name the lower frame line (mid-thigh) so the hands stay in shot.

**In Subclip:** Native: crop a full-body clip at mid-thigh with set_media_framing.

## 36. Knee level

**Feeling:** A low but readable height that still shows the whole figure.

**Camera sentence:** The camera sits at knee height and frames [subject] from head to toe as they stand in the middle of [place], ceiling just visible above.

**Tip:** Add a full-body request, or the model drifts down to the floor.

**In Subclip:** Native: a small tiltX on a full-body clip plus a slow upward keyframe. Generate for correct perspective.

## 37. Hip shot

**Feeling:** Raw and spontaneous, like a camera swinging at the hip.

**Camera sentence:** The camera is held low at hip height and angled up at [subject] as they walk past in [place], slightly tilted and loose; they glance down at the lens mid stride.

**Tip:** Say hip height, angled up, a little tilt and a loose hold. Otherwise it reads as a clean low angle.

**In Subclip:** Native: rotation of 3 to 5 degrees with a tiny random position keyframe, plus a slight upward tilt.

