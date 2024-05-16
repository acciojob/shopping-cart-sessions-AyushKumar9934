// This is the boilerplate code given for you
// You can modify this code
// Product data
// const products = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
//   { id: 4, name: "Product 4", price: 40 },
//   { id: 5, name: "Product 5", price: 50 },
// ];

// // DOM elements
// const productList = document.getElementById("product-list");

// // Render product list
// function renderProducts() {
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
//     productList.appendChild(li);
//   });
// }

// // Render cart list
// function renderCart() {}

// // Add item to cart
// function addToCart(productId) {}

// // Remove item from cart
// function removeFromCart(productId) {}

// // Clear cart
// function clearCart() {}

// // Initial render
// renderProducts();
// renderCart();
// const products = [
//     { id: 1, name: "Product 1", price: 10 },
//     { id: 2, name: "Product 2", price: 20 },
//     { id: 3, name: "Product 3", price: 30 },
//     { id: 4, name: "Product 4", price: 40 },
//     { id: 5, name: "Product 5", price: 50 },
//   ];
  
//   // DOM elements
//   const productList = document.getElementById("product-list");
  
//   // Render product list
//   function renderProducts() {
//     products.forEach((product) => {
//       const li = document.createElement("li");
//       li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})" class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
//       productList.appendChild(li);
//     });
//   }
  
//   // Render cart list
//   let allprodtoBuyid=[];
//   const renderlist=document.getElementById("cart-list");
//   function renderCart() {
//     renderlist.innerHTML="";
//    allprodtoBuyid.forEach((productid)=>{
//     let producttobeadd=products.filter((element)=>{ return element.id==productid;})
//     const li=document.createElement("li");
//     li.innerHTML=`${producttobeadd[0].name} - $${producttobeadd[0].price} <button onclick="removeFromCart(${producttobeadd[0].id})" class="add-to-cart-btn" data-id="${producttobeadd[0].id}">Remove From Cart</button>`
//     renderlist.appendChild(li);
//    })
//   }
  
//   // Add item to cart
//   function addToCart(productId) {
//     allprodtoBuyid.push(productId);
//     sessionStorage.setItem("sessionprod",JSON.stringify(allprodtoBuyid));
//     renderCart();
//   }
  
//   // Remove item from cart
//   function removeFromCart(productId) {
//     console.log("we are inside the removeFromCart with id",productId);
//     let allcartprod=JSON.parse(sessionStorage.getItem("sessionprod"));
    
//     allcartprod=allcartprod.filter((element)=>{
// return element!=productId;
//     })
    
//     sessionStorage.setItem("sessionprod",JSON.stringify(allcartprod));
//     allprodtoBuyid=allcartprod;
    
//     renderCart();
//   }
  
//   // Clear cart
//   function clearCart() {
//     sessionStorage.clear();
//     allprodtoBuyid=[];
//     renderCart();

//   }
  
//   // Initial render
//   document.getElementById("clear-cart-btn").addEventListener("click",clearCart);
//   renderProducts();
//   renderCart();
//   if (sessionStorage.getItem("sessionprod")) {
//     // Load the items from the sessionStorage
//     allprodtoBuyid = JSON.parse(sessionStorage.getItem("sessionprod"));
//     // Render the cart with the loaded items
//     renderCart();
//   } else {
//     // If there are no items in the sessionStorage, render the cart normally
//     renderCart();
//   }



const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})" class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
let allprodtoBuyid=[];
const renderlist=document.getElementById("cart-list");
function renderCart() {
  renderlist.innerHTML="";
  allprodtoBuyid.forEach((productid)=>{
    let producttobeadd=products.filter((element)=>{ return element.id==productid;})
    const li=document.createElement("li");
    li.innerHTML=`${producttobeadd[0].name} - $${producttobeadd[0].price} <button onclick="removeFromCart(${producttobeadd[0].id})" class="add-to-cart-btn" data-id="${producttobeadd[0].id}">Remove From Cart</button>`
    renderlist.appendChild(li);
  })
}

// Add item to cart
function addToCart(productId) {
  allprodtoBuyid.push(productId);
  sessionStorage.setItem("cart", JSON.stringify(allprodtoBuyid)); // changed "sessionprod" to "cart"
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  console.log("we are inside the removeFromCart with id",productId);
  let allcartprod=JSON.parse(sessionStorage.getItem("cart")); // changed "sessionprod" to "cart"
  
  allcartprod=allcartprod.filter((element)=>{
    return element!=productId;
  })
  
  sessionStorage.setItem("cart", JSON.stringify(allcartprod)); // changed "sessionprod" to "cart"
  allprodtoBuyid=allcartprod;
  
  renderCart();
}

// Clear cart
function clearCart() {
  sessionStorage.clear();
  allprodtoBuyid=[];
  renderCart();
}

// Initial render
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);
renderProducts();

// Check if there are any saved items in sessionStorage
if (sessionStorage.getItem("cart")) { // changed "sessionprod" to "cart"
  allprodtoBuyid = JSON.parse(sessionStorage.getItem("cart")); // changed "sessionprod" to "cart"
}

renderCart();








