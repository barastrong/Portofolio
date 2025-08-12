import AppDev from '../assets/images/Cert_AppDev.jpg';
import WebDev from '../assets/images/Cert_WebDev.jpg';
import GameDev from '../assets/images/Cert_GameDev.jpg';
import Beginner from '../assets/images/Cert_Beginner.jpg';

export interface CertificateData {
  date: string;
  image: string;
  title: string;
  course: string;
  description: string;
  list: string[];
}

const certificateData: CertificateData[] = [
  {
    date: 'Februari 2025',
    image: AppDev,
    title: 'Pembuatan Aplikasi Mobile',
    course: 'Timedoor Academy',
    description: 'Sertifikasi profesional yang mencakup pengembangan API, manajemen database, dan kontrol versi dengan Python dan Django.',
    list: ['React Native', 'Firebase', 'Node.js']
  },
  {
    date: 'Juni 2023',
    image: WebDev,
    title: 'Pengembangan Web Full Stack',
    course: 'Timedoor Academy',
    description: 'Pelatihan komprehensif tentang fundamental React, termasuk komponen, state, props, hooks, dan routing.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'October 2022',
    image: GameDev,
    title: 'Pembuatan Game menggunakan JavaScript',
    course: 'Timedoor Academy',
    description: 'Memahami konsep dasar cloud AWS, layanan inti, keamanan, arsitektur, harga, dan model dukungan.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'Juli 2022',
    image: Beginner,
    title: 'Belajar Pemrograman untuk Pemula',
    course: 'Timedoor Academy',
    description: 'Memahami konsep dasar cloud AWS, layanan inti, keamanan, arsitektur, harga, dan model dukungan.',
    list: ['HTML', 'CSS', 'JavaScript']
  },
];

export default certificateData;