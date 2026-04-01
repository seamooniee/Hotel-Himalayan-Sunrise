import React from 'react';
import { useModal } from '../context/ModalContext';
import roomImg from '../assets/deluxe_room.png';
import hotelImg from '../assets/hotel.png';

const Rooms: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="rooms" className="content-section dark-section">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title text-white">Our Rooms</h2>
          <div className="title-underline center-underline"></div>
          <p className="section-subtitle text-light">Wake up to nature's masterpiece.</p>
        </div>
        
        <div className="rooms-grid">
          <div className="room-card">
            <div className="room-image" style={{ backgroundImage: `url(${roomImg})` }}></div>
            <div className="room-content">
              <h3>Deluxe Mountain View</h3>
              <p>Experience luxury with panoramic views of the Himalayas right from your bed.</p>
              <div className="room-features">
                <span>King Bed</span>
                <span>Balcony</span>
                <span>Free WiFi</span>
              </div>
              <div className="room-footer">
                <span className="price">$45<span>/night</span></span>
                <button className="btn-outline" onClick={openModal}>Book Now</button>
              </div>
            </div>
          </div>
          
          <div className="room-card">
            <div className="room-image" style={{ backgroundImage: `url(${hotelImg})` }}></div>
            <div className="room-content">
              <h3>Standard Double Room</h3>
              <p>Cozy and comfortable room perfect for couples or solo travelers.</p>
              <div className="room-features">
                <span>Queen Bed</span>
                <span>En-suite</span>
                <span>Free WiFi</span>
              </div>
              <div className="room-footer">
                <span className="price">$30<span>/night</span></span>
                <button className="btn-outline" onClick={openModal}>Book Now</button>
              </div>
            </div>
          </div>
          
          <div className="room-card">
            <div className="room-image" style={{ backgroundImage: `url(${roomImg})` }}></div>
            <div className="room-content">
              <h3>Family Suite</h3>
              <p>Spacious suite designed for families offering comfort and amazing views.</p>
              <div className="room-features">
                <span>2 Queen Beds</span>
                <span>Living Area</span>
                <span>Free WiFi</span>
              </div>
              <div className="room-footer">
                <span className="price">$65<span>/night</span></span>
                <button className="btn-outline" onClick={openModal}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
