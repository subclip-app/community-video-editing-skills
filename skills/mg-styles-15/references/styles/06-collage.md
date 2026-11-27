# Collage / Cut-out Animation

Original film: NOGGIN Quarterly "The Mind Is a Collage". 1920x1080, 30 fps, 10 s, final jury score 8.14 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/06-collage.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/06-collage).

Pick it for: music, streetwear and magazine-style shorts, surreal or comic ideas, editorial openers.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

- Photos: the creator's own images, or public domain and CC0 images (old portraits, NASA imagery). Find them with `search_public_media` and import with `import_public_asset_to_timeline`, keeping the attribution; check each license is free for commercial use. Cut them out with `remove_media_background`.
- Assembly: a HyperFrames layer that loads the imported cut-outs by the URLs from `list_editor_assets`, adds the 2 to 4 px white scissor edge (stacked `drop-shadow` on the image element only, never on text) and a halftone dot overlay drawn in SVG or canvas, and steps all motion on a 12 fps grid (`Math.floor(t * 12) / 12`, some holds at 6 fps) with seeded plus or minus 2 px jitter.
- Upstream route: DOM and Canvas with PNG cut-outs, SVG and CSS white edge and halftone filters, 30 fps render with motion held on a 12 fps grid. The upstream photos are not reused here.

## Creative seed (swap this)

"Brain-storm collage." Surreal Dada and Monty Python cut-out collage with a modern editorial magazine finish.
- Newsprint or kraft paper ground; a public-domain Victorian portrait cut-out with a rough white scissor edge and halftone; the top of the head FLIPS OPEN like a lid (Terry Gilliam homage) revealing deep space (public domain NASA imagery) from which flowers, birds, planets, pointing hands and a vintage rocket spill out.
- The jaw on a separate cut flaps with the sound; hands slap elements onto the page; torn paper strips; bold constructivist red and black diagonal typography (for example "THE MIND IS A COLLAGE").
- Motion on 12 fps (even 6 fps for some holds) with plus or minus 2 px hand-placement jitter; a paper flip or torn paper transition to the end card.
- Sound: vinyl crackle, a jazzy boom-bap bed, paper rustles, scissors snips, slaps and a comic pop when the lid opens.

## Signature features and key techniques

A retro surreal style made by cutting up old photos, newspapers and torn paper and reassembling them. Its roots are Monty Python and Soviet constructivist posters. Unbalanced head-to-body proportions, mouths that open on their own and halftone dot texture are the trademarks. Lately it has merged with the magazine look and become a go-to style for music and streetwear short videos.

Visual features: photo cut-outs with white edges, halftone dots, newspaper texture, surreal assemblies with unbalanced proportions, stop-motion style stepped movement.

Key techniques:
- Asset prep: cut out people and objects, then add a 2 to 4 px white outline (the scissor cut look) and a halftone filter.
- Joint animation: anchors at shoulder, elbow and jaw for puppet-style segmented rotation; the mouth opens and closes with two or three replacement frames.
- Deliberately lower the frame rate: the subject moves at 12 or even 6 fps (stop-motion feel), with plus or minus 2 px random jitter to mimic hand placement.
- Layer stack: paper texture background, big color blocks, photo cut-outs, handwritten doodles and tape stickers, a grain adjustment layer.
- Transitions: a hand slaps elements onto the page, or the whole page flips.

## Sound in Subclip

`search_public_audio` for "boom bap loop" (CC0 first) plus `source: "sfx"` for vinyl crackle, paper rustle, scissors, slap, pop.
