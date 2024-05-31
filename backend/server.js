require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const contactRoute = require("./router/contact_router");
const errorMiddleware = require("./middlewares/error_handling");
const adminRoute = require("./router/admin-router");
const Application = require("./models/contact_model"); // Import the Application model

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/form", contactRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

// Endpoint to handle POST requests from the frontend
app.post("/api/form", async (req, res) => {
  try {
    // Create a new application instance with the received data
    const newApplication = new Application({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      number: req.body.number,
      companyName: req.body.companyName,
      website: req.body.website,
      services: req.body.services,
    });

    // Save the application to the database
    await newApplication.save();

    // Send a success response
    res.json({ msg: "Form submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    // Send an error response
    res.status(500).json({ msg: "Failed to submit form" });
  }
});
