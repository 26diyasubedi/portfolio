
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.

- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
# Portfolio Poetry Collection

Hand-built portfolio for Diya Subedi — poems, projects, and a letter page.

## Site structure

- index.html — landing page (hero, featured poems, about snippet, projects, timeline, contact)
- about.html — personal story, timeline, skills
- projects.html — selected work ("exhibition")
- poems.html — searchable/filterable poetry library
- poem.html — single-poem reading page (rendered by js/poems.js from the poem data)
- contact.html — letter-style contact form (Web3Forms) + contact notes
- 404.html — not-found page
- css/ — style.css, responsive.css, animations.css, about.css (shared design system)
- js/ — main.js, theme.js, poems.js, poems-data.js, player.js, video-manager.js, animations.js, particles.js
- data/poems.json — the main content source for poems
- assets/ — videos, thumbnails, heroes, images
- robots.txt, sitemap.xml — SEO support

> Note: poem content exists in TWO places that must be kept in sync:
> `data/poems.json` (fetched at runtime) and `js/poems-data.js` (inline fallback).
> Edit both, or the two copies will drift apart.

---

# HUMANIZING CHECKLIST — removing the "AI voice"

The site's design is intentionally warm and literary, but much of the copy was
written with an AI voice. AI-sounding text is polished, symmetrical, and abstract:
every sentence is "quiet", "gentle", or "thoughtful"; every line is perfectly
balanced; every idea is summarized in the same structure. Real writing has rough
edges, specific details, and actual named experiences.

## The AI "tells" used all over this site (search for these)

1. **The same 6 adjectives repeated everywhere:** `quiet`, `gentle`, `calm`,
   `thoughtful`, `warm`, `care`. They describe almost every sentence and carry no
   real information.
2. **Formulaic triplets:** "poetry, code, and quiet mornings",
   "words, curiosity, and quiet mornings", "literature, design, and code".
   Humans don't normally list their identity in threes.
3. **The "A spoken-word poem about X, Y, and Z" caption pattern.** Every poem
   caption starts with this exact phrase.
4. **Meaning/notes written like literature essays.** `meaning`, `authorNotes`,
   and `inspiration` read like a Wikipedia summary of the poem, not the poet.
5. **Em-dash overuse and "the quiet realization/beauty/truth that..."** — this
   phrase appears in nearly every poem's notes and in page copy.
6. **Symmetric, balanced prose with no specifics.** Generic nouns ("memories",
   "silence", "moments") instead of concrete ones (a rooftop, a bus, a song,
   a burned hand).
7. **altText and SEO blocks from a template:** "A ... symbolizing ...",
   "A reflective ... exploring ...". These are written for machines, but they
   are read by humans when images fail to load.
8. **Every paragraph ends with a tidy moral.** "It is a poem of X as much as it
   is a call to Y." Real people leave things unresolved.

---

## What to change, file by file

### 1. `index.html` (home page)

| Location | Current (AI-sounding) | How to humanize |
|---|---|---|
| `<meta name="description">` (line 6) | "Diya Subedi is a Grade 12 student from Kathmandu whose poetry, philosophy, and curiosity meet technology in a quiet, human portfolio." | Say who you are in one plain line, e.g. "Poems and small web things by Diya Subedi from Kathmandu." Drop "philosophy, and curiosity meet technology". |
| `<meta property="og:title">` + `<title>` (lines 8, 11) | "Words, code, and quiet mornings" | Fine as a brand line, but replace "quiet" if you want to drop the tell. |
| `<meta property="og:description">` (line 9) | "A calm, editorial portfolio centered on poetry, code, and thoughtful digital work." | "Poems and hand-built websites." Simpler is more human. |
| Hero H1 (lines 736–753) | "My words were never meant to impress. They were meant to find someone who needed them." | This is one of the more genuine lines on the site. Keep, or tighten to fewer words. |
| Hero `.lead` (lines 755–758) | "Not every feeling asks to be understood. Some only ask to be remembered." | Balanced epigram = AI-ish. Either make it specific or cut it. |
| Hero stats (lines 764–777) | "Editorial design system across the site", "Core languages carried through the work" | These sound like a resume written by a robot. Replace with real numbers/meanings, e.g. "19 poems", "Nepali + English", "2 years of building". |
| Hero aside (lines 780–790) | "A quiet introduction" / "Some memories fade. Others quietly become poems." / "17-year-old poet from Kathmandu, Nepal." / "Writing about memory, silence, hope..." | "Quietly become poems" is a repeated phrase. Add a real detail: "I write in Nepali and English", "Started writing in Class 10", one actual memory. |
| About section (lines 796–818) | "A life shaped by wondering" / "These poems are pieces of places I have walked through, conversations I never finished..." | "A life shaped by wondering" is vague. Name the actual places/conversations. |
| Projects cards (lines 843–850) | "A reflective personal web experience built with thoughtful typography, gentle transitions, and a calm editorial tone." / "discovery tools designed for reading rather than browsing." | Full AI voice — "reflective", "thoughtful", "gentle", "calm". Say what you actually built and why. |
| Practice / timeline (lines 863–870) | "Poetry as a library — Refined the poems into a searchable reading collection with detailed pages, share actions, and a clearer editorial hierarchy." | This is pure filler. "Made the poems searchable so people can find them by mood." |
| Contact block (lines 879, 884–888) | "Let's create something meaningful together." / "Whether you'd like to discuss poetry, technology, collaborate on a project, or simply share a favorite quote, my inbox is always open." | Remove "collaborate", "meaningful". Say: "If you want to talk about poems, or send feedback, my email is below." |
| Footer (lines 911–912) | "Some journeys end at a destination. Others become poems.(napra)" | Fix the stray "(napra)" typo. The line is already human. |

