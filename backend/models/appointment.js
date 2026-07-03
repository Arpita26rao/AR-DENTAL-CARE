const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    message: {
      type: String,
    },

    status: {
  type: String,
  enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
  default: "Pending",
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);