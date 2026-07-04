
import Hero from "../componets/Hero";
import WhychooseUs from "../componets/whychooseus";
import ServicesSection from "../componets/ServicesSection";
import DoctorCard from "../componets/Doctorcard";
import Testimonials from "../componets/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <WhychooseUs />
      <ServicesSection />

      {/* Doctors Section */}

      <Testimonials />
    </>
  );
}

export default Home;