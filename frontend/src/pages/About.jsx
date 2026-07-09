function About() {
  return (
    <section className="about-page">
      <div className="section-title">
        <span>About Us</span>
        <h2>About AR Memorial Dental Care Centre</h2>
        <p>Trusted, modern and patient-focused dental care.</p>
      </div>

      <div className="about-card">
        <div>
          <h3>Who We Are</h3>
          <p>
            AR Memorial Dental Care Centre provides quality dental treatment with
            modern equipment, experienced dentists and a comfortable clinic environment.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to help every patient achieve a healthy, confident and
            beautiful smile through safe and affordable dental care.
          </p>
        </div>

        <div className="about-points">
          <div>Experienced Dentists</div>
          <div>Modern Equipment</div>
          <div>Affordable Treatment</div>
          <div>Patient-Centered Care</div>
        </div>
      </div>
    </section>
  );
}

export default About;