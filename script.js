document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "Rado Centrix Automatic Diamonds 30mm ", price: "Rs:3,53,000", image: "rado.jpg" },
    { name: "Analog Black Fossil Men Watch", price: "Rs:4,999", image: "fossil.jpg" },
    { name: "fossil unisex black dial watch", price: "Rs:20,599", image: "black.jpg" },
    { name: "titan classic round dial ", price: "Rs:8,999", image: "titan.jpg"},
    { name: "titan raga", price: "Rs:9,390", image: "raga.webp" },
   
    ];
    
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   0
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });