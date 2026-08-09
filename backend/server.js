require("dotenv").config();

const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentroutes");
const contactRoutes = require("./routes/contactroutes");
const adminRoutes = require("./routes/adminroutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("AR Memorial Dental Care Centre Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});