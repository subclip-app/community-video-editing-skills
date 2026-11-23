# The house style, annotations and sheet specs

The original studio fixes one look and repeats it word for word in the style key, every sheet and every block prompt. Consistency comes from repetition plus attached references, never from the model remembering. Write your own formula once, store it in the director brief, and paste it unchanged everywhere.

## The style formula (adapt the materials and setting to the topic, keep the shape)

The reference look is a premium stylized-realistic 3D short film: glossy CGI with appealing proportions and realistic physically based materials, warm directional sunlight, soft ambient occlusion, crisp highlights, a clear deep blue sky, shallow cinematic depth of field, physically plausible light. It is explicitly not photoreal, not flat 2D, with no outlines, no text, no watermark, no UI.

Template to fill (keep the order):

`STYLE: premium 3D animated short film still, glossy stylized-realistic CGI, appealing character proportions with realistic PBR materials ([3 to 5 materials of this topic, such as weathered wood grain, rope fibers, burnished bronze, wool, dry sand]), warm golden sunlight, soft ambient occlusion, crisp specular highlights, [a clear deep cobalt sky or the topic's one backdrop], shallow cinematic depth of field, physically plausible lighting, subtle film response. Not photoreal, not flat 2D, no outlines, no text, no watermark, no UI.`

What the reference frames showed, useful when art directing:

- Characters: stylized-realistic 3D people with adult, grounded faces, soft skin glow, groomed brows, glossy expressive eyes. Costumes must read in one second through faction color coding (attackers in red, defenders in blue and navy, with distinctive headgear and armor).
- Materials carry the wow. Each close-up is a material study (grain, rope twist, wet hide, marble veining, patina), so name the material in every close-up prompt.
- World: one readable setting, dust kicked up by motion, a clear sky as the background of many shots.
- Lighting: one warm key light, no heavy grading, no night scenes. Readability beats mood.

## Annotation grammar (rendered inside the world by the video model, never added later)

| Color | Meaning | Shapes | Example language |
|---|---|---|---|
| Neon green | look here, how it works, reveal | glowing rectangle around a hidden part, arrow pushing toward a goal, scribble under a detail, x-ray outline of hidden contents, splat marking a result | "a neon-green glowing rectangle outline draws itself around the hidden panel, casting soft green light on the wood" |
| Red | danger, force, physics | dashed trajectory arc behind a projectile, glowing crack racing through ground or wall, starburst flash at an impact, arrow showing an ominous pull | "a red dashed trajectory arc traces the torch's flight", "a glowing red crack splits the ground and races toward the wall" |

Rules: annotations wrap surfaces, cast glow and follow the camera. One annotation idea per shot and never two colors in the same shot. Green for curiosity and reveal beats, red for threat and mechanism in action. Shapes only: never words, numbers or labelled arrows (if exact words are needed, add native text in the edit).

## Signature shots (use at least the first two in every short)

1. Macro eye shot: an extreme close-up of eyes darting or widening, the human moment that resets attention.
2. Poof-vanish gag: an object disappears in a grey smoke burst to show "never existed".
3. Whip-in opener: shot 1 starts as a motion-blurred texture close-up and whips out to the establishing wide.
4. Deadpan reveal: the literal, absurd version of a metaphor shown straight (a real horse standing where the "horse" was claimed).
5. X-ray cutaway: a green glowing outline showing what is hidden inside a container, wall or machine.

## Hard rules for every prompt

Characters never talk on screen (no lip sync, the narrator is separate). No real brand, studio or franchise names. No on-screen text (annotations are shapes). State the aspect ratio on every image and video generation. If a platform offers a photoreal or "3D render" preset, decline it: the formula is the style.

## Sheet specs

- Roster is lean: at most 6 sheets including the style key. One sheet per distinct costume or faction (not per extra), the main environment, and only a prop that carries the story across blocks. Everything else is described inline inside the block prompt. A damage or wear state gets its own sheet only when the damage is a story beat. Give each a plain id: `style-key`, `env-...`, `char-...`, `prop-...`, `...-breached`.
- People: full body, front three-quarter view, neutral flat backdrop, relaxed arms, portrait 2:3.
- Props: isolated on a plain backdrop, 1:1, no hands, no scene.
- Environments: the dressed wide of the place with its one anchor object, in the video's aspect ratio, with no people. Every environment prompt carries the subject-bleed guard: say it is an empty location plate, that it takes only the render style and palette from the reference and not its subject, and name the style key's subject and people and animals as absolutely excluded. Without this the key image's subject leaks into the place.
- Damage or wear states: generate from the base sheet (attach it as a second reference) with "same object, now cracked, breached, soaked, burned". One sheet per state shown on screen.
- Check every location plate before moving on: no style-key subject and no people. If one slipped in, regenerate.
