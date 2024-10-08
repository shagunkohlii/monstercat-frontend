import './App.css';
import Home from './components/Home/Home';
import Brands from './components/Brands/Brands';
import Featured from './components/Featured/Featured';
import Navbar from './components/Nav/Navbar';
import Section from './components/Section/Section';

function App() {
  return (
    <>
      <img
        src="https://cdn.monstercat.com/monstercat-logo.webp"
        alt="Logo"
        className="fixed-logo"
      />
      <Navbar />

      <Home />
      <Brands />
      <Featured />
      <Section />
    </>
  );
}

export default App;
