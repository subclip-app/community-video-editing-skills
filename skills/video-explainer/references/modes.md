# The three modes

All three modes are HyperFrames layers in Subclip. The source skill ships three engines (`ExplainerStage`, `StoryBrush` with `IllustratedStage`, and `Studio3D`). Subclip layers are standalone documents that load only pinned CDN scripts, so rebuild the parts you need inline, following the patterns below. Read `subclip-hyperframes-layer` and its authoring contract first.

## Shared rules

- **One world, several layers.** Split the film into 2 to 4 layers at scene boundaries. Put the same world in each one (camera rig, positions, palette, HUD) and start each layer in the exact state the previous one ended. Cuts then look like one continuous take.
- **Spend work where it shows.** Pick one setting and move the camera through it instead of building a new world per scene.
- **Deterministic on seek.** Register one paused GSAP timeline under the composition id. Compute moving things from the timeline time in one `tick(t)` function called from `onUpdate`. No `Math.random()` (use a seeded generator), no wall clock, no `requestAnimationFrame` clock.
- **Hero fills 60 to 85 percent** of the frame and changes every 2 to 3 seconds.
- **Labels** 1 to 4 words, 28 px or more, above the caption band.

## Mode 1: Motion (default)

Full-frame 2D kinetic graphics: live SVG routes and charts, CSS 3D cards and devices, documentary press clippings, stamps, highlight sweeps, counters.

### Camera rig

Place world art around an origin at the frame center, 46 percent down. Move the camera by moving the world:

```html
<div id="cam" style="position:absolute;left:960px;top:470px;width:0;height:0">
  <div id="world" style="position:absolute;left:0;top:0"> ... art placed at world coordinates ... </div>
</div>
```

```js
function camSet(fx, fy, s){ gsap.set('#world',{x:-fx*s, y:-fy*s, scale:s, transformOrigin:'0 0'}); }
function camTo(tl, t, fx, fy, s, dur, ease){ tl.to('#world',{x:-fx*s, y:-fy*s, scale:s, duration:dur, ease:ease||'power3.inOut'}, t); }
```

`camTo` is the source's `camTo`; a fast `power4.inOut` move of 0.4 s is its `whipTo`; a slow linear `camTo` across a whole scene is its drift.

### Choreography recipes

| Source call | Inline version |
|---|---|
| `drawStroke(sel, t, dur)` | Read `getTotalLength()` once, set `strokeDasharray` to it, then tween or compute `strokeDashoffset` from length to 0. |
| Packet along a route | Compute the point on a quadratic bezier from `tl.time()` and `gsap.set` the packet x and y. Draw the stroke to the same progress. |
| `popIn(sel, t)` | `fromTo` autoAlpha 0 and scale 0.6 to 1 with `back.out(2)`, `immediateRender:false`. |
| `stampSlam(sel, t)` | `fromTo` scale 2.2 to 1 with `power4.in` over 0.25 s, slight rotation. |
| `kineticPunch(sel, t)` | Big word scales from 0.5 to 1 with `back.out(2.2)` on its spoken word. |
| `highlightSweep(sel, t)` | A colored block behind the word with `scaleX` 0 to 1, `transformOrigin:'0 50%'`. |
| `counter(sel, from, to, t, dur)` | Compute the number in `tick(t)` and write `textContent`. |
| `kenBurns(sel, t0, t1)` | Slow scale 1 to 1.08 and a small x drift on an imported photo. |
| `shake(t, dur, amp)` | A short `yoyo` x and y tween on a wrapper, never on a text element with a filter. |
| Press clipping | A paper card (masthead, headline with a highlight sweep, imported photo) that pops in and gets a stamp. |
| CSS 3D card or device | `transformPerspective` 900 and `rotationY` from -35 to 0 as it lands. |

### Starter (from the reference film)

The reference film's three layers share: a dark radial background, a faint 100 px grid, four route nodes (terminal, shop's bank, card network, your bank) joined by quadratic curves, a packet that rides the curves, and a "payment clock" HUD top right that counts story time. Layer A holds the hook and setup, layer B the network hop and the three checks panel, layer C the return trip, the Approved screen and the "settles later" night beat with the end card.

## Mode 2: Illustrated

Hand-drawn picture-book animation: gouache fills, pastel hatching, paper grain, a 10 fps line boil, and characters whose mouths follow the words.

- Draw on one full-frame `<canvas>` with `data-layout-allow-overflow`. Bake each prop and character once at startup into offscreen canvases. For line boil, bake 3 variants with different seeds and pick one by `Math.floor(t * 10) % 3`.
- Paper grain: fill the base color (#FCFBF7 warm cotton or #0D162B night indigo), then scatter seeded specks at low alpha.
- Gouache fill: jitter the polygon points with a seeded generator, fill, then add a few darker pools along one edge.
- Pastel: clip to the shape and draw many short angled strokes at low alpha.
- Crayon line: draw the outline 2 or 3 times with small seeded offsets and widths.
- Word-synced mouth: from the caption words (`read_project_section`, lane `captions`), mark which times are inside a word. Open the mouth while speaking and close it between words; blink every few seconds on a seeded schedule.
- Labels: draw a rounded card with the text on the canvas, clamped above the caption band.
- Move a camera over one big painted setting (translate and scale the context) rather than painting a new world per scene.

## Mode 3: 3D

Single-take Three.js flythroughs with studio lighting, reflections, bloom and camera-facing labels.

- Use the pinned Three.js module and the deterministic rules in `subclip-hyperframes-layer` (renderer with alpha, pixel ratio 1, render from the seek time, dispose on `pagehide`). An opaque studio background is fine because the scene is explicitly full frame.
- Camera path: a list of keys `{ t, pos, target, fov }`; interpolate with an ease between keys and call `camera.lookAt(target)` every render.
- Materials that read well: brushed metal (`MeshStandardMaterial`, metalness 0.9, roughness 0.35), polished mirror metal (metalness 1, roughness 0.05), sapphire glass (`MeshPhysicalMaterial` with transmission), emissive glow for data.
- Labels: a plane with a canvas texture that faces the camera every frame and stays above the caption band.
- Prefer procedural geometry. When a scene truly needs sculpted or fractured meshes, see the `blender-to-subclip` community skill for Blender work and import the result.
- For device shots (a phone or laptop showing real media), Subclip's native 3D layers are often better: `list_3d_models`, `add_3d_layer`, `set_3d_screen_content`.

## Built-in single-beat visuals

The source has quick one-beat cards. Build them as small HyperFrames layers or native items, and use them sparingly:

| Source visual | Subclip |
|---|---|
| `title:` | `add_text_overlay`, or a title template from `list_motion_graphics_templates` |
| `card:` / `flow:` / `compare:` | a small HyperFrames layer with rows that reveal on their words |
| `number:` | a counter in a layer, 88 to 160 px |
| `code:` | a code card layer, or the registry's code typing block (`list_hyperframes_registry`) |
| `image:` / `clip:` | `import_public_asset_to_timeline` or `import_external_media`, with the source credit as a small label |
| `quote:` | a quote card layer with author and source |
| `page:` / `receipt:` | `inspect_public_website` page captures, imported and scrolled with keyframes |
