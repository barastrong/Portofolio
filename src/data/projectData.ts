import PigFilter from '../assets/images/PigFilter.png';

export interface ProjectData {
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  date: string;
  slug: string;
  github: string;
  tags: string[];
}

const projectsData: ProjectData[] = [
  {
    title: 'Pig Face Filter',
    shortDesc: 'Situs jual beli fungsional dengan manajemen produk, keranjang belanja, dan sistem pembayaran.',
    longDesc: 'Platform e-commerce ini dibangun dari awal menggunakan Laravel untuk backend API dan React untuk frontend yang dinamis. Fitur utama termasuk otentikasi pengguna, katalog produk dengan pencarian dan filter, manajemen keranjang belanja, dan integrasi dengan gateway pembayaran untuk proses checkout yang aman.',
    image: PigFilter,
    date: 'Agutus 2025',
    slug: 'platform-e-commerce',
    github: '',
    tags: ['Python', 'AI', 'Machine Learning']
  },
  {
    title: 'Aplikasi Task Manager',
    shortDesc: 'Aplikasi berbasis web untuk mengatur tugas harian dengan fitur drag-and-drop dan notifikasi.',
    longDesc: 'Aplikasi ini dirancang untuk membantu pengguna mengelola tugas mereka secara efisien. Menggunakan React dengan state management yang canggih, aplikasi ini memiliki antarmuka drag-and-drop intuitif untuk memindahkan tugas antar kolom (misalnya, "To Do", "In Progress", "Done"). Notifikasi real-time diimplementasikan untuk pengingat tenggat waktu.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80',
    date: 'Oktober 2023',
    slug: 'aplikasi-task-manager',
    github: 'https://github.com/bintang-bara-adyasta',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket']
  },
  {
    title: 'Sistem Reservasi Hotel',
    shortDesc: 'Aplikasi untuk booking kamar hotel dengan kalender interaktif dan manajemen pemesanan.',
    longDesc: 'Sebuah sistem lengkap untuk reservasi hotel, memungkinkan tamu untuk melihat ketersediaan kamar secara real-time melalui kalender interaktif. Admin dapat mengelola kamar, harga, dan pemesanan melalui dasbor khusus. Dibangun dengan Laravel dan Vue.js untuk menciptakan pengalaman pengguna yang mulus dan responsif.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    date: 'Agustus 2023',
    slug: 'sistem-reservasi-hotel',
    github: 'https://github.com/bintang-bara-adyasta',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Admin Panel']
  },
  {
    title: 'Website Portofolio Fotografi',
    shortDesc: 'Galeri foto dinamis dan elegan untuk menampilkan karya-karya seorang fotografer profesional.',
    longDesc: 'Portofolio visual yang menakjubkan ini menggunakan React dan Framer Motion untuk membuat animasi yang halus dan transisi halaman yang elegan. Website ini sepenuhnya responsif, memastikan galeri foto terlihat sempurna di semua perangkat. Ada sistem manajemen konten sederhana bagi fotografer untuk mengunggah dan mengatur karya mereka.',
    image: 'https://images.unsplash.com/photo-1512295767273-b684ac7658fa?w=800&q=80',
    date: 'Juni 2023',
    slug: 'website-portofolio-fotografi',
    github: 'https://github.com/bintang-bara-adyasta',
    tags: ['React', 'Framer Motion', 'UI/UX']
  },
];

// Ekspor data sebagai default
export default projectsData;