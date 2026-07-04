import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchAppointments();
    fetchContacts();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");
      setAppointments(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contact");
      setContacts(res.data.data);
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

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/appointments/${id}`, { status });
      fetchAppointments();
    } catch (error) {
      console.log(error);
      alert("Failed to update status.");
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
  <h1>Admin Dashboard</h1>

  <button
    className="logout-btn"
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/admin-login";
    }}
  >
    Logout
  </button>
</div>

      

      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Appointments</h2>
          <h3>{appointments.length}</h3>
        </div>

        <div className="card">
          <h2>Total Contact Messages</h2>
          <h3>{contacts.length}</h3>
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
              <td>{new Date(item.appointmentDate).toLocaleDateString()}</td>

              <td>
                <select
                  className="status-select"
                  value={item.status || "Pending"}
                  onChange={(e) => updateStatus(item._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>

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

      <h2>Contact Messages</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;