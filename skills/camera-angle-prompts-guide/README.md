# 44 Cinematic Camera Angles Prompt Guide for AI Video (Digital Windows AI)

<!-- cli:start -->
> Install from your terminal: `npx @subclip/community-skills install camera-angle-prompts-guide`
<!-- cli:end -->

A Subclip community skill that turns a list of 44 camera angles into something an agent can use: pick the right angle for the feeling, write the prompt, decide whether Subclip can fake it with a crop, zoom or keyframe or needs a video model, quote the credits, and pair the angles into a cut.

Includes our own guide: how to choose angles, a prompt formula, an angle by emotion and use case table, and pairing rules.

## Install

Add this skill from **Skills > Community** in Subclip, or point your agent at this folder. It works with Claude Code, Codex, Cursor and the in-app agent through Subclip's MCP tools.

## Files

- `SKILL.md`: the workflow the agent follows.
- `references/angle-index.md`: all 44 angles with where each one is written.
- `references/height-and-distance.md`, `references/viewpoint-and-framing.md`, `references/camera-moves.md`, `references/lens-and-focus.md`: 31 angles in full, with a camera sentence, a tip and the Subclip route for each.
- `references/prompt-formula.md`, `references/our-guide.md`, `references/subclip-tools.md`.
- `examples/`: one illustrated frame per angle (fictional runner on a footbridge), numbered `01` to `44` in the same order as `references/angle-index.md` (file `NN-<angle>.jpg`), plus a capability video.

## How it relates to ai-camera-shots

13 of the 44 angles overlap with the `ai-camera-shots` skill, so this skill points there by slug instead of repeating them. It writes the other 31 in full.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/capability-camera-angles.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/camera-angle-prompts-guide/capability-camera-angles.gif" alt="Capability reference, ten camera angles in one montage with labels" width="480"></a><br><sub>Capability reference, ten camera angles in one montage with labels <a href="examples/capability-camera-angles.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/01-eye-level.jpg" alt="1. Eye level: camera at the subject's eyes, neutral and honest" width="720"><br><sub>1. Eye level: camera at the subject's eyes, neutral and honest</sub></p>

<p align="center"><img src="examples/02-low-angle.jpg" alt="2. Low angle: camera below, tilted up, subject feels powerful" width="720"><br><sub>2. Low angle: camera below, tilted up, subject feels powerful</sub></p>

<p align="center"><img src="examples/03-high-angle.jpg" alt="3. High angle: camera above looking down, subject feels small" width="720"><br><sub>3. High angle: camera above looking down, subject feels small</sub></p>

<p align="center"><img src="examples/04-birds-eye.jpg" alt="4. Bird's eye: straight down from overhead, the god view" width="720"><br><sub>4. Bird's eye: straight down from overhead, the god view</sub></p>

<p align="center"><img src="examples/05-worms-eye.jpg" alt="5. Worm's eye: camera on the floor, subject towers above" width="720"><br><sub>5. Worm's eye: camera on the floor, subject towers above</sub></p>

<p align="center"><img src="examples/06-over-the-shoulder.jpg" alt="6. Over the shoulder: behind one shoulder, we share her view" width="720"><br><sub>6. Over the shoulder: behind one shoulder, we share her view</sub></p>

<p align="center"><img src="examples/07-close-up.jpg" alt="7. Close up: the face fills the frame, emotion first" width="720"><br><sub>7. Close up: the face fills the frame, emotion first</sub></p>

<p align="center"><img src="examples/08-extreme-close-up.jpg" alt="8. Extreme close up: one feature, the eyes, tells the story" width="720"><br><sub>8. Extreme close up: one feature, the eyes, tells the story</sub></p>

<p align="center"><img src="examples/09-medium-shot.jpg" alt="9. Medium shot: waist up, face plus body language" width="720"><br><sub>9. Medium shot: waist up, face plus body language</sub></p>

<p align="center"><img src="examples/10-full-body.jpg" alt="10. Full body: head to toe, posture and wardrobe" width="720"><br><sub>10. Full body: head to toe, posture and wardrobe</sub></p>

