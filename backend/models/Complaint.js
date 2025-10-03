// backend/models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  complaint: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
