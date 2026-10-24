# wyattkriebel.com

Personal research site of Wyatt G. Kriebel. Built with Jekyll and hosted on GitHub Pages at [wyattkriebel.com](https://wyattkriebel.com).

## Editing content

All content lives in `_data/` as YAML, so most updates don't touch any HTML:

| File | What it holds |
| --- | --- |
| `_data/profile.yml` | Name, deck, affiliations, Highlights, In brief, research interests, keywords, contact |
| `_data/publications.yml` | Articles and preprints, newest first (`me: true` bolds your name, `equal: true` adds the equal-contribution asterisk, `selected: true` shows it on the home page) |
| `_data/presentations.yml` | Talks and posters |
| `_data/positions.yml` | Roles, newest first (`home: true` lists a role on the home page) |
| `_data/methods.yml` | The Key resources table on the Experience page |
| `_data/education.yml` | Degrees, honors and societies |

Commit to `main` and GitHub Pages rebuilds the site in a minute or two.

## Structure

- `index.html`, `publications.html`, `experience.html`: the three pages
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
