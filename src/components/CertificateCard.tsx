import React, { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { CertificateData } from '../data/certificateData';
import '../css/CertificateCard.css';

interface CertificateCardProps {
  certificate: CertificateData;
  variants: Variants;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, variants }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5;
    const mouseY = (e.clientY - top) / height - 0.5;
    const rotateY = mouseX * 20;
    const rotateX = -mouseY * 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  };

  return (
    <motion.div
      ref={cardRef}
      className="certificate-card"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="certificate-card-content-wrapper">
        <div className="certificate-card-image-wrapper">
          <span className="certificate-card-date">{certificate.date}</span>
          <img src={certificate.image} alt={certificate.title} className="certificate-card-image" />
        </div>
        <div className="certificate-content">
          <p className="certificate-course">{certificate.course}</p>
          <h3>{certificate.title}</h3>
          <p>{certificate.description}</p>
          <div className="certificate-list">
            {certificate.list.map((item: string) => (
              <span key={item} className="list-item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;