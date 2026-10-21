import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h3>Fawwaz Sholehuddin</h3>
        <p>Data Scientist & Data Analyst</p>
      </div>

      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/fawwaz-sholehuddin25/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FawwazSholehuddin25"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/6282123937272"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      <p className="footer-copy">© 2026 Fawwaz Sholehuddin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;