# Colour

Colour is the first thing a viewer judges and the quickest way for a film to look like every other AI-made film. Product designers at the top of the field do not pick colours. They find them, then build a system around them: a few roles, fixed proportions, and a reason for every hue.

Without a method an agent falls back on its own default. In an October 2026 test, three agents given only a README each produced nine key frames. Six were near-black with one warm accent and bone-white type; all three directions of one product shared that pattern, and the person disliked every one. Each card claimed its look "differed from the house style", because the house style had been described by names (a font, a lime accent), and the agents avoided the names and kept the pattern.

## 1. Find the colours before choosing any

Work down this list and write where each colour came from:

1. **The brand's own values.** Read them; do not eyeball them. `inspect_public_website` returns the computed text and background colours with how often each is used, the fonts, and logo files. A hex with its source beats any adjective.
2. **The product itself.** Its interface (sample real screenshots), its hardware finish, the things it makes. A palette that frames an interface starts from that interface's own neutrals, so the interface sits inside the film instead of on top of it.
3. **The world of the idea.** The material the product's name or promise lives in, taken from a real reference you can sample. Sample the photograph; do not turn an adjective into a hex.
4. **Invention, last,** labelled "invented: no brand colours found" on the card.

An open-source project with only a README still has colours to find: its badges and images, the outputs it produces, the tools it lives in, the repository's social image.

## 2. Build a system, not a pick

| Role | Job | Typical share of the frame |
| --- | --- | --- |
| ground | the world the film happens in | most of it |
| surface | panels and cards, one or two steps off the ground | a fifth or so |
| ink, muted ink | type and lines | small |
| accent | one meaning only: the new thing, the action, the result | a few percent |
| flood (optional) | the accent or a second hue filling the screen on a beat | a moment, once or twice |

What separates a designed palette from a generated one:

- **Value first.** The frame reads in greyscale: hierarchy comes from lightness steps, colour adds meaning on top. Desaturate a still and look.
- **Neutrals with a small, deliberate bias.** Most measured films tinted their greys slightly cool or warm, rarely more than a whisper. Choose the bias; do not inherit it.
- **Few hue families.** One family plus neutrals, or two in a chosen relationship. Three saturated hues of equal weight look cheap.
- **Saturation has one home.** A neutral world with one saturated accent, or a saturated field behind a neutral subject. Medium saturation everywhere is mud.
- **Light is part of the colour.** A ground is lit: a falloff, a vignette, the glow of a screen. A flat fill reads as a slide.
- **Type is neutral.** In 18 of 18 measured films with type it was neutral white or black. Small text needs 4.5:1 contrast against its ground.
- **Content brings its own colour.** Keep the designed palette quieter than the screenshots and footage it frames.
- **The accent is scarce so that it means something.** If it floods the screen, that is an event placed on a beat.

## 3. The product's colours first; directions differ in how they use them

A film about a product is in the product's colours. The three directions differ in language, structure and material, and in how they use the brand's palette:

- **Product colour.** The interface or finish sets everything.
- **Neutral world, one signal.** The brand's ground and its one accent, with one meaning.
- **Natural light.** Real footage carries the colour, the graphics stay neutral.
- **Material.** Paper, metal, clay or glass, photographed or sampled and lit.
- **Colour fields.** Full-screen saturated grounds that switch on the cut, only when the colours are the product's own (its themes, a palette tool). Never invented to add energy.

## 4. The house look, as patterns

These combinations make a film interchangeable with what every other agent produces. Avoid them in invented palettes; when the brand really uses one, use it and say so:

- dark ground, one warm accent (terracotta, amber, orange), bone or cream type, often a serif display;
- warm off-white or cream ground, a serif or giant grotesk, an orange-red accent;
- near-black with an acid lime or green;
- a purple-to-blue gradient; neon on a code-editor dark ground;
- the same "neutral plus one accent" strategy in every direction.

Changing the hex while keeping the pattern does not count.

## 5. On the direction card

```
Palette:  ground #FFFFFF 70, surface #F4F7FB 15, ink #0F172A, accent #153592 8, flood #26C9D5 from: site computed colours, logo file
```

Roles, hex values, shares of the frame where they matter, and the source. People choose colour separately from composition ("A's palette with C's composition"), so keep it a separate line.

## 6. What 21 launch films did (measured, October 2026)

- Colours were found, not invented, in 19 of 21: brand values, the product's finish or interface, the light of the footage.
- Ground follows what the film carries: 10 mostly dark, 8 mostly light, 2 mixed. Hardware leaned dark, software leaned light. "Tech needs black" did not hold.
- The accent was scarce: in 12 films no frame had more than 5 percent strongly saturated pixels.
- Floods were rhythm: designed full-screen colour appeared in 4 films, all energetic ones.
- The two house patterns appeared in 0 of 21.

## 7. Colour over time

Plan colour per stretch in the rhythm sheet: a ground flip at the stop, a flood on the drop, the brand's ground again at the mark. A palette that never changes is part of a flat film.

## 8. Check

- Desaturate a key frame: the hierarchy still reads.
- Look at it at phone feed size.
- Put it beside the brand's own site or screenshots: does the film look like it belongs to them?
- Judge colour only on frames with final colours and type.
