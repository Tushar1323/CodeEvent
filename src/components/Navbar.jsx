import React from "react";
import "./CSS/Navbar.css"; // Optional CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="logo-link">CodeEvent</a>
      </div>
      <ul className="navbar-menu">
        <li className="menu-item">
          <a href="/" className="menu-link">Home</a>
        </li>
        <li className="menu-item">
          <a href="/trending" className="menu-link">Trending Questions</a>
        </li>
        <li className="menu-item">
          <a href="/login" className="menu-link">Log In</a>
        </li>
        <li className="menu-item">
          <a href="/signup" className="menu-link">Sign Up for Community</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
