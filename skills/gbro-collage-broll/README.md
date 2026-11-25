Adapted for Subclip from [pyang5166/gbro-collage-broll](https://github.com/pyang5166/gbro-collage-broll) by pyang5166, MIT.

# Collage B-roll

<!-- cli:start -->
> Install from your terminal: `npx @subclip/community-skills install gbro-collage-broll`
<!-- cli:end -->

Turn one spoken line of about 5 seconds into a halftone paper-collage B-roll clip that assembles itself from an empty color field. The creator approves the metaphor, then the still, then the animation, so credits go only to approved ideas.

Example request: "Make collage b-roll for the line 'every edit starts from scratch'. Vertical, 5 seconds, burnt orange."

What changed from the original: the Python scripts, Gemini API key setup, ffmpeg steps and evals are gone. Stills and video use the creator's Codex or Grok CLI, or Subclip's own models with a credit quote first. The clip is placed on the Subclip timeline and checked with real frames. A second route builds the assembly as an editable HyperFrames layer. The Chinese-language workflow, gates, color rules and prompt templates are kept in English.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/chessboard-blocking.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/gbro-collage-broll/chessboard-blocking.gif" alt="A paper chessboard becomes a staging plan under a projector beam." width="480"></a><br><sub>A paper chessboard becomes a staging plan under a projector beam. <a href="examples/chessboard-blocking.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/cutting-film.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/gbro-collage-broll/cutting-film.gif" alt="A map, camera and filmstrip assemble before scissors cut the strip." width="480"></a><br><sub>A map, camera and filmstrip assemble before scissors cut the strip. <a href="examples/cutting-film.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/printing-press.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/gbro-collage-broll/printing-press.gif" alt="A printing press turns one flawed picture into a run of copies." width="480"></a><br><sub>A printing press turns one flawed picture into a run of copies. <a href="examples/printing-press.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/film-collage-still.jpg" alt="The finished teal collage shows a camera, a filmstrip and red scissors." width="720"><br><sub>The finished teal collage shows a camera, a filmstrip and red scissors.</sub></p>

<p align="center"><sub>Examples by pyang5166, MIT, from github.com/pyang5166/gbro-collage-broll</sub></p>

<!-- examples:end -->
