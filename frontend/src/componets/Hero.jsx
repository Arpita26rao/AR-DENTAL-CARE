import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-tag">Trusted Dental Care</span>

        <h1>Bright Smiles Start With Expert Dental Care</h1>

        <p>
          Modern dental treatment with experienced specialists,
          advanced technology, and patient-friendly care.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/appointment")}>
            📅 Book Appointment
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/contact")}
          >
            📞 Contact Us
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>5000+</h3>
            <span>Happy Patients</span>
          </div>

          <div>
            <h3>10+</h3>
            <span>Years Experience</span>
          </div>

          <div>
            <h3>4.9★</h3>
            <span>Patient Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900"
          alt="Dental Clinic"
        />
      </div>
    </section>
  );
}

export default Hero;