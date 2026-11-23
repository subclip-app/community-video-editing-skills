# Dedupe against existing community skills

Every style on the Applied AI list (86 entries) was checked against all skills in `skills/*` (technique, look and source repo). A style is covered when the same technique or the same repo already exists. Only styles that are new stay here. Repo licenses were checked with `gh repo view`.

Result: 19 list entries kept (merged into 16 files), 67 covered elsewhere.

Notes on repos: lemomo-ai/lemo-opuscar is non-commercial (CC BY-NC 4.0) and joeseesun/opus-video-prompts has no license, so neither is adapted. For the opus prompt packs only our own new prompts are written and the repo is cited as a style reference.

| # | Style (as listed) | Decision | Where | Reason |
| --- | --- | --- | --- | --- |
| 1 | Isometric (lemo-opuscar) | covered by anatomy | anatomy, ai-style-atlas 15 | Isometric infographic technique. Repo lemomo-ai/lemo-opuscar is non-commercial (CC BY-NC 4.0 per INSTALL_YOURSELF.md; GitHub shows other), so it cannot be adapted. |
| 2 | Paper-Cut (lemo-opuscar) | covered by paper-cut-motion | paper-cut-motion, ai-style-atlas 24 | Layered paper scene technique. Source repo is non-commercial. |
| 3 | 3D Data Chart (Three.js) | kept | 01-falling-stack-chart | No existing skill builds a chart from falling objects. Merged with 20 and 29. |
| 4 | Synthwave (Three.js) | covered by ai-style-atlas | ai-style-atlas 27 | Synthwave Outrun is in the atlas; threejs-3d-scenes covers the engine. |
| 5 | 3D Explainer (Blender MCP) | covered by blender-to-subclip | blender-to-subclip | Same technique (Blender scene rendered then imported). |
| 6 | Maths Diagram (Opus prompt packs) | kept | 02-proof-machine | Maths-as-a-machine metaphor is not in manim-composer; written as our own prompt. |
| 7 | Cartoon Explainer (Claude Animation Base) | covered by cartoon-animation | cartoon-animation | Same repo (JohnHeibel/ClaudeAnimationBase). |
| 8 | Domino Reveal (react-three-rapier) | covered by r3f-physics-and-effects | r3f-physics-and-effects | Same repo and technique (rigid body chain). |
| 9 | Glow Atom (react-postprocessing) | covered by r3f-physics-and-effects | r3f-physics-and-effects | Same repo (bloom and depth of field). |
| 10 | Glass Mosaic (awesome-opus5-5-videos) | covered by code-video-recipes | code-video-recipes, ai-style-atlas 62 | Same repo is the code-video-recipes catalog; mosaic look is atlas 62. |
| 11 | Pixel Explainer (pixelfx) | covered by pixelfx | pixelfx | Same repo. |
| 12 | CGI Product (Three.js) | covered by threejs-3d-scenes | threejs-3d-scenes | Product turntable is its core recipe. |
| 13 | Retro Terminal (lemo-opuscar) | covered by ai-style-atlas | ai-style-atlas 45 | Phosphor Terminal; source repo is non-commercial. |
| 14 | Galton Board (react-three-rapier) | covered by r3f-physics-and-effects | r3f-physics-and-effects | Same repo and technique (many bodies, fixed timestep). |
| 15 | Pixel Art (pixelfx) | covered by pixelfx | pixelfx | Same repo. |
| 16 | Ink Wash (lemo-opuscar) | covered by claude-drawing-skill | claude-drawing-skill, ai-style-atlas 32 | Ink wash on paper is covered. |
| 17 | Data Towers (Blender MCP) | covered by blender-to-subclip | blender-to-subclip | Same technique. |
| 18 | Line-Art Diagram (Opus prompt packs) | kept | 03-line-art-science-diagram | Stepwise thin-line science diagram is not covered; own prompt, repo used as a style reference only. |
| 19 | Isometric recreation | covered by anatomy | anatomy | Isometric again. |
| 20 | 3D Data Chart recreation | kept | 01-falling-stack-chart | Merged into 01. |
| 21 | Neon Flight recreation | covered by ai-style-atlas | ai-style-atlas 27 | Synthwave wireframe flight. |
| 22 | Cartoon Explainer recreation | covered by cartoon-animation | cartoon-animation | Flat cartoon explainer. |
| 23 | Blueprint recreation | covered by ai-style-atlas | ai-style-atlas 37 | Engineering Blueprint. |
| 24 | Travel Poster recreation | covered by ai-style-atlas | ai-style-atlas 49 | Gouache Travel Poster. |
| 25 | Hologram HUD recreation | covered by ai-style-atlas | ai-style-atlas 30, 16 | Holographic and oscilloscope looks. |
| 26 | Chalkboard recreation | covered by ai-style-atlas | ai-style-atlas 23 | Chalkboard Lesson. |
| 27 | Watercolour recreation | covered by ai-style-atlas | ai-style-atlas 2 | Watercolor Wash. |
| 28 | Bean-to-cup isometric (recreation) | covered by anatomy | anatomy, ai-style-atlas 15 | Isometric route. |
| 29 | Revenue coin-stack chart (recreation) | kept | 01-falling-stack-chart | Merged into 01. |
| 30 | Pythagoras 3-4-5 diagram | covered by manim-composer | manim-composer | Maths diagram. |
| 31 | Cartoon sleep-by-age example | covered by cartoon-animation | cartoon-animation | Cartoon presenter with a chart. |
| 32 | Comic Art (paper plane world) | covered by ai-style-atlas | ai-style-atlas 14 | Halftone Pop Panel. |
| 33 | CGI Motion (paper plane world) | covered by threejs-3d-scenes | threejs-3d-scenes | Soft CGI scene with camera move. |
| 34 | Pixel Art (paper plane world) | covered by pixelfx | pixelfx, ai-style-atlas 22 | Pixel art. |
| 35 | Glow Sketch (paper plane world) | kept | 06-glow-sketch | Dotted glowing line look is not in any skill. Merged with 48. |
| 36 | PS2 Style (paper plane world) | covered by wan-animation-styles | wan-animation-styles, ai-style-atlas 40 | Low-poly early 3D look (PS1 family). |
| 37 | Flat Vector (paper plane world) | covered by ai-style-atlas | ai-style-atlas 1 | Flat-Vector Science. |
| 38 | Dan Koe Style (paper plane world) | kept | 05-minimal-line-art | Minimal white line art on black is new. Renamed to avoid using a person's name as a style. |
| 39 | Chalkboard (paper plane world) | covered by ai-style-atlas | ai-style-atlas 23 | Chalkboard Lesson. |
| 40 | Lego Style (paper plane world) | kept | 09-brick-built-world | No brick-built look exists. Merged with 51. |
| 41 | ZackD Films (paper plane world) | covered by ai-style-atlas | ai-style-atlas 56 | Soft 3D Clay. |
| 42 | Stickman (rocket launch) | kept | 07-stickman-notebook | Notebook doodle with jitter is new. |
| 43 | 90s Anime (rocket launch) | kept | 08-cel-anime-launch | portrait-style-prompts restyles stills; a code-built cel launch is new. |
| 44 | PS2 (rocket launch) | covered by wan-animation-styles | wan-animation-styles | Same PS1/PS2 family as 36. |
| 45 | Claymation (rocket launch) | covered by ai-ad-formats | ai-ad-formats, wan-animation-styles, ai-style-atlas 18 | Claymation is covered several times. |
| 46 | Comic Book (rocket launch) | covered by ai-style-atlas | ai-style-atlas 14 | Halftone Pop Panel. |
| 47 | Pixel Art (rocket launch) | covered by pixelfx | pixelfx | Pixel art. |
| 48 | Glow Sketch (rocket launch) | kept | 06-glow-sketch | Merged into 06. |
| 49 | Chalkboard (rocket launch) | covered by ai-style-atlas | ai-style-atlas 23 | Chalkboard Lesson. |
| 50 | 3D Cartoon (rocket launch) | covered by ai-style-atlas | ai-style-atlas 56 | Soft 3D Clay. |
| 51 | Lego (rocket launch) | kept | 09-brick-built-world | Merged into 09. |
| 52 | Particle Galaxy | kept | 10-particle-galaxy | Only a star chart (atlas 34) exists; a particle galaxy is new. |
| 53 | Exploded View | covered by video-shotcraft | video-shotcraft, anatomy, threejs-3d-scenes | video-shotcraft has an exploded-view example; anatomy shows exploded figures. |
| 54 | Glitch Cut | kept | 11-glitch-cut | music-to-video has a chromatic-split primitive for beats, but no generated two-scene glitch smash cut. |
| 55 | Pixel Storm | covered by pixelfx | pixelfx | Weather and lightning effects. |
| 56 | Physics Smash | covered by r3f-physics-and-effects | r3f-physics-and-effects | Same technique. |
| 57 | Glow City | covered by ai-style-atlas | ai-style-atlas 27, 19 | Neon night drive is covered by Synthwave Outrun and Neon Sign. |
| 58 | Paper Pop-Up | covered by ai-ad-formats | ai-ad-formats, paper-cut-motion, ai-style-atlas 24 | Pop-up unfold and paper diorama are covered. |
| 59 | Circuit Board | kept | 12-circuit-board | No PCB animation exists. |
| 60 | Fur (ring) | kept | 14-fur-ring | New style line. |
| 61 | Synthwave (ring) | covered by ai-style-atlas | ai-style-atlas 27 | Synthwave. |
| 62 | Pixel Art (ring) | covered by pixelfx | pixelfx | Pixel art. |
| 63 | Thermal (ring) | covered by ai-style-atlas | ai-style-atlas 36 | Thermal Camera. |
| 64 | Doodle (ring) | covered by cartoon-animation | cartoon-animation, ai-style-atlas 75 | Boiling hand-drawn linework. |
| 65 | Matrix (ring) | kept | 15-matrix-ring | New style line (pixelfx only has a green palette). |
| 66 | Paper (ring) | covered by paper-cut-motion | paper-cut-motion | Stacked cut paper layers. |
| 67 | Blueprint (ring) | covered by ai-style-atlas | ai-style-atlas 37 | Engineering Blueprint. |
| 68 | CRT (ring) | covered by ai-style-atlas | ai-style-atlas 45, 59 | Phosphor terminal and pocket monochrome. |
| 69 | Minimal Mono (ring) | kept | 16-minimal-mono-ring | New style line. |
| 70 | Spell Grid | covered by pixelfx | pixelfx | Same repo. |
| 71 | Pixel Explosion | covered by pixelfx | pixelfx | Same repo. |
| 72 | Pixel Lightning | covered by pixelfx | pixelfx | Same repo. |
| 73 | Exploded Watch | covered by video-shotcraft | video-shotcraft, anatomy | Same exploded-view technique as 53. |
| 74 | Chain Reaction | kept | 04-chain-reaction | No rube-goldberg or chain reaction recipe exists (domino physics is r3f). |
| 75 | Emotions Grid | covered by cartoon-animation | cartoon-animation | Same repo (Claude Animation Base). |
| 76 | Falling Leaf | covered by cartoon-animation | cartoon-animation | Same repo. |
| 77 | Thunderstorm | covered by cartoon-animation | cartoon-animation | Same repo. |
| 78 | Marble Run | covered by r3f-physics-and-effects | r3f-physics-and-effects | Same repo and technique. |
| 79 | Neon Ring | covered by r3f-physics-and-effects | r3f-physics-and-effects | Same repo (bloom, chromatic aberration, grain). |
| 80 | Neon City | covered by r3f-physics-and-effects | r3f-physics-and-effects, ai-style-atlas 27 | Same repo. |
| 81 | Beat Counter | covered by cut-to-the-beat | cut-to-the-beat, music-to-video | Beat detection and beat-cut cards. |
| 82 | Audio Waveform | covered by music-to-video | music-to-video | Waveform and beat markers. |
| 83 | Kinetic Text | covered by music-to-video | music-to-video, ai-style-atlas 61 | Beat-timed kinetic text. |
| 84 | Stat Reveal | covered by music-to-video | music-to-video, cut-to-the-beat | Beat-timed number reveals. |
| 85 | Product Shot | covered by video-shotcraft | video-shotcraft | Same repo. |
| 86 | Coffee Shot | covered by video-shotcraft | video-shotcraft | Same repo. |
