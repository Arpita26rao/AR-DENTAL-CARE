import { useState } from "react";
import API from "../api/axios";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    appointmentDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/appointments", formData);
      alert("Appointment booked successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        doctor: "",
        appointmentDate: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to book appointment."
      );
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

      <select name="service" value={formData.service} onChange={handleChange} required>
        <option value="">Select Service</option>
        <option value="Teeth Cleaning">Teeth Cleaning</option>
        <option value="Root Canal">Root Canal</option>
        <option value="Dental Implant">Dental Implant</option>
        <option value="Braces & Aligners">Braces & Aligners</option>
        <option value="Teeth Whitening">Teeth Whitening</option>
      </select>

      <select name="doctor" value={formData.doctor} onChange={handleChange} required>
        <option value="">Select Doctor</option>
        <option value="Dr. Rajesh Sharma">Dr. Rajesh Sharma</option>
        <option value="Dr. Neha Gupta">Dr. Neha Gupta</option>
        <option value="Dr. Amit Verma">Dr. Amit Verma</option>
        <option value="Dr. Priya Mishra">Dr. Priya Mishra</option>
      </select>

      <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />

      <textarea name="message" placeholder="Additional Message" value={formData.message} onChange={handleChange} />

      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;