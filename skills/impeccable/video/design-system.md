# DESIGN.md for a video

In website mode, DESIGN.md lives at the root of the product's repository ([document.md](../reference/document.md)). In video mode the same structure becomes the video's design system and lives in the project's director brief, so every agent and the creator see it next to the edit. Never write project files on disk for it.

## When to write it

- `document`: the project has scenes already. Read them, then write the system they imply.
- `shape` or the start of a new film: write a short seed system once the look is agreed, and mark it as a seed.
- `extract`: values repeat across scenes (the same hex, radius, font size). Name them in the system and use the names in later edits.

If the film shows a real product, the product's own DESIGN.md (or its site, read with `inspect_public_website`) is the source. The video system then adds only what video needs on top: title roles, motion and pacing.

## How to record it

1. `get_project_director_brief` and keep what is already there.
2. Read the scenes: `read_layer_source` for UI scenes, `read_project_section` with lane `text` for native titles, and a `get_timeline_contact_sheet` to see the result.
3. Write the section below into the brief with `update_project_director_brief`, keeping the rest of the brief. Use the creator's words for the qualitative parts and ask when a binding choice cannot be inferred.
4. On later edits, use the named values. A new value that the system does not have needs the creator's yes, the same rule the original applies to `bolder`.

## Template

Keep the eight canonical sections in order and omit the ones that do not apply. Add the two video sections at the end.

```markdown
## Video design system

Mode: Persuade (launch promo) | Operate (walkthrough) | Read (explainer)
Canvas: 1920 by 1080, 30 fps. Safe area: inner 90 percent.

### Overview
One paragraph: what the film should feel like and what it must never look like.

### Colors
- canvas: #f5f1ea (warm paper, every UI scene)
- ink: #1b1a17 (titles and body)
- ink-2: #57524a (secondary text)
- accent: #6d2a57 (one action or one state per scene, never decoration)

### Typography
- title: Iowan Old Style 500, 104 px, line height 1.0, tracking -2
- heading: system sans 700, 48 px
- body: system sans 400, 28 px, line height 1.45, measure 640 px
- label: monospace 600, 26 px (command names only)
- data: tabular numerals

### Layout
12 column grid, 140 px margins, spacing scale 8, 16, 24, 40, 64, 96.

### Elevation & Depth
One soft shadow for raised cards. No glow.

### Shapes
Radius 12 for controls, 20 for cards, 999 for chips.

### Components
Buttons, chips, table rows, cursor: how each looks and moves.

### Do's and Don'ts
Do: one authored motion moment per scene.
Don't: gradient text, eyebrow labels, emoji icons, glass as decoration.

### Motion
Ease: expo out. Durations: 250 ms state, 450 ms layout, 700 ms focal entrance. Stagger cap 300 ms.

### Pacing and sound
Title holds: 0.3 s per word plus 1 s. Scene length 3 to 6 s. Music under speech; peaks under -1 dB.
```

The values above are an example (the Plumtrace reference). Replace every one with the film's own.
