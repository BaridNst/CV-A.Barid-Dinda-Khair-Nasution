import React from 'react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, 
  SiPostgresql, SiTailwindcss, SiFigma, SiJavascript 
} from 'react-icons/si';
import { HiOutlineCode, HiOutlineLightningBolt, HiOutlineDeviceMobile } from 'react-icons/hi';
import './Home.css';

export default function Home() {
  const skills = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  ];

  const services = [
    { title: "Web Development", desc: "Modern & Responsive", icon: <HiOutlineCode /> },
    { title: "UI/UX Design", desc: "Clean & Intuitive", icon: <SiFigma /> },
    { title: "Optimization", desc: "Fast Performance", icon: <HiOutlineLightningBolt /> },
  ];

  return (
    <div className="home-grid">
      {/* SECTION PROFIL KERING */}
      <div className="bento-card hero-ultra">
        <div className="profile-hex">
          <div className="hex-glow"></div>
          <img src="https://cdn.corenexis.com/files/c/3518643720.png" alt="Barid" className="hex-img" />
        </div>
        <div className="hero-content">
          <span className="badge-animated">MAHASISWA TEKNOLOGI INGORMASI</span>
          <h1>Barid <span className="text-gradient">Nst</span></h1>
          <p>Transforming complex logic into elegant digital experiences.</p>
        </div>
      </div>

      {/* SECTION SKILLS */}
      <div className="bento-card skills-container">
        <h3 className="label">CORE STACK</h3>
        <div className="skill-grid-ultra">
          {skills.map((s, i) => (
            <button key={i} className="skill-card-btn" style={{ "--clr": s.color }}>
              <div className="icon-box">{s.icon}</div>
              <span>{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION SERVICES */}
      <div className="bento-card services-container">
        <h3 className="label">MY SERVICES</h3>
        <div className="service-list-ultra">
          {services.map((ser, i) => (
            <div key={i} className="service-item-ultra">
              <div className="ser-icon">{ser.icon}</div>
              <div className="ser-text">
                <h4>{ser.title}</h4>
                <p>{ser.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}