import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to MainPage</h1>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default MainPage;
