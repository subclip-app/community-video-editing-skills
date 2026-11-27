# Video mode commands

Impeccable's words, applied to a Subclip timeline. The target is a scene, a title, a range of time or the whole film. The evidence is always rendered frames: `get_timeline_contact_sheet` for many moments at once, `view_current_frame` for one moment at full size. Each command below names what it judges, what it changes and the Subclip tools it uses. Keep the project ID on every call, one edit at a time, and re-read the section after each edit.

## Modes for video

The surface mode decides how loud a fix may be.

| Video type | Mode | Ambition shows as |
|---|---|---|
| Launch promo, ad, landing page film | Persuade | A committed look, one authored motion moment, big display type |
| App walkthrough, tutorial, feature demo | Operate | Legible UI, steady pacing, the cursor and the result always findable |
| Explainer, changelog, docs video | Read | Clear structure, readable text, holds long enough to read |
| Showcase, portfolio reel | Experience | The work fills the frame; interface frames recede |

Pick the mode per scene when a film mixes them: a promo may open in Persuade and show the product in Operate.

## Video craft floor

The original [craft floor](../reference/craft-floor.md) as checks on frames. Run them together on one contact sheet, not one frame at a time.

Verify:

- **Contrast.** Body text 4.5:1 and large text 3:1 against what is actually behind it in the frame, including moving backgrounds. On a colored surface, tint secondary text from that hue, never plain gray.
- **Text size at the delivery size.** At 1080p, body text in a UI scene at least 24 px, labels at least 20 px, titles 64 px and up. For a vertical short watched on a phone, go larger. Read the frame at 50 percent zoom: if you squint, it is too small.
- **Reading time.** A line on screen holds at least as long as it takes to read twice, roughly 0.3 s per word plus 1 s. A title that leaves before it can be read was decoration.
- **Safe area.** Keep text and key UI inside the inner 90 percent of the frame, and clear of platform overlays on vertical video (bottom fifth and right edge).
- **Spacing.** Tight groups, generous separation, more space above a heading than below it. One spacing scale per scene.
- **Type.** A clear role scale (title, heading, body, label, data), obvious weight steps, tabular numerals for figures that change, no orphans in titles.
- **Motion.** One authored moment per scene, not the same fade and rise on every element. Ease out (expo or quart) from a visible default; nothing bounces unless the brand bounces.
- **UI truth.** Real states, real data shape, working-looking controls. If the scene shows an app, it shows what the app does, not three cards about it.
- **Continuity.** The same product looks the same in every scene: colors, fonts, radii, the cursor.
- **Copy.** The product's own language. Buttons name their action. Every claim is one the creator gave you.

Refuse (category defaults that read as AI slop; the brief can earn them back, except the eyebrow, which is a ban):

- Gradient text for emphasis. Use weight or size.
- An eyebrow label above a heading.
- Same-size cards of icon plus heading plus text as the structure of a scene.
- The hero metric template: big number, small label, accent glow.
- Emoji or Unicode glyphs standing in for icons. Draw them, or use one icon set at one stroke weight.
- Glass, blur and colored glow as decoration rather than a specific effect.
- A colored bar down one side of a rounded box.
- Purple to blue gradients picked because the product is "tech". Pick color from the product and its use scene.
- Section numbers (01, 02, 03) unless the sequence is the information.
- Monospace as a costume for "technical".
- Identical entrance animations on every element and every scene.

## Commands

