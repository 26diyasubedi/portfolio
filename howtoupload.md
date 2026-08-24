# How to add a new poem

This site has two poem data sources and one detail-page template. Update all of them together so the poem appears both online and when opening the site locally.

## Before you start

Prepare these values:

- A unique title.
- A URL-safe `slug` using lowercase letters and hyphens.
- The complete poem text.
- Language, category, mood, tags, reading time, and publish date.
- A short human-written caption and SEO description.
- A thumbnail image and optional video.
- A real author note and inspiration note.

Use real, specific writing. Avoid repeating the same “A spoken-word poem about...” sentence for every poem. The caption is shown to readers; `seoTitle` and `seoDescription` are shown by search engines and social previews.

## 1. Add media files

Put the files in these folders:

```text
assets/thumbnails/your-thumbnail.jpg
assets/videos/your-video.mp4
```

Use simple filenames with no unnecessary spaces. The thumbnail path must match the JSON exactly. A video is optional; if there is no video, set `video` to an empty string and `audioOnly` to `true` only when that is actually true.

Recommended media checks:

- Use a clear thumbnail that still looks good when displayed small.
- Keep the thumbnail and video inside the repository.
- Confirm the exact capitalization of every filename on the deployed host.
- Add a matching Open Graph image in `assets/og/` only if one exists.

## 2. Add the poem to `data/poems.json`

Open [data/poems.json](data/poems.json), duplicate one complete poem object, and change every field. Give the poem a new numeric `id`; do not reuse an existing id or slug.

A minimum published record looks like this:

```json
{
  "id": 22,
  "title": "Your poem title",
  "subtitle": "A short sentence that sounds like you.",
  "slug": "your-poem-title",
  "caption": "What this poem is really about in one clear sentence.",
  "quote": "A real line from the poem.",
  "category": "Love",
  "tags": ["love", "memory"],
  "mood": "reflective",
  "duration": "1 min 20 sec",
  "readingTime": "2 min",
  "publishDate": "2026-08-24",
  "featured": false,
  "thumbnail": "assets/thumbnails/your-thumbnail.jpg",
  "heroImage": "assets/thumbnails/your-thumbnail.jpg",
  "video": "assets/videos/your-video.mp4",
  "poster": "assets/thumbnails/your-thumbnail.jpg",
  "audioOnly": false,
  "fullPoem": "First line.\n\nSecond stanza.",
  "meaning": "Write what you were feeling or thinking when you wrote it.",
  "authorNotes": "Keep this to the real reason behind the poem.",
  "inspiration": "Name the person, place, conversation, or moment that started it.",
  "instagramUrl": "",
  "shareUrl": "https://diyasubedi.com.np/poem-your-poem-title.html",
  "views": 0,
  "likes": 0,
  "bookmarks": 0,
  "relatedPoems": [],
  "seoTitle": "Your poem title | A Nepali Poem About Its Main Theme",
  "seoDescription": "A short search description that says what the poem is about.",
  "altText": "A literal description of the thumbnail image.",
  "colorTheme": "#8C5A5A",
  "language": "Nepali",
  "visibility": "published",
  "draft": false
}
```

The library only displays records where both conditions are true:

```text
visibility: "published"
draft: false
```

For an unfinished poem, use `visibility: "draft"` and `draft: true`. It will not appear in the public library.

## 3. Update the local fallback

Open [js/poems-data.js](js/poems-data.js) and add the same poem object before the final closing `]` of `window.POEMS_DATA`.

This file matters when opening an HTML file directly with `file://`. Browsers can block `fetch('data/poems.json')` from a local file, so the fallback must stay in sync with `data/poems.json`. Copy the object carefully; do not leave Markdown fences or comments inside the JavaScript array.

The two files should have the same published poem count:

```text
data/poems.json
js/poems-data.js
```

## 4. Create the detail page

Duplicate [poem.html](poem.html) and save it as:

```text
poem-your-poem-title.html
```

Replace the opening metadata and set the slug before the scripts:

```html
<script>
  window.POEM_SLUG = "your-poem-title";
  window.POEM_URL = "https://diyasubedi.com.np/poem-your-poem-title.html";
</script>
```

Update these SEO values in the new page:

- `title`
- `meta[name="description"]`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- The JSON-LD `headline`, `description`, `url`, `datePublished`, `inLanguage`, and image.

Do not leave the template inside Markdown fences. The file must begin with `<!DOCTYPE html>` and end with `</html>`.

## 5. Update discovery and SEO files

Add the new detail URL to [sitemap.xml](sitemap.xml):

```xml
<url><loc>https://diyasubedi.com.np/poem-your-poem-title</loc><lastmod>2026-08-24</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
```

Add the poem as a new `<item>` in [feed.xml](feed.xml), including its title, URL, description, publication date, and category. Update `lastBuildDate`.

Add the poem to the `hasPart` list in the JSON-LD block in [poems.html](poems.html). Keep the URL, title, language, and headline consistent with the poem record.

If the poem is featured on [index.html](index.html), update its static SEO or featured markup too. The dynamic library does not update hand-written JSON-LD automatically.

## 6. Validate before publishing

Run these checks from the project folder:

```powershell
$json = Get-Content data\poems.json -Raw | ConvertFrom-Json
$inline = Get-Content js\poems-data.js -Raw
$json.Count
([regex]::Matches($inline, '"title":')).Count
Test-Path poem-your-poem-title.html
Test-Path assets\thumbnails\your-thumbnail.jpg
```

Then serve the folder so the JSON fetch works:

```powershell
python -m http.server 8000
```

Open:

```text
http://localhost:8000/poems.html
http://localhost:8000/poem-your-poem-title.html
```

Verify:

- The new poem appears in the library.
- Search finds the title and tags.
- The card thumbnail loads.
- The detail page opens from its card.
- The poem title, date, language, and media are correct.
- Browser DevTools has no red errors.
- The sitemap and feed contain the new URL.
- The direct `file://` version still works through `js/poems-data.js`.

## Why a new poem may not appear

Check these in order:

1. `visibility` is exactly `"published"`.
2. `draft` is exactly `false`, not the string `"false"`.
3. The record is valid JSON and has a comma before and after it where required.
4. The same record exists in `js/poems-data.js`.
5. The slug is unique and uses the same spelling everywhere.
6. The browser is loading the newest JavaScript file. Hard refresh after editing.
7. The detail page name is `poem-<slug>.html`.
8. The thumbnail and video filenames match case exactly.
9. Run the site through `python -m http.server` instead of relying only on `file://`.

The most common mistake is updating `data/poems.json` but forgetting `js/poems-data.js`. The most common detail-page mistake is saving Markdown code fences around the HTML.
