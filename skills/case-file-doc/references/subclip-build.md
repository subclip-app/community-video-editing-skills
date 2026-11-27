# Building it in Subclip

This replaces the original skill's scaffold, scene copier, media baker and mix checker with editor tools. Never
write project files on disk; every change goes through the editor tools, one edit at a time, with the same
`projectId` on every call.

## Order of work

1. `create_project` (landscape) or `get_project_outline` on the creator's project. Record the goal with
   `update_project_director_brief`.
2. Narration lines with `generate_local_speech` (or `generate_speech`), each placed with
   `import_generated_audio_to_timeline` at its planned start.
3. `transcribe_project` with `purpose: "reference"`, `allTimelineClips: true`, `mode: "local"`; poll
   `get_transcription_status`. The transcript (word, start, end) is saved in the project's reference context.
4. One `add_runtime_layer` per scene: `kind: "hyperframes"`, `x: 50`, `y: 50`, `width: 100`, `height: 100`,
   `intrinsicWidth: 1920`, `intrinsicHeight: 1080`, `fitMode: "cover"`, with `startTime` and `duration` from the
   shot list. Run `validate_runtime_layer_source` first when unsure.
5. After each scene: `view_frame` at the entrance, at each device's peak and near the exit. Fix with
   `read_layer_source` (for the source hash) and `edit_layer_source`.
6. Plain beats (a line of type on the ground, the title): `add_text_overlay`, then `update_text_item` for font,
   colour, shadow off and outline off. `set_canvas_background` sets the ground.
7. Sound on native lanes (sound.md).
8. `set_project_duration` to the last frame, review (review.md), export on request.

## Fonts inside layers

Layers cannot read local font files, so load the five families from these pinned URLs (each returns a woff2
for Latin text):

```css
@font-face { font-family: "Anton"; src: url("https://cdn.jsdelivr.net/npm/@fontsource/anton@5.1.0/files/anton-latin-400-normal.woff2") format("woff2"); }
@font-face { font-family: "Old Standard TT"; font-weight: 400; src: url("https://cdn.jsdelivr.net/npm/@fontsource/old-standard-tt@5.1.0/files/old-standard-tt-latin-400-normal.woff2") format("woff2"); }
@font-face { font-family: "Old Standard TT"; font-weight: 700; src: url("https://cdn.jsdelivr.net/npm/@fontsource/old-standard-tt@5.1.0/files/old-standard-tt-latin-700-normal.woff2") format("woff2"); }
@font-face { font-family: "Special Elite"; src: url("https://cdn.jsdelivr.net/npm/@fontsource/special-elite@5.1.0/files/special-elite-latin-400-normal.woff2") format("woff2"); }
@font-face { font-family: "Permanent Marker"; src: url("https://cdn.jsdelivr.net/npm/@fontsource/permanent-marker@5.1.0/files/permanent-marker-latin-400-normal.woff2") format("woff2"); }
@font-face { font-family: "Courier Prime"; src: url("https://cdn.jsdelivr.net/npm/@fontsource/courier-prime@5.1.0/files/courier-prime-latin-400-normal.woff2") format("woff2"); }
```

Native text items use the editor's own font list; check each font in a frame, since a missing family falls back
to a default face.

## Scene skeleton

Every scene shares this frame: an opaque root with `overflow: clip`, a camera div, seeded grain, a black cover
for dips, and the letterbox bars on top.

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<style>
  /* @font-face rules from above */
  html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
  #s1 { position: relative; width: 1920px; height: 1080px; overflow: clip; background: #2c2e31; }
  #cam { position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; transform-origin: 50% 50%; }
  .bars { position: absolute; left: 0; width: 1920px; height: 138px; background: #000; z-index: 90; }
  #grain { position: absolute; left: -200px; top: -200px; z-index: 80; opacity: .2; mix-blend-mode: overlay; pointer-events: none; }
  #black { position: absolute; inset: 0; background: #000; z-index: 85; opacity: 0; }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head><body>
<div id="s1" data-composition-id="s1" data-start="0" data-duration="12.5" data-width="1920" data-height="1080">
  <div id="cam"><!-- the world: ground, cards, type --></div>
  <canvas id="grain" width="2320" height="1480"></canvas>
  <div id="black"></div>
  <div class="bars" style="top:0"></div><div class="bars" style="bottom:0"></div>
</div>
<script>
(function () {
  let s = 1234567; const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  const c = document.getElementById('grain'); const g = c.getContext('2d'); const img = g.createImageData(c.width, c.height);
  for (let i = 0; i < img.data.length; i += 4) { const v = rnd() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; }
  g.putImageData(img, 0, 0);
  const D = 12.5;
  const tl = gsap.timeline({ paused: true });
  for (let t = 0; t < D; t += 2 / 30) tl.set('#grain', { x: -Math.floor(rnd() * 200), y: -Math.floor(rnd() * 200) }, t);
  tl.fromTo('#cam', { scale: 1.12 }, { scale: 1.0, duration: D - 0.9, ease: 'power1.out' }, 0);
  // "<word>" <time>: <what happens>
  window.__timelines = window.__timelines || {};
  window.__timelines['s1'] = tl;
})();
</script>
</body></html>
```

Textures come from code: concrete, paper fibre and cork are SVG rects with `feTurbulence` plus a
`feColorMatrix` tint, kept on their own elements and never on text. The darker document bands are plain
gradients.

## Rules that keep exports clean

- No CSS `filter` or `backdrop-filter` on text, on a card holding text, or on any ancestor of text.
- Keep every element inside the 1920 by 1080 frame and `overflow: clip` on the root; an element hanging off the
  frame can print a black band in exports.
- Never tween the same property of one element from two overlapping tweens; start the second when the first ends.
- Clip a whole tape box when typing it on, so an empty black box does not show before its cue.
- Do not send editor changes in parallel, even to one project. Re-read the project after each change.
