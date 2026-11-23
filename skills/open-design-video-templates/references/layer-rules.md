# Layer rules for every recipe

Read this once before building a recipe. Official Subclip skills and current tool schemas override it.

## Turn the source motion into a seekable timeline

The original templates mix CSS keyframes, infinite loops and GSAP. A Subclip layer is rendered by seeking, so every state must come from timeline time.

- Convert each `@keyframes` with `animation-delay` into one tween on a single paused GSAP timeline at the same start time. The cards list start times in seconds (written as `t=0.6`) and durations.
- Common eases: `cubic-bezier(0.16,1,0.3,1)` becomes `expo.out`; a bounce with overshoot becomes `back.out(1.7)`; a soft elastic becomes `elastic.out(1, 0.3)`; wipes in become `power2.in`.
- Replace infinite loops (breathing, floating, blob drift) with finite sine tweens that return to their start by the end of the layer, or with `yoyo: true, repeat: n` where n is computed from the layer length. For a seamless loop, make every period divide the layer length.
- Stroke drawing: set `stroke-dasharray` and `stroke-dashoffset` from `getTotalLength()` or use `pathLength="1"`, then tween the offset to 0.
- Letter by letter reveals: split text into spans in the source markup (do not rely on a script splitting at load), then stagger one tween.
- Counting numbers: tween a plain object `{v: 0}` to the target with `onUpdate` writing the rounded text. Because seeking replays `onUpdate`, this stays deterministic. Do not use `setInterval` or `requestAnimationFrame`.
- Register exactly one timeline under the same key as the root `data-composition-id`. Do not call `play()`. Do not use `Math.random()` or `Date.now()`; use fixed seeds or fixed arrays.

## Export-safe styling

- Never put CSS `filter`, `backdrop-filter` or `mix-blend-mode` on text, a text-bearing card or any parent of text, even `blur(0px)`. Replace frosted glass with a semi-opaque solid card. Replace `drop-shadow` on titles with a duplicate offset text element behind it. Replace the difference-blend quote with solid text chosen for contrast.
- Chromatic glitch: stack two or three copies of the text in cyan and magenta with small x offsets and animate offsets on the timeline. Do not use an SVG color filter.
- Grain: use a small tiled noise image imported to the project library, or a soft layered gradient. A drawn noise canvas is not seek-safe.
- Light leaks and blobs: use plain radial gradients or blurred shapes on elements that contain no text, and keep them in a layer below the text layer when blur is needed.
- Project media loads through `subclip-media://asset/<id>` for `img`, `video`, `audio` and SVG `image`. Import logos and screenshots first with `import_attachment_to_project_media` or `import_external_media`, reread `list_editor_assets`, then bind the exact URL.
- Keep footage and sound out of the layer; use native media and audio items.

## Fonts

Each card names the intended families. Verify them in the runtime before use. If a face is missing, use the host font workflow to register a licensed one, or pick a verified substitute and refit text boxes. Open fonts that match the recipes: Shrikhand, Libre Baskerville, Space Grotesk, Archivo Black, Inter, Syne, Caveat, Space Mono, Manrope, Source Serif, EB Garamond, IBM Plex, Nunito, Outfit, JetBrains Mono. A heavy grotesque and a serif italic cover most substitutions.

## Overlay recipes

`frame-swiss-grid`, `frame-vignelli`, `frame-warm-grain` and `frame-play-mode` were made as graphics over a talking-head video. Build them as a transparent layer above the creator's footage, time each callout to a real moment found with `get_media_context` or a transcript from `transcribe_project`, and keep callouts away from faces using `get_timeline_contact_sheet`. If there is no footage, give the layer a solid background of the recipe's base color.

## Making it your own

Keep each recipe's signature: the palette discipline, the type pairing, the single accent, the move that defines it. Change copy, numbers, logo and accent color to the creator's brand. Keep the sample lengths unless the creator's content needs more time per beat; stretch holds, not entrances.
