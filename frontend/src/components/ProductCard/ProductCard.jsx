import React from "react";
import "./ProductCard.css"; // Estilos para la tarjeta

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">€{price}</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;