import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
  
    <nav className="main-nav">
      
      {/* manu part */}
      
      <div className="logo">
        <h2><span>R</span>ed
        <span>B</span>us
        </h2>
      </div>
      <div className="nav-bar">
      <ul className="nav-link">
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>About Us</li>
        <li><a href="#"></a>Contact Me</li>
       </ul>
      </div>
      
     </nav>
  )
}

export default Navbar;
