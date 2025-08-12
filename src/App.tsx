import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Sertifikat from './pages/Sertifikat';
import Project from './pages/Project';
import Profile from './pages/Profile';

import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/sertifikat" element={<Sertifikat />} />
            <Route path="/project" element={<Project />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;