import React, { useState } from "react";

export default function Users({ users = [], setUsers }) {
  const [filter, setFilter] = useState("all");

  const filtered = users.filter(u => filter === "all" ? true : u.role === filter);

  const deleteUser = (id) => {
    if (!window.confirm("Delete user?")) return;
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <section className="card card-pad">
      <h3>👥 Manage Users</h3>
      <div style={{ marginBottom: 12 }}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="farmer">Farmers</option>
          <option value="expert">Experts</option>
          <option value="admin">Admins</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Region</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.role}</td>
                <td>{u.region}</td>
                <td>
                  <button className="btn btn-red" onClick={() => deleteUser(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
