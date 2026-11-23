# Reference sheets

Three sheets, all 9:16, each its own image. They are identity assets, not scenes.

## Character

Method A, new character. Collect these in one short form (use plain choices, not a wall of questions; ask only fields the creator has not given):

- Name (optional), gender, age range (18 to 24, 25 to 34, 35 to 44, 45 to 54, 55 plus)
- Appearance and heritage, in the creator's words
- Skin tone and undertone (cool, neutral, warm, olive), eye color
- Hair color and style, with an optional detailed hairstyle note that is treated as a direct instruction
- Body type and height, optional build note
- Outfit style plus a specific outfit note (outfit is a separate variable from identity)
- Accessories (none, earrings, necklace, watch, glasses and so on)
- Up to three personality words (relatable, warm, confident, playful and so on)
- Content style (lifestyle, beauty, skincare, fashion, fitness, tech, product review)
- Expression (default natural) and framing (default full body)

Merge the answers into one structured prompt in this priority order: identity, face, apparent age, skin, eyes, hair, body, outfit, accessories, personality, framing. No field may override another. The person should look like an everyday creator, not a fashion campaign, unless the creator asks for polish.

Method B, upload: up to 10 photos of one consenting person. Describe their face, build, skin, hair and style from all photos together. The photos are the identity source; do not invent a different person. The sheet is still required.

Consent gate: only a fictional character, or the creator's own likeness, or a person who clearly agreed. Stop if the photos show someone else without consent.

### Character sheet image

One 9:16 image, neutral light studio background, eight panels of the same person: full-body front, three-quarter, side profile, back, face close-up, neutral expression, soft smile, friendly smile. No product, phone, ring light, microphone, props or location. Check that all eight panels show one face before showing it.

After showing it, give: the generation prompt, a negative prompt (no extra people, no different face between panels, no props, no text clutter, no cartoon skin) and a short character summary (two to four lines). Ask for sheet approval. On yes, lock identity.

Locked identity means face, skin, eyes, hair identity, body and age stay fixed. A new outfit is "same person, different outfit": say "keep the locked character exactly the same, change only the outfit to ...".

## Product

The product comes from the creator's own photo. Do not redesign the shape, logo, colors, buttons, finish or proportions, and do not invent specifications that are not visible or given.

Write product notes: name, type, shape, colors, materials, finish, controls, branding, scale cues, how it is held or used, and anything not to show.

Product sheet image, 9:16: the same product in front, side, back, top or detail views, lid or control states if relevant, and one scale shot in a hand. No character face, location or story. Lock after approval: same shape, proportions, materials, colors, controls and branding in every later shot.

## Location

If the creator gave a photo, keep its layout and major objects. If not, design one that suits the product and the concept: a believable creator space (kitchen, car, gym, dorm, home office, bathroom shelf, park bench). Note the time of day, light source and direction, color palette, major objects and what stays out of frame.

Location sheet image, 9:16: that one place from four to six camera angles in a tidy grid. Location only: no person, no product, no storyboard, no shot numbers, no script text. Lock after approval; later camera angles must still be this room.

## Tool use

Make each sheet with the chosen image route (see `subclip-tools.md`). Pass earlier sheets as references so the person and product match. Save each approved sheet as a media item and note its file name in the director brief.
