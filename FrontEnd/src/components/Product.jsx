import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (

    <section class="products" id="product">
        
        <h1 class = "heading"> Our <span> Products </span></h1>

        <div className="box-container">

            <div className="box">
                <div className="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="src/assets/Products/Colombian.jpg.webp" alt="" />
                </div>
                <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price"> $15.99 <span> $20.99 </span></div>
                </div>
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="src/assets/Products/BrazilianSantos.webp" alt="" />
                </div>
                <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price"> $15.99 <span> $20.99 </span></div>
                </div>
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="src/assets/Products/Ethiopian.webp" alt="" />
                </div>
                <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price"> $15.99 <span> $20.99 </span></div>
                </div>
                
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="src/assets/Products/Glass.jpg" alt="" />
                </div>
                <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price"> $15.99 <span> $20.99 </span></div>
                </div>
                
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="src/assets/Products/Filter.webp" alt="" />
                </div>
                <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price"> $15.99 <span> $20.99 </span></div>
                </div>
                
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="src/assets/Products/Container.webp" alt="" />
                </div>
                <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price"> $15.99 <span> $20.99 </span></div>
                </div>
                
            </div>
        </div>
    </section>
  );
};

export default Product;
