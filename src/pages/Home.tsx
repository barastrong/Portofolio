import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { FaReact, FaLaravel, FaGithub } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpg';
import { SiMysql } from 'react-icons/si';

import projectsData from '../data/projectData';
import certificateData from '../data/certificateData';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';

const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
} as const;

const heroTextContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
} as const;

const heroTextItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const heroImageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
    },
  },
} as const;

const gridItemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const;


const Home: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageContainerVariants}
    >
      <section className="hero-container page-section">
        <motion.div className="hero-content" variants={heroTextContainerVariants}>
          <motion.h1 variants={heroTextItemVariants}>Halo, saya Bintang Bara Adyasta</motion.h1>
          <motion.h2 variants={heroTextItemVariants}>Backend Developer</motion.h2>
          <motion.p variants={heroTextItemVariants}>Menciptakan solusi web yang inovatif dan efisien dari hulu ke hilir dengan passion untuk kode yang bersih dan pengalaman pengguna yang luar biasa.</motion.p>
          <motion.div className="hero-buttons" variants={heroTextItemVariants}>
            <Link to="/project" className="btn btn-primary">Lihat Proyek</Link>
            <a href="/CV-BintangBaraAdyasta.pdf" download className="btn btn-secondary">Unduh CV</a>
          </motion.div>
        </motion.div>
        
        <motion.div className="hero-image-wrapper" variants={heroImageVariants}>
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
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={gridItemVariants}>Teknologi yang <span>Saya Kuasai</span></motion.h2>
        <motion.div className="skills-grid" variants={sectionVariants}>
          {[
            { Icon: FaLaravel, name: 'Laravel', color: '#FF2D20' },
            { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
            { Icon: FaReact, name: 'React.js', color: '#61DAFB' },
            { Icon: FaReact, name: 'React Native', color: '#61DAFB' },
            { Icon:FaGithub, name:'Github', color: '#181717' }
          ].map(skill => (
            <motion.div className="skill-card" key={skill.name} variants={gridItemVariants}>
              <skill.Icon style={{ color: skill.color }} />
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={gridItemVariants}>Sertifikasi <span>Terbaru</span></motion.h2>
        <motion.div className="projects-grid" variants={sectionVariants}>
          {certificateData.slice(0, 3).map(cert => (
            <CertificateCard
              key={cert.title}
              certificate={cert}
              variants={gridItemVariants}
            />
          ))}
        </motion.div>
        <motion.div 
          className="view-all-projects"
          variants={gridItemVariants}
        >
          <Link to="/sertifikat" className="btn btn-secondary">Lihat Semua Sertifikasi</Link>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={gridItemVariants}>Proyek <span>Terbaru</span></motion.h2>
        <motion.div className="projects-grid" variants={sectionVariants}>
          {projectsData.slice(0, 3).map(project => (
            <ProjectCard
              key={project.slug}
              project={project}
              variants={gridItemVariants}
            />
          ))}
        </motion.div>
        <motion.div 
          className="view-all-projects"
          variants={gridItemVariants}
        >
          <Link to="/project" className="btn btn-secondary">Lihat Semua Proyek</Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;