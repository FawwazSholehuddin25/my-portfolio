import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Hero.css";
import fawwazImg from "../assets/fawwazimg.jpeg";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Sidebar Social Media */}
      <div className="socials-sidebar">
        <a href="https://www.linkedin.com/in/fawwaz-sholehuddin25/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/FawwazSholehuddin25" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/6282123937272" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            <ReactTyped
              strings={["Halo, Saya Fawwaz Sholehuddin"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>

          <h2 className="subtitle">
            Lulusan Teknik Informatika |{" "}
            <span className="highlight" style={{ color: "#0EA5E9", fontWeight: "bold" }}>
              Data Analyst & Data Scientist
            </span>
          </h2>

          <p className="hero-desc">
            Lulusan Teknik Informatika Mercu Buana (IPK 3.78) dengan pengalaman mengolah data, membangun dashboard interaktif, dan mengembangkan model machine learning untuk membantu tim mengambil keputusan berbasis data.
          </p>

          <a href="#contact" className="btn">
            <FaEnvelope style={{ marginRight: "8px" }} /> Hubungi Saya
          </a>
        </div>

        {/* Hero Image */}
        <div className="hero-img">
          <img src={fawwazImg} alt="Fawwaz Sholehuddin" />
        </div>
      </div>
    </section>
  );
}

export default Hero;