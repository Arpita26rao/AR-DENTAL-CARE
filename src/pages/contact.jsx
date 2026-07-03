function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with AR Memorial Dental Care Centre</p>

      <div className="contact-wrapper">
        <div className="contact-card">
          <h3>Clinic Information</h3>
          <p><strong>Address:</strong> kota Rajasthan, India</p>
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

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;