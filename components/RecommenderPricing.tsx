import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Importing IntersectionObserver hook
import "./RecommenderPricing.css";

const plans = ["Basic", "Pro", "Enterprise"] as const;

type Plan = (typeof plans)[number];

const questions = [
  {
    question: "How many devices will you connect?",
    options: ["1-10", "11-50", "50+"],
  },
  {
    question: "Do you need real-time data analytics?",
    options: ["No", "Maybe", "Yes"],
  },
  {
    question: "What’s your monthly usage budget?",
    options: ["< $20", "$20 - $50", "$50+"],
  },
];

type Answer = string;

const getRecommendedPlan = (answers: Answer[]): Plan => {
  if (answers[2] === "50+" || answers.includes("Yes")) return "Enterprise";
  if (answers.includes("Maybe") || answers.includes("11-50")) return "Pro";
  return "Basic";
};

// New plan details integrated into the pricing cards
const planDetails: { [key in Plan]: {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  description: string;
} } = {
  Basic: {
    title: 'Starter Plan – "Launch & Monitor"',
    subtitle: "Best for: Startups & Small Businesses initiating IoT integration",
    price: "$29/month",
    features: [
      "Manage up to 25 IoT devices",
      "Real-time device health monitoring",
      "1 customizable dashboard"
    ],
    description: "Perfect for businesses taking their first step into intelligent device management."
  },
  Pro: {
    title: 'Growth Plan – "Scale & Optimize"',
    subtitle: "Best for: Growing companies with scaling IoT infrastructure",
    price: "$99/month",
    features: [
      "Manage up to 250 IoT devices",
      "Multiple dashboard views",
      "Advanced AI-driven analytics & insights"
    ],
    description: "Ideal for teams scaling device operations and looking for predictive intelligence."
  },
  Enterprise: {
    title: 'Enterprise Plan – "Automate & Lead"',
    subtitle: "Best for: Enterprises with complex IoT ecosystems",
    price: "Custom Quote",
    features: [
      "Unlimited IoT device support",
      "Multi-location & team collaboration dashboards",
      "AI automation workflows (triggered responses, alerts, maintenance tasks)"
    ],
    description: "Designed for leaders demanding enterprise-grade automation, control, and customization."
  }
};

export default function RecommenderPricing() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [recommended, setRecommended] = useState<Plan | null>(null);
  const [parallax, setParallax] = useState(0);

  // Using IntersectionObserver to track when the pricing section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.1, // Trigger when 10% of the section is in view
  });

  useEffect(() => {
    const handleScroll = () => {
      // Apply parallax effect based on scroll position
      const scrollPosition = window.scrollY;
      setParallax(scrollPosition * 0.1); // Adjust this multiplier to control parallax intensity
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnswer = (option: Answer) => {
    const newAnswers = [...answers, option];
    if (step === questions.length - 1) {
      setRecommended(getRecommendedPlan(newAnswers));
    } else {
      setAnswers(newAnswers);
      setStep(step + 1);
    }
  };

  const restart = () => {
    setAnswers([]);
    setRecommended(null);
    setStep(0);
  };

  return (
    <section className="pricing-section" ref={ref}>
      {/* Animated heading with character-wise animation */}
      <h2
        className={`pricing-title ${inView ? "animate-char" : ""}`}
        style={{
          transform: `translateY(-${parallax}px)`, // Apply parallax effect to the title
        }}
      >
        {"Find the Right Plan for You".split("").map((char, index) => (
          <span
            key={index}
            className={`title-char ${inView ? "animate-char" : ""}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      {!recommended ? (
        <div className="question-box">
          <h3 className="question-text">{questions[step].question}</h3>
          <div className="options-wrapper">
            {questions[step].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="option-btn"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h3 className="recommended-text">
            We recommend the <span>{recommended}</span> Plan
          </h3>
          <button onClick={restart} className="restart-btn">
            Start Over
          </button>

          <div className="cards-wrapper">
            {plans.map((plan) => {
              const details = planDetails[plan];
              return (
                <div
  key={plan}
  className={`pricing-card ${plan === recommended ? "highlight" : ""}`}
  style={{
    transform: `translateY(${parallax * 0.05}px)`, // Parallax
  }}
>
  <h4>{plan} Plan</h4>
  <p>
    {plan === "Basic"
      ? "Launch & Monitor"
      : plan === "Pro"
      ? "Scale & Optimize"
      : "Automate & Lead"}
  </p>
  <p className="price">
    {plan === "Basic" ? "$29" : plan === "Pro" ? "$99" : "Custom Quote"}
    {plan !== "Enterprise" && "/mo"}
  </p>
  <ul className="feature-list">
    {plan === "Basic" && (
      <>
        <li>Manage up to 25 IoT devices</li>
        <li>Real-time device health monitoring</li>
        <li>1 customizable dashboard</li>
        <h3>Perfect for businesses taking their first step into intelligent device management</h3>
      </>
    )}
    {plan === "Pro" && (
      <>
        <li>Manage up to 250 IoT devices</li>
        <li>Multiple dashboard views</li>
        <li>Advanced AI-driven analytics & insights</li>
        <h3>Ideal for teams scaling device operations and looking for predictive intelligence</h3>
      </>
    )}
    {plan === "Enterprise" && (
      <>
        <li>Unlimited IoT device support</li>
        <li>Multi-location & team collaboration dashboards</li>
        <li>AI automation workflows</li>
        <li>Triggered responses, alerts, maintenance tasks</li>
        <h3> Designed for leaders demanding enterprise-grade automation, control, and customization.</h3>
      </>
    )}
  </ul>
  <button
    className="choose-btn"
    onClick={() => {
      document.getElementById("cta-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  >
    Choose {plan}
  </button>
</div>

              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
