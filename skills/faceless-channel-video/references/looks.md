# The five looks and the style lock

From the original `references/styles.md` and `references/creative.md`. Pick one look, write its style key once, and reuse it word for word for every scene, prompt and reference.

## Editorial collage

Paper ground with a fine fibre grain, monochrome halftone cut-outs with rough torn white edges, one accent colour, abstract unlabelled diagrams and maps, soft paper shadows, staggered handmade motion. Words stay in the narration unless on-screen text was asked for. Good for explainers and documentary.

In code: SVG halftone dot patterns for every surface, a rough white outline under each cut-out (`feTurbulence` plus `feDisplacementMap`), a soft drop shadow, a static paper grain overlay, cut-outs moving on stepped eases. The reference episode uses this look on a near-white paper with Subclip blue as the one accent.

## Paper diorama

Miniature layered cardboard and aged paper sets, torn edges, restrained halftone, one accent colour, warm directional light, shallow depth of field, stop-motion movement. Recurring props stay visually identical.

In code: three or four depth planes with parallax on camera moves, a warm light gradient, a soft blur only on the far plane (never on text), props moved on twos.

## Cinematic storybook

Hand-painted 2D illustration, expressive characters, detailed places, a muted jewel-tone palette, warm light against deep shadow. Keep character identity and costume fixed; vary camera size and action. Usually generated: lock a character reference first and attach it to every scene.

## Mannequin

Clean matte clay figures, simple period-right settings, even neutral light, smooth weighty movement. Recurring figures keep the same silhouette and colour. Usually generated, or built with native 3D layers when a fitting model exists in `list_3d_models`.

## Children's

An age-right 3D, flat 2D, hand-drawn or vector look. Characters with clear features and visible reactions; the picture shows the action the narrator names. Simple words, four shots per block, an upbeat instrumental bed only if wanted. Flat 2D and vector work well as code scenes.

## Style lock

1. Write the style key: ground, palette, the one accent, material, light, motion character, what never appears (text, logos, real faces).
2. Make the shared references: through-line asset, recurring characters, key places. For generated looks keep the exact operation ID of each accepted reference and attach it to later generations.
3. **First-scene check:** build block 1 only, look at every shot, and fix it before building the rest.
4. Inspect each later block against the key. Record defects by name and retry only the failed asset. Never regenerate accepted assets to "match".
5. A supplied photo used only as a style donor: do not copy its person, logos or composition. A mascot to keep: make one illustrated reference and check its features before the full run.
