function Services() {
  const services = [
    {
      title: "Teeth Cleaning",
      text: "Professional cleaning to remove plaque and improve oral hygiene.",
    },
    {
      title: "Root Canal",
      text: "Painless treatment to save infected or damaged teeth.",
    },
    {
      title: "Dental Implant",
      text: "Permanent tooth replacement solution with natural look.",
    },
    {
      title: "Braces & Aligners",
      text: "Teeth alignment treatment for a confident smile.",
    },
    {
      title: "Teeth Whitening",
      text: "Brighten your smile with safe whitening treatment.",
    },
    {
      title: "Tooth Extraction",
      text: "Safe removal of damaged or painful teeth.",
    },
  ];

  return (
    <section className="services-page">
      <h1>Our Dental Services</h1>
      <div className="section-title">
  <h1>Complete Dental Care Under One Roof</h1>
  <p>
    We provide modern dental treatments with advanced technology and experienced specialists.
  </p>
</div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">🦷</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;