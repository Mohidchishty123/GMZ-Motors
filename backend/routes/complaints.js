const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Submit complaint
router.post('/', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Get all complaints by user email
router.get('/:email', async (req, res) => {
  try {
    const complaints = await Complaint.find({ email: req.params.email });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
