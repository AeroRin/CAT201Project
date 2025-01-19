import { ShoppingCart, Star, StarHalf } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { useState, useEffect } from 'react';

const Product = () => {
  const [cartItems, setCartItems] = useState([]);
  const BASE_URL = 'http://localhost:8080/Backend_Project/';

  const products = [
    {
      id: 1,
      name: "Colombian Coffee",
      price: 15.99,
      image: "./src/assets/Products/Colombian.jpg.webp",
      reviews: 65
    },
    {
      id: 2,
      name: "Brazilian Santos",
      price: 15.99,
      image: "./src/assets/Products/BrazilianSantos.webp",
      reviews: 65
    },
    {
      id: 3,
      name: "Ethiopian Coffee",
      price: 15.99,
      image: "./src/assets/Products/Ethiopian.webp",
      reviews: 65
    },
    {
      id: 4,
      name: "Glass Coffee",
      price: 15.99,
      image: "./src/assets/Products/Glass.jpg",
      reviews: 65
    },
    {
      id: 5,
      name: "Filter Coffee",
      price: 15.99,
      image: "./src/assets/Products/Filter.webp",
      reviews: 65
    },
    {
      id: 6,
      name: "Container Coffee",
      price: 15.99,
      image: "./src/assets/Products/Container.webp",
      reviews: 65
    }
  ];

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:8080/Backend_Project/ProductCartServlet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'addToCart',
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }),
      });
      
      const data = await response.json();
      if (data.status === 'success') {
        alert('Product added to cart successfully!');
      } else {
        alert(data.message || 'Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding product to cart. Please try again.');
    }
  };

  return (
    <div className='py-8 lg:py-16'>
      <div className='container'>
        <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-10'>
          {products.map((product) => (
            <div className='group' key={product.id}>
              <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-auto aspect-square object-cover'
                />
                <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className='!bg-[#DB4444] text-white'
                  >
                    <ShoppingCart /> Add To Cart
                  </Button>
                </div>
              </div>
              <div className='space-y-3 text-xl'>
                <h6>{product.name}</h6>
                <p className='text-[#DB4444]'>${product.price}</p>
                <div className='flex items-center gap-1'>
                  <div className='flex items-center gap-1'>
                    <Star className='text-[#FFAD33] w-5 h-5' />
                    <Star className='text-[#FFAD33] w-5 h-5' />
                    <Star className='text-[#FFAD33] w-5 h-5' />
                    <Star className='text-[#FFAD33] w-5 h-5' />
                    <StarHalf className='text-[#FFAD33] w-5 h-5' />
                  </div>
                  <span className='text-lg'>({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;