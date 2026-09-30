# Progress tracking: Dola Automation

### 2026-09-30: Video download extraction fix and v1.1 release

**Status:** Done

#### What changed
- Fixed video output extraction: Bypassed image inspection modal click routine for `ToVideo` modes
- Added multi-tier video URL extraction across `<video>`, `<source>`, `currentSrc`, `src`, and `data-src`
- Added direct DOM anchor downloading for `blob:` and `data:` URLs
- Added automatic fetch fallback in content script if service worker download fails
- Fixed background filename listener to tolerate URL query strings (`?expires=...`) and avoid duplicate filename prefixes
- Added `videoContainer` selector and broadened `imagesContainer` in selector configs
- Bumped extension version to 1.1 in `manifest.json`, configs, and documentation
- Repackaged `Dola-Automation-v1.1.zip` and published GitHub release `v1.1`

#### Files touched
- `manifest.json`: Bumped version to 1.1
- `assets/index.ts--uRBGhw2.js`: Video extraction and direct download pipeline
- `assets/index.ts-Bpxv7r_4.js`: Query-string tolerant filename listener
- `assets/remoteConfig-Yck_vOgu.js`: Added videoContainer and expanded imagesContainer
- `downloaded_config.json`: Updated selector mirror and version
- `README.md`: Updated release badges and install instructions

---

### 2026-09-29: Initial modernization, offline autonomy, and v1.0 release

**Status:** Done

#### What changed
- Embedded 18 Dola DOM automation selectors into `assets/remoteConfig-Yck_vOgu.js` for 100% offline local autonomy
- Removed install and reload browser tab hijacking to external site in `assets/index.ts-Bpxv7r_4.js`
- Added `chrome.runtime.onConnect` listener to eliminate port disconnection errors
- Stripped 19 non-English translation dictionaries from `assets/index.html-zq4i54oX.js` and wrapped English in fallback Proxy (reduced bundle size from 2.06 MB to 1.08 MB)
- Bypassed 10-prompt daily quota limit, enabled persistent Pro status, and neutralized external links
- Removed top header clutter and upgrade banners so control tabs start directly at the top
- Applied Electric Indigo and Slate Navy dark mode theme across CSS variables and PrimeVue tokens
- Generated cute baby dolphin mascot with headphones and cosmic fluid wave on transparent RGBA background
- Cleaned `manifest.json` and stripped Chrome Web Store `_metadata/` signing directory
- Packaged release archive `Dola-Automation-v1.0.zip`
- Published public GitHub repository `Yeamin-Sheikh/Dola-Automation` and created release `v1.0`

#### Files touched
- `assets/remoteConfig-Yck_vOgu.js`: Embedded 18 local DOM selectors
- `assets/index.ts-Bpxv7r_4.js`: Service worker tab hijack removal and connection listener
- `assets/index.html-zq4i54oX.js`: Quota bypass, Pro status, header cleanup, English proxy, PrimeVue palette
- `assets/index-Bli889D0.css`: Electric Indigo and Slate Navy theme variables
- `manifest.json`: Version 1.0, clean metadata, and permission hygiene
- `logo.png`: 512x512 transparent RGBA baby dolphin mascot
- `src/assets/logo.png`: 512x512 transparent RGBA manifest mascot
- `README.md`: Project documentation and architecture guide
- `LICENSE`: MIT license
- `.gitignore`: File exclusions
