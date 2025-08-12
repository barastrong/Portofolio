import React from 'react';
import { motion } from 'framer-motion';

import CertificateCard from '../components/CertificateCard';
import certificateData from '../data/certificateData';

import '../css/Project.css';

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

const Sertifikat: React.FC = () => {
  return (
    <motion.div
      className="project-page-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="project-page-header">
        <motion.h1 className="project-page-title" variants={itemVariants}>
          Sertifikasi & <span>Pencapaian</span>
        </motion.h1>
        <motion.p className="project-page-subtitle" variants={itemVariants}>
          Berikut adalah beberapa sertifikasi dan kursus yang telah saya selesaikan untuk terus mengasah dan memperbarui keahlian saya.
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
      >
        {certificateData.map(cert => (
          <CertificateCard 
            key={cert.title} 
            certificate={cert}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Sertifikat;