"use client";

import React, { useState, useEffect, useRef } from "react";
import "./HowItWorks.css";

const cards = [
  {
    image: "/data.png",
    title: "Connect Your Devices",
    text: "Easily integrate your IoT sensors and devices — no complicated setup!",
  },
  {
    image: "/processing.png",
    title: "Smart Data Analysis",
    text: "Our AI instantly analyzes incoming data and detects patterns.",
  },
  {
    image: "/smart.png",
    title: "Real-Time Insight",
    text: "Access live updates and clear visualizations on a user-friendly dashboard. Make decisions faster",
  },
];

export default function HowItWorksSection() {
  const [isActive, setIsActive] = useState(false);
  const [inView, setInView] = useState(false);
  const cardsRef = useRef<any>([]); // Reference to all the cards

  // Triggering animation when the section comes into view
  const handleScroll = () => {
    const element = document.querySelector(".how-it-works-section");
    const rect = element?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }

    // Trigger individual card animations when they come into view
    cardsRef.current.forEach((card: any, index: number) => {
      const cardRect = card?.getBoundingClientRect();
      if (cardRect.top <= window.innerHeight && cardRect.bottom >= 0) {
        card.classList.add("grow-on-scroll");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="how-it-works-section"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <h1
        className={`section-title animated-title ${
          inView ? "animate-char" : ""
        }`}
      >
        {"How It Works".split("").map((char, index) => (
          <span
            key={index}
            className={`title-char ${inView ? "animate-char" : ""}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p className={`section-text ${inView ? "grow-on-scroll" : ""}`}>
      Our platform allows better choices, proactive operations, and measurable business impact by easily integrating IoT devices, using AI to analyze data, and providing immediate information through a user-friendly interface
      </p>
      <div className={`how-it-works-wrapper ${isActive ? "spread" : ""}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Assign the reference to each card
            className={`card card-${index + 1}`}
          >
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
