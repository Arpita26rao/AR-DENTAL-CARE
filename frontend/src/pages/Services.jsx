
function Services() {
  const services = [
    {
      title: "Teeth Cleaning",
      desc: "Professional cleaning to remove plaque and improve oral hygiene.",
    },
    {
      title: "Root Canal",
      desc: "Painless treatment to save infected or damaged teeth.",
    },
    {
      title: "Dental Implant",
      desc: "Permanent tooth replacement solution with natural look.",
    },
    {
      title: "Braces & Aligners",
      desc: "Teeth alignment treatment for a confident smile.",
    },
    {
      title: "Teeth Whitening",
      desc: "Brighten your smile with safe whitening treatment.",
    },
    {
      title: "Tooth Extraction",
      desc: "Safe removal of damaged or painful teeth.",
    },
  ];

  return (
    <div className="services-page">
      <h1>Our Dental Services</h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;