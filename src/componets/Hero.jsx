import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>AR Dental Care Centre</h1>

        <p>
          Modern dental care with experienced specialists,
          advanced technology, and patient-focused treatment.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/appointment")}>
            Book Appointment
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/services")}
          >
            Our Services
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
          alt="Dental Clinic"
        />
      </div>
    </section>
  );
}

export default Hero;