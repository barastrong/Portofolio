import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import '../css/navbar.css';
import { 
  FaHome, 
  FaAward,
  FaLaptopCode,
  FaUserCircle,
  FaBars,
  FaTimes
} from 'react-icons/fa';

interface NavItem {
  path: string;
  label: string;
  Icon: React.ElementType;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', Icon: FaHome },
  { path: '/sertifikat', label: 'Sertifikat', Icon: FaAward  }, 
  { path: '/project', label: 'Project', Icon: FaLaptopCode  },
  { path: '/profile', label: 'Profile', Icon: FaUserCircle },
];

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delayChildren: 0.3 
    } 
  },
} as const;

const menuContainerVariants = {
  hidden: {}, 
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3 }
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      className="navbar"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="navbar-title" variants={menuItemVariants}>
        <NavLink to="/">Dev.ops</NavLink>
      </motion.div>

      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <item.Icon />
                <span className="nav-label">{item.label}</span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="navbar-menu"
        variants={menuContainerVariants}
      >
        {navItems.map((item) => (
          <motion.div key={item.path} variants={menuItemVariants}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              title={item.label}
            >
              <item.Icon />
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;