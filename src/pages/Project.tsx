// src/pages/Project.tsx

import React from 'react';
import { motion } from 'framer-motion';
import '../css/Project.css';

// Impor data dari file terpisah
import projectsData from '../data/projectData';
import ProjectCard from '../components/ProjectCard';

// Varian animasi untuk container utama
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
} as const;

const Project: React.FC = () => {
  return (
    <motion.div
      className="project-page-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="project-page-header">
        <motion.h1 className="project-page-title" variants={itemVariants}>
          Karya & <span>Eksplorasi Saya</span>
        </motion.h1>
        <motion.p className="project-page-subtitle" variants={itemVariants}>
          Berikut adalah beberapa proyek pilihan yang telah saya kerjakan, menunjukkan keahlian dan passion saya dalam pengembangan web.
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
      >
        {projectsData.map(project => (
          <ProjectCard 
            key={project.slug} 
            project={project}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;