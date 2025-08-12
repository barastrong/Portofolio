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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  const handleBack = () => navigate(-1);

  if (!project) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
        <h2>404 - Proyek Tidak Ditemukan</h2>
        <button onClick={handleBack} className="btn btn-primary" style={{ marginTop: '2rem' }}>
          <FaArrowLeft /> Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail-wrapper">
      <motion.div
        className="project-detail-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="detail-page-header" variants={itemVariants}>
          <h1 className="detail-page-title">{project.title}</h1>
          <p className="detail-page-date">{project.date}</p>
          <div className="detail-page-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="detail-page-tag">{tag}</span>
            ))}
          </div>
        </motion.header>
        
        <motion.div className="detail-page-content" variants={itemVariants}>
          <div className="detail-page-description">
            <p>{project.longDesc}</p>
          </div>
          <div className="detail-page-image-wrapper">
            <img src={project.image} alt={project.title} className="detail-page-image" />
          </div>
        </motion.div>

        {project.fitures && project.fitures.length > 0 && (
          <motion.section className="features-section" variants={itemVariants}>
            <h3>Apa Saja yang Bisa Dilakukan?</h3>
            <div className="features-grid">
              {project.fitures.map((fitur) => (
                <div key={fitur} className="feature-card">
                  <p>{fitur}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.div className="detail-back-button-wrapper" variants={itemVariants}>
          <button onClick={handleBack} className="btn btn-secondary">
            <FaArrowLeft /> Kembali
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;