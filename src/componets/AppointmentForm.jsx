function AppointmentForm() {
  return (
    <form className="appointment-form">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="tel" placeholder="Phone Number" />

      <select>
        <option>Select Service</option>
        <option>Teeth Cleaning</option>
        <option>Root Canal Treatment</option>
        <option>Dental Implant</option>
        <option>Braces & Aligners</option>
        <option>Teeth Whitening</option>
      </select>
      <select>
  <option>Select Doctor</option>
  <option>Dr. Rajesh Sharma - Dental Surgeon</option>
  <option>Dr. Neha Gupta - Orthodontist</option>
  <option>Dr. Amit Verma - Implant Specialist</option>
  <option>Dr. Priya Mishra - Pediatric Dentist</option>
</select>

      <input type="date" />

      <textarea placeholder="Additional Message"></textarea>

      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;