import React from "react";

export default function ComplaintsList({ complaints }) {
  const badgeClass = (s) =>
    s === "Pending"
      ? "badge badge-pending"
      : s === "In Progress"
      ? "badge badge-progress"
      : "badge badge-resolved";

  return (
    <section className="card card-pad">
      <h3 style={{ marginBottom: 10 }}>Your Complaints</h3>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.issue}</td>
                <td>
                  <span className={badgeClass(c.status)}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
