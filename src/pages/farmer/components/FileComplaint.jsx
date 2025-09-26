import React, { useState } from "react";

export default function FileComplaint({ addComplaint }) {
  const [newComplaint, setNewComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComplaint(newComplaint);
    setNewComplaint("");
  };

  return (
    <section className="card card-pad" style={{ marginBottom: 16 }}>
      <h3 style={{ marginBottom: 10 }}>File a New Complaint</h3>
      <form onSubmit={handleSubmit} className="row">
        <input
          className="input"
          placeholder="Describe your issue..."
          value={newComplaint}
          onChange={(e) => setNewComplaint(e.target.value)}
        />
        <button className="btn btn-green" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
