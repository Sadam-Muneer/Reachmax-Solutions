const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  services: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
