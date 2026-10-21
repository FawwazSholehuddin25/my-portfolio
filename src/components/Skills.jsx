import React from "react";
import "./Skills.css";

// Import Logo Skill
import Python from "../assets/skills/python.svg";
import Sql from "../assets/skills/sql.svg";
import Pandas from "../assets/skills/pandas.svg";
import ScikitLearn from "../assets/skills/scikit-learn.svg";
import TensorFlow from "../assets/skills/tensorflow.svg";
import Keras from "../assets/skills/keras.svg";
import PyTorch from "../assets/skills/pytorch.svg";
import Matplotlib from "../assets/skills/matplotlib.svg";
import Seaborn from "../assets/skills/seaborn.svg";
import Knime from "../assets/skills/knime.svg";
import Tableau from "../assets/skills/tableau.svg";
import Excel from "../assets/skills/excel.svg";
import GoogleColab from "../assets/skills/googlecolab.svg";
import Github from "../assets/skills/github.svg";
import VSCode from "../assets/skills/visualstudiocode.svg";
import ReactJS from "../assets/skills/react.svg";
import Figma from "../assets/skills/figma.svg";
import Canva from "../assets/skills/canva.svg";

function Skills() {
  // Terurut rapi: Bahasa Utama -> Data Science & ML -> BI & Tools -> Web & Design
  const skills = [
    // 1. Bahasa Utama & Database
    { name: "Python", icon: Python },
    { name: "SQL", icon: Sql },

    // 2. Data Science, ML & Deep Learning
    { name: "Pandas", icon: Pandas },
    { name: "Scikit-Learn", icon: ScikitLearn },
    { name: "TensorFlow", icon: TensorFlow },
    { name: "Keras", icon: Keras },
    { name: "PyTorch", icon: PyTorch },
    { name: "Matplotlib", icon: Matplotlib },
    { name: "Seaborn", icon: Seaborn },
    { name: "KNIME", icon: Knime },

    // 3. Analytics, GIS & Developer Tools
    { name: "Tableau", icon: Tableau },
    { name: "QGIS", icon: "/icons/qgis.svg" },
    { name: "Excel / Sheets", icon: Excel },
    { name: "Google Colab", icon: GoogleColab },
    { name: "GitHub", icon: Github },
    { name: "VS Code", icon: VSCode },

    // 4. Web Development & UI/UX Modeling
    { name: "React.js", icon: ReactJS },
    { name: "Figma", icon: Figma },
    { name: "Canva", icon: Canva }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">Keahlian Teknis & Tools</span>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;