import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Clinic */}
        <div className="footer-box">
          <h2>🦷 AR Memorial Dental Care Centre</h2>

          <p>
            We are committed to providing safe, modern and affordable dental
            care with advanced technology, experienced professionals and a
            patient-first approach.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
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
          <h3>Contact Us</h3>

          <p>
            📍 1 Meera Nagar,<br />
            Canal Road, Baran Road,<br />
            Kota, Rajasthan
          </p>

          <p>📞 +91 63765 64645</p>

          <p>✉ armemorialdental@gmail.com</p>

          <p>
            🕒 Monday – Saturday <br />
            10:00 AM – 2:00 PM <br />
            5:00 PM – 9:00 PM
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AR Memorial Dental Care Centre. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;