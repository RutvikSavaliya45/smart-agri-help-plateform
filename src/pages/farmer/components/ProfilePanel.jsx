import React, { useEffect, useState } from "react";
import "./ProfilePanel.css";

export default function ProfilePanel() {
  // LocalStorage से नाम लाना (या backend से)
  const [farmer, setFarmer] = useState({
    name: "Farmer",
    id: "F-0000",
    region: "Unknown",
    land: "-",
    phone: "-",
    email: "-"
  });

  useEffect(() => {
    const name = localStorage.getItem("farmerName") || "Ramesh Patel";
    const region = localStorage.getItem("farmerRegion") || "Rajkot";

    setFarmer({
      name: name,
      id: "F-1024",
      region: region,
      land: "2.5 acres",
      phone: "+91-98765-43210",
      email: "ramesh@example.com"
    });
  }, []);

  return (
    <div className="profile-card">
      {/* Top info */}
      <div className="profile-header">
        <div className="profile-avatar">
          {farmer.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
        </div>
        <div>
          <div className="profile-name">{farmer.name}</div>
          <div className="profile-sub">{farmer.id} • {farmer.region}</div>
        </div>
      </div>

      {/* Details */}
      <div className="profile-details">
        <div><strong>Land:</strong> {farmer.land}</div>
        <div><strong>Phone:</strong> {farmer.phone}</div>
        <div><strong>Email:</strong> {farmer.email}</div>
      </div>

      {/* Action buttons */}
      <div className="profile-actions">
        <button className="btn btn-green" onClick={() => alert("Edit profile")}>
          ✏️ Edit
        </button>
        <button className="btn" onClick={() => alert("View full profile")}>
          👁 View
        </button>
      </div>
    </div>
  );
}
