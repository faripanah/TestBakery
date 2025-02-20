import './App.css';
import Header from './components/Header/Header';
import PromoSection from './components/PromoSection/PromoSection';
import FeaturedTreats from './components/FeaturedTreats/FeaturedTreats';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDisplay from './components/productsDisplay/ProductDisplay'; // Asegúrate de importar ProductDisplay
import Cart from './components/cart/Cart'; // Importa el componente Cart
import { useState } from 'react';
import { CartProvider } from './components/context/CartContext'; // Asegúrate de importar CartProvider

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="container">
          <Header />
          <Hero />
          <Routes>
            <Route path="/" element={<FeaturedTreats setShowCart={setShowCart} />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
          </Routes>
          {showCart && <Cart setShowCart={setShowCart} />}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;