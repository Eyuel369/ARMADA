const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rent_start_time: {
    type: Date,
    required: true
  },
  rent_end_time: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'cancelled'],
    default: 'active'
  }
});

module.exports = mongoose.model('Contract', contractSchema);
