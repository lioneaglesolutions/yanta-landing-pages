# Photo library

Source photography pulled from the old Wix site (www.yanta.com.au), kept here as a
working library. Images actually used by the site live in `src/assets/img/site/` —
these are the wider set to draw from.

- `yanta-logo-square.jpg` — the Yanta logo padded to a 1811×1811 square on white,
  for profile pictures, OG images and anywhere a square crop is needed.
- `yanta-projects/` — the 11 images from the old `/projects` gallery, converted to JPEG.
  Note `yanta-project-05.jpg` is the logo, not a project photo.

Raw untouched originals are downloaded to `_raw/` subfolders, which are gitignored
(~375MB, single files up to 32MB). Re-fetch them from `static.wixstatic.com/media/<id>`
if needed — the id list is recoverable by scraping the old site.
