import React, { useContext, useState } from 'react';
import logo from '../../assets/Images/bakerylogo.png';
import './Header.css';
import UserForm from '../userForm/UserForm';
import Cart from "../cart/Cart";
import { CartContext } from "../context/CartContext";

const Header = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCart, setShowCart] = useState(false); 

  const { cartItems } = useContext(CartContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Bakery Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#find-store">Find Store</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <i className="fas fa-search" title="Search"></i>

       {/* ✅ Cart Icon - Toggles Cart Visibility */}
       <i className="fas fa-shopping-cart" onClick={() => {
            console.log("🛒 Cart Icon Clicked!"); 
            setShowCart(!showCart);
          }} title="Cart">
            ({cartItems.length})
          </i>
            
          
          
        <i className="fas fa-user" title="User"></i>
        <button onClick={openModal} className="register-button">
          Register
        </button>
      </div>

      {/* Mostrar UserForm si isModalOpen es true */}
      {isModalOpen && <UserForm onClose={closeModal} />}
      

       {/* ✅ Mostrar carrito si showCart es true */}
       {showCart && <Cart setShowCart={setShowCart} />} 
      
    </header>
  );
};

export default Header;