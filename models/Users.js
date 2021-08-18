const { Number } = require('mongoose');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    index: { unique: true },
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Users', UserSchema);
