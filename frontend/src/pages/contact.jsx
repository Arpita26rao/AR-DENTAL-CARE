import { useState } from "react";
import API from "../api/axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      await API.post("/contact", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send message.");
    }
  };

  return (
    <section className="contact-page">

      <div className="section-title">
        
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you. Contact our clinic for appointments,
          consultations or any dental queries.
        </p>
      </div>

      <div className="contact-wrapper">

        {/* Left Side */}
        <div className="contact-card">

          <h3>Clinic Information</h3>

          <p><strong>📍 Address:</strong> Kota, Rajasthan, India</p>

          <p><strong>📞 Phone:</strong> +91 9876543210</p>

          <p><strong>✉ Email:</strong> armemorialdental@gmail.com</p>

          <p><strong>🕒 Timing:</strong> Mon - Sat | 10:00 AM - 7:00 PM</p>

          <div className="map-section">

            <h3>Our Location</h3>

            <iframe
              title="clinic-location"
              src="https://www.google.com/maps?q=Rajasthan,India&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: "15px" }}
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
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

          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;