<p align="center"><img src="examples/11-wide-shot.jpg" alt="11. Wide shot: the subject in her world, place established" width="720"><br><sub>11. Wide shot: the subject in her world, place established</sub></p>

<p align="center"><img src="examples/12-extreme-wide.jpg" alt="12. Extreme wide: tiny subject, scale and isolation" width="720"><br><sub>12. Extreme wide: tiny subject, scale and isolation</sub></p>

<p align="center"><img src="examples/13-dutch-angle.jpg" alt="13. Dutch angle: frame rolled about 20 degrees, unease" width="720"><br><sub>13. Dutch angle: frame rolled about 20 degrees, unease</sub></p>

<p align="center"><img src="examples/14-pov.jpg" alt="14. POV: first person, the viewer becomes a character" width="720"><br><sub>14. POV: first person, the viewer becomes a character</sub></p>

<p align="center"><img src="examples/15-tracking.jpg" alt="15. Tracking: camera travels beside the subject" width="720"><br><sub>15. Tracking: camera travels beside the subject</sub></p>

<p align="center"><img src="examples/16-dolly-in.jpg" alt="16. Dolly in: steady glide forward for emphasis" width="720"><br><sub>16. Dolly in: steady glide forward for emphasis</sub></p>

<p align="center"><img src="examples/17-dolly-out.jpg" alt="17. Dolly out: pull back to reveal the world" width="720"><br><sub>17. Dolly out: pull back to reveal the world</sub></p>

<p align="center"><img src="examples/18-orbit.jpg" alt="18. Orbit: arc around the subject for a hero moment" width="720"><br><sub>18. Orbit: arc around the subject for a hero moment</sub></p>

<p align="center"><img src="examples/19-crane.jpg" alt="19. Crane: rising reveal to a bigger scale" width="720"><br><sub>19. Crane: rising reveal to a bigger scale</sub></p>

<p align="center"><img src="examples/20-drone.jpg" alt="20. Drone: aerial sweep over the whole space" width="720"><br><sub>20. Drone: aerial sweep over the whole space</sub></p>

<p align="center"><img src="examples/21-whip-pan.jpg" alt="21. Whip pan: fast blur that slams into the next moment" width="720"><br><sub>21. Whip pan: fast blur that slams into the next moment</sub></p>

<p align="center"><img src="examples/22-profile.jpg" alt="22. Profile: clean side view of the face" width="720"><br><sub>22. Profile: clean side view of the face</sub></p>

<p align="center"><img src="examples/23-cowboy-shot.jpg" alt="23. Cowboy shot: head to mid-thigh, attitude and hands" width="720"><br><sub>23. Cowboy shot: head to mid-thigh, attitude and hands</sub></p>

<p align="center"><img src="examples/24-insert.jpg" alt="24. Insert: detail of hands and objects, face out of frame" width="720"><br><sub>24. Insert: detail of hands and objects, face out of frame</sub></p>

<p align="center"><img src="examples/25-reflection.jpg" alt="25. Reflection: we see her only in a mirror" width="720"><br><sub>25. Reflection: we see her only in a mirror</sub></p>

<p align="center"><img src="examples/26-dirty-frame.jpg" alt="26. Dirty frame: soft foreground object adds depth" width="720"><br><sub>26. Dirty frame: soft foreground object adds depth</sub></p>

<p align="center"><img src="examples/27-rack-focus.jpg" alt="27. Rack focus: focus shifts from foreground to subject" width="720"><br><sub>27. Rack focus: focus shifts from foreground to subject</sub></p>

<p align="center"><img src="examples/28-tilt-reveal.jpg" alt="28. Tilt reveal: tilt up the body, the face lands last" width="720"><br><sub>28. Tilt reveal: tilt up the body, the face lands last</sub></p>

<p align="center"><img src="examples/29-hidden-camera.jpg" alt="29. Hidden camera: a real object blocks the frame, we feel watched" width="720"><br><sub>29. Hidden camera: a real object blocks the frame, we feel watched</sub></p>