### 2. `about.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...a poet and builder from Kathmandu creating warm, literary web experiences." | "About Diya — a poet from Kathmandu who also builds websites." |
| Hero subtitle (lines 1348–1350) | "Opening the first chapter of a quiet literary life where poetry and code share the same pulse." | Very AI ("quiet literary life", "share the same pulse"). Replace with a plain line: "I write poems and build small websites." |
| Chapter One bio (lines 1360–1373) | "At first, I never imagined those scattered thoughts would one day become something I would share with the world. They were simply pages I wrote whenever my mind felt too loud..." | This is the best-written part of the site. Keep it — it has real voice. |
| "I don't chase perfect words. I simply try to write honestly enough..." (lines 1370–1371) | — | Good line. Keep. |
| Why I write (lines 1386–1391) | "They made me fall in love with words, and that love slowly became my own voice. I began sharing my poems online partly to become more confident, partly to let more people discover the quiet beauty hidden in language." | "quiet beauty hidden in language" = AI. Name the poets who inspired you, or say what you actually post. |
| Why I build (lines 1397–1402) | "Technology became the way I could shape those moments into something tangible and shareable." | "tangible and shareable" is generic. Give one example of something you built and why. |
| Timeline (lines 1417–1432) | "Discovered that ordinary moments have a quiet gravity when written down." / "Building a quieter digital language that sits between literature, design, and code." | "quiet gravity", "quieter digital language" = heavy AI. Say what happened in plain words. |
| Journal card (lines 1444–1449) | "I begin with a single question: what do I want this page to feel like? I gather moments from the day, let the ideas settle..." | Pretty but wordy. Shorten and make it specific. |
| Skills (lines 1461–1472) | "Writing with honesty, atmosphere, and emotional restraint." / "Creating calm layouts with generous typography and whitespace." / "Building clean interfaces with thoughtful motion." | Every skill has an adjective + abstraction. Replace with one concrete sentence each. |
| Current focus (lines 1485–1489) | "how to make poetry feel natural on the web", "how to let quiet storytelling breathe through interface design", "how to keep building with tools that stay gentle and expressive." | Triple repetition of "how to". Write one plain sentence about what you're actually doing now. |
| Closing (lines 1496–1501) | "More than anything, I want my work to remind people that ordinary moments are never truly ordinary. Sometimes the smallest memory becomes the line that stays with us forever." | "never truly ordinary" is a worn-out AI phrase. Replace with something personal. |
| Quote (lines 1505–1510) | "A bird in a cage mistakes a burning home for a burning world. — Diyaa Kathmandu · 2026" | Note the name is "Diyaa" here vs "Diya" everywhere else — inconsistent. |
| Footer (line 1517) | "Heartfelt work, made quietly and carefully." | "Heartfelt", "quietly", "carefully" — all AI tells. Simplify. |

