import AppointmentForm from "../componets/AppointmentForm";

function Appointment() {
  return (
    <div className="appointment-page">
      <h1>Book Appointment</h1>
      <p>Schedule your dental consultation with our specialists</p>

      <AppointmentForm />
    </div>
  );
}

export default Appointment;