import React, { useState } from "react";

export default function CropInfo({ onAdd }) {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, info });
    setName(""); setInfo("");
  };

  return (
    <section className="card card-pad">
      <h3>🌾 Crop Information (Manage)</h3>

      <form onSubmit={submit} style={{ marginBottom: 12 }}>
        <input className="input" placeholder="Crop name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="input" placeholder="Details / tips" value={info} onChange={(e) => setInfo(e.target.value)} />
        <button className="btn btn-green" type="submit">Add Crop Info</button>
      </form>

      <p className="text-muted">(Admins can add/update crop tips here.)</p>
    </section>
  );
}
