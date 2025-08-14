import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 1, 
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}as const;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="site-footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
        <div className="footer-grid">
          <motion.div className="footer-column brand-column" variants={itemVariants}>
            <Link to="/" className="footer-brand-title">Dev.ops</Link>
            <p>Menciptakan solusi digital yang efisien dan berdampak.</p>
          </motion.div>

          <motion.div className="footer-column" variants={itemVariants}>
            <h3>Navigasi</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/project">Proyek</Link></li>
              <li><Link to="/sertifikat">Sertifikasi</Link></li>
              <li><Link to="/profile">Profil</Link></li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-column" variants={itemVariants}>
            <h3>Hubungi</h3>
            <ul>
              <li>Surabaya, Indonesia</li>
              <li>bintangbara.adyasta@gmail.com</li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">&copy; {currentYear} Bintang Bara Adyasta.</p>
          <div className="footer-socials">
            <a href="https://github.com/barastrong" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bintangbaraadyasta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/bintang_bara12/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
    </motion.footer>
  );
};

export default Footer;