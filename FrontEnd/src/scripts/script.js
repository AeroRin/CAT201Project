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