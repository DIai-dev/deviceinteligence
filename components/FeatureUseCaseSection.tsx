"use client";

import React, { useState, useEffect, useRef } from "react";
import "./FeatureUseCase.css";

const features = [
  { icon: "/sensor.png", text: "Real-Time Monitoring", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/Realtime.png", text: "Real-Time Monitoring", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/secure.png", text: "Customizable Dashboards", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/insights.png", text: "Automated Alerts", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/trigger.png", text: "Scalable Integration", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/system.png", text: "Secure Data Management", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
];

const useCases = [
  { icon: "/factory.png", text: "Building Automation", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/agriculture.png", text: "Environmental Monitoring", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/city.png", text: "Fleet Management", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/healthcare.png", text: "Smart Manufacturing", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/energy.png", text: "Energy Management", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
  { icon: "/retail.png", text: "Asset Tracking", button: "More", buttonLink: "https://app.deviceintelligenceai.com/" },
];



export default function FeatureUseCaseSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFlipped(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="fuc-section" ref={containerRef} id="fuc-section">
      <div className={`fuc-wrapper ${isFlipped ? "flipped" : "https://app.deviceintelligenceai.com/"}`}>
        {/* Features */}
        <div className="fuc-column fuc-image-column">
          <img src="/features.png" alt="Features" className="fuc-image" />
        </div>
        <div className="fuc-column fuc-boxes-column">
          <h2 className="fuc-heading">Features</h2>
          <div className="fuc-boxes">
          {features.map((item, i) => (
  <div key={i} className="fuc-box">
    <img src={item.icon} alt={item.text} />
    <p>{item.text}</p>
    <a href={item.buttonLink} target="_blank" rel="noopener noreferrer">
      <button>{item.button}</button>
    </a>
  </div>
))}

          </div>
        </div>

        {/* Use Cases */}
        <div className="fuc-column fuc-boxes-column usecase">
          <h2 className="usecase-heading">Use Cases</h2>
          <div className="fuc-boxes">
            {useCases.map((item, i) => (
              <div key={i} className="usecase-box">
                <img src={item.icon} alt="https://app.deviceintelligenceai.com/" />
                <p>{item.text}</p>
                <a href={item.buttonLink} target="_blank" rel="noopener noreferrer">
                  <button>{item.button}</button>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="fuc-column fuc-image-column usecase">
          <img
            src="/usecase.jpg"
            alt="Use Cases"
            className="usecase-image"
          />
        </div>
      </div>
    </section>
  );
}
