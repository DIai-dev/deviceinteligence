"use client";
import React, { useState, useEffect, useRef } from "react";
import "./AiFaq.css";

type QA = {
  question: string;
  answer: string;
};

const sampleData: QA[] = [
  {
    question: "Which sectors stand to gain from your IoT dashboard?",
    answer:
      "Our platform is perfect for any organization looking for automation and real-time analytics, including manufacturing, logistics.",
  },
  {
    question: " How safe is the information gathered and sent?",
    answer:
      "To keep your data safe and secure, we adhere to the highest security standards, deploy enterprise-grade encryption.",
  },
  {
    question: "Can your platform expand with our company?",
    answer:
      "Yes, our technology is completely scalable, from modest installation to substantial business operations. interfere with workflows.",
  },
  {
    question: "How much time does it take to put the system into place?",
    answer: 
      "Through specialized onboarding and technical assistance, most clients experience full integration in 2–4 weeks",
  },
  {
    question: "Do you provide personalized metrics or dashboards?",
    answer:
      "Of course. We build dashboards and KPIs to meet your specific company needs, offering an adapted user experience for the best possible data.",
  },
];

export default function AIChatFAQ() {
  const [chat, setChat] = useState<QA[]>([]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    setChat(sampleData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeadingVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chat]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newQA: QA = {
      question: input,
      answer: "Let me think... (AI-generated answer will be here soon!)",
    };
    setChat([...chat, newQA]);
    setInput("");
  };

  return (
    <section className="faq-chat-section">
      <h2
        ref={headingRef}
        className={`chat-heading ${headingVisible ? "grow-in" : ""}`}
      >
        Ask Me Anything
      </h2>

      <div className="chat-box" ref={containerRef}>
        {chat.map((qa, i) => (
          <div key={i} className="chat-item">
            <div className="chat-question">🤖 {qa.question}</div>
            <div className="chat-answer">💬 {qa.answer}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
    </section>
  );
}
