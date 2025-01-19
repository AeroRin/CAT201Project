import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toggleNavbar, toggleSearchForm, toggleCart, closeAll } from "../scripts/script.js"; // Import the functions
import "./About.css";

const About = () => {
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
    <>
    <section className="about" id="about">

        <h1 className="heading"> <span>about</span> us </h1>

        <div className="row">

            <div className="image">
                <img src="src/assets/about.jpg" alt="" />
            </div>

            <div className="content">
                <h3>What makes our coffee special?</h3>
                <p>Our passion for coffee drives us to create unique blends that stand out. Using only the highest-quality coffee powder, we ensure every sip is a journey of bold flavors and smooth textures. We don’t just make coffee; we create moments of joy, one cup at a time. 
                </p>
                <p>Try now and experience the difference!</p>
                <a href="#" className="btn">Learn More</a>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;