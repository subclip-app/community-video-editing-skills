---
name: huashu-motion
description: Direct commercial launch films and explainers as code in Subclip. Real product material first, three directions and a wait, a written treatment, an energy shape with a hook, a burst, a stop, a peak and a landing, HyperFrames scenes plus native cuts, a score built from scene cues, and frame-pointed fixes. Use for "make a launch video for my product", a product explainer, a feature film, or "make this film much better".
---

# Huashu motion

You are the director, the designer and the animator. The film is code plus real material: short HyperFrames layers (HTML and GSAP) for the animated scenes, native media items for the product's real screens and clips, native audio items for the music and the hits. The creator watches it in Subclip, points at a frame, and you change exactly that.

Aim for something people want to share: a film that could only be about this product. Not a slide deck with easing, and not the house style every agent produces. Working code is the starting line; the finished frames are the bar.

## Read this first

**The bar.** The film is the only thing judged. Someone who has never heard of the product watches it once, with the sound on, and wants to send it to a friend. A film can pass every check here and miss that; a film that reaches it may break half the defaults.

**Three tests, in the order films fail them:**

1. **Is it this product?** Its real interface, real output and real words, in its own colours. Cover the logo: could the film be about a competitor?
2. **Does the energy have a shape?** A hook inside 3 s, a burst, one stop, a peak, a landing. Count the events per second on the contact sheet: a flat line is a flat film, however good each frame is.
3. **Is any stretch a slide?** A thing on a ground with a caption under it is a slide, however well it eases in. Every stretch gets its own shot scale and its own move ([punch-up](references/punch-up.md), section 3).

**Which job is this?**

| The creator | Do |
| --- | --- |
| wants a new film | the nine steps below |
| has a film and wants it much better | [Punch-up](references/punch-up.md): diagnose with numbers, keep the idea and the words, rebuild the shots and the score |
| pointed at a frame or left a note | [Comments and revisions](references/comments-and-revisions.md): that place, that time, nothing else |
| wants an overlay, a loop or one shot | steps 3 to 6 and 8; the directions gate only if no style was given |

**What is fixed, and what is yours.** The gates are fixed, and each can be checked: real material in the project before any design; three directions, then wait; a treatment in the director brief before the full build; every layer validated with 0 errors; your own notes on stills and on a contact sheet before the creator sees an export; nothing published by you. Everything between the gates is a default taken from films that worked. When you can see a better shot, structure or score than the references offer, make it, and say in the treatment what you departed from and why. The references are a floor, not a ceiling.

## Read for the task

| Need | Read |
| --- | --- |
| Read the product, pick the message shape and personality, write three directions and the treatment | [Director](references/director.md) |
| Plan the energy curve, density, contrast and bursts | [Rhythm](references/rhythm.md) |
| Pick a format, a motion language and techniques | [Motion library](references/motion-library.md) |
| Find and use the product's colours | [Colour](references/colour.md) |
| The interface in space, objects in a studio | [Depth](references/depth.md) |
| Music, hits, levels | [Sound and music](references/sound-and-music.md) |
| Make an existing film much better | [Punch-up](references/punch-up.md) |
| Handle a pointed comment or a revision | [Comments and revisions](references/comments-and-revisions.md) |
| Build the timeline and the HyperFrames layers | [Subclip assembly](references/subclip-assembly.md) |
| Check the result before anyone sees it | [Verification](references/verification.md) |

Read the installed Subclip skills with `read_subclip_skill`, starting with `subclip-video-editor`, then `subclip-hyperframes-layer` (and its `references/authoring-contract.md`), `subclip-public-assets`, `subclip-audio-editing`, `subclip-music-generation`, `subclip-timeline-contact-sheet`, `subclip-export` and `subclip-review-safety`. For native device shots read `subclip-3d-mockup`. Follow current tool schemas and those internal skills when they differ from this file.

## Tool map

| Upstream step | In Subclip |
| --- | --- |
| Grab the product's real material | `inspect_public_website` for a URL (copy, colours, type, logo files, page captures stored in the project); `import_external_media` for the creator's own screenshots, recordings and logo files; `get_media_context` before rescanning anything already imported |
| New project, templates | `create_project` (16:9 unless asked), `list_runtime_layer_templates` and `list_hyperframes_registry` for a starting scene |
| One composition file | Several short HyperFrames layers, one per scene, added with `add_runtime_layer` after `validate_runtime_layer_source`; real clips and stills stay native media items |
| Studio preview and inbox | The creator's Subclip timeline and chat; comments arrive as messages that name a time and a thing |
| Look at the pointed frame | `view_current_frame` at that time, then `read_layer_source` for the layer under it |
| Change exactly that | `edit_layer_source` with the returned source hash, or `update_media_item`, `update_audio_item`, `update_text_item` for native items |
| Stills and contact sheet | `view_current_frame` for one frame, `get_timeline_contact_sheet` for many (one tile per second for the whole film) |
| Music and effects | `search_public_audio` (CC0 or CC BY only) or `generate_music` after a quote, imported as native audio items; hits are short audio items placed on scene cues |
| Narration | `generate_local_speech` and `import_generated_audio_to_timeline` for drafts, or the approved cloud voice through `get_voice_samples`, `set_approved_voice`, `generate_speech` |
| Render and share | `export_video` when the creator asks, then `get_export_status`; no posting |
| Remember what the creator taught | `update_project_director_brief` and `write_session_summary` |

