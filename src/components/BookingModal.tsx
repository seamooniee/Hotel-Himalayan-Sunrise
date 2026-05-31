import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import './BookingModal.css';

interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
}

const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [formData, setFormData] = useState({
    guest_name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    message: '',
    room_id: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isModalOpen && rooms.length === 0) {
      fetch('/api/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
        .catch(err => console.error("Failed to fetch rooms", err));
    }
  }, [isModalOpen, rooms.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking request sent successfully! We will contact you soon.');
        setFormData({
          guest_name: '',
          email: '',
          phone: '',
          check_in: '',
          check_out: '',
          message: '',
          room_id: ''
        });
        closeModal();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Could not connect to the server. Make sure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
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
            <input 
              type="text" 
              name="guest_name"
              value={formData.guest_name}
              onChange={handleInputChange}
              required 
              placeholder="John Doe" 
            />
          </div>

          <div className="form-group">
            <label>Room Preference</label>
            <select 
              name="room_id" 
              value={formData.room_id} 
              onChange={handleInputChange} 
              required
              className="room-select"
            >
              <option value="">Select a room...</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>
                  {room.name} (Rs. {room.price}/night)
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="john@example.com" 
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required 
                placeholder="+1 234 567 890" 
              />
            </div>
          </div>
          
          <div className="form-row">
             <div className="form-group">
              <label>Check In</label>
              <input 
                type="date" 
                name="check_in"
                value={formData.check_in}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Check Out</label>
              <input 
                type="date" 
                name="check_out"
                value={formData.check_out}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message / Special Requests</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4} 
              placeholder="I want to book the deluxe room..."
            ></textarea>
          </div>
          
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
