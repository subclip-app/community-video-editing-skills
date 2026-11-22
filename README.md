# Community video editing skills for AI agents

Video editing skills for the [Subclip AI video editor](https://www.subclip.app), used by Claude Code, Codex, Cursor and the in-app agent. Each skill gives an agent a practical workflow for making videos on an editable Subclip timeline, from explainers and motion graphics to captions and sound.

Browse the [community skill directory](https://www.subclip.app/agent-skills/community) on the web.

## Install a skill

Inside the Subclip app, open **Skills > Community**, choose a skill and install it. You can also copy a skill folder link from this directory and paste it in **Skills > Add skill**. Subclip scans the files, your own agent reviews them, and you confirm installation.

## Skill directory

This table is generated from each folder's `skill.yml`. Run `npm run build` after updating a listing.

<!-- skills:start -->

| Cover | Skill | Summary | Credit |
| --- | --- | --- | --- |
| <img src="skills/vox-explainer/cover.svg" alt="Vox explainer cover" width="240"> | [Vox explainer](skills/vox-explainer) | One topic in, a finished Vox-style explainer. | Adapted from [CK42BB/vox-explainer-skill](https://github.com/CK42BB/vox-explainer-skill) by Kingsley |

<!-- skills:end -->

## Install it yourself

Some upstream licenses do not allow us to adapt and redistribute a skill for commercial use. See [Install it yourself](INSTALL_YOURSELF.md) for links to the originals and installation steps. Those projects are separate from this curated directory.

## Submit your video editing skill

[Submit your video editing skill](CONTRIBUTING.md). You can write one for Subclip or convert an existing skill with the instructions in [AGENTS.md](AGENTS.md).

## Develop this directory

Use Node.js 22. No dependency installation is needed.

```sh
npm run build
npm run check
npm run scan
npm test
```

`registry.json` and the table above are generated files. Include their updated versions with your pull request. CI checks metadata, media and licenses, detects stale output, and runs the desktop skill scanner's rules.

## License and credits

Our repository files use the [MIT license](LICENSE). Each skill folder keeps its own `LICENSE`, which governs that skill and its adaptations. Some folders may use AGPL-3.0 or Apache-2.0; check the folder before using or redistributing it. Upstream authors are credited in each listing and skill. The first skill, Vox explainer, is MIT.
