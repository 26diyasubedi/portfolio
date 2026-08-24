# About Page Update Plan

This document is a practical content and design plan for `about.html`. It is written for this site specifically: a personal poetry archive by Diya Subedi, a student from Kathmandu who writes in Nepali and English and builds the website by hand.

The goal is not to make the About page sound like a company biography. It should feel like a carefully edited page from a real writer's notebook: clear enough to scan, personal enough to remember, and useful enough to help a visitor understand who made the work.

## What People Usually Need From an About Page

A useful About page usually answers these questions quickly:

1. Who are you?
2. What do you make or care about?
3. Where are you based or connected to?
4. Why did you start?
5. What can the visitor explore next?
6. How can the visitor contact you?

Strong About pages commonly include:

- A clear one-sentence introduction near the top.
- One authentic portrait or meaningful personal image.
- A short story explaining the motivation behind the work.
- Specific proof of work: projects, publications, poems, awards, or experience.
- A small set of values or working principles.
- A simple next action such as reading the work or sending a message.
- A human contact method, not only a social-media link.

They do not usually need a long list of adjectives, a complete life history, vague claims such as "passionate creator," or visual decoration that competes with the person.

## Recommended Page Structure

### 1. Opening introduction

Keep the current `About` heading, but rewrite the subtitle so it says exactly who you are and what the page contains.

Suggested copy:

> I am Diya Subedi, a poet from Kathmandu. I write in Nepali and English, and I build small, careful places for the words I do not want to lose.

Under it, add two actions:

- `Read my poems` -> `poems.html`
- `Send me a message` -> `contact.html`

The first screen should contain the portrait, the introduction, and one meaningful action. Do not put the entire biography above the first scroll.

### 2. Portrait and visual diary

Use `assets/galary/diya.jpg` as the main portrait. Keep it rectangular or gently rounded rather than adding another oversized circle. A portrait crop around 4:5 or 3:4 will feel more intentional on the About page.

Use the other images in `assets/galary/` as a visual diary, not as random decoration:

- `1.jpg` through `5.jpg`: gallery sequence.
- `diya.jpg`: profile portrait.
- `521431673_17939091333028393_2595131084425235857_n..jpg`: inspect and use only if it adds a different story.

Give the gallery a caption such as:

> A few places, faces, and ordinary moments that stay with me.

Keep one featured image visible in the page layout. Open the full gallery only after the visitor chooses `View the gallery`. Add descriptive alt text for meaningful photos and empty alt text for purely decorative thumbnails.

### 3. Who I am

Keep this as the first long section. The current writing is the strongest part of the page, but edit it for rhythm and accuracy.

Suggested edit:

> I started writing poems in Class 10, mostly during exam season, when a notebook became the easiest place to put everything I could not explain.
>
> Most poems begin with something real: a fight I did not win, a bus ride, a goodbye, or someone leaving. I write before the feeling becomes ordinary.
>
> I am not trying to sound clever. I want someone reading to pause and think, “I know exactly what this is.”

Use short paragraphs. Keep this section around 55 to 70 characters per line on larger screens by setting a readable `max-width`.

### 4. Why I write and why I build

Keep the two-column idea on desktop and stack it on mobile. Remove repeated explanations and give each column one job.

**Why I write**

> I write to hold on to feelings that disappear when I try to explain them aloud. Some poems are about love, some about distance, and some are simply records of a day I did not want to forget.

**Why I build**

> I started learning HTML and CSS because I wanted my poems to live somewhere quieter than a social-media feed. This site lets me decide how the words are read, remembered, and found.

### 5. What I make

Replace the current generic Skills cards with three concrete areas:

- **Poetry:** original poems in Nepali and English.
- **Editorial web design:** readable pages for long text, images, and video.
- **Hand-built websites:** HTML, CSS, and JavaScript that remain understandable and easy to change.

Each item should have one sentence and, if useful, one link. Avoid rating yourself with percentages or progress bars.

### 6. Timeline

Keep the timeline only if every entry marks a real moment. Correct the current entries:

