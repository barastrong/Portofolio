import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaBook, FaBolt, FaCamera, FaSearchPlus, FaGithub, FaFilePowerpoint, FaLink, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const project = projectsData.find(p => p.slug === slug);

  const handleBack = () => navigate(-1);
  const gallery = project ? [project.image, ...(project.documentation ?? [])] : [];

  const handleOpenImage = (imageUrl: string) => {
    const idx = gallery.indexOf(imageUrl);
    setImageIndex(idx);
  };
  const handleCloseImage = () => setImageIndex(null);
  const prevImage = () => setImageIndex(prev => (prev === null ? prev : (prev - 1 + gallery.length) % gallery.length));
  const nextImage = () => setImageIndex(prev => (prev === null ? prev : (prev + 1) % gallery.length));

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleCloseImage();
      if (event.key === 'ArrowLeft') prevImage();
      if (event.key === 'ArrowRight') nextImage();
    };

    if (imageIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKey);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageIndex, gallery.length]);

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
            <span className="detail-kicker">✦ Portofolio Proyek</span>
            <h1 className="detail-page-title">{project.title}</h1>
            <p className="detail-page-date">
              <FaCalendarAlt /> {project.date}
            </p>
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
              <span className="zoom-badge"><FaSearchPlus /> Zoom</span>
              <img
                src={project.image}
                alt={project.title}
                className="detail-page-image"
                onClick={() => handleOpenImage(project.image)}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          </motion.div>

          {project.fitures && project.fitures.length > 0 && project.fitures[0].trim() !== '' && (
            <motion.section className="features-section" variants={itemVariants}>
              <h3 className="section-heading"><FaBolt style={{ marginRight: '0.5rem', color: '#F59E0B' }} /> Fitur-Fitur Utama</h3>
              <div className="features-grid">
                {project.fitures.map((fitur, index) => (
                  <div key={index} className="feature-card">
                    <span className="feature-icon">{index + 1}</span>
                    <p>{fitur}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {project.documentation && project.documentation.length > 0 && (
            <motion.section className="documentation-section" variants={itemVariants}>
              <h3 className="section-heading"><FaCamera style={{ marginRight: '0.5rem', color: '#8B5CF6' }} /> Dokumentasi Proyek <span className="doc-count">{project.documentation.length} gambar</span></h3>
              <p className="documentation-description">
                Berikut adalah dokumentasi visual dari proyek ini untuk memberikan gambaran lebih jelas tentang tampilan dan fitur-fiturnya.
              </p>
              <div className="documentation-grid">
                {project.documentation.map((docImage, index) => (
                  <div key={index} className="documentation-image-wrapper">
                    <span className="zoom-badge"><FaSearchPlus /> Zoom</span>
                    <img
                      src={docImage}
                      alt={`${project.title} documentation ${index + 1}`}
                      className="documentation-image"
                      onClick={() => handleOpenImage(docImage)}
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          <div className="detail-social-buttons">
            {project.github && (
              <a href={project.github} className="btn btn-secondary detail-social-btn" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
            {project.pptLink && (
              <a href={project.pptLink} className="btn btn-secondary detail-social-btn" target="_blank" rel="noopener noreferrer">
                <FaFilePowerpoint /> Presentasi
              </a>
            )}
            {project.link && (
              <a href={project.link} className="btn btn-secondary detail-social-btn" target="_blank" rel="noopener noreferrer">
                <FaLink /> Link
              </a>
            )}
          </div>
          <div className="detail-back-button-wrapper">
            <button onClick={handleBack} className="btn btn-primary back-btn">
              <FaArrowLeft /> Kembali
            </button>
          </div>
        </motion.div>
      </div>

      {imageIndex !== null && (
        <motion.div
          className="image-modal-overlay"
          onClick={handleCloseImage}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <span className="modal-counter">{imageIndex + 1} / {gallery.length}</span>
          <button className="modal-close-btn" onClick={(e) => { e.stopPropagation(); handleCloseImage(); }} aria-label="Close image">
            &times;
          </button>
          <button className="modal-nav-btn modal-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Gambar sebelumnya">
            <FaChevronLeft size={20} />
          </button>
          <img
            src={gallery[imageIndex]}
            alt="Enlarged view"
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="modal-nav-btn modal-next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Gambar berikutnya">
            <FaChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetail;