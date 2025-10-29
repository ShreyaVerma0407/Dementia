import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation(); // For active link highlight

  return (
    <nav className="navbar">
      {/* Left side with "Dementia" */}
      <div className="navbar-left">
        <span className="logo-text">Dementia</span>
      </div>

      {/* Right side with "Help Desk" */}
      <div className="navbar-right">
        <Link
          to="/helpdesk"
          className={`nav-link ${location.pathname === "/helpdesk" ? "active" : ""}`}
        >
          Help Desk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
