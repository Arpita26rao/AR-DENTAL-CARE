import { useNavigate } from "react-router-dom";

function DoctorCard({ name, speciality, experience }) {
  const navigate = useNavigate();

  return (
    <div className="doctor-card">
      <div className="doctor-avatar">👨‍⚕️</div>

      <h3>{name}</h3>

      <p className="speciality">{speciality}</p>

      <p className="experience">{experience}</p>

      <button onClick={() => navigate("/appointment")}>
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;