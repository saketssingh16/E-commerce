const products = [
    {
      id: 1,
      name: "Sneakers",
      price: 100.99,
      image: "https://via.placeholder.com/250x150?text=Sneakers"
    },
    {
      id: 2,
      name: "Backpack",
      price: 39.99,
      image: "https://via.placeholder.com/250x150?text=Backpack"
    },
    {
      id: 3,
      name: "Headphones",
      price: 250.99,
      image: "https://via.placeholder.com/250x150?text=Headphones"
    }
  ];
  
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartSection = document.getElementById("cart-items");
  
  if (cartItems.length === 0) {
    cartSection.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach(cartItem => {
      const product = products.find(p => p.id === cartItem.id);
      const itemEl = document.createElement("div");
      itemEl.classList.add("product-card");
      itemEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Quantity: ${cartItem.quantity}</p>
        <p>Total: $${(product.price * cartItem.quantity).toFixed(2)}</p>
      `;
      cartSection.appendChild(itemEl);
    });
  }
  
  function checkout() {
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    window.location.reload();
  }
  