# The video's design system

In website mode Hallmark writes its decisions into a stamp at the top of the CSS and a `tokens.css`. A video has no stylesheet that every scene shares, so the stamp moves into the project's director brief (`update_project_director_brief`), and each scene copies the tokens into its own `:root`. The brief is the durable memory: re-read it with `get_project_director_brief` before adding or changing a scene.

## Where the values come from

1. **The product's own brand,** when the film shows a real product: sample its colours and faces from captures (`get_media_context`, `view_current_frame`) or its site (`inspect_public_website`). A real brand is never themed from memory ([`../brand-truth.md`](../brand-truth.md)).
2. **A theme,** when there is no brand: pick from [`../themes/index.json`](../themes/index.json) by genre and keywords, load only that theme file, and take its `:root` block, faces, radius and surfaces. Never its page layout.
3. **Custom,** when the creator asks: [`../direction.md`](../direction.md), under the same floor.

## The block

```markdown
## Hallmark design system
- Theme: custom (Covershift), genre modern-minimal, deal: manual
- Paper #f4f2ee, paper-2 #ebe8e2, ink #1c1e22, muted #5d6068, rule #d8d4cc
- Accent #1e6b4f with accent ink #f7f6f2, used only for the primary action and state (done, covered)
- Late #9a3b1f for warning state text only
- Faces: display Bricolage Grotesque 700; body Instrument Sans 400 and 600
- Sizes at 1920 wide: display 84, section 72, body 32, label 22 to 26
- Radius 12 on controls, 16 on panels; depth: a 1 px inset outline, no shadow
- Motion: one settle per shot, 0.5 s fade with an 8 px rise, ease-out, no bounce
- Signature: the rota row turning from Needs cover to Covered
- Material: real: the product's job and its rota fields; pictures: the product built with sample data, marked; absent: metrics, logos, quotes
- Review: Floor 0 open, Reflex 0 open, waivers none
```

That is the block from the skill's reference video. Keep it short; every line must be a decision a later scene can follow.

## Rules that carry over from the website floor

- Every colour and font in a layer goes through a `:root` token (Floor 1). No literal hex below the token block.
- Two families at most, three weights across the film, one weight and one colour per heading.
- One accent, a signal and not a fill. A declared Committed or Drenched posture goes in the block.
- Labels in the body face, sentence case, untracked. No eyebrows.
- The same radius per nesting level and one primary button style across every scene.
- Sample data reads as samples (`Example Cafe`, round values) and says so in a small caption.

## Waivers

A Reflex gate may be waived for a real reason that belongs to this film, recorded in the block: `Waivers: 47b, one laptop frame around the real capture in the opener, the product is a desktop app`. A Floor gate is never waived.
