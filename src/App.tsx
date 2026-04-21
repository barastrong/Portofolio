import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
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
        </Route>
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;