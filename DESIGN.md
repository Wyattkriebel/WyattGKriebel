---
name: Wyatt G. Kriebel
description: A personal research site set like the first page of a life-science journal article, in dark forest green, white and gold.
colors:
  accent: "#173d2a"
  accent-deep: "#0f2a1d"
  on-accent: "#ffffff"
  band: "#173d2a"
  on-band: "#ffffff"
  on-band-2: "#c9d6ce"
  trim: "#c9a54a"
  tint: "#edf3ef"
  tint-edge: "#d0ddd5"
  paper: "#ffffff"
  ink: "#14201a"
  ink-2: "#44514a"
  ink-3: "#5a6861"
  rule: "#d8e1db"
  select: "#ecdfb4"
  accent-dark: "#d9bd6a"
  band-dark: "#123020"
  paper-dark: "#0b1510"
  ink-dark: "#e8eee9"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.55rem + 3.9vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 1.3rem + 0.5vw, 1.5625rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title-entry:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.012em"
  deck:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.2rem, 1.02rem + 0.7vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  panel: "3px"
  control: "4px"
spacing:
  entry: "1.35rem"
  section-meta: "2rem"
  section: "3rem"
  page-gutter: "clamp(1rem, 0.55rem + 2.2vw, 2.5rem)"
components:
  highlights-header:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    padding: "0.55rem 1.3rem 0.5rem"
  highlights-panel:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.1rem 1.3rem 1.3rem 2.35rem"
  cite-panel:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1rem 1.15rem 1.1rem"
  copy-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "0.35rem 0.65rem"
  copy-button-copied:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  nav-link:
    textColor: "{colors.ink-2}"
  nav-link-current:
    textColor: "{colors.ink}"
---

# Design System: Wyatt G. Kriebel

## Overview

**Creative North Star: "The Journal First Page"**

Every page is set like the opening page of a life-science research article: a colour band and running head at the top, a large sans title block with superscript affiliations, then a Highlights box and the article body. The world lives in the frame (band, running head, title block, Highlights strip, three-rule tables, reference-list entries). The reading column stays quiet: a text serif at a real measure on plain white paper.

The palette is dark forest green, white and gold. A forest band carries the running head and title block, and another closes the page as the footer. Gold appears only as trim: the rule under the band, the Highlights strip, list markers, superscripts and link underlines. The reading column sits on plain white. The site is meant to look credible to faculty and hiring managers. It is flat, typographic and print-derived, with no gradients, glass, cards or animation beyond small state transitions.

**Key Characteristics:**
- Forest bands top and bottom, white paper between, gold only as trim.
- Grotesque sans for titles, headings, labels and metadata; text serif for anything read as prose.
- Journal apparatus as the component set: running head, superscript affiliations with footnotes, Highlights, keywords, Correspondence, reference entries with history lines, Cite, three-rule tables.
- Square list markers in gold, solid rules, tabular numerals for dates.

## Colors

Two colours on white: dark forest green does the structure and wayfinding, and gold is trim only.

### Primary
- **Forest** (accent, band): The header and footer bands, section headings, links, the Highlights header strip, publication numbers and filled controls. White text sits on it (on-band); secondary text on the band uses on-band-2.
- **Deep Forest** (accent-deep): Reserved for pressed or emphasised states.

### Secondary
- **Gold** (trim): The 4px rule under the title band and above the footer, the 3px rule under the Highlights strip, square list markers, affiliation superscripts, the current-page underline and link underlines. On white it is never used for text, because it is too light to read. On the forest band it can be text (superscripts, focus rings).

### Neutral
- **Paper** (paper): The page between the bands. Plain white.
- **Forest Ink** (ink, ink-2, ink-3): Body text, secondary text such as authors and keywords, and tertiary text such as dates and history lines. All are green-tinted near-blacks and greys, at least 4.5:1 on paper.
- **Pale Forest** (tint, tint-edge): Ground of the Highlights panel and the Cite panel, plus control outlines on it.
- **Hairline** (rule): Separators between entries.

In dark mode the page turns deep green (paper-dark), the bands go darker (band-dark), and gold takes over as the text accent (accent-dark) for headings and links.

### Named Rules
**The Gold Is Trim Rule.** Gold marks edges and points: rules, markers, underlines, superscripts. It never fills a panel, and it is never body text on white.
**The Two Bands Rule.** Forest bands open and close every page (running head plus title block, and the footer). Everything between them is white paper.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Arial)
**Body Font:** Source Serif 4, optical sizes on (with Georgia)
**Code Font:** system monospace, for BibTeX only

**Character:** A firm newspaper grotesque for the apparatus paired with a calm optical-size text serif. This is the split journals use between front matter and article text.

