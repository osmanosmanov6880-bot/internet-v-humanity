# THE INTERNET v. HUMANITY

Интерактивное веб-кино о цифровом суде: выборы зрителя меняют исход истории.

## Quick start

Open `index.html` in your browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Current GitHub status

**This repository currently contains a standalone, self-contained playable cinema preview, not the full CASE ZERO server release.** The existing full source archive is `THE_INTERNET_V_HUMANITY_CINEMATIC_EDITION_v2.7.0_FULL_SOURCE.zip`, generated in the originating ChatGPT conversation. Its Node.js + SQLite API, tests, premium film assets, and 17-scene cinematic engine are **not yet uploaded to GitHub**.

The preview is intentionally standalone: no accounts, no network requests, no paid APIs, no tracking. It can be opened and extended in another development window.

## How to import the original v2.7.0 archive

1. Download `THE_INTERNET_V_HUMANITY_CINEMATIC_EDITION_v2.7.0_FULL_SOURCE.zip` from the originating ChatGPT conversation.
2. Extract the archive locally.
3. Copy the extracted `internet-v-humanity/` folder contents to this repository, replacing the preview `index.html` if desired.
4. Use GitHub Desktop or local Git to commit and push. Never upload `.env`, private SQLite `data/` or backups.
5. Run the original project's `npm test` and follow its README.

Do not represent this GitHub preview as the complete production version until the import is completed.
