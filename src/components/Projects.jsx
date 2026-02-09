import React, { useState } from "react";
import "./Projects.css";

import fawwaz1 from "../assets/fawwaz1.jpeg";
import fawwaz2 from "../assets/fawwaz2.jpeg";
import fawwaz3 from "../assets/fawwaz3.jpeg";
import fawwaz4 from "../assets/fawwaz4.jpeg";
import fawwaz6 from "../assets/fawwaz6.jpeg";
import fawwaz5video from "../assets/fawwaz5.mp4";
import fawwaz7 from "../assets/fawwaz7.jpeg";

const projects = [
  {
    type: "image",
    img: fawwaz7,
    title: "Climate & Rice Production Analysis – IBM Granite AI",
    desc: "AI-powered analysis using IBM Granite to predict how climate variables impact rice production in Indonesia, supporting food security insights."
  },
  {
    type: "image",
    img: fawwaz6,
    title: "Data Mining for Criminal Case Analysis – Personal Project",
    desc: "Applied C4.5 decision tree in Google Colab to analyze criminal law cases involving violence against women."
  },
  {
    type: "image",
    img: fawwaz4,
    title: "Hospital Patient Data App – College Project",
    desc: "Developed an Android Studio mobile app to manage patient records with CRUD operations and DB integration."
  },
  {
    type: "image",
    img: fawwaz3,
    title: "Cultural Bridge Website – Team College Project",
    desc: "Created a website prototype with the theme 'Membangun Jembatan Budaya' to promote Indonesian local music."
  },
  {
    type: "image",
    img: fawwaz2,
    title: "Bike Shop Website – College Project",
    desc: "Designed an e-commerce website prototype for a bike shop using Figma with focus on user-friendly interface."
  },
  {
    type: "image",
    img: fawwaz1,
    title: "LAN Network Design with RIPV2 – Vocational Project",
    desc: "Built a LAN using Cisco Packet Tracer with RIPV2 routing protocol to simulate data communication between subnets."
  },
  {
    type: "video",
    video: fawwaz5video,
    title: "Flag & Object Animation – Team College Project",
    desc: "Created a 3D animation in Blender, including a flag simulation and creative object animation themed 'Roti Bermadu'."
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
                  className="project-media"
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>

        <button onClick={prevProject} className="nav-btn left-btn">
          &#8249;
        </button>
        <button onClick={nextProject} className="nav-btn right-btn">
          &#8250;
        </button>

        {/* 🔥 Dots indicator */}
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