- `Class 10` — Wrote the first poems in a notebook.
- `2024` — Began sharing poems online.
- `2025` — Started rebuilding the poetry archive as a hand-built website.
- `Now` — Finishing Grade 12, revising old poems, and improving the site.

Remove entries such as `11-11` unless you are willing to explain what it means to a stranger. A private reference can remain in a poem, but it does not help a new visitor understand your journey.

### 7. Certificates and proof

Keep the certificate area, but make the purpose clear. A local file picker is only a preview and disappears on another device. For a public portfolio, add approved files to `assets/certificates/` and display them as a small list with:

- Certificate name.
- Issuing organization.
- Year.
- `View certificate` link.

Do not publish certificates containing private addresses, identification numbers, grades, or other sensitive information. If the files should remain private, use authenticated storage instead of putting them in the repository.

### 8. Closing and contact

End with a direct sentence and one clear action:

> If you found a poem that stayed with you, I would like to hear which one.

Add `Write to Diya` linking to `contact.html` and keep the email address visible as a fallback. Social links can remain secondary.

## CSS Improvement Plan

### First priority: remove the inline stylesheet

The About page currently contains a very large `<style>` block. Move it into `css/about.css`, then leave only the stylesheet link in the HTML. This makes the page easier to debug and stops styles from drifting away from the rest of the site.

Use the shared tokens from `css/style.css` instead of redefining `--bg-primary`, `--text-primary`, fonts, shadows, and transitions again. If About needs a special token, give it a page-specific name such as `--about-measure`.

### Use one layout system

```css
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 72px;
}

.about-intro,
.about-section {
  max-width: 70ch;
  margin-inline: auto;
}

.about-identity {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(24px, 5vw, 72px);
  align-items: center;
}
```

Keep body copy at 16px or larger, use `line-height: 1.7` to `1.9`, and keep long reading text between 45 and 75 characters per line. Use `clamp()` for headings, not for body text that becomes too small on phones.

### Reduce decoration

Remove or reduce:

- Full-page grain overlays and animated ambient backgrounds.
- Particle canvases and continuous animation loops.
- Multiple reveal observers and duplicate theme scripts.
- Rotating skill cards and 3D hover effects.
- Decorative symbols that are not meaningful content.
- Shadows and borders on every section.

Keep one signature detail: for example, a thin handwritten rule under the introduction or a quiet image-caption treatment. The page will feel more personal when one detail is deliberate instead of every element moving.

### Make states accessible

Use a visible focus style for links, buttons, gallery controls, and file inputs. Do not remove outlines without replacing them. Use `prefers-reduced-motion` to disable reveal movement and image zoom. Make sure gallery buttons have descriptive labels such as `Open gallery`, `Previous photo`, and `Next photo`.

### Responsive rules

Test these widths:

- 375px: single-column layout, no clipped headings or buttons.
- 768px: two-column identity layout only if both columns remain comfortable.
- 1024px: stable reading width and balanced image/text relationship.
- 1440px: do not allow text to stretch across the entire page.

At 375px and 390px, use 16px side padding, stack the identity columns, make gallery thumbnails horizontally scrollable if needed, and keep all controls at least 44px tall.

## Technical Cleanup Checklist

- Close `.hero-opening` explicitly before the About hero `</section>`.
- Remove unused CSS variables and keyframes after moving styles.
- Load one shared theme implementation instead of duplicating theme code.
- Avoid inline styles such as `style="..."`; use named classes.
- Remove production `console.log` calls.
- Keep one source of truth for the current year.
- Add `width` and `height` attributes to important images to reduce layout shift.
- Use `loading="lazy"` only for below-the-fold images; load the first portrait normally.
- Add a useful `og:image` for the About page.
- Check that the page has one `h1` and that each later heading describes its section.
- Verify the certificate and gallery paths on the deployed domain, not only with `file://`.

## Research Notes

The content recommendations above follow common About-page usability patterns: answer identity, purpose, proof, and next action quickly; use authentic visuals; and make contact easy. They also follow plain-language guidance from the UK Government Service Manual: keep copy short and direct, use descriptive headings, use sentence case, and do not make users decipher the interface.

Useful references:

