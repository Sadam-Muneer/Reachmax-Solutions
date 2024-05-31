const express = require("express");
const router = express.Router();
const ContactModel = require("../models/contact_model");

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      number,
      companyName,
      website,
      services,
      message,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !number ||
      !companyName ||
      !website ||
      !services ||
      !message
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newContact = new ContactModel({
      firstName,
      lastName,
      email,
      number,
      companyName,
      website,
      services,
      message,
    });

    await newContact.save();

    res
      .status(200)
      .json({ msg: "Form submitted successfully", data: newContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
