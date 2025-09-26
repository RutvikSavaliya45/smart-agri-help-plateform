import React from "react";

export default function Sidebar({ active, setActive, handleLogout }) {
  const menu = [
    { key: "home", label: "Dashboard" },
    { key: "file", label: "File Complaint" },
    { key: "list", label: "My Complaints" },
    { key: "expert", label: "Expert Help" },
    { key: "crop", label: "Crop Info" },
    { key: "check", label: "Weather" },
    { key: "rate", label: "Crop Rates" },
    { key: "scheme", label: "Schemes"}
  ];

  return (
    <aside className="farmer-sidebar">
      <h2 className="farmer-brand">🌱 Farmer Panel</h2>
      <div className="farmer-sub">Smart Agri Help</div>

      <nav className="farmer-nav">
        {menu.map((m) => (
          <button
            key={m.key}
            className={`farmer-link ${active === m.key ? "active" : ""}`}
            onClick={() => setActive(m.key)}
          >
            {m.label}
          </button>
        ))}
      </nav>

      <button className="farmer-logout" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}
