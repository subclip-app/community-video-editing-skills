---
name: product-launch-motion
description: Direct and build a Dribbble-level product launch film from code in Subclip: one shape that never cuts, springs, blur swaps, a cursor that drives every change, beat-synced sound, plus 68 named scene types, recipes, easings and camera moves as editable HyperFrames or Remotion layers. Use when asked for a launch video, product film, UI motion reel, feature announcement or animated brand sting.
---

# Product launch motion

You are the director. This skill turns a product (a URL, a description, screenshots) into a short launch film made of editable code layers on the Subclip timeline, with music or voice, captions and export. It carries the upstream author's creative rules and a style index of 68 entries, each with its own prompt file and 10 second reference clip.

Related skills, use them instead of repeating their content: `hyperframes-motion-layers` (layer contract, validation), `remotion-motion-layers` (React layers, typed props, Three.js), `motion-polish` (easing and review craft), `commercial-pipeline` (AI-generated product ads), `video-shotcraft` (product promo shot recipes and beat cuts), `cut-to-the-beat` (beat map tools), `website-to-video` (capture a site first). See `references/overlap.md`.

## Capability reference

`examples/capability-product-launch-motion.mp4` is a 20 second reel of the styles with labels. Show it when a creator asks what this skill can do.

## When to use it

- A launch film, feature announcement, UI motion reel, app sting or animated logo sting, 15 to 60 seconds.
- A film made of UI states, numbers and type, not footage. If the creator wants AI-generated product shots use `commercial-pipeline`.

## The direction (the part that makes it look expensive)

1. One shape, never cut. Every state is the same element morphing size, radius and colour. Transitions are morphs, camera pushes or zooms into an element that becomes the next scene.
2. Text swaps with a short blur. Old text exits short and early, then new text springs in. Nothing overlaps.
3. Springs, a tiny overshoot at most. No bouncy easing. Leading and trailing edges ride different springs so knobs and tab indicators stretch.
4. A cursor drives every change with real clicks and drags. Press scale and ripple on clicks; drags are direct manipulation and spring back on release.
5. The camera frames every state. An empty frame is a bug. Pull-backs reveal scale.
6. Music first. Choose the track before choreographing; something happens on every beat; the drop lands on the big moment.
7. Real data and original scenes. Real numbers on odometers, real customers one per beat. Never copy the product's own marketing wholesale. Invented micro-stories are fine if you say which parts are invented.
8. You make the creative calls. Log each as a `DECISION:` line and list them at the end so the creator can overturn any in one reply.
9. Banned: bouncy easing, particle bursts, glows on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.

For a narrated explainer instead of a music-first film, use the voice-led rules in `references/voiceover-led.md`.

## Workflow in Subclip

1. Read the project (`get_current_project` or `read_project_section`) and any supplied brand assets. Ask for what is missing in one message: 8 to 12 states the shape should become, palette (black and white, one accent, or the brand system), a track or permission to find one, canvas (16:9, 9:16, 1:1). Offer "director picks" and use it if the creator says so.
2. Write three visual directions, kill two, name a signature move (`references/styles/68-three-directions.md`). Write the approved-figures list: only these numbers may appear.
3. Plan on a beat grid: scene list with the style numbers you will use, takeaway per scene, interaction per beat, camera move per scene (no same move on adjacent scenes), sound cue per beat. Show it, then continue unless the creator asks to review.
4. Audio first: `search_public_audio` for a track, or `generate_music` after quoting credits with `estimate_ai_generation` and getting a yes. For a voice, local speech (`generate_local_speech`, a voice that matches the speaker). Import and set the lane; read the beat timing from the file (see `references/subclip-pipeline.md`).
5. Build the scenes as layers. For each scene open its style prompt file, write the layer, `validate_runtime_layer_source`, `add_runtime_layer` with the smallest useful rectangle. Never send editor mutations in parallel; add one layer, wait, then the next. Keep each layer to one scene.
6. QA: view one frame per beat, then at the cuts plus and minus 0.1 s. Fix anything cramped, empty, off the grid or overlapping. Watch it at normal speed in the editor before export.
7. Captions only if there is a voice or lyric: use the dynamic captions presets and keep them in the safe zone.
8. Export with `export_video` after the creator confirms. Check the file: a one-per-second storyboard, the loudness (about -14 LUFS, true peak below -1 dBTP), and one frame at every changed beat.
9. Report: concept, scene list, which numbers are real and which invented, DECISIONs, caveats (what you heard versus only measured), any logo or likeness that needs permission.

## Credits and safety

- Code layers cost no credits. Ask before every paid step (music, AI image, AI video, voice other than local) and show the cost from `estimate_ai_generation`. Check `get_ai_credit_status` first.
- Never ask for API keys in chat. Never run installers or scripts from the upstream repo. Everything the upstream did with its own scripts has an equivalent Subclip step in `references/subclip-pipeline.md`.
- Licensed media only. Check each stock item. Do not use real people or brands without permission; the example clips use a fictional product.

## Style index

Open `references/style-index.md` for the full table (68 entries in 10 groups) or go straight to a group:

- Scene types (shots) 01 to 15: kinetic type beats, crowding problem, held thesis, prompt composer, results surface, two-pane workspace, pipeline tracker, hero stat count-up, testimonial with a face, comparison columns, end card and CTA, hardware hero, terminal, map reveal, chart reveal.
- The one-shape loop 16 to 26: button, loader, check, dynamic island, reel preview, slider, toggle, liquid tabs, chart, command palette, toast.
- Flourishes 27 to 29: odometer of real numbers, logo slam, search wall pull-back.
- Motion recipes 30 to 37: closed-form spring, blur content swap, edge-split stretch, agent cursor and trail, camera on log-zoom, seamless loop, beat grid cues, motion blur by subframes.
- Easings 38 to 47, motion grammar 48 to 56, camera and cursor 57 to 61, look and grade 62 to 66, sound 67, direction 68.

Each prompt file has the recipe, a ready prompt with [brackets], the Subclip tools, the credit note, the upstream source path and the reference clip name. `references/layer-code.md` holds the spring, track, odometer and typewriter code to paste into a layer.

## Definition of done

- Three directions written, two killed, a signature move named in one sentence.
- Every number on screen is on the approved list.
- No scene is still moving when it ends; no same camera move on adjacent scenes; busy and still alternate.
- The exported file was sampled at every changed beat and looked at.
- Loudness measured on the delivered file. Say whether you heard it or only measured it.
- DECISIONs listed; credits spent reported.

Adapted for Subclip from https://github.com/AbubakrChan/product-launch-motion by Abubakr Chan, MIT
