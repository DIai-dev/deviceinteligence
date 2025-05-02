"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Rajiv Perera",
    role: "Operations Manager",
    quote: "Our organization workflow was totally changed by the dashboard's real-time data. We've raised the following, reduced downtime by 40%, and can now address problems nearly instantly.",
    image: "/rajiv.jpg",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    role: "CTO",
    quote: "This platform offered real-time visibility, strong data protection, and smooth IoT integration. It is now an essential part of our energy management strategy and is scalable and easy to use.",
    image: "/samantha.jpg",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Facility Director",
    quote: "We have avoided thousands of possible problems thanks to predictive notifications. Our proactive maintenance planning has greatly increased asset lifespan and operational continuity.",
    image: "/charles.jpg",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "VP of Strategy",
    quote: "Our team is now able to make decisions based on data more quickly. The AI-powered dashboards increase trust and efficiency by offering transparent, immediate information across all operations.",
    image: "/jennifer.jpg",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="testimonial-section">
      <h2 ref={titleRef} className="testimonial-title animated-title">
        {"What Our Clients Say".split("").map((char, index) => (
          <span
            key={index}
            className={`title-char ${inView ? "animate-char" : ""}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-card-inner">
              <div className="testimonial-card-front">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-card-back">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
