// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let searchForm = document.querySelectorAll('.search-form');

// document.querySelector('#search-button').onclick = () => {
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelectorAll('.cart-items-container');

// document.querySelector('#cart-button').onclick = () => {
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// window.onscroll = () => {
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

export const toggleNavbar = (navbar) => {
    navbar.classList.toggle('active');
  };
  
  export const toggleSearchForm = (searchForm) => {
    searchForm.classList.toggle('active');
  };
  
  export const toggleCart = (cartItem) => {
    cartItem.classList.toggle('active');
  };
  
  export const closeAll = (navbar, searchForm, cartItem) => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
  };