| Command | In a video it means | Main Subclip tools |
|---|---|---|
| `critique` | Design review of the rendered film or a range | `analyze_timeline`, `get_timeline_contact_sheet`, `view_current_frame` |
| `audit` | Technical checks: readability, safe areas, contrast, pacing, layer health | `get_timeline_contact_sheet`, `analyze_timeline`, `validate_runtime_layer_source` |
| `polish` | Final pass on the whole path before export | `edit_layer_source`, `update_text_item`, `add_text_keyframe`, `update_audio_item` |
| `bolder` | Raise one scene or title to the strength the rest of the film implies | `edit_layer_source`, `update_text_item` |
| `quieter` | Calm a loud scene: fewer colors, less motion, more air | `edit_layer_source`, `update_text_item`, `update_media_item` |
| `distill` | Remove elements, words and effects that do not carry the message | `edit_layer_source`, `delete_timeline_item`, `update_text_item` |
| `clarify` | Rewrite on-screen copy, labels and UI text so each says one thing | `update_text_item`, `edit_layer_source` |
| `typeset` | Fix the type system: roles, scale, weights, measure, numerals | `update_text_item`, `edit_layer_source` |
| `colorize` | Give color a job: action, state, brand, data | `edit_layer_source`, `update_text_item`, `set_canvas_background` |
| `layout` | Spacing, alignment, hierarchy and framing inside the 16:9 or 9:16 frame | `edit_layer_source`, `update_text_item`, `update_media_item` |
| `animate` | Motion that explains a state change, or one authored moment | `edit_layer_source`, `add_text_keyframe`, `add_media_keyframe` |
| `delight` | One memorable touch that fits the product | `edit_layer_source`, `add_runtime_layer` |
| `overdrive` | Push one scene past the usual, with the creator's go-ahead | `add_runtime_layer`, `validate_runtime_layer_source` |
| `adapt` | Recompose for another aspect ratio or platform | `clone_project`, `update_runtime_layer`, `update_text_item` |
| `shape` | Plan the film's UI scenes before building | `get_project_director_brief`, `update_project_director_brief` |
| `init` | Capture product truth for the video | `update_project_director_brief` |
| `document` | Write the video's design system | `update_project_director_brief`, see [design-system.md](design-system.md) |
| `extract` | Pull repeated values from scenes into that design system | `read_layer_source`, `update_project_director_brief` |

### critique

Judge the film the way the original critique judges a page, with frames as the evidence.

1. Resolve the target: whole film, a time range or named scenes. Read the brief and the video design system if one exists.
2. `analyze_timeline` for structure and issues, then one `get_timeline_contact_sheet` over the range (`every: 1` for short films, or `at: "scene-changes"` for long ones). Add `view_current_frame` only for moments where small text or contrast matters.
3. Assessment A, design review: design specificity first (could another product use these scenes unchanged?), then hierarchy, type, color, composition, motion, copy, pacing and the emotional arc (peak and end). Score Nielsen's heuristics from [critique-rubric.md](../reference/critique-rubric.md) where they apply to a viewer, marking the rest `n/a`.
4. Assessment B, evidence: walk the video craft floor's Refuse list frame by frame, with times. This replaces the original's detector.
5. When a sub-agent tool exists, run A and B as separate agents so B's list does not anchor A. Otherwise run them in that order and lead the report with the degraded banner the original asks for.
6. Report P0 to P3 findings with times and tile numbers, what works, and the commands that fix each finding (`typeset 0:12 to 0:18`). End with the questions about what to fix next.

Critique changes nothing in the project.

### audit

Technical, measurable checks. Report with times and a health score per area:

- **Readability:** text sizes at delivery resolution, contrast against the actual frame, reading time per line.
- **Safe areas:** text and UI inside the inner 90 percent; vertical overlays.
- **Captions:** present when there is speech, not covering UI that matters.
- **Layers:** runtime layers validate (`validate_runtime_layer_source` on the source from `read_layer_source`), seek cleanly (check frames just after each layer starts and just before it ends), and no blank frames at cuts.
- **Audio:** music under speech, peaks under -1 dB, no silent gaps the picture does not explain (`analyze_timeline` lists them).
- **Pacing:** shortest and longest scene, holds that are too short to read.

### polish

Refinement, never a hidden redesign. Keep the film's look, copy and structure.

1. Establish the system from the video design system and the strongest existing scene.
2. Gather evidence on a contact sheet of the whole path, plus a prior critique from the brief if one exists.
3. Fix in this order: unreadable or wrong content; broken frames, flashes and blank tails; hierarchy and continuity drift between scenes; spacing, alignment and type details; motion timing and easing; audio balance.
4. Details that make the difference: tabular numerals, optical alignment of titles, a consistent cursor, matching corner radii, one easing family, no element popping in a frame before its scene starts.
5. Verify the whole path again, then hand off to export.

