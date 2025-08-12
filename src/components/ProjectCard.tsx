// src/components/ProjectCard.tsx

import React, { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import type { Variants } from 'framer-motion';
import type { ProjectData } from '../data/projectData';
import '../css/ProjectCard.css';

interface ProjectCardProps {
  project: ProjectData;
  variants: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5;
    const mouseY = (e.clientY - top) / height - 0.5;
    const rotateY = mouseX * 25;
    const rotateX = -mouseY * 25;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  };

  return (
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
          <img src={project.image} alt={project.title} className="project-card-image" />
        </div>
        <div className="project-content">
          <div className="project-tags">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <h3>{project.title}</h3>
          <p>{project.shortDesc}</p>
          <div className="project-links">
            <Link to={`/project/${project.slug}`} className="btn btn-primary">Detail</Link>
            <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;