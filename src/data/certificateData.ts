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
import EnglishFirst from '../assets/images/Cert_EFBook2.jpeg'
import EFELevel1 from '../assets/images/Cert_EFEBasic1.jpeg'
import EFELevel2 from '../assets/images/Cert_EFEBasic2.jpeg'



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
    date: 'Februari 2026',
    image: EFELevel2,
    title: 'English Program - Adult Level 2',
    course: 'English For Everyone (EFE Indonesia)',
    description: 'Sertifikat penyelesaian program pembelajaran Bahasa Inggris tingkat Adult Level 2 dengan total 24 jam pembelajaran. Program ini menekankan peningkatan kemampuan speaking, listening, reading, dan writing melalui partisipasi aktif di kelas serta evaluasi berbasis kompetensi.',
    list: ['Speaking', 'Listening', 'Reading', 'Writing']
  },
  {
    date: 'Januari 2026',
    image: EFELevel1,
    title: 'English Program - Adult Level 1',
    course: 'English For Everyone (EFE Indonesia)',
    description: 'Sertifikat penyelesaian program pembelajaran Bahasa Inggris tingkat Adult Level 1 dengan total 24 jam pembelajaran. Fokus pembelajaran meliputi dasar grammar, vocabulary, conversation practice, serta penguatan kepercayaan diri dalam komunikasi Bahasa Inggris.',
    list: ['Basic Grammar', 'Vocabulary', 'Conversation Practice']
  },
  {
    date: 'November 2025',
    image: Frontend,
    title: 'Pengembangan Frontend dengan Vue JS',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan pengembangan Frontend yang berfokus pada pembuatan aplikasi web modern menggunakan Vue JS. Materi mencakup pembuatan komponen, pengelolaan state reaktif, routing, integrasi API, serta pengembangan antarmuka yang responsif dan interaktif sesuai standar industri.',
    list: ['Vue JS', 'Component-Based Architecture', 'Vue Router', 'API Integration']
  },
  {
    date: 'November 2025',
    image: Mecnesia,
    title: 'Kursus Bahasa Inggris Dasar',
    course: 'Mecnesia Academy',
    description: 'Sertifikat kursus Bahasa Inggris tingkat dasar yang berfokus pada peningkatan kemampuan grammar, vocabulary, reading, writing, dan conversation. Program ini dirancang untuk membangun fondasi komunikasi yang baik dalam konteks akademik maupun profesional.',
  },
  {
    date: 'November 2025',
    image: PesertaLombaWebDev,
    title: 'Peserta Lomba Web Development',
    course: 'IDN Boarding School',
    description: 'Sertifikat partisipasi dalam kompetisi Web Development tingkat nasional yang menekankan kolaborasi tim, inovasi desain, serta penerapan teknologi web modern dalam membangun solusi digital yang kreatif dan fungsional.',
    list:['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'September 2025',
    image: Elevaite,
    title: 'Kursus Persiapan Dasar Azure AI (AI-900)',
    course: 'Academy Mereka',
    description: 'Sertifikat pelatihan persiapan sertifikasi Microsoft Azure AI-900 yang membahas konsep dasar Artificial Intelligence, machine learning, computer vision, natural language processing, serta implementasi layanan AI pada platform Microsoft Azure.',
    list: ['Azure AI', 'Machine Learning', 'Computer Vision', 'NLP']
  },
  {
    date: 'Agustus 2025',
    image: Webinar,
    title: 'Pembinaan IT Networking',
    course: 'ID-Networkers',
    description: 'Sertifikat pembinaan dan pelatihan di bidang IT Networking yang membahas konsep jaringan komputer, topologi jaringan, konfigurasi dasar perangkat, serta pemahaman fundamental mengenai infrastruktur jaringan modern.',
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
    description: 'Sertifikat pelatihan pengembangan aplikasi mobile menggunakan React Native. Materi mencakup perancangan UI/UX, manajemen state, integrasi backend, serta proses deployment aplikasi berbasis Android.',
    list: ['React Native', 'Firebase', 'Node.js']
  },
  {
    date: 'Juni 2023',
    image: WebDev,
    title: 'Pengembangan Web',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan pengembangan web yang mencakup tingkat dasar hingga menengah menggunakan HTML, CSS, dan JavaScript. Program ini berfokus pada pembuatan website yang responsif, interaktif, dan terstruktur dengan baik.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'Oktober 2022',
    image: GameDev,
    title: 'Pembuatan Game Menggunakan JavaScript',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan pengembangan game berbasis JavaScript yang mencakup pembuatan logika permainan, animasi interaktif, collision detection, serta pengelolaan event untuk menghasilkan game berbasis web yang dinamis.',
    list: ['JavaScript', 'Game Logic', 'Animation']
  },
  {
    date: 'Juli 2022',
    image: Beginner,
    title: 'Belajar Pemrograman untuk Pemula',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan dasar pemrograman yang membahas konsep fundamental seperti variabel, percabangan, perulangan, struktur data sederhana, serta logika algoritma sebagai fondasi pengembangan perangkat lunak.',
    list: ['Programming Logic', 'HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'Maret 2022',
    image: EnglishFirst,
    title: 'CEFR A1 Book 2 Completion',
    course: 'EF English First - Sidoarjo',
    description: 'Sertifikat Certificate of Achievement atas penyelesaian CEFR A1 Book 2 di EF English First Center Sidoarjo. Program ini berfokus pada penguatan kemampuan dasar Bahasa Inggris sesuai standar CEFR, termasuk pemahaman struktur kalimat, reading comprehension, serta komunikasi dasar sehari-hari.',
    list: ['CEFR A1 Level', 'Reading', 'Basic Conversation']
  },
];



export default certificateData;