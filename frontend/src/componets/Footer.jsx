import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Clinic */}
        <div className="footer-box">
          <h2>🦷 AR Memorial Dental Care Centre</h2>
          <p>
            Providing advanced, affordable and patient-focused dental care
            with modern technology and experienced specialists.
          </p>
        </div>
        <div className="footer-social">

  <a href="#">
    <FaFacebook />
  </a>

  <a href="#">
    <FaInstagram />
  </a>

  
</div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctor">Doctors</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>

          <p>📍 Kota, Rajasthan</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ info@ardental.com</p>
          <p>🕒 Mon - Sat | 9:00 AM - 8:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AR Memorial Dental Care Centre. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;