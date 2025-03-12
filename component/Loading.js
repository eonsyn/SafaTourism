import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const messages = [
  "Exploring...",
  "Finding Destinations...",
  "Packing Bags...",
  "Ready to Travel!",
];

function Loading() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 500); // Change messages every 0.5s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 900); // Start fade-out at 0.9s
  }, []);

  return (
    <div
      className={`h-screen flex items-center justify-center bg-black text-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-3xl font-bold">{messages[index]}</h1>
    </div>
  );
}

export default Loading;
