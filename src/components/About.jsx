// src/components/About.jsx
import React from "react";
import "./About.css";
import fawwazshImg from "../assets/fawwazshimg.jpeg";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container">
        {/* Foto kiri */}
        <div className="about-img-wrapper">
          <img
            src={fawwazshImg}
            alt="Fawwaz Sholehuddin"
            className="about-img"
          />
        </div>

        {/* Teks kanan */}
        <div className="about-content">
          <p>
            Hi, I’m <b>Fawwaz Sholehuddin</b>, an Informatics Engineering student
            at Universitas Mercu Buana, specializing in Data Science. I have strong
            skills in data processing, analytical thinking, and problem-solving.
          </p>
          <p>
            Passionate about Data Science, AI, and Web Development, I am disciplined,
            responsible, and able to work both independently and collaboratively in
            teams. Currently, I’m expanding my experience through academic projects
            and internships, where I apply data analysis, machine learning, and
            dashboard development to solve real-world problems.
          </p>

          {/* Gunakan nama file yang sama dengan yang di folder public */}
          <a 
            href={process.env.PUBLIC_URL + "/cv-fawwaz.pdf"} 
            download="CV_Fawwaz_Sholehuddin.pdf" 
            className="cv-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;