<p align="center"><img src="examples/30-crash-zoom.jpg" alt="30. Crash zoom: sudden fast punch-in for shock or comedy" width="720"><br><sub>30. Crash zoom: sudden fast punch-in for shock or comedy</sub></p>

<p align="center"><img src="examples/31-snorricam.jpg" alt="31. Snorricam: face locked, the world swings around it" width="720"><br><sub>31. Snorricam: face locked, the world swings around it</sub></p>

<p align="center"><img src="examples/32-dolly-zoom.jpg" alt="32. Dolly zoom: vertigo, background stretches behind a steady face" width="720"><br><sub>32. Dolly zoom: vertigo, background stretches behind a steady face</sub></p>

<p align="center"><img src="examples/33-barrel-roll.jpg" alt="33. Barrel roll: the whole world turns over and lands level" width="720"><br><sub>33. Barrel roll: the whole world turns over and lands level</sub></p>

<p align="center"><img src="examples/34-fisheye.jpg" alt="34. Fisheye: ultra wide glass bends the room, playful" width="720"><br><sub>34. Fisheye: ultra wide glass bends the room, playful</sub></p>

<p align="center"><img src="examples/35-ground-level.jpg" alt="35. Ground level: camera on the floor, feet first, world towers above" width="720"><br><sub>35. Ground level: camera on the floor, feet first, world towers above</sub></p>

<p align="center"><img src="examples/36-knee-level.jpg" alt="36. Knee level: low but whole figure in frame" width="720"><br><sub>36. Knee level: low but whole figure in frame</sub></p>

<p align="center"><img src="examples/37-hip-shot.jpg" alt="37. Hip shot: raw, loose camera held at the hip" width="720"><br><sub>37. Hip shot: raw, loose camera held at the hip</sub></p>

<p align="center"><img src="examples/38-frame-within-a-frame.jpg" alt="38. Frame within a frame: a doorway boxes the subject in" width="720"><br><sub>38. Frame within a frame: a doorway boxes the subject in</sub></p>

<p align="center"><img src="examples/39-split-diopter.jpg" alt="39. Split diopter: near and far both sharp" width="720"><br><sub>39. Split diopter: near and far both sharp</sub></p>

<p align="center"><img src="examples/40-macro.jpg" alt="40. Macro: intimate texture and tiny detail" width="720"><br><sub>40. Macro: intimate texture and tiny detail</sub></p>

<p align="center"><img src="examples/41-handheld.jpg" alt="41. Handheld: loose camera that breathes, real and urgent" width="720"><br><sub>41. Handheld: loose camera that breathes, real and urgent</sub></p>

<p align="center"><img src="examples/42-steadicam.jpg" alt="42. Steadicam: smooth glide with the character" width="720"><br><sub>42. Steadicam: smooth glide with the character</sub></p>

<p align="center"><img src="examples/43-pedestal-up.jpg" alt="43. Pedestal up: camera rises straight up without tilting" width="720"><br><sub>43. Pedestal up: camera rises straight up without tilting</sub></p>

<p align="center"><img src="examples/44-slow-pan.jpg" alt="44. Slow pan: camera turns on the spot to find her" width="720"><br><sub>44. Slow pan: camera turns on the spot to find her</sub></p>

<p align="center"><sub>Our own illustrated frames. Image: gpt-image-2 (Codex CLI). Video montage built in HyperFrames. Angle list from the guide by Digital Windows AI.</sub></p>

<!-- examples:end -->

## Credits

The 44 camera angle names and the idea of one prompt per angle come from the free guide [44 Cinematic Camera Angles: The Prompt Guide](https://www.digital-windows.co.uk/guides/camera-angles) by Digital Windows AI (Liverpool, UK; author on Instagram as @digital_windows_ai). The guide states no license. All wording, prompts, tips, tables and images here are our own and no content of the guide is copied. Permission has not been confirmed. If you are the owner and want a change or removal, open an issue.
