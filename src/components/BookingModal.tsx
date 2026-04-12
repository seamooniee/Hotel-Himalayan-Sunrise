import React from 'react';
import { useModal } from '../context/ModalContext';
import './BookingModal.css';

const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request sent successfully! We will contact you soon.');
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>
        <h2>Contact & Booking</h2>
        <p>Please fill out the form below to initiate your booking or inquiry.</p>
        
        <form onSubmit={handleBooking} className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required placeholder="John Doe" />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" required placeholder="+1 234 567 890" />
            </div>
          </div>
          
          <div className="form-row">
             <div className="form-group">
              <label>Check In</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Check Out</label>
              <input type="date" required />
            </div>
          </div>

          <div className="form-group">
            <label>Message / Special Requests</label>
            <textarea rows={4} placeholder="I want to book the deluxe room..."></textarea>
          </div>
          
          <button type="submit" className="btn-submit">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
