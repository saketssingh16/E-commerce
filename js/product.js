// Reuse the same product list for now (can be moved to separate file or backend later)
const products = [
    {
      id: 1,
      name: "Sneakers",
      price: 59.99,
      image: "https://via.placeholder.com/250x150?text=Sneakers",
      description: "Stylish and comfy sneakers for daily wear."
    },
    {
      id: 2,
      name: "Backpack",
      price: 39.99,
      image: "https://via.placeholder.com/250x150?text=Backpack",
      description: "Durable backpack with multiple compartments."
    },
    {
      id: 3,
      name: "Headphones",
      price: 89.99,
      image: "https://via.placeholder.com/250x150?text=Headphones",
      description: "Wireless headphones with noise cancellation."
    }
  ];
  
  // Get product ID from URL
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  
  // Find the product
  const product = products.find(p => p.id === productId);
  
  // Display it
  const productSection = document.getElementById("product-details");
  
  if (product) {
    productSection.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>

    `;
  } else {
    productSection.innerHTML = `<p>Product not found.</p>`;
  }
  
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === productId);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  }
  