# Hifz Player

A Quran memorisation app for iPhone. It plays a surah verse by verse, a range, or the whole surah, with repeats, a pause to recite back, build-up mode, the Arabic text and a Turkish meal.
Your recordings come from the Files app on your iPhone and are kept on the phone only. After the first visit, the app works without internet.

## Put it online (GitHub Pages)
1. On github.com, create a new repository named `hifz-player`.
2. Click "uploading an existing file" (or Add file → Upload files) and drag in everything in this folder: `index.html`, `manifest.webmanifest`, `sw.js`, and the `icons` and `fonts` folders. Click "Commit changes".
3. Go to Settings → Pages. Under "Branch" choose `main` and `/ (root)`, then Save.
4. After a minute or two, the app is at `https://YOUR-USERNAME.github.io/hifz-player/`.

## Install on iPhone
1. Open that address in Safari.
2. Tap Share → Add to Home Screen → Add.
3. Open "Hifz" from the Home Screen, tap "Choose a recording" and pick the surah's MP3 from Files.
   For Yasser Al-Dosari's Al-Fajr, the verse cuts, Arabic text and meal are set up automatically.

## Notes
- `fonts/hamdullah.woff2` is the Shaikh Hamdullah Mushaf font (© Muhammet Abay, all rights reserved), copied from herkul.org.
  A public repository makes it downloadable by anyone. To leave it out, delete the file; the app then uses the Amiri Quran font.
- Recordings you add are not uploaded anywhere and are not part of this repository.
