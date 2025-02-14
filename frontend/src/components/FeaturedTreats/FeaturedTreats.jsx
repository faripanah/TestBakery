import React, { useState } from "react";
import "./FeaturedTreats.css";
import ProductCard from "../ProductCard/ProductCard"; // Importa el componente ProductCard
import Cart from "../cart/Cart";

// Importa imágenes
import treat1 from "../../assets/Images/treat1.jpg";
import treat2 from "../../assets/Images/treat2.jpg";
import treat3 from "../../assets/Images/treat3.jpg";
import treat4 from "../../assets/Images/treat4.png";
import treat5 from "../../assets/Images/treat5.png";
import treat6 from "../../assets/Images/treat6.png";

const FeaturedTreats = () => {
  const [cart, setCart] = useState([]);

  const treats = [
    { id: 1, name: "Puff Pastry", price: 10, image: treat1 },
    { id: 2, name: "Doughnuts", price: 12, image: treat2 },
    { id: 3, name: "Brownies", price: 12, image: treat3 },
    { id: 4, name: "Croissant", price: 8, image: treat4 },
    { id: 5, name: "Cheesecake", price: 14, image: treat5 },
    { id: 6, name: "Cinnamon Roll", price: 9, image: treat6 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="featured-section">
      <h2 className="featured-title">Featured Treats</h2>
      <div className="featured-grid">
        {treats.map((treat) => (
          <ProductCard
            key={treat.id}
            product={treat}
            onAddToCart={addToCart} // 
          />
        ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
};

export default FeaturedTreats;