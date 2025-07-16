# react-framo ![npm](https://img.shields.io/npm/v/react-framo)

**Version**: `1.0.0`  
A lightweight React hook for creating smooth frame-by-frame scroll animations using canvas.

---

## ✨ Features

- Scroll-based frame-by-frame animations.
- Canvas rendering for smooth performance.
- Plug and play with custom base path or image URLs.
- Exposes loading status and current frame index.
- Fully customizable scroll range and image options.

---

## 📦 Installation

Using npm:

```bash
npm install react-framo

Using yarn: 
```bash 
yarn add react-framo


🚀 Basic Usage Example

import React from "react";
import { motion } from "motion/react";
import { useFrameSequence } from "react-framo";

function App() {
  const { canvasRef, currentIndex, isLoaded } = useFrameSequence({
    basePath: "/Assets/Extracted-Frames/frame_",
    frameCount: 121,
    scrollRange: [0, 0.7],
    fileExtension: "jpeg",
  });

  return (
    <div style={{ height: "300vh", background: "#000" }}>
      {!isLoaded && (
        <p style={{ color: "#fff", position: "fixed", top: 20, left: 20 }}>
          Loading frames...
        </p>
      )}
      <motion.canvas
        ref={canvasRef}
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
        }}
      />
    </div>
  );
}

export default App;

| Option          | Type              | Description                                                           |
| --------------- | ----------------- | --------------------------------------------------------------------- |
| `basePath`      | string            | Base path to your frames (e.g., `/Assets/Extracted-Frames/frame_`)    |
| `frameCount`    | number            | Total number of frames                                                |
| `scrollRange`   | \[number, number] | Scroll percentage range where the animation occurs (e.g., `[0, 0.7]`) |
| `fileExtension` | string            | Extension of your image files (`jpeg`, `png`, etc). Default: `jpeg`   |
| `frames`        | string\[]         | Optional: Array of full image URLs (overrides basePath logic)         |


| Return Value   | Type              | Description                            |
| -------------- | ----------------- | -------------------------------------- |
| `canvasRef`    | `React.RefObject` | Attach this to your `<canvas />`       |
| `currentIndex` | number            | Current frame index (1-based)          |
| `isLoaded`     | boolean           | Whether all frames are fully preloaded |

📁 Folder Structure for Frames
If you use basePath, your folder should look like this:
/Assets/Extracted-Frames/
  ├── frame_0001.jpeg
  ├── frame_0002.jpeg
  ├── ...
  └── frame_0121.jpeg

Use zero-padded filenames to match the default naming logic.

💡 Tips
Use consistent naming like frame_0001.jpeg, frame_0002.jpeg, etc.

Control the scroll animation range with scrollRange (e.g., [0, 0.7])

Use the frames array if your images are hosted remotely or follow custom naming.

📃 License
MIT © Prathamesh Shelke

