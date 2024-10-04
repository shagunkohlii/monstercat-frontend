import './App.css';
import Home from './components/Home/Home';
import Brands from './components/Brands/Brands';
import Featured from './components/Featured/Featured';

function App() {
  return (
    <>
      <img
        src="https://cdn.monstercat.com/monstercat-logo.webp"
        alt="Logo"
        className="fixed-logo"
      />
      <Home />
      <Brands />
      <Featured />
    </>
  );
}

export default App;
