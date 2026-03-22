const products = [
  {id:1, name:"Shoes", price:1999, img:"https://via.placeholder.com/200"},
  {id:2, name:"Watch", price:2999, img:"https://via.placeholder.com/200"},
  {id:3, name:"Headphones", price:1499, img:"https://via.placeholder.com/200"}
];

function loadProducts(){
  let container = document.getElementById("product-list");
  if(!container) return;

  container.innerHTML = "";

  products.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function searchProducts(){
  let input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(input) ? "block" : "none";
  });
}

function go(page){
  window.location.href = page;
}

window.onscroll = function(){
  document.getElementById("topBtn").style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
};

function topFunction(){
  window.scrollTo({top:0,behavior:'smooth'});
}

loadProducts();