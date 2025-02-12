import './App.css';
import Header from './components/Header/Header';
import PromoSection from './components/PromoSection/PromoSection';
import FeaturedTreats from './components/FeaturedTreats/FeaturedTreats';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="container">
      <Header className="header" />
      <Hero className="hero" />
      <FeaturedTreats className="featured-treats" />
      <PromoSection className="promo-section" />
    </div>
  );
}

export default App;