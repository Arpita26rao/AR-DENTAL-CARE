import {
  FaTooth,
  FaTeeth,
  FaSmile,
  FaNotesMedical,
  FaUserMd,
  FaClinicMedical,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaTooth />,
      title: "Teeth Cleaning",
      description:
        "Professional cleaning to remove plaque and maintain healthy teeth.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Root Canal",
      description:
        "Advanced painless root canal treatment to save damaged teeth.",
    },
    {
      icon: <FaClinicMedical />,
      title: "Dental Implants",
      description:
        "Permanent tooth replacement with natural appearance and strength.",
    },
    {
      icon: <FaTeeth />,
      title: "Braces & Aligners",
      description:
        "Modern orthodontic solutions for perfectly aligned teeth.",
    },
    {
      icon: <FaSmile />,
      title: "Teeth Whitening",
      description:
        "Safe whitening treatment for a brighter and confident smile.",
    },
    {
      icon: <FaUserMd />,
      title: "General Dentistry",
      description:
        "Complete dental checkups and preventive oral healthcare.",
    },
  ];

  return (
    <section className="services">
      <div className="section-title">
        <span>Our Services</span>
        <h2>Complete Dental Care Under One Roof</h2>
        <p>
          We provide modern dental treatments with advanced technology and
          experienced specialists.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;