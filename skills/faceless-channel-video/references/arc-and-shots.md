# Arc, through-line and shots

From the original `references/channel-motion.md`, `references/creative.md` and the checks in `scripts/validate_motion_script.py`, rewritten as rules the agent applies by reading. The original runs the script; here the agent checks each rule and writes the result into the project brief.

## The arc

- Block 1 is the **hook**. The last block is the **payoff**. One block before the payoff is the **turn**, where the story changes direction. Blocks between the hook and the turn are **build**.
- Three blocks: hook, turn, payoff (no build block needed). Four or more: at least one build block.
- For education and history, the hook opens with the raw fact stated flat, at most 8 words before the first full stop, then fills the block.

## The through-line

One object or character that the viewer can follow from the first block to the last:

- `name`: what it is. `asset`: the reference you reuse (a code component, a locked reference image, a recurring cut-out).
- `progression`: how it changes block by block. Each block records its `through_line_state`.
- `resolution`: how it ends. The payoff block shows that end state.

The through-line appears in every block (in `assets_used`). Named characters always come with their reference asset; a named character without it is a new character.

## Shots

- Five shots per 10 second block, four for kids. About two seconds each, or cut on the narration words.
- Every shot starts with a size: `WIDE:` (also establishing, full spread), `MEDIUM:`, `CU:` (close-up), `DETAIL:` (insert, macro), `TOP:` (overhead, aerial). An over-the-shoulder shot needs a visible shoulder; over a diagram it is just a medium shot.
- Adjacent shots never share a size. Alternate near and far.
- Each shot shows what the narrator is saying at that moment. If the line says "the gate closed", the shot is the gate closing.
- Only the first block in a location establishes it with WIDE or TOP. A later block back in the same place opens closer.
- No location in more than two blocks in a row. Two blocks with the same location, the same assets in the same order and the same sizes will look the same: change one of them.
- Do not describe the same shot twice across blocks (no eight-word phrase repeated in shot descriptions).
- Keep words out of the pictures unless the creator asked for on-screen text. The narration and captions carry the words.

## Worked example (the reference episode)

```json
{
  "title": "Why the Tower of Pisa still leans",
  "genre": "history",
  "look": "editorial collage",
  "cast": [],
  "sources": [
    "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa",
    "https://www.britannica.com/topic/Leaning-Tower-of-Pisa"
  ],
  "through_line": {
    "name": "the tower and its lean",
    "asset": "tower",
    "progression": "a short upright drum that starts tipping, then a full tower at its steepest, held shut while soil is drawn out",
    "resolution": "the tower eases back and stands steady, still leaning"
  },
  "arc": { "hook": 1, "build": [], "turn": 2, "payoff": 3 },
  "blocks": [
    {
      "n": 1, "arc_role": "hook",
      "vo_line": "Pisa's bell tower leaned before it was finished. Five years after work began in eleven seventy-three, its south side sank into soft clay.",
      "location": "Pisa building site, twelfth century",
      "through_line_state": "three storeys tall and just starting to tip south",
      "shots": [
        "WIDE: the half-built bell tower on a paper square, three storeys of arches already tipping, scaffold poles beside it",
        "CU: the open top ring of the unfinished tower, a plumb line hanging well clear of the wall",
        "DETAIL: a single foundation stone set into the ground while a paper sun arcs over it five times",
        "MEDIUM: the tower base pressing into the ground, the south edge sinking, the earth cracking around it",
        "WIDE: a cutaway of the ground, a grey band of soft clay under the south footing squashing as the tower tilts"
      ]
    },
    {
      "n": 2, "arc_role": "turn",
      "vo_line": "By nineteen ninety the lean was so steep that Italy closed the tower. Engineers later drew soil from under its north side.",
      "location": "Piazza dei Miracoli, nineteen ninety",
      "through_line_state": "complete with its belfry and at its steepest lean, closed to visitors",
      "shots": [
        "MEDIUM: the complete tower with its belfry leaning hard, a pale arc swinging out to mark the angle",
        "DETAIL: the entrance gate swings shut and a chain with a padlock drops across it",
        "WIDE: the empty square around the closed tower, barriers in a ring and birds circling",
        "CU: a long drill bores at a slant beneath the north footing",
        "MEDIUM: a ground cutaway as small cores of soil slide out on the north side and that edge settles"
      ]
    },
    {
      "n": 3, "arc_role": "payoff",
      "vo_line": "Slowly the tower eased back forty-five centimetres. Experts say it will now stand for at least two hundred years, still leaning.",
      "location": "Piazza dei Miracoli today",
      "through_line_state": "eased back to a safer lean and standing steady",
      "shots": [
        "CU: the belfry drifts a little back toward upright as the plumb line swings closer to the wall",
        "DETAIL: a paper measuring strip shows the gap between the plumb line and the wall shrinking",
        "WIDE: today's square in sunshine with small visitor cutouts, the tower steady and still leaning",
        "MEDIUM: the sun races across the sky over and over while the tower holds still",
        "WIDE: the lone tower against a white sky, leaning and at rest, a blue sun setting behind it"
      ]
    }
  ]
}
```

`assets_used` is left out above for space; each block listed the tower plus its own props. This plan passed every check in the original validator.
