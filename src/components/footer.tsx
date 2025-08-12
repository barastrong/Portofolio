import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="footer-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <h2 className="footer-title">Mulai Percakapan</h2>
        <a href="mailto:bintangbara.dev@gmail.com" className="footer-cta">bintangbara.dev@gmail.com</a>
        <div className="footer-socials">
          <a href="https://github.com/bintang-bara-adyasta" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Dibuat dengan ❤️ oleh Bintang Bara Adyasta
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;