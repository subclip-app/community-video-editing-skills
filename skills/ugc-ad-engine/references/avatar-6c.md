# Avatar image: the 6C method

Use this to write the image prompt for the avatar, to adapt a reference photo, or to change one thing about an existing avatar. It makes a portrait that looks like a phone photo from a real person, not a studio render.

The avatar must be fictional, or the creator's own likeness with their clear consent. Never describe or recreate a real person from a photo without that person's consent. If a reference image seems to show a real person who is not the creator, ask whose image it is before going further.

## Which tool makes the image

1. The creator's own Codex CLI image generation, when signed in and working. It uses no Subclip credits.
2. Otherwise `generate_ai_media` kind image with a model from `list_ai_models` (check the live catalog; reference-following models such as `nano-banana-2` suit "change only" edits because they take the old image as a reference).

Bring a Codex file in with `import_external_media`. Show the image to the creator and wait for approval before spending credits on speech or video from it. Always ask for a vertical 9:16 portrait with her head centered and room above it, so the avatar video model has space to move.

## The six Cs

| C | Cover | Example words |
| --- | --- | --- |
| 1 Character | age, vibe, face details, hair, skin | "woman in her early 30s, wavy dark hair, relaxed friendly face, visible pores and small natural imperfections" |
| 2 Camera | phone realism: viewpoint, angle, framing | "iPhone selfie at arm's length, slightly wide lens, head and shoulders and one hand visible" |
| 3 Clothing | outfit, styling, accessories | "cream knit sweater, small silver ring" |
| 4 Context | place and background details | "bright apartment kitchen, plant by the window, tidy counter, softly blurred" |
| 5 Cinematic light | light source, shadows, grain | "soft window light from the left, gentle shadows, slight natural grain" |
| 6 Consistency anchors | realism anchors and clean-up | "natural skin texture, hands with five fingers, no logos on the product" |

Two moods. Pick one and say which:

- Option A, influencer polish: "Instagram creator, model-level looks, tidy styling". Use for beauty, fashion, aspirational products.
- Option B, relatable creator: "ordinary friendly person, real UGC feel, slightly messy room". Use for most products; it converts as content, not as an ad.

## Prompt rules

- Open with the camera and the place ("iPhone photo taken in ...").
- Phone realism words: "iPhone photo", "candid", "slight grain", "soft window light" or, for a night shot, "direct on-camera flash".
- Always add realistic skin: pores, small marks, uneven tones.
- Describe the product in her hand by shape, material and size ("matte navy silicone body, steel rim, collapsed flat, about 4 cm tall"), no logos or text on it unless you want them.
- Do not use names. Describe the person.
- End with: "No text, no watermark, no distortion."
- Keep it to one paragraph of plain sentences.

Example (structure only):

```
iPhone selfie photo at arm's length in a bright apartment kitchen in the morning, soft window light from the left, slight natural grain, casual creator feel. A woman in her early 30s with dark wavy shoulder-length hair and a relaxed friendly face looking into the lens, visible skin pores and small natural imperfections. Cream knit sweater. She holds a small collapsible navy travel mug, collapsed flat, at chest height in her right hand, no logo on it. Tidy counter and a plant softly blurred behind her. Head centered with room above, vertical 9:16. No text, no watermark, no distortion.
```

## From a reference image

If the creator brings a reference image (their own, or a fictional avatar):

1. Read it with `get_media_context`. List what you see against the six Cs.
2. Ask one question: "Should the new image look exactly the same, or should I change something?" Skip the question if the request already says.
3. Write the prompt from your six notes.

## Change-only mode

When the creator says "only the outfit", "only the location" or "only the pose", keep everything else identical and change just that one C. Pass the previous image as a reference to the image model and say in the prompt: "Same woman, same face, same hair, same lighting. Change only the outfit to ...". Check that the face and the product still match the approved avatar before using the new image. One approved image per ad: do not mix faces across clips.

## Read the voice off the image

Note the avatar's apparent gender and age now, because the speech voice must match them (female avatar, female voice; male avatar, male voice). See "Match the voice to the avatar" in `subclip-tools.md`.

## Before you use the image

- Does it look like a person you could believe, with no melted hands or warped product?
- Is the product visible and correct?
- Is there room above her head and is she centered?
- Is it fictional or the creator's own likeness? If not, stop.
