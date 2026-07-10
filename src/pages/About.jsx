import React, { useContext } from 'react';
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi';
import { CvContext } from '../context/CvContext';
import './About.css';

export default function About() {
  const { data, loading } = useContext(CvContext);

  if (loading) return <div className="about-grid">Loading...</div>;

  return (
    <div className="about-grid">
      {/* Container Story */}
      <div className="bento-card span-2">
        <h3 className="label">MY STORY</h3>
        <p className="story-text">
          {data.profile.story || "Saya adalah seorang Web Developer..."}
        </p>
      </div>

      {/* Container Career */}
      <div className="bento-card">
        <div className="header-icon">
          <HiOutlineBriefcase />
          <h3 className="label">CAREER</h3>
        </div>
        <div className="timeline">
          {data.career && data.career.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="time-line-dot"></div>
              <h4>{item.title}</h4>
              <p>{item.organization}</p>
              <span>{item.year_range}</span>
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
          {data.education && data.education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="time-line-dot"></div>
              <h4>{item.title}</h4>
              <p>{item.organization}</p>
              <span>{item.year_range}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}