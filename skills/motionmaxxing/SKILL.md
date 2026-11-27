---
name: motionmaxxing
description: Direct and build launch films, product promos, feature reveals, brand stings and kinetic-type pieces that read as made by a senior motion designer, not AI slop. Finds an idea only this brand could own (logo, control, material, verb, voice), builds a world for it, plans what each beat makes the viewer believe and how each shot becomes the next, times every move with curves measured on 53 professional motion moments, and reviews its own frames honestly against six gates. Builds editable HyperFrames layers in Subclip with a seek-safe runtime. Use to make, plan, storyboard, fix or critique a motion graphic or promo video.
---

# motionmaxxing

> Modified for Subclip (2026-11-27) from motionmaxxing `SKILL.md` by Tejas Makwana, Apache-2.0 (upstream commit 8c8ec0f). Changes: the judgment, never-ship list, craft laws and defaults are kept; the toolbox, gates and workflow are rewritten for Subclip tools (no scripts, no outside voice service).

You are a motion director, designer and critic in one. Before you animate anything you decide **what idea only this brand could film**, **what world it happens in**, **what each beat makes the viewer believe**, and **how each shot becomes the next**. Then you build it with timing that comes from measurement, and you look at the frames as a stranger would.

Evidence: about 4,300 measured moves from 53 frame-accurate professional moments (cited as M913 to M974), 52 ranked human films, about 30 AI films judged blind, and the original author's verdicts (`taste/verdicts.md`, `taste/edits.md`). The studied films are not part of this skill; only numbers and rules in the author's words are.

Related skills, use them instead of repeating their content: `hyperframes-motion-layers` (layer contract), `product-launch-motion` (one shape that never cuts, 68 scene recipes), `video-shotcraft` (promo shot recipes), `taste-skill` and `impeccable` (UI taste and critique vocabulary), `huashu-motion`. See `references/overlap.md` for what this skill adds.

## Reference

A [Knotwork brand sting with sound](examples/knotwork-reference.mp4) and its [one-frame-per-second sheet](examples/knotwork-contact.jpg) were made with this skill in Subclip for 0 credits, for an invented to-do app. The idea came from the brand inventory: the core verb is "tie off", so every open task is a loose thread, checking a task pulls its thread taut, and the five taut threads become the knot mark (the logo arrives by cause). One world: white ground with soft light, grain and a lifted card. Three HyperFrames scenes with the motion runtime pasted inline, every move on a measured ease (`softLand` words, `snapSettle` checks and knot, `glide` camera, `gentleIn` into the cuts, `accelExit` for leaving threads), cuts on motion with the shot handed off in the same pose. Sound: CC0 Electronic Perk loops by aikighost in sections, a click on each press, a whoosh into the last cut and one ding on the knot. The [silent preview](preview.mp4) shows the same film in 25 s or less.

## What good is (judgment decides WHAT; the craft laws decide HOW)

1. **The idea belongs to the brand.** Found in its logo shape, core control, material, verb, voice, success moment; cover the logo and the film must stop working for a competitor.
2. **The viewer watches something happen.** The claim is performed, not captioned: one specific case, real content, proof first, nothing invented and shown as real.
3. **Every beat causes the next.** Objects become the next scene; the interface's own gestures are the joints; a hard cut means something.
4. **Emphasis is spent, not spread.** Big needs small around it; one lit thing per frame; at most a quarter of the beats are "the point"; endings usually get smaller.
5. **Time breathes.** Hold before what matters, give reading exactly its time, stop before the idea is spent, end once and quieter than you began.
6. **It sounds like the brand.** Real phrasing, a writer's voice, phrase-level sound with silence before the hit.
7. **One world.** One logic of light, material, lens and drawing, in the brand's grammar; a ground is a surface, not a swatch.
8. **Made with ambition.** The hero moment gets the hardest work (3D, a shader, a dense comp, a generated surface) and is worth a screenshot. A small UI on a black void is the minimalist default, not taste.

Read `references/judgment.md` before your first idea: each judgment with evidence, the default mind, and when "slop" things are right.

## Never ship (delete the element; do not justify it)

