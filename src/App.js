import { Routes, Route } from 'react-router-dom';
// import './index.css';
import Dashboard from './components/Dashboard';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/details/:id" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
