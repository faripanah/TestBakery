import './App.css';
import Header from './components/Header/Header';
import PromoSection from './components/PromoSection/PromoSection';
import FeaturedTreats from './components/FeaturedTreats/FeaturedTreats';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Register from './Register';
//import Login from './Login';

function App() {
  return (
    <Router>
      <div className="container">
        <Header className="header" />
        <Hero className="hero" />
        <FeaturedTreats className="featured-treats" />
        <PromoSection className="promo-section" />
      </div>
      <Routes>
        {/*<Route path="/register" element={<Register />} />*/}
        {/*<Route path="/login" element={<Login />} />*/}
      </Routes>
    </Router>
  );
}

export default App;