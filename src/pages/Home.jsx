import React, { useContext } from 'react';
import { CvContext } from '../context/CvContext';
import { getIcon } from '../utils/IconMap';
import './Home.css';

export default function Home() {
  const { data, loading } = useContext(CvContext);

  if (loading) return <div className="home-grid">Loading...</div>;

  return (
    <div className="home-grid">
      {/* SECTION PROFIL KERING */}
      <div className="bento-card hero-ultra">
        <div className="profile-hex">
          <div className="hex-glow"></div>
          <img src={data.profile.photo_url || "/Barid.png"} alt="Barid" className="hex-img" />
        </div>
        <div className="hero-content">
          <span className="badge-animated">{data.profile.title || "MAHASISWA"}</span>
          <h1>{data.profile.full_name || "Barid"}</h1>
          <p>{data.profile.story || "Transforming complex logic into elegant digital experiences."}</p>
        </div>
      </div>

      {/* SECTION SKILLS */}
      <div className="bento-card skills-container">
        <h3 className="label">CORE STACK</h3>
        <div className="skill-grid-ultra">
          {data.skills && data.skills.map((s, i) => (
            <button key={i} className="skill-card-btn" style={{ "--clr": s.color }}>
              <div className="icon-box">{getIcon(s.icon)}</div>
              <span>{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION SERVICES */}
      <div className="bento-card services-container">
        <h3 className="label">MY SERVICES</h3>
        <div className="service-list-ultra">
          {data.services && data.services.map((ser, i) => (
            <div key={i} className="service-item-ultra">
              <div className="ser-icon">{getIcon(ser.icon)}</div>
              <div className="ser-text">
                <h4>{ser.title}</h4>
                <p>{ser.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}