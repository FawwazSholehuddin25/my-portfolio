import React from "react";
import "./Skills.css";

// Import logo dari assets
import Python from "../assets/skills/python.svg";
import Pandas from "../assets/skills/pandas.svg";
import ScikitLearn from "../assets/skills/scikit-learn.svg";
import TensorFlow from "../assets/skills/tensorflow.svg";
import Matplotlib from "../assets/skills/matplotlib.svg";
import Seaborn from "../assets/skills/seaborn.svg";
import Knime from "../assets/skills/knime.svg";
import Tableau from "../assets/skills/tableau.svg";
import Cpp from "../assets/skills/cpp.svg";
import Java from "../assets/skills/java.svg";
import Html from "../assets/skills/html.svg";
import Css from "../assets/skills/css.svg";
import ReactJS from "../assets/skills/react.svg";
import GoogleColab from "../assets/skills/googlecolab.svg";
import Github from "../assets/skills/github.svg";
import VSCode from "../assets/skills/visualstudiocode.svg";
import Blender from "../assets/skills/blender.svg";
import Canva from "../assets/skills/canva.svg";
import Figma from "../assets/skills/figma.svg";
import Cisco from "../assets/skills/cisco.svg";
import AndroidStudio from "../assets/skills/androidstudio.svg";

function Skills() {
  const skills = [
    { name: "Python", icon: Python },
    { name: "Pandas", icon: Pandas },
    { name: "Scikit-Learn", icon: ScikitLearn },
    { name: "TensorFlow", icon: TensorFlow },
    { name: "Matplotlib", icon: Matplotlib },
    { name: "Seaborn", icon: Seaborn },
    { name: "KNIME", icon: Knime },
    { name: "Tableau", icon: Tableau },
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "React.js", icon: ReactJS },
    { name: "Google Colab", icon: GoogleColab },
    { name: "GitHub", icon: Github },
    { name: "Visual Studio Code", icon: VSCode },
    { name: "QGIS", icon: "/icons/qgis.svg" },
    { name: "Blender", icon: Blender },
    { name: "Canva", icon: Canva },
    { name: "Figma", icon: Figma },
    { name: "Cisco Packet Tracer", icon: Cisco },
    { name: "Android Studio", icon: AndroidStudio },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">My Technical Skills</p>

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
