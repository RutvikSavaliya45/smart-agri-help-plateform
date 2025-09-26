import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import Complaints from "./components/Complaints";
import Users from "./components/Users";
import Schemes from "./components/Schemes";
import CropInfo from "./components/CropInfo";
import ExpertHelp from "./components/ExpertHelp";

export default function AdminDashboard() {
  const [active, setActive] = useState("home");

  // demo data (you will replace with backend later)
  const [complaints, setComplaints] = useState([
    { id: 1, farmer: "Ramesh", issue: "Water shortage", status: "Pending" },
    { id: 2, farmer: "Suresh", issue: "Seed quality issue", status: "In Progress" },
    { id: 3, farmer: "Kiran", issue: "No irrigation", status: "Resolved" },
  ]);

  const [users, setUsers] = useState([
    { id: "F-101", name: "Ramesh", role: "farmer", region: "Rajkot" },
    { id: "E-10", name: "Dr. Patel", role: "expert", region: "Ahmedabad" },
    { id: "A-01", name: "Super Admin", role: "admin", region: "Gandhinagar" },
  ]);

  const navigate = useNavigate();
  const handleLogout = () => {
    // clear session if any
    navigate("/login");
  };

  // handlers to pass to children (demo)
  const updateComplaintStatus = (id, status) => {
    setComplaints((prev) => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  const addScheme = (scheme) => {
    // implement later with backend
    alert("Scheme added (demo): " + scheme.title);
  };

  const addCropInfo = (crop) => {
    alert("Crop info added (demo): " + crop.name);
  };

  return (
    <div className="admin-wrap">
      <Sidebar active={active} setActive={setActive} handleLogout={handleLogout} />
      <main className="admin-main">
        <Header />
        {active === "home" && <Home complaints={complaints} users={users} />}
        {active === "complaints" && (
          <Complaints complaints={complaints} onUpdateStatus={updateComplaintStatus} />
        )}
        {active === "users" && <Users users={users} setUsers={setUsers} />}
        {active === "schemes" && <Schemes onAdd={addScheme} />}
        {active === "cropinfo" && <CropInfo onAdd={addCropInfo} />}
        {active === "experts" && <ExpertHelp />}
      </main>
    </div>
  );
}
