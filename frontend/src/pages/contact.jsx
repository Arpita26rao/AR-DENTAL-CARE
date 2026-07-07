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
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with AR Memorial Dental Care Centre</p>

      <div className="contact-wrapper">
        <div className="contact-card">
          <h3>Clinic Information</h3>
          <p><strong>Address:</strong> Kota Rajasthan, India</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> armemorialdental@gmail.com</p>
          <p><strong>Timing:</strong> Mon - Sat, 10:00 AM - 7:00 PM</p>

          <div className="map-section">
            <h2>Our Location</h2>
            <iframe
              title="clinic-location"
              src="https://www.google.com/maps?q=Rajasthan,India&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;