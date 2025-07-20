document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "T-Shirt", price: 499, image: "images/tshirt.jpg" },
    { name: "Laptop", price: 54999, image: "images/laptop.jpg" },
    { name: "Book", price: 299, image: "images/book.jpg" },
    { name: "Headphones", price: 1999, image: "images/headphones.jpg" },
  ];

  const productList = document.getElementById("products-list");
  if (productList) {
    products.forEach((product, index) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }

  window.addToCart = function(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };
});