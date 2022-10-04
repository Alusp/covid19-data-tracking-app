import { Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/CountryDetails" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
