import React, { createContext, useState, useEffect } from 'react';

export const CvContext = createContext();

export const CvProvider = ({ children }) => {
  const [data, setData] = useState({
    profile: {},
    skills: [],
    services: [],
    career: [],
    education: [],
    contacts: []
  });
  const [loading, setLoading] = useState(true);

  const fallbackData = {
    profile: {
      full_name: 'Barid Nst',
      title: 'Mahasiswa Teknologi Informasi & Web Developer Junior',
      photo_url: '/Barid.png',
      story: 'Saya adalah seorang Mahasiswa Teknologi Informasi dan Web Developer Junior yang berfokus pada efisiensi teknologi. Membangun jembatan antara logika mesin dan kebutuhan manusia adalah gairah utama saya.'
    },
    skills: [
      { id: 1, name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { id: 2, name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
      { id: 3, name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { id: 4, name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { id: 5, name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { id: 6, name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' }
    ],
    services: [
      { id: 1, title: 'Web Development', description: 'Modern & Responsive', icon: 'HiOutlineCode' },
      { id: 2, title: 'UI/UX Design', description: 'Clean & Intuitive', icon: 'SiFigma' },
      { id: 3, title: 'Optimization', description: 'Fast Performance', icon: 'HiOutlineLightningBolt' }
    ],
    career: [
      { id: 1, title: 'UI/UX Design', organization: 'Freelance', year_range: '2024 - Present' },
      { id: 2, title: 'Web Developer', organization: 'Freelance', year_range: '2023 - Present' }
    ],
    education: [
      { id: 3, title: 'S1 Teknologi Informasi', organization: 'UIN Ar-Raniry', year_range: '2023 - 2026' },
      { id: 4, title: 'Fullstack Bootcamp', organization: 'Dicoding', year_range: '2023' }
    ],
    contacts: [
      { id: 1, platform: 'WhatsApp', value: '085212583609', link: 'https://wa.me/6285212583609', icon: 'SiWhatsapp', color: '#25D366' },
      { id: 2, platform: 'Email', value: 'baridnst23@gmail.com', link: 'mailto:baridnst23@gmail.com', icon: 'SiGmail', color: '#EA4335' },
      { id: 3, platform: 'Instagram', value: '@a.baridnasution', link: 'https://www.instagram.com/a.baridnasution?igsh=bzAxaGZhZDkxYjVh', icon: 'SiInstagram', color: '#E1306C' }
    ]
  };

  // Fetch semua data dari backend
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cv');
      if (!res.ok) throw new Error("API tidak merespon");
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log("Database lokal tidak terdeteksi (Mode Vercel). Menggunakan data default.");
      setData(fallbackData);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateProfile = async (newProfile) => {
    try {
      await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfile)
      });
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const addSkill = async (newSkill) => {
    try {
      await fetch('http://localhost:5000/api/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill)
      });
      fetchData();
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/skills/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <CvContext.Provider value={{ data, loading, updateProfile, addSkill, deleteSkill, fetchData }}>
      {children}
    </CvContext.Provider>
  );
};
