// src/components/Header.jsx
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import './Header.css'; // optional external styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Valasys Dashboard</h2>
      </div>
      <div className="header-right">
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon" />
        {/* <button className="logout-btn">Logout</button> */}
      </div>
    </header>
  );
};

export default Header;
