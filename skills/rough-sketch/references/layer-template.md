# Layer template

One scene is one HyperFrames document. Replace the two marked script blocks with the full text of `assets/rough.min.js` and `references/sketch-kit.js` (read both with `read_subclip_skill`). Keep the MIT notice line at the top of the Rough.js block.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<style>
@font-face{font-family:Caveat;font-weight:700;font-display:block;src:url("https://fonts.gstatic.com/s/caveat/v23/WnznHAc5bAfYB2QRah7pcpNvOx-pjRV6eIWpYT5Kmgq3sw.woff2") format("woff2")}
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}
#scene{position:relative;width:1920px;height:1080px;overflow:hidden;background:#ffffff}
#scene svg{position:absolute;left:0;top:0}
.hand{position:absolute;font-family:Caveat,cursive;font-weight:700;color:#153592;white-space:nowrap;line-height:1}
</style>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="9" data-width="1920" data-height="1080">
  <svg id="board" width="1920" height="1080" viewBox="0 0 1920 1080"></svg>
  <div class="hand" id="title" style="left:120px;top:70px;font-size:92px">How a web request travels</div>
  <div class="hand" id="lb" style="left:250px;top:660px;font-size:64px">Browser</div>
</div>
<script>
/* paste assets/rough.min.js here, first line included */
</script>
<script>
/* paste references/sketch-kit.js here */
</script>
<script>
(function () {
  const tl = gsap.timeline({ paused: true });
  const K = RoughSketchKit.makeKit(document.getElementById('board'), tl, 'marker');
  const $ = (s) => document.querySelector(s);

  // Word times from the transcript, in seconds from the layer start.
  const T = { title: 0.2, browser: 1.6, request: 2.4 };

  K.write($('#title'), T.title, 1.0);
  K.draw('rectangle', [160, 300, 440, 340], { seed: 11 }, T.browser, 0.9);
  K.write($('#lb'), T.browser + 0.5, 0.6);
  K.arrow(620, 360, 1330, 330, { seed: 31, bend: -60 }, T.request, 0.9);

  tl.set({}, {}, 9); // hold to the end of the layer
  window.__timelines['scene'] = tl;
})();
</script>
</body>
</html>
```

For a transparent overlay over footage, remove `background:#ffffff` from `#scene` and size the layer to the marks.

## Kit calls

All times are seconds on the layer's own clock. Every call needs a `seed` above 0 in its options.

| Call | Draws |
| --- | --- |
| `K.draw(shape, args, opts, at, dur)` | Any Rough.js generator shape: `line [x1,y1,x2,y2]`, `rectangle [x,y,w,h]`, `ellipse [cx,cy,w,h]`, `circle [cx,cy,diameter]`, `polygon [[[x,y],...]]`, `linearPath [[[x,y],...]]`, `arc [cx,cy,w,h,start,stop,closed]`, `curve [[[x,y],...]]`, `path ['M ... Z']`. Outline first, then the fill. |
| `K.arrow(x1, y1, x2, y2, opts, at, dur)` | A shaft (straight, or curved with `opts.bend` in px) and a two-stroke head (`opts.head`, default 26). |
| `K.circle(cx, cy, rx, ry, opts, at, dur)` | A loose callout loop that overshoots its start. |
| `K.write(element, at, dur)` | Reveals an HTML label left to right with `clip-path`. |

Preset names for `makeKit`: `pencil`, `marker`, `chalk`, `blueprint`. Options in each call override the preset.

The kit measures every stroke once with `getTotalLength()` when the layer builds and then only tweens `stroke-dashoffset`, so a frame depends only on its time.
