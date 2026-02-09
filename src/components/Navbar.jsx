// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">fawwazsholehuddin</div>
      <ul className="nav-links">
        <li>
          <Link to="hero" spy smooth offset={-80} duration={500} activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy smooth offset={-80} duration={500} activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" spy smooth offset={-80} duration={500} activeClass="active">
            Projects
          </Link>
        </li>

        {/* ✅ NEW: Certificates */}
        <li>
          <Link to="certificates" spy smooth offset={-80} duration={500} activeClass="active">
            Certificates
          </Link>
        </li>

        <li>
          <Link to="skills" spy smooth offset={-80} duration={500} activeClass="active">
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" spy smooth offset={-80} duration={500} activeClass="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
