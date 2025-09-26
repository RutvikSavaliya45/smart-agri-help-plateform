import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("farmer");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "farmer") navigate("/farmer/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
    if (role === "expert") navigate("/expert/dashboard");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/farming-bg.jpg')", // 👈 background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // 👈 transparent card
          borderRadius: "10px",
        }}
      >
        {/* Header */}
        <div
          className="text-white text-center p-3 mb-3"
          style={{ backgroundColor: "#2e7d32", borderRadius: "6px" }}
        >
          <h3 className="mb-0">🌱 Smart Agri Help</h3>
          <p className="mb-0">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Select Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="farmer">Farmer</option>
              <option value="admin">Admin</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white"
            style={{ backgroundColor: "#388e3c" }}
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-3">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" style={{ color: "#2e7d32", fontWeight: "bold" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
