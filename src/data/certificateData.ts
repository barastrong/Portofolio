import AppDev from '../assets/images/Cert_AppDev.jpg';
import WebDev from '../assets/images/Cert_WebDev.jpg';
import GameDev from '../assets/images/Cert_GameDev.jpg';
import Beginner from '../assets/images/Cert_Beginner.jpg';
import TeensAi from '../assets/images/Cert_TeensAi.jpg';
import Webinar from '../assets/images/WebinerNetworking.jpg';
import Elevaite from '../assets/images/elevaite.jpg'
import Mecnesia from '../assets/images/Cert_Mecnesia.jpg'
import PesertaLombaWebDev from '../assets/images/Cert_PesertaLomba.jpg'
import Frontend from '../assets/images/Cert_Frontend.jpg'


export interface CertificateData {
  date: string;
  image: string;
  title: string;
  course: string;
  description: string;
  list?: string[];
}

const certificateData: CertificateData[] = [
  {
    date: 'November 2025',
    image: Frontend,
    title: 'Frontend Development with Vue JS',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan Frontend Development yang berfokus pada pengembangan aplikasi web modern menggunakan Vue JS. Materi mencakup komponen, reactive state management, routing, API integration, serta pembuatan antarmuka responsif dan interaktif sesuai praktik industri.',
    list: ['Vue JS', 'Component-Based Architecture', 'Vue Router', 'API Integration']
  },
  {
    date: 'November 2025',
    image: Mecnesia,
    title: 'Basic English Course',
    course: 'Mecnesia Academy',
    description: 'Sertifikat kursus Bahasa Inggris dasar yang berfokus pada pengembangan kemampuan grammar, vocabulary, reading, writing, dan conversation. Program ini dirancang untuk meningkatkan kemampuan komunikasi dalam konteks akademik maupun profesional.',
  },
  {
    date: 'November 2025',
    image: PesertaLombaWebDev,
    title: 'Peserta Lomba Web Development',
    course: 'IDN IT FEST',
    description: 'Sertifikat partisipasi dalam kompetisi Web Development tingkat nasional yang menekankan pada kolaborasi tim, inovasi desain, serta implementasi teknologi web modern dalam membangun solusi digital yang kreatif.',
    list:['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'September 2025',
    image: Elevaite,
    title: 'Kursus Persiapan Dasar Azure AI (AI-900)',
    course: 'Academy Mereka',
    description: 'Sertifikat pelatihan persiapan sertifikasi Microsoft Azure AI-900 yang mencakup konsep dasar Artificial Intelligence, machine learning, computer vision, natural language processing, serta implementasi layanan AI di platform Microsoft Azure.',
    list: ['Azure AI', 'Machine Learning', 'Computer Vision', 'NLP']
  },
  {
    date: 'Agustus 2025',
    image: Webinar,
    title: 'Pembinaan IT Networking',
    course: 'ID-Networkers',
    description: 'Sertifikat pembinaan dan pelatihan IT Networking yang membahas konsep jaringan komputer, topologi jaringan, konfigurasi dasar perangkat jaringan, serta pemahaman fundamental infrastruktur jaringan modern.',
    list: ['Networking Fundamentals', 'IP Addressing', 'Routing & Switching']
  },
  {
    date: 'Agustus 2025',
    image: TeensAi,
    title: 'Pembuatan dan Implementasi Artificial Intelligence',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan yang berfokus pada pengembangan dan implementasi Artificial Intelligence dalam berbagai proyek, termasuk pengolahan data, machine learning, deep learning, serta penerapan AI pada studi kasus nyata.',
    list: ['Python', 'AI', 'Machine Learning', 'Deep Learning']
  },
  {
    date: 'Februari 2025',
    image: AppDev,
    title: 'Pengembangan Aplikasi Mobile',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan pengembangan aplikasi mobile menggunakan React Native. Materi mencakup pembuatan UI/UX mobile, manajemen state, integrasi backend, serta deployment aplikasi berbasis Android.',
    list: ['React Native', 'Firebase', 'Node.js']
  },
  {
    date: 'Juni 2023',
    image: WebDev,
    title: 'Web Development',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan pengembangan web yang mencakup dasar hingga menengah dalam HTML, CSS, dan JavaScript. Program ini berfokus pada pembuatan website responsif, interaktif, dan terstruktur dengan praktik terbaik front-end development.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'October 2022',
    image: GameDev,
    title: 'Pembuatan Game menggunakan JavaScript',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan pengembangan game berbasis JavaScript yang mencakup pembuatan logika permainan, animasi interaktif, collision detection, serta pengelolaan event untuk menghasilkan game berbasis web yang dinamis.',
    list: ['JavaScript', 'Game Logic', 'Animation']
  },
  {
    date: 'Juli 2022',
    image: Beginner,
    title: 'Belajar Pemrograman untuk Pemula',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan dasar pemrograman yang mencakup konsep fundamental seperti variabel, percabangan, perulangan, struktur data sederhana, serta logika algoritma sebagai fondasi pengembangan software.',
    list: ['Programming Logic', 'HTML', 'CSS', 'JavaScript']
  },
];


export default certificateData;