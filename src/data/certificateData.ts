import AppDev from '../assets/images/Cert_AppDev.jpg';
import WebDev from '../assets/images/Cert_WebDev.jpg';
import GameDev from '../assets/images/Cert_GameDev.jpg';
import Beginner from '../assets/images/Cert_Beginner.jpg';
import TeensAi from '../assets/images/Cert_TeensAi.jpg';
import Webinar from '../assets/images/WebinerNetworking.jpg';

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