### 3. `projects.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "...including poetic web experiences and thoughtful digital studies." | "Poetic web experiences" is empty. Name the two projects. |
| Hero subtitle (line 1372) | "Projects built with the same calm attention as the writing." | "calm attention" — replace with a concrete statement. |
| Exhibition intro (line 1389) | "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences." | A textbook AI sentence (triple descriptor). Say what the projects actually are. |
| Project 1 description (line 1425) | "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery." | "content-driven", "reading flow", "closer to a publication than a gallery" = AI. Describe it plainly. |
| Project 2 description (line 1496) | "A restrained, atmospheric homepage that keeps the original identity intact while adding motion, clarity, and better hierarchy." | "restrained, atmospheric", "motion, clarity, and better hierarchy" — all buzzwords. Explain the before/after. |
| Closing (lines 1539–1543) | "Every project begins with curiosity." / "Thank you for visiting this quiet exhibition of work — each piece shaped with the same attention given to a line of poetry." | "quiet exhibition", "same attention given to a line of poetry" = AI simile. Shorten. |
| Footer (line 1551) | "Crafted with words, curiosity, and quiet mornings." | Same triplet as index footer. Pick one. |

### 4. `poems.html`

| Location | Current | How to humanize |
|---|---|---|
| Hero H1 (line 35) | "Every poem is arranged as a living piece of art." | "living piece of art" is vague AI flourish. Say something real like "Poems I've written since Class 10." |
| Page intro (line 36) | "Browse the collection, search by mood, and open any poem to read its full form." | Fine but stiff. "Search by mood, or just scroll." |
| Search placeholder (line 46) | "Search poems, moods, categories, keywords" | Could add a human touch: "Search a poem, a mood, a word…" |

### 5. `poem.html`

| Location | Current | How to humanize |
|---|---|---|
| Footer (line 35) | "Reading peacefully." | Reads like an AI placeholder. Either remove or make it yours ("Thanks for reading.") |

### 6. `contact.html`

| Location | Current | How to humanize |
|---|---|---|
| Meta description (line 6) | "write a letter about poetry, design, or any thoughtful idea worth sharing." | "any thoughtful idea worth sharing" — drop the fluff. |
| Hero handwritten (line 1661) | "If words have found you here, perhaps they were always meant to." | Nice but epigram-style. Keep only if it's really your voice. |
| Form placeholders | "— how shall I address you?", "— so I may reply to you", "— write as if you were writing to a friend…" | These are warm and fine — genuinely human. Keep. |
| Success message (line 1732) | "Thank you for taking the time to write. I will read it with the same care you gave to writing it." | Good, human. Keep. |
| Closing letter (line 1804) | "Until our paths cross again — in words, in silence, or in the quiet space between." | Triple + "quiet". Simplify. |
| Footer (line 1813) | "Crafted with words, curiosity, and quiet mornings." | Same repeated triplet. |
| Hidden extra-notes block (lines 1776–1799) | "Currently reading: The Unbearable Lightness of Being", "Current mood: Reflective" | It's commented out — either delete or uncomment with your real answers. |

### 7. `404.html`

| Location | Current | How to humanize |
|---|---|---|
| H1 + intro (lines 34–35) | "This page drifted away." / "The path you followed does not exist, but the rest of the portfolio is still here." | "drifted away" is a common AI 404 line. Make it yours, e.g. "This page went missing." |
| Footer (line 44) | "Some journeys end at a destination. Others become poems." | Repeated on every page footer. Vary it or remove. |

### 8. `data/poems.json` AND `js/poems-data.js` — the biggest source

Every poem has these fields, and almost all of them are written in the AI voice.
**Edit both files together.**

| Field | The pattern that gives it away | How to humanize |
|---|---|---|
| `subtitle` | A one-line poetic epigram, always with an em-dash: "Some people leave, but their memories learn how to stay." | Write it like a spoken thought, not a blurb. |
| `caption` | Nearly all start "A spoken-word poem about X, Y, and Z" | Drop the template. Say what the poem is in your own words, e.g. "A goodbye I never got to say." |
| `quote` | A tidy aphorism, sometimes repeated from the poem | Should be an actual line from the poem. Fine as-is if genuine. |
| `meaning` | Written like a literature summary: "This poem reflects on... It invites the reader to..." | Write what YOU were feeling, first person: "I wrote this after my best friend left for Australia..." |
| `authorNotes` | Follows the pattern "I wrote this because I wanted to express both grief and hope... It is easy to focus only on what is broken..." | Most contain one real sentence buried inside the fluff. Keep that sentence, cut the rest. |
| `inspiration` | A comma-list of abstract nouns: "memories, the passage of time, the fading of memory, and the quiet beauty of accepting that nothing lasts forever." | Name real things: the exact place, person, film, or conversation. |
| `seoTitle` / `seoDescription` | Template: "A reflective/contemplative/heartfelt ... exploring ..." | These are for search engines but humans see them too. Make them match the humanized caption. |
| `altText` | Template: "A ... symbolizing ..." | Describe what's actually in the image: "The Nepali flag over the Himalayas at sunrise." |

