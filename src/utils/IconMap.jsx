import React from 'react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, 
  SiPostgresql, SiTailwindcss, SiFigma, SiJavascript,
  SiWhatsapp, SiInstagram, SiGmail
} from 'react-icons/si';
import { HiOutlineCode, HiOutlineLightningBolt, HiOutlineDeviceMobile, HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi';

export const getIcon = (iconName) => {
  const icons = {
    SiReact: <SiReact />,
    SiNextdotjs: <SiNextdotjs />,
    SiNodedotjs: <SiNodedotjs />,
    SiPython: <SiPython />,
    SiPostgresql: <SiPostgresql />,
    SiTailwindcss: <SiTailwindcss />,
    SiFigma: <SiFigma />,
    SiJavascript: <SiJavascript />,
    HiOutlineCode: <HiOutlineCode />,
    HiOutlineLightningBolt: <HiOutlineLightningBolt />,
    HiOutlineDeviceMobile: <HiOutlineDeviceMobile />,
    SiWhatsapp: <SiWhatsapp />,
    SiInstagram: <SiInstagram />,
    SiGmail: <SiGmail />,
    HiOutlineBriefcase: <HiOutlineBriefcase />,
    HiOutlineAcademicCap: <HiOutlineAcademicCap />
  };
  
  return icons[iconName] || <HiOutlineCode />;
};
