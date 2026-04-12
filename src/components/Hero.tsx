import React from 'react';
import { scrollToSection } from '../hooks/useScroll';
import { useModal } from '../context/ModalContext';
import bgImg from '../assets/bg.png';
import hotelImg from '../assets/hotel.png';
import './Hero.css';

const Hero: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="main-title">
            WELCOME TO <br/>
            <span className="hotel-line">HOTEL</span> HIMALAYAN SUNRISE
          </h1>
          <h2 className="subtitle">Affordable Rooms & Mountain Views</h2>
          
          <p className="description">
            Enjoy a breathtaking sunrise from your bed at our family-run hotel. We offer cheap and comfortable rooms with free WiFi, good food, and a peaceful escape near Namo Buddha and Dhulikhel. Perfect for couples, solo travelers, and groups. Book your weekend getaway today!
          </p>
          
          <div className="cta-buttons">
            <button className="btn-explore" onClick={() => scrollToSection('rooms')}>Explore Now</button>
            <button className="btn-availability" onClick={openModal}>Check Availability</button>
          </div>
          
          <div className="find-us-glass">
            <div className="find-us-text">
              <strong>Find Us:</strong> <a href="https://www.booking.com" target="_blank" rel="noreferrer">www.booking.com</a>
            </div>
            <div className="find-us-divider"></div>
            <div className="rating">
              <span className="rating-score">8.1</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={hotelImg} alt="Hotel Himalayan Sunrise Building" className="hotel-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
