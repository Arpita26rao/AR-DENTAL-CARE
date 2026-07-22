import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/AR LOGO.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src={logo}
          alt="AR Dental Care Center Logo"
          className="logo"
        />

        <h2>AR Dental Clinic</h2>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" onClick={closeMenu}>
            SERVICES
          </NavLink>
        </li>

        <li>
          <NavLink to="/doctor" onClick={closeMenu}>
            DOCTORS
          </NavLink>
        </li>

        <li>
          <NavLink to="/appointment" onClick={closeMenu}>
            APPOINTMENT
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