- GOV.UK, “Writing for user interfaces”: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- Nielsen Norman Group, “About Us Pages”: https://www.nngroup.com/articles/about-us-pages/
- Anthropic Frontend Design guidance: `anthropic-skills/skills/frontend-design/SKILL.md`
- Local readable-measure guidance: `designer-skills/ui-design/skills/readable-measure/SKILL.md`
- Local typography guidance: `designer-skills/ui-design/skills/typography-scale/SKILL.md`

## Recommended Order

1. Fix the About hero HTML structure and remove unused/commented markup.
2. Move the inline About CSS into `css/about.css` and use shared tokens.
3. Rewrite the opening introduction and timeline with confirmed facts.
4. Add the portrait, gallery caption, and permanent certificate links only after reviewing privacy.
5. Simplify motion, add focus states, and test the four target widths.
6. Add the contact action, Open Graph image, and final content metadata.

## Expanded Art Direction

### The central idea

Design the page as a short walk through Diya's creative life. The visitor should move through this order:

`meet Diya` -> `understand the beginning` -> `see the work` -> `understand the craft` -> `see evidence of growth` -> `choose what to do next`

This is more memorable than a collection of unrelated cards because every section answers the next natural question.

### Desktop wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ DIYA SUBEDI              Home  Poems  Projects  Contact      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ABOUT DIYA                         portrait photograph      │
│  A poet from Kathmandu.              short caption            │
│  One honest sentence.                [View gallery]           │
│  [Read poems] [Write to me]                                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ WHO I AM                                                     │
│ One readable column of personal story, 55–70ch wide          │
│                                                              │
├───────────────────────────────┬──────────────────────────────┤
│ WHY I WRITE                   │ WHY I BUILD                  │
│ one short paragraph           │ one short paragraph           │
├───────────────────────────────┴──────────────────────────────┤
│ SELECTED WORK                                                 │
│ 3 real links: poems, archive, website                        │
├──────────────────────────────────────────────────────────────┤
│ HOW I WORK                                                   │
│ notebook detail + short process paragraph                    │
├──────────────────────────────────────────────────────────────┤
│ JOURNEY                                                      │
│ Class 10 -> 2024 -> 2025 -> Now                              │
├──────────────────────────────────────────────────────────────┤
│ CERTIFICATES / RECOGNITION                                   │
│ verified items only, with year and issuer                    │
├──────────────────────────────────────────────────────────────┤
│ If a poem stayed with you, [write to Diya]                   │
└──────────────────────────────────────────────────────────────┘
```

### Mobile sequence

On a phone, keep the same order but use one column:

1. Name, identity sentence, portrait, and one primary action.
2. Gallery preview and caption.
3. Who I am.
4. Why I write, then why I build.
5. Selected work.
6. Process and timeline.
7. Certificates, only if they are genuinely useful.
8. Contact closing.

Do not move the timeline or certificates above the story on mobile. Those are supporting details, not the reason someone opens the page.

## What Makes This Page More Interesting

### 1. Add a specific creative artifact

Use one real artifact instead of another decorative card:

- A cropped notebook page, if you are comfortable publishing it.
- A short handwritten line photographed in natural light.
- A still frame from a poem reading video.
- A simple scan of an early poem with the date and a one-sentence caption.

The caption should explain why the artifact matters. For example: `The first notebook where I stopped copying poems and started writing beside them.` Do not use an artifact without a story.

### 2. Add a “start here” recommendation

People do not know which poem to open first. Add a small editorial recommendation after the introduction:

> Start with `Bihani Ko Batash` if you want something about devotion. Start with `It Never Did` if you want something quieter.

Link each title to its real poem page. Keep this to two or three choices and update it when your strongest work changes.

### 3. Show work, not only describe it

Add a “Selected work” section with three real entries:

- A favorite poem with its language and theme.
- The searchable archive with the number of published poems.
- The hand-built website with the technologies used.

Each entry needs a title, one useful sentence, and one action. Avoid skill percentages, progress bars, and claims that cannot be verified.

### 4. Use a quiet pull quote

Choose one original line from your own writing or process and set it apart in larger type. Label it with its poem title or `from the notebook`. Do not use an unattributed quote or a quote that sounds like generic inspiration.

### 5. Give the gallery a point of view

Do not label it only `Gallery`. Use a title with a reason to look:

- `Places I keep returning to`
- `A few ordinary moments`
- `Scenes behind the poems`

Choose the title only if it is true of the images. A specific title creates curiosity without needing animation.

## Interaction Ideas That Fit This Site

Use no more than two or three of these:

- Gallery opens in a modal with thumbnails, previous/next controls, Escape support, and descriptive alt text.
- Timeline entries reveal in order, but remain fully visible when reduced motion is enabled.
- A “copy poem link” action can show a short `Link copied` confirmation.
- A poem recommendation can change through a simple `Another poem` button, using existing poem data.
- A short audio player can remain optional and user-initiated; never autoplay.

Avoid scroll-jacking, cursor trails, floating particles, long loading screens, parallax portraits, and text that appears word by word. Those effects make a reading page feel like a template and can hide the content from keyboard and reduced-motion users.

## Content Matrix

| Section | Visitor question | Content needed | Visual treatment |
| --- | --- | --- | --- |
| Opening | Who is this? | Name, place, role, action | Portrait plus generous whitespace |
| Who I am | What shaped the work? | 2–4 short paragraphs | Plain reading column |
| Why I write | Why poetry? | One personal reason | Small typographic divider |
| Why I build | Why this website? | One practical reason | Pair with Why I write |
| Selected work | What has she made? | 3 real links | Compact link list, not feature cards |
| Process | How does she work? | Drafting and editing habit | Notebook artifact or caption |
| Journey | What changed over time? | Confirmed dates only | Short timeline |
| Certificates | What recognition exists? | Issuer, title, year, link | Simple evidence list |
| Contact | What can I do next? | Email and contact action | One clear closing action |

## CSS Design Tokens For About

Use a small token layer and remove page-specific duplicates:

```css
:root {
  --about-measure: 66ch;
  --about-wide: 1100px;
  --about-space-1: 0.5rem;
  --about-space-2: 1rem;
  --about-space-3: 2rem;
  --about-space-4: clamp(3rem, 8vw, 7rem);
  --about-rule: 1px solid var(--border);
}

