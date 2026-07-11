import { useState } from "react";
import API from "../api/axios";

function Appointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    appointmentDate: "",
    doctor: "",
    service: "",
    message: "",
  });

  const [bookingStatus, setBookingStatus] = useState({
    type: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setBookingStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setBookingStatus({
      type: "",
      message: "",
    });

    try {
      const response = await API.post("/appointments", formData);

      setBookingStatus({
        type: "success",
        message:
          response.data?.message ||
          "Your appointment has been booked successfully.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        appointmentDate: "",
        doctor: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Appointment booking error:", error);

      setBookingStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Appointment booking failed. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+916376564645";
  };

  return (
    <section className="appointment-page">
      <div className="section-title">
        <span>Appointment</span>

        <h2>Book Your Dental Appointment</h2>

        <p>
          Schedule your visit with our experienced dental specialist.
        </p>
      </div>

      <div className="appointment-wrapper">
        {/* Left side */}
        <div className="appointment-info">
          <span className="info-tag">
            Why Choose AR Dental?
          </span>

          <h3>Your Smile Is Our Priority</h3>

          <p className="info-text">
            We provide advanced dental treatment with modern technology,
            sterilized equipment and patient-focused care.
          </p>

          <div className="info-list">
            <p>🦷 Experienced Dental Specialist</p>
            <p>🕒 Mon – Sat | 10:00 AM – 2:00 PM</p>
            <p>🕒 Evening | 5:00 PM – 9:00 PM</p>
            <p>📍 1 Meera Nagar, Canal Road, Baran Road, Kota</p>
            <p>📞 +91 63765 64645</p>
            <p>💳 Affordable Treatment Plans</p>
            <p>⚡ Same-Day Emergency Care</p>
            <p>🧼 Modern Sterilized Equipment</p>
          </div>

          <div className="appointment-highlights">
            <div>
              <h4>10+</h4>
              <span>Years Experience</span>
            </div>

            <div>
              <h4>5000+</h4>
              <span>Patients</span>
            </div>

            <div>
              <h4>4.9★</h4>
              <span>Rating</span>
            </div>
          </div>

          <button
            type="button"
            className="info-btn"
            onClick={handleCall}
          >
            📞 Call Now
          </button>
        </div>

        {/* Right side */}
        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Junaid Khan">
              Dr. Junaid Khan
            </option>
          </select>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Teeth Cleaning">
              Teeth Cleaning
            </option>
            <option value="Root Canal">
              Root Canal
            </option>
            <option value="Dental Implant">
              Dental Implant
            </option>
            <option value="Braces and Aligners">
              Braces and Aligners
            </option>
            <option value="Teeth Whitening">
              Teeth Whitening
            </option>
            <option value="General Dentistry">
              General Dentistry
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Additional message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {bookingStatus.message && (
            <p
              className={
                bookingStatus.type === "success"
                  ? "booking-success"
                  : "booking-error"
              }
            >
              {bookingStatus.message}
            </p>
          )}

          <button type="submit" disabled={submitting}>
            {submitting
              ? "Booking Appointment..."
              : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;