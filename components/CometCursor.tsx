// components/CometCursor.tsx
'use client';
import { useState, useEffect } from "react";

const CometCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update cursor position when mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener for mouse move
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smoothly transition the trail to the cursor's position
  useEffect(() => {
    const interval = setInterval(() => {
      setTrailPosition((prev) => {
        const diffX = cursorPosition.x - prev.x;
        const diffY = cursorPosition.y - prev.y;
        const newX = prev.x + diffX * 0.2; // Smooth transition
        const newY = prev.y + diffY * 0.2; // Smooth transition
        return { x: newX, y: newY };
      });
    }, 10); // Update every 10ms for smooth effect

    return () => clearInterval(interval);
  }, [cursorPosition]);

  return (
    <div
      style={{
        position: "fixed",
        top: `${trailPosition.y - 8}px`, // Centering the cursor
        left: `${trailPosition.x - 8}px`, // Centering the cursor
        width: "15px",
        height: "15px",
        backgroundColor: "#D42300",
        borderRadius: "50%",
        boxShadow: "0 0 30px 15px #FF9600",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.1s ease-out",
        mixBlendMode: "lighten",
      }}
    />
  );
};

export default CometCursor;