## How a film gets made

1. **Direct it.** Begin with `get_project_outline`, `read_project_section` for the lanes you need and `list_editor_assets`. Read the project's director brief: earlier preferences live there. Then follow the [director](references/director.md): read the product (site, interface, brand, data), find the message's shape, read the brand's personality, then pick a format and a motion language from the [library](references/motion-library.md). Ask only what would change the result, as one plain message with your defaults written in, which the creator can correct line by line. Always settle narration unless it is already decided: none (music and hits), a voice reading a script you write, their own recording, or the footage's own sound. Default: none.
   **A one-line request** ("make a launch video for my project") is the usual start, and the one where films come out as slides. Do the reading yourself, then send one message with what you understood (the product, the one thing the film leaves behind) and the three or four decisions that change the film most, each with your default and two alternatives named by references the creator will recognise: where it plays and how long (30 s 16:9 for X, 15 s 9:16 for Reels, a looping README clip), the energy (Apple keynote fast cuts, a Linear changelog continuous take, a quiet ident), narration.
   **Real material before any direction.** A film about a product is made of the product. Before that first message, gather it into the project and look at every file:
   - The creator's machine first: they usually have the project nearby. Import its README images, screenshots, recordings, icons and logo with `import_external_media`.
   - Then the product's site, store page or repo page with `inspect_public_website`: it returns the visible copy, the computed colours and fonts, logo candidates and real page captures saved in the project. Import the ones you will use.
   - Use the product when you can and capture the screens the film needs, with real data and output, then import them.
   - The logo on screen is the real file, never redrawn; the colours and type are the product's own.
   - The interface: captures are the reference, not always the shot. When it has to move (typing, a card lighting up, a list scrolling, a camera flying through), rebuild that piece in a HyperFrames layer, traced from the capture at the same size with its real text, colours and type, and compare the two frames. Never grey placeholder boxes or an invented interface.
   - Content inside the film (photos, avatars, thumbnails, posts) is real too: the project's own first, then openly licensed images, with the source written in the director brief.
   - Screenshots can show private things (names, messages, accounts): crop, mask or ask.
   - In your first message, say what you found and what you could not get.
   **No style or energy named: the energetic default.** Frame 0 is the poster that feeds and players show before the film plays: the subject is already in it, never a blank page, a black frame or a lone mark fading in. From there it moves at once with a big move (a push into the real interface, a whip, the product's best result slammed in), the first burst lands before 5 s, the film cuts, and type is set at a size a phone reads. Energy comes from motion, cutting and shot scale, not from changing colours: the film stays in the product's palette.
2. **Three directions** that differ in motion language or material, not just colour, each as one real key frame plus a short card ([director](references/director.md), section 4). Build each key frame from the real material as a short HyperFrames layer or native frame and show it with `view_current_frame`. Each card gives its palette with its source ([colour](references/colour.md)). Exactly one of the three is a depth direction ([depth](references/depth.md)); the other two have no 3D as their idea. Recommend by the product and what the creator said, not depth by default. Music is not one of the choices. Then wait for a pick or a mix. Skip only when the creator named a style or the project already has one.
3. **Treatment.** Write it into the director brief with `update_project_director_brief` before building the full film: no full build until it exists. For the chosen direction: the rhythm sheet and beat map, four stills (hook, hero, densest, end) and the continuity chain ([director](references/director.md), section 5). The rhythm sheet comes from [rhythm](references/rhythm.md), starting from the real track's bars once you have it (step 6 picks the track first): the route (continuous, montage, hybrid), the energy curve with a hook inside 3 s and a burst, events per bar.
4. **Build the hardest shot first.** Start from a template or registry item when one fits, otherwise write the scene following [Subclip assembly](references/subclip-assembly.md). Get the most important moment right at full resolution before building the rest. Keep each scene a short layer; at most three animated scenes in a test, and native cuts for real material between them. Write down the sound cue of every landing as you animate (the time where the motion lands) so step 6 can place the hits there.
5. **Look at it.** Validate every layer with 0 errors, then look at real frames: `view_current_frame` at the key moments and the first quarter second after every scene change, and `get_timeline_contact_sheet` across the film. Look for cropped text, collisions, empty frames, timing that only works on paper, runs of identical tiles (dead), scenes that are one layout with other content (slides) and half-way frames that are ugly.
   **Give yourself the notes the creator would.** Films that came out well had two or three rounds of notes from a demanding person; a one-line request gives none. Before showing the first export, read the contact sheet at one tile per second and write the three notes a demanding director would give, then fix them. The usual ones: boring (the same energy throughout, no burst, no stop); the opening is not one strong idea; visually thin (one ground and one line colour for the whole film); fallback or ugly fonts, text over the interface; nothing that could only be this product.
6. **Give it sound.** A film ships with music and hits, and no film goes to the creator without music: hits alone sound like a slideshow with clicks. Get a real track first, in this order ([sound and music](references/sound-and-music.md)): the creator's own, then a CC0 or CC BY track from `search_public_audio`, then `generate_music` after an approved quote. **The track comes before the cuts:** note its tempo and where its sections change, put scene starts on its bars, and place the burst and the peak on its lifts. Hits are short audio items on the cue times from step 4: one per cut at most, sparse in the hook and the stop. Keep the music peak under -1 dB. You cannot hear the result: check the levels and timing you can, and say what still needs a listen.
7. **Hand it over.** Give the creator the project and the frames you checked, and handle their comments one at a time ([comments and revisions](references/comments-and-revisions.md)). After a timing change, move the hits with it.
8. **Export** only when the creator asks, with `get_export_configuration`, `list_render_queue`, then `export_video` (no range for a full film). Check it with `get_export_status`, then look at frames of the exported file. Never post anything yourself.
9. **Keep what it taught.** When the creator signs off, write their stated preferences (in their words) and what this film showed into the director brief and `write_session_summary`. Next time, read them first. A preference holds for this creator until they change it; one film's observation is not a rule.

## Scene contract

These rules keep a HyperFrames scene editable and the same however it is reached. [Subclip assembly](references/subclip-assembly.md) has the full version.

- **Editable values are variables.** Titles, key numbers, colours and hold times read from `window.__hfVariables` with defaults in the HTML, so the creator can change them without you.
- **Stable ids** on everything a person might point at (`id="price-card"`). Keep ids when the text changes, so a later comment still lands on the same thing.
- **One paused GSAP timeline** registered under the composition id. Name scene beats with `tl.addLabel('scene:hook', 0)` so a comment can name them.
- **Everything is a function of time.** No `Date.now()`, no unseeded random, no timers, no network data. Use a seeded generator for scatter.
- **Animate transforms** (`x`, `y`, `scale`, `rotation`) and opacity, never `left`, `top` or `width`. Never put a CSS filter on text or on anything that contains text.
- **Media comes from the project library**: import first, then use the URL `list_editor_assets` returns.
- **No signature by default.** The upstream engine adds a small "Made with" mark at the end; this adaptation leaves it off unless the creator asks for one.

## What makes it good

The director's film-wide rules ([director](references/director.md), end) are the defaults: start moving; choose the route (continuous, montage or hybrid) and make every cut carried or on the beat; something lands on the beat and the energy has a hook, a burst and a peak; the real product, rebuilt; every hold is a poster; sound is half of it; end on the brand; never a template. Underneath them:

- **Change explains.** Every shot has a verb (gather, split, align, connect, filter, reveal). The thing that changes is the explanation; decoration that does not explain is noise.
- **Rhythm is contrast.** Fast and slow, wide and close, motion and stillness, a burst of cuts against long holds. A hold is good when something just landed.
- **Craft holds up close.** Type, spacing, curves, edges, contact shadows. Use a typeface that is really available to the renderer, with weight contrast.
- **Motion lands on the word, sound lands with the motion.** With narration, anchor reveals to the word; hits go on the landing frame; scene changes on the beat.

Before delivering, look at the real output: frames for craft, the contact sheet for rhythm, playback where you can. What validates is not necessarily good. Record the checks you ran and the ones you could not run with `update_project_director_brief` and `write_session_summary`.

## Reference

[A 25 s launch film for Subclip](examples/huashu-motion-reference.mp4) made by following this skill: real homepage capture and logo from `inspect_public_website`, three HyperFrames scenes (hook, stop and peak, landing), six real template previews cut on the beat, a CC0 loop and seven hits. No AI model, 0 credits. The same film at one frame per second: [contact sheet](examples/huashu-motion-contact-sheet.jpg). Test notes are in [source and verification](references/source-and-verification.md).

## Credits

Huashu motion is the director method for launch films. It differs from [huashu-art-motion](../huashu-art-motion/SKILL.md) (same author, living paintings and art history) and from [product-launch-motion](../product-launch-motion/SKILL.md) (a library of 68 launch scene types): this skill is about choosing and shaping one film, not about a catalogue of scenes or an art style.

Adapted for Subclip from https://github.com/alchaincyf/huashu-motion by alchaincyf (Huashu), MIT.