### bolder and quieter

Both are scoped to a named target; everything else stays. `bolder` turns the target up with what the film already owns (its display type at full strength, its accent, its signature motion) and does not add new colors, fonts or effects. `quieter` reduces saturation, competing weights, decorative motion and density, keeps hierarchy and character, and never collapses to gray on white. Original playbooks: [bolder.md](../reference/bolder.md), [quieter.md](../reference/quieter.md).

### distill

Remove until the scene says one thing. Cut decorative cards, extra buttons, secondary claims, duplicate labels and effects. A UI scene shows the one screen state that proves the point. Keep a list of what was removed in the brief so the creator can bring something back.

### clarify

On-screen words are UI. Titles name the outcome, not the category ("Know which invoices will be paid late", not "Supercharge your invoicing"). Buttons in a UI scene name their action. Numbers have units. One idea per title card. Never invent product claims; ask for the real ones.

### typeset

Set roles before editing: title, heading, body, label, data. Use the fewest families that make the hierarchy unmistakable; a display face only when it has a role nobody else can do. Native titles change with `update_text_item` (font, size, weight, letter spacing, line height). UI scenes change in source with `read_layer_source` then `edit_layer_source`. Use fonts available to the renderer; check the frame, since a missing font falls back silently.

### colorize

Name the strategy first: temperature, the dominant relationship, how much accent. Give color jobs (canvas, surface, text, action, state, data) and let the accent be rare enough to point. Derive color from the product and its use scene, not from the category. In data scenes, do not rely on color alone.

### layout

Work inside the frame: safe area, a grid, one spacing scale, clear focal point per scene. In a UI scene, group tightly and separate generously; give the element the viewer must read the most space. For native items use `update_text_item` positions and `update_media_item` framing; for scenes edit the source.

### animate

Find the job first: explain a state change, keep continuity between scenes, point attention at the moment that matters, or one authored focal moment. Write the motion thesis (focal moment, continuity, feedback) before keyframing. Durations: 150 to 300 ms for UI state changes, 300 to 500 ms for layout and scene transitions, 500 to 800 ms for one authored entrance. Ease out from a visible default. In runtime layers keep motion deterministic so every frame seeks the same. For deep motion craft, the `motion-polish` community skill goes further. Original: [animate.md](../reference/animate.md).

### delight

One touch that belongs to this product and this moment: a number that lands with the right weight, a cursor that lingers where a real user would, a closing frame the viewer remembers. Never at the cost of reading time. One per film is usually enough. Original: [delight.md](../reference/delight.md).

### overdrive

Propose before building: name the one scene, what makes it extraordinary and what it costs in render time. Build it as one HyperFrames or Remotion layer with `add_runtime_layer` after `validate_runtime_layer_source`, then check every second of it on a contact sheet. Original: [overdrive.md](../reference/overdrive.md).

### adapt

Recompose for another ratio or platform instead of cropping: `clone_project` for the variant, then move titles and UI inside the new safe area, enlarge type for phone viewing, and re-check every scene on a contact sheet. Platform rules (overlay zones, length) come from the Subclip export and social skills.

### shape, init, document, extract

The build commands write into the project's director brief, not into files on disk. `shape` interviews for the film's purpose, audience, the product moment each scene proves, and the look, then writes a short brief and stops for confirmation. `init` records product truth the video must not contradict (name, real claims, users). `document` and `extract` write and maintain the video design system described in [design-system.md](design-system.md).

## Building UI scenes

When the film needs a product screen that the creator cannot record yet, build it as a HyperFrames layer (read `subclip-hyperframes-layer` first): one layer per scene, the full canvas size as intrinsic size, local time, a paused GSAP timeline registered on `window.__timelines`. Use the product's real copy and data shape. Prefer a real screenshot or recording when one exists, imported through the normal media tools.
