import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toggleNavbar, toggleSearchForm, toggleCart, closeAll } from "../scripts/script.js"; // Import the functions
import axios from "axios";
import "./MainPage.css";


const MainPage = () => {
  const navbarRef = useRef(null);
  const searchFormRef = useRef(null);
  const cartItemsRef = useRef(null);

   // State to store backend data and errors
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   useEffect(() => {

    // Close all elements on scroll
    window.onscroll = () => {
      closeAll(navbarRef.current, searchFormRef.current, cartItemsRef.current);
    };
  
    // Fetch data from the backend API
    axios
      .get("http://localhost:8080/Backend_Project/api/data", {  // Updated URL
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(`Failed to load data from the server: ${err.message}`);  // More detailed error
      });
  
    return () => {
      // Cleanup function to remove the scroll listener
      window.onscroll = null;
    };
   }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (token) {
          const response = await axios.get('/api/login', {
            baseURL: 'http://localhost:8080/Backend_Project',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          if (response.data.isLoggedIn) {
            // User is logged in
            console.log('User is logged in:', response.data.user);
          } else {
            // User is not logged in
            console.log('User is not logged in');
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <>
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

      <section className="home" id="home">
        <div className="content">
          <h3>fresh coffee in the morning</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
          <a href="#" className="btn">get yours now</a>
        </div>
      </section>

      {/* Display fetched data */}
      <section className="backend-data">
        {error ? (
          <div className="error">Error: {error}</div>
        ) : !data ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2>Data from Backend:</h2>
            {data.message && <p>Message: {data.message}</p>}
            {data.status && <p>Status: {data.status}</p>}
          </div>
        )}
      </section>
    </>
  );
};

export default MainPage;