### Hierarchy
- **Display** (700, clamp 2.5–4.5rem, 1.02, -0.03em): The name in the home title block only.
- **Headline** (700, clamp 2.1–3.25rem): Page titles on inner pages.
- **Title** (700, clamp 1.45–1.5625rem, 1.2): Section headings in forest green. Meta-column headings and the Highlights strip drop to 1rem.
- **Title-entry** (600, clamp 1.125–1.25rem, 1.3): Publication titles, role titles, honours.
- **Deck** (serif 400, clamp 1.2–1.55rem, 1.35): The one-line field statement under a title, max 46ch.
- **Body** (serif 400, 1.0625rem, 1.6): Prose, author lists, bullets; measure capped at 68ch. The In brief lede steps up to 1.125–1.25rem.
- **Label** (sans 400–600, 0.875rem, 1.45): Dates, history lines, footnotes, keywords, actions. Dates use tabular numerals.

### Named Rules
**The Front-Matter Rule.** Sans for anything that labels, serif for anything that is read. Never set a paragraph in the grotesque or a heading in the serif.
**The No Eyebrow Rule.** Headings stand alone. No small labels above headings and no section numbers. The only numbering is the publication count, because it carries information.

## Layout

A centred page up to 74rem with a fluid gutter. The home page opens with a full-width title block closed by a 2px ink rule. Below it, from 60rem up, sits a two-column opener: a 15–19.5rem left column (Highlights, then Keywords and Correspondence) and a flexible right column for the article body. Below 60rem everything stacks in reading order: Highlights, body, Keywords, Correspondence.

Inner pages use a single document column (max 62rem). Entries carry a 9.5rem dates margin from 46rem up and stack below it. Sections are separated by 3rem (home) or 2.75–3.75rem (inner pages). Entries are separated by hairlines with 1.35rem of padding. Headings always have more space above than below.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes only from tonal panels (pale green gel on white) and solid rules. The only inset line is the 2px gold underline on the current navigation item.

## Shapes

Print-square. Panels have a 3px radius and controls a 4px radius. Nothing is pill-shaped. Lists use square markers in forest green. Tables use three rules: a thick top and bottom rule in ink, a thin rule under the header, and hairlines between rows. There are no vertical rules.

## Components

### Running head
- **Style:** A forest band holding the name in 700 sans and a "Research profile" label in tertiary ink (hidden below 40rem), with nav on the right. A hairline closes it.
- **States:** Nav links are ink-2 at 500 weight. Hover turns them forest green. The current page is ink at 650 weight with a 2px gold underline inset.

### Title block
- **Style:** Display name, serif deck, affiliation names in 600 sans with gold superscripts, and footnotes in tertiary label type keyed by the same superscripts.

### Highlights panel (signature)
- **Style:** A forest header strip with white sans text and a 3px gold rule, over a pale green panel. Three to four serif bullets with square gold markers, each under about 85 characters.

### Reference entry
- **Style:** Title in sans 600 (links to the DOI), author list in serif with the site owner's name bold and equal-contribution asterisks in forest green, journal name in italic, then a history line in tertiary label type ("Published …" or "Posted …", plus status). On the publications page a serif summary follows, and entries carry a forest-green count in the left margin.
- **Actions:** A DOI link with a small external-arrow SVG, plus a Cite toggle (a chevron that rotates 180° when open) that reveals the Cite panel.

### Cite panel
- **Style:** A pale green panel holding the citation text and a BibTeX block on paper-white with monospace type that wraps. Each part has a Copy button.
- **Copy button:** Paper ground, forest text, tint-edge border, 4px radius. On hover the border turns forest. In the copied state it fills with forest and the label reads "Copied" for 2s, announced through a live region.

### Key resources table
- **Style:** Three-rule journal table with a sans caption above, sans 600 row headers and serif cells.

## Do's and Don'ts

### Do:
- **Do** keep every claim traceable: publications carry DOIs and history lines exactly as the publisher states them.
- **Do** theme browser surfaces from the palette: selection in the select tint, caret and focus ring in forest (gold on the bands; 2px outline, 3px offset), and a link underline offset of 0.2em.
- **Do** use authored inline SVG icons at 14px with a 1.5–1.6 stroke.
- **Do** respect reduced motion. The only motion is 160–220ms ease-out on state changes and the Cite panel's fade-in.

### Don't:
- **Don't** add a second accent colour, gradients, glass, shadows or cards.
- **Don't** put kickers or eyebrows above headings, or number sections.
- **Don't** set the page on cream or warm paper, or use an italic display serif. That is the editorial look this design avoids.
- **Don't** use monospace outside code (BibTeX).
- **Don't** use emoji or Unicode glyphs as icons.
