<div align="center">

# Dola Automation

Batch prompt automation and media downloader Chrome extension for Dola.

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Version](https://img.shields.io/badge/Version-1.1-4F46E5.svg)](https://github.com/Yeamin-Sheikh/Dola-Automation/releases/tag/v1.1)
[![Platform](https://img.shields.io/badge/Platform-Chrome-4285F4.svg)](https://www.google.com/chrome/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

Dola Automation is a Chrome extension for batch prompt automation and automatic media downloading on Dola (dola.com/chat). It runs inside Chrome's native side panel, allowing you to queue multi-line prompts, upload prompt files, configure randomized intervals, and save generated video and image files directly to local storage.

The extension operates with full offline autonomy. All 18 DOM automation selectors run locally in the browser with no external server dependencies, user accounts, or prompt limits.

---

## Supported automation modes

| Mode | Input | Dola target | Output |
|---|---|---|---|
| Text to Video | Written prompt list | Video generation models | MP4 video files |
| Image to Video | Reference image + prompt | Image-to-video pipeline | MP4 video files |
| Components to Video | Multi-component assets + prompt | Multi-ingredient video pipeline | MP4 video files |
| Text to Image | Written prompt list | Image generation models | JPEG / PNG / WebP image files |
| Image to Image | Reference image + prompt | Image variation pipeline | JPEG / PNG / WebP image files |
| Components to Text | Image attachments + prompt | Multimodal chat | Text responses |

---

## Capabilities

- Batch prompt input: Enter prompts manually, upload `.txt` files, or import `.xlsx` and `.csv` spreadsheets.
- Execution controls: Configure prompt concurrency and random delay intervals to avoid rate limits.
- Automated media extraction: Detects finished generation outputs and triggers background downloads automatically.
- Model and aspect ratio controls: Direct selection of generation models and aspect ratios.
- Custom file routing: Define download folder names and filename prefixes for structured media organization.
- Local selector engine: Bundles all 18 Dola DOM selectors locally, eliminating external configuration dependencies.
- English interface: Stripped of secondary language dictionaries to reduce bundle size to 1.1 MB.
- Streamlined layout: Control tabs start directly at the top of the side panel without header clutter.
- Electric Indigo theme: High-DPI optimized theme with complete slate navy dark mode support.

---

## Installation

### Option 1: Load from release archive

1. Download `Dola-Automation-v1.1.zip` from the [Releases page](https://github.com/Yeamin-Sheikh/Dola-Automation/releases/tag/v1.1).
2. Extract the zip archive to a local folder on your computer.
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Turn on the Developer mode toggle in the top-right corner.
5. Click the "Load unpacked" button in the top-left menu.
6. Select the extracted folder containing `manifest.json`.

### Option 2: Clone from source

1. Clone the repository locally:
   ```bash
   git clone https://github.com/Yeamin-Sheikh/Dola-Automation.git
   ```
2. In Google Chrome, go to `chrome://extensions/` and enable Developer mode.
3. Click "Load unpacked" and select the cloned directory.

---

## Architecture

- **Manifest:** Manifest V3 extension with native Chrome side panel integration (`src/ui/side-panel/index.html`).
- **Selector storage:** Local DOM selectors embedded directly in `assets/remoteConfig-Yck_vOgu.js`.
- **Framework:** Vue 3, PrimeVue component primitives, and Tailwind CSS.
- **Service worker:** `assets/index.ts-Bpxv7r_4.js` with background download routing and persistent connection handling.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
