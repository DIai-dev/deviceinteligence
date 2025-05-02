"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import "./RoundNavbar.css";

export default function RoundNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="round-nav" onClick={() => setOpen(!open)}>
        {open ? (
          <X size={24} color="#FF9600" />
        ) : (
          <Menu size={24} color="#FF9600" />
        )}
        <div className="nav-glow" />
      </div>

      <div className={`side-nav ${open ? "open" : ""}`}>
        <div className="nav-buttons">
          <Link href="/">Home</Link>
          <Link href="/#fuc-section">Use Cases</Link>
          <Link href="/#cta-section">Contact</Link>
        </div>
      </div>
    </>
  );
}
