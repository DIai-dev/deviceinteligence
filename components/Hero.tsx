"use client";
import React, { useState } from "react";
import Particles from "react-tsparticles";
import Link from "next/link";
import Draggable from "react-draggable";
import "./Hero.css";

const Hero = ({ onGetStartedClick }: { onGetStartedClick: () => void }) => {
  const [positions, setPositions] = useState<{ [key: number]: { x: number; y: number } }>({});

  // Define the original position for each drone (based on orbit)
  const getOriginalPosition = (index: number) => {
    const angle = index * 45;
    const radius = 80 + index * 10;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <section className="hero">
      {/* Top-left Logo */}
      <Link href="/" className="hero-logo">
        <img src="/Logo.svg" alt="DeviceIntelligenceAI Logo" />
      </Link>

      <div className="hero-shape">
        <img
          src="/centerimage.png"
          alt="Center Visual"
          loading="lazy"
          className="hero-image"
        />

        {/* Orbiting & Draggable Drones */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45;
          const radius = 80 + i * 10;
          const originalPosition = getOriginalPosition(i);

          return (
            <Draggable
              key={i}
              position={positions[i] || null} // Use current position if set
              onStart={() => {
                // Pause animation while dragging
                const drone = document.getElementById(`drone-${i}`);
                if (drone) drone.style.animationPlayState = "paused";
              }}
              onStop={(e, data) => {
                // After drag ends, reset position to original orbit position
                setPositions((prev) => ({
                  ...prev,
                  [i]: { x: originalPosition.x, y: originalPosition.y },
                }));

                // Snap back to orbit after drag ends
                const drone = document.getElementById(`drone-${i}`);
                if (drone) {
                  drone.style.transition = "all 0.5s ease";
                  drone.style.transform = `rotate(${i * 45}deg) translateX(${80 + i * 10}px) rotate(-${i * 45}deg)`; // Snap back to the original orbit position
                  setTimeout(() => {
                    drone.style.transition = "none";
                    drone.style.animationPlayState = "running"; // Resume animation
                  }, 500);
                }
              }}
            >
              <img
                id={`drone-${i}`}
                src="/drone.gif"
                alt={`Orbiting Drone ${i + 1}`}
                className={`hero-gif ${i % 2 === 0 ? "orbit" : "orbit reverse"}`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 45}deg) translateX(${80 + i * 10}px) rotate(-${i * 45}deg)`,
                  animationDelay: `${i * 0.3}s`,
                  position: "absolute",
                  transformOrigin: "center",
                  cursor: "grab",
                  zIndex: 10,
                }}
              />
            </Draggable>
          );
        })}

        <div className="hero-content">
          <div className="hero-title-wrapper">
            {"DEVICE".split("").map((char, i) => (
              <h1
                key={i}
                className="hero-title animated-glow"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </h1>
            ))}
          </div>

          {/* Dummy heading for mobile */}
          <h1 className="dummy-heading">DEVICE</h1>

          <h2 className="sub-heading">intelligence</h2>

          <p className="sub-text">
            Welcome to Your Smart, Seamless, AI-powered IoT Dashboard Experience!
          </p>

          <Link href="https://app.deviceintelligenceai.com/" passHref target="_blank">
            <button className="btn-hero pulse">
              <img src="/arrow.svg" alt="Get Started" className="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
