import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { FaReact, FaNodeJs, FaGithub, FaLaravel } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpg';
import { SiTypescript, SiMysql } from 'react-icons/si';

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
};

const imageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

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
        <h2 className="section-title">Proyek <span>Terbaru</span></h2>
        <motion.div className="projects-grid" variants={containerVariants}>
          {[
            {
              title: 'Platform E-Commerce',
              desc: 'Situs jual beli fungsional dengan manajemen produk, keranjang belanja, dan sistem pembayaran.',
              img: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZSxlY29tbWVyY2V8fHx8fHwxNjc5NTI1MDU0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
              slug: 'platform-e-commerce',
              github: 'https://github.com/bintang-bara-adyasta',
            },
            {
              title: 'Aplikasi Task Manager',
              desc: 'Aplikasi berbasis web untuk mengatur tugas harian dengan fitur drag-and-drop dan notifikasi.',
              img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZSx0YXNrLWFwcHx8fHx8fDE2Nzk1MjUwNzk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
              slug: 'aplikasi-task-manager',
              github: 'https://github.com/bintang-bara-adyasta',
            },
          ].map(project => (
            <motion.div className="project-card" key={project.title} variants={itemVariants}>
              <img src={project.img} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-links">
                  <Link to={`/project/${project.slug}`} className="btn btn-primary">Detail</Link>
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="view-all-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/project" className="btn btn-secondary">Lihat Semua Proyek</Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;