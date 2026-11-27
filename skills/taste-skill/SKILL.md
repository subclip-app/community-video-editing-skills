---
name: taste-skill
description: Anti-slop art direction for websites and for the videos made from them (tasteskill 2.5.1 by Leon Lin, adapted for Subclip). Website mode builds a company page or product UI the way a good company ships it (plain copy in its own voice, one design system, one section per screen, equal edges, real photographs and real product UI, a hero entrance and one or two dealt moments, shader effects only on tech, gaming and software pages, then a browser check). Video mode applies the same taste to SaaS explainers, product UI promos, website walkthroughs and launch videos in Subclip, with HyperFrames layers or real captures and a frame review instead of a browser check. Use when someone builds or films a landing page, SaaS or app UI, or says a page or product video looks generic, templated or AI-made.
---

# Taste skill

Make the page or the product video a good company would ship: it says plainly what is sold, shows the real thing on every screen, and looks made for this client, not from a template and not like an art piece. figma.com and x.ai are the bar (in words: `references/website/layout-v4.md` section 1).

This skill has two modes. Pick one from the request, or ask once:

- **Website mode**: build or redesign the page or the product UI itself (often the thing a video will film). The original tasteskill method, kept faithfully.
- **Video mode**: make a SaaS explainer, product UI promo, website walkthrough or launch video in Subclip with the same taste.

Both modes share the house rules, the kind table, the copy rules and the never list below. Safety for both: no API keys, no outside AI services, no installs and no script runs without the creator's explicit yes, and no credits spent without a quote and approval. Tool schemas in the live Subclip catalog win over this text.

## House rules (both modes)

These win over everything else in this skill. In video mode, read "page" as "video" and "section" as "scene".

