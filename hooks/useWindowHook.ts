"use client";

import { useState, useEffect } from "react";

// window resize custom hook
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number | null>(null);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
