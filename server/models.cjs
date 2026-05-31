const mongoose = require('mongoose');

// Room Schema
const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'maintenance', 'occupied'],
    default: 'available'
  },
  description: {
    type: String,
    trim: true
  },
  features: [{
    type: String,
    trim: true
  }],
  imageUrl: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Virtual for ID mapping
RoomSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    return ret;
  }
});

// Booking Schema
const BookingSchema = new mongoose.Schema({
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  guest_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  check_in: {
    type: Date,
    required: true
  },
  check_out: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    trim: true,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
    lowercase: true
  }
}, {
  timestamps: true
});

BookingSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    if (ret.room_id) {
      ret.room_id = ret.room_id.toString();
    }
    return ret;
  }
});

// Contact Message Schema
const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true,
    default: 'General Inquiry'
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

ContactMessageSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    return ret;
  }
});

const Room = mongoose.model('Room', RoomSchema);
const Booking = mongoose.model('Booking', BookingSchema);
const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);
module.exports = {
  Room,
  Booking,
  ContactMessage
};
