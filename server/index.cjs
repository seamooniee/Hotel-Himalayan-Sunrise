const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Room, Booking, ContactMessage } = require('./models.cjs');

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel-himalayan-sunrise';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    seedDatabase();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Database Seeding Logic
async function seedDatabase() {
  try {
    // Seed Rooms
    const roomCount = await Room.countDocuments();
    if (roomCount === 0) {
      console.log('Seeding initial rooms...');
      const defaultRooms = [
        {
          name: 'Deluxe Sunrise Room',
          type: 'Deluxe',
          price: 3500,
          status: 'available',
          description: 'Experience luxury with panoramic views of the Himalayas right from your bed.',
          features: ['King Bed', 'Balcony', 'Free WiFi', 'AC'],
          imageUrl: 'deluxe_room.png'
        },
        {
          name: 'Standard Double Room',
          type: 'Standard',
          price: 2500,
          status: 'available',
          description: 'Cozy and comfortable room perfect for couples or solo travelers.',
          features: ['Queen Bed', 'En-suite', 'Free WiFi', 'Hot Water'],
          imageUrl: 'deluxe_room.png'
        },
        {
          name: 'Family Suite',
          type: 'Suite',
          price: 5500,
          status: 'available',
          description: 'Spacious suite designed for families offering comfort and amazing views.',
          features: ['2 Queen Beds', 'Living Area', 'Free WiFi', 'Mini Bar'],
          imageUrl: 'deluxe_room.png'
        }
      ];
      await Room.insertMany(defaultRooms);
      console.log('Rooms seeded successfully!');
    }

  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// ==========================================
// API Endpoints
// ==========================================

// --- Rooms ---
app.get('/api/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error('Fetch rooms error:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

app.post('/api/rooms', async (req, res) => {
  try {
    const { name, type, price, status, description, features, imageUrl } = req.body;
    const room = new Room({ name, type, price, status, description, features, imageUrl });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    console.error('Create room error:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
});

// --- Bookings ---
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('room_id');
    const formattedBookings = bookings.map(b => {
      const bObj = b.toJSON();
      bObj.room_name = b.room_id ? b.room_id.name : 'Unknown Room';
      return bObj;
    });
    res.json(formattedBookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const { room_id, guest_name, email, phone, check_in, check_out, message } = req.body;
    
    let targetRoomId = room_id;
    // Find a room if room_id is not specified or empty (for backward compatibility)
    if (!targetRoomId || targetRoomId === '1' || typeof targetRoomId === 'number') {
      const firstRoom = await Room.findOne();
      if (firstRoom) {
        targetRoomId = firstRoom._id;
      } else {
        return res.status(400).json({ error: 'No rooms available for booking' });
      }
    }

    // Verify room exists and is active/valid
    if (!mongoose.Types.ObjectId.isValid(targetRoomId)) {
      // Find room by name or just use default if check fails
      const defaultRoom = await Room.findOne();
      if (defaultRoom) {
        targetRoomId = defaultRoom._id;
      } else {
        return res.status(400).json({ error: 'Invalid room ID and no rooms exist' });
      }
    }

    const booking = new Booking({
      room_id: targetRoomId,
      guest_name,
      email,
      phone,
      check_in,
      check_out,
      message: message || ''
    });

    await booking.save();
    res.status(201).json({ id: booking._id.toString(), message: 'Booking successful!' });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

app.patch('/api/bookings/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!['pending', 'confirmed', 'cancelled'].includes(status?.toLowerCase())) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid booking ID format' });
    }

    const booking = await Booking.findByIdAndUpdate(
      id, 
      { status: status.toLowerCase() },
      { new: true }
    );

    if (booking) {
      res.json({ success: true, message: 'Status updated successfully', booking });
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

// --- Contact Form Messages ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields' });
    }

    const contactMsg = new ContactMessage({ name, email, phone, subject, message });
    await contactMsg.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!', data: contactMsg });
  } catch (error) {
    console.error('Save contact message error:', error);
    res.status(500).json({ error: 'Failed to save contact message' });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Fetch contact messages error:', error);
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
});


// --- Admin Authentication ---
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === 'himalayan123') {
    res.json({ success: true, token: 'admin-auth-token-123' });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
