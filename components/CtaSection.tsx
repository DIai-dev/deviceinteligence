"use client";
import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./CtaSection.css";

export default function CtaSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [personalMsg, setPersonalMsg] = useState("Ready to join us?");
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        setShowFloatingBtn(false);
      } else {
        setShowFloatingBtn(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (name.length > 1) {
      setPersonalMsg(`Let's do this, ${name}!`);
    } else {
      setPersonalMsg("Ready to join us?");
    }
  }, [name]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the ReCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mdkgnqgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          "g-recaptcha-response": recaptchaValue,
        }),
      });

      const data = await response.json();

      if (data.ok || response.ok) {
        alert("Thank you for contacting us!");
        setName("");
        setEmail("");
        setMessage("");
        setRecaptchaValue(null);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send. Please check your network and try again.");
    }
  };

  return (
    <>
      <section className="cta-section" ref={sectionRef} id="cta-section">
        <div className="fade-overlay top-fade" />
        <div className="fade-overlay bottom-fade" />
        <div className="cta-parallax-bg" />

        <div className="cta-content">
          <h2 className="cta-title">{personalMsg}</h2>
          <p className="cta-subtitle">
          Let's work together—the start of your skilled journey!
          </p>

          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="cta-input"
            />
            <button className="cta-btn hover-anim">
              {name ? `Get Started, ${name}` : "Get Started"}
            </button>
          </form>

          {/* Contact Us Form */}
          <div className="contact-us-form">
            <h3>Contact Us</h3>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="cta-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cta-input"
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="cta-textarea"
                required
              ></textarea>
              <ReCAPTCHA
                sitekey="6Le0OSArAAAAAI57UIVGRuGdd5i2-VQxxDDCeCIF"
                onChange={(value) => setRecaptchaValue(value)}
              />
              <button type="submit" className="cta-btn hover-anim">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {showFloatingBtn && (
  <button
    className="floating-cta hover-anim"
    onClick={() => {
      const section = document.getElementById("cta-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {name ? `Join now, ${name}` : "Join Now"}
  </button>
)}

    </>
  );
}
