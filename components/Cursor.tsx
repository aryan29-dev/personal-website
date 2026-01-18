"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    >
      <div className="h-75 w-75 rounded-full bg-blue-400/15 blur-3xl" />
    </div>
  );
}
