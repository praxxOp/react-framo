# react-framo ![npm](https://img.shields.io/npm/v/react-framo)

---

## 🎬 Demo

[▶️ **Try it**](https://athlic.netlify.app/)

---

**Version**: `1.0.0`  
A lightweight React package for creating smooth frame-by-frame scroll animations.

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
```

---

## 🚀 Basic Usage Example

```jsx
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
```

---

## 🔧 Options

| Option          | Type              | Required | Description                                                                     |
| --------------- | ----------------- | -------- | ------------------------------------------------------------------------------- |
| `basePath`      | string            | ✅        | Base path for your frames, excluding frame number and file extension            |
| `frameCount`    | number            | ✅        | Total number of frames                                                          |
| `scrollRange`   | [number, number]  | ❌        | Scroll percentage range for animation (between `0` and `1`) — default: `[0, 1]` |
| `fileExtension` | string            | ❌        | File extension for images — default: "jpeg"                                   |
| `frames`        | string[]          | ❌        | Alternative to `basePath` — use array of full image URLs instead                |

---

## 📤 Return Values

| Return Value  | Type                | Description                          |
|--------------|---------------------|--------------------------------------|
| canvasRef    | React.RefObject      | Attach this to your `<canvas />`     |
| currentIndex | number               | Current frame index (1-based)        |
| isLoaded     | boolean              | Whether all frames are fully loaded  |

---

## 📁 Folder Structure for Frames

If you're using `basePath`, your folder should look like this:

```
/Assets/Extracted-Frames/
  ├── frame_0001.jpeg
  ├── frame_0002.jpeg
  ├── ...
  └── frame_0121.jpeg
```

✅ **Make sure file names are zero-padded to match the expected format.**

---

## 💡 Tips

- Use consistent naming like `frame_0001.jpeg`, `frame_0002.jpeg`, etc.
- Customize scroll animation range with `scrollRange`.
- Use the `frames` array if your images are hosted remotely or have custom names.

---

## 📃 License

MIT © Prathamesh Shelke

