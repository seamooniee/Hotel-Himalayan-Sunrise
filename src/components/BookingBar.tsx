import React from 'react';
import { useModal } from '../context/ModalContext';
import './BookingBar.css';

const BookingBar: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="booking-bar-wrapper">
      <div className="booking-bar">
        <div className="booking-title">Book now</div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field" onClick={openModal}>
          <div className="field-info">
            <span className="field-label">Check in</span>
            <span className="field-value">DD / MM / YYYY</span>
          </div>
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field" onClick={openModal}>
          <div className="field-info">
            <span className="field-label">Check out</span>
            <span className="field-value">DD / MM / YYYY</span>
          </div>
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field" onClick={openModal}>
          <div className="field-info">
            <span className="field-label">Guests</span>
            <span className="field-value">2 adults, 0 children</span>
          </div>
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        
        <button className="btn-find-room" onClick={openModal}>
          Find the suitable room
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
