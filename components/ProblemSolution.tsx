"use client";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import "./ProblemSolution.css";

export default function ProblemSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible
  });

  return (
    <section className="problem-section" ref={ref}>
      <Parallax
        scale={[0.95, 1.02]}
        opacity={[0, 1]}
        translateY={[60, 0]}
        easing="easeOutQuad"
        className="parallax-wrapper"
      >
        <div
          className={`problem-box fade-in-on-scroll ${inView ? "in-view" : ""}`}
        >
          <div className="problem-content-wrapper">
            {/* Left Side - Image */}
            <div className="problem-image">
              <img src="/about.png" alt="IoT Issue Illustration" />
            </div>

            {/* Right Side - Text Content */}
            <div className="problem-text">
              <h2
                className={`section-title animated-title ${
                  inView ? "animate-char" : ""
                }`}
              >
                {"Who We Are !".split("").map((char, index) => (
                  <span
                    key={index}
                    className={`title-char ${inView ? "animate-char" : ""}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>

              <p className={`section-text ${inView ? "grow-on-scroll" : ""}`}>
              We are a leading platform that offers smart IoT dashboard solutions that give businesses automation, control, and current data in order to improve operations, reduce costs, and accelerate digital transformation. 
              </p>

              <div className="problem-feature-boxes">
                <div className="feature-box">
                  <img src="/sensor.png" alt="Smart Sensor" />
                  <p>Smart Data Flow</p>
                </div>
                <div className="feature-box">
                  <img src="/Realtime.png" alt="Real-time Monitoring" />
                  <p>Real-Time Insights</p>
                </div>
                <div className="feature-box">
                  <img src="/security.png" alt="Secure Connection" />
                  <p>Intelligent Operations Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
