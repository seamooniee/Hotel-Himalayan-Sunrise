import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminBookings.css';

interface Booking {
  id: string;
  room_name: string;
  guest_name: string;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  message: string;
  status: string;
}

const AdminBookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchBookings();
  }, [navigate]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/bookings');
      if (!response.ok) throw new Error('Failed to fetch bookings');
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setUpdatingId(id);
      const response = await fetch(`/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!response.ok) throw new Error('Failed to update status');
      
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    } catch (err) {
      alert('Failed to update booking status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Hotel Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" className="btn-back">← Back to Site</Link>
          <button onClick={handleLogout} className="btn-back" style={{ background: '#fee2e2', color: '#dc2626', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif' }}>Log Out</button>
        </div>
      </div>

      <div className="admin-content">
        <h2>Recent Bookings</h2>
        
        {loading ? (
          <p>Loading bookings...</p>
        ) : error ? (
          <div className="admin-error">{error}</div>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="table-responsive">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Guest</th>
                  <th>Contact</th>
                  <th>Room</th>
                  <th>Check In / Out</th>
                  <th>Status</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id}>
                    <td>#{booking.id}</td>
                    <td>{booking.guest_name}</td>
                    <td>
                      {booking.email}<br />
                      <span className="text-muted">{booking.phone}</span>
                    </td>
                    <td>{booking.room_name}</td>
                    <td>
                      {booking.check_in} <br/> to <br/> {booking.check_out}
                    </td>
                    <td>
                      <select
                        className={`status-select status-${booking.status.toLowerCase()}`}
                        value={booking.status.toLowerCase()}
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        disabled={updatingId === booking.id}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="message-cell" title={booking.message}>{booking.message || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
