import React, { useState } from "react";
import "./Projects.css";

import fawwaz6 from "../assets/fawwaz6.jpeg";
import fawwaz7 from "../assets/fawwaz7.jpeg";
import fawwaz9 from "../assets/fawwaz9.jpeg";
import fawwaz10video from "../assets/fawwaz10.mp4";

const projects = [
  {
    type: "image",
    img: fawwaz7,
    title: "Analisis Iklim & Produksi Padi – IBM Granite AI",
    desc: "Analisis berbasis AI menggunakan IBM Granite untuk memprediksi dampak variabel iklim terhadap produksi padi di Indonesia guna mendukung wawasan ketahanan pangan."
  },
  {
    type: "image",
    img: fawwaz9,
    title: "Sistem Rekomendasi Film Hybrid NCF",
    desc: "Membangun model Hybrid Neural Collaborative Filtering menggunakan Keras Tuner & 5-Fold Cross Validation pada 62.000+ data rating untuk menghasilkan 10 rekomendasi film teratas."
  },
  {
    type: "image",
    img: fawwaz6,
    title: "Data Mining Analisis Kasus Pidana",
    desc: "Menerapkan algoritma pohon keputusan C4.5 di Google Colab untuk menganalisis pola dan mengekstrak informasi dari kasus hukum pidana kekerasan terhadap perempuan."
  },
  {
    type: "video",
    video: fawwaz10video,
    title: "Sistem Deteksi Pelanggaran Helm Otomatis – YOLO11",
    desc: "Mengembangkan model Computer Vision end-to-end menggunakan Ultralytics YOLO11 pada GPU Tesla T4. Mampu mengklasifikasikan 4 objek lalu lintas dengan mAP50 84.7% dan akurasi 99.5% dalam mendeteksi pelanggaran pengendara tanpa helm."
  }
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Most Recent Work</span>

      <div className="projects-slider">
        <div
          className="projects-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className="project-slide" key={index}>
              {project.type === "image" ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-media"
                />
              ) : (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-media"
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>

        <button onClick={prevProject} className="nav-btn left-btn" aria-label="Previous Project">
          &#8249;
        </button>
        <button onClick={nextProject} className="nav-btn right-btn" aria-label="Next Project">
          &#8250;
        </button>

        {/* Dots indicator */}
        <div className="projects-dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;