import React from 'react';
import { useModal } from '../context/ModalContext';
import restaurantImg from '../assets/restaurant_food.png';

const Restaurant: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="restaurant" className="content-section offset-bg">
      <div className="section-container">
        <div className="restaurant-layout">
          <div className="restaurant-image-container">
             <img src={restaurantImg} alt="Hotel Restaurant" className="restaurant-img" />
          </div>
          <div className="restaurant-text">
            <h2 className="section-title">Dine With A View</h2>
            <div className="title-underline"></div>
            <p>Our in-house restaurant serves a delicious fusion of traditional Nepalese cuisine and continental favorites. We source organic ingredients from local farmers to bring you fresh and healthy meals.</p>
            <ul>
              <li>✓ Authentic Nepalese Thali</li>
              <li>✓ Freshly brewed organic coffee</li>
              <li>✓ Panoramic dining experience</li>
              <li>✓ Special dietary requests accommodated</li>
            </ul>
            <button className="btn-primary mt-4" onClick={openModal}>Reserve a Table</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
