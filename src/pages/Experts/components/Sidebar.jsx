import React from "react";

export default function Sidebar({ onLogout, setStatusFilter }) {
  return (
    <aside className="expert-sidebar">
      <div className="brand">
        <h2>👨‍🏫 Expert Panel</h2>
        <div className="sub">Smart Agri Help</div>
      </div>

      <nav className="expert-nav">
        <button className="expert-link" onClick={() => setStatusFilter("all")}>
          All Questions
        </button>
        <button className="expert-link" onClick={() => setStatusFilter("pending")}>
          Pending
        </button>
        <button className="expert-link" onClick={() => setStatusFilter("answered")}>
          Answered
        </button>
      </nav>

      <div style={{ marginTop: "auto", padding: 12 }}>
        <button className="expert-logout" onClick={onLogout}>
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
