import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar" id="navbar-menu">
        <div className="nav-content container">
          <div>
            <h1>
              <NavLink to="/home" className="nav-brand" id="navbar-brand">
                Ritik Raj
              </NavLink>
            </h1>
          </div>

          <ul className="nav-items">
            <li>
              <NavLink to="/home" className="nav-NavLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-NavLink">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/portfolio" className="nav-NavLink">
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="nav-NavLink">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
