const express = require("express");
const router = express.Router();

const Appointment = require("../models/appointment");
const authMiddleware = require("../middleware/authMiddleware");

// ==========================================
// CREATE APPOINTMENT - PUBLIC
// ==========================================
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      service,
      doctor,
      appointmentDate,
      appointmentTime,
      message,
    } = req.body;

    // Check required appointment time
    if (!appointmentTime) {
      return res.status(400).json({
        success: false,
        message: "Please select an appointment time.",
      });
    }

    // Check if the same doctor already has
    // the same date + time booked
    const existingAppointment = await Appointment.findOne({
      doctor,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      status: { $ne: "Cancelled" },
    });

    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        message:
          "This time slot is already booked. Please select another time.",
      });
    }

    // Create appointment
    const appointment = new Appointment({
      fullName,
      email,
      phone,
      service,
      doctor,
      appointmentDate,
      appointmentTime,
      message,
    });

    // Save appointment
    await appointment.save();

    // Success response
    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    console.error("Appointment booking error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================================
// GET ALL APPOINTMENTS - ADMIN ONLY
// ==========================================
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
    console.error("Fetch appointments error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================================
// DELETE APPOINTMENT - ADMIN ONLY
// ==========================================
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
    console.error("Delete appointment error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================================
// UPDATE APPOINTMENT STATUS - ADMIN ONLY
// ==========================================
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
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
    console.error("Update appointment status error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;