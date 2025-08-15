import React, { useRef, useState, useEffect, useCallback } from 'react';
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
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches || isImageExpanded) return;
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5;
    const mouseY = (e.clientY - top) / height - 0.5;
    const rotateY = mouseX * 20;
    const rotateX = -mouseY * 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  }, []);

  const openImage = (e: MouseEvent) => {
    e.stopPropagation();
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
  }, [isImageExpanded, closeImage]);

  return (
    <>
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
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-card-image"
              onClick={openImage}
              style={{ cursor: 'pointer' }}
            />
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
            src={certificate.image}
            alt={`Enlarged view of ${certificate.title}`}
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

export default CertificateCard;