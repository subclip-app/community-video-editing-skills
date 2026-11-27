# Building a changelog video in Subclip

How the upstream build spec (`build-spec.md`, square 1080, dark HeyGen house brand) maps onto Subclip: 16:9, white ground, the creator's brand, one HyperFrames layer per scene.

## Brand tokens: upstream to Subclip

| Upstream token | Subclip default (replace with the creator's brand) |
| --- | --- |
| Ground: dark `#0a0c0b` plus the animated bg-pattern video | White `#ffffff` with a faint dot grid (`rgba(brand, .10)`, 36 px) |
| Ink `#f5f6f4` | Brand ink, for example `#10183a` |
| Dim text `rgba(245,246,244,.66)` | `#5b6478` or darker (keeps contrast on white) |
| Rationed green `#5ef17c`, one moment per scene | The brand accent, one moment per scene (Subclip cyan `#26c9d5` in the reference) |
| Display face ABC Solar Display 700 | The brand's display face; Geist 700 in the reference |
| Body TT Norms Pro | The brand's text face; Geist 400 and 500 |
| Mono TT Norms Mono for code and UI labels | A mono face; Geist Mono |
| Glass card: dark fill, green-tinted 1 px border, radius 22, heavy shadow | White card, 2 px `#e3e7ef` border, radius 22, `0 24px 60px rgba(brand, .10)`. No backdrop-filter |
| Chips: mono 18 to 22 px, radius 12 | Same, brand tint fill |
| Safe margins x and y in [76, 1004] (square) | x in [96, 1824], scene content y in [120, 910]; bottom 10 percent belongs to captions |
| Caption rail inside the composition at top 990 | Native Subclip captions, dark text on white |
| House music `bgm.mp3` at 0.14 | A CC0 or CC BY bed from `search_public_audio`, mixed well under the voice |

Load web fonts from a pinned jsDelivr fontsource URL (for example `@fontsource/geist-sans@5.1.0`) and check them in a frame; never assume a font is installed.

## Scene anatomy (16:9)

- Chrome, the same in every layer and never animated: kicker chip top left (`<PRODUCT> CHANGELOG - <VERSION or RANGE>`, mono 20 px) and progress dots top right (one per theme: current = brand color, done = 45 percent, rest = 18 percent).
- Title, at most 2.8 s: mono date kicker, display headline about 118 px with the version in the brand color, an accent rule that sweeps in, one quiet subline.
- Theme scene, about 9 to 10 s: section chip `0N - THEME NAME` at top 128, headline about 58 px at top 176, then the mock filling x 150 to 1770 and y 270 to 910.
- Checklist scene, 5 to 6 s: one card with at most 6 mono rows; a tick lands on each item's spoken word.
- Outro, at most 3.6 s: kicker FULL CHANGELOG, "See what shipped." about 100 px, accent rule, mono URL chip, product and version. Everything fades in the last 0.5 s.

## Layer scaffold

Each scene is one `add_runtime_layer` call with `kind: "hyperframes"`, `x: 50`, `y: 50`, `width: 100`, `height: 100`, its own `startTime` and `duration`. Validate with `validate_runtime_layer_source` first. Skeleton:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
/* @font-face rules from a pinned fontsource URL */
html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.root { position: relative; width: 1920px; height: 1080px; overflow: clip; background: #ffffff; }
.swrap { position: absolute; inset: 0; opacity: 0; }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="s1" class="root" data-composition-id="s1" data-start="0" data-duration="9.4" data-width="1920" data-height="1080">
  <!-- chrome: kicker chip and progress dots (static) -->
  <div class="swrap" id="w">
    <!-- section chip, headline, mock -->
  </div>
</div>
<script>
(function(){
  const D = 9.4;
  const tl = gsap.timeline({ paused: true });
  // seam in: cut-the-curve from the right
  tl.fromTo('#w', { autoAlpha: 0, x: 70 }, { autoAlpha: 1, x: 0, duration: 0.42, ease: 'power3.out', immediateRender: false }, 0);
  // internal beats, each on a word time from the scene's own voice clip
  // seam out: leave to the left
  tl.to('#w', { autoAlpha: 0, x: -70, duration: 0.34, ease: 'power2.in' }, D - 0.34);
  tl.set({}, {}, D);
  window.__timelines = window.__timelines || {};
  window.__timelines['s1'] = tl;
})();
</script>
</body>
</html>
```

Rules carried over from the upstream spec: initial states with `gsap.set` at build time; animation with sequential `tl.to` and `tl.fromTo` (`immediateRender: false` on entries); no `repeat: -1`; counters as an object tween with an `onUpdate` that writes cached DOM nodes; never tween the root element. Revise a scene with `read_layer_source` and `edit_layer_source`, or `update_runtime_layer` for a full replacement.

## Beat timing from the voice

1. One voice clip per scene, placed at scene start plus 0.4 s.
2. `transcribe_project` (`mode: "local"`, exact `audioItemId`) for each clip, one job at a time; wait with `get_transcription_status`.
3. Read the words with `read_project_section` (`section: "captions"`), subtract the scene start, and put those local times into the layer's beats.
4. Fix display spellings with `update_caption_words`.

## Reference: Subclip AI Editor 1.0.50 (about 41 s)

| Scene | Time | Route | Beats on words |
| --- | --- | --- | --- |
| Title | 0 to 2.8 | title | accent rule on "new" |
| 01 A new Home | 2.8 to 12.2 | ui-recreate: Home window | sidebar slides in and is dragged wider on "sidebar"; page scrolls and the assistant box docks on "scrolls"; recent cards play with accent progress bars on "play their previews" |
| 02 Skills in one click | 12.2 to 22.0 | ui-recreate: Skills window, oversized cursor | cursor lands and the card lifts on "Hover"; press squash on "press Install"; accent Installed on "ready"; one Update available badge on "Update" |
| 03 Exports | 22.0 to 31.8 | ui-analog: render queue | first render and "Streams to disk" card on "stream"; two more renders start together on "three heavy renders"; accent 720p row and card on "seven twenty p" |
| 04 Fixes | 31.8 to 37.6 | checklist | ticks on "frame previews", "screenshots", "error reports" |
| Outro | 37.6 to 41.2 | outro | URL chip on "subclip dot app" |

Cost: 0 credits (local voice, code layers, CC0 music).

## Tool map

| Upstream step | Subclip tool |
| --- | --- |
| `cp` master skeleton, fonts, bg-pattern, bgm | The scaffold above, pinned web fonts, white ground via `set_canvas_background`, music from `search_public_audio` |
| `heygen-tts.mjs` with the Annie voice | `generate_local_speech` (free) or `get_voice_samples`, `set_approved_voice`, `generate_speech` (quoted) |
| `align-captions.mjs`, whisper fallback | `transcribe_project` local, `update_caption_words` |
| Caption rail IIFE with `LINES` | Native captions: `apply_dynamic_caption_preset`, `update_caption_style` |
| `seam-stamp.mjs` and `ledger.json` | Entry and exit tweens on `.swrap` inside each layer |
| `hyperframes check`, `seam-gate.mjs verify` | `validate_runtime_layer_source`, `validate_project`, `get_timeline_contact_sheet`, `view_current_frame` |
| `hyperframes render`, frame checks of the MP4 | `export_video` when asked, then look at frames of the file |
| S3 upload and CloudFront invalidation | Not part of the Subclip workflow; share with `share_video_file` or publish only on request |
