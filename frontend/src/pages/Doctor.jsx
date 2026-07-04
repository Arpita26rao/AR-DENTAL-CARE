import DoctorCard from "../componets/Doctorcard";

function Doctor() {
  return (
    <section className="doctor-page">
      <h1>Meet Our Expert Dentists</h1>

      <p className="doctor-subtitle">
        Our experienced dental professionals are committed to providing
        high-quality dental care with modern technology.
      </p>

      <div className="doctor-container">
        <DoctorCard
          name="Dr. Rajesh Sharma"
          speciality="Dental Surgeon"
          experience="8+ Years Experience"
        />

        <DoctorCard
          name="Dr. Neha Gupta"
          speciality="Orthodontist"
          experience="6+ Years Experience"
        />

        <DoctorCard
          name="Dr. Amit Verma"
          speciality="Implant Specialist"
          experience="10+ Years Experience"
        />

        <DoctorCard
          name="Dr. Priya Mishra"
          speciality="Pediatric Dentist"
          experience="5+ Years Experience"
        />
      </div>
    </section>
  );
}

export default Doctor;