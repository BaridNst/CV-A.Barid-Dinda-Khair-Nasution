require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Konfigurasi koneksi MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cv_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoint Login Admin
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM admin_user WHERE username = ? AND password = ?', [username, password]);
    if (rows.length > 0) {
      res.json({ success: true, message: "Login berhasil", token: "fake-jwt-token-123" });
    } else {
      res.status(401).json({ success: false, message: "Username atau password salah" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET semua data CV
app.get('/api/cv', async (req, res) => {
  try {
    const [profile] = await pool.query('SELECT * FROM profile LIMIT 1');
    const [skills] = await pool.query('SELECT * FROM skills');
    const [services] = await pool.query('SELECT * FROM services');
    const [timeline] = await pool.query('SELECT * FROM timeline');
    const [contacts] = await pool.query('SELECT * FROM contacts');

    const career = timeline.filter(t => t.type === 'career');
    const education = timeline.filter(t => t.type === 'education');

    res.json({
      profile: profile[0] || {},
      skills,
      services,
      career,
      education,
      contacts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE Profile
app.put('/api/profile', async (req, res) => {
  const { full_name, title, photo_url, story } = req.body;
  try {
    await pool.query('UPDATE profile SET full_name=?, title=?, photo_url=?, story=? WHERE id=1', [full_name, title, photo_url, story]);
    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- SKILLS ---
app.post('/api/skills', async (req, res) => {
  const { name, icon, color } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO skills (name, icon, color) VALUES (?, ?, ?)', [name, icon, color]);
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/skills/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM skills WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
