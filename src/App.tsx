import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';

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
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;