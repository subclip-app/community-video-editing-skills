# 03 A3 Prehistoric cave

- **Reference clip:** `examples/05-prehistoric-cave.mp4`. Original author's sample (first 10 s of a 30 s film, includes its burned-in subtitles and a small channel mark), silent.
- **Upstream source:** `references/prehistoric-dark-comedy.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/prehistoric-dark-comedy.md).
- **Engine:** A, video model. **Best for:** workplace satire, human nature, dark comedy, fables, what-if jokes. The scenes are fiction used as an analogy, never a claim about real history.

## The look

Crude hand-drawn black outlines, white filled round heads, thin black stick limbs, expressive cartoon eyes and brows, animal-hide clothes, ochre and brown caves and camps, small warm fire accents, a faint paper texture. Different stories get different casts: fix the drawing grammar, not one universal face.

## Style lock and cast cards

```text
Crude hand-drawn 2D cartoon with irregular black outlines. White filled round heads, thin black stick limbs, expressive simple eyes, brows and mouths. Animal-hide clothing. Earthy ochre and brown scenery, small warm fire accents, subtle paper texture. No photorealistic skin, no glossy 3D characters, no modern studio interface.
```

Write one cast card per role (see `locks.md`): [role and age], [head and body proportions], [hair], [brows and eyes], [facial mark], [hide costume silhouette], [one accessory]. Recurring roles need two visible differences that are not color. Repeat each card in full in every prompt where the role appears.

## Story and prompt skeleton

Plan premise and conflict, then a tempting solution that escalates, then a reversal or callback; leave a reaction pause before the payoff. Turn abstract mechanisms into physical things: endless recommendations as a chief offering snacks, workload as a growing spear bundle, social pressure as a small watching tribe.

```text
Create one [10]-second [16:9] stickman animated video, silent actors, no music.
STYLE: [style lock]
CAST: [full cast cards of the visible roles]
PLACE: [cave or camp, layout, opening state]
TIMED ACTIONS: [0-3s setup] [3-6s escalation, who hands which prop to whom] [6-10s reaction and ending state].
Props: [count, shape, owner at start, owner at end]. No visible text, no extra characters, no costume changes.
```

Track prop ownership; objects must not spawn, teleport or duplicate. 16:9 uses lateral staging; 9:16 needs a re-block with depth.

## Sound

Sparse primitive percussion or dry pauses, not a piano. Narration is a separate voice (a gruff narrator suits it), gender matched to the main character.

## Subclip route and credits

Gemini Omni class or `p-video-2`, 720p, quote each clip (about 25.5 credits per 10 s on `p-video-2`). A character sheet per role from Codex CLI first.

## Checks

Cast distinguishable without color; each card identical across clips; no costume swaps; earthy palette; prop ownership coherent; payoff has room to breathe; no forced comment question; the sample's subtitles are post-production in our flow, not in the picture.
