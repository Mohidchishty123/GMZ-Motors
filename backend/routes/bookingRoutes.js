const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// ✅ POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: '✅ Booking saved successfully!' });
  } catch (error) {
    console.error('❌ Error saving booking:', error);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// ✅ GET /api/bookings (get all bookings)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// ✅ GET /api/bookings/:email (get bookings for logged-in user)
router.get('/:email', async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.params.email });
    res.json(bookings);
  } catch (error) {
    console.error('❌ Error fetching user bookings:', error);
    res.status(500).json({ error: 'Failed to fetch user bookings' });
  }
});

module.exports = router;
