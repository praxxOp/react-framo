import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "motion/react";

export function useFrameSequence({
  basePath,
  frameCount,
  fileExtension = "jpeg",
  frames = null,
  scrollRange = [0, 1],
}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const totalFrames = frames?.length ?? frameCount;
  const { scrollYProgress } = useScroll();
  const animatedIndex = useTransform(
    scrollYProgress,
    scrollRange,
    [1, totalFrames]
  );

  const drawFrame = (index, context) => {
    const img = imagesRef.current[index];
    if (!img || !context) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  };

  // 🔁 Preload frames
  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const src = frames
        ? frames[i - 1]
        : `${basePath}${i.toString().padStart(4, "0")}.${fileExtension}`;
      img.src = src;
      img.onload = () => {
        imagesRef.current[i] = img;
        setImagesLoaded((prev) => {
          const newCount = prev + 1;
          if (newCount === totalFrames) {
            // ✅ On load complete, draw based on scroll position
            const scroll = scrollYProgress.get();
            const mappedIndex = Math.floor(
              scroll * (totalFrames / scrollRange[1])
            );
            const clampedIndex = Math.max(1, Math.min(totalFrames, mappedIndex));
            drawFrame(clampedIndex, context);
            setCurrentIndex(clampedIndex);
          }
          return newCount;
        });
      };

      img.onerror = () => {
        console.error("Failed to load image:", src);
      };
    }
  }, [basePath, frameCount, fileExtension, frames]);

  // 🔁 Animate on scroll
  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    return animatedIndex.on("change", (latest) => {
      const index = Math.floor(latest);
      setCurrentIndex(index);
      drawFrame(index, context);
    });
  }, [animatedIndex]);

  return {
    canvasRef,
    currentIndex,
    isLoaded: imagesLoaded === totalFrames,
  };
}
