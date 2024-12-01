import React from "react";
import "../styles/styles.css";

export default function Navbar() {
  return (
    <div className="flex-centered">
      <p className="logo-font">BIKE EDMONTON</p>
      <div className="navbar">
        <ul>
          <li>Programs</li>
          <li>Resources</li>
          <li>Support</li>
          <li>About</li>
        </ul>
      </div>
      <button id="volunteer">Volunteer</button>
    </div>
  );
}
