import React from "react";
import crops from "../crops.jsx";

export default function CropInfo() {
  return (
    <section className="card card-pad">
      <h3 style={{ marginBottom: 10 }}>🌾 પાક માહિતી (Crop Information)</h3>
      <div className="crop-grid">
        {crops.map((c, idx) => (
          <div key={idx} className="crop-card">
            <h4>{c.name}</h4>
            <p>{c.info}</p>
            <div className="crop-images">
              {c.images.map((img, i) => (
                <img key={i} src={img} alt={c.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
