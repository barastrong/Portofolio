import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoHome, IoBriefcase, IoSchool, IoPerson, IoDownload, IoArrowForward } from 'react-icons/io5';
import '../css/Menu.css';

const menuItems = [
  {
    title: 'Halaman Utama',
    description: 'Kembali ke beranda utama portofolio.',
    icon: <IoHome />,
    link: '/',
  },
  {
    title: 'Proyek Saya',
    description: 'Jelajahi semua proyek yang telah saya kerjakan.',
    icon: <IoBriefcase />,
    link: '/project',
  },
  {
    title: 'Sertifikasi',
    description: 'Lihat koleksi sertifikasi dan pencapaian saya.',
    icon: <IoSchool />,
    link: '/sertifikat',
  },
  {
    title: 'Tentang Saya',
    description: 'Kenali saya lebih dalam melalui halaman profil.',
    icon: <IoPerson />,
    link: '/profile',
  },
  {
    title: 'Unduh CV',
    description: 'Dapatkan salinan CV terbaru dalam format PDF.',
    icon: <IoDownload />,
    link: '/CV-BintangBaraAdyasta.pdf',
    isDownload: true
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
} as const;

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
} as const;

const arrowVariants = {
  rest: { x: -10, opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.2 } }
} as const; 

const Menu: React.FC = () => {
  return (
    <div className="menu-page-wrapper">
      <div className="aurora-background">
        <div className="aurora-dot aurora-dot-1"></div>
        <div className="aurora-dot aurora-dot-2"></div>
        <div className="aurora-dot aurora-dot-3"></div>
      </div>
      <motion.div 
        className="menu-content-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="menu-header-revamped" variants={itemVariants}>
          <h1>Pusat Navigasi</h1>
          <p>Pilih tujuan Anda selanjutnya. Setiap tautan membawa Anda ke bagian penting dari portofolio ini.</p>
        </motion.div>
        
        <motion.div className="menu-list" variants={containerVariants}>
          {menuItems.map((item, index) => {
            const content = (
              <motion.div
                className="menu-item"
                key={index}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className="menu-item-icon-wrapper">{item.icon}</div>
                <div className="menu-item-text">
                  <h2 className="menu-item-title">{item.title}</h2>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
                <motion.div className="menu-item-arrow" variants={arrowVariants}>
                  <IoArrowForward />
                </motion.div>
              </motion.div>
            );

            if (item.isDownload) {
              return (
                <a href={item.link} download key={index} className="menu-item-link">
                  {content}
                </a>
              );
            }

            return (
              <Link to={item.link} key={index} className="menu-item-link">
                {content}
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;