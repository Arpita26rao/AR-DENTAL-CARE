
function DoctorCard({ name, speciality }) {
  return (
    <div className="doctor-card">
      <h3>{name}</h3>
      <p>{speciality}</p>
      <button>Book Appointment</button>
    </div>
  );
}

export default DoctorCard;