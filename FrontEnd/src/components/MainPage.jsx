import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (

    <header className="header">
      
      <a href="#" className="logo">
        <img src = "src/assets/logo.jpg" alt="logo" />
      </a>

      <nav className="navbar">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/product">Products</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="icons">
        <div className="fas fa-search" id="search-button"></div>
        <div className="fas fa-shopping-cart" id="cart-button"></div>
        <div className="fas fa-bars" id="menu-button"></div>
      </div>

      <div className="search-form">
        <input type="search" id="search-box" placeholder="Search here..."/>
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
    </header>
  );
};

export default MainPage;
