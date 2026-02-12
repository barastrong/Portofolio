import AppDev from '../assets/images/Cert_AppDev.jpg';
import WebDev from '../assets/images/Cert_WebDev.jpg';
import GameDev from '../assets/images/Cert_GameDev.jpg';
import Beginner from '../assets/images/Cert_Beginner.jpg';
import TeensAi from '../assets/images/Cert_TeensAi.jpg';
import Webinar from '../assets/images/WebinerNetworking.jpg';
import Elevaite from '../assets/images/elevaite.jpg'
import Mecnesia from '../assets/images/Cert_Mecnesia.jpg'
import PesertaLombaWebDev from '../assets/images/Cert_PesertaLomba.jpg'

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
    image: Mecnesia,
    title: 'Basic English Course',
    course: 'Mecnesia Academy',
    description: 'Sertifikat kursus Bahasa Inggris dasar yang berfokus pada peningkatan kemampuan grammar, vocabulary, reading, writing, dan basic conversation. Pelatihan ini membantu membangun fondasi komunikasi Bahasa Inggris yang baik untuk kebutuhan akademik maupun profesional.',
  },
  {
    date: 'November 2025',
    image: PesertaLombaWebDev,
    title: 'Peserta Lomba Web Dev',
    course: 'IDN IT FEST',
    description: 'Kompetisi tim Web Development yang diselenggarakan oleh IDN Boarding School, berfokus pada perancangan dan pengembangan website inovatif dengan kolaborasi tim, kreativitas, serta penerapan teknologi modern.',
    list:['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'September 2025',
    image: Elevaite,
    title: 'Kursus Persiapan untuk Dasar-Dasar Azure AI (AI-900)',
    course: 'Academy Mereka',
    description: 'Sertifikat pelatihan yang menekankan pada penerapan AI dalam berbagai proyek, termasuk pengolahan gambar, pemrosesan bahasa alami, dan pembelajaran mesin.',
  },
  {
    date: 'Agustus 2025',
    image: Webinar,
    title: 'Pembinaan tentang IT Networking',
    course: 'ID-Networkers',
    description: 'Sertifikat pelatihan yang menekankan pada penerapan AI dalam berbagai proyek, termasuk pengolahan gambar, pemrosesan bahasa alami, dan pembelajaran mesin.',
  },
  {
    date: 'Agustus 2025',
    image: TeensAi,
    title: 'Pembuatan dan Impelementasi Tentang Ai',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan yang menekankan pada penerapan AI dalam berbagai proyek, termasuk pengolahan gambar, pemrosesan bahasa alami, dan pembelajaran mesin.',
    list: ['Python', 'AI', 'Machine Learning', 'Deep Learning']
  },
  {
    date: 'Februari 2025',
    image: AppDev,
    title: 'Pembuatan Aplikasi Mobile',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan yang menekankan pada pengembangan aplikasi mobile menggunakan React Native, termasuk pembuatan antarmuka pengguna, manajemen state, dan integrasi backend.',
    list: ['React Native', 'Firebase', 'Node.js']
  },
  {
    date: 'Juni 2023',
    image: WebDev,
    title: 'Pengembangan Web  Developer',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan yang menekankan pada pengembangan web menggunakan HTML, CSS, dan JavaScript, termasuk pembuatan halaman web responsif dan interaktif.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'October 2022',
    image: GameDev,
    title: 'Pembuatan Game menggunakan JavaScript',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan yang menekankan pada pengembangan game menggunakan JavaScript, termasuk pembuatan logika game, animasi, dan interaksi pengguna.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'Juli 2022',
    image: Beginner,
    title: 'Belajar Pemrograman untuk Pemula',
    course: 'Timedoor Academy',
    description: 'Sertifikat pelatihan yang menekankan pada dasar-dasar pemrograman, termasuk konsep pemrograman, struktur data, dan algoritma.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
];

export default certificateData;