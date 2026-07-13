import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-tag">
          AR Memorial Dental Care Centre
        </span>

        <h1>
          Healthy Smiles Begin With Trusted Dental Care
        </h1>

        <p>
          Experience quality dental treatment with modern technology,
          personalized care, and an experienced dental specialist.
          Your smile and comfort are our highest priorities.
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
            <span>Years of Experience</span>
          </div>

          <div>
            <h3>Mon–Sat</h3>
            <span>10 AM – 2 PM & 5 PM – 9 PM</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900"
          alt="AR Memorial Dental Care Centre"
        />
      </div>
    </section>
  );
}

export default Hero;