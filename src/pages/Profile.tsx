import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.webp';
import '../css/Profile.css';

const cardContainerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const Profile: React.FC = () => {
  return (
    <div className="profile-page-wrapper">
      <div className="profile-container">
        <motion.div
          className="profile-card"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="profile-image-wrapper" variants={itemVariants}>
            <img src={ProfileImage} alt="Bintang Bara Adyasta" className="profile-image" />
          </motion.div>

          <motion.h1 className="profile-name" variants={itemVariants}>
            Bintang Bara Adyasta
          </motion.h1>

          <motion.h2 className="profile-title" variants={itemVariants}>
            Web Engineer · Backend Focus
          </motion.h2>

          <motion.p className="about-me-text" variants={itemVariants}>
            Semuanya mulai dari rasa penasaran. Tahun 2019, waktu masih SMP, saya ingin tahu bagaimana sebuah website bisa dibuat — dan rasa penasaran itu yang membawa saya lanjut ke SMK Telkom Sidoarjo sampai sekarang. Fokus saya di backend: merancang API, database, dan alur data yang aman, cepat, dan mudah dirawat. Frontend dan Figma saya kuasai secukupnya untuk mendukung pekerjaan itu, karena bagi saya sistem yang baik harus benar dulu di balik layarnya.
          </motion.p>
          
          <motion.div className="profile-social-links" variants={itemVariants}>
            <a 
              href="https://linkedin.com/in/bintangbaraadyasta" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="linkedin" // Tambahkan ini
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/barastrong" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="github" // Tambahkan ini
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.instagram.com/bara_839_?..." 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="instagram" // Tambahkan ini
            >
              <FaInstagram />
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a href="mailto:bintangbara23@gmail.com" className="profile-cta-btn">
              <FaEnvelope /> Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;