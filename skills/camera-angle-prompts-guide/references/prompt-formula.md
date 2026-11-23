# Prompt formula for a camera angle

A good angle prompt is a position and a motion, not a style word. Build it from five parts, in this order.

1. **Look block (fixed).** One short paragraph that sets the camera and film look and never changes inside a set: lens feel, depth of field, grain, contrast, no heavy sharpening. Example wording of ours: "Shot on a cinema camera with prime lenses, shallow depth of field, soft highlight bloom, fine film grain, lifted blacks, gentle contrast, natural colour."
2. **Grade block (yours).** One or two sentences about your scene: key light, palette, atmosphere. Rewrite it for each project, then keep it identical across all angles of a set so they cut together.
3. **Angle sentence.** Where the camera is (height, distance, direction), what it does (still, glides, arcs, rises) and what the subject does. Take it from the family files and swap the brackets. Name a start and an end for any move.
4. **Subject beat.** One small living action at the end: a breath, a nod, a look to the lens. It keeps the face stable.
5. **Sound line.** Natural room sound only, or none. Add a whoosh later in the edit instead of asking the model.

## Rules that stop most failures

- Say what is visible and what is not: "no hands visible", "face stays out of frame", "no other person in the frame".
- Number beats for a chain: "[0.0 to 2.0 s] wide shot, [2.0 to 4.0 s] close up". Check the model's rules for multi-shot prompts in `list_ai_models` first.
- One move per shot. A dolly in plus a tilt plus a zoom is where models drift.
- Give distances and numbers: "about 1 metre", "tilted about 20 degrees". Numbers beat adjectives.
- Keep the subject upright in the frame unless you want a roll.
- Describe the foreground object for any angle that shoots past something.

## Skeleton

[Look block] [Grade block]

[Angle sentence with subject and place]. [Subject beat].

Sound: natural room tone only, no music.
