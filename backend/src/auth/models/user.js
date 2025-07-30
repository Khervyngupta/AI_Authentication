const mongoose = require('mongoose');

// Custom validator for alphanumeric passwords
const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      validate: {
        validator: isAlphanumeric,
        message: 'Password must be alphanumeric',
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
