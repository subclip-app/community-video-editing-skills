# @subclip/community-skills

Install community video editing skills for Claude Code, Codex, Cursor and other agents with one command.
No need to open each skill page and install it by hand.

Browse every skill with previews: [subclip.app/agent-skills/community](https://www.subclip.app/agent-skills/community).
Source: [subclip-app/community-video-editing-skills](https://github.com/subclip-app/community-video-editing-skills).

## Use

```sh
npx @subclip/community-skills list                      # all skills
npx @subclip/community-skills list --category promos    # or --search captions
npx @subclip/community-skills info earshot              # summary, size, license, review notes
npx @subclip/community-skills install earshot           # one skill
npx @subclip/community-skills install --all --yes       # everything
npx @subclip/community-skills install --category motion --yes
npx @subclip/community-skills update                    # move what you installed to the latest release
npx @subclip/community-skills uninstall earshot
npx @subclip/community-skills installed
```

Options: `--agent claude-code|codex|cursor|all` (default `claude-code`), `--project` (install into the current folder
instead of your user folder), `--with-examples` (also download `examples/` and `media/`, large), `--ref <tag|sha>`
(pin a release), `--dry-run`, `--yes`, `--json`.

Skills are installed for your user: `~/.claude/skills`, `~/.codex/skills` and `~/.agents/skills` (Cursor and other
agents read the open `~/.agents/skills` folder), the same folders as [`@subclip/skills`](https://www.npmjs.com/package/@subclip/skills).
In Subclip you can also install a skill from the app: **Skills > Community**.

## What it does and does not do

- Skills are text for your agent. Nothing is ever executed, and the installer has no dependencies.
- Every downloaded file is checked against its size and sha256 from the release's `files.json`. A file that does not
  match is refused and nothing is installed for that skill.
- Paths from the registry must be plain relative paths inside the skill folder (no `..`, no absolute paths).
- It installs `SKILL.md`, `LICENSE`, `references/` and the other text a skill needs, within the limits the Subclip app
  uses (1 MB per file, 8 MB and 400 files per skill). Previews and example media stay on GitHub unless you pass `--with-examples`.
- A folder with the same name that this tool did not install is left alone. `update` and `uninstall` only touch files
  listed in `.subclip-community.json` next to your installed skills; files you added to a skill folder are kept.
- Skills with review notes (for example "uses outside AI services") print them before they are installed.

## Releases

`npx` installs from the latest GitHub release tag `vX.Y.Z` of the repository, reading `registry.json` and `files.json`
at that tag. Until the first release exists it falls back to `main`. A release therefore pins exactly which skill
files users get, and `--ref v0.2.0` pins an older state.

Maintainers (in the repository root):

```sh
npm run build:files                       # regenerate files.json (hashes of every installable file)
node scripts/release.mjs 0.1.0            # first release; later: patch, minor or major
```

`scripts/release.mjs` checks that the registry is current, regenerates `files.json`, bumps this package's version,
writes release notes (skills added, updated and removed since the previous tag) and prints the commands to run:
commit, `git tag vX.Y.Z`, push, `gh release create`, then `npm pack` and `npm publish`. It runs none of them.
Publishing needs npm browser approval; if the repository's own `.npmrc` interferes, publish the packed tarball from
your home folder: `cd ~ && npm publish <path>/subclip-community-skills-X.Y.Z.tgz --access public`.

Use `SUBCLIP_COMMUNITY_BASE=file:///path/to/checkout` to run the installer against a local checkout (used by the tests).
