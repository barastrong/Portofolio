import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
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

function App() {
  return (
    <BrowserRouter>
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