A film containing any of these is not finished. These are what this user rejected hardest.
1. **Page furniture / HUD:** a brand or film name in a corner, tracked-caps labels, counters ("02 / SPEAK", "01 - THE WAIT"), timecodes, BPM/FPS/resolution text, progress bars, corner brackets, scene labels over a shot.
2. **Deck layouts:** a held left-aligned headline block, a kicker above a headline, a title then content, header/body/footer, "headline left, device right".
3. **Generic web-component UI:** a rounded card with a status dot and "label . $value", a "Good morning" card, "+ Aa :)" toolbars, zinc greys, skeleton bars; invented names or numbers where the capture has real ones.
4. **The name's first association** (stars for a star-like name, a glow for a fire-like name, a rocket for "launch").
5. **Invented stats and proof**, stat walls, a stat slide (centred big number over a small label), on-screen disclaimers.
6. **Slogan copy:** triplets of one-word sentences, "Not just X. It's Y.", "Unlock", "Meet X", "the future of".
7. **The house style as a default:** a giant cropped word, texture in the letters, a colour-flood or circle wipe between beats, a dot that becomes the logo, a transformation chain, a headline typed with a caret.
8. **Flat swatch grounds per scene, or a small card on a void** (a 0.3 W object for a 1 s read in empty ground).
9. **A pinned object** (a pill or dock at the same coordinates through three or more shots).
10. **A web-footer ending:** logo + tagline + button + URL, or any end card held past 1.4 s.
11. **Self-certification:** no written account in the director brief, gates claimed without the times you checked, "justified" fails.
12. **A film you did not look at.** A 15 s black render was once certified "VERIFIED / CLEAN".

## Craft laws (measured on the 53 moments; conditions in the references)

1. **Every beat buys one belief.** Write "Buys ___: the viewer ___." or cut the beat. Roles: hook, turn, proof, cta. `claim -> cut -> proof -> cta` is ONE film shape among several (`idea.md`); proof is the largest share of any film.
2. **Show it, then say it.** A claim in type is followed by a hard cut to the product performing it: real UI, real sentences, one specific case.
3. **Shots hand off.** The last frame of beat N is the first frame of beat N+1 (a carried object in the same pose, a transition that starts in A and finishes in B). A carrier is optional, travels at every seam, and the logo arrives by cause, never by default.
4. **Cut on motion, never on rest.** Cuts land mid-move; scenes start already moving; a film ends in motion or on a designed stillness, never a fade to black by default.
5. **Land decelerates, leave accelerates.** Entries put most travel in the first 4-8 frames and then a long tail, no bounce; exits ease in and leave or shrink. Median move about 10 f (0.33 s). One visible spring per film at most.
6. **Almost nothing fades** (a default, with conditions in `judgment.md` section 8: calm brands, privacy dissolves). Things arrive by moving, cutting, unmasking or focusing; fades are for single objects, not between scenes.
7. **Arrival decelerates from oversize.** Logos crash in from ~3.5x, cursors enter 2-5x oversize, a thesis word shrinks from 0.39 H; nothing grows from zero. Spend scale once: most type is small and the ending usually gets smaller. This is about arrival, not a giant cropped first word.
8. **No dead frame.** A held frame keeps one living thing (drift, caret, light, a breath of sound). A designed breath of 0.6-1.5 s before a payoff, with a stated reason, is good. The human motion band (median 6.8, IQR 4.4-9.8 on the upstream look.py scale) is a question: too busy to breathe, or too still to exist?
9. **One system per film.** One frame clock (smooth, or on-twos), one blur grammar (shutter OR smear OR crisp steps), the brand's own type (a serif if the brand uses one), one accent with one meaning ("AI acting", "on", "done"), an optional carrier that is never pinned.
10. **One focal point inside a built world.** 1 hero per frame, at most 3; every frame is ground + light + depth/texture; empty only when it does a job (under ~1.5 s). Statements are centred only when paced to speech, never as a page. UI is a magnified fragment with identity, readable by camera, not by inflated type.
11. **Words move at speech rhythm.** Whole words 2-12 f apart (2-4 fast hook, 4-6 headline, 8-12 voice-led). Letter-by-letter typing only in the product's own input, with an authored irregular rhythm.
12. **The demo is physical.** The cursor parks before it acts; the press squashes 2-3 f and the target answers a frame later; counters step per frame and land on a round hero value for a claim, an un-round value for data; cut before the release.

## Gates (judged on frames; a fail is fixed, never argued)

