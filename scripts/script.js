// Script.js

var storage = window.localStorage;

//how to check before your initial fetch request to see if something is first in local storage
//alert(storage.getItem('user'));

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(array => storage.setItem('arrayInLS', JSON.stringify(array))); //downloads content of the url
});

var productList = document.getElementById("product-list");
var i = 1;
for (i = 0; i < 21; i++) {
  var product = document.createElement('product-item'); 
  var image = product.shadowRoot.getElementById('image'); 
  image.setAttribute('src', JSON.parse(retrievedObject)[i].image);
  var title = product.shadowRoot.getElementById('title');
  title.textContent = JSON.parse(retrievedObject)[i].title;
  var price = product.shadowRoot.getElementById('price');
  price.textContent = "$"+JSON.parse(retrievedObject)[i].price;

  productList.appendChild(product); 
}

/*var addToCartButton = shadowRoot.getElementById('buttons');
addToCartButton.addEventListener("click", incrementCart); 
var cartCount = document.getElementById("cart-count"); */

/*function incrementCart() {
  alert("hello");
  var currentCounts = cartCount.textContent; 
  cartCount.textContent = parseInt(currentCounts,10) + 1; 
}*/

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('arrayInLS');
//console.log('retrievedObject: ', JSON.parse(retrievedObject));

/*  fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

  //returns the promise from the fetch
  let response = await fetch(url);

  //if the promise is successful
  if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
  } else {
  alert("HTTP-Error: " + response.status);
  }*/
