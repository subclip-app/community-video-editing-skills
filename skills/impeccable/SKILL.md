---
name: impeccable
description: "Design vocabulary for product UI and SaaS videos, with the original website method kept. Use to shape, critique, audit, polish, typeset, colorize, lay out, distill, clarify, animate or delight a frontend before it is filmed, or the UI scenes, titles and motion layers of a SaaS explainer, product promo or app walkthrough in Subclip. Also writes a DESIGN.md design system for the page or for the video."
---

# Impeccable for Subclip

Impeccable is a design vocabulary for agents. Each command names one kind of design work: `critique` judges, `polish` finishes, `bolder` and `quieter` turn the volume, `typeset`, `colorize` and `layout` fix one system, `distill` and `clarify` remove noise. Its craft floor catches the habits that make a screen read as generic AI output before anyone sees it.

This edition has two modes that share the same words:

1. **Website mode.** The original commands for designing the product UI or page that will be filmed. The playbooks are in [reference/](reference/), kept as the original author wrote them.
2. **Video mode.** The same vocabulary applied to a Subclip project: frames and contact sheets are the rendered result, and the commands act on text items, HyperFrames or Remotion UI scenes, motion and the video's own design system. Read [video/commands.md](video/commands.md) and [video/design-system.md](video/design-system.md).

Pick the mode from the target. A codebase, a component, a URL the creator owns and will ship: website mode. A Subclip project, a timeline, a UI scene, a title card, an export: video mode. A promo for a product whose UI is still rough often needs both: fix the page in website mode, record or rebuild it, then finish the film in video mode.

## Principles (both modes)

- Finish the job. The deliverable is complete, except assets the creator must provide.
- Scale ambition to the mode of the surface. Persuade (landing pages, launch promos) gets bold, distinct work with a point of view. Operate (app UI, walkthroughs, tutorials) shows ambition as precision and restraint. Read (docs, explainers) structures for comprehension. Experience (showcases) lets the artifact lead.
- The brief wins. Honor pinned colors, fonts, eras and brand rules even when they match a pattern this skill warns about.
- Refinement preserves; redesign replaces. A refine command keeps identity, copy and everything outside its scope. Ask before replacing factual copy or adding claims.
- Verify by looking at the rendered result at the size it ships at, and batch the checks: fix everything one look shows before looking again.
- Loaded symbols stay out of decoration: no emblems tied to militarism, supremacy or hate movements as motifs.

## Website mode

Use this when the creator's coding agent (Claude Code, Codex, Cursor) works in the product's own repository. Subclip's in-app agent does not edit a website; there, treat website mode as reading material and hand the creator the plan.

Setup, without the launcher:

1. The original skill ships a launcher binary and helper scripts. This edition does not include them, so always take the original's **Launcher unavailable** path: say once "Context loading did not run; I will read the existing project context directly", then read PRODUCT.md and DESIGN.md if they exist. Do not invent missing context.
2. Load the playbook for the request from the table below, or [reference/new-work.md](reference/new-work.md) for a new surface or a replacement visual world (with [new-work-world.md](reference/new-work-world.md) or [new-work-comp.md](reference/new-work-comp.md) when that part applies). For a critique run inline, also read [critique-rubric.md](reference/critique-rubric.md).
3. Read [reference/craft-floor.md](reference/craft-floor.md) immediately before any UI edit, including small ones. Skip it for planning-only work.
4. Choose the mode (Persuade, Operate, Read, Experience) from the requested surface, not from the product. See [mode-persuade.md](reference/mode-persuade.md), [mode-operate.md](reference/mode-operate.md), [mode-read.md](reference/mode-read.md) and [operate.md](reference/operate.md).

| Command | Category | What it does | Reference |
|---|---|---|---|
| `shape [feature]` | Build | Plan UX and UI before writing code | [shape.md](reference/shape.md) |
| `init` | Build | Capture product context in PRODUCT.md (`teach` is an alias) | [init.md](reference/init.md) |
| `document` | Build | Write DESIGN.md from existing code | [document.md](reference/document.md) |
| `extract [target]` | Build | Pull reusable tokens and components into the system | [extract.md](reference/extract.md) |
| `critique [target]` | Evaluate | UX design review with heuristic scoring | [critique.md](reference/critique.md) |
| `audit [target]` | Evaluate | Technical checks: accessibility, performance, responsive | [audit.md](reference/audit.md), native: [audit.native.md](reference/audit.native.md) |
| `polish [target]` | Refine | Final quality pass before shipping | [polish.md](reference/polish.md) |
| `bolder [target]` | Refine | Amplify a safe or bland part | [bolder.md](reference/bolder.md) |
| `quieter [target]` | Refine | Tone down a loud or overstimulating design | [quieter.md](reference/quieter.md) |
| `distill [target]` | Refine | Strip to the essence | [distill.md](reference/distill.md) |
| `harden [target]` | Refine | Errors, i18n, edge cases | [harden.md](reference/harden.md) |
| `onboard [target]` | Refine | First-run flows, empty states, activation | [onboard.md](reference/onboard.md) |
| `animate [target]` | Enhance | Purposeful motion | [animate.md](reference/animate.md) |
| `colorize [target]` | Enhance | Strategic color for a flat UI | [colorize.md](reference/colorize.md) |
| `typeset [target]` | Enhance | Typography hierarchy and fonts | [typeset.md](reference/typeset.md) |
| `layout [target]` | Enhance | Spacing, rhythm, visual hierarchy | [layout.md](reference/layout.md) |
| `delight [target]` | Enhance | Personality and memorable touches | [delight.md](reference/delight.md) |
| `overdrive [target]` | Enhance | Push past conventional limits | [overdrive.md](reference/overdrive.md) |
| `clarify [target]` | Fix | UX copy, labels, error messages | [clarify.md](reference/clarify.md) |
| `adapt [target]` | Fix | Different devices and screen sizes | [adapt.md](reference/adapt.md), native: [adapt.native.md](reference/adapt.native.md) |
| `optimize [target]` | Fix | UI performance | [optimize.md](reference/optimize.md) |

