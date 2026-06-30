import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");
      setAppointments(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/appointments/${id}`);
      alert("Appointment deleted successfully!");
      fetchAppointments();
    } catch (error) {
      console.log(error);
      alert("Failed to delete appointment.");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Appointments</h2>
          <h3>{appointments.length}</h3>
        </div>

        <div className="card">
          <h2>Total Contact Messages</h2>
          <h3>0</h3>
        </div>
      </div>

      <h2>Appointments</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Doctor</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item._id}>
              <td>{item.fullName}</td>
              <td>{item.doctor}</td>
              <td>{item.service}</td>
              <td>
                {new Date(item.appointmentDate).toLocaleDateString()}
              </td>
              <td>Pending</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteAppointment(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;