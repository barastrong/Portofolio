import React, { useRef, useState, useEffect, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaFilePowerpoint } from 'react-icons/fa';
import type { Variants } from 'framer-motion';
import type { ProjectData } from '../data/projectData';
import '../css/ProjectCard.css';

interface ProjectCardProps {
  project: ProjectData;
  variants: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches || isImageExpanded) return;
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5;
    const mouseY = (e.clientY - top) / height - 0.5;
    const rotateY = mouseX * 25;
    const rotateX = -mouseY * 25;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  }, []);

  const toggleImageSize = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsImageExpanded(true);
  };
  
  const closeImage = useCallback((e?: MouseEvent) => {
    e?.stopPropagation();
    setIsImageExpanded(false);
    handleMouseLeave();
  }, [handleMouseLeave]);  

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
  }, [isImageExpanded,closeImage]);
  

  return (
    <>
      <motion.div
        ref={cardRef}
        className="project-card"
        variants={variants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="project-card-content-wrapper">
          <div className="project-card-image-wrapper">
            <span className="project-card-date">{project.date}</span>
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
              onClick={toggleImageSize}
              style={{ cursor: 'pointer' }}
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
            </div>
          </div>
        </div>
      </motion.div>
       {isImageExpanded && (
        <div
          onClick={() => closeImage()}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={(e) => closeImage(e)}
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
            src={project.image}
            alt={`Enlarged view of ${project.title}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
              cursor: 'default'
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;