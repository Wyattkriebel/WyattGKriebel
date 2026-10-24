# wyattkriebel.com

Personal research site of Wyatt G. Kriebel. Built with Jekyll and hosted on GitHub Pages at [wyattkriebel.com](https://wyattkriebel.com).

## Editing content

All content lives in `_data/` as YAML, so most updates don't touch any HTML:

| File | What it holds |
| --- | --- |
| `_data/profile.yml` | Name, deck, affiliations, Highlights, In brief, research interests, keywords, contact |
| `_data/research.yml` | The Research page: background, each study's question, contributions, approach, findings, figures and outcome, plus other work |
| `_data/publications.yml` | Articles and preprints, newest first (`me: true` bolds your name, `equal: true` adds the equal-contribution asterisk, `selected: true` shows it on the home page) |
| `_data/presentations.yml` | Talks and posters |
| `_data/projects.yml` | Projects page and the home page Projects section (`home: true` lists one on the home page) |
| `_data/positions.yml` | Roles, newest first (`home: true` lists a role on the home page) |
| `_data/methods.yml` | The Key resources table on the Experience page |
| `_data/education.yml` | Degrees, honors and societies |

Commit to `main` and GitHub Pages rebuilds the site in a minute or two.

## Research figures

Figures on the Research page are shown straight from the journals' image servers, with credit, under
the papers' CC BY-NC-ND 4.0 licences. To use your own copies instead, upload the image files to
`assets/figures/` and change that figure's `src` in `_data/research.yml` to the site path (for
example `/assets/figures/sci-rep-fig1.png`), updating `width` and `height` to the file's pixel size.
Figures must stay unmodified to meet the licence.

## The Sidechain game

`sidechain/index.html` is a single-file build of the game from the
[Sidechain repository](https://github.com/Wyattkriebel/Sidechain), served at
`/sidechain/`. To update it, run `python3 pipeline/build_artifact.py` in that
repository and copy `dist/sidechain-standalone.html` over `sidechain/index.html`
here (keeping the description and canonical tags in its head).

## Structure

- `index.html`, `research.html`, `publications.html`, `projects.html`, `experience.html`: the five pages
- `_layouts/default.html`, `_includes/`: page shell, running head and foot, publication entry, icons, structured data
- `assets/css/site.css`: all styles; design tokens are the custom properties at the top
- `assets/js/cite.js`: the Cite toggle and copy buttons
- `assets/fonts/`: self-hosted Schibsted Grotesk and Source Serif 4 (SIL Open Font License)
- `DESIGN.md`: the visual system; `PRODUCT.md`: audience and content rules

## Local preview

```sh
bundle install
bundle exec jekyll serve
```
