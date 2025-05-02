"use client";
import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if it's the user's first visit (or session)
    if (!localStorage.getItem("hasLoadedBefore")) {
      // If not, start the loading animation
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Mark that the page has loaded
            localStorage.setItem("hasLoadedBefore", "true");
            return 100;
          }
          return prev + Math.floor(Math.random() * 10);
        });
      }, 300);
    } else {
      // If the user has already seen the loading screen, skip it
      setProgress(100);
    }
  }, []);

  // Hide the loading screen when the progress reaches 100
  if (progress === 100) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.sphere}></div>
      <div className={styles.text}>
        <p>Initializing Systems...</p>
        <span>{progress}%</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
