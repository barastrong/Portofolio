import PigFilter from '../assets/images/pigFilter.png';
import Epicurean from '../assets/images/Epicurean.png';
import NeoManga from '../assets/images/NeoManga.png';
import BintangArga from '../assets/images/argabintang.png';
import UjianDTP from '../assets/images/UjianDTP.png';
import SongData from '../assets/images/SongData.png';
import Notepad from '../assets/images/NotePad.png';

export interface ProjectData {
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  documentation?: string[],
  date: string;
  slug: string;
  github?: string;
  pptLink?: string;
  tags: string[];
  fitures?: string[];
  type?: string[];
}

const projectsData: ProjectData[] = [
  {
    title: 'Pig Face Filter',
    shortDesc: 'Situs jual beli fungsional dengan manajemen produk, keranjang belanja, dan sistem pembayaran.',
    longDesc: 'Platform e-commerce ini dibangun dari awal menggunakan Laravel untuk backend API dan React untuk frontend yang dinamis. Fitur utama termasuk otentikasi pengguna, katalog produk dengan pencarian dan filter, manajemen keranjang belanja, dan integrasi dengan gateway pembayaran untuk proses checkout yang aman.',
    image: PigFilter,
    date: 'Agustus 2025',
    slug: 'pig-face-filter',
    pptLink: 'https://www.canva.com/design/DAGviorWCGQ/2V6AckRVlwDq3f56WgTLDA/edit?utm_content=DAGviorWCGQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tags: ['Python', 'AI', 'AR', 'MediaPipe'],
    fitures: ['AI Image Processing', 'Real-time Face Detection', 'Interactive User Interface']
  },
  {
      title: 'NeoManga Website',
    shortDesc: 'Aplikasi untuk booking kamar hotel dengan kalender interaktif dan manajemen pemesanan.',
    longDesc: 'Sebuah sistem lengkap untuk reservasi hotel, memungkinkan tamu untuk melihat ketersediaan kamar secara real-time melalui kalender interaktif. Admin dapat mengelola kamar, harga, dan pemesanan melalui dasbor khusus. Dibangun dengan Laravel dan Vue.js untuk menciptakan pengalaman pengguna yang mulus dan responsif.',
    image: NeoManga,
    date: 'Juni 2025',
    slug: 'Neo-Manga',
    github: 'https://github.com/barastrong/NeoManga',
    tags: ['Laravel', 'Tailwind', 'MySQL'],
    fitures: ['Free Manga Reading','History','User Authentifikasi', 'Bookmark']
  },
  {
      title: 'Website shoope palsu',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: BintangArga,
    date: 'Juni 2025',
    slug: 'web-shoope',
    github: 'https://github.com/barastrong/bintangarga',
    pptLink: 'https://www.canva.com/design/DAGqVg1I06w/Hn1xBvZkTmVyVtFgoX6q0w/edit?utm_content=DAGqVg1I06w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tags: ['Laravel', 'Tailwind', 'MySQL'],
    fitures: ['Responsive Design', 'Image Gallery', 'Content Management System', 'Seller Dashboard', 'User Authentication', 'Delivery Dashboard', 'Product Management', 'Order Management', 'Seller Aproval System', 'User Reviews', 'Seller Approval System', 'province and city filters', 'Product Search']
},
{
  title: 'Aplikasi Epicurean',
  shortDesc: 'Aplikasi berbasis web untuk mengatur tugas harian dengan fitur drag-and-drop dan notifikasi.',
  longDesc: 'Aplikasi ini dirancang untuk membantu pengguna mengelola tugas mereka secara efisien. Menggunakan React dengan state management yang canggih, aplikasi ini memiliki antarmuka drag-and-drop intuitif untuk memindahkan tugas antar kolom (misalnya, "To Do", "In Progress", "Done"). Notifikasi real-time diimplementasikan untuk pengingat tenggat waktu.',
  image: Epicurean,
  date: 'Januari 2025',
  slug: 'aplikasi-task-manager',
  pptLink: 'https://www.canva.com/design/DAGch778pTY/4jjiQC0giQMjXAaYwP7cNg/edit?utm_content=DAGch778pTY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  tags: ['Expo', 'Firebase'],
  fitures: ['Real-time Database', 'User authentification','Category database', 'Search product', 'Product table']
},
{
      title: 'Aplikasi Notepad',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: Notepad,
    date: 'Juli 2024',
    slug: 'notepad',
    tags: ['Expo', 'Firebase']
},
{
      title: 'Aplikasi Song Data',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: SongData,
    date: 'Juni 2024',
    slug: 'song-data',
    tags: ['Expo'],
    fitures :[' ']
},
{
      title: 'Website Informasi',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: UjianDTP,
    date: 'November 2024',
    slug: 'ujian-dtp',
    github: 'https://github.com/barastrong/UjianDTP',
    tags: ['Expo', 'Firebase']
},
];

// Ekspor data sebagai default
export default projectsData;