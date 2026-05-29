import React from "react";

export default function Header() {
  return (
    <div>
      <nav>
        <a href="#" className="nav-logo">
          The <span>Polished</span> Home Co.
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="tel:9413561470" className="nav-cta">
          Book a Clean
        </a>
      </nav>
    </div>
  );
}
