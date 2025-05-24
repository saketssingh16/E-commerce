// Sample product data (you can later fetch from a backend or JSON file)
const products = [
    {
      id: 1,
      name: "Sneakers",
      price: 59.99,
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
      price: 89.99,
      image: "https://via.placeholder.com/250x150?text=Headphones"
    }
  ];
  
  // Render products into the HTML
  const productGrid = document.getElementById("products");
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="viewProduct(${product.id})">View Product</button>
    `;
    productGrid.appendChild(card);
  });
  
  // Redirect to product.html with product id
  function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
  }
  