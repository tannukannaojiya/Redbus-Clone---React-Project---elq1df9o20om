import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src="redbus_logo.png" alt="redbus" />

      </div>
      <div id="navbar-right">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
        
      </div>
      <div>
      <Link to="/login"><button type="button">Login</button></Link>
      </div>
    </div>
  );
}