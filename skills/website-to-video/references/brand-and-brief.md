# Steps 0 to 2: capture, brand sheet, strategy

## Step 0: Capture and understand the brand

Subclip captures a public page with `inspect_public_website` (url, `screenshotCount` 1 to 3). It renders the page in an isolated browser and returns verified visible copy, computed colors, font families, typography samples, logo candidates, image candidates, and real PNG captures of the page and logo stored inside the project. Call it before you design anything. Do not search for another website scanner first.

Then:

1. Import what you will use: `import_generated_media_to_timeline` with the returned `screenshotPaths` and `logoAssetPaths` (use `addToTimeline: false` through `import_external_media` when you only need the asset in the library). Read back real IDs and URLs with `list_editor_assets`.
2. Look at the captures. Never decide from file names. Use `view_frame` or the contact sheet of the imported images to see them.
3. Read the visible copy for what the product does, who it is for, and the voice it speaks in. The assets are a brand toolkit for later, not the building blocks of the video.

Print one strategy-first summary: what the product does, who it is for, the brand voice, then the color, font and asset inventory. State what the capture did not return (see Limits below).

Limits compared with the original: Subclip returns up to 3 page captures, logo and image candidates, colors and fonts. It does not export every SVG, Lottie file, shader or embedded video on the page, and it does not give per-element computed CSS tables. When a signature visual is missing, say so, ask the creator for it, or rebuild it only with their approval.

## Step 1: Write the brand cheat sheet

Save a short brand sheet in the director brief (`update_project_director_brief`). It is brand truth for the build, not a layout spec. Include:

1. **Visual theme** (one paragraph): the mood, density and character of the brand.
2. **Colors** with roles and exact hex values from the capture: primary, accent, background, text on light, text on dark, and any gradient. Name them descriptively ("Stripe Purple", not "Accent 1").
3. **Fonts**: the exact family names from the capture, the weight range, and the fallback. Flag any family the capture did not confirm and choose a verified substitute. Check every family and weight in the layer runtime before you rely on it (see `subclip-hyperframes-layer`).
4. **Components the brand actually shows**: buttons (height, radius, padding, fill), cards (fill, border, radius, shadow), any glass or gradient container. Only values you saw.
5. **Iteration rules (the load-bearing part)**: 5 to 10 numbered rules that name specific values for this brand. Test each one: if you can swap in a different brand and the rule still makes sense, it is too generic, so delete it.

| Generic (delete) | Site-specific (keep) |
|---|---|
| Use the primary brand color for CTAs. | All primary CTAs use the brand purple #533AFD. Secondary actions use a white fill with a #533AFD border. No third button color exists. |
| Use clear typographic hierarchy. | All type is one family. H1 48 px at weight 300, body 14 px at 400. Never use weights above 400. |
| Buttons should have rounded corners. | Buttons are at least 40 px tall, 4 px radius. The pill shape is reserved for the chat trigger only. |

Short social ads (one hero element per beat) only need colors, fonts and 3 to 5 do's and don'ts.

The creator's wishes always override brand rules ("make it bright even though the site is dark"). Run a 30 second check before moving on: show the colors, fonts and tone you extracted and ask for corrections.

## Step 2: Strategy and messaging

Align on what the video must communicate before talking visuals. Read what the creator already said (type, style, duration, requests) and ask only what is missing.

Questions, in order:

1. **What is it for?** Social ad (10 to 20 s), product demo (30 to 60 s), launch teaser (15 to 25 s), brand reel (20 to 45 s), feature announcement (15 to 30 s), or something else. This sets duration, energy and how much narration.
2. **Pace, mood, narration, anything specific?** Ask in open words (slow or fast, dark or light, voice or not), not as a menu of labeled styles. A label like "cinematic" means different things for different brands. When the creator's words clash sharply with the brand (dark cinematic for a pastel brand), surface it and ask.
3. **The ONE thing the video must communicate.** One sentence. Every beat serves it or does not belong. Offer a draft from the site: what the product does, who it is for, the proof that makes it believable.
4. **Narration?** Full voice, minimal, or music only.
5. **Format.** Landscape 1920x1080 (default), vertical 1080x1920, or square 1080x1080.

Handling answers: "surprise me" means go ambitious inside the brand; specific direction means follow it and fill gaps; mixed direction means converge brand and wish. If the creator said to decide for them, skip preference questions but never skip verification.

**Gate:** type, duration, format, the message and the narrative arc are locked.
