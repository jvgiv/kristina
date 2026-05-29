import React from "react";

export default function Contact() {
  return (
    <div className="cta-section reveal" id="contact">
      <div className="cta-left">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-heading">Ready for a home that sparkles?</h2>
        <p>
          Serving Sarasota, Bradenton, and surrounding communities. Reach out to
          book your first clean or ask any questions — Kristina would love to
          hear from you.
        </p>
        <div className="areas-list">
          <span className="area-tag">Sarasota</span>
          <span className="area-tag">Bradenton</span>
          <span className="area-tag">Lakewood Ranch</span>
          <span className="area-tag">Venice</span>
          <span className="area-tag">Siesta Key</span>
        </div>
        <a href="tel:9413561470" className="cta-btn">
          Call to Book <span className="cta-btn-arrow">→</span>
        </a>
      </div>

      <div className="cta-right">
        <h3>Contact Kristina</h3>
        <div className="contact-list">
          <div className="contact-item">
            <div className="c-icon">📞</div>
            <div>
              <p className="c-label">Phone</p>
              <p className="c-value">
                <a href="tel:9413561470">941-356-1470</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="c-icon">✉</div>
            <div>
              <p className="c-label">Email</p>
              <p className="c-value">
                <a href="mailto:thepolishedhomeco@gmail.com">
                  thepolishedhomeco@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="c-icon">🌐</div>
            <div>
              <p className="c-label">Website</p>
              <p className="c-value">
                <a href="http://thepolishedhomeco.com" target="_blank">
                  thepolishedhomeco.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
