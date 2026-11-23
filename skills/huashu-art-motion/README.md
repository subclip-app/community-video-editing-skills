Adapted for Subclip from https://github.com/alchaincyf/huashu-art-motion by alchaincyf, MIT.

# Huashu art motion

Make paintings that move, art-history journeys, horizontal painted worlds and narration-led explainers. Design the frame first. Give the subject an action and the painting its own small movements.

![A painted landscape becomes geometric shapes](cover.svg)

[Watch the silent preview](preview.mp4).

The adaptation keeps Huashu's four production routes, 53 style recipe summaries, nine explainer grammars, material rendering methods, character checks, camera rules and musical timing ideas. Recipes are creative starting points, not installed renderers or promises of tested Subclip output. Later research recipes remain marked as research.

## Use it

Install this folder as a skill in Subclip, then use it with Claude Code, Codex, Cursor or the in-app agent. Try:

- "Make a 20 second living painting of a harbor, with visible brushwork and a boat unloading crates."
- "Use my narration to explain this mechanism on a continuous whiteboard."
- "Design a character walking through three painted worlds. Keep the ground and walking phase continuous."

The workflow reads existing media context first. Voice sets narrated timing. Native media, text, captions and audio stay editable. Short HyperFrames layers hold drawn animation; generated clips keep editable framing and timing. Choose a working creator generator or Subclip credits before generation. Subclip jobs use live model discovery and an approved quote.

## What changed

Provider-specific image, video and speech setup became Subclip generation and imports. Standalone render, analysis, cutout, audio-synthesis, assembly and delivery scripts became native timeline work and explicit review steps. There are no required scripts, provider credentials, copied demo engines or background update checks.

Detailed methods are organized in [SKILL.md](SKILL.md) and its references. The [source and verification notes](references/source-and-verification.md) explain licensing, tool checks and feature limits.

## License and exclusions

The original [LICENSE](LICENSE) is preserved byte for byte, including its copyright notice. The upstream README excludes Huashu's character artwork, its appearances in overview images and demos, and the Clawd fan-demo media from its MIT grant. None is included here. Bundled fonts and Arphic-derived stroke data are also omitted. The cover is an original vector design for this adaptation. The bundled preview uses original artwork made for this adaptation.

Huashu credits Tak's [Art History Speedrun](https://x.com/cherry_mx_reds/status/2106095190285144331) as inspiration for the original fixed-scene art-history mechanism. This adaptation carries the method, not Tak's frames, sound, characters or compositions.

## Validation

This conversion was checked against the Subclip source tools and expanded model catalog on 2026-11-23. Repository build, schema, static scan and tests are run for the package. The silent preview was built and exported in Subclip, then reviewed at half-second intervals and around each cut.
