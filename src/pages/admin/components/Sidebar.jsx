import React from "react";

export default function Sidebar({ active, setActive, handleLogout, open, setOpen }) {
  const menu = [
    { key: "home", label: "Dashboard Home" },
    { key: "complaints", label: "Complaints" },
    { key: "users", label: "Manage Users" },
    { key: "schemes", label: "Schemes" },
    { key: "cropinfo", label: "Crop Info" },
    { key: "experts", label: "Expert Help" },
  ];

  return (
    <>
      {/* Overlay (mobile only) */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <h2 className="admin-brand">🌱 Smart Agri Help</h2>
        <div className="admin-sub">Admin Dashboard</div>

        <nav className="admin-nav">
          {menu.map((m) => (
            <button
              key={m.key}
              className={`admin-link ${active === m.key ? "active" : ""}`}
              onClick={() => {
                setActive(m.key);
                setOpen(false); // mobile पर sidebar बंद हो जाए क्लिक के बाद
              }}
            >
              {m.label}
            </button>
          ))}
        </nav>

        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>
    </>
  );
}
