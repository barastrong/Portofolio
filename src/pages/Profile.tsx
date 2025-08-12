import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaUser, FaEnvelope } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpg';
import '../css/Profile.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const mainContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
} as const;


const Profile: React.FC = () => {
  return (
    <div className="profile-page-wrapper">
      <motion.div
        className="profile-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="profile-grid">
          <motion.aside className="profile-sidebar" variants={itemVariants}>
            <div className="profile-image-wrapper">
              <img src={ProfileImage} alt="Bintang Bara Adyasta" className="profile-image" />
            </div>
            <h1 className="profile-name">Bintang Bara Adyasta</h1>
            <h2 className="profile-title">Backend Developer</h2>
            <div className="profile-social-links">
              <a href="https://linkedin.com/in/bintang-bara-adyasta-348237322" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/barastrong" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/bara_839_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </motion.aside>

          <motion.main className="profile-main-content" variants={mainContentVariants}>
            <section className="about-me-section">
              <h3 className="about-me-title"><FaUser /> Tentang Saya</h3>
              <div className="about-me-text">
                <p>
                  Sebagai seorang Backend Developer, saya memiliki hasrat untuk merancang dan membangun fondasi digital yang kuat dan efisien. Saya percaya bahwa di balik setiap antarmuka yang hebat, terdapat logika, arsitektur, dan kode yang elegan.
                </p>
                <p>
                  Keahlian utama saya terletak pada ekosistem Laravel dan PHP, di mana saya menikmati tantangan dalam menciptakan API yang andal, mengelola database yang kompleks, dan memastikan performa sistem yang optimal. Saya juga aktif menjelajahi dunia frontend dengan React untuk memahami siklus pengembangan produk secara menyeluruh.
                </p>
              </div>
            </section>
            
            <section className="profile-cta">
              <h3>Tertarik untuk Berkolaborasi?</h3>
              <p>Saya selalu terbuka untuk diskusi mengenai proyek baru atau peluang menarik.</p>
              <a href="mailto:bintangbara23@gmail.com" className="btn btn-primary">
                <FaEnvelope /> Kirim Email
              </a>
            </section>
          </motion.main>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;