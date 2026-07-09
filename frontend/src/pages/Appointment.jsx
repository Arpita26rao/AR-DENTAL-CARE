function Appointment() {
  return (
    <section className="appointment-page">

      <div className="section-title">
        <span>Appointment</span>
        <h2>Book Your Dental Appointment</h2>
        <p>
          Schedule your visit with our experienced dental specialists.
        </p>
      </div>

      <div className="appointment-wrapper">

        {/* LEFT SIDE */}
        <div className="appointment-info">

          <span className="info-tag">Why Choose AR Dental?</span>

          <h3>Your Smile Is Our Priority</h3>

          <p className="info-text">
            We provide advanced dental treatments with experienced specialists,
            modern technology and a patient-friendly environment.
          </p>

          <div className="info-list">
            <p>🦷 Experienced Dental Specialists</p>
            <p>🕒 Mon – Sat | 9:00 AM – 8:00 PM</p>
            <p>📍 Kota, Rajasthan</p>
            <p>📞 +91 9876543210</p>
            <p>⭐ 5000+ Happy Patients</p>
            <p>💳 Affordable Treatment Plans</p>
            <p>⚡ Same-Day Emergency Care</p>
            <p>🧼 Modern Sterilized Equipment</p>
          </div>

          <div className="appointment-highlights">
            <div>
              <h4>10+</h4>
              <span>Years Experience</span>
            </div>

            <div>
              <h4>5000+</h4>
              <span>Patients</span>
            </div>

            <div>
              <h4>4.9★</h4>
              <span>Rating</span>
            </div>
          </div>

          <button className="info-btn">
            📞 Call Now
          </button>

        </div>

        {/* RIGHT SIDE */}
        <form className="appointment-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="date" />

          <select>
            <option>Select Service</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>Dental Implant</option>
          </select>

          <textarea placeholder="Message"></textarea>

          <button type="submit">Book Appointment</button>
        </form>

      </div>

    </section>
  );
}

export default Appointment;