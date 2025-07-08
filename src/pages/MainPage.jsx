import { Routes, Route } from 'react-router-dom';
import Home from '../components/Sections/Home';
import About from '../components/Sections/About';
import Skills from '../components/Sections/Skills';
import Education from '../components/Sections/Education';
import Projects from '../components/Sections/Projects';
import Contact from '../components/Sections/Contact';
import Social from '../components/Sections/Social';
import Header from '../components/Layout/Header';
import '../assets/styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;