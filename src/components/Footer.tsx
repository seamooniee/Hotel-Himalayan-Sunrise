import React from 'react';
import { scrollToSection } from '../hooks/useScroll';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Hotel Himalayan Sunrise</h3>
          <p>Your peaceful escape near Namo Buddha and Dhulikhel with breathtaking sunrise views over the Himalayas.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
            <li><button onClick={() => scrollToSection('rooms')}>Rooms</button></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Namo Buddha Road, Dhulikhel</p>
          <p>📞 +977 123 456 789</p>
          <p>✉️ info@himalayansunrise.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Hotel Himalayan Sunrise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
