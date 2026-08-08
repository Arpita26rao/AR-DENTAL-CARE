import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load dashboard data
  useEffect(() => {
    const loadDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/admin-login";
        return;
      }

      setLoading(true);
      setError("");

      try {
        await Promise.all([
          fetchAppointments(),
          fetchContacts(),
        ]);
      } catch (error) {
        console.error("Dashboard loading error:", error);
        setError("Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");

      setAppointments(
        Array.isArray(res.data.data) ? res.data.data : []
      );
    } catch (error) {
      console.error("Appointments error:", error);
      throw error;
    }
  };

  // Fetch contact messages
  const fetchContacts = async () => {
    try {
      const res = await API.get("/contact");

      setContacts(
        Array.isArray(res.data.data) ? res.data.data : []
      );
    } catch (error) {
      console.error("Contacts error:", error);
      throw error;
    }
  };

  // Delete appointment
  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/appointments/${id}`);

      alert("Appointment deleted successfully!");

      await fetchAppointments();
    } catch (error) {
      console.error("Delete appointment error:", error);
      alert(
        error.response?.data?.message ||
          "Failed to delete appointment."
      );
    }
  };

  // Update appointment status
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/appointments/${id}`, {
        status,
      });

      await fetchAppointments();
    } catch (error) {
      console.error("Update status error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to update appointment status."
      );
    }
  };

  // Appointment statistics
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

  // Search + status filter
  const filteredAppointments = appointments.filter((item) => {
    const value = searchTerm.trim().toLowerCase();

    const matchesSearch =
      item.fullName?.toLowerCase().includes(value) ||
      item.doctor?.toLowerCase().includes(value) ||
      item.service?.toLowerCase().includes(value);

    const matchesStatus =
      statusFilter === "All" ||
      (item.status || "Pending") === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  // Loading state
  if (loading) {
    return (
      <div className="admin-dashboard">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">

      {/* Header */}
      <div className="admin-header">
        <div>
          <h1>AR Memorial Dental Care Centre</h1>

          <p>
            Manage appointments, patient enquiries and clinic
            operations from one place.
          </p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="admin-error">
          {error}
        </div>
      )}

      {/* Dashboard Cards */}
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

      {/* Appointment Header */}
      <div className="admin-table-header">

        <h2 className="admin-section-title">
          Appointments
        </h2>

        <div className="admin-actions">

          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
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
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>
      </div>

      {/* Appointments Table */}
      <div className="table-container">

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
                    ? new Date(
                        item.appointmentDate
                      ).toLocaleDateString("en-IN")
                    : "No Date"}
                </td>

                <td>
                  <select
                    className="status-select"
                    value={item.status || "Pending"}
                    onChange={(e) =>
                      updateStatus(
                        item._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Completed">
                      Completed
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteAppointment(item._id)
                    }
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

            {filteredAppointments.length === 0 && (
              <tr>
                <td colSpan="6">
                  No appointments found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Contact Messages */}
      <h2 className="admin-section-title">
        Contact Messages
      </h2>

      <div className="table-container">

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
                <td colSpan="4">
                  No contact messages found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;