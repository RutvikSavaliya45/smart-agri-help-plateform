import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FarmerDashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import FileComplaint from "./components/FileComplaint";
import ComplaintsList from "./components/ComplaintsList";
import ExpertHelp from "./components/ExpertHelp";
import CropInfo from "./components/CropInfo";
import Weather from "./components/Weather";
import CropRates from "./components/CropRates";
import Schemes from "./components/Schemes";


export default function FarmerDashboard() {
  const [active, setActive] = useState("home");
  const [complaints, setComplaints] = useState([
    { id: 1, issue: "Water supply problem", status: "Pending" },
    { id: 2, issue: "Fertilizer not available", status: "In Progress" },
  ]);

  // ✅ Weather state (demo)
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // यहां आप future में API call कर सकते हैं
    // अभी demo static data रखा है
    setWeather({
      name: "Rajkot",
      main: { temp: 30.5 },
      weather: [{ main: "Sunny" }],
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    // जरूरत हो तो localStorage/session साफ़ कर सकते हैं
    navigate("/");
  };

  const addComplaint = (text) => {
    if (!text.trim()) return;
    setComplaints((prev) => [
      ...prev,
      { id: prev.length + 1, issue: text.trim(), status: "Pending" },
    ]);
  };

  return (
    <div className="farmer-wrap">
      <Sidebar active={active} setActive={setActive} handleLogout={handleLogout} />
      <main className="farmer-main">
        <Header />

        {active === "home" && (
          <Home
            complaints={complaints}
            cropSummary={[
              { crop: "Wheat", avg: 2250 },
              { crop: "Cotton", avg: 8200 },
              { crop: "Groundnut", avg: 5550 },
              { crop: "Onion", avg: 1200 },
            ]}
            weatherMini={
              weather
                ? { name: weather.name, temp: weather.main.temp, desc: weather.weather[0].main }
                : null
            }
            onOpenCropRates={() => setActive("rate")}
          />
        )}

        {active === "file" && <FileComplaint addComplaint={addComplaint} />}
        {active === "list" && <ComplaintsList complaints={complaints} />}
        {active === "expert" && <ExpertHelp />}
        {active === "crop" && <CropInfo />}
        {active === "check" && <Weather />}
        {active === "rate" && <CropRates />}
        {active === "scheme" && <Schemes />}
        
      </main>
    </div>
  );
}
