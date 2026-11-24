# Overlap: charlie947/motion-graphics-skills against our community skills

Upstream commit 229022ebca76972e119e36ada23a1648d51665ab (MIT, Charlie Hills). The README says 13 skills, but the repo ships 15 skill folders (the README header and `.polish-metadata.json` are older than the folders). All 15 are handled below.

Checked against: motion-polish, code-video-recipes, code-motion-styles, hyperframes-motion-layers, remotion-motion-layers, product-launch-motion (being written by another agent, referenced by slug only), threejs-3d-scenes, r3f-physics-and-effects, svg-character-animation, anatomy. Also checked: vox-explainer, vox-director, video-shotcraft, website-to-video, trendjack-animator, ai-edit-battle, bang-motion, long-to-shorts.

| # | Upstream skill | Verdict | Closest existing skill | What is new here |
| --- | --- | --- | --- | --- |
| 01 | brand-intake | partly new | hyperframes-motion-layers (reads project brand colors per task, keeps nothing between tasks) | A two-file brand memory (brand.md, MOTION.md) with a read-first rule, an ASK ME rule for gaps, and a "typed hex beats sampled hex" rule |
| 02 | motion-brief-writer | partly new | code-video-recipes (turns a reference into a brief) | Intake of five or fewer questions, fixed/sample/target data separation, four-state brief (start, change, hold, return) |
| 03 | motion-prompt-writer | partly new | code-video-recipes (recipes) | A reusable 8-part brief where parts 1 to 7 stay and only the scene changes |
| 04 | reference-to-motion | partly new | code-video-recipes (catalog, reads references) | Moves-reference vs look-reference split, five-line breakdown, scene-by-scene timings |
| 05 | launch-video | covered | product-launch-motion, video-shotcraft, website-to-video | Only the 7-beat sheet and the "build 10 s in two styles first" rule, kept as a one-line pointer |
| 06 | apple-launch-film | new | none (code-motion-styles 08 is cel-anime, not OS UI) | Whole skill: menu bar, notch springs, widgets, wallpapers per scene |
| 07 | vox-explainer | covered | vox-explainer, vox-director | Nothing. One-line pointer. Its review rules (sound, symmetrical grids, facts with sources) already exist there |
| 08 | animated-chart | partly new | hyperframes-motion-layers (charts, races) | Four-state loop for exact data, "Illustrative data" label rule, last frame equals first |
| 09 | milestone-reveal | new | code-motion-styles 10 (particle galaxy), 13 (particle ring) | Sampling a real number into point targets, sourced-number rule, seam equality proof |
| 10 | motion-effects (16 effects) | new | hyperframes-motion-layers (generic charts), code-motion-styles (different 16) | Sixteen morph-based UI, data, type and system recipes on one 8 s clock |
| 11 | title-sequence-3d | partly new | threejs-3d-scenes (device reveals, camera moves) | Night-street title sequence with neon logo signs, bloom, title legibility rules |
| 12 | model-showdown | partly new | ai-edit-battle (two contenders edit one clip) | Three models write the same code motion brief, first try only, one renderer, stacked into one video |
| 13 | newsletter-promo | partly new | website-to-video, product-launch-motion | Hook question, three proof frames, end card structure for an edition |
| 14 | loop-cover | new | none | Seamless looping cover with one moving element, frame 1 is the finished picture, measured seam |
| 15 | reel-export | partly new | trendjack-animator (safe zone numbers), long-to-shorts | Headline-over-clip 9:16 layout and delivery checks, done with the Subclip timeline instead of ffmpeg |

Totals: new 4 (06, 09, 10, 14), partly new 9 (01, 02, 03, 04, 08, 11, 12, 13, 15), covered 2 (05, 07).

Dropped on purpose: the upstream install lines (`npx skills add ...`), the downloads zips, the newsletter and social links in prose, all ffmpeg and Python shell recipes (replaced by Subclip timeline tools; the two measurements that need pixels are replaced by frame checks), the Opus 5.5 model advice, and the Apple design skill dependency (replaced by `motion-polish`).
