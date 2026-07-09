import DoctorCard from "../componets/Doctorcard";

function Doctor() {
  return (
    <section className="doctor-page">
      <div className="doctor-hero">
      
        <h2>Meet Our Expert Dentists</h2>

       <p className="doctor-subtitle">
       Experienced dental professionals providing advanced,
    comfortable and patient-focused treatment for every smile.
     </p>
      </div>

      <div className="doctor-container">
        <DoctorCard
          name="Dr. Rajesh Sharma"
          speciality="Dental Surgeon"
          experience="8+ Years Experience"
          qualification="BDS, MDS"
        />

        <DoctorCard
          name="Dr. Neha Gupta"
          speciality="Orthodontist"
          experience="6+ Years Experience"
          qualification="BDS, Orthodontics"
        />

        <DoctorCard
          name="Dr. Amit Verma"
          speciality="Implant Specialist"
          experience="10+ Years Experience"
          qualification="MDS, Implantology"
        />

        <DoctorCard
          name="Dr. Priya Mishra"
          speciality="Pediatric Dentist"
          experience="5+ Years Experience"
          qualification="BDS, Pediatric Care"
        />
      </div>

      <div className="doctor-stats">
        <div>
          <h2>5000+</h2>
          <p>Happy Patients</p>
        </div>
        <div>
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>
        <div>
          <h2>4.9★</h2>
          <p>Patient Rating</p>
        </div>
      </div>

      <div className="doctor-cta">
        <h2>Need Expert Dental Care?</h2>
        <p>Book your consultation with our experienced dental specialists.</p>
        <a href="/appointment">Book Appointment</a>
      </div>
    </section>
  );
}

export default Doctor;