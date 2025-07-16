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

bash
Copy
Edit
yarn add react-framo
🚀 Basic Usage Example
jsx
Copy
Edit
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
🔧 Options
Option	Type	Description
basePath	string	Base path to your frames (e.g., /Assets/Extracted-Frames/frame_)
frameCount	number	Total number of frames
scrollRange	[number, number]	Scroll percentage range (e.g., [0, 0.7])
fileExtension	string	File type (e.g., jpeg, png). Default is jpeg.
frames	string[]	Optional: Array of full image URLs (overrides basePath logic)

📤 Return Values
Return Value	Type	Description
canvasRef	React.RefObject	Attach this to your <canvas />
currentIndex	number	Current frame index (1-based)
isLoaded	boolean	Whether all frames are fully preloaded

📁 Folder Structure for Frames
If you're using basePath, your folder should look like this:

swift
Copy
Edit
/Assets/Extracted-Frames/
  ├── frame_0001.jpeg
  ├── frame_0002.jpeg
  ├── ...
  └── frame_0121.jpeg
✅ Make sure file names are zero-padded to match the expected format.

💡 Tips
Use consistent naming like frame_0001.jpeg, frame_0002.jpeg, etc.

Customize scroll animation range with scrollRange.

Use the frames array if your images are hosted remotely or have custom names.

📃 License
MIT © Prathamesh Shelke