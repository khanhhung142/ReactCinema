import React, { useState, useEffect } from "react";

export default function useWindownResize() {
  const [size, setSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setSize({
      width: innerWidth,
      height: innerHeight,
    });
  };
  return { width: size.width, height: size.height };
}
