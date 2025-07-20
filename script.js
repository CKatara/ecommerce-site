let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${productName} added to cart!`);
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

// Update cart count on page load
updateCartCount();