`craft` is a deprecated alias for ordinary new work ([craft.md](reference/craft.md)). With no argument, read [routing.md](reference/routing.md) and offer its menu; never auto-run a command. Native iOS and Android guidance lives in [ios.md](reference/ios.md) and [android.md](reference/android.md).

### Launcher commands in the references

Where a reference says to run `.claude/skills/impeccable/scripts/impeccable <verb>`, that helper is not shipped here. Do this instead and say so in the report:

| Helper in the reference | Without it |
|---|---|
| `context` | Read PRODUCT.md, DESIGN.md and any surface brief directly. |
| `shot`, `first-viewport`, `motion-capture` | Screenshot the page yourself at desktop and phone width (390 by 844) with the browser tool you have. In Subclip, `inspect_public_website` captures a public URL into a project. |
| `detect` | No detector. Check the craft floor's Refuse list by hand on the rendered page. The original treats a missing detector as an allowed skip; name it in Run Notes. |
| `critique-storage`, `audit-storage` | Skip persistence and trend, and say so, or save the report as a Markdown file only if the creator asks. |
| `concept-seed` | Write three clearly different directions yourself, each with its trade-off, plus the category standard as the quiet alternative. State that no seed was rolled. |
| `comp-spec`, `build-phase`, `component-review`, `surface-brief`, `font-fetch`, `pin` | Follow the reference's intent by hand (measure the comp by eye, keep your own phase notes, use a font the project already licenses). |

Not included: `live`, `generate` (they need the original live browser runtime), and the `hooks`, `doctor` and `foundations` maintenance commands. For those, install the [original skill](https://github.com/pbakaus/impeccable) next to this one.

## Video mode

Use this for a Subclip project: a SaaS explainer, product UI promo, launch film, app walkthrough, feature demo or changelog video.

1. Read `subclip-video-editor` with `read_subclip_skill`, then the skills the job needs: `subclip-hyperframes-layer` or `subclip-remotion-layer` for UI scenes, `subclip-motion-graphics`, `subclip-text-captions`, `subclip-timeline-contact-sheet`, `subclip-review-safety`. Keep one explicit project ID on every project call and make one edit call at a time.
2. Read the project: `get_project_outline`, then `read_project_section` for the lanes in scope, `list_editor_assets` for real item IDs, `get_project_director_brief` for the brief and any video design system, and `get_media_context` before rescanning media.
3. Look first. `analyze_timeline`, then `get_timeline_contact_sheet` over the range in scope (one sheet, many frames), and `view_current_frame` for a full-size look at a single moment. A saved edit is not visual proof.
4. Run the command the creator named (table in [video/commands.md](video/commands.md)). With no command named, offer a short menu: `critique` for a new or unknown project, `polish` near delivery, `document` when no video design system exists.
5. Before editing any UI scene or title, read the [video craft floor](video/commands.md#video-craft-floor). It is the original craft floor turned into checks on frames.
6. Verify with a contact sheet of every changed moment plus the cuts around it. Record decisions in the director brief with `update_project_director_brief` and finish with `write_session_summary`.

Video mode command status:

- **Kept and adapted:** `shape`, `init`, `document`, `extract`, `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `clarify`, `typeset`, `colorize`, `layout`, `animate`, `delight`, `overdrive`, `adapt` (aspect ratios and platforms).
- **Website only:** `harden` (error states and i18n of a live product), `optimize` (page performance), `onboard` (in-product first-run flows), `live` and `generate`. In a video they have no target. When a walkthrough needs to show an empty or error state, design that state in the UI scene under `clarify`. `optimize` has one video cousin: keep motion layers smooth to scrub, which `audit` covers.

DESIGN.md in video mode is the video's design system, recorded in the director brief. See [video/design-system.md](video/design-system.md).

## Cost

Both modes are craft work with 0 credits. No step calls an AI model. When a scene needs a product image the creator does not have, ask first; offer the creator's own signed-in Codex CLI for images when it works, otherwise Subclip's `generate_ai_media` after quoting the model and price. Prefer real screenshots and recordings of the product.

## Reference

- [examples/impeccable-reference.mp4](examples/impeccable-reference.mp4): a 25 s before and after. An invented invoicing product, Plumtrace, starts as a generic AI landing page, gets a numbered `critique`, then the same page is rebuilt with `distill`, `clarify`, `typeset`, `colorize`, `layout`, `animate` and `polish` named on screen. Three HyperFrames layers, no AI model, CC0 music.
- [examples/impeccable-reference-sheet.jpg](examples/impeccable-reference-sheet.jpg): one frame per second of the same video.

Adapted for Subclip from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus, Apache-2.0.
