import React, { useState } from "react";
import "./Certificates.css";

// Import assets (tetap seperti semula)
import udemyPandas from "../assets/certificates/udemy-python-data-analysis.jpg";
import ibmGranite from "../assets/certificates/ibm-granite.jpg";
import hrPython from "../assets/certificates/hackerrank-python.jpg";
import hrSql from "../assets/certificates/hackerrank-sql.jpg";
import hrJava from "../assets/certificates/hackerrank-java.jpg";
import sololearnViz from "../assets/certificates/sololearn-visualize-data.jpg";
import ciscoCcnAv7 from "../assets/certificates/cisco-ccnav7.jpg";
import ciscoItEssentials from "../assets/certificates/cisco-it-essentials.jpg";

const certificates = [
  { img: udemyPandas, title: "Python Data Analysis Bootcamp - Pandas, Seaborn and Plotly" },
  { img: ibmGranite, title: "Data Classification and Summarization Using IBM Granite" },
  { img: hrPython, title: "Python (Basic) – HackerRank" },
  { img: hrSql, title: "SQL (Basic) – HackerRank" },
  { img: hrJava, title: "Java (Basic) – HackerRank" },
  { img: sololearnViz, title: "Visualize Your Data – SoloLearn" },
  { img: ciscoCcnAv7, title: "CCNAv7: Introduction to Networks" },
  { img: ciscoItEssentials, title: "IT Essentials: PC Hardware and Software" },
];

function Certificates() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % certificates.length);
  const prev = () => setCurrent((p) => (p - 1 + certificates.length) % certificates.length);

  return (
    <section id="certificates" className="cert-section">
      <h2 className="cert-title-main">Certificates</h2>
      <span className="cert-subtitle-main">Credentials & Achievements</span>

      <div className="cert-slider-wrapper">
        <div 
          className="cert-track-container" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <div className="cert-item-slide" key={index}>
              <div className="cert-img-box">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="cert-img-content" 
                />
              </div>
              <h3 className="cert-item-title">{cert.title}</h3>
            </div>
          ))}
        </div>

        {/* Navigation Buttons dengan nama unik */}
        <button onClick={prev} className="cert-btn-nav cert-btn-left">&#8249;</button>
        <button onClick={next} className="cert-btn-nav cert-btn-right">&#8250;</button>

        {/* Dots dengan nama unik */}
        <div className="cert-dots-container">
          {certificates.map((_, index) => (
            <span
              key={index}
              className={`cert-dot-single ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;