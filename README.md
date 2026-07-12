# Portfolio Poetry Collection

This website keeps the original portfolio identity intact while adding a more polished poetry experience.

## Structure

- index.html: landing page with a refined introduction and featured poems
- poems.html: searchable, filterable poetry library
- poem.html: individual poem detail page
- about.html, contact.html: supporting pages that preserve the personal portfolio feel
- css/: styles for layout, responsiveness, and animation
- js/: shared interactions, theme toggling, and poetry data loading
- data/poems.json: the main content source for all poems

## How to add a new poem

1. Place the poem's media into the appropriate folder.
   - Thumbnail image: images/
   - Hero image: images/
   - Video file: assets/videos/
2. Open data/poems.json.
3. Duplicate an existing poem object and replace the values with the new poem details.
4. Fill in the required fields:
   - title
   - slug
   - caption
   - quote
   - category
   - tags
   - mood
   - duration
   - readingTime
   - publishDate
   - featured
   - thumbnail
   - heroImage
   - video
   - poster
   - fullPoem
   - meaning
   - authorNotes
   - inspiration
   - instagramUrl
   - shareUrl
   - language
   - visibility
   - draft
5. Save the file. The homepage, poems page, and individual poem pages will update automatically.

## Tips for managing many poems

- Keep slugs short and lowercase.
- Use consistent categories such as Love, Hope, Memory, Loss, or Existential.
- Set featured to true for up to four poems you want shown prominently.
- Use clear, concise captions and quotes so the collection feels elegant and readable.
- Add high-quality images and keep file names descriptive.

## Local preview

Open index.html in a browser, or serve the folder with a simple static server if you want to test local fetching for poems.json.
