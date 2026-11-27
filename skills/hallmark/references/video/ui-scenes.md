# Product UI scenes in Subclip

How to put a product on screen without the slop tells. Read the HyperFrames skill through `read_subclip_skill` before writing a layer; its contract wins over this file.

## First choice: the real product

- Public site: `inspect_public_website` for screenshots, or the Subclip recorder (`open_recorder`, `start_recording`, `stop_recording`, then `import_recording_to_project`) for a flow.
- App on screen: `take_screenshot` or `capture_window`, then `import_screenshot_to_project`.
- Creator files: `import_attachment_to_timeline`, `import_attachment_to_project_media` or `import_external_media`.

Put the product in the state that tells the story (sample data, a real project open, the one screen that does the job). Look at every capture before it ships: no names, emails, tokens or file paths of real people, no error states unless they are the point. Frame it with the system's radius and a 1 px inset outline, never inside a drawn browser bar or device frame. Zoom on the action with media keyframes or `add_cursor_zooms`.

## When nothing can be captured: build it as a HyperFrames layer

The product built at full fidelity, at least eight real elements, the prompt's own nouns, the system's surfaces and faces. Not grey bars, not a dashboard of invented figures.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
@font-face{font-family:"Bricolage Grotesque";font-weight:700;src:url("https://cdn.jsdelivr.net/npm/@fontsource/bricolage-grotesque@5.1.0/files/bricolage-grotesque-latin-700-normal.woff2") format("woff2")}
@font-face{font-family:"Instrument Sans";font-weight:400;src:url("https://cdn.jsdelivr.net/npm/@fontsource/instrument-sans@5.1.0/files/instrument-sans-latin-400-normal.woff2") format("woff2")}
:root{--paper:#f4f2ee;--ink:#1c1e22;--muted:#5d6068;--rule:#d8d4cc;--accent:#1e6b4f;--accent-ink:#f7f6f2;--display:"Bricolage Grotesque",sans-serif;--body:"Instrument Sans",sans-serif}
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:var(--paper);font-family:var(--body);color:var(--ink)}
#scene{position:relative;width:1920px;height:1080px;overflow:hidden}
/* one panel, a real table, one accent for state */
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="rota" data-start="0" data-duration="6" data-width="1920" data-height="1080">
  <!-- headline left, the product right, sample data caption under it -->
</div>
<script>
const tl = gsap.timeline({paused:true});
// one settle: fade with an 8 px rise, ease-out, staggered under 0.5 s in all
window.__timelines = window.__timelines || {};
window.__timelines['rota'] = tl;
</script>
</body>
</html>
```

Notes from building the reference video:

- External stylesheets and CSS `@import` are refused in layers. Load fonts with `@font-face` pointing at a public font file.
- Keep the timeline paused and registered on `window.__timelines`, so every frame is deterministic when Subclip seeks.
- One composed shot per layer is easiest to revise; two or three shots in one layer are fine when they share a system.
- Use `tl.set` for state flips (a status chip changing), not a looping animation.
- Validate with `validate_runtime_layer_source`, place with `add_runtime_layer` (`width` and `height` 100 for a full-frame scene), then look at the frames. Small fixes go through `read_layer_source` and `edit_layer_source` with the returned hash.

## Showing before and after

A film that teaches the difference can show the generated version first with its tells ringed and named, then the same promo rebuilt. Label the tells with gate names from [`frame-review.md`](frame-review.md), keep the labels outside the product, and make the rebuilt cut a full sequence, not one fixed screen, so the system is seen to hold across shots.
