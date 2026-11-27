# Writing a prompt for a new style

Each style prompt has a shared part and a style-specific part. The shared part (the role at the top plus How to work, Rules, Craft checklist, self-scoring and Deliver) is the same for every style; it lives in [director-prompt.md](director-prompt.md). To write a new style, fill in only these sections:

```text
# Style
<style name>

# Output (fixed)
- <width>x<height>, <fps> fps, exactly 10.000 s, stereo audio, music peaks under -1 dB.

# Suggested technical route
<what fits best in Subclip: a HyperFrames layer with SVG, Canvas, WebGL or Three.js, native 3D layers, native media
 items, and the key techniques that make it work.>
(You may choose a better route if it clearly raises quality; say why.)

# Creative seed
<a one-line title, plus the most classic yet most stunning reading of the style:
 - what happens from 0 to X s (hook, escalation, climax, end frame),
 - the palette (3 to 6 exact color values) and the character of the type,
 - Sound: the music style plus the key sound effects.>

You are the director: you may change the concept, copy, story beats and brand names if you find a stronger idea, but the
result must remain the CANONICAL, instantly recognizable form of this style and must hit its signature features below.

# Signature features and key techniques (the result is judged against these)
<where the style comes from and what it is used for, in one or two sentences>
Visual features: <comma-separated signature features>
Key techniques: <actionable techniques, as specific as possible: curve values, frame counts, layer structure; one per line>
```

What makes a good one:
- **Signature features must be checkable.** Write "elastic overshoot with `cubic-bezier(0.34,1.56,0.64,1)`, stagger 2 to 4 frames", not "the motion should feel elastic".
- **The creative seed needs beats.** Write the hook, escalation, climax and end frame second by second, so the film does not become a flat template.
- **Use invented brand names and copy** to avoid trademark problems.