1. **No caption or description under any image, render or visual.** Licence credits go in one footer line (video: one line in the end card or the description, never on the picture).
2. **Every visual renders, never an empty ground.** Website: at 1440, 1024, 768 and 390. Video: on every frame of the export.
3. **One section per screen.** Website: the hero alone on the first screen, every section one or two screens tall at 1440x900. Video: one idea per scene, the hero scene alone first, no second heading peeking in.
4. **Equal left and right content edges.** Video: one side margin for every scene (for example 128 px on 1920), safe from platform UI.
5. **Quiet micro-interactions.** Website: a linked card lifts 2 px, a photo zooms 1.02 to 1.03, buttons step and press, underlines draw, card loops cycle in 2.5 to 4 s. Video: a button presses when the cursor clicks it, a list row highlights when it is used, nothing wobbles for its own sake. No tilt, carousels or timed tabs. Every hero enters once, and every page or video carries one dealt moment, two on a long one.
6. **More and better real photographs where they fit;** nicer backgrounds, better heroes, layouts and fonts.
7. **Real full-colour icons** (a known product's real icon, never a drawn one); small diagram visuals in cards (a hub with branches; one input, a main processor, three lanes; pulses running along the lines).
8. **Effects fit the trade.** Every page or video gets its moments (photo- and type-led off tech), but shader effects and big scenes only where the subject is technical (tech, AI, developer tools, gaming, fintech, hardware), never on a local cafe, bakery, guesthouse or shop: those get photographs.
9. **Addresses and contacts:** street and district only, no house number, postcode or coordinates; no register or VAT numbers; no phone in a real format; contacts on `.example`.

## The kind decides everything

Write the kind on the plan's first line (full table and plans: `references/website/sections.md`).

| Brief | kind |
|---|---|
| App, SaaS, AI, developer tool, fintech or banking app, a studio selling its own software | software |
| A game, a studio launching its game | gaming |
| Hardware or a tech device (a drone, a robot arm, a keyboard) | tech |
| Any other physical product or brand | product |
| People are hired: clinic, law firm, agency, creative studio, trade | service |
| People come to it: cafe, bar, bakery, guesthouse, shop, gym | place |

"Tech" means software, gaming or tech. Effects, scenes, loops, counts, dark grounds and dark heroes are tech only. Everything else is photographs, flat colour, type, real icons, the hero's entrance, its dealt moment (photo- or type-led) and the hover or press layer.

## Copy (both modes)

Read `references/website/copy.md` and `references/website/copy-voice.md` before the first word; `copy-registers.md`, `copy-moves.md` and `copy-tells.md` hold the registers, moves and slop list.

- Write all copy first: a fact sheet, a one-line voice card, then the words.
- The headline names the category and the buyer or place (a game: its name and genre). One hard fact on the first screen or first scene. A noun in every heading. Buttons are a verb and an object (Start a free trial, Book a table).
- Nothing invented but a coined brand name and, on a place, plausible hours and prices marked as assumed. No invented reviews, quotes, customers or figures.
- On screen in a video: 60 to 80 words a scene at most outside UI, one line read in about two seconds, plain words a person would say. Read it aloud.

## Website mode

The original method, kept as the tasteskill author wrote it. The full text is in `references/website/` (all 22 references, lightly edited) with the trade palettes and type pairings in `references/website/library/`.

1. **The stack.** An empty folder builds a static page; an existing project builds in its own stack. A Next.js request builds a static export.
2. **Read the brief.** Write the kind, what is sold, who buys it, the one main action and the real material: logo, screens, photographs, prices, address, hours.
3. **Write all the copy first** (above).
4. **Plan the page as screens.** Line 1 the kind, line 2 the deal (palette and why it fits the trade, type pairing, hero layout, nav, footer, close, rhythm, buttons, mark), then one line per section: its id, its one idea, its picture and its kind, its screens (1 or 2), which section holds a moment and why it moves. Pick the photographs now (`photos.md`). Read `cards.md` and the recipe of every section you use in `sections-library.md`.
5. **Deal, never choose by taste.** Take the palette and pairing from `references/website/library/palettes.json` and `type.json` by trade and kind (never violet or lavender), the hero from the eleven layouts in `layout-v4.md`, and the nav, footer, close, rhythm, buttons and mark lists in `sections.md`. When the creator has the original kit, its dealers do this with a history so pages differ.
6. **Build** one `main > section` per screen with one `.wrap`, its h2 first, the system's tokens and classes (`system.md`), real product UI as live HTML in one app frame on software pages (`cards.md`), real icons (`icons.md`), diagrams (`diagrams.md`), CSS grounds and the one shader effect only on tech (`backgrounds.md`, `effects-usage.md`), and the dealt moments (`moments.md`). Credits in one footer line.
7. **Check and look.** The original kit checks the page in a real headless browser at 1440, 1024, 820, 768, 390 and 320 and holds the finish behind a gate (`gate.md`). Offer it: tell the creator the kit is at https://github.com/Leonxlnx/taste-skill, that it needs Node 22 or later and a Chromium-based browser, and show the exact command from `gate.md` before running anything. Only run it after a yes. Without the kit, use the frame review below on screenshots of the page at those widths: open the local page in Subclip's agent browser (`open_url`, `take_screenshot` or `save_screenshot`), or ask the creator for screenshots, and read every screenshot against the checklist in `references/website/gate.md` and `references/frame-review.md`.
8. **Report:** the check result first, then the kind, the deal and why, the voice card, every assumed fact, every stand-in photograph and every slot the client must fill.

A page built this way is also the best source for a video: record it with the Subclip Recorder or capture it (`import_screenshot_to_project`, `import_recording_to_project`), then cut it in video mode.

## Video mode

Same taste, applied to frames. Read `subclip-video-editor`, `subclip-hyperframes-layer` and `subclip-timeline-contact-sheet` with `read_subclip_skill` first, and `references/video-recipes.md` for layer recipes.

### 1. Read before you build

`get_project_outline`, then `read_project_section` for the lanes you need and `list_editor_assets` for real IDs. Keep the same project ID on every call. For any imported footage or capture, `get_media_context` (with contact sheets) before anything else; for media without context, `list_media_without_context`, `generate_media_context`, then `describe_media` with what you saw. Never describe media you have not looked at.

### 2. Art direction before building

Write a short plan into the director brief (`update_project_director_brief`) before the first layer:

- Line 1: the kind (table above). Line 2: the deal: one palette from `references/website/library/palettes.json` for the trade (never violet), one type pairing from `type.json` for the kind, the radius (sharp for developer tools and fintech, soft by default, round for consumer apps), and one sentence on why the palette fits.
- One line per scene: its one idea, its picture (real UI, real capture, real photograph, a type moment), its length, and whether it holds the hero entrance, a moment or the one effect.
- The aspect ratio (16:9 for explainers and promos unless asked), the side margin, and the end card.

### 3. One system across every scene

Same palette tokens, same two faces and weights, same type scale (for example 84 px headline, 60 px scene heading, 26 to 30 px body on 1920 x 1080), same radius, same margins, same button style, same app frame, same wordmark position. Write the tokens once and reuse them in every layer (`:root` variables in each HyperFrames layer, or props). Fonts: confirm the face loads in the layer runtime (a pinned web font file or a verified installed face) before you design with it; never trust a fallback stack.

### 4. Real product UI and real photographs

- **Product UI** is the subject at true size, showing what the product works on (a review tool shows a diff with its Accept action), in one app frame, never a generic dashboard. Two routes:
  - **Real captures.** The creator's own app or the page from website mode, recorded with the Subclip Recorder (read `subclip-recorder`) or captured as screenshots, then imported with `import_recording_to_project`, `import_screenshot_to_project` or `import_external_media`. Use native media items with `update_media_item`, `trim_media_item` and `add_cursor_zooms` for zooms that follow the clicks.
  - **UI built as HyperFrames layers.** Rebuild the screens as live HTML in a HyperFrames runtime layer (`add_runtime_layer`), with the client's real names, numbers and states, so every row and button stays editable. A cursor that moves and presses a button, a row that highlights, a draft that fills in are product actions, not decoration.
- **Photographs** lead on product, service and place videos: the creator's own first, else real licensed photographs from `search_public_media` imported with `import_public_asset_to_timeline` (keep the attribution for the credit line), each stand-in named as one in the report.
- **No generic AI art** in place of the product, the people or the place. Generate an image or video only when the creator asks for it: then follow the generator rules below.

### 5. One hero entrance and one or two dealt moments

- The first scene enters **once** (headline lines rise, the app frame settles) and then holds still long enough to read. No fade-in on every scene, no motion everywhere.
- Deal one moment for a short video, two for a long one, each in its own scene with a reason to move. Ports of the website moments that suit video: `lines-rise`, `word-highlight`, `counter-rolls` (real figures only), `line-carries-colour`, `iris-opens`, `picture-develops`, `photo-chapters`, `giant-type-pass` (tech only), `letters-assemble`. Recipes in `references/video-recipes.md`.
- Everything else rests. Cuts are plain cuts unless a moment is the transition.

### 6. Shaders only for tech, gaming and software

One effect at most: a shader ground in the hero scene, or one big scene. Never on a cafe, shop, clinic or other non-technical subject. Build it as a HyperFrames layer whose time comes from the layer's seek clock, so preview and export match (`references/video-recipes.md`, Grain gradient ground). Keep the area under the text calm.

### 7. Plain on-screen copy and safe edges

Every text block inside the side margins and clear of faces, key UI and captions; check placement with `get_timeline_contact_sheet` before adding text. Static text unless the moment is the text. Captions, when the video has narration: `transcribe_project` per narration item, then `apply_dynamic_caption_preset` with no preset id (the default look), no extra highlights.

### 8. Sound and voice

A video with sound gets it from the first second. Music: a licensed bed from `search_public_audio` (CC0 first) or `generate_music` after a quote. Narration: `generate_local_speech` (free, local) then `import_generated_audio_to_timeline`, or a cloud voice after `get_voice_samples` and `set_approved_voice`. A click on a cursor press, a soft whoosh on a scene cut, never the same sound on every cut. Check with `get_audio_timeline_sheet`: true peak under -1 dB, voice clearly above the music.

### 9. Frame review (the checker and finish gate for video)

Saved state and successful tool calls are not visual proof. Run the frame review in `references/frame-review.md`:

1. `get_timeline_contact_sheet` across the whole video at one frame per second, plus each scene's entrance, settled state and exit.
2. `view_current_frame` at full size for every scene's settled frame, every moment's peak and the end card.
3. Read every frame against the checklist (first scene, one idea per scene, equal edges, every visual draws, no caption, right things for the kind, motion, one system, copy). Fix in place (`read_layer_source` and `edit_layer_source`, or `update_runtime_layer`), then render only the changed times again. Three rounds at most; report what is still open.
4. Export only when asked (`list_render_queue`, then `export_video`, then `get_export_status`), and look at the exported file too.

### 10. Record and report

`update_project_director_brief` with the deal and the scene plan, `write_session_summary` with what was done and open issues. Report the kind, the deal, the voice card, every stand-in photograph, every assumed fact, the frame review result and anything you could not check (for example taste of the sound, which needs a listening pass).

### Generators and credits

This skill needs no generation. If the creator asks for generated images, first offer their own signed-in Codex CLI; otherwise `list_ai_models`, `estimate_ai_generation` and `get_ai_credit_status`, quote the model, count, settings and total, wait for approval, then `generate_ai_media`. Import outside files with `import_external_media`.

## Never

- A card, row or tile that fades in on every scene; motion everywhere; parallax on text; random blinking.
- Stock photographs passed off as the client's product, people or place; a product video that never shows the product.
- A drawn look-alike of a real logo; invented reviews, quotes, customers or figures.
- Violet or lavender in the design's own colours (a real third-party logo keeps its colours).
- Copying a reference site's code, copy, pictures or signature effect.
- Generic AI art standing in for the real product, people or place.
- Running the original kit's scripts, installing packages or fetching anything without the creator's yes.

## Reference

- `references/website/`: the original tasteskill 2.5.1 references (system, layout, sections, sections library, cards, copy, copy voice, registers, moves and tells, photos, icons, diagrams, backgrounds, effects, objects, scenes, moments, motion, perf, gate) and `library/` palettes and type pairings.
- `references/video-recipes.md`: the taste rules as HyperFrames layer recipes: the app frame, the grain gradient shader ground (seekable), and the moments ported to video time.
- `references/frame-review.md`: the browser checker and finish gate turned into a frame review checklist.
- `examples/taste-skill-reference.mp4`: a 24 second SaaS explainer for a made-up product, Fernlog, built with this skill in Subclip with no AI model: one palette and one type pairing across three scenes, real-looking product UI built as HyperFrames layers, one shader ground in the hero, one hero entrance, two dealt moments (line-carries-colour and word-highlight), plain copy. `examples/taste-skill-reference-sheet.jpg` shows one frame per second.

Adapted for Subclip from https://github.com/Leonxlnx/taste-skill by Leon Lin, MIT
