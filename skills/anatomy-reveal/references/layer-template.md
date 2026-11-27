# Layer template

One reveal film is one HyperFrames layer. The document has three inline scripts:

1. the kit: the full text of `assets/reveal-kit.js` (read it with `read_subclip_skill`, `skillName: "anatomy-reveal"`, `resourcePath: "assets/reveal-kit.js"`, and follow `nextOffset` until the file is complete);
2. the scene block: the object, built part by part;
3. the film block: keys, labels and the clock.

`references/example-camera.js` is a complete scene block and film block (the mirrorless camera from the reference video). Start from it and replace the object.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<style>
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}
#scene{position:relative;width:1920px;height:1080px;overflow:clip;background:#ffffff}
#stage{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:hidden}
.plate{position:absolute;left:56px;top:48px;width:1806px;height:982px;border:2px solid rgba(21,53,146,.16)}
.corner{position:absolute;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:24px;line-height:1;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;color:#153592;background:#ffffff;padding:6px 10px}
#fig{left:28px;top:26px;text-transform:none;letter-spacing:.04em;font-weight:700}
#title{right:28px;top:26px;color:rgba(21,53,146,.7)}
#hint{left:28px;bottom:26px;font-weight:700}
#readout{right:28px;bottom:26px;text-transform:none;letter-spacing:.04em;color:rgba(21,53,146,.75)}
</style>
</head>
<body>
<div id="scene" data-composition-id="reveal" data-start="0" data-duration="30" data-width="1920" data-height="1080">
<svg id="stage" width="1920" height="1080" viewBox="0 0 1920 1080"></svg>
<div class="plate"><span class="corner" id="fig">Fig 1</span><span class="corner" id="title">Anatomy  Object name</span><span class="corner" id="hint"></span><span class="corner" id="readout"></span></div>
</div>
<script>
/* paste assets/reveal-kit.js here */
</script>
<script>
(function () {
  const svg = document.getElementById("stage");
  const K = RevealKit.create(svg, { width: 1920, height: 1080, radius: 105, origin: [0, 22, 44] });
  // assemblies, feature groups, parts, decals, anchors (see references/building.md)
  window.__K = K;
})();
</script>
<script>
(function () {
  const K = window.__K;
  const DUR = 30;
  const KEYS = [ /* see references/shots.md */ ];
  const LABELS = [ /* corner text, highlight target and callouts per beat */ ];
  const DEF = { yaw: 0, pitch: 0, roll: 0, zoom: 1, panX: 0, panY: 0, apart: 0, hl: 0 /* plus one entry per feature channel */ };
  const at = RevealKit.timeline(KEYS, LABELS, DEF);
  const counts = { parts: K.parts.length, assemblies: Object.keys(K.asms).length };
  const fill = (s) => String(s || "").replace(/\{(\w+)\}/g, (_, k) => counts[k]);
  const hint = document.getElementById("hint"); const readout = document.getElementById("readout");
  function renderAt(t) {
    const s = at(Math.max(0, Math.min(DUR, t)));
    K.render(s);
    const h = fill(s.label.hint); const r = fill(s.label.readout);
    if (hint.textContent !== h) hint.textContent = h;
    if (readout.textContent !== r) readout.textContent = r;
  }
  window.addEventListener("hf-seek", (e) => renderAt(e.detail.time));
  const clock = { t: 0 };
  const tl = gsap.timeline({ paused: true });
  tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate: () => renderAt(clock.t) });
  window.__timelines = window.__timelines || {};
  window.__timelines["reveal"] = tl;
  renderAt(0);
})();
</script>
</body>
</html>
```

Keep `data-duration`, `DUR` and the Subclip item duration equal.

## Layer rules learned in testing

- The validator rejects markup strings assigned to the DOM. The kit builds every SVG node with `createElementNS`, and decals are data lists (`["rect", { x: 1, y: 1, width: 20, height: 16 }]`), never markup strings.
- The validator also rejects the words `parent`, `process`, `require`, `opener` and `electron`, and `top.` with a dot, anywhere in a script, even inside a part name. Name a chip "isp chip", not "processor"; name a variable `upper`, not `top`.
- Everything is drawn inside the 1920 by 1080 root with `overflow: clip`. Keep callout labels and the explode inside the frame; check the widest explode frame.
- The film is a pure function of time. No timers, `Date.now()` or `Math.random()`. Any frame renders on its own, so seeking backward gives the same picture.
- One render takes about 5 ms for 50 to 60 parts. Up to about 150 parts stays well inside a frame.

## Kit calls

All sizes are millimetres in the object frame: x to the object's right, y to its front (the face that looks at the viewer at yaw 0), z up.

| Call | Makes |
| --- | --- |
| `RevealKit.create(svg, { width, height, radius, origin, stroke, materials })` | The kit for one object. `radius` is about 0.8 times the largest dimension; `origin` is the visual centre the object turns about. |
| `K.box(name, [x0,y0,z0], [x1,y1,z1], mat, opts)` | A box part. |
| `K.prism(name, axis, outline, a0, a1, mat, opts)` | A convex outline extruded along `"x"`, `"y"` or `"z"` from `a0` to `a1`. Concave outlines are wrapped to their hull, so split concave shapes into parts. `K.roundRect(x0, y0, x1, y1, r)` gives a rounded outline. |
| `K.cyl(name, axis, base, r, len, mat, { sides, r1 })` | A cylinder from its base centre along an axis; `r1` makes a cone frustum. Negative `len` grows the other way. |
| `K.assembly(name, dir, travel, delay, host)` | An explode group. `apart` from 0 to 1 moves it `travel` mm along `dir`, starting after `delay` (0 to 1). A `host` assembly carries it along. |
| `K.group(name, { kind: "turn", axis, pivot, channel, scale })` | A feature that turns about an axis through a pivot by the channel value in degrees. `kind: "slide"` with `dir` moves it in mm. |
| `K.decal(partName, o, u, v, nodes)` | Markings on a face: `o` is the drawing origin, `u` its right and `v` its down, seen from outside, one drawing unit per mm. Hidden when the face looks away. |
| `K.anchor(name, point, assembly)` | A point the camera can centre on (`focus`). Give it the assembly it rides on. |
| `K.render(state)` | Draws one frame. The film block calls it through `RevealKit.timeline`. |

Part options: `{ asm, group, tags }`. Highlights match a part's name, its assembly or one of its tags.

Materials: `aluminium`, `graphite`, `rubber`, `porcelain`, `glass`, `lens`, `pcb`, `copper`, `brass`, `signal`, `accent`, `navy`, `sensor`, `cell`. Add one with `materials: { name: [dark, mid, light, lightest, ink] }`, ordered dark to light.
