import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpg';
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
            Backend Developer
          </motion.h2>

          <motion.p className="about-me-text" variants={itemVariants}>
            Sebagai seorang Backend Developer, saya percaya bahwa di balik setiap aplikasi yang hebat, terdapat arsitektur digital yang elegan dan andal. Saya bersemangat mengubah ide-ide kompleks menjadi kode yang bersih dan efisien, membangun fondasi yang kokoh untuk pengalaman pengguna yang luar biasa.
          </motion.p>
          
          <motion.div className="profile-social-links" variants={itemVariants}>
            <a href="https://linkedin.com/in/bintang-bara-adyasta-348237322" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/barastrong" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/bara_839_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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