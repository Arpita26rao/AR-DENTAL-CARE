
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>AR Dental Clinic</h1>
      <p>Your Smile, Our Priority</p>

      <button onClick={() => navigate("/appointment")}>
        Book Appointment
      </button>
    </section>
  );
}

export default Hero;