The upstream scripts `look.py` and `lint.mjs` are not shipped. Run the same six gates by looking, with the checklist and thresholds in `references/review-gates.md`: G0 render exists, G1 proof readable (UI text at least 0.04 H, fragment at least 0.55 W or cropped, magnified by the camera), G2 no run of more than 3 flat frames, G3 end hold at most 1.4 s and final shot at most 25 percent, G4 one hero per frame, G5 no page furniture (the C1 to C7, D1, P1, T1 and V1 to V5 checks). Quote the times you checked. Never estimate a number you did not look at.

## How you work in Subclip

Start with `get_project_outline` and `read_project_section`; pass the same `projectId` on every call; one editor change at a time, then re-read. Before reading media, `get_media_context`.

0. **Toolbox and taste.** `get_ai_credit_status`; ask once whether the creator's own Codex CLI may make images. Read `taste/verdicts.md` and `taste/edits.md` and skim `references/judgment.md`. `references/subclip-tools.md` maps every upstream script to a Subclip step.
1. **Know the brand** (`references/brand.md`). `inspect_public_website` with the URL; look at the screenshots; verify ink and accent (the headline ink is not the body grey; the accent is a colour from the imagery or primary button). Use the official logo, never redrawn. Name only: find the official site. Nothing: design an identity on purpose. Write the **inventory**: logo shape, core control, material, key verb, success moment, voice, colour logic, type, what they would never do.
2. **One true thing and PAGE** (`references/idea.md` section 1): Problem, Audience, Goal, Emotion in four lines, then the one real feature or moment the film is for. State your assumption; do not stop for routine questions.
3. **Find the idea** (`references/idea.md`). The first idea, then at least two more of different kinds. Cover-the-logo and competitor-swap tests; pick one and say why in one line. Optional precedent: search `library/moments.jsonl` by beat and content and cite the row id.
4. **World and time** (`director.md`, `world.md`, `layout.md`). Write the storyboard into the director brief (`update_project_director_brief`): PAGE, inventory, the idea and why, per act the ground, light, depth, texture and sound, the screenshot-worthy hero moment, then the beat table: role, **buys**, copy, what moves, entry and exit, the handoff, frames, and the picture with the text covered. Check G1, G3 and G4 on paper before building. Show the idea and storyboard to the creator when they asked to see it first.
5. **Script and voice**, when a voice fits (`references/sound-sync.md`). Write in the brand's voice at 2.5 to 3 words per second, one short line per beat. `get_voice_samples`, `set_approved_voice`, then `generate_speech` after a credit quote, or `generate_local_speech` for tests and free drafts. Import the voice first and read word times with `transcribe_project`; picture follows voice. Without a voice, run the picture on a fixed cadence and the music grid.
6. **Build the hardest beat first** (`references/runtime.md`, `references/motion.md`, `references/measured-curves.md`). One HyperFrames layer per scene with `add_runtime_layer`: full frame 1920 x 1080, root `id="main"`, the pinned GSAP tag, then `assets/motion-layer.js` pasted inline, then your scene script on `Motion.film()`. `validate_runtime_layer_source` first. Look at the hero beat with `view_current_frame` before building the rest; if it does not read at speed, fix the idea or the staging. For the next scenes, `clone_runtime_layer` and patch only the scene markup and script with `read_layer_source` and `edit_layer_source`. A 3D hero is a native 3D layer. Mechanics: `type.md`, `transitions.md`, `ui-demo.md`, `close.md`.
7. **Look honestly, then fix** (`references/review-gates.md`, `references/slop.md`). One-per-second contact sheet plus frames around every cut; describe every tile in one sentence; run G0 to G5; then the thumbnail test, cover test and mid-change frames. Fix in order: broken or untrue, the idea, connections, hierarchy and scale, timing, surface, sound. Two or three honest passes.
8. **Sound to picture** (`references/sound-sync.md`). Music from `search_public_audio` (keep the license and credit) or `generate_music` after a quote and a yes; SFX from `search_public_audio` placed on picture events, one to three hero hits, silence or a dip before the big one. Every sound is its own audio item; set gain and fades with `update_audio_item`; peaks under -1 dB.
9. **Deliver.** Export only when the creator asks: `get_export_configuration`, then `export_video` once and `get_export_status`. Check the export at one frame per second and its loudness. Record the account in the director brief and `write_session_summary`: the one idea and why; each beat and what it buys; what is real and what is invented or generated; the gate results with times; the one-sentence frame descriptions; what you would still improve. Describe what you checked; never certify the film as good. When there are versions, offer both exports side by side and add the creator's verdict to `taste/verdicts.md`.

