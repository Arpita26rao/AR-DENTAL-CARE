
function AppointmentForm() {
  return (
    <form className="appointment-form">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="tel" placeholder="Phone Number" />

      <select>
        <option>Select Service</option>
        <option>Teeth Cleaning</option>
        <option>Root Canal</option>
        <option>Dental Implant</option>
      </select>

      <input type="date" />

      <button type="submit">
        Book Appointment
      </button>
    </form>
  );
}

export default AppointmentForm;