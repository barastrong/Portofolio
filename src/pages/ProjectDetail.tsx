import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();

  return (
    <div style={{ padding: '120px 2rem', color: 'white' }}>
      <h1>Halaman Detail untuk Proyek: {slug}</h1>
      <p>Konten detail proyek akan ditampilkan di sini.</p>
    </div>
  );
};

export default ProjectDetail;