.about-page {
  max-width: var(--about-wide);
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
}

.about-copy,
.about-section p {
  max-width: var(--about-measure);
}

.about-section {
  margin-block: var(--about-space-4);
}
```

Recommended rules:

- Use one radius family: 0, 4px, or 8px. Do not mix circles, 20px cards, and pill shapes everywhere.
- Use one shadow for elevated media only. Most text sections should use whitespace and rules.
- Use `gap` and `margin-block` rather than repeated `<br>` elements.
- Use `aspect-ratio` for photos so loading never shifts the page.
- Use `object-fit: cover` for portraits and `object-fit: contain` for certificates.
- Use `:focus-visible` with a clear two-colour contrast ring.
- Keep body text 16px or larger and headings in sentence case.
- Keep labels short and informative: `Poems`, `Process`, `Contact`, not decorative phrases that do not help navigation.

## What To Remove From The Current About Page

Prioritize these deletions during the next code pass:

1. The full-page grain, ambient background, and particle systems.
2. Duplicate `:root` variables and duplicate dark-mode definitions.
3. Inline CSS and inline JavaScript from the HTML document.
4. Multiple reveal observers and separate page-specific scroll logic.
5. Rotating skill cards, 3D hover effects, and animated decorative ornaments.
6. Empty lines, unused commented sections, and production `console.log` calls.
7. Any date, award, or certificate that cannot be confirmed.

The page will become more impressive by making the content easier to trust and remember, not by increasing the number of visual effects.

## Research Summary

The external guidance available during this review was strongest on plain language and user-centred structure rather than a single “best” About-page template. GOV.UK recommends short direct copy, descriptive headings, sentence case, clear link text, and avoiding unnecessary explanation. Nielsen Norman Group's About-page and storytelling articles are useful references but were not extractable through the local browser fetcher, so their URLs are included for manual reading rather than quoted as verified text here.

The local design skills add the visual principles most relevant to this page: readable measure, a restrained type scale, clear hierarchy, meaningful structure, and one memorable signature detail. For this site, that signature should be a real notebook or gallery moment, not an animated background.

## Research-backed decision record

This section records the decisions behind the recommendation, so the page can be improved deliberately instead of accumulating more effects.

### What the visitor is trying to do

An About visitor is usually not looking for a complete biography. They are deciding whether to trust the person, understand the work, and choose what to open next. The page therefore has three jobs:

1. Establish identity: Diya Subedi, poet from Kathmandu, writes in Nepali and English.
2. Explain motivation: what started the writing and why this archive exists.
3. Route the visitor: read a poem, see the work, or make contact.

Everything else is supporting evidence. If a section does not help one of those jobs, remove it or move it below the closing call to action.

### The correct information hierarchy

Use this order because it follows the visitor's natural questions:

| Order | Visitor question | Page answer | Recommended treatment |
| --- | --- | --- | --- |
| 1 | Who is this? | Name, place, roles, one honest sentence | Editorial hero with portrait |
| 2 | Where should I begin? | Two or three selected poems | Small “Start here” list |
| 3 | What shaped the work? | Origin story and motivation | Plain reading column |
| 4 | Why poetry and websites? | Two concise reasons | Two balanced text columns |
| 5 | What does she make? | Poems, editorial pages, hand-built sites | Compact linked list |
| 6 | How does she work? | Drafting and editing habit | Real notebook or process artifact |
| 7 | What has changed? | Only verified milestones | Short chronological timeline |
| 8 | What next? | Contact and poem archive links | Clear closing action |
| 9 | What proves it? | Public, privacy-safe certificates | Optional appendix after contact |

The current page starts with a centered title, then asks the reader to pass through several decorative sections before reaching useful routes. The revised page should make the first two routes visible in the first viewport and reserve the timeline and certificates for later.

## Exact current-page audit

### Keep, but edit

- `Who I am`: this is the most convincing content. Keep the exam-season detail and the idea of wanting a reader to think “oh, that's exactly it.” Remove repeated setup and fix the double space before “a fight.”
- `Why I write` and `Why I build`: the distinction is useful. Cut each to one focused paragraph and avoid repeating that the site is hand-built.
- `How I make`: keep the late-night draft and cutting-overwritten-lines idea. It is a strong, specific process detail.
- `Current focus`: keep only after confirming Grade 12 and the performance claim about phones in Nepal. Make it a short “Now” note, not a large card.
- Dark mode, skip link, reading progress, and back-to-top: keep only if they remain reliable after the CSS consolidation.

### Rewrite or move

- The subtitle currently says “I'm Diyaa.” Confirm the spelling and use one consistent name everywhere. Suggested replacement: `I am Diya Subedi, a poet from Kathmandu. I write in Nepali and English, and I build quiet places for words that should not disappear.`
- Move the `hero-quote` inside the hero or delete it. It currently appears after the closing section, so it reads like an orphaned afterthought. Use an original line only when it is clearly labelled with the poem or notebook source.
- Rename `Skills` to `What I make`. “Skills” makes the page sound like a CV and invites vague self-rating. Link each item to a real part of the site.
- Rename `Timeline` to `A short journey` or `How I got here`. Keep four or fewer entries unless every extra date adds a meaningful, verifiable change.
- Rename `Certificates` to `Recognition` only if there are real public items. Otherwise remove the section until there is a permanent, privacy-reviewed asset.
- Replace `Thank you for reading` with a useful closing question: `Did a poem stay with you?` followed by `Read the poems` and `Write to Diya`.

### Delete from the public experience

- `11-11` unless a stranger can understand what happened and why the date matters.
- `Something that i can't describe.` This is honest as a private note but not useful as public context. Replace it with a concrete fact or remove it.
- The browser-only certificate uploader. It suggests a public portfolio feature but stores nothing for another visitor to see.
- Decorative ornaments before every heading. Keep one signature mark and use rules, whitespace, or meaningful labels for the rest.
- “No frameworks, no generators” as a selling point. State what was built and why; do not make the page defend its toolchain.

