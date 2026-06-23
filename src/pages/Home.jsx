import Hero from "../componets/Hero";
import ServicesSection from "../componets/ServicesSection";
import DoctorCard from "../componets/Doctorcard";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />

      <section className="home-doctors">
        <h2>Our Doctors</h2>

        <div className="doctor-container">
          <DoctorCard name="Dr. Sharma" speciality="Dental Surgeon" />
          <DoctorCard name="Dr. Gupta" speciality="Orthodontist" />
          <DoctorCard name="Dr. Verma" speciality="Implant Specialist" />
        </div>
      </section>
    </>
  );
}

export default Home;