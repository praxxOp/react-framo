# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `CHANGELOG.md` to track changes between releases.
- `LICENSE` file with the full MIT license text.
- `repository`, `homepage` and `bugs` fields in `package.json`, so the npm page links back to GitHub.

### Changed

- README now links to the npm package, the changelog and the license, and the options table wording is cleaner.

## [1.0.0] (2025-07-16)

First public release on [npm](https://www.npmjs.com/package/react-framo/v/1.0.0).

### Added

- `useFrameSequence` hook that plays an image sequence on a `<canvas>` as the page scrolls, driven by `useScroll` and `useTransform` from `motion/react`.
- Frame loading from a `basePath` with zero padded, four digit frame numbers (for example `frame_0001.jpeg`).
- `frames` option to pass an array of full image URLs instead of a `basePath`.
- `fileExtension` option, with `jpeg` as the default.
- `scrollRange` option to map part of the page scroll (values from `0` to `1`) onto the full sequence.
- Cover style drawing: each frame is scaled to fill the viewport, centered, and rendered with high quality image smoothing.
- Preloading of every frame, with the frame for the current scroll position drawn as soon as loading finishes.
- Return values `canvasRef`, `currentIndex` (1 based) and `isLoaded`.
- ES module (`dist/index.mjs`) and CommonJS (`dist/index.js`) builds through Vite library mode.
- Peer dependency support for React 18 and 19 and Motion 12.
- README with installation steps, a usage example, the options and return values, and frame naming guidance.

[Unreleased]: https://github.com/praxxOp/react-framo/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/praxxOp/react-framo/releases/tag/v1.0.0
