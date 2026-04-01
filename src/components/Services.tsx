import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="content-section light-section">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline center-underline"></div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚗</div>
            <h3>Airport Transfer</h3>
            <p>Hassle-free transportation from and to the airport for your convenience.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Free High-Speed WiFi</h3>
            <p>Stay connected with your loved ones with our complimentary internet.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏔️</div>
            <h3>Guided Tours</h3>
            <p>Explore Namo Buddha and surrounding hiking trails with our expert guides.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔥</div>
            <h3>Campfire & BBQ</h3>
            <p>Enjoy cozy evenings under the stars with our campfire arrangements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
