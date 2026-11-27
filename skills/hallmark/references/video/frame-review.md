# Frame review: the slop tells, as they look in a video frame

The video form of the sweep. Render the film with `get_timeline_contact_sheet` (one frame per second, or `at: "auto"` plus every scene change), look at doubtful frames full size with `view_current_frame`, and walk this list. Gate numbers point at [`../gates.md`](../gates.md), which holds the full rule; tiers are the same: **Floor** never ships, **Reflex** is fixed or waived in the director brief with a reason, **Finish** is answered.

Batch it: one review round, one fix batch, then re-render only the times you changed. Never write a count you did not check in frames.

## Colour and surface

| Gate | Tier | What it looks like in a frame | Fix |
| --- | --- | --- | --- |
| 2a | Floor | Purple to blue, purple to pink or cyan on dark gradient anywhere: background, gradient text, a glowing button | one anchor hue, solid surfaces, solid ink |
| 29 | Reflex | Blurred orbs, aurora washes, a coloured glow behind text or around a button | a solid or grained ground; depth from lightness steps |
| 7a, 7b, 22 | Floor, Reflex | Pure black and pure white surfaces, dead grey neutrals beside a coloured accent | tint paper and greys toward the anchor hue |
| 23 | Reflex | The accent painting more than about 5% of the frame without a stated posture | the accent only on the primary action and state |
| 65 | Reflex | Cream paper, a high-contrast serif and a terracotta accent on a custom build | move one axis: accent first |
| 74 | Reflex | A framework's default palette (indigo, violet, slate) | a colour mixed for this film |

## Type

| Gate | Tier | What it looks like in a frame | Fix |
| --- | --- | --- | --- |
| 54 | Floor | The eyebrow: small text or a pill above a heading that only announces it ("Introducing", "Features", "Trusted by") | open the shot another way: the heading itself, a caption under the picture, nothing |
| 67 | Floor | Labels, chips, table heads or lower thirds in tracked capitals | body face, a step smaller, sentence case, untracked |
| 38i, 38iii | Floor, Reflex | One word in a headline set apart by colour, gradient, italic, weight or a highlight | the whole head one way; stress from a line break |
| 1 | Reflex | Inter, Roboto or a system face as the display face | a display face from the theme or `fonts.md` |
| 37, F19 | Reflex, Finish | More than two families, more than three weights across the film | display, body, at most one outlier |
| 64 | Reflex | Monospace as costume on labels that are not code or figures | labels in the body face |
| 75 | Reflex | Text that strains: under about 24 px on a 1920 frame for anything meant to be read | larger, or cut the words |

## Structure and layout

| Gate | Tier | What it looks like in a frame | Fix |
| --- | --- | --- | --- |
| 3 | Reflex | Three equal cards, an icon in a rounded tile above each heading | vary sizes, a table or a list, inline icons |
| 4 | Floor | A card inside a card | one containment layer |
| 6b | Reflex | Every element stacked on the centre line (pill, title, line, two buttons) | at most two centred elements; break one alignment |
| 8, 32 | Reflex, Ledger | The template film: hero, three features, metrics, call to action; or the same shot order as the last film | build from the product's own job and story |
| 58 | Floor | A frame you cannot read in the time it is on screen: more than about 25 words, or a hero with more than a headline, one line and its action | one idea per shot; split or cut |
| 77 to 79 | Reflex | Small things adrift on a wide canvas: a heading and a line with half the frame empty | mass: a bigger product shot, a wider body, a head at section size |
| 80 | Reflex | A drawn illustration of an object, person or scene standing in for a picture | a capture, a photograph or type at scale |
| 81 | Reflex | A coloured box where a picture should be | the real picture or the product built |
| 82 | Reflex | Rows of identical marks counting something | set the number in type |

## Frames, copy and proof

| Gate | Tier | What it looks like in a frame | Fix |
| --- | --- | --- | --- |
| 19 | Floor | Buzzwords (seamless, supercharge, unlock, effortless, next-generation), placeholder names (Acme, Nexus, Jane Doe), "Get started" beside "Learn more", em dashes | say what the product does in its own nouns |
| 46a | Floor | Invented metrics ("10x faster", "99.9%"), testimonials, a logo wall, a customer count nobody gave you | the creator's real number, or nothing |
| 47a | Floor | A drawn browser bar with traffic lights and a URL pill, or a drawn OS title bar | a real capture with no drawn window bar, or the product built without a frame |
| 47b | Reflex | A phone, laptop or editor frame around the product | one frame at most, with real content inside |
| 47c | Reflex | A "product UI" of grey bars and empty boxes | the product built with real controls and sample data, or a capture |
| 84 | Reflex | A built mock of a product that exists and could be captured | capture it (`inspect_public_website`, `take_screenshot`, the recorder) |
| 63 | Floor | Meta lines joined with middle dots, an arrow glued to a button label, decorative status dots | line breaks, a verb as the label |
| 66 | Reflex | Decoration text: rotated labels, "BETA" pills, scroll cues, version badges | delete it |
| 69 | Reflex | One fact repeated in every shot | say it once, where it does work |
| 85 | Reflex | The film ends on an email sign-up when that is not the product's job | end on the one action the viewer came for |

## Assets and motion

| Gate | Tier | What it looks like in a frame | Fix |
| --- | --- | --- | --- |
| 30a | Floor | An emoji standing in for an icon | one icon set, or type |
| 12 | Reflex | Bounce or overshoot on UI state (a card springs in, a chip wobbles) | exponential ease-out |
| 11 | Reflex | The same lift, scale or glow on every element | one signal per element |
| 40, 41 | Floor | Text under its contrast threshold: grey on colour, light text on a light capture | fix the pair; a scrim or a solid plate behind text |
| 73 | Floor | Text covered by another layer, a caption over the product | give the text its own space |
| F3, F26 | Finish | A headline that breaks badly, a stub word alone on a line | rewrite or break at the sense break |

## Motion rules for the film

- One settle per shot (a fade with a small rise, 0.4 to 0.8 s including stagger), then hold. No fade, sweep and scale on one element.
- Cuts and state changes carry the story; motion is state (a row turns to Covered), never decoration.
- No starfields, parallax, cursor followers or ambient loops unless the theme declares one.
- A screen recording keeps its own motion; add zooms only where the action is too small to read.

## The cold question

After the checklist, give the contact sheets and the brief's design system to a fresh-context subagent when one is available and ask, without your reasons: does anything here read as machine-made, and does the stated signature appear in the film? Act on what is real, then record the outcome in the brief.
