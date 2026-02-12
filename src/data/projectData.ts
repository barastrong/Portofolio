// Images
import PigFilter from '../assets/images/pigFilter.png';
import Epicurean from '../assets/images/Epicurean.png';
import BintangArga from '../assets/images/argabintang.png';
import UjianDTP from '../assets/images/UjianDTP.png';
import SongData from '../assets/images/SongData.png';
import Notepad from '../assets/images/NotePad.png';
import HighwayTracker from '../assets/images/Highway_Tracker.png';
import DectectionObjectVideo from '../assets/images/Detection_Object_Video.png';
import VintageWebsite from '../assets/images/VintageWebsite.png';
import NeoManga from '../assets/images/NeoManga.png';
import WebTesKepribadian from '../assets/images/TesKepribadian.png';
import JemuranOtomatis from '../assets/images/DashboardIOT.png';

// Documentation
import { LoginApp, RegisterApp, OnBoarding1, OnBoarding2, OnBoarding3, GuideBook, DashboardApp, ProfileApp, AktivitasForm, AnalisisAI, AnalisisAI2 } from '../assets/docs/SmartReportAI'
import { LoginFitFashion, RegisterFitFashion, VerifyOTP, Profile, AdminPanelUser, AdminPanelSeller, AdminPanelSellerApproval, AdminPanelProduct, AdminPanelPurchase, AdminPanelDelivery, AdminPanelDeliveryApproval, SellerDashboard, SellerProduct, SellerAddProduct, SellerOrder, SellerProfile, RegisterSeller, SuccessRegisterSeller, DeliveryDashboard, DeliveryHistory, DeliveryPending, DeliveryProfile, DeliveryShipping, DeliveryDelivered, DeliveryDetailShipping, DeliveryDetailPickedup, DeliveryDetailDelivered, DeliveryDetailSelesai, EmptyDeliveryDashboard, RegisterDelivery, Dashboard, CategoryProduct, DetailProductFitFashion, Cart, EmptyCartFitFashion, CheckoutPage, CheckoutConfirmStatus, CheckoutCompleted, SuccessCheckout, StatusPending, StatusProcess, StatusCompleted, StatusCancelled,
} from '../assets/docs/FitFashion';
import { RegisterTes, Question, FinalQuestion, LoadResult, Results } from '../assets/docs/Tes_Kepribadian';
import { Person, Bottle } from '../assets/docs/Detection_Object_Open_Camera';
import { LoginNeo, RegisterNeo, MangaStatus, MangaType, MangaGenre, MangaSearch, MangaDetail, DetailChapter, MangaBookmark, MangaList, MangaOrder, MangaHistory } from '../assets/docs/NeoManga';
import { Login, Register, LandingPage, CategoryProducts, ProductPage, DetailProduct, SearchPage, FavoriteProducts, CartPage, OrderConfirmation, SuccessOrder, SuccessCart, TransactionHistory, EditProfile, ChangePassword, EmptyCart, EmptyFavorite, EmptyHistory, EmptySearch } from '../assets/docs/Vintage_Website';

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
    title: 'Aplikasi Report Aktivitas',
    shortDesc: 'Aplikasi pelaporan aktivitas berbasis AI yang membantu pengguna mencatat, menganalisis, dan mendapatkan insight produktivitas secara otomatis.',
   longDesc: 'Aplikasi Report Aktivitas (Smart Report AI) merupakan platform berbasis web/mobile yang dirancang untuk membantu pengguna dalam mencatat dan menganalisis aktivitas harian secara terstruktur. Sistem ini memanfaatkan integrasi AI untuk mengolah data aktivitas dan menghasilkan insight otomatis terkait pola produktivitas, efisiensi waktu, serta rekomendasi peningkatan performa. Aplikasi dibangun menggunakan Node JS sebagai backend dengan arsitektur REST API untuk memastikan komunikasi data yang efisien, serta MySQL sebagai database penyimpanan data pengguna dan laporan aktivitas. Integrasi AI API memungkinkan sistem melakukan analisis cerdas terhadap data yang diinput pengguna dan menampilkan hasil dalam bentuk ringkasan serta evaluasi otomatis. Dengan struktur onboarding yang interaktif, dashboard informatif, serta sistem autentikasi yang aman, aplikasi ini dirancang untuk memberikan pengalaman pengguna yang modern, responsif, dan mudah digunakan. Smart Report AI tidak hanya berfungsi sebagai pencatat aktivitas, tetapi juga sebagai asisten digital berbasis AI untuk meningkatkan produktivitas.',
    image: DashboardApp,
    documentation: [
      OnBoarding1,
      OnBoarding2,
      OnBoarding3,
      LoginApp,
      RegisterApp,
      GuideBook,
      DashboardApp,
      AktivitasForm,
      AnalisisAI,
      AnalisisAI2,
      ProfileApp,
    ],
    date: 'Januari 2026',
    slug: 'smart-report-ai',
    github: 'https://github.com/barastrong/SmartReportAI',
    tags: ['Expo', 'MySQL', 'AI API Integration', 'REST API', 'Node JS'],
    fitures: [ 'User Registration & Secure Authentication', 'Interactive Onboarding Experience', 'Form Input Aktivitas Harian', 'AI-Based Activity Analysis', 'Automatic Productivity Insight Generation', 'Dashboard Monitoring Aktivitas', 'Profile & Account Management', 'RESTful API Architecture', 'Database Management menggunakan MySQL', 'AI API Integration untuk Analisis Data', 'Responsive & Modern UI Design', 'Real-time Result & Loading State Handling' ]
  },
  {
    title: 'Vintage Website',
    shortDesc: 'Platform e-commerce full-featured dengan sistem transaksi terintegrasi dan pengalaman pengguna yang optimal.',
    longDesc: 'Vintage Website merupakan platform e-commerce full-featured yang dikembangkan untuk mensimulasikan sistem belanja online secara lengkap. Aplikasi ini mencakup autentikasi pengguna, pengelolaan akun dan keamanan (ubah password), katalog produk berbasis kategori, detail produk, pencarian real-time, fitur favorit, hingga sistem keranjang belanja dan checkout. Pengguna dapat melakukan konfirmasi pesanan dan memantau riwayat transaksi melalui dashboard pribadi. Setiap alur pengguna dirancang dengan mempertimbangkan user experience, termasuk penanganan kondisi kosong seperti keranjang kosong, pencarian tanpa hasil, dan riwayat transaksi kosong. Proyek ini dibangun menggunakan Vue.js, PHP, dan MySQL dengan arsitektur yang modular dan scalable.',
    image: VintageWebsite,
    documentation: [
      VintageWebsite,
      Login,
      Register,
      LandingPage,
      CategoryProducts,
      ProductPage,
      DetailProduct,
      SearchPage,
      FavoriteProducts,
      CartPage,
      OrderConfirmation,
      SuccessOrder,
      SuccessCart,
      TransactionHistory,
      EditProfile,
      ChangePassword,
      EmptyCart,
      EmptyFavorite,
      EmptyHistory,
      EmptySearch,
    ],
    date: 'Desember 2025',
    slug: 'vintage-website',
    github: 'https://github.com/barastrong/VintageWebsite',
    tags: ['Vue JS', 'PHP', 'MySQL'],
    fitures: ['Secure User Authentication (Login, Register, Session Management)', 'Dynamic Product Categorization', 'Detailed Product Information Page', 'Real-time Product Search', 'Wishlist / Favorite Product System', 'Add to Cart & Cart Quantity Management', 'Order Confirmation & Checkout Workflow', 'Order Success Notification', 'User Transaction History Dashboard', 'User Profile Editing & Account Settings', 'Password Update System', 'Comprehensive Empty State UX Handling', 'Responsive and Modern UI Design']
  },
  {
    title: 'Jemuran Otomatis',
    shortDesc: 'Platform tes kepribadian berbasis web dengan sistem penilaian otomatis dan analisis hasil secara real-time.',
    longDesc: 'Website Tes Kepribadian merupakan platform berbasis web yang dirancang untuk melakukan asesmen kepribadian secara digital dengan sistem penilaian otomatis. Aplikasi ini dibangun menggunakan React JS sebagai frontend dan Flask sebagai backend API, dengan MySQL sebagai database untuk menyimpan data pengguna dan hasil tes. Sistem memungkinkan pengguna untuk melakukan registrasi, menjawab serangkaian pertanyaan yang terstruktur, hingga memperoleh hasil analisis kepribadian secara otomatis setelah seluruh pertanyaan selesai dijawab. Proses pengolahan hasil dilakukan melalui backend yang menghitung skor berdasarkan kategori tertentu dan menampilkan interpretasi hasil secara dinamis. Arsitektur aplikasi menggunakan pendekatan RESTful API untuk memastikan komunikasi yang efisien antara frontend dan backend. Dengan tampilan responsif berbasis Tailwind CSS, platform ini dirancang untuk memberikan pengalaman pengguna yang interaktif, cepat, dan mudah dipahami.',
    image: JemuranOtomatis,
    documentation: [
      WebTesKepribadian, RegisterTes, Question, FinalQuestion, LoadResult, Results
    ],
    date: 'November 2025',
    slug: 'jemuran-otomatis',
    github: 'https://github.com/barastrong/ProjectIOTDashboardWithFlask',
    tags: ['Flask', 'AI API Integration', 'MySQL', 'Rest API'],
    fitures: ['User Registration & Authentication', 'Sistem Pertanyaan Bertahap (Step-by-Step Assessment)', 'Perhitungan Skor Otomatis di Backend', 'Analisis Hasil Tes Secara Real-time', 'Halaman Hasil dengan Interpretasi Kepribadian', 'Progress Indicator saat Mengisi Tes', 'Integrasi RESTful API (React + Flask)', 'Penyimpanan Data Hasil Tes ke Database MySQL', 'Responsive UI menggunakan Tailwind CSS', 'Loading & Result State Management']
  },
  {
    title: 'Website Tes Kepribadian',
    shortDesc: 'Platform tes kepribadian berbasis web dengan sistem penilaian otomatis dan analisis hasil secara real-time.',
    longDesc: 'Website Tes Kepribadian merupakan platform berbasis web yang dirancang untuk melakukan asesmen kepribadian secara digital dengan sistem penilaian otomatis. Aplikasi ini dibangun menggunakan React JS sebagai frontend dan Flask sebagai backend API, dengan MySQL sebagai database untuk menyimpan data pengguna dan hasil tes. Sistem memungkinkan pengguna untuk melakukan registrasi, menjawab serangkaian pertanyaan yang terstruktur, hingga memperoleh hasil analisis kepribadian secara otomatis setelah seluruh pertanyaan selesai dijawab. Proses pengolahan hasil dilakukan melalui backend yang menghitung skor berdasarkan kategori tertentu dan menampilkan interpretasi hasil secara dinamis. Arsitektur aplikasi menggunakan pendekatan RESTful API untuk memastikan komunikasi yang efisien antara frontend dan backend. Dengan tampilan responsif berbasis Tailwind CSS, platform ini dirancang untuk memberikan pengalaman pengguna yang interaktif, cepat, dan mudah dipahami.',
    image: WebTesKepribadian,
    documentation: [
      WebTesKepribadian, RegisterTes, Question, FinalQuestion, LoadResult, Results
    ],
    date: 'November 2025',
    slug: 'tes-kepribadian',
    github: 'https://github.com/barastrong/TryoutInkubasi',
    tags: ['React JS', 'Tailwind', 'Flask', 'REST API', 'MySQL'],
    fitures: ['User Registration & Authentication', 'Sistem Pertanyaan Bertahap (Step-by-Step Assessment)', 'Perhitungan Skor Otomatis di Backend', 'Analisis Hasil Tes Secara Real-time', 'Halaman Hasil dengan Interpretasi Kepribadian', 'Progress Indicator saat Mengisi Tes', 'Integrasi RESTful API (React + Flask)', 'Penyimpanan Data Hasil Tes ke Database MySQL', 'Responsive UI menggunakan Tailwind CSS', 'Loading & Result State Management']
  },
  {
    title: 'Website NeoManga',
    shortDesc: 'Platform web baca manga modern dengan sistem autentikasi, filter kategori, bookmark, dan manajemen riwayat pengguna.',
    longDesc: 'NeoManga merupakan platform web modern untuk membaca dan mengelola koleksi manga secara online. Aplikasi ini dibangun menggunakan React JS sebagai frontend dan Laravel sebagai backend API, dengan MySQL sebagai sistem manajemen basis data. Sistem menyediakan autentikasi pengguna (login & register), fitur pencarian dan filter manga berdasarkan genre, tipe, dan status, serta halaman detail lengkap termasuk daftar chapter. Pengguna dapat menyimpan manga ke dalam bookmark, mengelola daftar bacaan, serta melihat riwayat aktivitas membaca. Arsitektur aplikasi dirancang menggunakan pendekatan RESTful API untuk memastikan pemisahan frontend dan backend yang scalable serta mudah dikembangkan. Dengan tampilan responsif berbasis Tailwind CSS, NeoManga menghadirkan pengalaman pengguna yang modern, cepat, dan terstruktur.',
    image: NeoManga,
    documentation: [
      NeoManga,
      LoginNeo,
      RegisterNeo,
      MangaStatus,
      MangaType,
      MangaGenre,
      MangaSearch,
      MangaDetail,
      DetailChapter,
      MangaBookmark,
      MangaList,
      MangaOrder,
      MangaHistory,
    ],
    date: 'Agustus 2025',
    slug: 'neo-manga',
    github: 'https://github.com/barastrong/NeoManga',
    tags: ['React JS', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API'],
    fitures: ['User Authentication (Login & Register)', 'Filter Manga berdasarkan Genre, Tipe, dan Status', 'Pencarian Manga secara Dinamis', 'Halaman Detail Manga & Daftar Chapter', 'Bookmark / Favorit Manga', 'Riwayat Aktivitas Membaca', 'Manajemen Daftar Manga', 'Sistem Order / Pembelian (jika ada)', 'RESTful API Integration (React + Laravel)', 'Responsive UI menggunakan Tailwind CSS']
  },
  {
    title: 'Pig Face Filter',
    shortDesc: 'Aplikasi face filter berbasis AI dan MediaPipe yang mampu mendeteksi serta melacak wajah secara real-time untuk menerapkan efek Augmented Reality.',
    longDesc: 'Pig Face Filter merupakan aplikasi berbasis Artificial Intelligence yang memanfaatkan teknologi MediaPipe untuk melakukan deteksi dan pelacakan wajah secara real-time. Sistem ini mampu mengidentifikasi titik-titik landmark wajah (facial landmarks) dan menyesuaikan posisi filter secara dinamis mengikuti pergerakan pengguna. Aplikasi mendukung penggunaan webcam maupun unggahan gambar, dengan proses pemrosesan dilakukan secara langsung untuk menghasilkan efek Augmented Reality yang responsif dan stabil. Pipeline sistem mencakup face detection, landmark extraction, transformasi posisi filter, serta rendering visual secara real-time. Proyek ini menunjukkan implementasi computer vision interaktif, optimasi performa real-time processing, serta integrasi AI dalam pengembangan aplikasi berbasis visual yang engaging dan user-friendly.',
    image: PigFilter,
    documentation: [
      PigFilter,
    ],
    date: 'Agustus 2025',
    slug: 'pig-face-filter',
    pptLink: 'https://www.canva.com/design/DAGviorWCGQ/2V6AckRVlwDq3f56WgTLDA/edit?utm_content=DAGviorWCGQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tags: ['Python', 'AI', 'AR', 'MediaPipe'],
    fitures: ['Real-time Face Detection menggunakan MediaPipe', 'Facial Landmark Tracking (Titik Wajah Presisi)', 'Augmented Reality Filter Overlay', 'Penyesuaian Filter Dinamis mengikuti Gerakan Wajah', 'Dukungan Webcam dan Upload Gambar', 'Optimasi Performa untuk Respons Real-time', 'Rendering Visual Interaktif', 'Implementasi Computer Vision berbasis AI', 'User Interface yang Intuitif dan Responsif']
  },
  {
    title: 'Website shoope palsu',
    shortDesc: 'Platform e-commerce dengan sistem penjual, pembeli, dan pengiriman yang terintegrasi.',
    longDesc: 'Website e-commerce lengkap yang dibangun dengan Laravel dan Tailwind CSS. Memiliki fitur multi-user (seller, buyer, delivery) dengan dashboard terpisah untuk setiap role. Sistem mencakup manajemen produk, order processing, approval seller, review produk, dan filter berdasarkan provinsi dan kota untuk pengalaman berbelanja yang optimal.',
    image: BintangArga,
    documentation: [
      BintangArga,
      LoginFitFashion,
      RegisterFitFashion,
      VerifyOTP,
      Profile,
      AdminPanelUser,
      AdminPanelSeller,
      AdminPanelSellerApproval,
      AdminPanelProduct,
      AdminPanelPurchase,
      AdminPanelDelivery,
      AdminPanelDeliveryApproval,
      SellerDashboard,
      SellerProduct,
      SellerAddProduct,
      SellerOrder,
      SellerProfile,
      RegisterSeller,
      SuccessRegisterSeller,
      DeliveryDashboard,
      DeliveryHistory,
      DeliveryPending,
      DeliveryProfile,
      DeliveryShipping,
      DeliveryDelivered,
      DeliveryDetailShipping,
      DeliveryDetailPickedup,
      DeliveryDetailDelivered,
      DeliveryDetailSelesai,
      EmptyDeliveryDashboard,
      RegisterDelivery,
      Dashboard,
      CategoryProduct,
      DetailProductFitFashion,
      Cart,
      EmptyCartFitFashion,
      CheckoutPage,
      CheckoutConfirmStatus,
      CheckoutCompleted,
      SuccessCheckout,
      StatusPending,
      StatusProcess,
      StatusCompleted,
      StatusCancelled,
    ],
    date: 'Juni 2025',
    slug: 'web-shoope',
    github: 'https://github.com/barastrong/bintangarga',
    pptLink: 'https://www.canva.com/design/DAGqVg1I06w/Hn1xBvZkTmVyVtFgoX6q0w/edit?utm_content=DAGqVg1I06w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tags: ['Laravel', 'Tailwind', 'MySQL'],
    fitures: ['Responsive Design', 'Seller Dashboard', 'User Authentication', 'Delivery Dashboard', 'Product Management', 'Order Management', 'Seller Approval System', 'User Reviews', 'Province and City Filters', 'Product Search']
  },
  {
    title: 'Detection object open camera',
    shortDesc: 'Sistem deteksi objek real-time berbasis AI menggunakan kamera langsung dengan pemrosesan frame secara kontinu.',
    longDesc: 'Detection Object (Open Camera) merupakan sistem computer vision berbasis Artificial Intelligence yang mampu mendeteksi dan mengklasifikasikan objek secara real-time melalui kamera langsung (webcam). Aplikasi ini dikembangkan menggunakan Python, OpenCV, dan NumPy dengan integrasi model deep learning untuk melakukan proses inference pada setiap frame video secara berkelanjutan. Sistem memproses aliran video secara kontinu, melakukan preprocessing pada setiap frame, menjalankan model deteksi objek, lalu menampilkan hasil visualisasi berupa bounding box dan label objek secara langsung. Pendekatan ini menuntut optimasi performa agar tetap responsif dan stabil dalam kondisi real-time. Proyek ini menunjukkan kemampuan dalam membangun pipeline computer vision real-time, optimasi pemrosesan frame, serta integrasi model AI dalam sistem berbasis live camera yang dapat dikembangkan untuk kebutuhan surveillance, monitoring otomatis, maupun smart system berbasis visual.',
    image: DectectionObjectVideo,
    documentation: [
      DectectionObjectVideo,
      Person,
      Bottle,
    ],
    date: 'Mei 2025',
    slug: 'Detection-object-open-camera',
    tags: ['Python', 'CV2', 'Numpy', 'AI'],
    fitures: ['Deteksi objek real-time melalui webcam', 'Pemrosesan frame video secara kontinu', 'Visualisasi Bounding Box dan Label secara langsung', 'Integrasi model Deep Learning untuk inference real-time', 'Optimasi performa untuk menjaga stabilitas FPS', 'Preprocessing dan post-processing frame terstruktur', 'Multi-object detection dalam satu frame', 'Arsitektur pipeline computer vision real-time', 'Implementasi efisien menggunakan OpenCV dan NumPy'],

  },
  {
    title: 'Highway Tracker',
    shortDesc: 'Sistem pendeteksi dan pelacakan kendaraan berbasis Computer Vision untuk monitoring lalu lintas secara real-time.',
    longDesc: 'Highway Tracker adalah sistem monitoring lalu lintas berbasis Computer Vision yang dirancang untuk mendeteksi dan melacak kendaraan secara real-time menggunakan OpenCV dan teknologi AI. Aplikasi ini mampu mengidentifikasi objek kendaraan dari video atau kamera langsung, menghitung jumlah kendaraan, serta memantau pergerakan objek di area tertentu. Sistem ini dikembangkan menggunakan Python dengan integrasi model deteksi objek untuk meningkatkan akurasi dan performa. Proyek ini bertujuan untuk memberikan solusi analisis lalu lintas yang efisien dan dapat dikembangkan lebih lanjut untuk kebutuhan smart city atau sistem pengawasan jalan raya.',
    image: HighwayTracker,
    documentation: [HighwayTracker],
    date: 'Mei 2025',
    slug: 'highway-tracker',
    tags: ['Python', 'CV2', 'AI'],
    fitures: ['Real-time Vehicle Detection using AI Model', 'Multi-object Tracking System', 'Vehicle Counting per Frame', 'Bounding Box & Label Visualization', 'Video Stream & Live Camera Integration', 'Traffic Flow Analysis', 'OpenCV-based Image Processing Pipeline', 'Model Integration for Object Classification', 'Scalable Architecture for Smart City Implementation'
    ]

  },
  {
    title: 'Aplikasi Epicurean',
    shortDesc: 'Aplikasi manajemen restoran berbasis mobile dengan sistem real-time database.',
    longDesc: 'Aplikasi mobile yang dibangun dengan React Native (Expo) dan Firebase untuk membantu pengelolaan restoran. Fitur mencakup autentikasi pengguna, database produk real-time, kategori menu, pencarian produk, dan tabel produk interaktif. Aplikasi ini dirancang untuk mempermudah pemilik restoran dalam mengelola menu dan produk mereka.',
    image: Epicurean,
    documentation: [
      Epicurean,
      // Tambahkan screenshot login, dashboard, dan fitur-fitur lainnya
    ],
    date: 'Januari 2025',
    slug: 'aplikasi-task-manager',
    pptLink: 'https://www.canva.com/design/DAGch778pTY/4jjiQC0giQMjXAaYwP7cNg/edit?utm_content=DAGch778pTY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tags: ['Expo', 'Firebase'],
    fitures: ['Real-time Database', 'User Authentication', 'Category Database', 'Search Product', 'Product Table']
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
    fitures: [' ']
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