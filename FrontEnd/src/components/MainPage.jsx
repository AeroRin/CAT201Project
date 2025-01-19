import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toggleNavbar, toggleSearchForm, toggleCart, closeAll } from "../scripts/script.js"; // Import the functions
import "./MainPage.css";


const MainPage = () => {
  const navbarRef = useRef(null);
  const searchFormRef = useRef(null);
  const cartItemsRef = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (token) {
          const response = await axios.get('/LoginServlet', {  // Changed from '/api/login'
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
      <section className="home" id="home">
        <div className="content">
          <h3>Start your day </h3>
          <h3>With a fresh cup of coffee</h3>
          <p>Good ideas starts with brainstorming great ideas starts with coffee</p>
          <a href="#" className="btn">Order Now</a>
        </div>
      </section>
    </>
  );
};

export default MainPage;
