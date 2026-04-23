const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const port = 3001;

// Database setup
const dbPath = path.join(__dirname, 'bookings.db');
const db = new Database(dbPath);

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    price INTEGER NOT NULL,
    status TEXT DEFAULT 'available'
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_id INTEGER,
    guest_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    check_in TEXT NOT NULL,
    check_out TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    FOREIGN KEY (room_id) REFERENCES rooms (id)
  );
`);

// Seed rooms if empty
const roomCount = db.prepare('SELECT count(*) as count FROM rooms').get().count;
if (roomCount === 0) {
  const insertRoom = db.prepare('INSERT INTO rooms (name, type, price) VALUES (?, ?, ?)');
  insertRoom.run('Deluxe Sunrise Room', 'Deluxe', 3500);
  insertRoom.run('Standard Double Room', 'Standard', 2500);
  insertRoom.run('Family Suite', 'Suite', 5500);
}

app.use(cors());
app.use(express.json());

// API Endpoints
app.get('/api/rooms', (req, res) => {
  const rooms = db.prepare('SELECT * FROM rooms').all();
  res.json(rooms);
});

app.get('/api/bookings', (req, res) => {
  const bookings = db.prepare(`
    SELECT b.*, r.name as room_name 
    FROM bookings b 
    JOIN rooms r ON b.room_id = r.id
  `).all();
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const { room_id, guest_name, email, phone, check_in, check_out } = req.body;
  
  try {
    const info = db.prepare(`
      INSERT INTO bookings (room_id, guest_name, email, phone, check_in, check_out)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(room_id || 1, guest_name, email, phone, check_in, check_out);
    
    res.status(201).json({ id: info.lastInsertRowid, message: 'Booking successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