## Proposed content blueprint

### 1. Hero: meet the person

The hero should not be only the word `About`. The first heading should tell the visitor who they are meeting.

Recommended structure:

```text
ABOUT DIYA
Diya Subedi
Poet from Kathmandu. Writes in Nepali and English. Builds this archive by hand.
[Read the poems] [Contact Diya]
portrait image
caption: Kathmandu / words, notebooks, and unfinished drafts
```

Use one portrait at approximately 4:5. The image should be visible without requiring a gallery interaction. Put the first action beside or directly below the identity statement. Avoid a centered stack of ornament, giant title, quote, metadata pills, and delayed animations; that sequence looks like a generated portfolio template.

### 2. Start here: give the visitor a first choice

Add two or three real poem links immediately after the hero. Each needs a reason, not a rating:

- `Bihani Ko Batash` — for a poem that feels like devotion and morning air.
- `It Never Did` — for something quieter and more unresolved.
- One Nepali or bilingual poem chosen as the clearest entry point.

Verify every title and slug against `data/poems.json`. Never invent a theme description that the poem does not support. A simple list with title, language, and one-line note is more credible than three oversized cards.

### 3. Who I am: let the story breathe

Use three short paragraphs, maximum four. A useful draft is:

> I started writing poems in Class 10, mostly during exam season, when a notebook became the easiest place to put everything I could not explain.
>
> Most poems begin with something real: a fight I did not win, a bus ride, a goodbye, or someone leaving. I write before the feeling becomes ordinary.
>
> I am not trying to sound clever. I want someone reading to pause and think, “I know exactly what this is.”

