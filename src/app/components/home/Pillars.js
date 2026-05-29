import React from "react";

export default function Pillars() {
  return (
    <div className="pillars-section" id="about">
      <p className="section-label">Why Choose The Polished Home Co.</p>
      <h2 className="section-heading">Built on four simple promises.</h2>
      <div className="pillars-grid reveal">
        <div className="pillar-card">
          <div className="pillar-icon-ring">🛡️</div>
          <h4>
            Trustworthy
            <br />
            &amp; Reliable
          </h4>
        </div>
        <div className="pillar-card">
          <div className="pillar-icon-ring">✦</div>
          <h4>
            Attention to
            <br />
            Every Detail
          </h4>
        </div>
        <div className="pillar-card">
          <div className="pillar-icon-ring">🤍</div>
          <h4>
            Care for Your
            <br />
            Home Like Ours
          </h4>
        </div>
        <div className="pillar-card">
          <div className="pillar-icon-ring">🌿</div>
          <h4>
            Safe Products
            <br />
            &amp; Pet Friendly
          </h4>
        </div>
      </div>
    </div>
  );
}
