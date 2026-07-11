import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchAppointments();
    fetchContacts();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");

      setAppointments(
        Array.isArray(res.data.data) ? res.data.data : []
      );
    } catch (error) {
      console.log(error);
      setAppointments([]);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contact");

      setContacts(
        Array.isArray(res.data.data) ? res.data.data : []
      );
    } catch (error) {
      console.log(error);
      setContacts([]);
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

  const pendingAppointments = appointments.filter(
    (item) => (item.status || "Pending") === "Pending"
  ).length;

  const confirmedAppointments = appointments.filter(
    (item) => item.status === "Confirmed"
  ).length;

  const completedAppointments = appointments.filter(
    (item) => item.status === "Completed"
  ).length;

  const cancelledAppointments = appointments.filter(
    (item) => item.status === "Cancelled"
  ).length;

  const filteredAppointments = appointments.filter((item) => {
    const value = searchTerm.toLowerCase();

    const matchesSearch =
      item.fullName?.toLowerCase().includes(value) ||
      item.doctor?.toLowerCase().includes(value) ||
      item.service?.toLowerCase().includes(value);

    const matchesStatus =
      statusFilter === "All" ||
      (item.status || "Pending") === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div>
          <span className="admin-subtitle">
            AR Memorial Dental Care Centre
          </span>

          <h1>Admin Dashboard</h1>

          <p>
            Manage appointments, patient enquiries and clinic operations
            from one place.
          </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Appointments</h2>
          <h3>{appointments.length}</h3>
        </div>

        <div className="card">
          <h2>Pending</h2>
          <h3>{pendingAppointments}</h3>
        </div>

        <div className="card">
          <h2>Confirmed</h2>
          <h3>{confirmedAppointments}</h3>
        </div>

        <div className="card">
          <h2>Completed</h2>
          <h3>{completedAppointments}</h3>
        </div>

        <div className="card">
          <h2>Cancelled</h2>
          <h3>{cancelledAppointments}</h3>
        </div>

        <div className="card">
          <h2>Contact Messages</h2>
          <h3>{contacts.length}</h3>
        </div>
      </div>

      <div className="admin-table-header">
        <h2 className="admin-section-title">Appointments</h2>

        <div className="admin-actions">
          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <input
            className="admin-search"
            type="text"
            placeholder="Search patient, doctor or service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

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
          {filteredAppointments.map((item) => (
            <tr key={item._id}>
              <td>{item.fullName}</td>
              <td>{item.doctor}</td>
              <td>{item.service}</td>

              <td>
                {item.appointmentDate
                  ? new Date(item.appointmentDate).toLocaleDateString("en-IN")
                  : "No Date"}
              </td>

              <td>
                <select
                  className="status-select"
                  value={item.status || "Pending"}
                  onChange={(e) =>
                    updateStatus(item._id, e.target.value)
                  }
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

          {filteredAppointments.length === 0 && (
            <tr>
              <td colSpan="6">No appointments found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 className="admin-section-title">Contact Messages</h2>

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

          {contacts.length === 0 && (
            <tr>
              <td colSpan="4">No contact messages found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;