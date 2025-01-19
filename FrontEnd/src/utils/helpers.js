export const closeAll = (navbar, searchForm, cartItems) => {
  if (navbar) navbar.classList.remove('active');
  if (searchForm) searchForm.classList.remove('active');
  if (cartItems) cartItems.classList.remove('active');
};
