import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CvContext } from '../context/CvContext';
import { HiOutlineUser, HiOutlineLightningBolt, HiOutlineBriefcase, HiOutlineViewGrid, HiLogout, HiOutlineCloudUpload } from 'react-icons/hi';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { data, loading, updateProfile, addSkill, deleteSkill } = useContext(CvContext);
  
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profileForm, setProfileForm] = useState({
    full_name: '',
    title: '',
    photo_url: '',
    story: ''
  });

  const [newSkill, setNewSkill] = useState({ name: '', icon: 'HiOutlineCode', color: '#ffffff' });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate('/login');
  }, [navigate]);

  useEffect(() => {
    if (data.profile && !loading) {
      setProfileForm({
        full_name: data.profile.full_name || '',
        title: data.profile.title || '',
        photo_url: data.profile.photo_url || '',
        story: data.profile.story || ''
      });
    }
  }, [data.profile, loading]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    alert('Profile berhasil diupdate!');
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    addSkill(newSkill);
    setNewSkill({ name: '', icon: 'HiOutlineCode', color: '#ffffff' });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-layout">
      {/* Sidebar Nav */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Panel <span>Admin</span></h2>
        </div>
        <nav className="admin-nav">
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            <HiOutlineUser /> Profil & Story
          </button>
          <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>
            <HiOutlineLightningBolt /> Keahlian (Skills)
          </button>
          <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>
            <HiOutlineViewGrid /> Layanan
          </button>
          <button className={activeTab === 'timeline' ? 'active' : ''} onClick={() => setActiveTab('timeline')}>
            <HiOutlineBriefcase /> Karir & Pendidikan
          </button>
        </nav>
        <button onClick={handleLogout} className="btn-logout">
          <HiLogout /> Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="admin-content">
        <div className="admin-header-bar">
          <h3>Manajemen {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
        </div>

        <div className="admin-body">
          {/* TAB: PROFILE */}
          {activeTab === 'profile' && (
            <div className="admin-card fade-in">
              <form onSubmit={handleProfileSubmit}>
                
                <div className="form-group">
                  <label>URL Foto Profil</label>
                  <div className="upload-box">
                    <img src={profileForm.photo_url || "https://via.placeholder.com/150"} alt="Preview" className="img-preview" />
                    <input 
                      type="text" 
                      placeholder="Masukkan Link URL Gambar disini..." 
                      value={profileForm.photo_url} 
                      onChange={(e) => setProfileForm({...profileForm, photo_url: e.target.value})} 
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input 
                      type="text" 
                      value={profileForm.full_name} 
                      onChange={(e) => setProfileForm({...profileForm, full_name: e.target.value})} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Title Pekerjaan</label>
                    <input 
                      type="text" 
                      value={profileForm.title} 
                      onChange={(e) => setProfileForm({...profileForm, title: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Story (About Me)</label>
                  <textarea 
                    rows="6"
                    value={profileForm.story} 
                    onChange={(e) => setProfileForm({...profileForm, story: e.target.value})} 
                  />
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="btn-primary">Simpan Profil</button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: SKILLS */}
          {activeTab === 'skills' && (
            <div className="admin-card fade-in">
              <h4 className="section-title">Tambah Skill Baru</h4>
              <form onSubmit={handleAddSkill} className="skill-form">
                <input 
                  type="text" 
                  placeholder="Nama Skill (ex: React)" 
                  value={newSkill.name} 
                  onChange={(e) => setNewSkill({...newSkill, name: e.target.value})} 
                  required
                />
                <input 
                  type="text" 
                  placeholder="Icon (ex: SiReact)" 
                  value={newSkill.icon} 
                  onChange={(e) => setNewSkill({...newSkill, icon: e.target.value})} 
                  required
                />
                <div className="color-picker-wrap">
                  <label>Warna:</label>
                  <input 
                    type="color" 
                    value={newSkill.color} 
                    onChange={(e) => setNewSkill({...newSkill, color: e.target.value})} 
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">Tambah</button>
              </form>

              <h4 className="section-title">Daftar Skill Saat Ini</h4>
              <ul className="admin-list">
                {data.skills && data.skills.map(s => (
                  <li key={s.id}>
                    <div className="skill-info">
                      <span className="color-dot" style={{ backgroundColor: s.color }}></span>
                      <strong>{s.name}</strong> <span>({s.icon})</span>
                    </div>
                    <button onClick={() => deleteSkill(s.id)} className="btn-danger">Hapus</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAB: SERVICES */}
          {activeTab === 'services' && (
            <div className="admin-card fade-in">
              <p>Pengembangan untuk edit Layanan dapat ditambahkan di sini nantinya.</p>
            </div>
          )}

          {/* TAB: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="admin-card fade-in">
              <p>Pengembangan untuk edit Karir & Pendidikan dapat ditambahkan di sini nantinya.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
