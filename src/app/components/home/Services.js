import React from 'react'

export default function Services() {
  return (
    <div className="services-section reveal" id="services">
  <div className="services-intro">
    <p className="section-label">What We Offer</p>
    <h2 className="section-heading">Every service, immaculately executed.</h2>
    <p>From your first deep clean to your weekly refresh, every visit is treated like the most important one. No shortcuts — just spotless results.</p>
  </div>

  <div className="services-grid">
    <div className="service-card">
      <span className="service-num">01</span>
      <div className="service-info">
        <h3>Standard Cleaning</h3>
        <p>Weekly or biweekly maintenance cleaning that goes far beyond the surface. Dusting, vacuuming, mopping, kitchens, bathrooms — thorough every time.</p>
      </div>
      <span className="service-icon">✨</span>
    </div>
    <div className="service-card">
      <span className="service-num">02</span>
      <div className="service-info">
        <h3>Deep Cleaning</h3>
        <p>A top-to-bottom intensive clean covering baseboards, appliances, inside cabinets, light fixtures, and every overlooked corner of your home.</p>
      </div>
      <span className="service-icon">🪟</span>
    </div>
    <div className="service-card">
      <span className="service-num">03</span>
      <div className="service-info">
        <h3>Move-Out Cleaning</h3>
        <p>Leave your old home spotless for the next residents — or secure your security deposit back. Ideal for real estate showings too.</p>
      </div>
      <span className="service-icon">🏡</span>
    </div>
    <div className="service-card">
      <span className="service-num">04</span>
      <div className="service-info">
        <h3>Pet-Friendly Cleaning</h3>
        <p>Safe products that are gentle for your pets and your family, while still delivering a deeply clean and odor-free environment.</p>
      </div>
      <span className="service-icon">🐾</span>
    </div>
  </div>
</div>
  )
}
