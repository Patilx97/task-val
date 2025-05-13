// src/Components/CustomSidebar/CustomSidebar.js
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaTachometerAlt, FaRobot, FaShieldAlt, FaCloud, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CustomSidebar.css"
import { useNavigate } from "react-router-dom";



const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();


  const toggleSidebar = () => setCollapsed(!collapsed);

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
    <div style={{ height: "100vh", display: "flex", backgroundColor: "#fff" }}>
      <ProSidebar
        collapsed={collapsed}
        style={{
          height: "100vh",
          backgroundColor: "#fff",
          transition: "all 0.3s ease",
        }}
      >
        <Menu iconShape="circle">
          <MenuItem icon={<FaBars />} onClick={toggleSidebar}>
            {collapsed ? "" : "Toggle"}
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />}><Link to="/dashboard">Dashboard</Link></MenuItem>
          <MenuItem icon={<FaRobot />}><Link to="/ai-trends">AI Trends</Link></MenuItem>
          <MenuItem icon={<FaShieldAlt />}><Link to="/cybersecurity">Cybersecurity</Link></MenuItem>
          <MenuItem icon={<FaCloud />}><Link to="/cloud-updates">Cloud Updates</Link></MenuItem>
        </Menu>
              <div className="d-flex justify-content-center">
     <button onClick={handleLogout} className="btn btn-danger mt-3">
        Logout
      </button>
</div>
      </ProSidebar>

    </div>
     
      </>
  );
};

export default CustomSidebar;

