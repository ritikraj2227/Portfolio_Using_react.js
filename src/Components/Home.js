import React from "react";
import { Link } from "react-router-dom";

export default function Home() { 
  return (
    <>
    <div className="home-content">
      <div className="name">
        <h1>I'm Ritik Raj</h1>
        <p>A Web Developer in traning.</p>
      </div>
      <div className="down-icon">
        <Link to="/about">
          About Me <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
    
    </>
  );
}
