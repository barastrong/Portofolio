import React, { useState, useEffect, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaSearchPlus, FaFilePowerpoint, FaLink } from 'react-icons/fa';
import type { Variants } from 'framer-motion';
import type { ProjectData } from '../data/projectData';
import '../css/ProjectCard.css';

interface ProjectCardProps {
  project: ProjectData;
  variants: Variants;
}

const imageModalStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  cursor: 'zoom-out',
  padding: '2rem',
  overflowY: 'auto',
};

const closeBtnStyle: React.CSSProperties = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '2rem',
  cursor: 'pointer',
  lineHeight: 1,
  zIndex: 1010,
};

const imageStyle: React.CSSProperties = {
  maxWidth: '90vw',
  maxHeight: '90vh',
  objectFit: 'contain',
  borderRadius: '8px',
  cursor: 'default',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsImageExpanded(true);
  };

  const closeImage = useCallback((e?: MouseEvent) => {
    e?.stopPropagation();
    setIsImageExpanded(false);
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeImage();
      }
    };

    if (isImageExpanded) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isImageExpanded, closeImage]);

  return (
    <>
      <motion.div
        className="project-card"
        variants={variants}
          whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              // Agar z-index berubah saat hover (supaya tidak tertutup kartu sebelah)
              style={{ zIndex: 1 }}
              whileTap={{ scale: 0.98 }}
      >
        <div className="project-card-content-wrapper">
          <div className="project-card-image-wrapper">
            {project.date && <span className="project-card-date">{project.date}</span>}
            <span className="zoom-badge"><FaSearchPlus /> Zoom</span>
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
              onClick={toggleImageSize}
              style={{ cursor: 'pointer' }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          <div className="project-content">
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
            <div className="project-links">
              <Link to={`/project/${project.slug}`} className="btn btn-primary">Detail</Link>
              {project.github && (
                <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.pptLink && (
                <a href={project.pptLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FaFilePowerpoint /> Presentasi
                </a>
              )}  
              {project.link && (
                <a href={project.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FaLink /> Link
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
       {isImageExpanded && (
        <div onClick={() => closeImage()} style={imageModalStyle}>
          <button onClick={(e) => closeImage(e)} aria-label="Close image" style={closeBtnStyle}>
            &times;
          </button>
          <img src={project.image} alt={`Enlarged view of ${project.title}`} onClick={(e) => e.stopPropagation()} style={imageStyle} />
        </div>
      )}
    </>
  );
};

export default ProjectCard;