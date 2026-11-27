---
name: hallmark
description: "Anti AI slop design for websites, product UI and the SaaS videos made from them. Website mode builds a page or app screen that looks designed, not generated (the original Hallmark floor, themes, gates and reviews). Video mode applies the same rules to a Subclip video: slop tells become a frame review checklist, design choices become the video's design system in the director brief, and product UI scenes are HyperFrames layers or real captures. Use when the creator names Hallmark, asks for a page or product UI that does not look AI made, or asks to make or review a SaaS explainer, product promo or UI demo video so it does not look generated."
---

# Hallmark for Subclip

Makes what a coding agent generates look made, not generated: a hard floor against the defaults every model was trained into, a dealt direction so consecutive builds do not converge, one idea per screen. Above the floor the work is yours: you are a capable designer.

Creators who make SaaS explainers and product UI promos need that sense twice: in the page or app they film, and in the film itself. So this edition has two modes.

- **Website mode** builds or redesigns the page or product UI that will be filmed. It keeps the original method and its references in `references/`.
- **Video mode** applies the same rules to frames on a Subclip timeline.

Pick the mode from the request. "Build my landing page" is website mode. "Make a promo of my app", "this demo video looks AI made", "review my explainer" is video mode. A request for both (build the page, then film it) runs website mode first and video mode on its captures.

Safety rules for both modes: no API keys are needed or requested. Nothing is installed or run without the creator's explicit yes. Credits are quoted before any generation. The live Subclip tool schemas win over this text.

## The Floor

Binds every output in both modes, none of it waivable. Numbers in brackets are gate numbers in [`references/gates.md`](references/gates.md). In video mode, read "page" as "frame" and "CSS" as the layer source.

