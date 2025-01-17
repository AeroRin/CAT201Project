import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toggleNavbar, toggleSearchForm, toggleCart, closeAll } from "../scripts/script.js"; // Import the functions
import "./Product.css";

const Product = () => {

  const navbarRef = useRef(null);
  const searchFormRef = useRef(null);
  const cartItemsRef = useRef(null);
  
  useEffect(() => {
    // Close all elements on scroll
    window.onscroll = () => {
      closeAll(navbarRef.current, searchFormRef.current, cartItemsRef.current);
    };

    return () => {
      // Cleanup function to remove the scroll listener
      window.onscroll = null;
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src = "src/assets/logo.jpg" alt="logo" />
      </a>

      <nav ref={navbarRef} className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="icons">
        <div className="fas fa-search" id="search-button" onClick={() => toggleSearchForm(searchFormRef.current)}></div>
        <div className="fas fa-shopping-cart" id="cart-button" onClick={() => toggleCart(cartItemsRef.current)}></div>
        <div className="fas fa-bars" id="menu-btn" onClick={() => toggleNavbar(navbarRef.current)}></div> 
        {/* Some reason that menu-button doesn't work but menu-btn works */}
      </div>

      <div ref={searchFormRef} className="search-form">
        <input type="search" id="search-box" placeholder="Search here..."/>
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div className="cart-items-container" ref={cartItemsRef}>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="src/assets/cart-item-1.jpg" alt="product1"/>
          <div className="content">
            <h3>Product 1</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="src/assets/cart-item-2.jpg" alt="product2"/>
          <div className="content">
            <h3>Product 2</h3>
            <div className="price">$18.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="src/assets/cart-item-3.jpg" alt="product3"/>
          <div className="content">
            <h3>Product 3</h3>
            <div className="price">$16.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="src/assets/cart-item-24.jpg" alt="product4"/>
          <div className="content">
            <h3>Product 4</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <a href="#" className="button">checkout now</a>
      </div>
    </header>
  );
};

export default Product;
