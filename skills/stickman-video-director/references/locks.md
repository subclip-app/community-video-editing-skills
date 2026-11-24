# Character and style locks

Whatever you leave undefined, the model invents, and it invents it differently in every clip. So a film fixes its drawing once and repeats it word for word. This is the core rule of the original project and it holds for both engines.

## The three locks

1. **Style lock.** The drawing grammar and palette of the chosen look: line weight, fills, background treatment, light, what is forbidden. It comes from the look file (`references/looks/`). Repeat it in full in every prompt (model engine) or every image request (code engine). Never write "same style as before" or "as above".
2. **Character lock.** One full description per recurring character (a cast card): role and age range, head and body proportions, hair or its absence, eyebrows and eyes, one distinctive non-color mark, costume silhouette, one recognizable accessory, how the hands are drawn. Two recurring characters need at least two visible differences that do not depend on color. Never write "the same caveman" or "same as clip 1". Gender and age come from the story; the voice later matches them.
3. **Prop and place lock.** Each important prop has a count, a shape, a color and a current owner (who holds it, where it starts, where it ends). A place has a short layout note and screen direction. A prop never appears, vanishes or changes hands without a written transfer.

Keep appearance apart from action. A spade's shape belongs in the prop line; who holds it and which hand belongs in the timed action.

## Cast card template

```text
[Name], [role], [age range], [gender if it matters for the voice].
Head: [shape and fill]. Face: [eyes, brows, mouth, one mark]. Hair: [style or none].
Body: [proportions, line weight]. Costume: [silhouette, 1 or 2 pieces]. Accessory: [one item].
Hands and feet: [how they are drawn]. Never: [the failures to prevent for this look].
```

## Reference images

- The model engine accepts reference images. Use a reference to fix identity and drawing quality (a character sheet, a location frame), not as a mandatory first frame, unless the look file says so.
- Bring the creator's reference or sheet in with `import_external_media`, or make one (see below), and pass it to `generate_ai_media` in `sourceAssets` with role `reference`. Record which reference went into which prompt.
- For a direct continuation of the same scene, pick the last good frame of the previous clip (watch it at normal speed, choose the latest frame with a clean face, joints, contact and props) and pass it as the next clip's start frame if the chosen model supports one. For a new scene, start from text and the character lock again.
- Code-drawn stick figures and SVG skeleton diagrams are not character references for a video model. Use a hand-drawn or generated image of the real character, or none.

## Making a character sheet (cheap, do it once)

One image: the character in front, side and back view plus three expressions, on the look's own background, no text. Use the creator's Codex CLI image generation first (offer it, no Subclip credits). If it is not available or the creator prefers Subclip, use `generate_ai_media` with an image model from `list_ai_models` that accepts references (for example `nano-banana-2`). Quote the price first. Approve the sheet with the creator before any clip.

## Negative list (adapt per look)

Put these limits in plain words at the end of every prompt: no visible words, letters, numbers, subtitles, logos or watermarks; no speech bubbles; no extra or duplicated limbs, heads or characters; no costume changes between shots; no photorealistic skin, no glossy 3D; no lighting or texture that the look forbids. State anatomy limits in the positive too ("exactly two arms and two legs, a moving limb replaces its previous pose").

## Palette words

Name colors in everyday words ("vivid red", "electric blue", "warm gold"). Never hex, RGB, HSL or Pantone in a prompt. Maximum three saturated accents for the minimal looks.

## When the result drifts

Fix only the affected scope. Typical fixes: shorten the action, split a crowded beat into a wide shot and a close-up, add the missing lock sentence, remove a contradictory instruction, pick an earlier good frame for the continuation. Keep accepted shots. Do not retry the same prompt more than twice; change something between attempts.
