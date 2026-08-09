const express = require("express");
const router = express.Router();

const Appointment = require("../models/appointment");
const authMiddleware = require("../middleware/authMiddleware");
const { sendAppointmentEmail } = require("../emailService");

// Create appointment - PUBLIC
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);

    await appointment.save();

    // Send confirmation email to patient
    const emailResult = await sendAppointmentEmail(appointment);

    if (!emailResult.success) {
      console.error(
        "Appointment saved, but confirmation email failed."
      );
    }

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
      emailSent: emailResult.success,
    });
  } catch (error) {
    console.error("Appointment booking error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get all appointments - ADMIN ONLY
router.get("/", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete appointment - ADMIN ONLY
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update appointment status - ADMIN ONLY
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;