function Services() {
  const services = [
    {
      title: "General Dentistry",
      text: "Comprehensive dental check-ups, diagnosis and preventive care for maintaining healthy teeth and gums.",
    },
    {
      title: "Teeth Cleaning & Scaling",
      text: "Professional cleaning to remove plaque, tartar and stains for better oral hygiene.",
    },
    {
      title: "Root Canal Treatment",
      text: "Advanced and comfortable root canal procedures to save infected or damaged teeth.",
    },
    {
      title: "Dental Implants",
      text: "Permanent tooth replacement solutions designed for strength, comfort and a natural appearance.",
    },
    {
      title: "Braces & Aligners",
      text: "Modern orthodontic treatments to correct teeth alignment and improve your smile.",
    },
    {
      title: "Teeth Whitening",
      text: "Safe cosmetic whitening treatments for a brighter and more confident smile.",
    },
    {
      title: "Tooth Extraction",
      text: "Safe and painless removal of severely damaged or impacted teeth when necessary.",
    },
    {
      title: "Emergency Dental Care",
      text: "Immediate treatment for dental pain, broken teeth and other urgent dental emergencies.",
    },
  ];

  return (
    <section className="services-page">
      <div className="section-title">
        <span>Our Services</span>

        <h1>Complete Dental Care Under One Roof</h1>

        <p>
          We provide comprehensive dental treatments using modern technology,
          advanced equipment and patient-focused care for every age group.
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