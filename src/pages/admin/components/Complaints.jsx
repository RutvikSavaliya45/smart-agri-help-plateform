import React from "react";

export default function Complaints({ complaints = [], onUpdateStatus }) {
  return (
    <section className="card card-pad">
      <h3>📌 Complaints</h3>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Farmer</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.farmer}</td>
                <td>{c.issue}</td>
                <td>{c.status}</td>
                <td>
                  <button className="btn" onClick={() => onUpdateStatus(c.id, "In Progress")}>In Progress</button>
                  <button className="btn btn-green" onClick={() => onUpdateStatus(c.id, "Resolved")}>Resolve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
