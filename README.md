# Portfolio Poetry Collection

This site keeps the original identity intact while tightening the layout, motion, and reading flow.

## Structure

- index.html: landing page with featured poems and a concise personal introduction
- about.html: background, timeline, and strengths
- projects.html: selected work and portfolio studies
- poems.html: searchable, filterable poetry library
- poem.html: dedicated poem reading page with media preview and sharing
- contact.html: contact form and direct links
- css/: shared design system, responsiveness, and motion
- js/: shared interactions, theme toggling, particles, and poetry rendering
- data/poems.json: the main content source for all poems
- icons/favicon.svg: site favicon
- robots.txt and sitemap.xml: SEO support files

## Poetry workflow
## How to add a new poem (2-minute workflow)

1. Drop files into these folders in the repo root:
   - Video (optional): assets/videos/
   - Thumbnail (required): assets/thumbnails/
   - Hero banner (optional): assets/heroes/
   - Additional images (optional): assets/images/poems/

2. Open `data/poems.json` in a text editor.

3. Duplicate an existing poem object and update these fields (minimal required):
   - `title`
   - `slug` (unique, URL-friendly)
   - `caption` (one-line)
   - `thumbnail` (e.g. `assets/thumbnails/your-image.jpg`)
   - `heroImage` (optional, e.g. `assets/heroes/your-hero.jpg`)
   - `video` (optional, e.g. `assets/videos/your-video.mp4`)
   - `publishDate` (ISO date)
   - `visibility`: set to `published`
   - `draft`: set to `false`

4. Save `data/poems.json`.

Notes:
- The site reads `data/poems.json` and will display the new poem on the homepage and library when `visibility` is `published` and `draft` is `false`.
- For best results, supply a thumbnail and poster image sized ~1280×800, and a short thumbnail caption.
- The repo includes `assets/videos`, `assets/thumbnails`, `assets/heroes`, and `assets/images/poems` folders to drop files into.
- If you need automated image optimization (WebP/AVIF/responsive), I can add a small helper script to generate variants.

If you'd like, I can also add a tiny form or script to automate creating the JSON entry from a web UI.

## Instagram note

The profile @uwyiz_ was not publicly reachable from this environment, so reels, covers, and captions could not be downloaded automatically here. The current site is ready for reel-style media and captions once those assets are supplied or exported.

## Local preview

Open index.html in a browser, or serve the folder with a simple static server to test local fetching for poems.json.
