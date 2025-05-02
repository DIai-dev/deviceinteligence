"use client"; // Add this line to mark this component as a Client Component

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link"; // Import Link for internal navigation
import "./Footer.css";


const Footer = () => {
  const [developerMode, setDeveloperMode] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const handleDeveloperModeToggle = () => {
    setDeveloperMode(!developerMode);
    if (!developerMode) {
      alert("Developer Mode Activated! 🛠️");
    }
  };

  return (
    <footer className="footer">
      {/* Developer Mode Toggle */}
      <div className="developer-mode">
        <button
          onClick={handleDeveloperModeToggle}
          className="developer-mode-btn"
        >
          {developerMode ? "Disable Developer Mode" : "Activate Developer Mode"}
        </button>
      </div>

      {/* Developer Mode Info */}
      {developerMode && (
        <div className="developer-info">
          <h2>Developer Mode Activated</h2>
          <p>
            This is a special mode for developers. While this mode is active,
            the site content may be hidden or restricted. Use this to inspect
            logs, APIs, or test configurations.
          </p>
          <pre>
            {`
              API Endpoint: https://api.deviceintelligenceai.com/v1/status
              Current API Status: ONLINE
              Debug Logs: Enabled
              Error Reports: Active
            `}
          </pre>
        </div>
      )}

      {/* Main Footer Content */}
      {!developerMode && (
        <div className="footer-container">
          {/* Logo + Pitch */}
          <div className="footer-logo">
  <Link href="/">
    <img src="/Logo.svg" alt="Logo" className="flogo" />
  </Link>
            <p className="footer-pitch">
            We Deliver Smart IoT Dashboards For Real-time Insights, Automation, and Scalability
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            
            <Link href="/#cta-section">Contact</Link>
            {/* Link to the Privacy Policy page */}
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <FaMapMarkerAlt /> 153 Wooster St, <br />
              New York NY 10012, <br />
              United States
            </p>
            <p>
              <FaPhoneAlt /> +18433400537
            </p>
            <p>
              <FaEnvelope /> info@deviceintelligenceai.com
            </p>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <button
              className="social-toggle-btn"
              onClick={() => setShowSocial(!showSocial)}
            >
              {showSocial ? "Hide Social media" : "Click to Show Social Media"}
            </button>
            <div
              className={`footer-social-icons ${
                showSocial ? "show-sphere" : ""
              }`}
            >
              <a
                href="https://x.com/DeviceIntelAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61575415155513"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/deviceintelligence-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>

              <a
                href="https://www.youtube.com/@DeviceIntelligenceAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/youtube.png"
                  alt="YouTube"
                  className="social-icon"
                />
              </a>

              <a
                href="https://www.crunchbase.com/organization/deviceintelligence-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/cb.png"
                  alt="CrunchBase"
                  className="social-icon"
                />
              </a>

              <a
                href="https://www.f6s.com/deviceintelligence-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/f6s.png"
                  alt="F6S"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          {/* IoT Status */}
          <div className="footer-iot-status">
            <div className="scrolling-text">
              🔄 Sensor 1 Online | 🌡️ Temp: 24°C | 📡 Connected Devices: 12 | 🧠
              AI Status: Optimizing...
            </div>
          </div>

          {/* Bottom Line */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} DeviceInteligenceAi. All Rights Reserved.</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
