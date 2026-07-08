import { useNavigate } from "react-router-dom";

function DoctorCard({
  name,
  speciality,
  experience,
  qualification,
}) {
  const navigate = useNavigate();

  return (
    <div className="doctor-card">
      <div className="doctor-avatar">
        👨‍⚕️
      </div>

      <span className="doctor-badge">
        Available
      </span>

      <h3>{name}</h3>

      <p className="qualification">{qualification}</p>

      <p className="speciality">
        {speciality}
      </p>

      <p className="experience">
        ⭐ {experience}
      </p>

      <ul className="doctor-services">
        <li>✔ Root Canal</li>
        <li>✔ Dental Implants</li>
        <li>✔ Teeth Cleaning</li>
      </ul>

      <button
        className="doctor-btn"
        onClick={() => navigate("/appointment")}
      >
        Book Appointment →
      </button>
    </div>
  );
}

export default DoctorCard;