Keep the drop cap only if it survives the mobile layout cleanly. It is optional; the sentence itself should carry the opening.

### 4. Why I write / why I build

Use two unboxed columns on desktop and one column on mobile:

**Why I write**

> I write to hold on to feelings that disappear when I try to explain them aloud. Some poems are about love, some about distance, and some are simply records of a day I did not want to forget.

**Why I build**

> I wanted my poems to live somewhere quieter than a social-media feed. This site gives each one room to be read, remembered, and found again.

Do not give these paragraphs separate animations. The contrast between the ideas is enough visual structure.

### 5. What I make

Use three text-led links rather than rotated cards:

1. `Poetry` — Original poems in Nepali and English. Link to `poems.html`.
2. `Reading spaces` — Pages designed for long text, images, and video. Link to the strongest relevant project.
3. `Hand-built web work` — HTML, CSS, and JavaScript that remain understandable and easy to change. Link to `projects.html`.

Show evidence through the destination pages. Do not use percentages, skill bars, star ratings, or unsupported claims.

### 6. Process artifact

Choose one real object: a cropped notebook page, a handwritten line, or a still from a reading. Add a caption that explains why it matters:

> The first notebook where I stopped copying poems and started writing beside them.

If no artifact is available or safe to publish, use the existing process paragraph as plain text. A fake notebook texture is worse than an honest empty space.

### 7. Journey

Use only confirmed milestones, in chronological order:

- `Class 10` — Wrote the first poems in a notebook.
- `2024` — Began sharing poems online.
- `2025` — Started rebuilding the archive as a hand-built website.
- `Now` — Finishing Grade 12, revising old poems, and improving the site.

Confirm these facts before publishing. If a date is uncertain, use a less precise label such as `The beginning` rather than presenting a guess as history.

### 8. Closing action

End the story with the visitor's next move, not a decorative thank-you:

> If you found a poem that stayed with you, I would like to hear which one.

Primary link: `Write to Diya` -> `contact.html`.

Secondary link: `Read all poems` -> `poems.html`.

Keep the email address visible if it is intended for public contact. Social links should remain secondary.

### 9. Recognition, only when permanent

Do not ship a local file picker as proof. For each approved certificate, publish a stable image or PDF with its title, issuer, and year. Review every file for addresses, ID numbers, grades, signatures, or other private data before committing it. If there are no safe public items, omit the section completely.

## Visual direction: make it personal without looking generated

### Chosen direction: “a living notebook”

