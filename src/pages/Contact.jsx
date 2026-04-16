import React from 'react';
import { SiWhatsapp, SiInstagram, SiGmail } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './Contact.css';

export default function Contact() {
  const contactData = [
    {
      platform: "WhatsApp",
      value: "085212583609",
      link: "https://wa.me/6285212583609",
      icon: <SiWhatsapp />,
      color: "#25D366"
    },
    {
      platform: "Email",
      value: "baridnst23@gmail.com",
      link: "mailto:baridnst23@gmail.com",
      icon: <SiGmail />,
      color: "#EA4335"
    },
    {
      platform: "Instagram",
      value: "@a.baridnasution",
      link: "https://www.instagram.com/a.baridnasution?igsh=bzAxaGZhZDkxYjVh",
      icon: <SiInstagram />,
      color: "#E1306C"
    }
  ];

  return (
    <div className="contact-grid">
      <div className="bento-card span-2 contact-header">
        <h3 className="label">GET IN TOUCH</h3>
        <h1>Mari Berdiskusi Tentang <span className="highlight">Project</span> Anda</h1>
      </div>

      {contactData.map((item, index) => (
        <a 
          href={item.link} 
          key={index} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bento-card contact-card-link"
          style={{ "--accent": item.color }}
        >
          <div className="contact-icon" style={{ color: item.color }}>
            {item.icon}
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