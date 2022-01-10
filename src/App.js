import './reset.css';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  const [curPage, setCurPage] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useState(() => {
    window.addEventListener('resize', handleWindowResize);
    return function cleanup() {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home curPage={curPage} setCurPage={setCurPage} isMobile={isMobile} />} />
        <Route path="/about" element={<About curPage={curPage} setCurPage={setCurPage} isMobile={isMobile} />} />
        <Route path="/portfolio" element={<Portfolio curPage={curPage} setCurPage={setCurPage} isMobile={isMobile} />} />
        <Route path="/contact" element={<Contact curPage={curPage} setCurPage={setCurPage} isMobile={isMobile} />} />
      </Routes>
    </Router>
  );
}

export default App;
