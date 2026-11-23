# 44 Cinematic Camera Angles Prompt Guide for AI Video (Digital Windows AI)

A Subclip community skill that turns a list of 44 camera angles into something an agent can use: pick the right angle for the feeling, write the prompt, decide whether Subclip can fake it with a crop, zoom or keyframe or needs a video model, quote the credits, and pair the angles into a cut.

Includes our own guide: how to choose angles, a prompt formula, an angle by emotion and use case table, and pairing rules.

## Install

Add this skill from **Skills > Community** in Subclip, or point your agent at this folder. It works with Claude Code, Codex, Cursor and the in-app agent through Subclip's MCP tools.

## Files

- `SKILL.md`: the workflow the agent follows.
- `references/angle-index.md`: all 44 angles with where each one is written.
- `references/height-and-distance.md`, `references/viewpoint-and-framing.md`, `references/camera-moves.md`, `references/lens-and-focus.md`: 31 angles in full, with a camera sentence, a tip and the Subclip route for each.
- `references/prompt-formula.md`, `references/our-guide.md`, `references/subclip-tools.md`.
- `examples/`: illustrated example frames (fictional runner on a footbridge) and a capability video.

## How it relates to ai-camera-shots

13 of the 44 angles overlap with the `ai-camera-shots` skill, so this skill points there by slug instead of repeating them. It writes the other 31 in full.

<!-- examples:start -->

## Examples

<p align="center"><video src="examples/capability-camera-angles.mp4" controls muted loop playsinline width="720"></video><br><sub>Capability reference, ten camera angles in one montage with labels</sub></p>

<p align="center"><img src="examples/worms-eye.jpg" alt="05 Worm's eye: camera on the floor, subject towers above" width="720"><br><sub>05 Worm's eye: camera on the floor, subject towers above</sub></p>

<p align="center"><img src="examples/knee-level.jpg" alt="36 Knee level: low height, whole figure in frame" width="720"><br><sub>36 Knee level: low height, whole figure in frame</sub></p>

<p align="center"><img src="examples/cowboy-shot.jpg" alt="23 Cowboy shot: head to mid-thigh, hands in view" width="720"><br><sub>23 Cowboy shot: head to mid-thigh, hands in view</sub></p>

<p align="center"><img src="examples/pov.jpg" alt="14 POV: first person, no hands visible" width="720"><br><sub>14 POV: first person, no hands visible</sub></p>

<p align="center"><img src="examples/hidden-camera.jpg" alt="29 Hidden camera: a real object blocks part of the frame" width="720"><br><sub>29 Hidden camera: a real object blocks part of the frame</sub></p>

<p align="center"><img src="examples/dolly-zoom.jpg" alt="32 Dolly zoom: same face size, stretched background" width="720"><br><sub>32 Dolly zoom: same face size, stretched background</sub></p>

<p align="center"><img src="examples/fisheye.jpg" alt="34 Fisheye: ultra wide lens inches from the face" width="720"><br><sub>34 Fisheye: ultra wide lens inches from the face</sub></p>

<p align="center"><img src="examples/whip-pan.jpg" alt="21 Whip pan: heavy motion blur landing on the subject" width="720"><br><sub>21 Whip pan: heavy motion blur landing on the subject</sub></p>

<p align="center"><img src="examples/drone-overview.jpg" alt="20 Drone: sweeping high view of the whole place" width="720"><br><sub>20 Drone: sweeping high view of the whole place</sub></p>

<p align="center"><img src="examples/snorricam.jpg" alt="31 Snorricam: face locked, world swings behind" width="720"><br><sub>31 Snorricam: face locked, world swings behind</sub></p>

<p align="center"><img src="examples/crash-zoom.jpg" alt="30 Crash zoom: sudden punch-in to the face" width="720"><br><sub>30 Crash zoom: sudden punch-in to the face</sub></p>

<p align="center"><img src="examples/extreme-wide.jpg" alt="12 Extreme wide: tiny subject framed through an arch" width="720"><br><sub>12 Extreme wide: tiny subject framed through an arch</sub></p>

<p align="center"><img src="examples/insert.jpg" alt="24 Insert: detail of the hands, face out of frame" width="720"><br><sub>24 Insert: detail of the hands, face out of frame</sub></p>

<p align="center"><img src="examples/split-diopter.jpg" alt="39 Split diopter: near mug and far subject both sharp" width="720"><br><sub>39 Split diopter: near mug and far subject both sharp</sub></p>

<p align="center"><img src="examples/steadicam-follow.jpg" alt="42 Steadicam: smooth glide behind the subject" width="720"><br><sub>42 Steadicam: smooth glide behind the subject</sub></p>

<p align="center"><img src="examples/hip-shot.jpg" alt="37 Hip shot: loose low camera angled up" width="720"><br><sub>37 Hip shot: loose low camera angled up</sub></p>

<p align="center"><sub>Original illustrated frames made for this skill by Subclip. Images: gpt-image-2 (Codex CLI image generation). Montage clip assembled from those frames, no video model.</sub></p>

<!-- examples:end -->

## Credits

The 44 camera angle names and the idea of one prompt per angle come from the free guide [44 Cinematic Camera Angles: The Prompt Guide](https://www.digital-windows.co.uk/guides/camera-angles) by Digital Windows AI (Liverpool, UK; author on Instagram as @digital_windows_ai). The guide states no license. All wording, prompts, tips, tables and images here are our own and no content of the guide is copied. Permission has not been confirmed. If you are the owner and want a change or removal, open an issue.
