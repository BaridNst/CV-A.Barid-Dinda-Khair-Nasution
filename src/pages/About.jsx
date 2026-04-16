import React from 'react';
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi';
import './About.css';

export default function About() {
  const career = [
    { role: "Prompt Engineer", company: "CoreNexis", year: "2024 - Present" },
    { role: "Web Developer", company: "Freelance", year: "2023 - 2024" }
  ];

  const education = [
    { degree: "S1 Teknologi Informasi", school: "UIN Ar-Raniry", year: "2023 - 2026" },
    { degree: "Fullstack Bootcamp", school: "Dicoding", year: "2023" }
  ];

  return (
    <div className="about-grid">
      {/* Container Story */}
      <div className="bento-card span-2">
        <h3 className="label">MY STORY</h3>
        <p className="story-text">
          Saya adalah seorang <span>Prompt Engineer</span> dan <span>Web Developer</span> yang berfokus pada efisiensi teknologi. 
          Membangun jembatan antara logika mesin dan kebutuhan manusia adalah gairah utama saya.
        </p>
      </div>

      {/* Container Career */}
      <div className="bento-card">
        <div className="header-icon">
          <HiOutlineBriefcase />
          <h3 className="label">CAREER</h3>
        </div>
        <div className="timeline">
          {career.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="time-line-dot"></div>
              <h4>{item.role}</h4>
              <p>{item.company}</p>
              <span>{item.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Container Education */}
      <div className="bento-card">
        <div className="header-icon">
          <HiOutlineAcademicCap />
          <h3 className="label">EDUCATION</h3>
        </div>
        <div className="timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="time-line-dot"></div>
              <h4>{item.degree}</h4>
              <p>{item.school}</p>
              <span>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}