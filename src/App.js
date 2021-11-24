// import logo from './logo.svg';
import './App.css';
import './reset.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
