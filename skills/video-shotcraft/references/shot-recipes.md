# Shot recipes

These recipes adapt the upstream cards for editable Subclip layers. Browse the [original Gallery](https://vincentwei1021.github.io/video-shotcraft/) for the full library. Resolve exact card and style keys against the [pinned Gallery index](https://github.com/Vincentwei1021/video-shotcraft/blob/59f3e9b9e936ff2bce0e18446226d770a3f2f61f/gallery/api/library.json), then follow each card's implementation reference. Use the matching demo's timing, easing and visual checks as design reference. Build from the creator's assets.

## Choose the energy curve

For a 30 to 60 second film, start with a quiet brand introduction, give one object a complete hero motion, alternate features and quiet reading beats, then build to a brand payoff. A useful 30-second allocation is 3 seconds brand, 4 seconds hero, 18 seconds features and breathing cards, and 5 seconds finale. Collapse stages for short single-feature promos.

- Tell one story per shot. Use a signature move once as the main event. Favor a steady camera and keep dense UI close to front-on.
- Budget a full second after the wordmark settles, half a second after a group move settles and at least three seconds for a lead action arc. Build the move into the remaining time.
- Keep fly-ins anchored to actual UI slots. Use an empty capture or a surface-matched patch beneath the moving slice to avoid double images. Use a crisp close-up capture and check strokes and legibility at the final output size. Keep glints inside rounded corners and reserve them for one hero moment.
- As a starting point, aim for an effective visible glyph height of 5% of the frame for captions and 3% for supporting text when it must be read. Judge actual rendered size and contrast. Write specific feature and benefit copy. Remove repeated taglines.

## Cards for the core sequence

Example frame counts assume 30 fps. Convert to local seconds before placing a layer. Preserve the shape of the motion when adapting to another frame rate, screen or beat.

| Card | Purpose and motion | Check |
| --- | --- | --- |
| `brand-ink-open` | Draw the vertical ink stroke then the horizontal stroke. Stagger wordmark letters about 3f apart, scale 1.6 to 1 as blur clears over 12f, then bring up the kicker. Give the finished lockup 1s before a short upward exit. | Keep the opening quiet. Fade the guide strokes before the lockup. |
| `spotlight-hero-card` | Dim the real page. Move a soft pool over it in three steps, lock onto one card around f34, push in from the side over about 18f and switch to a card-shaped pool in page space. Lift the card with overshoot and a growing contact shadow, hold it afloat and reseat around f142. Give the landing a clear rest. | Preserve edge-to-edge legibility on the hero. Keep the pointer-free camera stable after the push. Use one outline scan and keep annotations in the same perspective. |
| `deck-deal-flyin` | Start close on a visibly raised stack, orbit and pull back. Compress the stack and pull the top card back just before dealing. Deal along arcs into measured grid slots with shorter gaps as the sequence builds. At 30fps, use about 8f of travel, 4f of settle and 2f of press and rebound. | Anticipation should read at viewing size. Let bodies stop first, then shadows and trails. Keep at least 0.5s of fully settled grid. |
| `type-and-filter` | Push toward the real search field. Type at about 3f per character, hold about 11f, then stagger nonmatches out. Slide the survivor to a real slot. Confirm selection with a short two-ring cue and push into the detail view. | Keep the text cursor solid during typing. Retain placeholder geometry without overlapping captured text. Let viewers see input, response and selection in that order. |
| `row-embed` | Drop real row slices over empty slots. Start around 16 degrees of X tilt and flatten them as they land with slight rebound. Example cues at 12, 22, 31, 39 and 46f, with 12f of travel each. Trace a thin accent seam outward from the center of each landing. | Keep the seam within the row's rounded edge. Use a single transition cue when rapid row clicks would clutter the mix. |
| `list-stack-press` | Bring in five list cards from below with alternating slight tilt and about 12f between arrivals. Each landing pushes the stack down about 6px with an 8f recovery. Advance the counter on contact, with each digit settling before the next cue. | Keep the list front-on. Delay secondary highlights by 2 to 4f. Leave room for the last digit to finish. |
| `paper-title-card` | Give a single benefit sentence about 1.7 to 1.8s. Stagger the words every 4f, then scale from about 1.28 to 1 and clear blur over 9f. Use one accent word and a short underline. | Use native text for a simple static title. Keep motion when doing the press effect. Check that the entire sentence can be read. |
| `document-typewriter-reveal` | Reveal real document blocks in pairs with surface-colored left-to-right wipes and one caret. Pull out from the header to show the entire window. Stagger sidebars and history entries after the body. | Calculate the last reveal before building. Cover bullets and trailing letters, avoid multiple carets, and give the full document time to read. |
| `outro-group-photo-launch` | Return one representative piece of each shown feature. Bring pieces in from four sides, staggered about 3f with about 12f of travel. As pieces land, dim them slightly for the wordmark. Lower the camera angle subtly and hold the finished sign-off at least 1s. | Keep the product mark dominant. Use a riser for assembly, a hit for the stamp and a short sparkle for the finishing accent. |

## Ink Press structure

The source sequence is about 36 seconds at 30 fps. Use the following as a pacing template for an original promo. Swap in safe product screenshots, product typography, a brand accent and a short CTA.

| Timeline | Shot |
| --- | --- |
| 0 to 7.3s | Ink stroke and wordmark into a single spotlight reveal |
| 7.3 to 9.2s | Quiet benefit title |
| 9.2 to 15.5s | Accelerating deal into a human-paced search and selection |
| 15.5 to 18.8s | Detail macro with embedded rows |
| 18.8 to 20.7s | Feature title with optional rolling figure |
| 20.7 to 24.2s | Stacked list and counter |
| 24.2 to 25.8s | Bridge into the document feature |
| 25.8 to 29.5s | Document writes itself with full window visible at the end |
| 29.5 to 31.3s | Quiet bridge into the finale |
| 31.3 to 36.2s | Product pieces assemble around the final wordmark |

If two compositions need to meet precisely, storyboard the handoff as its own event. Use a match cut for shared geometry, an occlusion for a page switch, or a short accent across the cut only when it serves the rhythm. Keep any full-frame hit within the ceiling in [beat and sound](beat-and-sound.md).
