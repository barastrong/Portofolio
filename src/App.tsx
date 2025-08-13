import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Sertifikat from './pages/Sertifikat';
import Project from './pages/Project';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import './css/App.css';
import Chatbot from './components/Chatbot';

const MainLayout = () => (
  <div className="App">
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;