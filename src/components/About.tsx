import React from 'react';
import { useModal } from '../context/ModalContext';

const About: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="about" className="content-section light-section">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title">About Our Hotel</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Experience the magic of the Himalayas from your doorstep.</p>
        </div>
        <div className="about-grid">
          <div className="about-text">
              <p>Welcome to Hotel Himalayan Sunrise, a peaceful family-run hotel and your home away from home in the hills of Kavrepalanchowk. We offer a quiet escape from the city where you can witness breathtaking sunrises over the Himalayas right from your room.</p>
              <p>We are a budget-friendly hotel near Kathmandu that doesn't cut corners on hospitality. Our guests love our comfortable rooms, the good food from our passionate chef, and the simple peace they find here. Whether you are a couple seeking romance, a solo traveler on retreat, or a triple room for small families, we have the perfect space for you.</p>
              <p>Need more than a room? We also have rooms and halls suitable for seminars, meeting halls, and gatherings. From weddings and birthday parties to corporate events, we provide the perfect backdrop with our views and warm hospitality. Remember us for your special moments. </p>            <button className="btn-primary" onClick={openModal}>Contact Us Today</button>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>8.1</h3>
              <p>Booking.com Rating</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Comfortable Rooms</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Room Service</p>
            </div>
            <div className="stat-card">
              <h3>360°</h3>
              <p>Mountain Views</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
