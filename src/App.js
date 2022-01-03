// import logo from './logo.svg';
import './reset.css';
import './App.css';
// import Nav from './components/Nav';
import Home from './components/Home';
import { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Contact from './components/Contact';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';

function App() {
  const [curPage, setCurPage] = useState('home');

  return (
    <Router>
      <Routes>
        <Route exact path="/react-portfolio/" element={<Home curPage={curPage} setCurPage={setCurPage} />} />
        <Route path="/react-portfolio/about" element={<About curPage={curPage} setCurPage={setCurPage} />} />
        <Route path="/react-portfolio/portfolio" element={<Portfolio curPage={curPage} setCurPage={setCurPage} />} />
        <Route path="/react-portfolio/contact" element={<Contact curPage={curPage} setCurPage={setCurPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
