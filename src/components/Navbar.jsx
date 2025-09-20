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
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}   // sesuaikan tinggi navbar
            duration={500}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