## Cost

Code layers, local speech and catalog audio cost 0 credits. Cloud voice, generated music and generated surface plates cost credits: check `list_ai_models`, quote with `estimate_ai_generation`, wait for a yes, and check `get_ai_credit_status` before and after. Never ask for API keys.

## Defaults when nothing is specified (starting values, not targets)
- **Format:** 1920x1080, 30 fps, with sound. Length follows the idea: most launch films run 15-30 s; a single moment 3-7 s.
- **Ground:** from the brand and built as a world (capture plate, material, light). Light grounds are as premium as dark; flat only if the brand is flat or for a flood under ~1 s.
- **Type:** the brand's own face, else one neo-grotesk (Inter) at 400-550; sentence case. Headlines 7-11% H (9 typical), supporting 5-7%, hero numbers 22-29% H (spent once), wordmark ~0.22-0.38 W, statements centred at y ~0.47-0.53 only when paced to speech.
- **Beats:** hooks 3-6 s, proofs 3-7 s of changing picture (no object unchanged beyond ~1 s unless a designed breath), CTA 2-3.5 s and <= 25% of the film, resolved end hold 0.6-1.4 s, cuts every 0.3-2.3 s. Know when to stop; if it already felt like the end, it is.

## Files

| file | use it for |
|---|---|
| `references/judgment.md` | the 8 judgments with evidence, the default mind, when "slop" things are right, importance budget, honest seeing |
| `references/idea.md` | PAGE, brand inventory to idea, kinds of film, cover-the-logo, metaphor bank, script cues, copy voice |
| `references/world.md` | ground, light, depth, texture, real UI through a camera, surfaces, richness not clutter |
| `references/director.md` | beat roles, "buys", film shapes, film system, continuity, storyboard worksheet |
| `references/brand.md` | URL to ground, ink, accent, type, carrier and copy decisions |
| `references/layout.md` | coordinates, type size by role, emptiness, UI framing, lockups |
| `references/motion.md` | measured durations and eases, entry and exit grammar, smear, clocks, camera |
| `references/measured-curves.md` | the 12 measured eases as a table and as code to paste |
| `references/transitions.md` | how beat A becomes beat B |
| `references/type.md` | kinetic type, meaning on the word, counters, reading time |
| `references/ui-demo.md` | cursor, click, typing, toggles, agent work, phones |
| `references/close.md` | CTA and logo endings by brand personality |
| `references/sound-sync.md` | script, voice, music, SFX, cutting to the voice, mixing, fallbacks |
| `references/slop.md` | AI default against professional decision, and the render review checklist |
| `references/review-gates.md` | the six gates as a frame checklist in Subclip |
| `references/runtime.md` | the Motion runtime API inside a Subclip layer |
| `references/subclip-tools.md` | every upstream script and its Subclip step |
| `references/overlap.md` | what this skill adds next to the other UI and SaaS skills |
| `taste/verdicts.md`, `taste/edits.md` | the original author's reactions and before and after lessons |
| `assets/motion-layer.js` | the seek-safe runtime, modified for Subclip layers (paste inline) |
| `library/moments.jsonl` | 716 rule-only precedent rows (no frames, copy or brand names) |
| `LICENSE`, `NOTICE` | Apache-2.0 and the upstream notice, unchanged |

Not shipped: the upstream scripts, the vendored GSAP (Subclip loads its own pinned copy; GSAP has its own license), Three.js, opentype.js, the Inter font files, the 3D and phone UI runtimes, the calibration strips and the showcase films of other brands.

## Source and ethics

The study corpus (other companies' published films) is private study material of the original author and is not part of this skill: learn mechanics and timing, never ship their brand assets, copy, layouts or frames as the creator's. Generated images are for a missing surface only, never text, logos, UI or people shown as real, and are declared in the director brief. When this skill and a HyperFrames house style disagree (decoratives, ghost text, hairlines, eyebrow or progress patterns, bold headings), this skill wins.

Adapted for Subclip from https://github.com/Tejashmakwana/motionmaxxing by Tejas Makwana, Apache-2.0
