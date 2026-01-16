import React, { useState, useEffect, useCallback } from 'react';
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
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const openImage = (e: MouseEvent) => {
    e.stopPropagation();
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
        className="certificate-card"
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
        <div className="certificate-card-content-wrapper">
          {certificate.image && (
            <div className="certificate-card-image-wrapper">
              {certificate.date && <span className="certificate-card-date">{certificate.date}</span>}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-card-image"
                onClick={openImage}
                style={{ cursor: 'pointer' }}
              />
            </div>
          )}
          <div className="certificate-content">
            {certificate.course && <p className="certificate-course">{certificate.course}</p>}
            {certificate.title && <h3>{certificate.title}</h3>}
            {certificate.description && <p>{certificate.description}</p>}
            {certificate.list && certificate.list.length > 0 && (
              <div className="certificate-list">
                {certificate.list.map((item: string) => (
                  <span key={item} className="list-item">{item}</span>
                ))}
              </div>
            )}
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