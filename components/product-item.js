// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    super();
    //product-list is the shadow host
    //var productList = document.getElementById("product-list");

    var shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `
      <style> 
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
      </style>

      <li class="product">
        <img id="image" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
        <p id="title" class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
        <p id="price" class="price">$109.95</p>
        <button id="buttons" onclick="alert('Added to Cart!'); incrementCart();">Add to Cart</button>
      </li>
    `;

    
  
  }
  
}
var retrievedObject = localStorage.getItem('arrayInLS');
customElements.define('product-item', ProductItem);

var storage = window.localStorage; 

var cartBtn = shadowRoot.getElementById("buttons"); 
    var cartCount = document.getElementById("cart-count");

    /*function incrementCart() {
      if (cartBtn.textContent == "Add to Cart") {
        cartBtn.textContent = "Remove from Cart"; 
        var currentCounts = cartCount.textContent; 
        cartCount.textContent = parseInt(currentCounts,10) + 1; 
        alert("hello"); 
        //storage.setItem('inCart', JSON.parse(retrievedObject)[i].id); 
      }
      else if (cartBtn.textContent == "Remove from Cart") {
        var currentCounts = cartCount.textContent; 
        cartCount.textContent = parseInt(currentCounts,10) - 1; 
        cartBtn.textContent = "Add to Cart"; 
        alert("hi"); 
        //remove item id from local storage
      }
  

  }*/