1. Every colour and every font goes through a token declared at `:root` (or a declared theme block). No literal colour or `font-family` past the token block. (48)
2. Never `transition: all`. Never animate `width`, `height`, `top` or `left`. (10a)
3. Never one italic word inside a roman heading. (38i)
4. `overflow-x: clip` on both `html` and `body`. Never `hidden`, never `100vw`. (34) Website mode only.
5. Image-bearing grid tracks use `minmax(0, 1fr)`; display heads carry `overflow-wrap: break-word; min-width: 0`. (50)
6. Every interactive element has `:focus-visible`, appearing instantly. (26a, 15) Website mode only.
7. Every animation has a `prefers-reduced-motion: reduce` fallback, and content is visible with scripting off. (27, 62) Website mode only; in video every frame must read without motion.
8. Never an invented metric, testimonial, logo wall or case-study count. (46a)
9. Never an eyebrow, and never a label in tracked capitals or small caps: labels, captions, table heads, tags and nav links are the body face (or the theme's label face), a step smaller, sentence or lower case, untracked. (54, 67)
10. Never middle-dot-joined meta strings, arrows glued to link text, or decorative status dots. (63)
11. Never a purple-to-blue gradient, a card inside a card, an emoji as an icon, or a hand-drawn browser or OS window. (2a, 4, 30a, 47a)
12. The hero's headline, one sentence and primary action are all visible at 1280 x 800 without scrolling. (44b) In video: in the frame, inside the safe area.
13. About 80 words on any one screen; the hero's text is the headline, one sentence and its actions. (58) In video: about 25 readable words a frame, fewer on a vertical cut.
14. The container is capped and centred: at 1920 the gutters grow, the measure and the grids do not. (44d)
15. The first non-empty line of the CSS source is the Hallmark stamp, then the critique line, then any waivers. (20) In video the stamp lives in the director brief.
16. Before handing back, check the result against the gates: in website mode walk `gates.md` § 4 over the rendered page; in video mode run the frame review below. Fix every Floor finding; fix or waive every Reflex one.

Above the Floor, a **Reflex** gate is a default a model falls into, waivable on the record with a real reason, and a **Finish** check is craft detail, answered, never blocking ([`references/gates.md`](references/gates.md) § 1 and § 2).

## Website mode

The original flow, with its scripts replaced by steps you do by hand. The original scripts (`theme.mjs`, `sloplint.mjs`, `capture.mjs`) are not bundled here; they live in the [original repo](https://github.com/Nutlope/hallmark). If the creator already has them installed you may offer to run one: show the exact command and run it only after a yes. Nothing below requires them.

0. **Pre-flight:** read the project before asking anything. Signals, in order: `design.md` or `DESIGN.md` at the root (a locked system that overrides everything below); a prompt naming a real brand (run [`references/brand-truth.md`](references/brand-truth.md); never theme a real brand from memory); the project's fonts, palette, spacing, motion libraries and framework; the product itself (a URL, a running dev server, an app). Output one block: what is preserved, what is introduced ([`references/flow.md`](references/flow.md) § Pre-flight edge cases).
1. **Ask once:** material (screenshots, recordings, photos, real numbers, a quote with its author, logos the creator may use), audience, the one action the page drives, and a tone at an extreme ("clean and modern" is not a tone). Skipped fields are inferred and stated in one line. Facts are never inferred: a number, quote or logo not given is absent. Pick the genre silently: AI tool, music, video, voice, dark go **atmospheric**; SaaS, API, developer tool, B2B go **modern-minimal**; playful, kids, games go **playful**; otherwise **editorial**. A prompt about one element is component scope, a screen someone works in is an app screen (`flow.md` § Component scope and § App screens).
2. **Shape:** the material inventory (real, pictures, absent), the job a visitor comes to do read from [`references/anatomy.md`](references/anatomy.md), then the page: its shape (21 in [`references/macrostructures.md`](references/macrostructures.md), load only the one you pick), the hero posture, the nav, the footer, the sections. The original deals these with a script; here pick them by hand, clear of what the last builds in `.hallmark/log.json` used, and apply the **mirror test**: would a neighbouring prompt in the same category get this exact combination? If yes, change one decision and say which. Name the **signature**, the one thing a visitor would remember, and show it on the first screen.
3. **Direction:** a theme the creator named; or **custom** when asked ([`references/direction.md`](references/direction.md)); otherwise pick three themes from [`references/themes/index.json`](references/themes/index.json) whose genre and keywords fit the prompt, choose the one whose material can carry it, say why, and stamp `deal: manual`. Load only `references/themes/<slug>.md`. Theme pictures are on [usehallmark.com](https://www.usehallmark.com); they are not bundled. A theme is a material, not a plan.
4. **Load:** [`layout.md`](references/layout.md), the job's part of [`anatomy.md`](references/anatomy.md), [`imagery.md`](references/imagery.md), [`craft.md`](references/craft.md), `references/genres/<genre>.md`, the theme file and [`gates.md`](references/gates.md) § 1 to § 4. Only when needed: one macrostructure, `microinteractions.md`, `interaction-and-states.md`, `responsive.md`, `texture.md`, `scroll-choreography.md`, `dark-mode.md`, `data-viz.md`, `fonts.md`, `design-md.md`, `export-formats.md`, `patterns.md`.
5. **The Picks block,** once: shape, theme, nav and footer, hero, signature, sections, material, sweep. It is the creator's redirect window.
6. **Build:** write `tokens.css` from the theme's `:root` block and the shared scale in `layout.md` § 2, then the hero alone. Render it and run the hero review (`gates.md` § 6, [`review-hero.md`](references/review-hero.md)) in a fresh-context subagent when the harness has one. Then the page: one idea per screen set big, show the real thing (the creator's pictures, captures of the real product, the product built only when it cannot be captured), page invariants, the stamp at the top of the CSS.
7. **Sweep:** render the page at 1280 x 800, 1440 x 900, 1920 x 1080 and 375 wide, walk `gates.md` § 4 and § 5, fix every Floor finding, fix or waive every Reflex one, answer every Finish one, then the finish review ([`review-finish.md`](references/review-finish.md)) in fresh context. Close with the material ask: every slot and what belongs there. Never claim a pass you did not check.

**Captures and photos without the scripts.** Capture the real product with Subclip: `inspect_public_website` for a public URL, `take_screenshot` or `capture_window` for an app on screen, or the Subclip recorder for a flow. Never put a capture inside a drawn browser bar or device frame. The original photo library file is not bundled; use the creator's own photographs, or openly licensed photographs the creator picks and credits. Never a stock-site photo picked by an agent ([`imagery.md`](references/imagery.md) § 2).

**Verbs,** only when the creator names Hallmark: `redesign <target>` and `audit <target>`; read [`references/redesign.md`](references/redesign.md) first. Any other change to an existing design is not a Hallmark run.

## Video mode

The same floor and gates on a Subclip timeline. Read the Subclip skills first with `read_subclip_skill` (`subclip-video-editor`, then the motion graphics, HyperFrames, audio and review skills you need).

### 1. Read before you build

`get_project_outline`, then `read_project_section` for only the lanes you need, `get_project_director_brief`, and `list_editor_assets` for exact file and item IDs. Read `get_media_context` with `includeContactSheet: true` before any new scan. Keep the same `projectId` on every project-scoped call and make one timeline edit at a time.

### 2. Ask once, then pick the material

The same four questions as website mode, for the film: material (captures, recordings, real numbers, the real product URL), audience, the one action the video drives, tone. Real material leads. In order: the creator's own recordings and screenshots; captures of the real product taken now (`inspect_public_website`, `take_screenshot`, `capture_window`, or the Subclip recorder with `start_recording`, then `import_recording_to_project` or `import_screenshot_to_project`); the product built as a HyperFrames scene only when nothing can be captured, with sample data that reads as samples and is marked as such. Never a drawn browser bar, a fake dashboard of invented figures, or a logo wall nobody gave you.

### 3. The design system goes in the director brief

Decide the video's system before the first layer and record it with `update_project_director_brief`, in the place of the website stamp:

```markdown
## Hallmark design system
- Theme: <theme slug or custom>, genre <genre>, deal: manual
- Paper / ink / muted / rule: <hex values>
- Accent: <one hex>, used only for <the primary action and state>
- Faces: display <face> <one weight>, body <face> <two weights at most>
- Type sizes at 1920 wide: display <px>, section <px>, body <px>, label <px>
- Radius: <px>; depth: <hairline, tint or one shadow>
- Motion: one settle per shot, <duration>, ease-out, no bounce
- Signature: <the one real thing the film shows best>
- Waivers: <gate, guard, reason> or none
```

Take the palette, faces and surfaces from the theme file (or the product's own brand), never its page layout. Every scene reads its tokens from this block, so a later scene matches the first. Details and a worked example: [`references/video/design-system.md`](references/video/design-system.md).

### 4. Build the scenes

- **Product UI scenes** are HyperFrames runtime layers by default (Remotion when the creator asks or the project already uses it). Write the theme tokens into `:root`, load fonts with `@font-face` from a public font file (external stylesheets are blocked in layers), validate with `validate_runtime_layer_source`, place with `add_runtime_layer`, revise with `read_layer_source` and `edit_layer_source`. Recipes: [`references/video/ui-scenes.md`](references/video/ui-scenes.md).
- **Real captures** go on the media lane with `import_external_media`, `import_attachment_to_timeline` or the recorder imports, framed with the theme's radius and a hairline, never a drawn window. Zoom with media keyframes or `add_cursor_zooms`, not by cropping text below its readable size.
- **Titles** are native text items (`add_text_overlay`, `update_text_item`) or part of a scene, in the system's faces. Run `get_timeline_contact_sheet` over the range first and keep text clear of the product.
- **One idea per shot,** about 25 readable words a frame, the headline seven words or fewer, one primary action, the film ending on that action (not on an email sign-up).
- **Sound** keeps its own items: a CC0 or Subclip library bed from `search_public_audio` imported with `import_public_asset_to_timeline`, a few effects on real actions, levels with `update_audio_item`, peaks under -1 dB, checked with `get_audio_timeline_sheet`.
- Set the duration with `set_project_duration`, no blank tail.

### 5. Frame review (the sweep for video)

Saved state is not visual proof. Run `get_timeline_contact_sheet` over the whole film (one frame per second, or `at: "auto"` for long films), then `view_current_frame` at full size on every frame you doubt. Walk the checklist in [`references/video/frame-review.md`](references/video/frame-review.md): every slop tell from `gates.md` mapped to what it looks like in a frame, its tier and its fix. Fix every Floor finding, fix or waive every Reflex one (record waivers in the brief), answer the Finish ones. Re-render only the times you changed. When a subagent is available, hand it the contact sheets and the brief's design system and ask the finish review's question cold: does anything here read as machine-made?

### 6. Record and export

`update_project_director_brief` with the design system and the review outcome (for example `Floor 0 open, Reflex 1 waived (47b), finish review: 3 resolved`), then `write_session_summary`. Export only when asked: `get_export_configuration`, `list_render_queue`, then one `export_video`.

## Cost

Both modes cost 0 credits by default: code-rendered scenes, real captures, local speech (`generate_local_speech`) and library sound. Generated stills or video are optional. Offer the creator's own signed-in Codex CLI first for images and import the files with `import_external_media`. For Subclip generation, pick the model with `list_ai_models`, quote it with `estimate_ai_generation` and `get_ai_credit_status`, and wait for a yes before `generate_ai_media`. Hallmark itself prefers real material to any generated picture.

## Reference

`examples/hallmark-reference.mp4` is a 26 second promo made with this skill in Subclip for a made-up product, Covershift. The first 10 seconds are "the generated cut": the same promo built the way a model defaults, with nine slop tells ringed and numbered on screen (eyebrow in tracked capitals, one accented word, buzzwords, purple to blue gradient and glow orbs, emoji icons, three equal icon cards, a drawn browser bar, invented metrics, a fake logo wall). The next 16 seconds are "the hallmark cut": the same promo under one design system, the product built as a rota with sample data marked, one accent used only for state, ending on the one action. `examples/hallmark-reference-sheet.jpg` shows it one frame per second. Three HyperFrames layers, CC0 music, no AI model.

## Do not

- Do not request, store or paste API keys. None are needed.
- Do not run the original scripts, `npx` or any install without the creator's yes and the exact command shown first.
- Do not invent a number, a quote, a logo or a customer, on a page or in a frame.
- Do not claim a review pass you did not run; report what the frames show.

Adapted for Subclip from https://github.com/Nutlope/hallmark by Nutlope (Hassan El Mghari) and the Hallmark contributors, MIT
