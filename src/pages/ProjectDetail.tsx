import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

import projectsData from '../data/projectData';
import '../css/ProjectDetail.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  const handleBack = () => navigate(-1);

  if (!project) {
    return (
      <div className="project-detail-container" style={{ textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>404 - Proyek Tidak Ditemukan</h2>
        <button onClick={handleBack} className="btn btn-primary" style={{ marginTop: '2rem', alignSelf: 'center' }}>
          <FaArrowLeft /> Kembali
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="project-detail-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="project-detail-header" variants={itemVariants}>
        <h1 className="project-detail-title">{project.title}</h1>
      </motion.header>

      <motion.div className="project-detail-image-wrapper" variants={itemVariants}>
        <img src={project.image} alt={project.title} className="project-detail-image" />
      </motion.div>
      
      <div className="project-detail-grid">
        <motion.aside className="project-detail-meta" variants={itemVariants}>
          <div className="meta-block">
            <h4>Tanggal</h4>
            <p>{project.date}</p>
          </div>
          <div className="meta-block">
            <h4>Teknologi</h4>
            <div className="detail-tags">
              {project.tags.map(tag => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
          </div>
        </motion.aside>
        
        <motion.main className="project-detail-body" variants={itemVariants}>
          <p>{project.longDesc}</p>
        </motion.main>
      </div>

      <motion.div className="project-detail-back-button-wrapper" variants={itemVariants}>
        <button onClick={handleBack} className="btn btn-secondary">
          <FaArrowLeft /> Kembali ke Daftar Proyek
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;