import './Cart.css';
import React, { useEffect, useRef } from "react";

const Cart = ({ cart }) => {
  const lastItemRef = useRef(null);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth" }); // Desplázate al último elemento
    }
  }, [cart]);

  return (
    <div className="cart-section">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li
              key={item.id}
              ref={index === cart.length - 1 ? lastItemRef : null} // Ref para el último elemento
              className={index === cart.length - 1 ? "new-item" : ""} // Clase para el último elemento
            >
              {item.name} - €{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;