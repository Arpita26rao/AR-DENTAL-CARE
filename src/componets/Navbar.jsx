
import { NavLink } from "react-router-dom";
import logo from "../assets/AR logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="AR DENTAL CARE CENTER" className="logo" />
        <h2>AR Dental Clinic</h2>
      </div>

      <ul className="nav-menu">
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/about"><li>ABOUT</li></NavLink>
        <NavLink to="/services"><li>SERVICES</li></NavLink>
        <NavLink to="/doctor"><li>DOCTORS</li></NavLink>
        <NavLink to="/appointment"><li>APPOINTMENT</li></NavLink>
        <NavLink to="/contact"><li>CONTACT</li></NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;