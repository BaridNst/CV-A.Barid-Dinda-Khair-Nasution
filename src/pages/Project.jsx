import React, { useState, useEffect } from 'react';
import { HiOutlineCode, HiOutlineExternalLink, HiOutlineStar } from 'react-icons/hi';
import './Project.css';

export default function Project() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil data repositori publik dari GitHub API
    fetch('https://api.github.com/users/BaridNst/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        // Filter agar fork tidak masuk (optional)
        const myRepos = data.filter(repo => !repo.fork);
        setRepos(myRepos);
        setLoading(false);
      })
      .catch((err) => console.error("Gagal load repo:", err));
  }, []);

  return (
    <div className="project-grid">
      <div className="bento-card span-2 project-header">
        <h3 className="label">GITHUB REPOSITORIES</h3>
        <p>Projek terbaru yang sedang saya kerjakan di GitHub.</p>
      </div>

      {loading ? (
        <div className="loading-state">Memuat Repositori...</div>
      ) : (
        repos.map((repo) => (
          <div key={repo.id} className="bento-card project-card-ultra">
            <div className="card-top">
              <HiOutlineCode className="code-icon" />
              <div className="stats">
                <HiOutlineStar /> <span>{repo.stargazers_count}</span>
              </div>
            </div>
            
            <h4 className="project-title">{repo.name.replace(/-/g, ' ')}</h4>
            <p className="project-desc">
              {repo.description || "Tidak ada deskripsi untuk repositori ini."}
            </p>

            <div className="project-footer">
              <span className="lang-tag">{repo.language || "Web"}</span>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-github-link"
              >
                View Code <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}