import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import '../css/navbar.css';

const navItems = [
  { to: '/#tentang', label: 'Tentang' },
  { to: '/profile', label: 'Profil' },
  { to: '/project', label: 'Proyek' },
  { to: '/sertifikat', label: 'Sertifikat' },
  { to: '/#skill', label: 'Skill' },
  { to: '/#perjalanan', label: 'Perjalanan' },
  { to: '/#kontak', label: 'Kontak' },
];

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, hash]);

  return (
    <motion.nav
      className="navbar"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          BINTANG.
        </Link>

        <div className="navbar-right">
          <nav className="navbar-links" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/#kontak" className="btn btn-primary nav-cta">
            Hubungi Saya <FaArrowRight />
          </Link>
        </div>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link to="/#kontak" className="btn btn-primary mobile-cta">
              Hubungi Saya <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
