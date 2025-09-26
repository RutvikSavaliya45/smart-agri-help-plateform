import React from "react";

export default function Sidebar({ active, setActive, handleLogout }) {
  const menu = [
    { key: "home", label: "Dashboard Home" },
    { key: "complaints", label: "Complaints" },
    { key: "users", label: "Manage Users" },
    { key: "schemes", label: "Schemes" },
    { key: "cropinfo", label: "Crop Info" },
    { key: "experts", label: "Expert Help" },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">🌱 Smart Agri Help</div>
      <div className="admin-sub">Admin Dashboard</div>
      <nav className="admin-nav">
        {menu.map(m => (
          <button
            key={m.key}
            className={`admin-link ${active === m.key ? "active" : ""}`}
            onClick={() => setActive(m.key)}
          >
            {m.label}
          </button>
        ))}
      </nav>

      <div style={{ marginTop: "auto", padding: 12 }}>
        <button className="admin-logout" onClick={handleLogout}>Logout</button>
      </div>
    </aside>
  );
}
