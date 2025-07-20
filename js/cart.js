document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function renderCart() {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0";
        return;
      }
  
      cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
          <div style="display:flex; align-items:center;">
            <img src="${item.image}" alt="${item.name}" />
            <div style="margin-left:1em;">
              <h3>${item.name}</h3>
              <p>₹${item.price} x ${item.quantity}</p>
            </div>
          </div>
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
      });
  
      cartTotal.textContent = total.toFixed(2);
    }
  
    window.removeFromCart = function(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
  
    renderCart();
  });
  