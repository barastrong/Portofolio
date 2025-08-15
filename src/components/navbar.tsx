import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { useTheme } from '../contexts/useTheme';
import '../css/navbar.css';
import { 
  FaHome, 
  FaAward,
  FaLaptopCode,
  FaUserCircle,
  FaSun,
  FaMoon
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

const themeIconVariants = {
  initial: { y: -20, opacity: 0, rotate: -90, scale: 0.5 },
  animate: { y: 0, opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { y: 20, opacity: 0, rotate: 90, scale: 0.5, transition: { duration: 0.3, ease: 'easeIn' } },
} as const;

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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
            </NavLink>
          </motion.div>
        ))}
        
        <motion.button 
          onClick={toggleTheme} 
          className="theme-toggle"
          title={theme === 'light' ? 'Ganti ke Mode Gelap' : 'Ganti ke Mode Terang'}
          variants={menuItemVariants}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              variants={themeIconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;