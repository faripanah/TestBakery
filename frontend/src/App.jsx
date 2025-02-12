/*import Navbar from './components/Navbar'
import Hero from './components/Hero';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
         
    
    
    
    </div>
  )
}

export default App*/

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./products/product"; // Import Product Section
import "./App.css";


function App() {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      <Hero />   {/* Home Section */}
      <Product /> {/* Product Section (Now directly below Home) */}
    </div>
  );
}

export default App;
