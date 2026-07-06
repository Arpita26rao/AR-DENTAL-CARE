
import Hero from "../componets/Hero";

import ServicesSection from "../componets/ServicesSection";
import DoctorCard from "../componets/Doctorcard";
import Testimonials from "../componets/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      
      <ServicesSection />

      {/* Doctors Section */}

      <Testimonials />
    </>
  );
}

export default Home;
