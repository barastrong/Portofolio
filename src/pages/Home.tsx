import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../css/Home.css';
import ProfileImage from '../assets/Profile.webp';
import projectsData from '../data/projectData';
import certificateData from '../data/certificateData';
import CertificateCard from '../components/CertificateCard';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants: Variants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const marqueeItems = [
  'Backend Developer',
  'REST API',
  'Laravel',
  'MySQL',
  'Node.js',
  'Database Design',
];

const skills = [
  { category: 'Backend', name: 'Laravel', level: 88 },
  { category: 'Database', name: 'MySQL', level: 84 },
  { category: 'Backend', name: 'REST API', level: 82 },
  { category: 'Backend', name: 'Node.js & Express', level: 70 },
  { category: 'Frontend', name: 'HTML, CSS & JavaScript', level: 75 },
  { category: 'Frontend', name: 'React JS', level: 60 },
  { category: 'Design', name: 'Figma', level: 50 },
  { category: 'Tools', name: 'Git & GitHub', level: 80 },
];

const journey = [
  {
    period: '2022 — Sekarang',
    title: 'SMK Telkom Sidoarjo',
    subtitle: 'Fondasi coding lewat Timedoor Academy',
    description:
      'Dari logika pemrograman dasar, bikin game pakai JavaScript, sampai pengembangan web HTML, CSS, dan JavaScript. Mulai kursus Bahasa Inggris di EF juga.',
  },
  {
    period: '2025 — Sekarang',
    title: 'Web Engineer (PKL)',
    subtitle: 'PT Alpharich Digital Solution',
    description:
      'PKL sebagai web engineer: ikut bangun dan rawat aplikasi web, dari API dan database sampai tampilan yang dipakai user.',
  },
  {
    period: '2026',
    title: 'Lomba & Sertifikasi Lanjutan',
    subtitle: 'UNISSULA, Soegijapranata, EFE',
    description:
      'Sertifikasi Web Development UNISSULA (Express JS, React JS, Supabase), lomba web development Soegijapranata, dan English Program EFE sampai Level 3.',
  },
  {
    period: '2025',
    title: 'Eksplorasi Frontend, Mobile & AI',
    subtitle: 'Timedoor, IDN, Mereka, ID-Networkers',
    description:
      'Belajar Vue JS, React Native, Azure AI-900, dan networking, plus ikut lomba web development IDN Boarding School.',
  },
  {
    period: '2019 — 2022',
    title: 'Mulai Belajar Web',
    subtitle: 'SMP, berawal dari rasa penasaran',
    description:
      'Penasaran bagaimana sebuah website bisa dibuat, lalu belajar HTML, CSS, JavaScript dan bikin proyek-proyek kecil pertama.',
  },
];

const projectAccents = ['accent-purple', 'accent-yellow', 'accent-green'];
const projectShortNames = ['NusaQuest', 'NusaExplore', 'Smart Report'];

const stats = [
  { value: `${projectsData.length}+`, label: 'Proyek selesai' },
  { value: '7 th', label: 'Belajar & berkarya' },
  { value: '100%', label: 'Fokus backend & API' },
];

