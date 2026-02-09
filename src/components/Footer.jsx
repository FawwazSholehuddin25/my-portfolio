// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Fawwaz Sholehuddinn</h3>
        <p>Informatics Engineering Student & Data Enthusiast</p>
      </div>
     <div className="footer-links">
    <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
  <a href="#certificates">Certificates</a>
  <a href="#contact">Contact</a>
    </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/fawwaz-sholehuddin25/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/FawwazSholehuddin25" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://wa.me/6282123937272" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
      </div>
    </footer>
  );
}

export default Footer;
