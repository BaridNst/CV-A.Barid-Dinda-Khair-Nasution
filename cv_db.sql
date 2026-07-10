-- 1. Buat Database
CREATE DATABASE IF NOT EXISTS cv_db;
USE cv_db;

-- 2. Tabel Admin User
CREATE TABLE IF NOT EXISTS admin_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Default login: admin / admin123
INSERT INTO admin_user (username, password) VALUES ('admin', 'admin123');

-- 3. Tabel Profile & Story
CREATE TABLE IF NOT EXISTS profile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  photo_url VARCHAR(255),
  story TEXT
);

INSERT INTO profile (full_name, title, photo_url, story) VALUES 
('Barid Nst', 'Mahasiswa Teknologi Informasi & Web Developer Junior', 'https://cdn.corenexis.com/files/c/3518643720.png', 'Saya adalah seorang Mahasiswa Teknologi Informasi dan Web Developer Junior yang berfokus pada efisiensi teknologi. Membangun jembatan antara logika mesin dan kebutuhan manusia adalah gairah utama saya.');

-- 4. Tabel Skills
CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  icon VARCHAR(50) NOT NULL, -- Nama ikon dari react-icons, misal 'SiReact'
  color VARCHAR(20) NOT NULL
);

INSERT INTO skills (name, icon, color) VALUES 
('React', 'SiReact', '#61DAFB'),
('Next.js', 'SiNextdotjs', '#ffffff'),
('Node.js', 'SiNodedotjs', '#339933'),
('Python', 'SiPython', '#3776AB'),
('JavaScript', 'SiJavascript', '#F7DF1E'),
('PostgreSQL', 'SiPostgresql', '#336791');

-- 5. Tabel Services
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50) NOT NULL -- misal 'HiOutlineCode'
);

INSERT INTO services (title, description, icon) VALUES 
('Web Development', 'Modern & Responsive', 'HiOutlineCode'),
('UI/UX Design', 'Clean & Intuitive', 'SiFigma'),
('Optimization', 'Fast Performance', 'HiOutlineLightningBolt');

-- 6. Tabel Timeline (Career & Education)
CREATE TABLE IF NOT EXISTS timeline (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('career', 'education') NOT NULL,
  title VARCHAR(100) NOT NULL, -- Role / Degree
  organization VARCHAR(100) NOT NULL, -- Company / School
  year_range VARCHAR(50) NOT NULL
);

INSERT INTO timeline (type, title, organization, year_range) VALUES 
('career', 'UI/UX Design', 'Freelance', '2024 - Present'),
('career', 'Web Developer', 'Freelance', '2023 - Present'),
('education', 'S1 Teknologi Informasi', 'UIN Ar-Raniry', '2023 - 2026'),
('education', 'Fullstack Bootcamp', 'Dicoding', '2023');

-- 7. Tabel Contact
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  platform VARCHAR(50) NOT NULL,
  value VARCHAR(100) NOT NULL,
  link VARCHAR(255) NOT NULL,
  icon VARCHAR(50) NOT NULL,
  color VARCHAR(20) NOT NULL
);

INSERT INTO contacts (platform, value, link, icon, color) VALUES 
('WhatsApp', '085212583609', 'https://wa.me/6285212583609', 'SiWhatsapp', '#25D366'),
('Email', 'baridnst23@gmail.com', 'mailto:baridnst23@gmail.com', 'SiGmail', '#EA4335'),
('Instagram', '@a.baridnasution', 'https://www.instagram.com/a.baridnasution?igsh=bzAxaGZhZDkxYjVh', 'SiInstagram', '#E1306C');
