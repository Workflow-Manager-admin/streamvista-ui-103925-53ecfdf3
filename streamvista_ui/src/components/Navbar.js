import React from "react";
import "./Navbar.css";

// SVGs inline for icons (no external assets)
const HamburgerIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    className="nav-menu-icon"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <rect y="7" width="32" height="3" rx="1.5" fill="currentColor" />
    <rect y="14.5" width="32" height="3" rx="1.5" fill="currentColor" />
    <rect y="22" width="20" height="3" rx="1.5" fill="currentColor" />
  </svg>
);

const BellIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    className="nav-action-icon"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M22.5 23.8V14a6.5 6.5 0 10-13 0v9.8l-2.033 2.035A1 1 0 008 27h16a1 1 0 00.733-1.665L22.5 23.8z"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="16"
      cy="27"
      r="2"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const UserIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    className="nav-action-icon"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <circle
      cx="16"
      cy="12"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M6 26c1.5-5 12.5-5 14 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// PUBLIC_INTERFACE
function Navbar({ activeTab, onTabChange }) {
  // This src should be replaced with Hotstar logo asset if available
  return (
    <header className="app-header">
      <nav className="navbar-hotstar" role="navigation" aria-label="Main Navigation">
        <div className="nav-left-block">
          <button className="nav-icon-btn menu-btn" aria-label="Open menu">
            {HamburgerIcon}
          </button>
          <a href="/" className="logo-block" tabIndex={0}>
            {/* Replace with Hotstar logo src if available in /assets */}
            <img src="/logo192.png" alt="Hotstar Logo" className="logo-img" />
          </a>
        </div>
        <div className="nav-tabs" role="tablist" aria-label="Category tabs">
          {["Home", "TV", "Movies", "Sports", "News", "Premium"].map((tab, idx) => (
            <button
              key={tab}
              className={`nav-tab${activeTab === tab ? " active" : ""}`}
              onClick={() => onTabChange(tab)}
              tabIndex={0}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`tabpanel-${tab.toLowerCase()}`}
              id={`tab-${tab.toLowerCase()}`}
              style={{}}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="nav-right-block">
          <button className="nav-icon-btn" aria-label="Notifications">
            {BellIcon}
          </button>
          <button className="nav-icon-btn profile-btn" aria-label="Profile">
            {UserIcon}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
