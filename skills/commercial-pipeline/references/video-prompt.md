# Structured video prompt

```
LOOK: <format, lens, light, color grade, pace>
REFERENCES (attach in this order):
  1 = <hero product>  2 = <before>  3 = <after>  4 = <character A>  5 = <location>  6 = <machine>
SHOT LIST (30 s):
  0-3s:   <shot>. Camera: <move>. Uses: 1, 5. Sound: <note>.
  3-6s:   ...
  ...
  27-30s: <hero product on white, slow push>. Uses: 1.
RULES: the product matches reference 1 exactly. No on-screen text. No logo drawn by the model.
```

## Failure table

| Failure | What to rewrite |
|---|---|
| Product shape or label changes | Restate rule about reference 1 in every shot it appears, and attach it first |
| A character looks different between cuts | Name the character sheet in each shot, shorten the shot |
| Missing detail (for example a moustache) | Make the asset show it clearly, then mention it in the first shot that needs it |
| Hard cut feels random | Add a cut reason: a match on movement, color or shape |
| Too many things in one shot | Split the action across two shots |
| Wrong location | Attach the empty location in every shot set there |
