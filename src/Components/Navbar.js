import React from "react";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    
    <>
      <nav className="navbar" id="navbar-menu">
        <div className="nav-content container">
          <div>
            <h1 >
              <Link to="/" className="nav-brand" id="navbar-brand">
               Ritik Raj
              </Link>
            </h1>
          </div>

          <ul className="nav-items">
            <li >
              <Link to="/about" className="nav-link"  > 
                About
              </Link>
            </li>

            <li >
              <Link to="/portfolio" className="nav-link" >
                Portfolio
              </Link>
            </li>
            

            <li >
              <Link to="/contact" className="nav-link" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
