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

  // Fetch semua data dari backend
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cv');
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data dari database:", error);
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
