import React, { useEffect, useRef } from 'react';

export const ScrollAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const frameCount = 240; // 0 to 239
    const currentFrame = (index: number) => (
      `AG Aviation Images/frame_${index.toString().padStart(6, '0')}.png`
    );

    const images: HTMLImageElement[] = [];
    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        images[i] = new Image();
        images[i].src = currentFrame(i);
      }
    };

    const drawImageCover = (img: HTMLImageElement) => {
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Load the first frame
    const img = new Image();
    img.src = currentFrame(0);
    img.onload = () => {
      drawImageCover(img);
    };

    // Preload all frames
    preloadImages();

    let ticking = false;

    const updateFrame = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      // Prevent division by zero if content doesn't scroll yet
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );

      if (images[frameIndex] && images[frameIndex].complete) {
        drawImageCover(images[frameIndex]);
      } else {
        // fallback if not preloaded yet
        const fallbackImg = new Image();
        fallbackImg.src = currentFrame(frameIndex);
        fallbackImg.onload = () => drawImageCover(fallbackImg);
      }
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateFrame);
        ticking = true;
      }
    };

    const handleResize = () => {
      setSize();
      updateFrame();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};
