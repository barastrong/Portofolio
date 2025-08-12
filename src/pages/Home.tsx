import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { FaReact, FaLaravel } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpg';
import { SiMysql } from 'react-icons/si';

import projectsData from '../data/projectData';
import certificateData from '../data/certificateData';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 },
  },
} as const;

const imageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const Home: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="hero-container page-section">
        <motion.div className="hero-content" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>Halo, saya Bintang Bara Adyasta</motion.h1>
          <motion.h2 variants={itemVariants}>Backend Developer</motion.h2>
          <motion.p variants={itemVariants}>Menciptakan solusi web yang inovatif dan efisien dari hulu ke hilir dengan passion untuk kode yang bersih dan pengalaman pengguna yang luar biasa.</motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="/project" className="btn btn-primary">Lihat Proyek</Link>
            <a href="/CV-BintangBaraAdyasta.pdf" download className="btn btn-secondary">Unduh CV</a>
          </motion.div>
        </motion.div>
        
        <motion.div className="hero-image-wrapper" variants={imageVariants}>
          <motion.img 
            src={ProfileImage} 
            alt="Bintang Bara Adyasta" 
            className="hero-image"
            animate={{ y: [-10, 10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </section>

      <motion.section 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Teknologi yang <span>Saya Kuasai</span></h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {[
            { Icon: FaLaravel, name: 'Laravel', color: '#FF2D20' },
            { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
            { Icon: FaReact, name: 'React.js', color: '#61DAFB' },
            { Icon: FaReact, name: 'React Native', color: '#61DAFB' },
          ].map(skill => (
            <motion.div className="skill-card" key={skill.name} variants={itemVariants}>
              <skill.Icon style={{ color: skill.color }} />
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Sertifikasi <span>Terbaru</span></h2>
        <motion.div className="projects-grid" variants={containerVariants}>
          {certificateData.slice(0, 3).map(cert => (
            <CertificateCard
              key={cert.title}
              certificate={cert}
              variants={itemVariants}
            />
          ))}
        </motion.div>
        <motion.div 
          className="view-all-projects"
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/sertifikat" className="btn btn-secondary">Lihat Semua Sertifikasi</Link>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Proyek <span>Terbaru</span></h2>
        <motion.div className="projects-grid" variants={containerVariants}>
          {projectsData.slice(0, 3).map(project => (
            <ProjectCard
              key={project.slug}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
        <motion.div 
          className="view-all-projects"
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/project" className="btn btn-secondary">Lihat Semua Proyek</Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;