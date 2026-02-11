import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaBook, FaBolt, FaCamera } from 'react-icons/fa';

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

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const project = projectsData.find(p => p.slug === slug);

  const handleBack = () => navigate(-1);
  const handleOpenImage = (imageUrl: string) => setExpandedImage(imageUrl);
  const handleCloseImage = () => setExpandedImage(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseImage();
      }
    };

    if (expandedImage) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [expandedImage]);

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
    <>
      <div className="project-detail-wrapper">
        <motion.div
          className="project-detail-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.header className="detail-page-header" variants={itemVariants}>
            <h1 className="detail-page-title">{project.title}</h1>
            <p className="detail-page-date"><FaCalendarAlt style={{ marginRight: '0.5rem', color: '#3B82F6' }} /> {project.date}</p>
            <div className="detail-page-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="detail-page-tag">{tag}</span>
              ))}
            </div>
          </motion.header>

          <motion.div className="detail-page-content" variants={itemVariants}>
            <div className="detail-page-description">
              <h3 className="section-subtitle"><FaBook style={{ marginRight: '0.5rem', color: '#6366F1' }} /> Tentang Proyek</h3>
              <p>{project.longDesc}</p>
            </div>
            <div className="detail-page-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="detail-page-image"
                onClick={() => handleOpenImage(project.image)}
              />
            </div>
          </motion.div>

          {project.fitures && project.fitures.length > 0 && project.fitures[0].trim() !== '' && (
            <motion.section className="features-section" variants={itemVariants}>
              <h3 className="section-heading"><FaBolt style={{ marginRight: '0.5rem', color: '#F59E0B' }} /> Fitur-Fitur Utama</h3>
              <div className="features-grid">
                {project.fitures.map((fitur, index) => (
                  <div key={index} className="feature-card">
                    <span className="feature-icon">✓</span>
                    <p>{fitur}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {project.documentation && project.documentation.length > 0 && (
            <motion.section className="documentation-section" variants={itemVariants}>
              <h3 className="section-heading"><FaCamera style={{ marginRight: '0.5rem', color: '#8B5CF6' }} /> Dokumentasi Proyek</h3>
              <p className="documentation-description">
                Berikut adalah dokumentasi visual dari proyek ini untuk memberikan gambaran lebih jelas tentang tampilan dan fitur-fiturnya.
              </p>
              <div className="documentation-grid">
                {project.documentation.map((docImage, index) => (
                  <div key={index} className="documentation-image-wrapper">
                    <img
                      src={docImage}
                      alt={`${project.title} documentation ${index + 1}`}
                      className="documentation-image"
                      onClick={() => handleOpenImage(docImage)}
                    />
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

      {expandedImage && (
        <motion.div
          className="image-modal-overlay"
          onClick={handleCloseImage}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleCloseImage}
            aria-label="Close image"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1
            }}
          >
            &times;
          </button>
          <img
            src={expandedImage}
            alt="Enlarged view"
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetail;