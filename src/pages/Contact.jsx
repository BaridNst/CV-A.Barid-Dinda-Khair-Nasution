import React, { useContext } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { CvContext } from '../context/CvContext';
import { getIcon } from '../utils/IconMap';
import './Contact.css';

export default function Contact() {
  const { data, loading } = useContext(CvContext);

  if (loading) return <div className="contact-grid">Loading...</div>;

  return (
    <div className="contact-grid">
      <div className="bento-card span-2 contact-header">
        <h3 className="label">GET IN TOUCH</h3>
        <h1>Mari Berdiskusi Tentang <span className="highlight">Project</span> Anda</h1>
      </div>

      {data.contacts && data.contacts.map((item, index) => (
        <a 
          href={item.link} 
          key={index} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bento-card contact-card-link"
          style={{ "--accent": item.color }}
        >
          <div className="contact-icon" style={{ color: item.color }}>
            {getIcon(item.icon)}
          </div>
          <div className="contact-details">
            <span className="platform-name">{item.platform}</span>
            <h4 className="platform-value">{item.value}</h4>
          </div>
          <HiOutlineExternalLink className="arrow-icon" />
        </a>
      ))}
    </div>
  );
}