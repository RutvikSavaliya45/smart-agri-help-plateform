import React from "react";

export default function ProfilePanel() {
  // demo static data — replace from auth/user state if available
  const farmer = {
    name: "Ramesh Patel",
    id: "F-1024",
    region: "Rajkot",
    land: "2.5 acres",
    phone: "+91-98765-43210",
    email: "ramesh@example.com"
  };

  return (
    <div className="card card-pad profile-panel">
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <div className="avatar">{farmer.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        <div>
          <div style={{fontWeight:700}}>{farmer.name}</div>
          <div className="text-muted" style={{fontSize:13}}>{farmer.id} • {farmer.region}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div className="profile-row"><strong>Land:</strong> {farmer.land}</div>
        <div className="profile-row"><strong>Phone:</strong> {farmer.phone}</div>
        <div className="profile-row"><strong>Email:</strong> {farmer.email}</div>
      </div>

      <div style={{marginTop:12, display:'flex', gap:8}}>
        <button className="btn btn-green" onClick={() => alert("Edit profile (implement later)")}>Edit Profile</button>
        <button className="btn" onClick={() => alert("View full profile")}>View</button>
      </div>
    </div>
  );
}
