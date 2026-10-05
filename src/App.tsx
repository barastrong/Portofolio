import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import { useEffect } from 'react';
import Home from './pages/Home';
import Sertifikat from './pages/Sertifikat';
import Project from './pages/Project';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import Chatbot from './components/Chatbot';
import './css/App.css';

const MainLayout = () => (
  <div className="App">
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

const NotFound = () => (
  <div className="notfound">
    <p className="notfound-code">404</p>
    <h1 className="notfound-title">Halaman Tidak Ditemukan</h1>
    <p className="notfound-text">
      Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
    </p>
    <Link to="/" className="btn btn-primary">Kembali ke Home</Link>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;