The page should feel like an edited notebook translated into a calm digital archive: one real photograph, generous reading space, a few precise rules, and occasional handwritten character. The risk is the artifact or image caption, not a pile of effects.

### Palette

The current cream-and-brown palette is attractive but is also one of the most recognizable AI portfolio defaults. Keep the warmth only if it is part of the wider site; introduce contrast through ink, paper, and one botanical accent rather than more beige gradients.

Suggested named tokens to test against the shared site theme:

- Ink: `#241F1B` for primary text.
- Paper: `#F8F5EF` for the reading background.
- Clay: `#A85F45` for one active accent and links.
- Moss: `#68745A` for a secondary wayfinding accent.
- Rule: `rgba(36, 31, 27, 0.18)` for quiet dividers.
- Night ink: `#151515` for dark mode, with warm white text.

Use the accent sparingly. Do not use gradients as the identity, and do not let every component have a tinted surface.

### Type

Use three roles maximum:

- Display: one characterful serif for the name and section headings.
- Body: one highly readable serif or humanist sans, at least 16px.
- Utility: one sans for navigation, labels, dates, and buttons.

The current page loads six font families and then uses many of them. That makes the visual voice feel assembled rather than authored. Pick two families plus a system fallback, remove unused font imports, and let hierarchy come from size, weight, and spacing.

Recommended scale:

| Role | Desktop | Mobile | Line height |
| --- | ---: | ---: | ---: |
| Body | 17px | 16px | 1.7–1.85 |
| Small utility | 12–14px | 12–14px | 1.4 |
| Section heading | 32–40px | 28–32px | 1.15 |
| Hero name | 64–88px | 44–56px | 1.0–1.08 |

Keep letter spacing at `0` for body copy. Reserve wide tracking for short uppercase labels only. Constrain long copy to approximately `60–68ch`.

### Layout and surfaces

- Use a wide hero grid: copy on one side, portrait on the other.
- Use unboxed text sections separated by spacing and one-pixel rules.
- Use cards only for repeated items such as selected poems or a certificate list.
- Keep one radius family, preferably `0`, `4px`, or `8px`; do not combine 24px cards, circles, and pills.
- Give the portrait the strongest shadow or border treatment. Text does not need a shadow.
- Let the footer be quiet and functional; do not add another ornament after the closing action.

## What specifically makes the current page feel AI-generated

This is not a judgement about the writing. It is a pattern diagnosis. Change the following:

| Current signal | Why it reads as generic | Replace with |
| --- | --- | --- |
| Warm cream background plus brown serif | Common default for “poet portfolio” prompts | A more specific paper/ink system with one clay or moss accent |
| Six imported font families | Looks assembled and weakens authorship | Two intentional families |
| `❧`, `✦`, `✧`, `◈`, `✎`, and `+` before headings | Ornament has no information value | One mark, or labels that describe the section |
| Grain, ambient gradients, and floating particles | Continuous atmosphere competes with reading | One still image or notebook artifact |
| Delayed title, subtitle, quote, and metadata reveals | Content is hidden for choreography | Show identity immediately; use one short entrance transition |
| Rotated handwritten skill cards | A familiar generated “creative” trope | Linked work list with actual evidence |
| “Chapter One” and chapter-like labels | Implies a literary structure the page does not consistently use | Plain labels such as `Who I am`, `Process`, `Journey` |
| Certificate file picker | Feels like unfinished product functionality | Permanent, privacy-reviewed proof or no section |
| Orphaned quote after closing section | Breaks narrative order | Put the quote in context or remove it |
| “Something that i can't describe” | Vague and under-edited | A concrete event or deletion |
| Multiple theme and animation implementations | Technical duplication creates inconsistent behavior | Shared theme script and one animation layer |

The page becomes more memorable when it contains one detail only Diya could provide: a true story, a real image, an exact poem recommendation, or a genuine notebook line.

## Interaction and accessibility requirements

