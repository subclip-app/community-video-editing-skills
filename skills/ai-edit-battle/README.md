Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21)

# AI edit battle (Subclip edition)

<!-- cli:start -->
> Install from your terminal: `npx @subclip/community-skills install ai-edit-battle`
<!-- cli:end -->

A head-to-head format for any two AI contenders. Each edits the same raw clip from the same brief, alone, in its own cloned Subclip project. You then compare the exports with hard checks and a scorecard and the creator picks a winner. Built from a guide that ran Fable 5.2 against Opus 5.5, rewritten so it works for any two models or agents.

Fair setup, native edits, a scorecard and a side-by-side reveal.

## Install

Add this skill from **Skills > Community** in Subclip, or point your agent at this folder. It works with Claude Code, Codex, Cursor and the in-app agent through Subclip's MCP tools.

## Files

- `SKILL.md`: the workflow the agent follows.
- `references/edit-brief-template.md`: the frozen brief with the craft standards and the fields to fill.
- `references/contender-playbook.md`: the native Subclip tools each contender uses.
- `references/scorecard.md`: hard checks, scored categories and the result sheet.

## How it differs from the original guide

- Outside services, accounts and keys are replaced by Subclip's own generation tools and models. Image generation offers the creator's own Codex CLI first.
- Every model name the guide used is kept when Subclip's live catalog offers it. Where it does not, the closest model is named with the swap.
- Credits are quoted before anything is generated, and edits run one at a time on the native timeline.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/codex-gpt-6-2-astra-edit.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-edit-battle/codex-gpt-6-2-astra-edit.gif" alt="1. Codex gpt-6.2-astra edit: Fold Lines, all 29 s with sound design. Same brief, same clip, zero credits." width="480"></a><br><sub>1. Codex gpt-6.2-astra edit: Fold Lines, all 29 s with sound design. Same brief, same clip, zero credits. <a href="examples/codex-gpt-6-2-astra-edit.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/claude-opus-5-5-edit.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-edit-battle/claude-opus-5-5-edit.gif" alt="2. Claude Opus 5.5 edit: manual-card idea, graphics for the first 24 s. A usage limit stopped it, so the end has none." width="480"></a><br><sub>2. Claude Opus 5.5 edit: manual-card idea, graphics for the first 24 s. A usage limit stopped it, so the end has none. <a href="examples/claude-opus-5-5-edit.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/battle-side-by-side.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-edit-battle/battle-side-by-side.gif" alt="3. Side by side over the original voice: Codex left, Opus right. The Opus run is unfinished, so no winner is claimed." width="480"></a><br><sub>3. Side by side over the original voice: Codex left, Opus right. The Opus run is unfinished, so no winner is claimed. <a href="examples/battle-side-by-side.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/shared-edit-brief.jpg" alt="Sample frozen brief with a shared source, voice cues, and delivery constraints." width="720"><br><sub>Sample frozen brief with a shared source, voice cues, and delivery constraints.</sub></p>

<p align="center"><img src="examples/blind-scorecard.jpg" alt="Illustrative blind scorecard with pass checks, seven scored categories, and evidence." width="720"><br><sub>Illustrative blind scorecard with pass checks, seven scored categories, and evidence.</sub></p>

<p align="center"><a href="examples/blind-scorecard-reveal.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-edit-battle/blind-scorecard-reveal.gif" alt="Seven scoring rows appear before the sample totals for the two blind edits." width="480"></a><br><sub>Seven scoring rows appear before the sample totals for the two blind edits. <a href="examples/blind-scorecard-reveal.mp4">Play with sound</a></sub></p>

<p align="center"><sub>Test outputs made with this skill in Subclip. Edits by Codex CLI (gpt-6.2-astra) and Claude Opus 5.5 in the Subclip editor with HyperFrames layers: no image, video or audio model, zero credits. Source clip: Alexander H. King Interview, Purdue University Archives and Special Collections (CC BY).</sub></p>

<!-- examples:end -->

## Credit and license

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words. The creator's guides state no license, so please confirm permission with the creator before relying on this skill.
