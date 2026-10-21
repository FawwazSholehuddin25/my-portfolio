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
        {/* Foto Kiri */}
        <div className="about-img-wrapper">
          <img
            src={fawwazshImg}
            alt="Fawwaz Sholehuddin"
            className="about-img"
          />
        </div>

        {/* Teks Kanan */}
        <div className="about-content">
          <p className="about-text">
            Lulusan S1 Teknik Informatika dari <strong>Universitas Mercu Buana</strong> (IPK <strong style={{ color: "#0EA5E9" }}>3.78/4.00</strong>) dengan fokus spesialisasi pada <em>Data Analytics</em> dan <em>Data Science</em>. Memiliki pemahaman yang kuat dalam pengolahan data, pengelolaan basis data, serta pola pikir analitis.
          </p>

          <p className="about-text">
            Berpengalaman sebagai Intern di <strong>Kemendiktisaintek</strong> (membangun sistem penilaian otomatis berbasis Google Sheets/XLOOKUP untuk 100+ reviewer dan mengelola dana hibah riset) serta di <strong>PT Pupuk Indonesia</strong> (mengolah data spasial, pemodelan Machine Learning, dan optimasi dashboard).
          </p>

          <a
  href={process.env.PUBLIC_URL + "/CV ATS_Fawwaz Sholehuddin-.pdf"}
  download="CV_Fawwaz Sholehuddin.pdf"
  className="cv-button"
>
  <FaDownload /> Unduh CV
</a>
        </div>
      </div>
    </section>
  );
}

export default About;