- Make all identity copy visible without JavaScript.
- Keep one `h1`; use descriptive `h2` headings in sentence case.
- Use link text that names the destination: `Read the poems`, not `Click here`.
- Give the portrait useful alt text; use empty alt text for decorative images.
- Keep focus indicators visible with a two-colour contrast ring.
- Ensure buttons and links have at least a 44px touch target.
- Do not autoplay audio or video. Any media should be user initiated.
- Support `prefers-reduced-motion`; content must not depend on reveal classes becoming visible.
- If a gallery is added, include labelled previous/next controls, Escape to close, focus return, and a non-modal fallback link.
- Keep the theme toggle's `aria-pressed` state synchronized and use one theme class naming convention.

## Performance and implementation notes

1. Fix the missing closing tag for `.hero-opening` before changing layout.
2. Move the inline About stylesheet into `css/about.css` in one controlled pass.
3. Remove duplicate About tokens that shadow `css/style.css`; retain only page-specific variables.
4. Choose one theme implementation. The inline script currently overlaps with `js/theme.js`.
5. Remove the inline particle loop, or remove the canvas entirely. A reading page does not need a continuously animated canvas.
6. Remove `console.log` from production markup and scripts.
7. Add `width`, `height`, and suitable `loading` values to images. Do not lazy-load the first portrait.
8. Add an About `og:image` only after choosing a public image with a stable path.
9. Test with JavaScript disabled: identity, story, links, and timeline should still work.
10. Test the deployed paths, not only `file://`, especially gallery images and certificate links.

## Validation checklist

### Content

- [ ] The first viewport answers who Diya is and offers a poem link.
- [ ] Every date and certificate is confirmed by Diya.
- [ ] Every recommended poem title links to an existing page.
- [ ] Every paragraph says one thing and uses specific nouns and verbs.
- [ ] The final section ends with a clear contact or reading action.

### Visual

- [ ] The portrait is visible without opening a modal.
- [ ] The page has one memorable signature detail, not many competing effects.
- [ ] Text uses a readable `60–68ch` measure on desktop.
- [ ] No section looks like a nested card stack.
- [ ] Heading hierarchy is clear in a screenshot with colour removed.

### Responsive and technical

- [ ] Check 375px, 390px, 768px, 1024px, and 1440px widths.
- [ ] No heading, button, caption, or image overlaps another element.
- [ ] The mobile hero stacks cleanly and keeps the primary action visible.
- [ ] Reduced motion shows all content immediately.
- [ ] Keyboard focus is visible throughout the page.
- [ ] The browser console is free of new errors and logs.

## Research sources and limits

The recommendations are grounded in these sources and local project guidance:

- GOV.UK Service Manual, “Writing for user interfaces”: https://www.gov.uk/service-manual/design/writing-for-user-interfaces. The retrieved guidance supports short direct copy, clear headings, descriptive link text, sentence case, one `h1`, and not adding explanatory text when the interface can be clearer.
- Nielsen Norman Group, “About Us Pages”: https://www.nngroup.com/articles/about-us-pages/. Use this as a secondary reading on trust and About-page content; the page was not extractable through the available fetcher, so no specific claim from it is presented as verified here.
- Local `frontend-design` skill: subject-specific visual direction, one justified risk, deliberate typography, meaningful structure, and restraint with motion.
- Local `readable-measure` skill: 45–75 characters per line, with approximately 66 characters as a useful target.
- Local `typography-scale` skill: body text at least 16px, a limited scale, 1.2 heading leading, 1.5–1.75 body leading, and wide tracking only for short labels.

## Recommended build sequence

1. Confirm facts, name spelling, poem recommendations, image permissions, and certificate privacy.
2. Repair the hero markup and rewrite the hero, story, timeline, and closing copy.
3. Build the new hero and `Start here` route first; verify the first viewport at 375px and desktop width.
4. Consolidate CSS and theme logic before adding any new visual feature.
5. Replace Skills with linked work, then add the process artifact if a real one exists.
6. Remove particles, excess ornaments, rotating cards, and delayed content reveals.
7. Add accessibility, reduced-motion, image dimensions, metadata, and permanent asset paths.
8. Run the content, responsive, keyboard, reduced-motion, and console checks above.

The success criterion is not “more sections” or “more animation.” It is that a new visitor can understand Diya in ten seconds, find a poem in one click, remember one true detail, and know how to write back.