const Home: React.FC = () => {
  return (
    <motion.div
      className="landing-page"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <section className="hero">
        <div className="landing-container hero-grid">
          <motion.div className="hero-copy" variants={sectionVariants}>
            <span className="badge-pill">
              <span className="dot" aria-hidden="true" />
              Tersedia untuk proyek baru
            </span>

            <h1>
              Gue Bintang.
              <br />
              Bikin web yang
              <br />
              <span className="hero-highlight">Susah dilupakan.</span>
            </h1>

            <p className="hero-desc">
              Backend developer yang suka ngubah ide berantakan jadi API dan
              database yang cepat, aman, dan gampang dirawat.
            </p>

            <div className="hero-actions">
              <Link to="/project" className="btn btn-primary">
                Lihat Proyek <FaArrowRight />
              </Link>
              <a href="/CV-BintangBaraAdyasta.pdf" download className="btn btn-secondary">
                Download CV
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-visual" variants={sectionVariants}>
            <Link to="/profile" className="portrait-card" aria-label="Lihat profil Bintang Bara Adyasta">
              <span className="portrait-tag">Foto profil</span>
              <span className="portrait-open">Open to work</span>
              <span className="portrait-sparkle" aria-hidden="true">✦</span>
              <span className="portrait-photo">
                <img src={ProfileImage} alt="Bintang Bara Adyasta" />
              </span>
              <span className="portrait-half" aria-hidden="true" />
              <span className="portrait-sticker">Bintang Bara Adyasta</span>
              <span className="portrait-chip">Backend + API</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeItems.map((item) => (
                <span className="marquee-item" key={`${copy}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <motion.section
        className="landing-section"
        id="tentang"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="landing-container">
          <span className="section-badge">01 — Tentang</span>
          <h2 className="landing-heading">Kenalan dulu, yuk.</h2>

          <div className="about-grid">
            <motion.article className="card about-main" variants={itemVariants}>
              <p className="about-lead">
                Gue Bintang. Suka ngoding, suka bongkar alur data, dan suka banget
                ngeliat orang kebantu sama hasil kerja gue.
              </p>
              <p>
                Semuanya berawal dari penasaran: kok tombol ini bisa diklik, kok
                halaman ini bisa muncul? Dari situ gue belajar bikin website, dari
                ngatur database sampai jadi API yang jalan di server.
              </p>
              <p>
                Buat gue, sistem yang bagus bukan cuma jalan, tapi juga aman, cepat,
                dan gampang dirawat. Makanya tiap proyek gue mulai dari alur data,
                bukan dari tampilan.
              </p>
              <div className="chip-row">
                {['PHP', 'Laravel', 'MySQL', 'REST API', 'Node.js'].map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>

            <aside className="about-side">
              <motion.div className="about-note note-purple" variants={itemVariants}>
                <span className="note-label">Fokus saat ini</span>
                <h3>Backend &amp; API</h3>
                <p>Rancang API, database, dan alur data yang rapi.</p>
              </motion.div>
              <motion.div className="about-note note-yellow" variants={itemVariants}>
                <span className="note-label">Lagi dipelajari</span>
                <h3>Node.js, Docker &amp; Testing</h3>
                <p>Biar service makin cepat, aman, dan gampang dirawat.</p>
              </motion.div>
            </aside>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="landing-section"
        id="proyek"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="landing-container">
          <div className="section-head">
            <div>
              <span className="section-badge">02 — Proyek</span>
              <h2 className="landing-heading">Proyek pilihan</h2>
            </div>
          </div>

          <div className="project-grid">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.article
                className={`featured-project ${projectAccents[index]}`}
                key={project.slug}
                variants={itemVariants}
              >
                <div className="featured-project-head">
                  <span className="project-no">NO. 0{index + 1}</span>
                  <h3>{projectShortNames[index]}</h3>
                </div>
                <div className="featured-project-body">
                  <div className="chip-row">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span className="mini-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.shortDesc}</p>
                  <Link to={`/project/${project.slug}`}>
                    Lihat studi kasus <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="section-foot">
            <Link to="/project" className="btn btn-secondary">
              Lihat semua proyek <FaArrowRight />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="landing-section"
        id="sertifikat"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="landing-container">
          <div className="section-head">
            <div>
              <span className="section-badge">03 — Sertifikat</span>
              <h2 className="landing-heading">Sertifikat &amp; pencapaian</h2>
            </div>
          </div>

          <div className="cert-teaser-grid">
            {certificateData.slice(0, 3).map((certificate) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
                variants={itemVariants}
              />
            ))}
          </div>

          <div className="section-foot">
            <Link to="/sertifikat" className="btn btn-secondary">
              Lihat semua sertifikat <FaArrowRight />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="landing-section skills-section"
        id="skill"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="landing-container">
          <span className="section-badge">04 — Skill</span>
          <h2 className="landing-heading">Tools yang gue pakai</h2>

          <div className="skills-tool-grid">
            {skills.map((skill) => (
              <motion.article className="tool-card" key={skill.name} variants={itemVariants}>
                <span className="tool-category">{skill.category}</span>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="landing-section"
        id="perjalanan"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="landing-container">
          <span className="section-badge">05 — Perjalanan</span>
          <h2 className="landing-heading">Jejak gue sejauh ini</h2>

          <div className="timeline">
            {journey.map((step) => (
              <motion.article className="timeline-row" key={step.period} variants={itemVariants}>
                <span className="timeline-period">{step.period}</span>
                <div className="timeline-body">
                  <h3>{step.title}</h3>
                  <p className="timeline-sub">{step.subtitle}</p>
                  <p>{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="contact-section"
        id="kontak"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="landing-container">
          <div className="contact-card">
            <span className="section-badge">06 — Kontak</span>
            <h2>Yuk, bikin sesuatu yang keren bareng.</h2>
            <p>
              Lagi cari backend developer buat proyek lo? Kirim aja pesan,
              biasanya gue bales dalam 1×24 jam.
            </p>

            <div className="contact-actions">
              <a href="mailto:bintangbara23@gmail.com" className="btn btn-primary">
                <FaEnvelope /> Kirim Email <FaArrowRight />
              </a>
              <a
                href="https://linkedin.com/in/bintangbaraadyasta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/barastrong"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub /> GitHub
              </a>
              <span className="contact-email">bintangbara23@gmail.com</span>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="site-footer">
        <div className="landing-container footer-inner">
          <p>© 2026 Bintang. Dibuat pakai Figma &amp; kopi.</p>
          <nav className="footer-links" aria-label="Navigasi footer">
            <a href="/#tentang">Tentang</a>
            <a href="/#proyek">Proyek</a>
            <a href="/#sertifikat">Sertifikat</a>
            <a href="/#skill">Skill</a>
            <a href="/#kontak">Kontak</a>
          </nav>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
