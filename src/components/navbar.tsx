import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/navbar.css';
import { 
  FaHome, 
  FaTh,
  FaCog,
  FaProjectDiagram,
  FaUserCircle 
} from 'react-icons/fa';

interface NavItem {
  path: string;
  label: string;
  Icon: React.ElementType;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', Icon: FaHome },
  { path: '/menu', label: 'Menu', Icon: FaTh },
  { path: '/sertifikat', label: 'Sertifikat', Icon: FaCog },
  { path: '/project', label: 'Project', Icon: FaProjectDiagram },
  { path: '/profile', label: 'Profile', Icon: FaUserCircle },
];

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const menuContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;