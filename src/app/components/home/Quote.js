import React from "react";

export default function Quote() {
  return (
    <div className="quote-section reveal">
      <blockquote className="big-quote">
        <span className="quote-marks">&quot;</span>
        My regular cleans are most companies&apos; deep cleans.
      </blockquote>
      <div className="quote-attribution">
        <div className="quote-line"></div>
        <span>Kristina Kneram</span>
        <small>Founder, The Polished Home Co.</small>
      </div>
    </div>
  );
}
