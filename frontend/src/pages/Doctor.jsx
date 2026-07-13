import DoctorCard from "../componets/Doctorcard";

function Doctor() {
  return (
    <section className="doctor-page">
      <div className="doctor-hero">
        <h2>Meet Our Dental Specialist</h2>

        <p className="doctor-subtitle">
          Dedicated to providing safe, comfortable and patient-focused dental
          care using modern treatment methods.
        </p>
      </div>

      <div className="doctor-container">
        <DoctorCard
          name="Dr. Junaid Khan"
          speciality="Dental Surgeon"
          experience="Experienced Dental Professional"
          qualification="Qualification to be updated"
        />
      </div>

      <div className="doctor-stats">
        <div>
          <h2>5000+</h2>
          <p>Happy Patients</p>
        </div>

        <div>
          <h2>Modern</h2>
          <p>Dental Equipment</p>
        </div>

        <div>
          <h2>Mon–Sat</h2>
          <p>Available for Consultation</p>
        </div>
      </div>

      <div className="doctor-cta">
        <h2>Need Expert Dental Care?</h2>

        <p>
          Book your consultation at AR Memorial Dental Care Centre.
        </p>

        <a href="/appointment">Book Appointment</a>
      </div>
    </section>
  );
}

export default Doctor;