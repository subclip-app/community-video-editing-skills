# Scene kit for PR videos

The same white kit as the `changelog-video` skill, with a code-diff block and an evidence ledger. Replace colors and type with the creator's brand when known.

## Tokens

| Token | Default |
| --- | --- |
| Ground | White `#ffffff` with a faint dot grid (`rgba(21,53,146,.10)`, 36 px) |
| Ink | `#10183a`; brand blue `#153592` for chips and highlights |
| Dim text | `#5b6478` or darker |
| Accent, one moment per scene | Cyan `#26c9d5`; an error state may use red `#b42318` on `#fdecea` instead |
| Type | Geist 400, 500, 700 and Geist Mono from pinned jsDelivr fontsource URLs (`@fontsource/geist-sans@5.1.0`, `@fontsource/geist-mono@5.1.0`) |
| Cards | White, 2 px `#e3e7ef` border, radius 22, `0 24px 60px rgba(21,53,146,.10)`, no backdrop-filter |

## Layout (1920 x 1080)

- Static frame elements in every layer: kicker chip top left (`PULL REQUEST <n> - <OWNER>/<REPO>`, mono 20 px) and one progress dot per story beat top right.
- Section chip at top 128 (`0N - THE SYMPTOM`, `02 - ROOT CAUSE`, `03 - THE FIX`, `04 - PROOF`), headline about 58 px at top 176.
- Content in x 150 to 1770 and y 270 to 850. Captions sit below at `positionY` about 90.
- Seams: content in a `.swrap` wrapper, entering from the right in 0.42 s (`power3.out`), leaving left in the last 0.34 s (`power2.in`). The end card fades everything in its last 0.5 s.

Use the layer skeleton in the `changelog-video` skill (`references/subclip-build.md`): root with `overflow: clip`, `data-composition-id`, a paused GSAP 3.15.0 timeline registered on `window.__timelines`, `gsap.set` for initial states and `tl.to` or `tl.fromTo` (`immediateRender: false`) for motion.

## Scene recipes by angle

| Scene | Recipe |
| --- | --- |
| Symptom | A light terminal card: the command, the last normal line, a blinking caret, a "no output for mm:ss" clock that counts up, then the real error line from the PR |
| Root cause | A chain of 3 to 5 node cards with arrows that light up on the words; the failing node turns to the error state with a small "hung" or "fails" tag; consequences (a frozen event loop bar, heartbeats that never print) as dashed chips |
| Fix | The code-diff block below, one beat |
| Proof | Before and after bars with counters stepping to the PR's own numbers, a status chip under each, and a small source line ("from the PR's test notes") |
| Feature reveal | A mock of the surface acting out the change (see `changelog-video`'s visualization registry) |
| End card | Kicker with the PR type, "Merged into main" or "Released in vX.Y.Z", chips (PR number, merge date, version or "ships after vX.Y.Z"), the repository URL, the author's name |

## Code-diff block

```html
<div class="card code">
  <div class="fh"><b>packages/cli/src/utils/file.ts</b> +13 -4</div>
  <div class="cl add" id="c0"><span class="sg">+</span><span class="tx">export const LIMIT_MS = 5_000;</span></div>
  <div class="cl del" id="c1"><span class="sg">-</span><span class="tx">    ? { stdio: "ignore" }</span></div>
  <div class="cl ctx" id="c2"><span class="sg"> </span><span class="tx">  ...</span></div>
</div>
```

```css
.cl { font-family: "Geist Mono"; font-size: 25px; line-height: 54px; white-space: pre; padding-left: 20px; opacity: 0; }
.cl.add { background: rgba(38,201,213,.10); }   .cl.add .sg { color: #0e8f99; }
.cl.del { background: #fdecea; color: #8a1c14; } .cl.del .sg { color: #b42318; }
.cl.ctx { color: #5b6478; }
```

Escape `<`, `>` and `&` in code text. Copy lines exactly from the diff; keep each line under about 95 characters at 25 px or crop it with a context marker. Reveal a hunk on the word that explains it and dim removed lines to 45 percent once the replacement shows.

## Evidence ledger (in the director brief)

```text
PR: <owner/repo>#<n>, <title>
State: merged <date> into <base>; latest release <tag> on <date>; shipped: yes or no
Author(s): <names from commit authors>
Angle and audience: <fix explainer, developers>
Facts:
- <fact shown or said> | source: <PR body section, diff file and line, commit message, release tag>
Hunks used: <file> lines <a-b>
Verify the proof: <date>, all claims traced; changes made: <...>
```

## Reference timing: heygen-com/hyperframes PR 8965 (35.2 s)

| Scene | Time | On the words |
| --- | --- | --- |
| Symptom | 0 to 4.6 | clock to 15:00 on "fifteen minutes", then the error line |
| Root cause | 4.6 to 15.2 | nodes on "Closing the browser", "task kill", "W M I"; error state on "hung"; frozen loop and heartbeats on "froze" |
| Fix | 15.2 to 23.6 | first hunk on "caps every task kill at five seconds", second on "without a shell", note on "ends task kill itself" |
| Proof | 23.6 to 30.4 | before bar on "the close went from", after bar on "five", status on "gone" |
| End card | 30.4 to 35.2 | chips on "ships in the next release" |

Cost: 0 credits (local voice, code layers, CC0 music).
