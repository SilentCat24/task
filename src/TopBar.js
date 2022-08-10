import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <h2>Profile</h2>
        </div>

        <div className="link">
          <a href="#" className="links">
            Home
          </a>
          <a href="#" className="links">
            Contact
          </a>
          <a href="#" className="links">
            Back
          </a>
          <a href="#" className="links">
            Live
          </a>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