#### Specific poems with the most AI-sounding notes (edit first)

- id 1 — subtitle "The universe does not remember us forever, yet our moments still matter." (tidy aphorism)
- id 8 "Ko Hau Timi?" — meaning "This poem is a meditation on identity and belonging." + inspiration lists "Nature, the water cycle, fleeting dreams, ordinary life..."
- id 12 "Kaha Chha Ra Khusi?" — meaning ends "It invites the listener to confront the fragility of human existence and question what truly gives life meaning." (very textbook)
- id 13 "Birsine Bhayen" — authorNotes "Sometimes love doesn't disappear—it simply changes into memory, and memory becomes another way of loving." (polished aphorism)
- id 14 "I Love Love" — authorNotes "Some of the purest forms of love arrive quietly, without expectation, and disappear before we even realize how much they changed us." ("quietly", "changed us")
- id 15 "Antim Saajh" — meaning "the human tendency to mistake borrowed moments for permanent homes." (AI metaphor)
- id 17 "An Ordinary Dayy" — meaning "It invites us to see the world with greater empathy..."
- id 18 "Mero Desh, Timi Feri Uthnu Chha" — authorNotes "It is easy to focus only on what is broken, but I also wanted to believe that every generation has the ability to build something kinder than the one it inherited." (polished)
- id 19 "It Never Did" — meaning "...the poem quietly suggests that our value never depended on being remembered forever." + inspiration "Thoughts on mortality, the passage of time, the fading of memory across generations, and the quiet beauty of accepting that nothing lasts forever."

The Nepali `fullPoem` text itself is real poetry — do NOT rewrite it. Only the
English `meaning`/`authorNotes`/`inspiration`/`caption`/`subtitle`/`seo` fields.

---

## Non-text fixes to make while you're humanizing

1. **Broken JSON in `data/poems.json`** — poem id 19 ("It Never Did") ends with
   `{ id }` where the closing `}` should be. This breaks the whole file.
2. **Placeholder share URLs** — every `shareUrl` is `https://yourdomain.com/poems/...`.
   Replace with the real domain.
3. **Debug banner** — `showPoemsDebugBanner()` in js/poems.js paints a
   "Poems source: ..." box on the page. Remove the call (or the function).
4. **Footer typo** — index.html line 911 has a stray `(napra)`.
5. **Name inconsistency** — "Diyaa Kathmandu" (about.html quote) vs "Diya Subedi"
   everywhere else. Pick one.
6. **Age inconsistency** — index meta says "Grade 12 student", hero aside says
   "17-year-old". Make them agree.
7. **Theme storage keys differ** — index/poems use `portfolio-theme` (js/theme.js),
   about/projects/contact use `diya-theme`. Unify so the theme persists across pages.
8. **Dead links** — projects.html has `href="#"` for "Live Demo", "View Case
   Study", "GitHub". Point them at real URLs or remove.
9. **Repeated footer line** — "Some journeys end at a destination. Others become
   poems." appears on index, poems, and 404. Vary or drop.

---

## Quick reference: "before → after" examples

- Before: "A content-driven archive with categories, featured work, reading flow, and a dedicated poem view that feels closer to a publication than a gallery."
- After: "Every poem on one searchable page. Filter by mood, or just scroll."

- Before: "The work here is intentionally small in scope, polished in execution, and centered on clear reading experiences."
- After: "Two projects — the poem library you're using right now, and this website."

- Before: "I wanted the poem to sit with them, allowing uncertainty itself to become part of the story."
- After: "I didn't know who I was beyond the words, so the poem just sits in that uncertainty."

- Before: "This poem is a meditation on identity and belonging. Through images of rivers, rain, mountains, and flowers, it reflects on how life is constantly changing..."
- After: "I kept asking myself who I was. The river and the clouds became the only honest answers I had."

## Local preview

Open index.html in a browser, or serve the folder with a simple static server
(`python -m http.server` or `npx serve`) so `data/poems.json` fetches correctly.

## Adding a poem

1. Drop files into `assets/videos/` and `assets/thumbnails/`.
2. Duplicate an existing poem object in `data/poems.json` (and `js/poems-data.js`),
   set `title`, unique `slug`, `caption`, `thumbnail`, `publishDate`,
   `visibility: "published"`, `draft: false`.
3. Save both files.
