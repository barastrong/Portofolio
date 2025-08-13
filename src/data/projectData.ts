import PigFilter from '../assets/images/pigFilter.png';
import Epicurean from '../assets/images/Epicurean.png';
import NeoManga from '../assets/images/NeoManga.png';
import BintangArga from '../assets/images/argabintang.png';

export interface ProjectData {
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  date: string;
  slug: string;
  github: string;
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
    github: '',
    tags: ['Python', 'AI', 'Machine Learning'],
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
    tags: ['Laravel', 'Tailwind', 'MySQL'],
    fitures: ['Responsive Design', 'Image Gallery', 'Content Management System', 'Seller Dashboard', 'User Authentication', 'Delivery Dashboard', 'Product Management', 'Order Management', 'Seller Aproval System', 'User Reviews', 'Seller Approval System', 'province and city filters', 'Product Search']
},
{
      title: 'Website shoope palsu',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: BintangArga,
    date: 'Juni 2025',
    slug: 'web-shoope',
    github: 'https://github.com/barastrong/bintangarga',
    tags: ['React', 'Framer Motion', 'UI/UX']
},
{
      title: 'Website shoope palsu',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: BintangArga,
    date: 'Juni 2025',
    slug: 'web-shoope',
    github: 'https://github.com/barastrong/bintangarga',
    tags: ['React', 'Framer Motion', 'UI/UX']
},
{
  title: 'Aplikasi Epicurean',
  shortDesc: 'Aplikasi berbasis web untuk mengatur tugas harian dengan fitur drag-and-drop dan notifikasi.',
  longDesc: 'Aplikasi ini dirancang untuk membantu pengguna mengelola tugas mereka secara efisien. Menggunakan React dengan state management yang canggih, aplikasi ini memiliki antarmuka drag-and-drop intuitif untuk memindahkan tugas antar kolom (misalnya, "To Do", "In Progress", "Done"). Notifikasi real-time diimplementasikan untuk pengingat tenggat waktu.',
  image: Epicurean,
  date: 'Januari 2025',
  slug: 'aplikasi-task-manager',
  github: 'https://github.com/bintang-bara-adyasta',
  tags: ['React Native', 'Firebase'],
  fitures: ['Real-time Database', 'User authentification','Category database', 'Search product', 'Product table']
},
{
      title: 'Website Informasi',
      shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: BintangArga,
    date: 'Juni 2025',
    slug: 'web-shoope',
    github: 'https://github.com/barastrong/bintangarga',
    tags: ['Expo', 'Tailwind', 'Firebase']
},
];

// Ekspor data sebagai default
export default projectsData;