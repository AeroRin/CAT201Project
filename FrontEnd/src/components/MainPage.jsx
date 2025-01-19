import axios from 'axios';
import { useEffect, useRef } from "react";
import "./MainPage.css";
import { closeAll } from "../utils/helpers";  // Adjust the import path to where closeAll is actually defined
import { Link } from 'react-router-dom';  // Add this import back if it's not there


const MainPage = () => {
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
          <Link to="/product" className="btn">
            Order Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default MainPage;
