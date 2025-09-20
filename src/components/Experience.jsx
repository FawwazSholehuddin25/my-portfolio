// Experience.jsx
import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="exp-card">
        <h3>PT Pupuk Indonesia (Data Science)</h3>
        <p>Mar – Aug 2025</p>
        <ul>
          <li>Geospatial data analysis & crop classification</li>
          <li>Machine learning for crop prediction</li>
          <li>Time-series analysis for planting/harvesting</li>
        </ul>
      </div>
      <div className="exp-card">
        <h3>Universitas Mercu Buana – HR Bureau</h3>
        <p>Aug 2023 – Jul 2024</p>
        <ul>
          <li>Managed employee documents & payroll</li>
          <li>Data entry & digital archiving</li>
        </ul>
      </div>
      <div className="exp-card">
        <h3>MBVC – Volleyball Club</h3>
        <p>2023 – 2025</p>
        <ul>
          <li>Equipment Division & Public Relations</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
