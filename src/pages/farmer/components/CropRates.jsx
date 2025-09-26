import React, { useState } from "react";

export default function CropRates() {
  const [selectedYard, setSelectedYard] = useState("Rajkot");

  const cropData = {
    Rajkot: [
      { crop: "Wheat", high: 2300, low: 2200 },
      { crop: "Cotton", high: 8300, low: 8100 },
      { crop: "Groundnut", high: 5700, low: 5400 },
      { crop: "Cumin", high: 16000, low: 15400 },
      { crop: "Mustard", high: 5400, low: 5200 },
    ],
    Gondal: [
      { crop: "Wheat", high: 2320, low: 2240 },
      { crop: "Cotton", high: 8150, low: 8050 },
      { crop: "Groundnut", high: 5550, low: 5350 },
      { crop: "Sesame", high: 8300, low: 8100 },
      { crop: "Bajra", high: 2000, low: 1900 },
    ],
    Jetpur: [
      { crop: "Wheat", high: 2350, low: 2250 },
      { crop: "Cotton", high: 8350, low: 8150 },
      { crop: "Groundnut", high: 5600, low: 5400 },
      { crop: "Onion", high: 1300, low: 1100 },
      { crop: "Tomato", high: 1000, low: 800 },
    ],
  };

  return (
    <section className="card card-pad">
      <h3 style={{ marginBottom: 10 }}>🌾 Crop Market Rates</h3>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>Select Yard:</label>
        <select
          value={selectedYard}
          onChange={(e) => setSelectedYard(e.target.value)}
          style={{ padding: "6px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="Rajkot">Rajkot</option>
          <option value="Gondal">Gondal</option>
          <option value="Jetpur">Jetpur</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Crop</th>
              <th>High Price (₹)</th>
              <th>Low Price (₹)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {cropData[selectedYard].map((item, index) => (
              <tr key={index}>
                <td>{item.crop}</td>
                <td>₹{item.high}</td>
                <td>₹{item.low}</td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
