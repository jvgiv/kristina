import Image from "next/image";
import styles from "./page.module.css";
import Pillars from "./components/home/Pillars";
import Services from "./components/home/Services";
import Quote from "./components/home/Quote";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="sparkle-group">
            <span className="sparkle">✦</span>
            <span className="sparkle">✦</span>
            <span className="sparkle">✦</span>
          </div>
          <p className="hero-eyebrow">Sarasota &amp; Surrounding Areas</p>
          <h1 className="hero-headline">
            A home that
            <br />
            truly <em>shines.</em>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-tagline">
            Detailed &nbsp;·&nbsp; Reliable &nbsp;·&nbsp; Thorough
            <br />
            Residential cleaning done right — every time.
          </p>
          <div className="hero-contact">
            <a href="tel:9413561470">
              <span className="contact-icon">📞</span> 941-356-1470
            </a>
            <a href="mailto:thepolishedhomeco@gmail.com">
              <span className="contact-icon">✉</span>{" "}
              thepolishedhomeco@gmail.com
            </a>
            <a href="http://thepolishedhomeco.com" target="_blank">
              <span className="contact-icon">🌐</span> thepolishedhomeco.com
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-house-logo">
            <svg
              className="house-svg"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 8 L78 36 L78 80 L55 80 L55 58 L35 58 L35 80 L12 80 L12 36 Z"
                stroke="#7a8c72"
                stroke-width="2.5"
                fill="none"
                stroke-linejoin="round"
              />
              <path
                d="M12 36 C18 28 32 15 45 8 C58 15 72 28 78 36"
                stroke="#7a8c72"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
              />
              <rect
                x="36"
                y="28"
                width="18"
                height="16"
                rx="1"
                stroke="#7a8c72"
                stroke-width="1.8"
                fill="none"
              />
              <line
                x1="45"
                y1="28"
                x2="45"
                y2="44"
                stroke="#7a8c72"
                stroke-width="1.2"
                opacity="0.5"
              />
              <line
                x1="36"
                y1="36"
                x2="54"
                y2="36"
                stroke="#7a8c72"
                stroke-width="1.2"
                opacity="0.5"
              />
              <path
                d="M60 12 L63 9 L66 12"
                stroke="#b8986a"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
              />
              <circle cx="63" cy="9" r="1.5" fill="#b8986a" opacity="0.6" />
              <path
                d="M70 22 L72 20 L74 22"
                stroke="#b8986a"
                stroke-width="1.2"
                fill="none"
                stroke-linecap="round"
              />
              <circle cx="72" cy="20" r="1.2" fill="#b8986a" opacity="0.5" />
              <path
                d="M8 50 Q25 46 20 62 Q35 56 30 72"
                stroke="#7a8c72"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                opacity="0.4"
              />
            </svg>
          </div>

          <p className="hero-name">Kristina Kneram</p>
          <p className="hero-title">Residential Cleaning Specialist</p>

          <div className="hero-services-grid">
            <div className="service-tag">Move-Outs</div>
            <div className="service-tag">Deep Cleans</div>
            <div className="service-tag">Weekly</div>
            <div className="service-tag">Biweekly</div>
            <div className="service-tag">Pet Friendly</div>
            <div className="service-tag">Supplies Incl.</div>
          </div>

          <p className="hero-quote">
            &quot;My regular cleans are most companies&apos; deep cleans.&quot;
          </p>
        </div>
      </section>
      <Pillars />
      <Services />
      <Quote />
      <Contact />
    </div>
  );
}
