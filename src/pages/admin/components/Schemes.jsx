import React, { useState } from "react";

export default function Schemes({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    onAdd({ title, desc, link });
    setTitle(""); setDesc(""); setLink("");
  };

  return (
    <section className="card card-pad">
      <h3>🏛️ Government Schemes</h3>

      <form onSubmit={submit} style={{ marginBottom: 12 }}>
        <input className="input" placeholder="Scheme title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="input" placeholder="Short description" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input className="input" placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
        <button className="btn btn-green" type="submit">Add Scheme</button>
      </form>

      <p className="text-muted">(Schemes shown to farmers come from backend in production.)</p>
    </section>
  );
}
