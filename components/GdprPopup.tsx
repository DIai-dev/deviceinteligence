'use client';
import { useEffect, useState } from 'react';
import './GdprPopup.css'; // Make sure this path is correct

const GdprPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'true');
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="gdpr-popup">
      <p className="gdpr-text">
        We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. By clicking "Accept", you agree to our use of cookies.
      </p>
      <div className="gdpr-buttons">
        <button className="gdpr-btn-close" onClick={handleClose}>Close</button>
        <button className="gdpr-btn-accept" onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default GdprPopup;
