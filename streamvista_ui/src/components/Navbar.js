import React from "react";
import "./Navbar.css";

// PUBLIC_INTERFACE
function Navbar({ activeTab, onTabChange }) {
  return (
    <nav className="navbar-hotstar">
      <div className="navbar-logo">
        <img src="/logo192.png" alt="StreamVista" className="navbar-logo-img" />
        <span className="navbar-logo-text">StreamVista</span>
      </div>
      <div className="navbar-tabs">
        {["Home", "TV", "Movies", "Sports", "News", "Premium"].map((tab) => (
          <button
            key={tab}
            className={`navbar-tab${activeTab === tab ? " active" : ""}`}
            onClick={() => onTabChange(tab)}
            tabIndex={0}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="navbar-actions">
        <input
          className="navbar-search"
          type="search"
          placeholder="Search"
        />
        <button className="navbar-profile">
          <span role="img" aria-label="profile">👤</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
