import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/admin/login", formData);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      navigate("/admin-dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Invalid email or password."
      );
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;