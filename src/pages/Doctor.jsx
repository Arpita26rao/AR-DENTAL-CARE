
import DoctorCard from "../componets/Doctorcard";

function Doctor() {
  return (
    <div className="doctor-page">
      <h1>Our Doctors</h1>

      <div className="doctor-container">
        <DoctorCard name="Dr. Sharma" speciality="Dental Surgeon" />
        <DoctorCard name="Dr. Gupta" speciality="Orthodontist" />
        <DoctorCard name="Dr. Verma" speciality="Implant Specialist" />
      </div>
    </div>
  );
}

export default Doctor;